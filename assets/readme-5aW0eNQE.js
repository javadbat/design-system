import{j as n,M as o,o as i}from"./index-CJCalR8i.js";import{useMDXComponents as a}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const p=`# jb-password-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-password-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-password-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-password-input)](https://www.npmjs.com/package/jb-password-input)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-password-input)

this superset component on [jb-input](https://github.com/javadbat/jb-input) , just for password input with following benefits:

- all jb-input benefits include customizations, validation,...
- show password toggle button to let user see inputted password.
- ready to use password validation like minimum length & required.

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--password--input%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-password-input/tree/main/react)

## Installation
### using npm

1- install npm package

\`\`\`sh
npm i jb-password-input
\`\`\`

2- import module in one of your js in page

\`\`\`js
import 'jb-password-input';

\`\`\`

3- use component in your html or jsx file like any other html tag

\`\`\`html
<jb-password-input label="password:" message="subtitle of input box"></jb-password-input>
\`\`\`
### using cdn

1- add script tag to your html file.

\`\`\`HTML
<script src="https://unpkg.com/jb-input/dist/jb-input.umd.js"><\/script>
<script src="https://unpkg.com/jb-password-input/dist/jb-password-input.umd.js"><\/script>
\`\`\`
2- use web component like any other html tag whenever you need

\`\`\`html
<div class="some-app-div">
  <jb-password-input label="password:" message="subtitle of input box"></jb-password-input>
</div>
\`\`\`

## Attributes/Properties

| name | type | description |
| --- | --- | --- |
| \`value\` | property | Current password input value. |
| \`minLength\` | property | Minimum accepted password length. |
| \`label\` | attribute | Input label inherited from \`jb-input\`. |
| \`message\` | attribute | Helper or validation message inherited from \`jb-input\`. |
| \`change\` | event | Fired when the value changes. |

## get/set value

\`\`\`js
//get value
const inputValue = document.getElementByTagName('jb-password-input').value;
//set value
document.getElementByTagName('jb-password-input').value = "new string";
\`\`\`

## set minimum length

\`\`\`js
document.getElementByTagName('jb-password-input').minLength = 8;
\`\`\`
You can also set your own validation but we put this option for ease of use.

## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set CSS variable in parent scope of web-component.
since jb-password-input uses jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list.

## Styling Dependencies

\`jb-password-input\` uses \`jb-input\` internally. \`jb-input\` CSS variables also apply when styling the password input.

## CSS Variables
| CSS variable name | description |
| --- | --- |
| --jb-password-input-active-eye-color | Customize active eye color. |
| --jb-password-input-eye-color | Customize eye color. |

## Related Docs
- see [\`jb-password-input/react\`](https://github.com/javadbat/jb-password-input/tree/main/react) if you want to use this as a React component.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function s(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/form elements/Inputs/JBPasswordInput/Readme"}),`
`,n.jsx(i,{children:p})]})}function h(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s()}export{h as default};
