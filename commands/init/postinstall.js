import path from "path";
import chalk from "chalk";
import { spawn } from "child_process";
import generalConfig from "../../config/general-config.js";

const processInstaller = (...pathnames) => spawn("npm", ["i"], { shell:true, stdio:'inherit', cwd: path.join(generalConfig.basePath, ...pathnames) });

chalk.blue("installing storybook packages");
export const storybookInstallProcess = processInstaller("test-bed", "storybook");
