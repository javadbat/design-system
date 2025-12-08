import{j as e,M as a,m as i}from"./index-BTXIbzeN.js";import{useMDXComponents as r}from"./index-CH6z84fh.js";import"./iframe-cY4qOO6A.js";import"./index-DP23ewiS.js";import"./index-BGsmrW1E.js";import"./index-FCbevRKN.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-image-input React Component
image input react component let user upload image and see what is uploaded
this package use jb-image-input underneath so you can 

- ability multiple image upload 

- can connect to your custom REST service bridge (you can have your own way of uploading or downloading image event with JWT token)

- show loading

- can be used in both instant upload or keep image and upload image on form submit

- customizable format

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-image-input) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBImageInput.tsx) if you want to see and play with code

## instruction

### usage

\`\`\`sh
npm i jb-image-input
\`\`\`

\`\`\`JSX
import {JBImageInput} from 'jb-image-input/react';
...

<JBImageInput></JBImageInput>
\`\`\`


### check validation

jb-image-input use [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation. so for more information you can read [jb-validation](https://github.com/javadbat/jb-validation) documentation.
by set \`required\` and \`maxFileSize\` you can easily have these 2 validation but for more advanced validation functions you can provide your own validation function list

\`\`\`jsx
const validationList = [
        {
            validator: ({file})=>{return file.size < 500 * 1024},
            message: 'your file size must be above 500KB'
        },
    ];
    <JBImageInput ref={imageRef} validationList={validationList}/>
//check and show validations by simple calling the function (pass false if you dont want to show error and just want to check silently)
const result = imageRef.current.validation.checkValidation(true);

\`\`\`

### multi image selector

by default jb-image-input don't support multi image upload but in set of hack you can implement a system that user can select and upload multiple image
we have 4 step to help you implement multi image input

1- set \`multiple\` attribute to dom to let user select multiple image

\`\`\`jsx
<JBImageInput multiple="true"/>
\`\`\`

2- \`imageSelected\` event is fired on user select image and in \`event.detail.files\`you can get all files that user selected
3- render new \`<JBImageInput>\` component for each selected file.
4- inject the files you get in step 2 into your component by a \`ref.current.selectImageByFile\` function


remember first file is uploaded by original image input and you don't need to inject it to another input and thats why we start from index 1

### image accept type

tell web-component what image mimetype are acceptable

\`\`\`jsx
 <JBImageInput acceptTypes="image/jpeg,image/jpg,image/png,image/svg+xml"/>
\`\`\`
### set bridge for upload and download image

\`jb-image-input\` do not upload and download image automatically. it just handle ui states.
you must provide 2 function \`uploader\` and \`downloader\` to component like this:

\`\`\`jsx
<JBImageInput bridge={{
            uploader: function (file,config,uploadProgressCallbackFunction) { /*put your functionality here*/},
            downloader: function (value, config) { /*put your download functionality here*/}
}}/>
\`\`\`

you can create a class and pass class instance or create a simple object and pass it to component, depend on your need.
both uploader and downloader must return \`Promise\` and resolve it on task completed

bridge example for typescript:

\`\`\`typescript
import { JBImageInputBridge, JBImageInputConfig } from "jb-image-input/react";
type ImageData = {
    alt:string | null,
    url:string
}
export const imageBridge:JBImageInputBridge<ImageData> = {
    downloader(data, config) {
        const url = data.url;
        return new Promise((resolve, reject) => {
            axios.get(url, {responseType: "blob" }).then((response) => {
                var reader = new window.FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = function () {
                    var imageDataUrl = reader.result;
                    //return image in base64 format
                    resolve(imageDataUrl as string);
                };
            }).catch((err) => {
                console.error(err);
                reject();
            });
        });
    },
    uploader(file, config, onProgressCallback) {
        return new Promise((resolve, reject) => { 
            var bodyFormData = new FormData();
                bodyFormData.append('file', file);
                //if you need to send multiple data with image
                bodyFormData.append('another-field', config.customField)
            axios.post(config.uploadUrl as string,bodyFormData,{headers: { "Content-Type": "multipart/form-data" }}).then((res)=>{
                resolve(res.data);
            }).catch((err)=>{
                reject();
            })
         })
       
    },
}
\`\`\`


### set config

config is not something that our component use, it just the config you need in your bridge so you can set it however you want base on your need. we just keep it in component and send it to your uploader and downloader function so you can structure it your self. we just make a default structure as following object

\`\`\`javascript
this.config = {
            uploadUrl: '',
            downloadUrl: '',
            // developer can add every config he want to have on bridge functions
        };
\`\`\`

### custom placeholder
if you want to show your custom content when uploader is empty and ready to receive image in first place ypo can put your own content by using custom slot.
to make that happen you just have to put your div and content in \`JBImageInput\` tag like below example:

\`\`\`JSX
<JBImageInput>
    <div slot="placeholder">
            <div>custom placeholder</div>
    </div>
</JBImageInput>
\`\`\`
you can place any element you need base on you design in \`<div slot="placeholder">\` you can use anything other than div too for example \`<h1 slot="placeholder">\` but you must set attribute \`slot="placeholder"\` in it.

### max File Size

you can set max for user file size so user cant upload file larger than your limit. to do so just set \`maxFileSize\` like following example:

\`\`\`JSX
//set max file size to 2MB
<JBImageInput maxFileSize={2*1024*1024} />
\`\`\`

when user select file bigger than that image input will ignore file and dispatch(fire) the \`maxSizeExceed\` event

\`\`\`jsx
//set max file size to 2MB
<JBImageInput maxSizeExceed={(e)=>{
alert(\`your file is \${e.detail.file.size} size and it's bigger than 2MB\`);
}} />
\`\`\`

### set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.    

| css variable name                     | description                                                                                   |
| -------------                         | -------------                                                                                 |
| --jb-image-input-width                | web-component width default is \`100%\`                                                         |
| --jb-image-input-height               | web-component height default is \`100%\`                                                        |
| --jb-image-input-bg-color             | web-component background-color default is \`#f7f6f6\`                                           |
| --jb-image-input-border-radius        | web-component border radius default is \`24px\`                                                 |
| --jb-image-input-placeholder-p-color  | web-component placeholder icon primary color                                                  |
| --jb-image-input-placeholder-bg-color | web-component placeholder background-color default is transparent                             |
| --jb-image-input-placeholder-sec-color| placeholder secondary color                                                                   |

## Other Related Docs:

- see [jb-image-input](https://github.com/javadbat/jb-image-input) if you want to use this component as a web-component.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/form elements/JBImageInput/React Readme"}),`
`,e.jsx(i,{children:s})]})}function b(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{b as default};
