import chalk from "chalk";
import type { Envs, ModuleConfig, WebComponentBuildConfig } from './types.ts';
import * as path from "@std/path";
import { type OutputOptions, rolldown, type ModuleFormat, type RolldownOutput, type RolldownOptions, watch, type RolldownWatcher } from 'rolldown';
import rollupReplace from "@rollup/plugin-replace";
import svg from "rollup-plugin-svg";
import gzipPlugin from "rollup-plugin-gzip";
import brotli from "rollup-plugin-brotli";
import terser from "@rollup/plugin-terser";
import { Features } from 'lightningcss';
import { lightningCssString } from "./plugins/lightningcss-string.ts";
import { dts } from 'rolldown-plugin-dts';
export class WebComponentBuilder {
  envs: Envs = {
    nodeEnv: "production"
  }
  constructor(envs?: Envs) {
    if (envs) {
      this.envs = envs;
    }
  }
  async buildAllComponents(webComponentList: WebComponentBuildConfig[]) {
    for (const component of webComponentList) {
      await this.buildComponent(component);
    }
  }
  async buildComponent(componentBuildConfig: WebComponentBuildConfig, watchMode = false): Promise<PromiseSettledResult<RolldownOutput>[] | undefined> {
    const moduleConfig = this.#createModuleConfig(componentBuildConfig);
    console.log(`start building ${componentBuildConfig.name}`);
    const inputOptions = this.#getInputOption(moduleConfig, 'es', watchMode);
    const cjsInputOptions = this.#getInputOption(moduleConfig, 'cjs', watchMode);
    const umdInputOptions = this.#getInputOption(moduleConfig, 'umd', watchMode);
    //
    const esOutputOptions = this.#getOutputOption(moduleConfig, "es");
    const cjsOutputOptions = this.#getOutputOption(moduleConfig, "cjs");
    const umdOutputOptions = this.#getOutputOption(moduleConfig, "umd");
    try {
      if (watchMode) {
        this.#buildAndWatchModule(inputOptions, esOutputOptions, moduleConfig);
      } else {
        const p1 = this.buildModule(inputOptions, esOutputOptions, "ES");
        await p1;
        const p2 = this.buildModule(cjsInputOptions, cjsOutputOptions, "CJS");
        await p2;
        const p3 = this.buildModule(umdInputOptions, umdOutputOptions, "UMD");
        await p3;
        const buildPromises = [p1, p2, p3];
        if (this.#isTypeScriptModule(moduleConfig)) {
          const dtsInputOptions = this.#getDtsInputOption(moduleConfig);
          const dtsOutputOptions = this.#getDtsOutputOption(moduleConfig);
          const p4 = this.buildModule(dtsInputOptions, dtsOutputOptions, "DTS");
          buildPromises.push(p4);
        }
        return await Promise.allSettled(buildPromises);
      }
    } catch (e) {
      console.error(componentBuildConfig.name + ' build failed');
      return Promise.reject(e);
    }
  }
  #createModuleConfig(inputConfig: WebComponentBuildConfig): ModuleConfig {
    const dir = inputConfig.dir ?? Deno.cwd();

    const tsConfigPath = inputConfig.tsConfigPath ? path.resolve(Deno.cwd(), inputConfig.tsConfigPath) : path.resolve(dir, "tsconfig.json");
    return {
      ...inputConfig,
      outputPathParsed: path.parse(inputConfig.outputPath),
      dir,
      tsConfigPath,
      globals: inputConfig.globals ?? {},
    };
  }
  buildModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, type: "ES" | "CJS" | "UMD" | "DTS"): Promise<RolldownOutput> {
    //build module with rollup without any watch or something
    return new Promise((resolve, reject) => {
      const bundlePromise = rolldown(inputOptions);
      bundlePromise.then(function (bundle) {
        bundle.write(outputOptions).then(function (output) {
          console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ', chalk.bgBlue(` ${type} `), ' ', chalk.bgMagenta(' DONE '));
          bundle.close().then(() => {
            resolve(output);
          });
        });
      }).catch((e) => {
        console.error(e.message);
        reject(e);
      });
    });
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
  #getInputOption(module: ModuleConfig, format: "es" | "cjs" | "umd" = "es", watchMode: boolean): RolldownOptions {

    // remove filename and lib folder name result in modules/jb-input
    let externalList = module.external || [];
    if (
      format == "umd" &&
      Array.isArray(module.umdIncludes) &&
      externalList.length > 0
    ) {
      externalList = externalList.filter(
        (el) => !module.umdIncludes?.includes(el)
      );
    }
    const env = this.envs.nodeEnv;
    let plugins = [
      svg({
        base64: false,
      }),
      lightningCssString({
        minify: !watchMode,
        sourceMap: true,
        include: Features.Nesting | Features.CustomMediaQueries | Features.MediaRangeSyntax | Features.ColorFunction | Features.LightDark,
        drafts: {
          customMedia: true,
        },
      }),
      rollupReplace({
        "process.env.NODE_ENV": `"${env}"`,
        preventAssignment: true,
      }),
    ];
    if (!watchMode) {
      //watch mode is for development and dont need minification
      plugins = [
        ...plugins,
        terser({ compress: { drop_debugger: watchMode ? false : true } }),
        gzipPlugin(),
        brotli(),];
    }
    const inputOptions: RolldownOptions = {
      input: path.join(module.path),
      external: externalList,
      plugins: plugins,
    };
    return inputOptions;
  }
  #isTypeScriptModule(module: WebComponentBuildConfig) {
    const url = path.parse(module.path);
    return url.ext === '.ts';
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
      dir: module.outputPathParsed.dir,
      format: 'es',
      sourcemap: false,
    };
  }
  #getOutputOption(module: ModuleConfig, format: ModuleFormat = "es"): OutputOptions {
    const outputFileName = `${module.outputPathParsed.name}${format == 'es' ? '' : ('.' + format)}${module.outputPathParsed.ext}`;
    const outputOptions = {
      // core output options
      sourcemap: true,
      dir: module.outputPathParsed.dir,
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module, umd for umd package
    };
    if (format == "umd") {
      //@ts-ignore package is not standard
      outputOptions.name = module.umdName;
      //@ts-ignore package is not standard
      outputOptions.globals = module.globals;
    }
    return outputOptions;
  }
}
