import WebComponentBuilder from "./web-component-builder.js";
import ReactComponentBuilder from './react-component-builder.js';
const webComponentBuilder = new WebComponentBuilder();
const reactComponentBuilder = new ReactComponentBuilder();
webComponentBuilder.build().then(()=>{
    reactComponentBuilder.build();
}).catch((err)=>{
    console.error(err);
})