import generalConfig from '../config/general-config.js';
import {exec} from "child_process";
const serveProcess = exec(`npm run storybook -p ${generalConfig.port}  --prefix test-bed/storybook`,(e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log(stdout);
    console.log('stderr ', stderr);
});
serveProcess.stdout.pipe(process.stdout);