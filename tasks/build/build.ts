import chalk from "npm:chalk";
import { WebComponentBuilder } from "./web-component-builder.ts";
import { webComponentList } from "../../config/build-config.ts";
import {ReactComponentBuilder} from './react-component-builder.ts';
const webComponentBuilder = new WebComponentBuilder();
const reactComponentBuilder = new ReactComponentBuilder();
console.log(chalk.green(Deno.args));
const componentName = Deno.args[0];
const wcConfig = webComponentList.find((wc) => wc.name == componentName);
if (wcConfig) {
  webComponentBuilder.buildComponent(wcConfig);
} else {
  await webComponentBuilder.buildAllComponents();
  await reactComponentBuilder.buildAllComponent();
}
