import colors from 'colors'
import path from 'path'
import fs from 'fs'
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
        const outputOptions = this._getOutputOption(component);
        return this.buildModule(inputOptions, outputOptions);

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
            plugins.push(typescript({tsconfigDefaults:this._getTypeScriptCompilerOptions(module)}));
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
    _getTypeScriptCompilerOptions(module) {
        const includePaths = path.join(...module.path.split('/').slice(0, -1),'**', '*');
        const externalList = module.external || [];
        return {
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
                // "outDir": "../dist",
            },
            "include": [
                includePaths,
            ],
            "exclude": [
                ...externalList
            ]

        };
    }
    _getOutputOption(module) {
        let outputOptions = {
            // core output options
            sourcemap: true,
            file: path.join(...module.outputPath.split('/')),
            format: 'es', //es for native code , system for systemjs known module
            //dir: 'App/dist',
        };
        return outputOptions;
    }
}
export default WebComponentBuilder;