import chalk from "npm:chalk";
import { WebComponentBuilder } from "./web-component-builder.ts";
import { webComponentList } from "../../config/build-config.ts";

const webComponentBuilder = new WebComponentBuilder();
console.log(chalk.green(Deno.args));
const componentName = Deno.args[0];
const wcConfig = webComponentList.find((wc) => wc.name == componentName);
if (wcConfig) {
  webComponentBuilder.buildComponent(wcConfig);
} else {
  webComponentBuilder.buildAllComponents();
}
