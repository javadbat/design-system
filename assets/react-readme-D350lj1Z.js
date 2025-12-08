import{j as e,M as o,m as i}from"./index-BTXIbzeN.js";import{useMDXComponents as s}from"./index-CH6z84fh.js";import"./iframe-cY4qOO6A.js";import"./index-DP23ewiS.js";import"./index-BGsmrW1E.js";import"./index-FCbevRKN.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# jb-textarea-react

simple textarea react component to input long text

- lightweight
- zero dependency
- help you manage validation in easy way
- config auto height grow ability with max height

- [codeSandbox preview](https://3f63dj.csb.app/samples/jb-textarea) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBTextarea.tsx) if you want to see and play with code

- [storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbtextarea)

## installation and setup

\`\`\`sh
npm i jb-textarea-react
\`\`\`

\`\`\`jsx
import {JBTextarea} from 'jb-textarea/react';

<JBTextarea label="label" value={valueState} message="text under the box"></JBTextarea>
\`\`\`

## get and set value

\`\`\`jsx
<JBTextarea label="label" value={valueState} onChange={(e)=>{setValueState(e.target.value)}}></JBTextarea>
\`\`\`
## set validation

you can set validation to your input by creating a validationList array and passing in to validationList props:

\`\`\` javascript
    const validationList = [
        {
            validator: /.{3}/g,
            message: 'description must have 3 char at least'
        },
    //you can use function as a validator too
        {
            validator: (valueString)=>{return valueString == "hello"},
            message: 'you can only type hello in the box'
        },
    //you can also return string in validator if you want custom error message in some edge cases
        {
            validator: (valueString)=>{
               if(valueString.includes("*")){
                return 'you cant write * in your text'
               }
               return true;
            },
            message: 'default error when return false'
        },
    ];
\`\`\`
\`\`\`jsx
    <JBInput validationList={validationList}></JBInput>
\`\`\`

## check validation

you can check if an input value meet your validation standard by creating a ref of the element using \`React.createRef()\`.
\`\`\`javascript
    const elementRef = React.createRef();
    const isValid = elementRef.current.validation.checkValidity(true).isAllValid;
\`\`\`
if \`isValid\` is \`true\` the value of input is valid.


## events

\`\`\`JSX
<JBTextarea  onChange={(e)=>{}}></JBTextarea>
<JBTextarea  onKeydown={(e)=>{}}></JBTextarea>
<JBTextarea  onKeyup={(e)=>{}}></JBTextarea>
<JBTextarea  onKeypress={(e)=>{}}></JBTextarea>
<JBTextarea  onInput={(e)=>{}}></JBTextarea>
// custom event for when user press enter
<JBTextarea  onEnter={(e)=>{}}></JBTextarea>
\`\`\`

## auto height grow

you can set \`autoHeight\` to true so when user type something and text overflow a textarea height component will grow by itself in boundary of \`--jb-textarea-min-height\` and \`--jb-textarea-max-height\` that you set by css variable 

\`\`\`js
<JBTextarea  autoHeight></JBTextarea>
\`\`\`

the good point of set boundary with css variable is you can set different min or max base on device by CSS media queries.

## set custom style

 see see [jb-textarea](https://github.com/javadbat/jb-textarea) document. there is no difference between these 2 in styling.

## Other Related Docs:

- see [jb-textarea](https://github.com/javadbat/jb-textarea) if you want to use this component as a web-component in other frameworks.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/form elements/JBTextarea/React Readme"}),`
`,e.jsx(i,{children:r})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{b as default};
