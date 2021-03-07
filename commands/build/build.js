import WebComponentBuilder from "./web-component-builder.js";
import ReactComponentBuilder from './react-component-builder.js';
import { reactComponentConfig, webComponentConfig } from "../../config/build-config.js";
import chalk from "chalk";
const webComponentBuilder = new WebComponentBuilder();
const reactComponentBuilder = new ReactComponentBuilder();
const args = process.argv;
const specifiedModuleName = args[2];
if(specifiedModuleName){
    //when user want to build specified module like npm run build jb-input
    const SpecifiedWebComponentConfig = webComponentConfig.webComponents.find(x=>x.name == specifiedModuleName);
    if(SpecifiedWebComponentConfig){
        webComponentBuilder.buildComponent(SpecifiedWebComponentConfig).catch((err)=>{console.error(err);});
    }else{
        const specifiedReactComponentConfig = reactComponentConfig.reactComponents.find(x=>x.name == specifiedModuleName);
        if(specifiedReactComponentConfig){
            reactComponentBuilder.buildComponent(specifiedReactComponentConfig).catch((err)=>{console.error(err);});
        }else{
            //when we dont have build config for module user want
            console.log( chalk.red(`we cant find ${specifiedModuleName} in build component. you must define build config before trying to build it`));
        }
    }
}else{
    //when user want to build all modules
    webComponentBuilder.build().then(()=>{
        reactComponentBuilder.build();
    }).catch((err)=>{
        console.error(err);
    });
}
