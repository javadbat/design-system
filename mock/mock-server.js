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
        });
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
                    name: `نام ${i}`,
                    age:`${i}`
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
}
export {MockServer};