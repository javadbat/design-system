import{j as e,M as o,m as i}from"./index-CnAtPVDz.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import"./iframe-ChBj5yRh.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const s=`# jb-textarea

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-textarea)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-textarea/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-textarea)](https://www.npmjs.com/package/jb-textarea)

simple textarea web component to input long text

- lightweight
- zero dependency
- advance validation with [jb-validation](https://github.com/javadbat/jb-validation) module
- help you manage validation in easy way
- config auto height grow ability with max height
- web component so you can use it with any framework you need

## Demo

[storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbtextarea)
[codepen][https://codepen.io/javadbat/pen/poRZVXe]

## using with JS frameworks

to use this component in **react** see [\`jb-textarea/react\`](https://github.com/javadbat/jb-textarea/tree/main/react);

## installation and setup

\`\`\`bash
npm i jb-textarea
\`\`\`

\`\`\`html
<jb-textarea label="توضیحات" value="" message="متن زیر باکس"></jb-textarea>
\`\`\`

## get and set value

\`\`\`js
document.querySelector("jb-textarea").value;
// return inputted text
document.querySelector("jb-textarea").value = "salam";
set value to salam
\`\`\`
### set validation

jb-textarea use [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation so for more information you can read it's documentation.  
for simple usage you can set validation to your input:

\`\`\`js
//you have 2 ways: 
//1- set list directly 
    description.validation.list = [
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
//2- pass a function that returns the validation list so on each validation process we execute your callback function and get the needed validation list
const result = document.getElementByTagName('jb-textarea').validation.addValidationListGetter(getterFunction)
\`\`\`

### check validation

like any other jb design system you can access validation by \`validation\` property:

\`\`\`js
//access validation module
document.getElementByTagName('jb-textarea').validation
// check if input pass all the validations. showError is a boolean that determine your intent to show error to user on invalid status.
const result = document.getElementByTagName('jb-textarea').validation.checkValidity(showError)

\`\`\`

## events

\`\`\`js
document.querySelector("jb-textarea").addEventListener('change',func);
document.querySelector("jb-textarea").addEventListener('keydown',func);
document.querySelector("jb-textarea").addEventListener('keyup',func);
document.querySelector("jb-textarea").addEventListener('keypress',func);
document.querySelector("jb-textarea").addEventListener('input',func);
// custom Keyboard event that raise when user press enter (unlike jb-input this enter event raise after keypress because it could be cancelled with prevent default)
document.querySelector("jb-textarea").addEventListener('enter',func);
\`\`\`

## auto height grow

you can set \`autoHeight\` to true so when user type something and text overflow a textarea height component will grow by itself in boundary of \`--jb-textarea-min-height\` and \`--jb-textarea-max-height\` that you set by css variable 

\`\`\`js
document.querySelector("jb-textarea").autoHeight = true;
\`\`\`

the good point of set boundary with css variable is you can set different min or max base on device by CSS media queries.

## set custom style
you have 2 way to customize style,

1. using selectors like\`:states\` or \`::part\` selector
\`\`\`css
jb-textarea::part(label){
  font-size: 2rem;
}
jb-textarea:states(invalid)::part(label){
  color:red;
}
\`\`\`
we have \`label\`, \`textarea-box\`, \`textarea\`, \`message\` as a supported part in our component. you can also combine them with \`disabled\`, \`invalid\` states for different style in different states.

2. using css variable

| css variable name                     | description                                                                                   |
| -------------                         | -------------                                                                                 |
| --jb-textarea-margin                  | web-component margin default is \`0 12px\`                                                      |
| --jb-textarea-border-radius           | web-component border-radius                                                                   |
| --jb-textarea-border-width            | web-component border-width default is \`1px\`                                                   |
| --jb-textarea-border-color            | border color of select in normal mode                                                         |
| --jb-textarea-border-color-focus      | border color of select in normal mode                                                         |
| --jb-textarea-bgcolor                 | background color of input                                                                     |
| --jb-textarea-border-bottom-width     | border bottom thickness default is \`3px\`                                                      |
| --jb-textarea-label-font-size         | font size of input label default is \`0.8em\`                                                   |
| --jb-textarea-value-font-size         | font size of input value default is \`1.1em\`                                                   |
| --jb-textarea-value-color             | color of value default in \`initial\`                                                           |
| --jb-textarea-message-font-size       | font size of message we show under input                                                      |
| --jb-textarea-message-error-color     | change color of error we show under input                                                     |
| --jb-textarea-min-height              | minimum height of text area default is \`80px\`                                                 |
| --jb-textarea-max-height              | minimum height of text area default is \`none\`                                                 |
| --jb-textarea-placeholder-color       | placeholder color default is 'initial'                                                        |
| --jb-textarea-placeholder-font-size   | placeholder font-size default is \`initial\`                                                    |
| --jb-textarea-label-color             | label color                                                                                   |    
| --jb-textarea-value-color             | value color                                                                                   |

## add custom element in textarea box

in jb-textarea you can put icon or any other custom html DOM in textarea box. to doing so you just have to place custom DOM in \`jb-textarea\` tag and add \`slot="inline-start-section"\` or \`slot="inline-end-section"\` to place it before or after input field.
example:

\`\`\`HTML
<jb-textarea>
    <div slot="inline-start-section">before</div>
    <div slot="inline-end-section">after</div>
</jb-textarea>
\`\`\`

## Other Related Docs:

- see [\`jb-textarea/react\`](https://github.com/javadbat/jb-textarea/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://github.com/javadbat/design-system/blob/main/docs/component-list.md) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/form elements/JBTextarea/Readme"}),`
`,e.jsx(i,{children:s})]})}function x(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{x as default};
