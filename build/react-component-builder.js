import colors from 'colors'
import path from 'path'
import fs from 'fs'
//rollup
import * as rollup from 'rollup';
import rollupBabel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import rollupJson from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
//config
import { reactComponentConfig } from '../config/build-config.js';
import generalConfig from '../config/general-config.js';
class ReactComponentBuilder{
    constructor(){
        console.log('react-component-builder-initiated'.yellow);
    }
    build(){
        reactComponentConfig.reactComponents.forEach((reactComponent)=>{
            this.buildComponent(reactComponent);
        })
       
    }
    buildComponent(component){
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
                console.log(output.output[0].facadeModuleId.green);
            });
        }).catch((e)=>{
            console.log(e)
        })
        return bundlePromise;
    }
    _getInputOption(module) {
        let plugins = [
            rollupReplace({
                'process.env.NODE_ENV': `"${generalConfig.env}"`,
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
        ]
        let inputOptions = {
            input: path.join(...module.path.split('/')),
            external: module.external || [],
            plugins: plugins,
            //manualChunks: config.chuncks
        }
        return inputOptions;
    }
    _getOutputOption(module) {
        let outputOptions = {
            // core output options
            sourcemap: true,
            file: path.join(...module.outputPath.split('/')),
            format: 'es', //es for native code , system for systemjs known module
            //dir: 'App/dist',
        }
        return outputOptions;
    }
}
export default ReactComponentBuilder;