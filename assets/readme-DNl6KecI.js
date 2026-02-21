import{j as t,M as s,k as i}from"./index-DEqm3j50.js";import{useMDXComponents as a}from"./index-DVgGKjXv.js";import"./iframe-DxbMd_zR.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# jb-switch

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-switch)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-switch/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-switch)](https://www.npmjs.com/package/jb-switch)

switch web-component with these benefits:

- support loading state
- pure js and ready to use
- beautiful animation
- customizable with your style with just css variable

## Demo
-[storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbswitch)

## using with JS frameworks

to use this component in **react** see [\`jb-switch/react\`](https://github.com/javadbat/jb-switch/tree/main/react);

## usage

\`\`\`sh
npm i jb-switch
\`\`\`

\`\`\`html
<jb-switch true-title="my enable" false-title="my-disable"></jb-switch>
\`\`\`
### set loading
\`\`\`javascript

document.querySelector("jb-switch").isLoading = true; //true or false

\`\`\`
### get/set value
\`\`\`javascript
alert(document.querySelector("jb-switch").value);
document.querySelector("jb-switch").value = true; //true or false

\`\`\`
## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
#### usage example:

\`\`\`css
body{
  //if you want to change color of switch 
  --jb-switch-bg-color-active: green;
}
\`\`\`
#### variable list
 
| css variable name                             | description                                                               |
| -------------                                 | -------------                                                             |
| --jb-switch-bg-color-active                   | background color of switch when value is true                             |
| --jb-switch-bg-color                          | background color of switch when value is false                            |
| --jb-switch-ring-color                        | trigger ring color when value is false                                    |
| --jb-switch-ring-color-active                 | trigger ring color when value is true                                     |

## Other Related Docs:

- see [\`jb-switch/react\`](https://github.com/javadbat/jb-switch/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/form elements/JBSwitch/Readme"}),`
`,t.jsx(i,{children:r})]})}function d(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{d as default};
