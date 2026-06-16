import{j as t,M as s,o as i}from"./index-CJCalR8i.js";import{useMDXComponents as a}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const r=`# jb-switch

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-switch)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-switch/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-switch)](https://www.npmjs.com/package/jb-switch)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-switch)

switch web-component with these benefits:

- support loading state
- pure js and ready to use
- beautiful animation
- customizable with your style with just CSS variable

## Demo
-[storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbswitch)

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--switch%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-switch/tree/main/react)

## Usage

## Attributes/Properties

| name | type | description |
| --- | --- | --- |
| \`value\` | property/attribute | Current boolean value. |
| \`true-title\` | attribute | Caption for the true state. |
| \`false-title\` | attribute | Caption for the false state. |
| \`disabled\` | attribute | Disables the switch. |
| \`loading\` | attribute/property | Shows loading state. |
| \`change\` | event | Fired when the value changes. |

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
if you want to set a custom style to this web-component all you need is to set CSS variable in parent scope of web-component.
#### usage example:

\`\`\`css
body{
  //if you want to change color of switch 
  --jb-switch-bg-color-active: green;
}
\`\`\`
#### variable list
 
| CSS variable name                             | description                                                               |
| -------------                                 | -------------                                                             |
| --jb-switch-bg-color-active                   | background color of switch when value is true                             |
| --jb-switch-bg-color                          | background color of switch when value is false                            |
| --jb-switch-ring-color                        | trigger ring color when value is false                                    |
| --jb-switch-ring-color-active                 | trigger ring color when value is true                                     |

## Related Docs
- see [\`jb-switch/react\`](https://github.com/javadbat/jb-switch/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/form elements/JBSwitch/Readme"}),`
`,t.jsx(i,{children:r})]})}function g(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{g as default};
