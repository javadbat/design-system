import path from 'path';
//rollup
import * as rollup from 'rollup';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import rollupJson from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
//config
import { webComponentConfig } from '../../config/build-config.js';
import generalConfig from '../../config/general-config.js';
//import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import chalk from 'chalk';
// import InlineSvg from 'rollup-plugin-inline-svg';
import svg from 'rollup-plugin-svg';

/**
 * @typedef {import('rollup-plugin-typescript2/dist/ioptions').IOptions} TypeScriptIOptions
 */

class WebComponentBuilder {
  constructor() {
    console.log(chalk.yellow('web-component-builder-initiated'));
  }
  build() {
    return new Promise((resolve, reject) => {
      const promiseArray = [];
      webComponentConfig.webComponents.forEach((webComponent) => {
        const componentPromise = this.buildComponent(webComponent);
        promiseArray.push(componentPromise);
      });
      Promise.all(promiseArray).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });

  }
  async buildComponent(component) {
    console.log(`start building ${component.name}`);

    const inputOptions = this._getInputOption(component,"es");
    const outputOptions = this._getOutputOption(component, 'es');
    await this.buildModule(inputOptions, outputOptions,'es');
    //build umd package
    const umdInputOptions = this._getInputOption(component,"umd");
    const umdOutputOptions = this._getOutputOption(component, 'umd');
    await this.buildModule(umdInputOptions, umdOutputOptions, 'umd');
  }
  buildModule(inputOptions, outputOptions, type) {
    //build module with rollup without any watch or something
    const bundlePromise = rollup.rollup(inputOptions);
    bundlePromise.then(function (bundle) {
      bundle.write(outputOptions).then(function (output) {
        console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ',chalk.bgBlue(` ${type} `) , ' ', chalk.bgMagenta(' DONE '));
      });
    }).catch((e) => {
      console.log(e);
    });
    return bundlePromise;
  }
  /**
     * 
     * @param {*} module 
     * @param {"es" | "umd"} format 
     * @return {object}
     */
  _getInputOption(module, format = "es") {
    /**
        * @type {Array<String>}
        */
    let externalList = module.external || [];
    if (format == "umd" && Array.isArray(module.umdIncludes) && externalList.length > 0) {
      externalList = externalList.filter(el => !module.umdIncludes.includes(el));
    }
    let plugins = [
      html({
        include: '**/*.html'
      }),
      svg({
        base64:false
      }),
      postcss({
        extensions: ['.css', '.pcss', 'scss'],
        inject: false,
        sourceMap: false
      }),
      resolve({
        preferBuiltins: true,
        mainFields: ['browser', 'jsnext:main', 'module', 'main'],
        jsnext: true,
      }),
      rollupReplace({
        'process.env.NODE_ENV': `"${generalConfig.env}"`,
        preventAssignment: true
      }),
      // commonjs({
      //     include: ["./index.js", "node_modules/**"],
      //     ignoreGlobal: false,
      //     sourceMap: true,
      // }),
      rollupJson()
    ];
    const isTypeScriptModule = this._isTypeScriptModule(module);
    if (isTypeScriptModule) {
      plugins.push(typescript({tsconfig:"web-component/tsconfig.json", tsconfigDefaults: this._getTypeScriptCompilerOptions(module, externalList) }));
    }
    let inputOptions = {
      input: path.join(...module.path.split('/')),
      external: externalList,
      plugins: plugins,
      // treeshake:"smallest"
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  _isTypeScriptModule(module) {
    const filePaths = module.path.split('/');
    const fileName = filePaths[filePaths.length - 1];
    const fileExtension = fileName.split('.').pop();
    return fileExtension === 'ts';
  }
  /**
     * @param {*} module 
     * @param {Array<String>} externalList
     * @return {TypeScriptIOptions} tsconfig options
     */
  _getTypeScriptCompilerOptions(module, externalList) {
    const includePaths = path.join(...module.path.split('/').slice(0, -1), '**', '*');

    return {
      "useTsconfigDeclarationDir": true,
      "compilerOptions": {
        "target": "ES6",
        "module": "ES6",
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "suppressImplicitAnyIndexErrors": true,
        "noLib": false,
        "preserveConstEnums": true,
        "suppressExcessPropertyErrors": true,
        "allowJs": true,
        "declaration": true,
        "declarationDir": './',
        "declarationMap": false,
        //"outDir": "../dist",
      },
      "include": [
        includePaths,
      ],
      "exclude": [
        ...externalList
      ]

    };
  }
  _getOutputOption(module, format = "es") {
    const pathArr = module.outputPath.split('/');
    const fullFileName = pathArr[pathArr.length - 1];
    const fileName = path.parse(fullFileName).name;
    const fileExtention = path.parse(fullFileName).ext;
    const outputFileName = `${fileName}${format == 'es' ? '' : ('.' + format)}${fileExtention}`;
    const dir = pathArr.slice(0, pathArr.length - 1);
    let outputOptions = {
      // core output options
      sourcemap: true,
      dir: path.join(...dir),
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module, umd for umd package
      //dir: 'App/dist',
    };
    if (format == "umd") {
      outputOptions.name = module.umdName;
      outputOptions.globals = module.globals || {};
    }
    return outputOptions;
  }
}
export default WebComponentBuilder;