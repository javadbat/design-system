import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CNtKknPt.js";import{_ as n,d as r,k as i,u as a}from"./blocks-B4p_hQX5.js";import{t as o}from"./mdx-react-shim-B0WH_Ez6.js";var s,c=e((()=>{s=`# jb-select-react

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-select)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-select/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-select-react)](https://www.npmjs.com/package/jb-select-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-select)

select component for react 

> this component is a react wrapper for [jb-select](https://github.com/javadbat/jb-select)

Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-select) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBSelect.tsx) if you want to see and play with code

Storybook: [JBSelect docs](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)

## Installation
\`\`\`sh
npm install jb-select
\`\`\`

## Usage
use below syntax in your render function.
\`\`\`jsx
import {JBSelect} from 'jb-select/react';

<JBSelect></JBSelect>
\`\`\`

## When to use

Use \`JBSelect\` when the user must choose one or more values from a known option list and you need search, validation, custom option content, mobile-friendly popover behavior, or form association.

## Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`TValue\` | Controlled selected value. In multiple mode, pass an array. |
| \`label\` | \`string\` | Visible label text and accessible label. |
| \`message\` | \`string\` | Helper text shown when no validation error is visible. |
| \`placeholder\` | \`string\` | Placeholder when no value is selected. |
| \`searchPlaceholder\` | \`string\` | Placeholder used by the mobile search input. |
| \`required\` | \`boolean\` | Enables required validation. |
| \`error\` | \`string\` | External validation error message. |
| \`validationList\` | \`ValidationItem<ValidationValue<TValue>>[]\` | Custom validation rules from \`jb-validation\`. |
| \`hideClear\` | \`boolean\` | Hides the clear button. |
| \`getSelectedValueDOM\` | \`(option: any) => HTMLElement\` | Custom selected value renderer. See the [custom selected value content guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-custom-selected-value-content--docs). |
| \`multiple\` | \`boolean\` | Enables multiple selection. See the [multiple selection guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-multiple-selection--docs). |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Visual size variant. |
| \`name\` | \`string\` | Form field name. |
| \`disabled\` | \`boolean\` | Disables the select. |
| \`popoverPosition\` | \`'fixed' \\| 'absolute'\` | Controls popover positioning. See the [popover positioning guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-popover-positioning--docs). |

## Events

| prop | event |
| --- | --- |
| \`onChange\` | \`change\` |
| \`onInput\` | \`input\` |
| \`onKeyUp\` | \`keyup\` |
| \`onLoad\` | \`load\` |
| \`onInit\` | \`init\` |

## label
use label property to describe your select component.

\`\`\`jsx
<JBSelect label='your label name' ></JBSelect>
\`\`\`

## option list
if you want to add option to jb-select, you have 2 way:

For help choosing between \`JBOption\` and \`JBOptionList\`, see the [options guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-options--docs).

- use \`<JBOption>\`
- use \`<jbOptionList>\`

### using \`JBOption\`:

using \`JBOption\` is quite an easy job:

\`\`\`jsx
import {JBSelect,JBOption} from 'jb-select/react';

  <JBSelect label="gender">
      <JBOption value="male">Male</JBOption>
      <JBOption value="female">Female</JBOption>
      <JBOption value="0">Other</JBOption>
  </JBSelect>
  //or
  const optionList = ["1","2","3"]
  <JBSelect { ...args}>
    {
      optionList.map((option)=>(<JBOption key={option} value={option}>{option}</JBOption>))
    }
  </JBSelect>
\`\`\`
you can also set object or any other data type as an value
\`\`\`jsx
const [colorList] = useState([
    {
      id: 1,
      name: "Red",
      value: "#f00",
    },
    {
      id: 2,
      name: "Green",
      value: "#0f0",
    },
    {
      id: 3,
      name: "Blue",
      value: "#00f",
    },
    {
      id: 4,
      name: "Yellow",
      value: "#ff0",
    },
  ]);
  //this function is used to create selected value dom and can be styled using jb-select::part.
function getSelectedValueDOM(option) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("selected-value");
    optionElement.innerHTML =
      '<span part="color-box" style="background-color:' + option.value +
      ';width:16px;height:16px;display:inline-block;"></span>' + "&nbsp;" +
      option.name;
    return optionElement;
}
return(
    <JBSelect label="normal" getSelectedValueDOM={getSelectedValueDOM}>
        {
          colorList.map((color)=>{
            return (<JBOption key={color.value} value={color}><span className="color-circle" style={{backgroundColor:color.value}}></span>{color.name}</JBOption>);
          })
        }
    </JBSelect>
)
\`\`\`

For a live example, safe DOM-creation guidance, styling with \`::part(...)\`, and the current single-select limitation, see the [custom selected value content guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-custom-selected-value-content--docs).
### using \`jbOptionList\`:
\`JBOptionList\` will create options for you and it's good for when you want some easy to use options without complexity of update & manage JSX and it's a little faster for high performance app

example:

\`\`\`jsx
import {JBSelect,JBOptionList} from 'jb-select/react';

render(){
    const list = [{name:'reza',family:'asadi',userId:1},{name:'peter',family:'peterson',userId:2}];
    getOptionTitle:(option)=>{
        return \`\${option.name} \${option.family}\`;
    },
    getOptionValue:(option)=>{
        return option.userId;
    }
    return(
        <JBSelect label='your label name' >
            <JBOptionList optionList={list} getTitle={getOptionTitle} getValue={getOptionValue}/>
        </JBSelect>;
    );
}
\`\`\`

## Add Icon or Any Element into box

sometimes you want to add icon into the select box before value box.
you can customize this entire section by adding a div or any other Tag with the \`slot="start-section"\`

like the example the below:

\`\`\`jsx
<JBSelect>
    <div slot="start-section">
        <img class="your-custom-icon" src="./path/to/file.svg">
    </div>
</JBSelect>
\`\`\`

## validation

since select has a limited value options, validation have different story here. the only validation i really necessary here is required that indicate if user must select a value before he can move on. so pass \`required\` prop, then call \`checkValidity\` function like all other jb web component family. but if you need more customize validation just read [jb-validation](https://github.com/javadbat/jb-validation)

you can also set \`error\` attribute to pass error directly to the component

\`\`\`jsx
<JBSelect error="your error message"></JBSelect>
\`\`\`

## set custom style

please read [jb-select](https://github.com/javadbat/jb-select) custom style section.

## Shared Documentation

For web-component behavior, events, slots, and CSS variables, see [\`jb-select\`](https://github.com/javadbat/jb-select).

## AI agent notes

- Import \`JBSelect\`, \`JBOption\`, and \`JBOptionList\` from \`jb-select/react\`.
- Use \`JBOption\` for static JSX options and \`JBOptionList\` for array-driven options.
- Use \`searchPlaceholder\`, \`hideClear\`, and \`getSelectedValueDOM\` in React; the wrapper maps them to the underlying web-component API.
- Use \`multiple\` when \`value\` should be an array.
- Use \`error\` for externally controlled validation errors.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBSelect/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};