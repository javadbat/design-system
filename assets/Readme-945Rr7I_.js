import{j as e,M as s,l as i}from"./index-Cphv2dvp.js";import{useMDXComponents as l}from"./index-DVgGKjXv.js";import"./iframe-QEvQPsWT.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const a=`# jb-select

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-select)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-select/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-switch)](https://www.npmjs.com/package/jb-select)

pure js standalone select box web-component

- with search ability
- mobile friendly and responsive
- customizable style with css variable
- support typescript
- support both RTL & LTR direction pages
- custom validation
- support option dom customization
- can get array of js object as a option list and extract value and label from it to show it to user.


## Sample

- [Codepen](https://codepen.io/javadbat/pen/abpjKVP)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)
- [CodeSandbox](https://3f63dj.csb.app/samples/jb-select)

## using with JS frameworks

to use this component in **react** see [\`jb-select/react\`](https://github.com/javadbat/jb-select/tree/main/react);

## install

### using npm:

\`\`\`sh
    npm i jb-select
\`\`\`
### using cdn:

\`\`\`html
    <script src="https://unpkg.com/jb-select/dist/index.umd.js"><\/script>
\`\`\`
then in your HTML file just use 

\`\`\`html
<jb-select></jb-select>
\`\`\`

## set option list

if you want to add option to jb-select, you have 2 way:

- use \`<jb-option>\` tag 
- use \`<jb-option-list>\`

### using \`jb-option\`:

using \`jb-option\` is quite an easy job:

\`\`\`html
<jb-select label="gender">
    <jb-option value="male" >Male</jb-option>
    <jb-option value="female" >Female</jb-option>
    <jb-option value="0" >Other</jb-option>
</jb-select>
\`\`\`

its easy and simple to customization options display content. for example you can set option value like this for user to pick color:

\`\`\`html
<jb-option value="red"><span class="color-circle" style="background-color:#f00"></span>red</jb-option>
\`\`\`

you can also assign non-string value to option in js in some advance scenario:

\`\`\`js
document.querySelector('jb-option').value = {
    name:"foo",
    age:10
}
\`\`\`

by doing this, calling a \`document.querySelector('jb-select').value\` will give you the object in javascript

### using \`jb-option-list\`
this web-component is an assistance for developers to manage their option list in javascript without involving too much HTML in their logic

\`\`\`html
<jb-select>
    <jb-option-list />
</jb-select>
\`\`\`

\`\`\`js
const optionListElement = document.querySelector('jb-option-list')
optionListElement.optionList = [1,2,3]
//or you can provide object as a option
//if you provide array of object to optionList. remember to set callbacks as well so component would know how to extract label and value from it.
optionListElement.optionList = [
    {
        id:1,
        productName:"book"
    },
    {
        id:2,
        productName:"pen"
    },
]
//if you set an array of object into optionList you must set callback to set the visible content of an option
optionListElement.setCallback("getTitle", (option)=>option.productName);
//or if you have more complex ui
optionListElement.setCallback("getTitle", (option)=>{
    const optionContent = document.createElement("div");
    optionContent.innerHTML = \`\${option.id}-\${option.productName}\`;
    return optionContent;
});
//or optionally you can set the value getter callback if you want one field of an object as a value
optionListElement.setCallback("getValue", (option)=>option.id);

\`\`\`

\`jb-option-list\` use \`jb-option\` inside itself and just help you to manage your option list easier in js

## get value

its simple like any other form element use \`.value\` of dom

\`\`\`javascript
//get value
document.querySelector('jb-select').value;
// if you use a object in option list you can get selected option title beside value
document.querySelector('jb-select').selectedOptionTitle;
\`\`\`

## set value

to select value in your code you have 2 option:
1- set it via dom assign \`dropDownElement.value = yourValue\`
2- set through dom attribute \`<jb-select value="yourValueSting"></jb-select>\`
remember set value as attribute if your option is a plain string but in direct assign like first option you can attach both string or object value assignation

### placeholder

 you can set placeholder when data is empty.    
 \`search-placeholder\`work on mobile device when user focus on select and modal open this text will be placed in top search input box

 \`\`\`html
 <jb-select placeholder="please select" search-placeholder="type to search"></jb-select>
 \`\`\`

## validation
since select has a limited value options, validation have different story here. the only validation i really necessary here is required that indicate if user must select a value before he can move on so pass \`required\` attribute in dom then call \`checkValidity\` function like all other jb web component family. but if you need more customize validation just read [jb-validation](https://github.com/javadbat/jb-validation)

you can also set \`error\` attribute to pass error directly to the component

\`\`\`html
<jb-select error="your error message"></jb-select>
\`\`\`

## change empty state shape
when the searched value in select is not found, there is an open dropdown with the not found message.
you can customize this entire section by adding a div with the \`slot="empty-list"\`

like the example the below:

\`\`\`html
<jb-select>
    <div slot="empty-list-message">
        put your customize html here
    </div>
</jb-select>
\`\`\`

### Add Icon or Any Element into box
sometimes you want to add icon into the select box before value box.
you can customize this entire section by adding a div or any other Tag with the \`slot="start-section"\`

like the example the below:

\`\`\`html
<jb-select>
    <div slot="start-section">
        <img class="your-custom-icon" src="./path/to/file.svg">
    </div>
</jb-select>
\`\`\`

## callbacks

you can add callbacks to manage the way component works
for example if you have array of object as a option list and want to show custom title for option you can use:

\`\`\`js
    //to customizing selected value
    dropDownElement.callbacks.getSelectedValueDOM = (option)=>{
        const optionElement = document.createElement('div');
        optionElement.classList.add('selected-value');
        optionElement.innerHTML = '<span part="color-box" style="background-color:'+option.value+';width:16px;height:16px"></span>'+'&nbsp;'+option.name;
        return optionElement;
    }
\`\`\`

remember you must set this callback before set value and option list

## events

\`\`\`js
    dropDownElement.addEventListener('change',(e)=>{/*your function*/});
    dropDownElement.addEventListener('keyup',(e)=>{/*your function*/});
    dropDownElement.addEventListener('input',(e)=>{/*your function*/});

\`\`\`

## set custom style

in some cases in your project you need to change defualt style of web-component for example you need zero margin or different border-radius and etc.  
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component


| css variable name                         | description                                                                                   |
| -------------                             | -------------                                                                                 |
| --jb-select-margin                        | web-component margin default is \`0 0\`                                                         |
| --jb-select-width                         | change the select component width default is \`100%\`                                           |
| --jb-select-border-radius                 | web-component border-radius                                                                   |
| --jb-select-mobile-item-list-border-radius| web-component item list border-radius on mobile and tablet when list is open                  |
| --jb-select-border-color                  | border color of select in normal mode                                                         |
| --jb-select-border-color-selected         | border color when user select a value from list                                               |
| --jb-select-bgcolor                       | background color of input                                                                     |
| --jb-select-overlay-bgcolor               | background of select overlay when open in mobile and tablet screen                            |
| --jb-select-list-max-height               | max height of option list                                                                     |
| --jb-select-border-bottom-width           | width of border bottom                                                                        |
| --jb-select-border-width                  | width of border                                                                               |
| --jb-select-label-color                   | color of label                                                                                |
| --jb-input-label-font-size                | label font size default is \`0.8em\`                                                            |
| --jb-input-label-font-weight              | label font weight                                                                             |
| --jb-select-option-color                  | change option text color                                                                      |
| --jb-select-option-color-hover            | change option text color on hover                                                             |
| --jb-select-option-background-color       | background of options default is \`transparent\`                                                |
| --jb-select-option-background-color-hover | background of options on mouse hover                                                          |
| --jb-select-input-color                   | color of input value                                                                          |
| --jb-select-bgcolor-selected              | set background color for selected status                                                      |
| --jb-select-selected-value-color          | selected value text color                                                                     |
| --jb-select-selected-value-font-size      | font-size of selected value default is \`1.1rem\`                                               |
| --jb-select-message-color                 | message text color                                                                            |
| --jb-select-message-font-size             | font size of message default is \`0.7em\`                                                       |
| --jb-select-message-font-weight           | font weight of message box default is \`normal\`                                                |
| --jb-select-placeholder-color             | placeholder color default is \`initial\`                                                        |
| --jb-select-placeholder-font-size         | placeholder font-size default is \`1.1rem\`                                                     |
| --jb-select-height                        | jb-select box height                                                                          |
| --jb-select-mobile-search-input-height    | when user open select on mobile there is a search box input this var will set its height      |
| --jb-select-mobile-item-list-margin       | when user open select on mobile there is gap between search box & list that can be customized |
| --jb-select-list-padding                  | padding of opened list box default is \`16px 0\`                                                |
| --jb-select-close-bg-color                | close button bg-color                                                                         |
| --jb-select-close-x-color                 | close button x color                                                                          |
| --jb-select-close-bg-opacity              | close button bg opacity default is \`0.4\`                                                      |
| --jb-select-mobile-input-bgcolor          | background color search input when open in mobile                                             |
| --jb-select-mobile-search-border-width    | when user open select on mobile, search box can have its own border width config              |
| --jb-select-mobile-search-border-color    | when user open select on mobile, search box can have its own border color config              |
| --jb-select-mobile-search-border-bottom-width | when user open select on mobile, search box can have its own border bottom width config   |
| --jb-select-mobile-search-border-bottom-color | when user open select on mobile, search box can have its own border bottom color config   |
| --jb-select-mobile-search-border-radius    | when user open select on mobile, search box can have its own border radius                   |
| --jb-select-middle-div-height              | separator line between input and list default is \`0px\` and hidden but you can change it      | 
| --jb-select-middle-div-color               | change separator line color                                                                  |
| --jb-select-middle-div-margin              | change separator line margin                                                                 |
| --jb-select-middle-div-mobile-margin       | change separator line margin in mobile modal                                                 |
| --jb-select-middle-div-radius              | change separator line border-radius                                                          |
| --jb-select-list-scroll-color              | list item scroll color                                                                       |
| --jb-select-list-scroll-border-radius      | list item scroll border-radius default is \`4px\`                                              |
| --jb-select-select-box-margin              | margin of internal element called select box that wrapper display element of form in one box |
| --jb-select-value-font-size                | search input value font size default is \`1.1rem\`                                             |
| --jb-select-list-border-width              | border-width for list wrapper                                                                |
| --jb-select-mobile-modal-border-radius     | opened modal in mobile border radius. useful to change when you changed \`--jb-select-mobile-modal-height\` before |
| --jb-select-mobile-modal-height            | modal height when list open in mobile                                                        |

## Other Related Docs:

- see [\`jb-select/react\`](https://github.com/javadbat/jb-select/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/form elements/JBSelect/Readme"}),`
`,e.jsx(i,{children:a})]})}function j(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n()}export{j as default};
