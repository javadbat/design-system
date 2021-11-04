import { spawn } from "child_process";
import path from "path";
import generalConfig from "../../config/general-config.js";
const serveProcess = spawn("npm", ["i", path.join(generalConfig.basePath, "mock")], { shell:true, stdio:'inherit' });

