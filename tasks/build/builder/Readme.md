# Design System builder

this package use rolldown and typescript to bundle your packages for browser

> this package is Developed for Bundling JB Design System packages build.

here we can build PureJS, ReactJS and WebComponents modules and packages anyway in Deno ecosystem.
this builder is designed specially for web-component build besides it's react component wrapper so you define both package in your config and build them base on your need

## usage in CI

in you deno.json add the following task:
```json
    "tasks": {
      "build":"deno run --allow-run --allow-read --allow-write --allow-net --allow-env --allow-sys --allow-ffi jsr:@design-system/builder@0.1.0 build --path=./build-config.ts"
    },
```
and in your `build-config.ts` file write down your module entry file and output path like this:

```ts
import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "@design-system/builder/src/types.ts";
// your web-components list of packages
export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "pkg-name",
    path: "./lib/pkg-name.ts",
    outputPath: "./dist/pkg-name.js",
    //name of your package in UMD bundle
    umdName: "PKGName",
    external: ["dep-1", "dep2"],
    //in umd build we dont exclude these dependencies so your package would be battery included in UMD build  
    umdIncludes: ["dep1"],
  },
];
// react component build. if you have no react component just return an empty array
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "pkg-name-react",
    path: "./react/lib/ReactComponentName.tsx",
    outputPath: "./react/dist/ReactComponentName.js",
    external: ["react", "dep1", "dep2"],
    globals: {
      react: "React",
      "dep1": "Dep1",
    },
    umdName: "ReactComponentNameReact",
    dir: "./react"
  },
];
```