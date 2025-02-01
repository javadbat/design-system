import { WebComponentBuilder, ReactComponentBuilder, type ReactComponentBuildConfig, type WebComponentBuildConfig } from "./mod.ts";
import { parseArgs } from "jsr:@std/cli@1.0.11/parse-args";
import * as path from "@std/path";

type CliArgs = {
  path: string,
  watch?: boolean
}
const args = parseArgs<CliArgs>(Deno.args);

if (args.path == undefined) {
  throw new Error("build config path is not specified");
}

const buildConfigPath = path.toFileUrl(path.resolve(Deno.cwd(), args.path));
const { webComponentList, reactComponentList } = await import(buildConfigPath.toString()) as { webComponentList: WebComponentBuildConfig[], reactComponentList: ReactComponentBuildConfig[] };
//start build process
const reactComponentBuilder = new ReactComponentBuilder();
const webComponentBuilder = new WebComponentBuilder();

const startTime = performance.now();
const componentName = args._[0];
if (componentName) {
  const wcConfig = webComponentList.find((wc) => wc.name == componentName);
  const reactConfig = reactComponentList.find((rc) => rc.name == componentName);
  if (wcConfig) {
    await webComponentBuilder.buildComponent(wcConfig,args.watch);
  } else if(reactConfig){
    await reactComponentBuilder.buildComponent(reactConfig,args.watch);
  }else{
    console.warn("component not found");
  }
}
if(!componentName){
  await webComponentBuilder.buildAllComponents(webComponentList);
  await reactComponentBuilder.buildAllComponent(reactComponentList);
}
const endTime = performance.now();
const duration = endTime - startTime;
console.log("the build took ", duration, " time to finish");

