const  {spawn} = require("child_process");
function getPort(){
    if(!isNaN(process.env.STORYBOOK_PORT) ){
        return process.env.STORYBOOK_PORT
    };
    const portAttrIndex = process.argv.findIndex(x=>x=='--port');
    if(portAttrIndex == -1){
        return 3100;
    }
    const port = process.argv[portAttrIndex + 1];
    if(isNaN(port)){
        return 3100;
    }
    return port;
}
const port = getPort();
// const serveProcess = spawn('start-storybook',['-p',port,'-c','.storybook','watch-css','-s','./src'],{stdio:'inherit',shell:true});
const serveProcess = spawn('storybook',["dev",'-p',port,'-c','.storybook','watch-css','--debug-webpack'],{stdio:'inherit',shell:true});
serveProcess.on('exit',(data)=>{
    console.log(data);
});