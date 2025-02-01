import chalk from "npm:chalk@5.4.1";
import type { Envs, WebComponentBuildConfig} from './types.ts';
import * as path from "@std/path";
//rollup
import * as rollup from "npm:rollup@4.32.1";
import html from "npm:rollup-plugin-html@0.2.1";
import postcss from "npm:rollup-plugin-postcss@4.0.2";
import rollupJson from "npm:@rollup/plugin-json@6.1.0";
import resolve from "npm:@rollup/plugin-node-resolve@16.0.0";
import rollupReplace from "npm:@rollup/plugin-replace@6.0.2";
//config
//import typescript from '@rollup/plugin-typescript';
import typescript from "npm:rollup-plugin-typescript2@0.36.0";
// import InlineSvg from 'rollup-plugin-inline-svg';
import svg from "npm:rollup-plugin-svg@2.0.0";
import gzipPlugin from "npm:rollup-plugin-gzip@4.0.1";
import brotli from "npm:rollup-plugin-brotli@3.1.0";
import terser from "npm:@rollup/plugin-terser@0.4.4";
import type { ModuleFormat } from "npm:rollup@4.32.1";
export class WebComponentBuilder {
  envs:Envs = {
    nodeEnv: "production"
  }
  constructor(envs?:Envs){
    if(envs){
      this.envs = envs;
    }
  }
  async buildAllComponents(webComponentList:WebComponentBuildConfig[]) {
    for (const component of webComponentList) {
      await this.buildComponent(component);
    }
  }
  async buildComponent(componentBuildConfig: WebComponentBuildConfig, watchMode = false) {
    console.log(`start building ${componentBuildConfig.name}`);
    const inputOptions = this.#getInputOption(componentBuildConfig, 'es',watchMode);
    const cjsInputOptions = this.#getInputOption(componentBuildConfig, 'cjs',watchMode);
    const umdInputOptions = this.#getInputOption(componentBuildConfig, 'umd',watchMode);
    //
    const esOutputOptions = this.#getOutputOption(componentBuildConfig, "es");
    const cjsOutputOptions = this.#getOutputOption(componentBuildConfig, "cjs");
    const umdOutputOptions = this.#getOutputOption(componentBuildConfig, "umd");
    try {
      if (watchMode) {
        this.#buildAndWatchModule(inputOptions, esOutputOptions, componentBuildConfig);
      } else {
        const p1 = this.buildModule(inputOptions, esOutputOptions, "ES");
        await p1;
        const p2 = this.buildModule(cjsInputOptions, cjsOutputOptions, "CJS");
        await p2;
        const p3 = this.buildModule(umdInputOptions, umdOutputOptions, "UMD");
        return await Promise.allSettled([p1,p2,p3]);
      }
    } catch (e) {
      console.error(componentBuildConfig.name + ' build failed');
      return Promise.reject(e);
    }
  }
  buildModule(inputOptions: rollup.RollupOptions, outputOptions: rollup.OutputOptions, type: "ES" | "CJS" | "UMD") {
    //build module with rollup without any watch or something
    return new Promise((resolve, reject) => {
      const bundlePromise = rollup.rollup(inputOptions);
      bundlePromise.then(function (bundle) {
        bundle.write(outputOptions).then(function (output) {
          console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ', chalk.bgBlue(` ${type} `), ' ', chalk.bgMagenta(' DONE '));
          resolve(output);
        });
      }).catch((e) => {
        console.error(e.message);
        reject(e);
      });
    });
  }
  #buildAndWatchModule(inputOptions: rollup.RollupOptions, outputOptions: rollup.OutputOptions, module: WebComponentBuildConfig) {
    return new Promise<void>((resolve, reject) => {
      const watcher = rollup.watch({
        ...inputOptions,
        output: outputOptions,
        watch: {
          exclude: module.external
        }
      });
      this.#watcherEventHandler(watcher, resolve, reject);
    });
  }
  #watcherEventHandler(watcher: rollup.RollupWatcher, resolver: () => void, rejecter: () => void) {
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_START') {
        console.log('Bundling...');
      } else if (event.code === 'BUNDLE_END') {
        console.log(chalk.green(event.input + '\n' + 'Bundled in ' + event.duration + 'ms.'));
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
  #getInputOption(module: WebComponentBuildConfig, format: "es" | "cjs" | "umd" = "es", watchMode: boolean): rollup.RollupOptions {
    
    // remove filename and lib folder name result in web-component/jb-input
    const moduleFolderPathArr = path.join(...module.path.split(path.SEPARATOR).slice(0, -2));
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
      //@ts-ignore
      postcss({
        extensions: [".css", ".pcss", "scss"],
        inject: false,
        sourceMap: false,
      }),
      //@ts-ignore
      resolve({
        preferBuiltins: true,
        mainFields: ["browser", "jsnext:main", "module", "main"],
        // jsnext: true,
      }),
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
        terser({ compress: { drop_debugger: false } }),
        gzipPlugin(),
        brotli(),];
    }
    const isTypeScriptModule = this.#isTypeScriptModule(module);
    if (isTypeScriptModule) {
      const tsConfigFilePath = module.tsconfigPath ? module.tsconfigPath : path.join(moduleFolderPathArr, "tsconfig.json");
      plugins.push(
        //@ts-ignore
        typescript({
          // tsconfigOverride:override,
          tsconfig: tsConfigFilePath,
          tsconfigDefaults: this.#getTypeScriptCompilerOptions(
            module,
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
  #getTypeScriptCompilerOptions(module: WebComponentBuildConfig, externalList: string[]) {
    const moduleFolderPath = module.path.split("/").slice(0, -1);
    const includePaths = path.join(
      ...moduleFolderPath,
      "**",
      "*"
    );

    return {
      useTsconfigDeclarationDir: true,
      compilerOptions: {
      },
      include: [includePaths],
      exclude: [...externalList],
    };
  }
  #getOutputOption(module: WebComponentBuildConfig, format: ModuleFormat = "es"): rollup.OutputOptions {
    const pathURL = path.parse(module.outputPath);
    const outputFileName = `${pathURL.name}${format == 'es' ? '' : ('.' + format)}${pathURL.ext}`;
    const outputOptions = {
      // core output options
      sourcemap: true,
      dir: pathURL.dir,
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module, umd for umd package
    };
    if (format == "umd") {
      //@ts-ignore package is not standard
      outputOptions.name = module.umdName;
      //@ts-ignore package is not standard
      outputOptions.globals = module.globals || {};
    }
    return outputOptions;
  }
}

function brotliPromise(arg0: any) {
  throw new Error("Function not implemented.");
}
