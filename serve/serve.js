import generalConfig from '../config/general-config.js';
import {exec, spawn} from "child_process";
const serveProcess = spawn(`npm`,['run','storybook','-p',generalConfig.port,'--prefix','test-bed/storybook'],{shell:true,stdio:'inherit'});