import{j as e,M as c,m as a}from"./index-CKMAxIRN.js";import{useMDXComponents as i}from"./index-CpNkpSEJ.js";import"./iframe-BUdcblGi.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-checkbox

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-checkbox)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-checkbox/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-checkbox)](https://www.npmjs.com/package/jb-checkbox)

checkbox web-component with smooth animation

- customizable ui
- check-animation
- form & validation support

![demo](demo-gif.gif)

## usage

\`\`\`terminal
npm i jb-checkbox
\`\`\`

\`\`\`HTML
<script>
  import 'jb-checkbox';
<\/script>
<jb-checkbox label="checkbox sample"/>
<!-- or if you want put custom html as a label -->
<jb-checkbox><div slot="label">checkbox sample</div></jb-checkbox>
\`\`\`
## get and set value

\`\`\`javascript
const checkBoxDom = document.querySelector('jb-checkbox');
checkBoxDom.value = true;
console.log(checkBoxDom.value);
\`\`\`
## disable checkbox

\`\`\`javascript
const checkBoxDom = document.querySelector('jb-checkbox');
checkBoxDom.disabled = true;
console.log(checkBoxDom.disabled);
\`\`\`
or

\`\`\`html
<jb-checkbox disabled />
\`\`\`

## validation

jb-checkbox implement  [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation. so for more information you can read [jb-validation](https://github.com/javadbat/jb-validation) documentation.  
for simple usage you can set validation to your input:

\`\`\`js
    checkBoxDom.validation.list = [
        {
            validator:(value)=>{
              //value is boolean
             return value == true;
            },
            message: 'you must check mark before continue'
        }
    ]
    //return boolean of if all validation return true
  const result = checkBoxDom.checkValidity()
    
\`\`\`
unlike other \`jb design system\` web-components \`jb-checkbox\` dont have any native wat to show validation error to the user and will only validate and return result for you to take an action as you like.

## customize styles:

you have 2 way to customize style,
1. using \`::part\` selector
\`\`\`css
jb-checkbox::part(label){
  font-size: 2rem;
}
jb-checkbox:states(checked)::part(label){
  font-weight: 800;
}
\`\`\`
we have \`label\`, \`checkbox\`, \`check-bg\`, \`check-mark\` as a supported part in our component. you can also combine them with \`disabled\`, \`checked\` states for different style in different states.

2. using css variable

here is the list of available css variables that you can use for your component

| css variable name                      | description                                      |
| -------------                          | -------------                                    |
| --jb-checkbox-label-color              | label color                                      |
| --jb-checkbox-check-bg-color           | checkbox background color                        |
| --jb-checkbox-check-bg-color-checked   | checkbox background color when checked           |
| --jb-checkbox-check-bg-color-disabled  | checkbox background color when disabled          |
| --jb-checkbox-check-mark-color         | check mark color                                 |
| --jb-checkbox-check-mark-color-checked | check mark color when checked                    |

## Other Related Docs:

- see [jb-checkbox/react](https://github.com/javadbat/jb-checkbox/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.


`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/form elements/JBCheckbox/Readme"}),`
`,e.jsx(a,{children:s})]})}function p(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{p as default};
