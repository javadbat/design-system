import { WebComponentBuilder, ReactComponentBuilder, type ReactComponentBuildConfig, type WebComponentBuildConfig } from "./mod.ts";
import { parseArgs } from "jsr:@std/cli@1.0.11/parse-args";
import * as path from "@std/path";

type CliArgs = {
  path: string,
  name: string
  watch?: boolean
}
// //make sure this command is run directly in command line and not imported
// console.log(import.meta);

// if (!import.meta.main) {}

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
if (args.name) {
  const wcConfig = webComponentList.find((wc) => wc.name == args.name);
  const reactConfig = reactComponentList.find((rc) => rc.name == args.name);
  if (wcConfig) {
    await webComponentBuilder.buildComponent(wcConfig, args.watch);
  } else if (reactConfig) {
    await reactComponentBuilder.buildComponent(reactConfig, args.watch);
  } else {
    console.warn("component not found","args:",args);
  }
}
if (!args.name) {
  await webComponentBuilder.buildAllComponents(webComponentList);
  await reactComponentBuilder.buildAllComponent(reactComponentList);
}
const endTime = performance.now();
const duration = endTime - startTime;
console.log("the build took ", duration, " time to finish");


