import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
class GeneralConfig{
    constructor(){
        this.env = process.env.NODE_ENV?process.env.NODE_ENV:'development';
        const __dirname = dirname(fileURLToPath(import.meta.url));
        this.basePath = path.join(__dirname,'../');
        this.host = '0.0.0.0';
        this.port = {
            storybookPort:3100,
            mockService:3200
        };
    }
}
const generalConfig = new GeneralConfig(process.env.NODE_ENV)
export default generalConfig