import{j as n,M as o,l as i}from"./index--62s9pcL.js";import{useMDXComponents as a}from"./index-DVgGKjXv.js";import"./iframe-4vgA8s8-.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const p=`# jb-password-input

this superset component on [jb-input](https://github.com/javadbat/jb-input) , just for password input with following benefits:

- all jb-input benefits include customizations, validation,...
- show password toggle button to let user see inputted password.
- ready to use password validation like minimum length.

## using with JS frameworks

to use this component in **react** see [\`jb-password-input/react\`](https://github.com/javadbat/jb-password-input/tree/main/react);

## install

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
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
since jb-payment-input use jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list.

## Other Related Docs:

- see [\`jb-password-input/react\`](https://github.com/javadbat/jb-password-input/tree/main/react) if you want to use this as a React component.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function s(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/form elements/Inputs/JBPasswordInput/Readme"}),`
`,n.jsx(i,{children:p})]})}function h(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s()}export{h as default};
