import {MockServer} from './mock-server.js';
import process from 'process'

function getPort(){
    if(!isNaN(process.env.MOCK_SERVICE_PORT) ){
        return process.env.MOCK_SERVICE_PORT;
    }
    const portAttrIndex = process.argv.findIndex(x=>x=='--port');
    if(portAttrIndex == -1){
        return 3200;
    }
    const port = process.argv[portAttrIndex + 1];
    if(isNaN(port)){
        return 3200;
    }
    return port;
}

const port = getPort();
new MockServer(port);