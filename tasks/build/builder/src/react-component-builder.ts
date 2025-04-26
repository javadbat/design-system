import * as path from "@std/path";
//rollup
import { type OutputOptions, rolldown, type ModuleFormat, type RolldownOutput, type RolldownOptions, watch, type RolldownWatcher, InputOptions } from 'rolldown';
// import { babel as rollupBabel } from "npm:@rollup/plugin-babel@6.0.4";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import sass from "rollup-plugin-sass";
// import commonjs from "npm:@rollup/plugin-commonjs@28.0.2";
import rollupJson from "npm:@rollup/plugin-json@6.1.0";
import rollupReplace from "npm:@rollup/plugin-replace@6.0.2";
//config
import type { Envs, ModuleConfig, ReactComponentBuildConfig } from './types.ts';
import chalk from "npm:chalk@5.4.1";
import typescript from "npm:@rollup/plugin-typescript@12.1.2";

// import { DEFAULT_EXTENSIONS } from "npm:@babel/core@7.26.7";
export class ReactComponentBuilder {
  envs: Envs = {
    nodeEnv: "production"
  }
  async buildAllComponent(reactComponentList: ReactComponentBuildConfig[]) {
    for (const reactComponent of reactComponentList) {
      await this.buildComponent(reactComponent, false, false);
    }
  }
  async buildComponent(component: ReactComponentBuildConfig, watch = false, useTypescript = true): Promise<void> {
    const moduleConfig = this.#createModuleConfig(component);
    console.log(`start building ${component.name}`);
    const inputOptions = this.#getInputOption(moduleConfig, watch, useTypescript);
    const esOutputOptions = this.#getOutputOption(moduleConfig, "es");
    const cjsOutputOptions = this.#getOutputOption(moduleConfig, "cjs");
    const umdOutputOptions = this.#getOutputOption(moduleConfig, "umd");
    try {
      if (watch) {
        this.#buildAndWatchModule(inputOptions, esOutputOptions, component);
      } else {
        await this.buildModule(inputOptions, esOutputOptions, "ES");
        await this.buildModule(inputOptions, cjsOutputOptions, "CJS");
        await this.buildModule(inputOptions, umdOutputOptions, "UMD");
      }
    } catch (e: any) {
      console.error(component.name + ' build failed');
      console.error(e.message);
    }
  }
  buildModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, type: "ES" | "CJS" | "UMD"): Promise<void> {
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
            bundle.close().finally(()=>{
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
  #buildAndWatchModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, module: ReactComponentBuildConfig) {
    return new Promise<void>((resolve, reject) => {
      const watcher = watch({
        ...inputOptions,
        output: outputOptions,
        watch: {
          exclude: module.external
        }
      });
      this.#watcherEventHandler(watcher, resolve, reject);
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
  #getInputOption(module: ModuleConfig, watchMode: boolean, useTypescript: boolean): InputOptions {
    const externalList = module.external || [];
    const swcPlugin = swc(defineRollupSwcOption(
      {

        tsconfig: module.tsConfigPath,
        exclude: ["node_modules/**", ...externalList],
        isModule: true,

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
        minify: watchMode ? false : true,
      })
    );
    const plugins = [
      //@ts-ignore
      rollupReplace({
        "process.env.NODE_ENV": `"${this.envs.nodeEnv}"`,
        preventAssignment: true,
      }),
      sass({
        api: 'modern',
        insert:true,
        options: {
          style: 'compressed',
        },
      }),

      //@ts-ignore
      rollupJson(),
    ];
    const isTypeScriptModule = this.#isTypeScriptModule(module);
    if (isTypeScriptModule && useTypescript) {
      //@ts-ignore
      const ss = typescript({tsconfig: module.tsConfigPath,});
      plugins.push(ss);
    }
    plugins.push(swcPlugin);
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
}
export default ReactComponentBuilder;
