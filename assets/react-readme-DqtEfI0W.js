import{j as n,M as i,m as a}from"./index-uLC8VMdW.js";import{useMDXComponents as p}from"./index-CpNkpSEJ.js";import"./iframe-D3OTXEMF.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# JBPinInput React component

this component is React.js wrapper for [jb-pin-input](https://www.npmjs.com/package/jb-pin-input) web component with these benefits:

- smart paste algorithm
- mobile friendly
- light and fast
- support typescript
- accept persian & arabic number char
- onComplete event for when user fill all pins

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-pin-input) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPinInput.tsx) if you want to see and play with code

## install

run following command to install it with npm
\`\`\`cmd
npm i jb-pin-input
\`\`\`

## usage

just import the package and use it like other react component

\`\`\`jsx
import {JBPinInput} from 'jb-pin-input/react'

<JBPinInput></JBPinInput>
\`\`\`
## char length

if you want to change the pin length to 5 digit or 10 digit or anything else, you just have to provide it to \`charLength\` Prop

\`\`\`jsx
<JBPinInput charLength={5}></JBPinInput>
\`\`\`

## autofocus

if you want pin input get focus as rendered in app just add autofocus props
\`\`\`jsx
<JBPinInput autofocus></JBPinInput>
\`\`\`

### set custom style

in some cases in your project you need to change defualt style of web-component for example you need zero margin or different border-radius and etc.  
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.  
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component
| css variable name                          | description                                                                                   |
| -------------                              | -------------                                                                                 |
| --jb-pin-input-inputs-wrapper-width        | width of inputs wrapper,default is \`100%\`                                                     |
| --jb-pin-input-bottom-line-color           | color of bottom line of each number.  default value is \`#9DA6B6\`                              |
| --jb-pin-input-bottom-line-border-radius   | border radius of bottom line.  default value is \`16px\`                                        |
| --jb-pin-input-bottom-line-height          | height of bottom line of each number. default value is \`4px\`                                  |
| --jb-pin-input-bottom-line-display         | display of bottom line of each number. default value is \`block\`                               |
| --jb-pin-input-bottom-line-color-active    | color of bottom line of each number when user focus on it. default value is \`#1565D8\`         |
| --jb-pin-input-wrapper-border-width        | border width of each number input wrapper. default value is \`0\`                               |
| --jb-pin-input-wrapper-border-color        | border color of each number input wrapper. default value is \`black\`                           |
| --jb-pin-input-wrapper-border-style        | border style of  each number input wrapper. default value is \`solid\`                          |
| --jb-pin-input-wrapper-border-color-active | border color of each number input wrapper  when user focus on it. default value is \`#1565D8\`  |
| --jb-pin-input-pin-color                   | color of inputted text.default value is #333                                                   |
| --jb-pin-input-pin-height                  | height of  each number input. default value is \`40px\`                                         |
| --jb-pin-input-pin-font-size               | font size of  each number input. default value is \`24\`                                        |   
| --jb-pin-input-pin-font-weight             | font weight of  each number input. default value is \`900\`                                     |   
| --jb-pin-input-wrapper-box-shadow          | border width of each number input wrapper. default value is \`none\`                            |
| --jb-pin-input-error-message-margin        | margin of error message. default value is \`0\`                                                 |
| --jb-pin-input-error-message-color         | color of error message. default value is \`#dc3545\`                                            |


## Other Related Docs:

- see [\`jb-pin-input\`](https://github.com/javadbat/jb-pin-input) if you want to use this component as a pure-js web-component

- see [All JB Design system Component List](https://javadbat.github.io/design-system/

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/form elements/JBPinInput/React Readme"}),`
`,n.jsx(a,{children:r})]})}function h(e={}){const{wrapper:t}={...p(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
