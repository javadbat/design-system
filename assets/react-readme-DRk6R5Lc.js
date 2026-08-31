import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-R8sYsw_T.js";import{d as n,f as r,j as i,y as a}from"./blocks-D8Klu8h2.js";import{t as o}from"./mdx-react-shim-D95ljHKT.js";var s,c=e((()=>{s=`# jb-select-react

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-select)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-select/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-select-react)](https://www.npmjs.com/package/jb-select-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-select)

select component for react 

> this component is a react wrapper for [jb-select](https://github.com/javadbat/jb-select)

Explore the [basic select demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--normal), [multiple selection](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--multiple), [validation](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--required), and [custom selected content](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--custom-selected-value-render). For standalone code, use the [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-select) or [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBSelect.tsx).

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

Use \`JBSelect\` when the user must choose one or more values from a known option list and you need search, validation, custom option content, mobile-friendly popover behavior, or form association. See the [normal select demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--normal) for the default interaction.

## Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`TValue\` | Controlled selected value. In multiple mode, pass an array; see [controlled values](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--with-value). |
| \`label\` | \`string\` | Visible label text and accessible label; see the [normal select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--normal). |
| \`message\` | \`string\` | Helper text shown when no validation error is visible. |
| \`placeholder\` | \`string\` | Placeholder when no value is selected; see the [normal select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--normal). |
| \`searchPlaceholder\` | \`string\` | Placeholder used by the mobile search input. |
| \`required\` | \`boolean\` | Enables required validation; see the [required demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--required). |
| \`error\` | \`string\` | External validation error message; see the [error demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--with-error). |
| \`validationList\` | \`ValidationItem<ValidationValue<TValue>>[]\` | Custom validation rules from \`jb-validation\`; see the [event/validation demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test). |
| \`hideClear\` | \`boolean\` | Hides the clear button; see [hide clear](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--hide-clean-button). |
| \`getSelectedValueDOM\` | \`(option: any) => HTMLElement\` | Custom selected value renderer. See the [custom selected value content guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-custom-selected-value-content--docs) and [renderer demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--custom-selected-value-render). |
| \`multiple\` | \`boolean\` | Enables multiple selection. See the [multiple selection guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-multiple-selection--docs) and [multiple demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--multiple). |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Visual size variant; see [size variants](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--size-variants). |
| \`name\` | \`string\` | Form field name. |
| \`disabled\` | \`boolean\` | Disables the select; see the [disabled demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--disabled). |
| \`popoverPosition\` | \`'fixed' \\| 'absolute'\` | Controls popover positioning. See the [popover positioning guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-popover-positioning--docs) and [fixed popover demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--fixed-popover-position). |

## Events

| prop | event | usage |
| --- | --- | --- |
| \`onChange\` | \`change\` | See the [event demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test). |
| \`onInput\` | \`input\` | See the [event demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test). |
| \`onKeyUp\` | \`keyup\` | See the [keyboard demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test). |
| \`onLoad\` | \`load\` | See the [event demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test). |
| \`onInit\` | \`init\` | See the [event demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test). |

## label

Use \`label\` and \`message\` to give the control clear context; see the [normal select demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--normal).
use label property to describe your select component.

\`\`\`jsx
<JBSelect label='your label name' ></JBSelect>
\`\`\`

## option list

Choose between static \`JBOption\` children and array-driven \`JBOptionList\`; see the [options guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-options--docs), [option children](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--option-as-children), and [option-list demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--option-object).
if you want to add option to jb-select, you have 2 way:

For help choosing between \`JBOption\` and \`JBOptionList\`, see the [options guide](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbselect-options--docs).

- use \`<JBOption>\`
- use \`<jbOptionList>\`

### using \`JBOption\`:

using \`JBOption\` is quite an easy job:

\`\`\`jsx
import {JBSelect} from 'jb-select/react';
import {JBOption} from 'jb-select/option/react';

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
      ';width:1rem;height:1rem;display:inline-block;"></span>' + "&nbsp;" +
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

Use \`JBOptionList\` for array-driven options and callback-based title/value extraction; see the [multiple option-list demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--multiple-with-option-list).
\`JBOptionList\` will create options for you and it's good for when you want some easy to use options without complexity of update & manage JSX and it's a little faster for high performance app

example:

\`\`\`jsx
import {JBSelect} from 'jb-select/react';
import {JBOptionList} from 'jb-select/option-list/react';

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

## get value

Read \`event.target.value\` or \`ref.current.value\`; see the [controlled value demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--with-value).

Read \`event.target.value\` from \`onChange\` or use a ref to read \`ref.current.value\`.

\`\`\`jsx
<JBSelect onChange={(event) => console.log(event.target.value)} />
\`\`\`

## set value

Use the controlled \`value\` prop or \`initialValue\` for reset behavior; see [initial value](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--initial-value) and [controlled value](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--with-value).

Use the controlled \`value\` prop to set the selected option from React state.

\`\`\`jsx
<JBSelect value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
  <JBOption value="a">A</JBOption>
  <JBOption value="b">B</JBOption>
</JBSelect>
\`\`\`

## Multiple

Set \`multiple\` when the selected value should be an array; see the [multiple selection demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--multiple) and [checkbox variant](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--multiple-with-checkbox).

\`\`\`jsx
<JBSelect multiple value={selectedValues}>
  <JBOption value="red">Red</JBOption>
  <JBOption value="blue">Blue</JBOption>
</JBSelect>
\`\`\`

## Add Icon or Any Element into box

Use \`slot="start-section"\` for leading icons or custom content; see the [custom option demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--custom-option).

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

Use \`required\`, \`error\`, and \`validationList\` for validation; see the [required](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--required) and [error](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--with-error) demos.

since select has a limited value options, validation have different story here. the only validation i really necessary here is required that indicate if user must select a value before he can move on. so pass \`required\` prop, then call \`checkValidity\` function like all other jb web component family. but if you need more customize validation just read [jb-validation](https://github.com/javadbat/jb-validation)

you can also set \`error\` attribute to pass error directly to the component

\`\`\`jsx
<JBSelect error="your error message"></JBSelect>
\`\`\`

## Change empty state shape

Use \`placeholder\`, \`searchPlaceholder\`, \`hideClear\`, and custom slots to tune the empty state; see [empty list](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--empty-list) and [hide clear](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--hide-clean-button).

Use \`placeholder\`, \`searchPlaceholder\`, \`hideClear\`, and slotted start/end content to tune the empty-state and search UI.

## Callbacks

Use \`getSelectedValueDOM\` for custom selected content; see the [custom selected value demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--custom-selected-value-render).

## set custom style

Please read the shared [jb-select styling section](../README.md#set-custom-style) and browse the [select style gallery](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect-style--gallery).

## Parts

The React wrapper exposes the same CSS parts as the web component. Use \`className\` on \`JBSelect\` and style with \`::part(...)\`; see the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect-style--gallery).

## Slots

React children map to the underlying slots. Use \`JBOption\` or \`JBOptionList\` for options, and use \`slot="start-section"\` or \`slot="end-section"\` for custom content inside the select box; see the [option examples](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--option-as-children).

## Responsive positioning and RTL

Use \`popoverPosition="fixed"\` inside clipped or scrollable containers. Compare the [fixed popover](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--fixed-popover-position), [scrollable container](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--fixed-popover-in-scrollable-container), and [RTL](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--rtl) demos. Use [size variants](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--size-variants) for compact or spacious controls.

## Advanced value and option behavior

See [initial/reset behavior](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--initial-value), [controlled value precedence](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--initial-value-does-not-override-value), [boolean values](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--boolean-value), and [missing options](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--missing-option) for less common data flows. For mobile sizing, see [popover height](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--popover-height).

## Accessibility notes

Give each select a meaningful label, keep option content readable, and preserve keyboard handling when customizing slots. See the [normal select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--normal) and [event](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect--event-test) demos.

## Shared Documentation

For web-component behavior, events, slots, and CSS variables, see [\`jb-select\`](https://github.com/javadbat/jb-select).

## AI agent notes

- Import \`JBSelect\` from \`jb-select/react\`, \`JBOption\` from \`jb-select/option/react\`, and \`JBOptionList\` from \`jb-select/option-list/react\`.
- Use \`JBOption\` for static JSX options and \`JBOptionList\` for array-driven options.
- Use \`searchPlaceholder\`, \`hideClear\`, and \`getSelectedValueDOM\` in React; the wrapper maps them to the underlying web-component API.
- Use \`multiple\` when \`value\` should be an array.
- Use \`error\` for externally controlled validation errors.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBSelect/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};