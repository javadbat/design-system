import{j as n,M as i,l as o}from"./index-26JHfB1s.js";import{useMDXComponents as s}from"./index-CKD13vE0.js";import"./iframe-D5inFDHC.js";import"./index-CC6F48bw.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# jb-payment-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-payment-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-payment-input/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-payment-input)](https://www.npmjs.com/package/jb-payment-input)

payment input web component for 16 digit card number and shaba number with this benefit:

- easy to add custom regex or function validation.

- multiple validation with different message.

- support both RTL and LTR.

- add label and message in UX friendly format.

- customizable ui with css variable so you can have multiple style in different scope of your app.

- will accept persian/arabic number char and convert them to english char

- you can add iran bank image beside input to show which bank card number is inputted.

- support smart paste so user can copy text that contains irrelevant words beside card number but we will extract card number from the text.  

this component is a superset component on [jb-input](https://github.com/javadbat/jb-input) , just for payment info input with extra filter and ready to use validator


## using with JS frameworks

to use this component in **react** see [\`jb-payment-input/react\`](https://github.com/javadbat/jb-payment-input/tree/main/react);

## Demo   

- [codepen](https://codepen.io/javadbat/pen/rNvWdve)
- [storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput)


## install

### using npm

1- install npm package

\`\`\`sh
npm i jb-payment-input
\`\`\`

2- import module in one of your js in page

\`\`\`js
import 'jb-payment-input';

\`\`\`

3- use component in your html or jsx file like any other html tag

\`\`\`html
<jb-payment-input input-type="CARD" class="" label="card number:" message="subtitle of input box"></jb-payment-input>
\`\`\`
### using cdn

1- add script tag to your html file.

\`\`\`HTML
<script src="https://unpkg.com/jb-input/dist/jb-input.umd.js"><\/script>
<script src="https://unpkg.com/jb-payment-input/dist/jb-payment-info.umd.js"><\/script>
\`\`\`
2- use web component like any other html tag whenever you need

\`\`\`html
<div class="some-app-div">
  <jb-payment-input input-type="CARD" class="" label="card number:" message="subtitle of input box"></jb-payment-input>
</div>
\`\`\`

## get/set value

\`\`\`js
//get value
const inputValue = document.getElementByTagName('jb-payment-input').value;
//set value
document.getElementByTagName('jb-payment-input').value = "new string";
\`\`\`
## add bank icons
for card number input you can add bank icon in the start or end of input (currently only support iran banks) so when user type first 6 digit of card number it will show bank logo.    
to make this happen you just have to import and add \`bank-indicator\` web component
\`\`\`js
import 'jb-payment-input/bank-indicator';
//or for umd import in some edge cases
import 'jb-payment-input/dist/bank-indicator/bank-indicator.umd.js';
\`\`\`
### set custom style

| css variable name          | description                                      |
| -----------------          | -----------                                      |
| --bank-indicator-padding   | bank logo padding,the default value is \`8px 16px\`|

\`\`\`html
 <jb-payment-input input-type="CARD" class="" label="card number:" message="with bank indicator">
   <bank-indicator slot="end-section"></bank-indicator>
 </jb-payment-input>
\`\`\`
you can set slot with \`end-section\` or \`start-section\` for position.    
if you want to use bank-indicator outside of jb-payment-input you can set \`prefix\` attribute with 6 digit number of bank card number.
\`\`\`html
   <!-- for example for melli card -->
   <bank-indicator prefix="603799"></bank-indicator>
\`\`\`

## events

this component use \`jb-input\` events for example you can use these events or more:

\`\`\`js
document.getElementByTagName('jb-payment-input').addEventListener('change',(event)=>{console.log(event.target.value)});
document.getElementByTagName('jb-payment-input').addEventListener('keyup',(event)=>{console.log(event.target.value)});
document.getElementByTagName('jb-payment-input').addEventListener('keydown',(event)=>{console.log(event.target.value)});
document.getElementByTagName('jb-payment-input').addEventListener('keypress',(event)=>{console.log(event.target.value)});
document.getElementByTagName('jb-payment-input').addEventListener('input',(event)=>{console.log(event.target.value)});
document.getElementByTagName('jb-payment-input').addEventListener('beforeinput',(event)=>{console.log(event.target.value)});
// when user press enter on keyboard(dispatched on onKeyup)
document.getElementByTagName('jb-payment-input').addEventListener('enter',(event)=>{console.log(event.target.value)});
\`\`\`

## separator (divider) string

payment input by default use space to separate part of card number or shaba number. for example it will show \`1234123412341234\` as \`1234 1234 1234 1234\` but you can change it to what char or even string you want for example divide it by \`-\` and you will see \`1234-1234-1234-1234\`.    
to make this happen you just have to set \`separator\` attribute in html or set \`separatorString\` property with js.
\`\`\`html
<jb-payment-input separator="-" input-type="CARD"></jb-payment-input>
\`\`\`
or
\`\`\`js
document.getElementByTagName('jb-payment-input').separatorString = "";
\`\`\`

## validation

you can set custom validation to your input like any other jb design system component by 

\`\`\`js
    const validationList = [
        {
            validator: /^603799 .*$/g,
            message: 'we only accept "melli" bank'
        },
        //you can use function as a validator too
        {
            validator: ({displayValue,value})=>{return value !== "50413731111111"},
            message: 'this id card in banned'
        },
        {
            validator: ({displayValue,value})=>{
                if(value.startsWith('11111111')){
                    return 'we dont accept foo bank cards'
                }
                if(displayValue.startsWith('2222 2222')){
                    return 'we dont accept bar bank cards'
                }
                if(value.startsWith('3333')){
                    return false
                }
                return true
            },
            message: 'default message when return false'
        },
    ]
    document.getElementByTagName('jb-payment-input').validation.list = validationList;
\`\`\`
## other attribute
you may use all [jb-input](https://github.com/javadbat/jb-input) attribute + below attributes

| attribute name  | description                                                                                    |
| -------------   | -------------                                                                                  |
| input-type      | \`CARD\` for 16 card number and \`SHABA\` to type shaba number input                               |
| separator       | separation char. default is \` \`(space) but you can set any text you want like \`-\` or \`_\`       |

## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
since jb-payment-input use jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list


## Other Related Docs:

- see [\`jb-payment-input/react\`](https://github.com/javadbat/jb-payment-input/tree/main/react) if you want to use this component in a react app.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function a(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/form elements/Inputs/JBPaymentInput/Readme"}),`
`,n.jsx(o,{children:r})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a()}export{h as default};
