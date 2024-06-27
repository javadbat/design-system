import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import os from 'os';
import multer from 'multer';
import path from 'path';
import fs from'fs';
import chalk from 'chalk';
import process from 'process';
class MockServer{
  constructor(port){
    this.app = new express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.registerRoutes();
    process.on('SIGINT',this.exitHandler.bind(this));
    this.app.listen(port,()=>{
      console.log(`mock service Rest running on http://localhost:${port}/`);
    });
    //create temp folder for image uploaded file then remove it on close
    this.createTempDirectory().then(()=>{
      //do some stuff after directory created
    });
    this.uploadModule = multer({dest:this.tempFileDirectory,});
    this.app.post('/image/upload',this.uploadModule.single('image'), this.uploadImage.bind(this));
    this.app.get('/image/download',this.downloadImage, this.uploadImage.bind(this));
    process.on('exit',this.exitHandler.bind(this));

  }
  registerRoutes(){
    this.app.get('/',(request,response)=>{
      response.send('design system mock service');
    });
    this.app.post('/grid/user-list',this.getUserListForGrid.bind(this));
  }
  getUserListForGrid(request, response){
    const content = [];
    for(var i=0; i<20; i++){
      content.push(
        {
          id:i,
          name: `نام ${i}-${request.body.pageIndex}`,
          age:`${i}`,
        }
      );
    }
    const data = {
      content,
      pageIndex:request.body.pageIndex,
      pageSize:request.body.pageSize,
      totalItem:100
    };
    response.status(200).send(data);
  }
  createTempDirectory(){
    return new Promise((resolve, reject) => {
      const osTmpDir = os.tmpdir();
      this.tempFileDirectory = path.join(osTmpDir,'jb-design-system-test');
      fs.mkdir(this.tempFileDirectory, (err)=>{
        if(err){
          if(err.code == 'EEXIST'){
            resolve();
          }else{
            console.log(err);
            reject();
          }
        }else{
          resolve();
        }
      });
    });
  }
  exitHandler(options, exitCode){
    console.log( chalk.blue('close mock Api prepare'));
    //remove temp file directory
    if(this.tempFileDirectory && fs.existsSync(this.tempFileDirectory)){
      fs.rmSync(this.tempFileDirectory, { recursive: true });
    }
    console.log( chalk.blue('close mock Api done'));
    process.exit();
  }
  uploadImage(req, res, next){
    res.status(200).send({fileName:req.file});
  }
  downloadImage(req, res, next){
    const imagePath = req.param('imagePath');
    if(path){
      res.sendFile(path.join(imagePath));
    }
  }
}
export {MockServer};