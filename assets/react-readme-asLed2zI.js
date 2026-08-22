import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B_baI-l0.js";import{d as n,f as r,j as i,y as a}from"./blocks-BOgK5JcJ.js";import{t as o}from"./mdx-react-shim-kIobHN9U.js";var s,c=e((()=>{s=`# jb-checkbox React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-checkbox)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-checkbox/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-checkbox-react)](https://www.npmjs.com/package/jb-checkbox-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-checkbox)

React wrapper for \`jb-checkbox\`, a form-associated checkbox web component with animated checkmark and validation support.

## Demo

- [Demo](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbcheckbox)
- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-checkbox)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBCheckbox.tsx)

## Installation

\`\`\`sh
npm i jb-checkbox
\`\`\`

\`\`\`jsx
import { JBCheckbox } from 'jb-checkbox/react';

<JBCheckbox label="Accept terms" />;
\`\`\`

Use custom label markup with the \`label\` slot:

\`\`\`jsx
<JBCheckbox>
  <span slot="label">Accept terms</span>
</JBCheckbox>
\`\`\`

## When to use

Use \`JBCheckbox\` for a single boolean option that needs JB Design System styling, validation, form association, disabled state, or custom label markup.

## Using With JS Frameworks

This entry point is specifically for React. For Angular, Vue, Nuxt, Svelte, SolidJS, Lit, and other integrations, see [Using With JS Frameworks in the web-component README](../README.md#using-with-js-frameworks).

## API reference

### Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`boolean\` | Controlled checked value. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--initial-value-does-not-override-value) |
| \`label\` | \`string \\| null\` | Text label. Use children with \`slot="label"\` for custom markup. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--children-label) |
| \`name\` | \`string\` | Form field name. |
| \`message\` | \`string \\| null\` | Helper text shown below the label. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--with-message) |
| \`error\` | \`string \\| null\` | External validation error message. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--with-error) |
| \`validationList\` | \`ValidationItem<boolean>[] \\| null\` | Custom validation rules from \`jb-validation\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--imperative-methods) |
| \`disabled\` | \`boolean\` | Disables user toggling. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--disabled) |
| \`required\` | \`boolean\` | Enables required validation. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--required) |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Visual size variant. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--size-variants) |

### Attributes

React consumers should use props instead of setting web-component attributes directly. See the [web-component attributes reference](../README.md#attributes).

### Properties

The wrapper exposes the underlying checkbox properties through a ref, including \`checked\`, \`initialValue\`, \`isDirty\`, and \`validationMessage\`. See the [web-component properties reference](../README.md#properties).

### Methods

Use a ref for \`checkValidity()\`, \`reportValidity()\`, and \`focus()\`; see the [imperative methods Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--imperative-methods).

### Events

| prop | event | description |
| --- | --- | --- |
| \`onBeforeChange\` | \`before-change\` | Cancelable event fired before toggling. During this event, \`event.target.value\` exposes the next value. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--cancelable-events) |
| \`onChange\` | \`change\` | Cancelable event fired after value changes. Prevent default to revert the toggle. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--cancelable-events) |

## Get and set value

Use the \`value\` prop for controlled updates; see the [controlled-value Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--initial-value-does-not-override-value).

\`\`\`jsx
const [value, setValue] = useState(false);

<JBCheckbox
  value={value}
  label="Accept terms"
  onChange={(event) => setValue(event.target.value)}
/>;
\`\`\`

## Disabled

The disabled state prevents toggling and removes the checkbox from the internal tab order; see the [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--disabled).

\`\`\`jsx
<JBCheckbox disabled label="Disabled checkbox" />
\`\`\`

Disabled checkboxes cannot be toggled and are removed from the internal tab order.

## Validation

\`required\`, \`error\`, and \`validationList\` configure validation; see the [required validation Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--required) and [external-error Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--with-error).

\`\`\`jsx
const validationList = [
  {
    validator: (value) => value === true,
    message: 'You must check this before continuing',
  },
];

const checkboxRef = useRef(null);

<JBCheckbox
  ref={checkboxRef}
  required
  validationList={validationList}
  label="Accept terms"
/>;

const isValid = checkboxRef.current?.reportValidity();
\`\`\`

## Sizes

Supported size values are \`xs\`, \`sm\`, \`md\`, \`lg\`, and \`xl\`; see the [size variants Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--size-variants).

\`\`\`jsx
<JBCheckbox size="sm" label="Small checkbox" />
\`\`\`

## Custom style

Styling is shared with the web component. See the [web-component custom style section](../README.md#custom-style) for CSS variables, parts, states, recipes, and the live gallery.

## Slots

Use children with \`slot="label"\` for custom label markup; see the [custom-label Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--children-label).

For the complete slot reference, see the [web-component Slots section](../README.md#slots).

## CSS parts and states

CSS parts and \`:state(...)\` selectors are shared with the web component. See the [web-component CSS parts and states section](../README.md#css-parts-and-states) and its [style gallery Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox-style--gallery).

## Accessibility notes

Accessibility behavior is provided by the underlying web component; inspect the interactive [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbcheckbox--normal) and read the [web-component accessibility notes](../README.md#accessibility-notes).

## Dependencies

The React wrapper uses the underlying \`jb-checkbox\` and \`jb-validation\` packages. See the shared [web-component documentation](../README.md#related-docs).

## Related Docs

- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBCheckbox\` from \`jb-checkbox/react\`; the wrapper imports and registers the underlying \`jb-checkbox\` web component.
- Use the boolean \`value\` prop for controlled state.
- Read \`event.target.value\` in \`onBeforeChange\` for the next value and in \`onChange\` for the committed value.
- Use \`required\`, \`error\`, and \`validationList\` for validation.
- Use children with \`slot="label"\` for custom label markup.
- Use \`ref.current.checkValidity()\` or \`ref.current.reportValidity()\` for imperative validation.
- Use \`ref.current.focus()\` to focus the checkbox when it is not disabled.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBCheckbox/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};