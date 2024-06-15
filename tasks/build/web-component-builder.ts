import chalk from "npm:chalk";
import {
  webComponentList,
  type WebComponentBuildConfig,
} from "../../config/build-config.ts";
import {generalConfig} from "../../config/general-config.ts";
import * as path from "https://deno.land/std@0.207.0/path/mod.ts";
//rollup
import * as rollup from "npm:rollup";
import html from "npm:rollup-plugin-html";
import postcss from "npm:rollup-plugin-postcss";
import rollupJson from "npm:@rollup/plugin-json";
import resolve from "npm:@rollup/plugin-node-resolve";
import rollupReplace from "npm:@rollup/plugin-replace";
//config
//import typescript from '@rollup/plugin-typescript';
import typescript from "npm:rollup-plugin-typescript2";
// import InlineSvg from 'rollup-plugin-inline-svg';
import svg from "npm:rollup-plugin-svg";
export class WebComponentBuilder {
  async buildAllComponents() {
    for (const component of webComponentList) {
      await this.buildComponent(component);
    }
  }
  async buildComponent(componentBuildConfig: WebComponentBuildConfig) {
    console.log(`start building ${componentBuildConfig.name}`);
    const inputOptions = this.#getInputOption(componentBuildConfig,'es');
    const cjsInputOptions = this.#getInputOption(componentBuildConfig,'cjs');
    const umdInputOptions = this.#getInputOption(componentBuildConfig,'umd');
    const esOutputOptions = this.#getOutputOption(componentBuildConfig, "es");
    const cjsOutputOptions = this.#getOutputOption(componentBuildConfig, "cjs");
    const umdOutputOptions = this.#getOutputOption(componentBuildConfig, "umd");
    try {
      await this.buildModule(inputOptions, esOutputOptions, "ES");
      await this.buildModule(cjsInputOptions, cjsOutputOptions, "CJS");
      await this.buildModule(umdInputOptions, umdOutputOptions, "UMD");
    }catch(e){
      console.error(componentBuildConfig.name + ' build failed');
    }
  }
  buildModule(inputOptions:any, outputOptions:any, type:"ES" | "CJS" | "UMD"){
    //build module with rollup without any watch or something
    const bundlePromise = rollup.rollup(inputOptions);
    bundlePromise.then(function (bundle) {
      bundle.write(outputOptions).then(function (output) {
        console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ',chalk.bgBlue(` ${type} `) , ' ', chalk.bgMagenta(' DONE '));
      });
    }).catch((e) => {
      console.error(e);
    });
    return bundlePromise;
  }
  #getInputOption(
    module: WebComponentBuildConfig,
    format: "es" | "cjs" | "umd" = "es"
  ) {
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
    const env = generalConfig.env;
    const plugins = [
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
    const isTypeScriptModule = this.#isTypeScriptModule(module);
    if (isTypeScriptModule) {
      plugins.push(
        //@ts-ignore
        typescript({
          tsconfig:"web-component/tsconfig.json",
          tsconfigDefaults: this.#getTypeScriptCompilerOptions(
            module,
            externalList
          ),
        })
      );
    }
    const inputOptions = {
      input: path.join(...module.path.split("/")),
      external: externalList,
      plugins: plugins,
      // treeshake:"smallest"
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  #isTypeScriptModule(module:WebComponentBuildConfig) {
    const filePaths = module.path.split('/');
    const fileName = filePaths[filePaths.length - 1];
    const fileExtension = fileName.split('.').pop();
    return fileExtension === 'ts';
  }
  #getTypeScriptCompilerOptions(module:WebComponentBuildConfig, externalList:string[]) {
    const includePaths = path.join(
      ...module.path.split("/").slice(0, -1),
      "**",
      "*"
    );

    return {
      useTsconfigDeclarationDir: true,
      compilerOptions: {
        target: "ES6",
        module: "ES6",
        moduleResolution: "node",
        allowSyntheticDefaultImports: true,
        sourceMap: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        noImplicitAny: false,
        noLib: false,
        preserveConstEnums: true,
        allowJs: true,
        declaration: true,
        declarationDir: "./",
        declarationMap: false,
        //"outDir": "../dist",
      },
      include: [includePaths],
      exclude: [...externalList],
    };
  }
  #getOutputOption(module:WebComponentBuildConfig, format = "es") {
    const pathArr = module.outputPath.split('/');
    const fullFileName = pathArr[pathArr.length - 1];
    const fileName = path.parse(fullFileName).name;
    const fileExtension = path.parse(fullFileName).ext;
    const outputFileName = `${fileName}${format == 'es' ? '' : ('.' + format)}${fileExtension}`;
    const dir = pathArr.slice(0, pathArr.length - 1);
    const outputOptions = {
      // core output options
      sourcemap: true,
      dir: path.join(...dir),
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module, umd for umd package
      //dir: 'App/dist',
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
