import {
  type ReactComponentBuildConfig,
  ReactComponentBuilder,
  type WebComponentBuildConfig,
  WebComponentBuilder,
} from "./mod.ts";
import { parseArgs } from "@std/cli/parse-args";
import * as path from "@std/path";

type CliArgs = {
  path: string;
  name?: string;
  watch?: boolean;
  type?: "web" | "react";
};
// //make sure this command is run directly in command line and not imported
// console.log(import.meta);

// if (!import.meta.main) {}

const args = parseArgs<CliArgs>(Deno.args);

if (args.path == undefined) {
  throw new Error("build config path is not specified");
}
if (args.type !== undefined && args.type !== "web" && args.type !== "react") {
  throw new Error(
    `invalid build type "${args.type}"; expected "web" or "react"`,
  );
}

const buildConfigPath = path.toFileUrl(path.resolve(Deno.cwd(), args.path));
const { webComponentList, reactComponentList } = await import(
  buildConfigPath.toString()
) as {
  webComponentList: WebComponentBuildConfig[];
  reactComponentList: ReactComponentBuildConfig[];
};
//start build process
const reactComponentBuilder = new ReactComponentBuilder();
const webComponentBuilder = new WebComponentBuilder();

const startTime = performance.now();
if (args.name) {
  const matchedWebComponents = args.type === "react"
    ? []
    : webComponentList.filter((component) =>
      path.globToRegExp(args.name!).test(component.name)
    );
  const matchedReactComponents = args.type === "web"
    ? []
    : reactComponentList.filter((component) =>
      path.globToRegExp(args.name!).test(component.name)
    );

  for (const component of matchedWebComponents) {
    await webComponentBuilder.buildComponent(component, args.watch);
  }
  for (const component of matchedReactComponents) {
    await reactComponentBuilder.buildComponent(component, args.watch);
  }

  if (
    matchedWebComponents.length === 0 && matchedReactComponents.length === 0
  ) {
    console.warn("component not found", "args:", args);
  }
}
if (!args.name) {
  if (args.type !== "react") {
    await webComponentBuilder.buildAllComponents(webComponentList);
  }
  if (args.type !== "web") {
    await reactComponentBuilder.buildAllComponent(reactComponentList);
  }
}
const endTime = performance.now();
const duration = endTime - startTime;
console.log("the build took ", duration, "ms time to finish");
