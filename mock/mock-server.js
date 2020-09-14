import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
class MockServer{
    constructor(port){
        this.app = new express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.registerRoutes();
        this.app.listen(port,()=>{
            console.log(`mock service Rest running on http://localhost:${port}/`);
        })
    }
    registerRoutes(){
        this.app.get('/',(request,response)=>{
            response.send('design system mock service');
        })
    }
}
export {MockServer};