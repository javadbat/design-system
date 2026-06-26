import * as path from "@std/path";
//rollup
import { type OutputOptions, rolldown, type RolldownOptions, watch, type RolldownWatcher, type InputOptions } from 'rolldown';
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import rollupReplace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
//config
import type { Envs, ModuleConfig, ReactComponentBuildConfig } from './types.ts';
import chalk from "chalk";
import { Features } from 'lightningcss';
import { lightningCssString } from "./plugins/lightningcss-string.ts";
import { dts } from 'rolldown-plugin-dts';
export class ReactComponentBuilder {
  envs: Envs = {
    nodeEnv: "production"
  }
  async buildAllComponent(reactComponentList: ReactComponentBuildConfig[]) {
    for (const reactComponent of reactComponentList) {
      await this.buildComponent(reactComponent);
    }
  }
  async buildComponent(component: ReactComponentBuildConfig, watch = false, generateTypes = true): Promise<void> {
    const moduleConfig = this.#createModuleConfig(component);
    console.log(`start building ${component.name}`);
    const inputOptions = this.#getInputOption(moduleConfig, watch);
    const esOutputOptions = this.#getOutputOption(moduleConfig, "es");
    const cjsOutputOptions = this.#getOutputOption(moduleConfig, "cjs");
    const umdOutputOptions = this.#getOutputOption(moduleConfig, "umd");
    try {
      if (watch) {
        this.#buildAndWatchModule(inputOptions, esOutputOptions, moduleConfig);
      } else {
        await this.buildModule(inputOptions, esOutputOptions, "ES");
        await this.buildModule(inputOptions, cjsOutputOptions, "CJS");
        await this.buildModule(inputOptions, umdOutputOptions, "UMD");
        if (generateTypes && this.#isTypeScriptModule(moduleConfig)) {
          const dtsInputOptions = this.#getDtsInputOption(moduleConfig);
          const dtsOutputOptions = this.#getDtsOutputOption(moduleConfig);
          await this.buildModule(dtsInputOptions, dtsOutputOptions, "DTS");
        }
      }
    } catch (e) {
      console.error(component.name + ' build failed');
      if (Error.isError(e)) { console.error(e.message); }

    }
  }
  buildModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, type: "ES" | "CJS" | "UMD" | "DTS"): Promise<void> {
    //build module with rollup without any watch or something
    return new Promise<void>((resolve, reject) => {
      const bundlePromise = rolldown(inputOptions);
      bundlePromise
        .then(function (bundle) {

          bundle.write(outputOptions).then((output) => {
            console.log(
              chalk.greenBright(output.output[0].facadeModuleId),
              " ",
              chalk.bgBlue(type),
              " ",
              chalk.bgMagenta(" DONE ")
            );
            bundle.close().finally(() => {
              resolve();
            });
          }).catch((e) => {
            console.log(e);
            reject(e);
            bundle.close();
          });
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  }
  #createModuleConfig(inputConfig: ReactComponentBuildConfig): ModuleConfig {
    const dir = inputConfig.dir ?? Deno.cwd();
    return {
      ...inputConfig,
      outputPathParsed: path.parse(inputConfig.outputPath),
      dir,
      tsConfigPath: inputConfig.tsConfigPath ?? path.join(dir, "tsconfig.json"),
      globals: inputConfig.globals ?? {},
    };
  }
  #buildAndWatchModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, moduleConfig: ModuleConfig) {
    return new Promise<void>((resolve, reject) => {
      const watcher = watch({
        ...inputOptions,
        output: outputOptions,
        watch: {
          exclude: moduleConfig.external
        }
      });
      const onBuilt = async () => {
        if (this.#isTypeScriptModule(moduleConfig)) {
          const dtsInputOptions = this.#getDtsInputOption(moduleConfig);
          const dtsOutputOptions = this.#getDtsOutputOption(moduleConfig);
          await this.buildModule(dtsInputOptions, dtsOutputOptions, "DTS");
        }
        resolve();
      }
      this.#watcherEventHandler(watcher, onBuilt, reject);
    });
  }
  #watcherEventHandler(watcher: RolldownWatcher, resolver: () => void, rejecter: () => void) {
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_START') {
        console.log('Bundling...');
      } else if (event.code === 'BUNDLE_END') {
        console.log(chalk.green(event.output + '\n' + 'Bundled in ' + event.duration + 'ms.'));
        resolver();
      } else if (event.code === 'ERROR') {
        console.log(event);

        console.error(chalk.red((event as any).error));
        rejecter();
      }
      //rollup need to be closed on each result to free up space
      if ((event as any).result) {
        (event as any).result.close();
      }
    });
  }
  #getInputOption(module: ModuleConfig, watchMode: boolean): InputOptions {
    const externalList = module.external || [];
    const swcPlugin = swc(defineRollupSwcOption(
      {

        tsconfig: module.tsConfigPath,
        exclude: ["node_modules/**", ...externalList],
        isModule: true,
        sourceMaps: true,
        inputSourceMap: false,

        jsc: {
          parser: {
            syntax: 'typescript', // or 'typescript' if using TypeScript
          },
          target: 'es2022', // Target JavaScript version
          transform: {
            react: {
              runtime: 'classic', // Enable if using React
            },
          },
        },
        minify: false,
      })
    );
    const plugins = [
      rollupReplace({
        "process.env.NODE_ENV": `"${this.envs.nodeEnv}"`,
        preventAssignment: true,
      }),
      lightningCssString({
        minify: !watchMode,
        sourceMap: true,
        include: Features.Nesting | Features.CustomMediaQueries | Features.MediaRangeSyntax | Features.ColorFunction | Features.LightDark,
        drafts: {
          customMedia: true,
        },
      }),
    ];
    plugins.push(swcPlugin);
    if (!watchMode) {
      plugins.push(terser({ compress: { drop_debugger: true } }));
    }
    const inputOptions = {
      input: path.join(module.path),
      external: module.external || [],
      plugins: plugins,
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  #getOutputOption(module: ModuleConfig, format: "umd" | "es" | "cjs"): OutputOptions {

    const outputFileName = `${module.outputPathParsed.name}${format == 'es' ? '' : ('.' + format)}${module.outputPathParsed.ext}`;
    const outputOptions = {
      // core output options
      sourcemap: true,
      dir: path.join(module.outputPathParsed.dir),
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module
    };
    if (format == "umd") {
      //@ts-ignore
      outputOptions.name = module.umdName;
      //@ts-ignore
      outputOptions.globals = module.globals || {};
    }
    return outputOptions;
  }
  #isTypeScriptModule(module: ReactComponentBuildConfig) {
    const url = path.parse(module.path);
    return url.ext === ".ts" || url.ext == ".tsx";
  }
  #getDtsInputOption(module: ModuleConfig): RolldownOptions {
    return {
      input: path.join(module.path),
      external: module.external || [],
      plugins: [
        dts({
          emitDtsOnly: true,
          resolver: 'tsc',
          tsconfig: module.tsConfigPath,
        }),
      ],
    };
  }
  #getDtsOutputOption(module: ModuleConfig): OutputOptions {
    return {
      dir: path.join(module.outputPathParsed.dir),
      format: 'es',
      sourcemap: false,
    };
  }
}
export default ReactComponentBuilder;
