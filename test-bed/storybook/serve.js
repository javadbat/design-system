const  {spawn} = require("child_process");
const serveProcess = spawn('start-storybook',['-p','100','-c','.storybook','watch-css','-s','./src'],{stdio:'inherit',shell:true});
serveProcess.on('exit',(data)=>{
    console.log(data);
});