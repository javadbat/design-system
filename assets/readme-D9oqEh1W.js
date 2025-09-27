import{j as n,M as o,m as a}from"./index-4SoVgFZH.js";import{useMDXComponents as r}from"./index-CpNkpSEJ.js";import"./iframe-Bs11x9Ig.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-pin-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-pin-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-pin-input/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-pin-input)](https://www.npmjs.com/package/jb-pin-input)

pure js standalone pin input web-component

- smart paste algorithm
- mobile friendly
- light and fast
- support typescript
- accept persian & arabic number char
- have \`complete\` custom event for when user enter all digits
- dynamic char count
- support \`jb-validation\` for inside validation mechanism for easier validations

sample in codepen:<https://codepen.io/javadbat/pen/zYPEqNJ>
sample in github:<https://javadbat.github.io/jb-pin-input>

## using with JS frameworks

to use this component in **react** see [\`jb-pin-input/react\`](https://github.com/javadbat/jb-pin-input/tree/main/react);

## Install & Usage 

you can load this web component with 2 method:

1- using npm:
if you have modern app with module mechanism and npm you can install and import module from npm:

\`\`\`sh
npm i jb-pin-input
\`\`\`

in your js file:

\`\`\`javascript
import 'jb-pin-input';
\`\`\`

2- using cdn:

\`\`\`html
<script src="https://unpkg.com/jb-pin-input"><\/script>
\`\`\`

### in HTML view

\`\`\`html
<jb-pin-input></jb-pin-input>
\`\`\`
## set value

to select value in your code you have 2 option:
1- set it via dom assign \`pinInputDom.value = yourValue\`
2- set through dom attribute \`<jb-pin-input value="yourValueSting"></jb-pin-input>\`
remember set value as attribute if your option is a plain string but in direct assign like first option you can attach both string or object value assignation

## char length

you may need to change the length of your pin for example in some app it's 5 in some 6 or more.    
so if you need to change the count of pin inputs you can set \`charLength\` property in component like this:

\`\`\`js
document.querySelector('jb-pin-input').charLength = 5;
\`\`\`
## custom validation

jb-pin-input use [jb-validation](https://github.com/javadbat/jb-validation) module for validation, with it you can set your own custom validation like any other jb web components family to achieve this you must create a array of validations and assign them to component like this:

\`\`\`js
const validationList = [
        {
            validator:/^1234$/g,
            message:'you can only enter 1234'
        },
        {
          validator:(value)=>{
            return value.startsWith("1");
          },
          message:"pin input must be start with 1"
        }
];
document.querySelector('jb-date-input').validation.list = validationList
\`\`\`

to trigger validation and check is the element has a valid value:

\`\`\`js
// if show error was false, in case of error component dont show error itself and function will return if data valid or not
const showError = true
const validationObj = dom.validation.checkValidity({showError})
\`\`\`

for more advance validation read [jb-validation](https://github.com/javadbat/jb-validation) doc.

## events

\`\`\`js

    dropDownElement.addEventListener('load',(e)=>{/*your function*/});
    dropDownElement.addEventListener('init',(e)=>{/*your function*/});
    dropDownElement.addEventListener('change',(e)=>{/*your function*/});
    dropDownElement.addEventListener('keyup',(e)=>{/*your function*/});
    dropDownElement.addEventListener('input',(e)=>{/*your function*/});
    dropDownElement.addEventListener('beforeinput',(e)=>{/*your function*/});
    //⭐ special event
    dropDownElement.addEventListener('enter',(e)=>{/*when user press enter button*/});
    //⭐ special event
    dropDownElement.addEventListener('complete',(e)=>{/*when user enter the last char and after all validation passes*/});

\`\`\`
## Auto focus

pin input will gain focus when loaded and initiated automatically if you set \`autofocus\` attribute
\`\`\`html
<jb-pin-input autofocus></jb-pin-input>
\`\`\`

## set custom styles

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.  
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component
| css variable name                          | description                                                                                   |
| -------------                              | -------------                                                                                 |
| --jb-pin-input-inputs-wrapper-width        | width of inputs wrapper,default is \`100%\`                                                     |
| --jb-pin-input-bottom-line-color           | color of bottom line of each number.                                                          |
| --jb-pin-input-bottom-line-border-radius   | border radius of bottom line.                                                                 |
| --jb-pin-input-bottom-line-height          | height of bottom line of each number. default value is \`4px\`                                  |
| --jb-pin-input-bottom-line-display         | display of bottom line of each number. default value is \`block\`                               |
| --jb-pin-input-bottom-line-color-active    | color of bottom line of each number when user focus on it.                                    |
| --jb-pin-input-wrapper-border-width        | border width of each number input wrapper. default value is \`0\`                               |
| --jb-pin-input-wrapper-border-color        | border color of each number input wrapper.                                                    |
| --jb-pin-input-wrapper-border-style        | border style of  each number input wrapper. default value is \`solid\`                          |
| --jb-pin-input-wrapper-border-color-active | border color of each number input wrapper  when user focus on it.                             |
| --jb-pin-input-pin-color                   | color of inputted text.default value is #333                                                  |
| --jb-pin-input-pin-height                  | height of  each number input. default value is \`40px\`                                         |
| --jb-pin-input-pin-font-size               | font size of  each number input. default value is \`24\`                                        |   
| --jb-pin-input-pin-font-weight             | font weight of  each number input. default value is \`900\`                                     |   
| --jb-pin-input-wrapper-box-shadow          | border width of each number input wrapper. default value is \`none\`                            |
| --jb-pin-input-error-message-margin        | margin of error message. default value is \`0\`                                                 |
| --jb-pin-input-error-message-color         | color of error message.                                                                       |


## Other Related Docs:

- see [\`jb-pin-input/react\`](https://github.com/javadbat/jb-pin-input/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/)

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function i(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/form elements/JBPinInput/Readme"}),`
`,n.jsx(a,{children:s})]})}function f(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i()}export{f as default};
