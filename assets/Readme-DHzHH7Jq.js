import{j as e,M as s,o as i}from"./index-Bm-ihScP.js";import{useMDXComponents as l}from"./index-B8rYRX2K.js";import"./iframe-aUp4bIN_.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const a=`# jb-select

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-select)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-select/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-select)](https://www.npmjs.com/package/jb-select)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-select)

pure js standalone select box web-component.

- with search ability
- mobile friendly and responsive
- customizable style with CSS variable
- support typescript
- support both RTL & LTR direction pages
- custom validation
- support option dom customization
- can get array of js object as a option list and extract value and label from it to show it to user.

## When to use

Use \`jb-select\` when the user must choose one or more values from a known option list and you need search, validation, custom option content, mobile-friendly popover behavior, or form association.

Use \`jb-option\` for hand-written options. Use \`jb-option-list\` when the options come from a JavaScript array and you want callbacks to extract title, value, or custom DOM.

## Demo
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)
- [Codepen](https://codepen.io/javadbat/pen/abpjKVP)
- [CodeSandbox](https://3f63dj.csb.app/samples/jb-select)

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--select%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-select/tree/main/react)

## Installation

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

## API reference

### \`jb-select\` attributes

| name | type | default | description |
| --- | --- | --- | --- |
| [\`value\`](#get-value) | \`string\` | \`""\` | Initial selected value from markup. Use the property for non-string values or runtime updates. |
| \`label\` | \`string\` | \`""\` | Visible label text and accessible aria label. |
| \`message\` | \`string\` | \`""\` | Helper text shown when no validation error is visible. |
| \`name\` | \`string\` | \`""\` | Form field name. |
| [\`multiple\`](#multiple) | \`boolean\` | \`false\` | Enables multiple selection. |
| [\`placeholder\`](#placeholder) | \`string\` | \`""\` | Placeholder when no value is selected. |
| \`search-placeholder\` | \`string\` | \`"search"\` | Placeholder used by the mobile search input while open. |
| [\`required\`](#validation) | \`boolean\` | \`false\` | Enables required validation. |
| [\`error\`](#validation) | \`string\` | \`""\` | External validation error message. |
| \`hide-clear\` | \`boolean\` | \`false\` | Hides the clear button. |
| \`disable-auto-validation\` | \`boolean\` | \`false\` | Disables automatic validation on user interactions. |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | \`md\` style defaults | Visual size variant. |

### \`jb-select\` properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| [\`value\`](#get-value) | \`TValue \\| TValue[] \\| null\` | no | Canonical selected value. In multiple mode this is an array. |
| \`textValue\` | \`string\` | no | Current search/filter text. |
| \`selectedOptionTitle\` | \`string\` | yes | Visible title of the selected option or selected options. |
| \`validation\` | \`ValidationHelper<ValidationValue<TValue>>\` | yes | Validation helper from \`jb-validation\`; set \`validation.list\` for custom rules. |
| \`callbacks\` | \`JBSelectCallbacks<TValue>\` | no | Callback map, including \`getSelectedValueDOM\`. |
| \`multiple\` | \`boolean\` | no | Enables or disables multiple selection. |
| \`disabled\` | \`boolean\` | no | Disables the select and closes the option list. |
| \`required\` | \`boolean\` | no | Enables required validation. |
| \`initialValue\` | \`TValue \\| null\` | no | Baseline value used by \`isDirty\`. |
| \`isDirty\` | \`boolean\` | yes | \`true\` when current \`value\` differs from \`initialValue\`. |
| \`popoverPosition\` | \`'fixed' \\| 'absolute'\` | no | Controls how the option popover is positioned. See the [popover positioning guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-popover-positioning--docs) for scrollable and clipped-container examples. |
| \`validationMessage\` | \`string\` | yes | Current validation message. |

### \`jb-select\` methods

| name | returns | description |
| --- | --- | --- |
| \`checkValidity()\` | \`boolean\` | Runs validation without showing the error message. Dispatches \`invalid\` when invalid. |
| \`reportValidity()\` | \`boolean\` | Runs validation and shows the first error message. Dispatches \`invalid\` when invalid. |
| \`focus()\` | \`void\` | Focuses the search input and opens the option list. |
| \`blur()\` | \`void\` | Closes the option list, clears search text, and validates. |

### \`jb-option\` API

| name | type | description |
| --- | --- | --- |
| \`value\` | attribute/property | Option value. Use the property for object values. |
| \`selected\` | property | Whether the option is selected. |
| \`hidden\` | property | Whether the option is hidden by filtering. |
| \`active\` | property | Whether the option is the active keyboard/hover target. |
| \`optionContentText\` | property | Text used for default filtering. |
| \`toggleOption()\` | method | Selects or deselects the option using the normal click behavior. |

### \`jb-option-list\` API

| name | type | description |
| --- | --- | --- |
| \`optionList\` | \`TOption[]\` property | Source array used to render options. |
| \`optionListDom\` | property | Rendered \`jb-option\` elements. |
| \`setCallback(key, callback)\` | method | Sets \`getTitle\`, \`getValue\`, or \`getContentDOM\`. |

## set option list

if you want to add option to jb-select, you have 2 way:

For help choosing between the two approaches, see the [options guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-options--docs).

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

For the standalone \`jb-option\` API and CSS variables, see [jb-option README](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-jboption-readme--docs).

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
## Multiple 

by just set multiple Attribute (like native select).

For React and web-component examples, see the [multiple selection guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-multiple-selection--docs).

\`\`\`html
<jb-select multiple></jb-select>
\`\`\`
you can also use \`jb-checkbox\` if you want to add checkbox to your multi select.

\`\`\`html
<jb-select multiple>
    <jb-option value="1"><jb-checkbox label="option1"/></jb-option>
    <jb-option value="2"><jb-checkbox label="option2"/></jb-option>
</jb-select>
\`\`\`

## Validation
since select has a limited value options, validation have different story here. the only validation i really necessary here is required that indicate if user must select a value before he can move on so pass \`required\` attribute in dom then call \`checkValidity\` function like all other jb web component family. but if you need more customize validation just read [jb-validation](https://github.com/javadbat/jb-validation)

you can also set \`error\` attribute to pass error directly to the component

\`\`\`html
<jb-select error="your error message"></jb-select>
\`\`\`

## Change empty state shape
when the searched value in select is not found, there is an open dropdown with the not found message.
you can customize this entire section by adding a div with the \`slot="empty-list-message"\`

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

## Callbacks

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

For a complete React and web-component example, styling guidance, and the single-select limitation, see the [custom selected value content guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-custom-selected-value-content--docs).

## Events

| event | cancelable | when it fires |
| --- | --- | --- |
| \`change\` | yes | When selected value changes. Call \`event.preventDefault()\` to cancel a single-select change and restore the previous value. |
| \`input\` | no | When the user types in the search input. |
| \`keyup\` | no | Re-dispatched from the search input. Arrow keys navigate options and Enter toggles the active option. |
| \`keypress\` | no | Re-dispatched from the search input. |
| \`invalid\` | no | When \`checkValidity()\` or \`reportValidity()\` finds an invalid value. |
| \`load\` | no | In \`connectedCallback\`, before \`init\`. |
| \`init\` | no | In \`connectedCallback\`, after initial setup. |

\`\`\`js
    dropDownElement.addEventListener('change',(e)=>{/*your function*/});
    dropDownElement.addEventListener('keyup',(e)=>{/*your function*/});
    dropDownElement.addEventListener('input',(e)=>{/*your function*/});

\`\`\`
## Parts

| part | description |
| --- | --- |
| \`selected-value\` | Internal \`selected-value\`. |
| \`search-input\` | Internal \`search-input\`. |
| \`arrow-icon\` | Internal \`arrow-icon\`. |
| \`popover\` | Internal \`popover\`. |

## Slots

| slot | description |
| --- | --- |
| default | Option content. Use \`jb-option\` or \`jb-option-list\` children. |
| \`start-section\` | Content rendered before the selected value/search area. |
| \`select-arrow-icon\` | Replaces the default arrow icon. |
| \`empty-list-message\` | Custom empty-state content shown when no option is visible. |

## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.  
if you want to set a custom style to this web-component all you need is to set CSS variable in parent scope of web-component


| CSS variable name                         | description                                                                                   |
| -------------                             | -------------                                                                                 |
| --jb-select-margin                        | web-component margin default is \`0 0\`                                                         |
| --jb-select-width                         | change the select component width default is \`100%\`                                           |
| --jb-select-rounded                       | main value for corner radius it must be a single value like \`1rem\` not \`1rem 1rem\` used for all \`border-radius\`|
| --jb-select-box-border-radius             | box \`border-radius\` it's full value so you can change it whatever you want                    |
| --jb-select-border-color                  | border color of select in normal mode                                                         |
| --jb-select-border-color-selected         | border color when user select a value from list                                               |
| --jb-select-bgcolor                       | background color of input                                                                     |
| --jb-select-list-max-height               | max height of option list                                                                     |
| --jb-select-border-bottom-width           | width of border bottom                                                                        |
| --jb-select-border-width                  | width of border                                                                               |
| --jb-select-label-color                   | color of label                                                                                |
| --jb-select-label-font-size               | label font size default is \`0.8em\`                                                            |
| --jb-select-label-font-weight             | label font weight                                                                             |
| --jb-select-bgcolor-selected              | set background color for selected status                                                      |
| --jb-select-selected-value-font-size      | font-size of selected value default is \`1.1rem\`                                               |
| --jb-select-message-color                 | message text color                                                                            |
| --jb-select-message-font-size             | font size of message default is \`0.7em\`                                                       |
| --jb-select-placeholder-color             | placeholder color default is \`initial\`                                                        |
| --jb-select-placeholder-font-size         | placeholder font-size default is \`1.1rem\`                                                     |
| --jb-select-height                        | jb-select box height                                                                          |
| --jb-select-list-padding                  | padding of opened list box default is \`16px 0\`                                                |
| --jb-select-mobile-input-bgcolor          | background color search input when open in mobile                                             |
| --jb-select-list-scroll-color              | list item scroll color                                                                       |
| --jb-select-list-scroll-border-radius      | list item scroll border-radius default is \`4px\`                                              |
| --jb-select-box-margin                     | margin of internal element called select box that wrapper display element of form in one box |
| --jb-select-arrow-icon-margin | Customize arrow icon margin. |
| --jb-select-base-z-index | Customize base z index. |
| --jb-select-bg-color-disabled | Customize bg color disabled. |
| --jb-select-border-color-focus | Customize border color focus. |
| --jb-select-box-padding-end | Customize box padding end. |
| --jb-select-empty-list-placeholder-color | Customize empty list placeholder color. |
| --jb-select-height-lg | Customize height lg. |
| --jb-select-height-sm | Customize height sm. |
| --jb-select-height-xl | Customize height xl. |
| --jb-select-height-xs | Customize height xs. |
| --jb-select-input-font-size | Customize input font size. |
| --jb-select-input-font-size-lg | Customize input font size lg. |
| --jb-select-input-font-size-sm | Customize input font size sm. |
| --jb-select-input-font-size-xl | Customize input font size xl. |
| --jb-select-input-font-size-xs | Customize input font size xs. |
| --jb-select-label-font-size-lg | Customize label font size lg. |
| --jb-select-label-font-size-sm | Customize label font size sm. |
| --jb-select-label-font-size-xl | Customize label font size xl. |
| --jb-select-label-font-size-xs | Customize label font size xs. |
| --jb-select-label-margin | Customize label margin. |
| --jb-select-message-box-display | Customize message box display. |
| --jb-select-message-color-error | Customize message color error. |
| --jb-select-message-font-size-lg | Customize message font size lg. |
| --jb-select-message-font-size-sm | Customize message font size sm. |
| --jb-select-message-font-size-xl | Customize message font size xl. |
| --jb-select-message-font-size-xs | Customize message font size xs. |
| --jb-select-overlay-bg-color | Customize overlay bg color. |
| --jb-select-rounded-lg | Customize rounded lg. |
| --jb-select-rounded-sm | Customize rounded sm. |
| --jb-select-rounded-xl | Customize rounded xl. |
| --jb-select-rounded-xs | Customize rounded xs. |
| --jb-select-selected-value-font-size-lg | Customize selected value font size lg. |
| --jb-select-selected-value-font-size-sm | Customize selected value font size sm. |
| --jb-select-selected-value-font-size-xl | Customize selected value font size xl. |
| --jb-select-selected-value-font-size-xs | Customize selected value font size xs. |
| --jb-select-selected-value-padding | Customize selected value padding. |
| --jb-select-selected-value-padding-lg | Customize selected value padding lg. |
| --jb-select-selected-value-padding-sm | Customize selected value padding sm. |
| --jb-select-selected-value-padding-xl | Customize selected value padding xl. |
| --jb-select-selected-value-padding-xs | Customize selected value padding xs. |
| --jb-select-value-color | Customize value color. |
| --jb-select-value-color-disabled | Customize value color disabled. |

### jb-option CSS variables

For usage examples and the standalone option API, see [jb-option README](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-jboption-readme--docs).

| CSS variable name | description |
| --- | --- |
| --jb-option-border-radius | Option border radius. |
| --jb-option-padding | Option padding. |
| --jb-option-font-size | Option font size. |
| --jb-option-min-height | Option minimum height. |
| --jb-option-color | Option text color. |
| --jb-option-color-active | Option text color on hover or keyboard navigate. |
| --jb-option-background-color | Option background color. |
| --jb-option-background-color-active | Option background color on hover or keyboard navigate. |

## Related Docs
- see [\`jb-select/react\`](https://github.com/javadbat/jb-select/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.

## AI agent notes

This package includes [\`custom-elements.json\`](./custom-elements.json) so documentation tools, IDEs, and AI coding agents can discover \`jb-select\`, \`jb-option\`, \`jb-option-list\`, their attributes, properties, events, slots, CSS variables, and public methods.

The package also exposes \`"customElements": "custom-elements.json"\` in \`package.json\`, which gives tools a stable package-level pointer to the manifest. This field is documented by the Custom Elements Manifest project in its [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages) section.

In \`custom-elements.json\`, the \`exports\` array describes what each module makes available:

| kind | meaning |
| --- | --- |
| \`js\` | A JavaScript/TypeScript export from the module, such as \`JBSelectWebComponent\`. |
| \`custom-element-definition\` | The custom element registration for a tag name, such as \`jb-select\`. |

- Import \`jb-select\` once before using \`<jb-select>\`, \`<jb-option>\`, or \`<jb-option-list>\`.
- Use \`.value\` for the canonical selected value; use \`selectedOptionTitle\` only for display text.
- Use \`jb-option\` for static options and \`jb-option-list\` for array-driven options.
- Use \`multiple\` when \`.value\` should be an array.
- Set \`error\` for externally controlled validation errors; the component observes the attribute and updates its validation UI.
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/form elements/JBSelect/Readme"}),`
`,e.jsx(i,{children:a})]})}function g(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{g as default};
