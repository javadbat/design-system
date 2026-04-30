import{j as t,M as i,k as a}from"./index-wY0pWQ88.js";import{useMDXComponents as s}from"./index-DVRRELxc.js";import"./iframe-CEP8xrdv.js";import"./index-CwcVQgaJ.js";import"./index-BEjDVx3I.js";import"./index-C8bfMtE3.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`# jb file input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-file-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-file-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-file-input)](https://www.npmjs.com/package/jb-file-input)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-file-input)

File upload web component.
this component just let user select file and wait for you to get the value and handle it yourself and it's not handling any kind of upload or something

## Samples
 - [Codepen](https://codepen.io/javadbat/pen/xxgmWNB)
 - [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbfileinput)

## Using with JS frameworks

to use this component in **react** see [\`jb-file-input/react\`](https://github.com/javadbat/jb-file-input/tree/main/react);

## using with JS frameworks

- [<img src="https://img.shields.io/badge/jb--file--input/react-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbfileinput-react-readme--docs)

## Usage

just import package with import or from js CDN and write web component tag in your html

\`\`\`html
<script>
  import 'jb-file-input'
<\/script>

<jb-file-input></jb-file-input>
\`\`\`


## Placeholder Title

you can change file input place holder text by set \`placeholder-title="select your special file"\` attribute in dom

## Value
\`jb-file-input\` use file as default value type. means you can get value by \`dom.value\` and set it by \`dom.value= yourFile\`.

### Reset Value
you can reset input file value by \`dom.value = null\` or \`dom.resetValue()\`

## Loading State
jb-file-input dont show any loading by default because it's just a file input and not file uploader. but you can show upload state in file uploader by set some attribute and property.

in HTML

\`\`\`html
<jb-file-input uploading>
\`\`\`

or in javascript:

\`\`\`ts
// show upload section 
document.querySelector("jb-file-input").setAttribute("uploading","")
// set upload percent
document.querySelector("jb-file-input").uploadPercent = 10; //10% of file uploaded
\`\`\`
## Download Button

when file upload is complete user access to download button and you can add your own function to download file by add event listener:

\`\`\`ts
document.querySelector("jb-file-input").addEventListener("download",()=>{
  //download file however you want
})
\`\`\`
download button has no default functionality because file download in every project has it's own way so we just create a ui button to enable you ad function for it.

### Hide Download Button
if you dont want download button to be shown add \`hide-download\` attribute to dom:
\`\`\`HTML
<jb-file-input hide-download></jb-file-input>
\`\`\`

## Other Related Docs:

- see [\`jb-file-input/react\`](https://github.com/javadbat/jb-file-input/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/form elements/JBFileInput/Readme"}),`
`,t.jsx(a,{children:l})]})}function f(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{f as default};
