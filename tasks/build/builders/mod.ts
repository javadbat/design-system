import { WebComponentBuilder } from "./src/web-component-builder.ts";
import {ReactComponentBuilder} from './src/react-component-builder.ts';
import type {ReactComponentBuildConfig, WebComponentBuildConfig} from './src/types.ts';
import { parseArgs } from "jsr:@std/cli@1.0.11/parse-args";
import * as path from "@std/path";

const args = parseArgs(Deno.args);
if(args.path == undefined){
  console.error("build config path is not specified");
}
//

const buildConfigPath = path.toFileUrl(path.resolve(Deno.cwd(),args.path)) 

const {webComponentList, reactComponentList} = await import(buildConfigPath.toString()) as {webComponentList: WebComponentBuildConfig[], reactComponentList:ReactComponentBuildConfig[]};
const webComponentBuilder = new WebComponentBuilder();
const reactComponentBuilder = new ReactComponentBuilder();

const hasWatch = Deno.args.includes('--watch');
const componentName = Deno.args[0];
const wcConfig = webComponentList.find((wc) => wc.name == componentName);
const reactConfig = reactComponentList.find((rc) => rc.name == componentName);

if (wcConfig) {
  webComponentBuilder.buildComponent(wcConfig,hasWatch);
} else if(reactConfig){
  reactComponentBuilder.buildComponent(reactConfig,hasWatch);
}else {
  const startTime = performance.now();
  await webComponentBuilder.buildAllComponents(webComponentList);
  await reactComponentBuilder.buildAllComponent(reactComponentList);
  const endTime = performance.now();
  const duration = endTime - startTime;
  console.log("the build took ", duration, " time to finish");
}
