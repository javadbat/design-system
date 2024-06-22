import chalk from "npm:chalk";
import { WebComponentBuilder } from "./web-component-builder.ts";
import { webComponentList, reactComponentList } from "../../config/build-config.ts";
import {ReactComponentBuilder} from './react-component-builder.ts';

const webComponentBuilder = new WebComponentBuilder();
const reactComponentBuilder = new ReactComponentBuilder();
console.log(chalk.green(Deno.args));
const componentName = Deno.args[0];
const wcConfig = webComponentList.find((wc) => wc.name == componentName);
const reactConfig = reactComponentList.find((rc) => rc.name == componentName);
if (wcConfig) {
  webComponentBuilder.buildComponent(wcConfig);
} else if(reactConfig){
  reactComponentBuilder.buildComponent(reactConfig);
}else {
  const startTime = performance.now();
  await webComponentBuilder.buildAllComponents();
  await reactComponentBuilder.buildAllComponent();
  const endTime = performance.now();
  const duration = endTime - startTime;
  console.log("the build took ", duration, " time to finish");
  
}
