const  {exec} = require("child_process");
const serveProcess = exec(`start-storybook -p 100 -c .storybook watch-css -s ./src`,(e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log(stdout);
    console.log('stderr ', stderr);
});
serveProcess.stdout.pipe(process.stdout);