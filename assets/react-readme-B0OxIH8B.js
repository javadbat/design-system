import{j as n,M as o,m as s}from"./index-DBCWd-VW.js";import{useMDXComponents as i}from"./index-CpNkpSEJ.js";import"./iframe-DZssrPjE.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# JBPaymentInput React component

this component is React.js wrapper for [jb-payment-input](https://www.npmjs.com/package/jb-payment-input) web component

payment info input \`react component\` with this benefit:

- easy to add custom regex or function validation.

- multiple validation with different message.

- support both RTL and LTR.

- add label and message in UX friendly format.

- customizable ui with css variable so you can have multiple style in different scope of your app.

- support both card number and shaba number

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-payment-input) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPaymentInput.tsx) if you want to see and play with code

## install

### using npm

\`\`\` command
npm i jb-payment-input
\`\`\`
in your jsx file
\`\`\`js
import {JBPaymentInput} from 'jb-payment-input/react';
\`\`\`
\`\`\` jsx
<JBPaymentInput  label="card number" inputType="CARD"></JBPaymentInput>
<JBPaymentInput  label="shaba number" inputType="SHABA"></JBPaymentInput>
\`\`\`


## events
- onChange
\`\`\`jsx 
    <JBPaymentInput onChange={(event) => console.log(event.target.value)}></JBPaymentInput>
\`\`\`
- onKeyUp
\`\`\`jsx 
    <JBPaymentInput onKeyUp={(event) => console.log(event.target.value)}></JBPaymentInput>
\`\`\`
- onEnter
\`\`\`jsx
    //when user press Enter button
    <JBPaymentInput onEnter={(event) => console.log(event.target.value)}></JBPaymentInput>
\`\`\`
- onKeydown
\`\`\`jsx 
    <JBPaymentInput onKeydown={(event) => console.log(event.target.value)}></JBPaymentInput>
\`\`\`
- onFocus
\`\`\`jsx 
    <JBPaymentInput onFocus={(event) => console.log(event.target.value)}></JBPaymentInput>
\`\`\`
- onBlur
\`\`\`jsx 
    <JBPaymentInput onBlur={(event) => console.log(event.target.value)}></JBPaymentInput>
\`\`\`



## set validation

you can set validation to your input by creating a validationList array and passing in to \`validationList\` props:

\`\`\` javascript
    const validationList = [
        {
            validator: /.{3}/g,
            message: 'عنوان حداقل باید سه کاکتر طول داشته باشد'
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
\`\`\`
\`\`\`jsx
    <JBPaymentInput validationList={validationList}></JBPaymentInput>
\`\`\`

## check validation

you can check if an input value meet your validation standard by creating a ref of the element using \`React.createRef()\`.
\`\`\`javascript
    const elementRef = React.createRef();
    const isValid = elementRef.current.validation.checkValidity(true).isAllValid;
\`\`\`
if \`isValid\` is \`true\` the value of input is valid.

### separator (divider) string
payment input by default use space to separate part of card number or shaba number. for example it will show \`1234123412341234\` as \`1234 1234 1234 1234\` but you can change it to what char or even string you want for eample devide it by \`-\` and you will see \`1234-1234-1234-1234\`.    
to make this happen you just have to set \`separator\` prop in jsx.
\`\`\`html
<jbPaymentInput separator="-"></jbPaymentInput>
\`\`\`

## other props
<!-- TODO: update it -->
this component support all attributes comes from [\`jb-input/react\`](https://github.com/javadbat/jb-input/tree/main/react)


## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
since jb-payment-input use jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list.

## Other Related Docs:

- see [jb-payment-input](https://github.com/javadbat/jb-payment-input) if you want to use this component as a pure-js web-component

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function a(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/form elements/Inputs/JBPaymentInput/React Readme"}),`
`,n.jsx(s,{children:r})]})}function h(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a()}export{h as default};
