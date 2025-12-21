import{j as e,M as i,k as a}from"./index-DzOfCLMC.js";import{useMDXComponents as s}from"./index-CKD13vE0.js";import"./iframe-N29VKzwE.js";import"./index-CC6F48bw.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`# jb-image-input

image input web component let user upload image and see what is uploaded.

- Ability multiple image upload.

- Can connect to your custom REST service bridge (you can have your own way of uploading image).

- Show loading.

- Can be used in both instant upload or keep image and upload image on form submit.

- Customizable format.

- Add Size & format limitation. 

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbimageinput)
- [CodePen](https://codepen.io/javadbat/pen/XWpoEYY)

## using with JS frameworks

to use this component in **react** see [\`jb-image-input/react\`](https://github.com/javadbat/jb-image-input/tree/main/react);


## usage

\`\`\`sh
npm i jb-image-input
\`\`\`

\`\`\`html
<jb-image-input></jb-image-input>
\`\`\`

## current status

you can access current image input status by \`element.status\`

## check validation

jb-image-input use [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation. so for more information you can read [jb-validation](https://github.com/javadbat/jb-validation) documentation.
by set \`required\` and \`maxFileSize\` you can easily have these 2 validation but for more advanced validation functions you can provide your own validation function list

\`\`\`javascript
imageInput.validation.list = [
        {
            validator: ({file})=>{return file.size < 500 * 1024},
            message: 'your file size must be above 500KB'
        },
    ];
//check and show validations by simple calling the function (pass false if you dont want to show error and just want to check silently)
const result = imageInput.validation.checkValidation(true);
\`\`\`

for required:

\`\`\`html
<jb-image-input required />
<!-- required field with custom error -->
<jb-image-input required="please select image" />
\`\`\`
## multi image selector

by default jb-image-input don't support multi image upload but in set of hack you can implement a system that user can select and upload multiple image
we have 4 step to help you implement multi image input

1- set \`multiple\` attribute to dom to let user select multiple image

\`\`\`html
<jb-image-input multiple="true">
\`\`\`

2- \`imageSelected\` event is fired on user select image and in \`event.detail.files\`you can get all files that user selected
3- create new \`<jb-image-input>\` dom by js with \`document.createElement('jb-image-input')\`
4- inject the files you get in step 2 into your component by a \`selectImageByFile\` function

\`\`\`js
document.querySelector('jb-image-input').addEventListener('imageSelected',function(e){
    const files = e.detail.files;
    if (files.length > 1) {
            for (let i = 1; i < files.length; i++) {
                document.querySelectorAll('jb-image-input')[i].selectImageByFile(files[i])
            }
            this.addImageInput();
        }
    
});

\`\`\`

remember first file is uploaded by original image input and you don't need to inject it to another input and thats why we start from index 1

## image accept type

tell web-component what image mimetype are acceptable

\`\`\`js
 document.querySelectorAll('jb-image-input').acceptTypes = "image/jpeg,image/jpg,image/png,image/svg+xml"

\`\`\`
## set bridge for upload and download image

\`jb-image-input\` do not upload and download image automatically. it just handle ui states.
you must provide 2 function \`uploader\` and \`downloader\` to component like this:

\`\`\`javascript
document.querySelectorAll('jb-image-input').bridge = {
            uploader: function (file,config,uploadProgressCallbackFunction) { /*put your functionality here*/},
            downloader: function (value, config) { /*put your functionality here*/}
        };
\`\`\`

you can create a class and pass class instance or create a simple object and pass it to component, depend on your need.
both uploader and downloader must return \`Promise\` and resolve it on task completed

| argument variable name              | description                                                                                   |
| -------------                       | -------------                                                                                 |
| file                                | the file that user select from his computer                                                   |
| config                              | the config developer provided to component. most of the times projects has a one bridge instance for many image input so in this case you build only one bridge and pass it to all of your components and pass parameter like \`url\`, \`method\` , \`fieldName\`, ... in config so your bridge can decide how to upload and download app |
| uploadProgressCallbackFunction      | its a optional parameter you can use to tell component how much file uploaded currently                                     |
| value                               | value is a data that your uploader promise resolved for example if your uploader is: \`uploader:()=>{upload().then(()=>{resolve({fileName:'img.jpg',path:'x.com/img.jpg',id:'10'})})}\` then your value wil be \`{fileName:'img.jpg',path:'x.com/img.jpg',id:'10'}\`|

## set config

config is not something that our component use, it just the config you need in your bridge so you can set it however you want base on your need. we just keep it in component and send it to your uploader and downloader function so you can structure it your self. we just make a default structure as following object

\`\`\`javascript
this.config = {
            uploadUrl: '',
            downloadUrl: '',
            // developer can add every config he want's to get on bridge functions
        };
\`\`\`

## custom placeholder
if you want to show your custom content when uploader is empty and ready to receive image in first place ypo can put your own content by using custom slot.
to make that happen you just have to put your div and content in \`jb-image-input\` tag like below example:

\`\`\`HTML
<jb-image-input>
    <div slot="placeholder">
            <div>custom placeholder</div>
    </div>
</jb-image-input>
\`\`\`

you can place any element you need base on you design in \`<div slot="placeholder">\` you can use anything other than div too for example \`<h1 slot="placeholder">\` but you must set attribute \`slot="placeholder"\` in it.

## max File Size

you can set max for user file size so user cant upload file larger than your limit. to do so just set \`maxFileSize\` like following example:

\`\`\`javascript
//set max file size to 2MB
document.querySelector('jb-image-input').maxFileSize = 2*1024*1024;
\`\`\`

when user select file bigger than that image input will  dispatch(fire) the \`maxSizeExceed\` event.

\`\`\`javascript
//set max file size to 2MB
document.querySelector('jb-image-input').addEventListener('maxSizeExceed',(e)=>{
    alert(\`your file is \${e.detail.file.size} size and it's bigger than 2MB\`);
});
\`\`\`

## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component 

| css variable name                     | description                                                                                   |
| -------------                         | -------------                                                                                 |
| --jb-image-input-width                | web-component width default is \`100%\`                                                         |
| --jb-image-input-height               | web-component height default is \`100%\`                                                        |
| --jb-image-input-bg-color             | web-component background-color                                                                |
| --jb-image-input-border-radius        | web-component border radius                                                                   |
| --jb-image-input-placeholder-p-color  | web-component placeholder icon primary color                                                  |
| --jb-image-input-placeholder-bg-color | web-component placeholder background-color default is transparent                             |
| --jb-image-input-placeholder-sec-color| placeholder secondary color                                                                   |

## Other Related Docs:

- see [\`jb-image-input/react\`](https://github.com/javadbat/jb-image-input/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/)

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/form elements/JBImageInput/Readme"}),`
`,e.jsx(a,{children:l})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{h as default};
