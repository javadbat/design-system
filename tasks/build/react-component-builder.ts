import * as path from "@std/path";
//rollup
import * as rollup from "npm:rollup";
import rollupBabel from "npm:@rollup/plugin-babel";
import postcss from "npm:rollup-plugin-postcss";
import commonjs from "npm:@rollup/plugin-commonjs";
import rollupJson from "npm:@rollup/plugin-json";
import resolve from "npm:@rollup/plugin-node-resolve";
import rollupReplace from "npm:@rollup/plugin-replace";
//config
import {
  reactComponentList,
  type ReactComponentBuildConfig,
} from "../../config/build-config.ts";
import { generalConfig } from "../../config/general-config.ts";
import chalk from "npm:chalk";
import typescript from "npm:rollup-plugin-typescript2";
import { DEFAULT_EXTENSIONS } from "npm:@babel/core";
export class ReactComponentBuilder {
  async buildAllComponent() {
    for (const reactComponent of reactComponentList) {
      await this.buildComponent(reactComponent);
    }
  }
  async buildComponent(component: ReactComponentBuildConfig,watch = false) {
    console.log(`start building ${component.name}`);
    const inputOptions = this.#getInputOption(component);
    const esOutputOptions = this.#getOutputOption(component, "es");
    const cjsOutputOptions = this.#getOutputOption(component, "cjs");
    const umdOutputOptions = this.#getOutputOption(component, "umd");
    try{
      if(watch){
        this.#buildAndWatchModule(inputOptions,esOutputOptions,component)
      }else{
        await this.buildModule(inputOptions, esOutputOptions, "ES");
        await this.buildModule(inputOptions, cjsOutputOptions, "CJS");
        await this.buildModule(inputOptions, umdOutputOptions, "UMD");
      }
    }catch(e){
      console.error(component.name + ' build failed');
      console.error(e.message);
    }
  }
  buildModule(
    inputOptions: rollup.RollupOptions,
    outputOptions: rollup.OutputOptions,
    type: "ES" | "CJS" | "UMD"
  ) {
    //build module with rollup without any watch or something
    return new Promise<void>((resolve, reject) => {
      const bundlePromise = rollup.rollup(inputOptions);
      bundlePromise
        .then(function (bundle) {
          bundle.write(outputOptions).then(function (output) {
            console.log(
              chalk.greenBright(output.output[0].facadeModuleId),
              " ",
              chalk.bgBlue(type),
              " ",
              chalk.bgMagenta(" DONE ")
            );
            resolve();
          });
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  }
  #buildAndWatchModule(inputOptions:rollup.RollupOptions, outputOptions:rollup.OutputOptions, module:ReactComponentBuildConfig) {
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
  #watcherEventHandler(watcher:rollup.RollupWatcher, resolver:()=>void, rejecter:()=>void) {
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
  #getInputOption(module: ReactComponentBuildConfig):rollup.InputOptions{
    const externalList = module.external || [];
    const plugins = [
      //@ts-ignore
      rollupReplace({
        "process.env.NODE_ENV": `"${generalConfig.env}"`,
        preventAssignment: true,
      }),
      //@ts-ignore
      commonjs({ include: "node_modules/**" }),
      //@ts-ignore
      postcss({
        extensions: [".css", ".pcss", "scss"],
        inject: true,
        sourceMap: true,
      }),
      //@ts-ignore
      rollupBabel({
        exclude: ["node_modules/**", ...externalList],
        babelrc: false,
        babelHelpers: "runtime",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
          [
            "@babel/plugin-proposal-private-property-in-object",
            { loose: true },
          ],
          ["@babel/plugin-proposal-private-methods", { loose: true }],
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-external-helpers",
          "@babel/plugin-transform-runtime",
        ],
      }),
      //@ts-ignore
      resolve({
        preferBuiltins: true,
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
        mainFields: ["browser"],
        //@ts-ignore
        jsnext: true,
      }),
      //@ts-ignore
      rollupJson(),
    ];
    const isTypeScriptModule = this.#isTypeScriptModule(module);
    if (isTypeScriptModule) {
      const moduleFolderPathArr = path.join(...module.path.split('/').slice(0, -2));
      const tsConfigFilePath = module.tsconfigPath?module.tsconfigPath:path.join(moduleFolderPathArr,"tsconfig.json");
      plugins.push(
        //@ts-ignore
        typescript({
          tsconfig: tsConfigFilePath,
          tsconfigDefaults: this.#getTypeScriptCompilerOptions(
            module,
            externalList
          ),
        })
      );
    }
    const inputOptions = {
      input: path.join(...module.path.split("/")),
      external: module.external || [],
      plugins: plugins,
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  #getOutputOption(module: ReactComponentBuildConfig,format: "umd" | "es" | "cjs"):rollup.OutputOptions{
    const pathArr = module.outputPath.split("/");
    const fullFileName = pathArr[pathArr.length - 1];
    const fileName = path.parse(fullFileName).name;
    const fileExtension = path.parse(fullFileName).ext;
    const outputFileName = `${fileName}${format == "es" ? "" : "." + format}${fileExtension}`;
    const dir = pathArr.slice(0, pathArr.length - 1);
    const outputOptions = {
      // core output options
      sourcemap: true,
      dir: path.join(...dir),
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module
    };
    if (format == "umd") {
      //@ts-ignore
      outputOptions.name = fileName;
      //@ts-ignore
      outputOptions.globals = module.globals || {};
    }
    return outputOptions;
  }
  #isTypeScriptModule(module: ReactComponentBuildConfig) {
    const filePaths = module.path.split("/");
    const fileName = filePaths[filePaths.length - 1];
    const fileExtension = fileName.split(".").pop();
    return fileExtension === "ts" || fileExtension == "tsx";
  }
  #getTypeScriptCompilerOptions(
    module: ReactComponentBuildConfig,
    externalList: string[]
  ) {
    const includePaths = path.join(
      ...module.path.split("/").slice(0, -1),
      "**",
      "*"
    );
    return {
      useTsconfigDeclarationDir: true,
      include: [includePaths],
      exclude: [...externalList],
    };
  }
}
export default ReactComponentBuilder;
