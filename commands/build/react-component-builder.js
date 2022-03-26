import path, { format } from 'path';
import fs from 'fs';
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
class ReactComponentBuilder{
    constructor(){
        console.log('react-component-builder-initiated'.yellow);
    }
    build(){
        reactComponentConfig.reactComponents.forEach((reactComponent)=>{
            this.buildComponent(reactComponent);
        });
       
    }
    buildComponent(component){
        console.log(`start building ${component.name}`);
        const inputOptions = this._getInputOption(component);
        const esOutputOptions = this._getOutputOption(component,'es');
        const umdOutputOptions = this._getOutputOption(component,'umd');
        const esBuildPromise = this.buildModule(inputOptions, esOutputOptions);
        const umdBuildPromise = this.buildModule(inputOptions,umdOutputOptions);
        return Promise.all([esBuildPromise,umdBuildPromise]);

    }
    buildModule(inputOptions, outputOptions) {
        //build module with rollup without any watch or something
        let bundlePromise = rollup.rollup(inputOptions);
        bundlePromise.then(function (bundle) {
            bundle.write(outputOptions).then(function (output) {
                console.log(chalk.greenBright(output.output[0].facadeModuleId), ' ', chalk.bgMagenta(' DONE '));
            });
        }).catch((e)=>{
            console.log(e);
        });
        return bundlePromise;
    }
    _getInputOption(module) {
        let plugins = [
            rollupReplace({
                'process.env.NODE_ENV': `"${generalConfig.env}"`,
                preventAssignment:true
            }),
            commonjs({include: "node_modules/**"}),
            postcss({
                extensions: ['.css', '.pcss', 'scss'],
                inject: true,
                sourceMap: true
            }),
            rollupBabel.default({
                exclude: ['node_modules/**',...module.external],
                babelrc: false,
                babelHelpers:'runtime',
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                ],
                plugins:[
                    ["@babel/plugin-proposal-decorators",{ "legacy": true }],
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
                mainFields: ['browser'],
                jsnext: true,
            }),
            rollupJson()
        ];
        let inputOptions = {
            input: path.join(...module.path.split('/')),
            external: module.external || [],
            plugins: plugins,
            //manualChunks: config.chuncks
        };
        return inputOptions;
    }
    _getOutputOption(module,format) {
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
            format: format, //es for native code , system for systemjs known module
        };
        if(format == 'umd'){
            outputOptions.name = fileName;
            outputOptions.globals = module.globals || {};
        }
        return outputOptions;
    }
}
export default ReactComponentBuilder;