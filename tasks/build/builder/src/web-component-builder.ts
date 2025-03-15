import chalk from "npm:chalk@5.4.1";
import type { Envs, ModuleConfig, WebComponentBuildConfig } from './types.ts';
import * as path from "@std/path";
import { type OutputOptions, rolldown, type ModuleFormat, type RolldownOutput, type RolldownOptions, watch, type RolldownWatcher } from 'rolldown';
import html from "npm:rollup-plugin-html@0.2.1";
import sass from "rollup-plugin-sass";
import rollupJson from "npm:@rollup/plugin-json@6.1.0";
import rollupReplace from "npm:@rollup/plugin-replace@6.0.2";
//config
//import typescript from '@rollup/plugin-typescript';
import typescript from "npm:rollup-plugin-typescript2@0.36.0";
// import InlineSvg from 'rollup-plugin-inline-svg';
import svg from "npm:rollup-plugin-svg@2.0.0";
import gzipPlugin from "npm:rollup-plugin-gzip@4.0.1";
import brotli from "npm:rollup-plugin-brotli@3.1.0";
import terser from "npm:@rollup/plugin-terser@0.4.4";
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
        this.#buildAndWatchModule(inputOptions, esOutputOptions, componentBuildConfig);
      } else {
        const p1 = this.buildModule(inputOptions, esOutputOptions, "ES");
        await p1;
        const p2 = this.buildModule(cjsInputOptions, cjsOutputOptions, "CJS");
        await p2;
        const p3 = this.buildModule(umdInputOptions, umdOutputOptions, "UMD");
        return await Promise.allSettled([p1, p2, p3]);
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
  buildModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, type: "ES" | "CJS" | "UMD"): Promise<RolldownOutput> {
    //build module with rollup without any watch or something
    return new Promise((resolve, reject) => {
      const bundlePromise = rolldown(inputOptions);
      bundlePromise.then(function (bundle) {
        bundle.write(outputOptions).then(function (output) {
          console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ', chalk.bgBlue(` ${type} `), ' ', chalk.bgMagenta(' DONE '));
          resolve(output);
          bundle.close();
        });
      }).catch((e) => {
        console.error(e.message);
        reject(e);
      });
    });
  }
  #buildAndWatchModule(inputOptions: RolldownOptions, outputOptions: OutputOptions, module: WebComponentBuildConfig) {
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
  #getInputOption(module: ModuleConfig, format: "es" | "cjs" | "umd" = "es", watchMode: boolean): RolldownOptions {

    // remove filename and lib folder name result in web-component/jb-input
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
      html({
        include: "**/*.html",
      }),
      svg({
        base64: false,
      }),
      sass({
        api: 'modern',
        options: {
          style: 'compressed',
        },
      }),
      // resolve({
      //   preferBuiltins: true,
      //   mainFields: ["browser", "jsnext:main", "module", "main"],
      //   // jsnext: true,
      // }),
      //@ts-ignore
      rollupReplace({
        "process.env.NODE_ENV": `"${env}"`,
        preventAssignment: true,
      }),
      //@ts-ignore
      rollupJson(),

    ];
    if (!watchMode) {
      //watch mode is for development and dont need minification
      plugins = [
        ...plugins,
        //@ts-ignore
        terser({ compress: { drop_debugger: watchMode ? false : true } }),
        gzipPlugin(),
        brotli(),];
    }
    const isTypeScriptModule = this.#isTypeScriptModule(module);
    if (isTypeScriptModule) {
      plugins.push(
        //@ts-ignore
        typescript({
          // tsconfigOverride:override,
          tsconfig: module.tsConfigPath,
          tsconfigDefaults: this.#getTypeScriptCompilerOptions(
            externalList
          ),
        })
      );
    }
    const inputOptions = {
      input: path.join(module.path),
      external: externalList,
      plugins: plugins,
      // treeshake:"smallest"
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  #isTypeScriptModule(module: WebComponentBuildConfig) {
    const url = path.parse(module.path);
    return url.ext === '.ts';
  }
  #getTypeScriptCompilerOptions( externalList: string[]) {

    return {
      useTsconfigDeclarationDir: true,
      compilerOptions: {
      },
      exclude: [...externalList],
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