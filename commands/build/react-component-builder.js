import path, { format } from 'path';
//rollup
import * as rollup from 'rollup';
import rollupBabel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import rollupJson from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
//config
import { reactComponentConfig } from '../../config/build-config.js';
import generalConfig from '../../config/general-config.js';
import chalk from 'chalk';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
class ReactComponentBuilder {
  constructor() {
    console.log('react-component-builder-initiated'.yellow);
  }
  async build() {
    for(const reactComponent of reactComponentConfig.reactComponents){
      await this.buildComponent(reactComponent);

    }
  }
  async buildComponent(component) {
    console.log(`start building ${component.name}`);
    const inputOptions = this._getInputOption(component);
    const esOutputOptions = this._getOutputOption(component, 'es');
    const cjsOutputOptions = this._getOutputOption(component, 'cjs');
    const umdOutputOptions = this._getOutputOption(component, 'umd');
    await this.buildModule(inputOptions, esOutputOptions, 'ES');
    await this.buildModule(inputOptions, cjsOutputOptions, 'CJS');
    await this.buildModule(inputOptions, umdOutputOptions, 'UMD');
  }
  buildModule(inputOptions, outputOptions, type) {
    //build module with rollup without any watch or something
    return new Promise((resolve, reject) => {
      let bundlePromise = rollup.rollup(inputOptions);
      bundlePromise.then(function (bundle) {
        bundle.write(outputOptions).then(function (output) {
          console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ', chalk.bgBlue(type), ' ', chalk.bgMagenta(' DONE '));
          resolve();
        });
      }).catch((e) => {
        console.log(e);
        reject(e);
      });
    });
  }
  _getInputOption(module) {
    let externalList = module.external || [];
    let plugins = [
      rollupReplace({
        'process.env.NODE_ENV': `"${generalConfig.env}"`,
        preventAssignment: true
      }),
      commonjs({ include: "node_modules/**" }),
      postcss({
        extensions: ['.css', '.pcss', 'scss'],
        inject: true,
        sourceMap: true
      }),
      rollupBabel({
        exclude: ['node_modules/**', ...externalList],
        babelrc: false,
        babelHelpers: 'runtime',
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
        ],
        plugins: [
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
          ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
          ["@babel/plugin-proposal-private-methods", { "loose": true }],
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-external-helpers",
          "@babel/plugin-transform-runtime"
        ]
      }),
      resolve({
        preferBuiltins: true,
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
          '.tsx'
        ],
        mainFields: ['browser'],
        jsnext: true,
      }),
      rollupJson()
    ];
    const isTypeScriptModule = this._isTypeScriptModule(module);
    if (isTypeScriptModule) {
      plugins.push(typescript({ tsconfigDefaults: this._getTypeScriptCompilerOptions(module, externalList) }));
    }
    let inputOptions = {
      input: path.join(...module.path.split('/')),
      external: module.external || [],
      plugins: plugins,
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  _getOutputOption(module, format) {
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
      format: format, //es for native code , system for systemjs known module
    };
    if (format == 'umd') {
      outputOptions.name = fileName;
      outputOptions.globals = module.globals || {};
    }
    return outputOptions;
  }
  _isTypeScriptModule(module) {
    const filePaths = module.path.split('/');
    const fileName = filePaths[filePaths.length - 1];
    const fileExtension = fileName.split('.').pop();
    return (fileExtension === 'ts' || fileExtension == "tsx");
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
        "noLib": false,
        "preserveConstEnums": true,
        "allowJs": true,
        "declaration": true,
        "declarationDir": "./",
        "declarationMap": false,
        "jsx": "react"
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
}
export default ReactComponentBuilder;