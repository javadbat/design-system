import path from 'path';
//rollup
import * as rollup from 'rollup';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import rollupJson from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
//config
import { webComponentConfig } from '../../config/build-config.js';
import generalConfig from '../../config/general-config.js';
//import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import chalk from 'chalk';
/**
 * @typedef {import('rollup-plugin-typescript2/dist/ioptions').IOptions} TypeScriptIOptions
 */

class WebComponentBuilder {
    constructor() {
        console.log('web-component-builder-initiated'.yellow);
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
    buildComponent(component) {
        console.log(`start building ${component.name}`);

        const inputOptions = this._getInputOption(component);
        const outputOptions = this._getOutputOption(component,'es');
        const modulePromise = this.buildModule(inputOptions, outputOptions);
        //build umd package
        const umdOutputOptions = this._getOutputOption(component,'umd');
        const UMDmodulePromise = this.buildModule(inputOptions, umdOutputOptions);
        return Promise.all([modulePromise,UMDmodulePromise]);
    }
    buildModule(inputOptions, outputOptions) {
        //build module with rollup without any watch or something
        let bundlePromise = rollup.rollup(inputOptions);
        bundlePromise.then(function (bundle) {
            bundle.write(outputOptions).then(function (output) {
                console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ', chalk.bgMagenta(' DONE '));
            });
        }).catch((e) => {
            console.log(e);
        });
        return bundlePromise;
    }
    _getInputOption(module) {
        let plugins = [
            html({
                include: '**/*.html'
            }),
            postcss({
                extensions: ['.css', '.pcss', 'scss'],
                inject: false,
                sourceMap: true
            }),
            resolve({
                preferBuiltins: true,
                mainFields: ['browser'],
                jsnext: true,
            }),
            rollupReplace({
                'process.env.NODE_ENV': `"${generalConfig.env}"`,
                preventAssignment: true
            }),
            commonjs({
                include: ["./index.js", "node_modules/**"],
                ignoreGlobal: false,
                sourceMap: true
            }),
            rollupJson()
        ];
        const isTypeScriptModule = this._isTypeScriptModule(module);
        if (isTypeScriptModule) {
            plugins.push(typescript({ tsconfigDefaults: this._getTypeScriptCompilerOptions(module) }));
        }
        let inputOptions = {
            input: path.join(...module.path.split('/')),
            external: module.external || [],
            plugins: plugins,
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
     * @return {TypeScriptIOptions} tsconfig options
     */
    _getTypeScriptCompilerOptions(module) {
        const includePaths = path.join(...module.path.split('/').slice(0, -1), '**', '*');
        const externalList = module.external || [];
        return {
            "useTsconfigDeclarationDir":true,
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
        const outputFileName = `${fileName}${format == 'es'?'':('.'+format)}${fileExtention}`;
        const dir =pathArr.slice(0,pathArr.length - 1);
        let outputOptions = {
            // core output options
            sourcemap: true,
            dir:path.join(...dir),
            entryFileNames: outputFileName,
            format: format, //es for native code , system for systemjs known module, umd for umd package
            //dir: 'App/dist',
        };
        if(format == "umd"){
            outputOptions.name = module.umdName;
            outputOptions.globals = module.globals || {};
        }
        return outputOptions;
    }
}
export default WebComponentBuilder;