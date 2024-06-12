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
  async buildComponent(component: ReactComponentBuildConfig) {
    console.log(`start building ${component.name}`);
    const inputOptions = this._getInputOption(component);
    const esOutputOptions = this._getOutputOption(component, "es");
    const cjsOutputOptions = this._getOutputOption(component, "cjs");
    const umdOutputOptions = this._getOutputOption(component, "umd");
    try{
      await this.buildModule(inputOptions, esOutputOptions, "ES");
      await this.buildModule(inputOptions, cjsOutputOptions, "CJS");
      await this.buildModule(inputOptions, umdOutputOptions, "UMD");
    }catch(e){
      console.error(component.name + ' build failed');
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
  _getInputOption(module: ReactComponentBuildConfig) {
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
    const isTypeScriptModule = this._isTypeScriptModule(module);
    if (isTypeScriptModule) {
      //@ts-ignore
      plugins.push(
        typescript({
          tsconfig: "react-component/tsconfig.json",
          tsconfigDefaults: this._getTypeScriptCompilerOptions(
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
  _getOutputOption(
    module: ReactComponentBuildConfig,
    format: "umd" | "es" | "cjs"
  ) {
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
  _isTypeScriptModule(module: ReactComponentBuildConfig) {
    const filePaths = module.path.split("/");
    const fileName = filePaths[filePaths.length - 1];
    const fileExtension = fileName.split(".").pop();
    return fileExtension === "ts" || fileExtension == "tsx";
  }
  _getTypeScriptCompilerOptions(
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
