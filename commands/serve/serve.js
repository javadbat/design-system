import generalConfig from '../../config/general-config.js';
import {spawn} from "child_process";
import process from 'process';
process.env.MOCK_SERVICE_PORT = generalConfig.port.mockService;
process.env.STORYBOOK_PORT = generalConfig.port.storybookPort;
const serveProcess = spawn(`npm`,['run','storybook','--prefix','test-bed/storybook'],{shell:true,stdio:'inherit'});
// const mockServiceProcess = spawn(`npm`,['run','serve','--prefix','mock/'],{shell:true,stdio:'inherit'});