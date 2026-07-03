import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-uoF7cpi9.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Dj_nyNSz.js";import{t as o}from"./mdx-react-shim-DOfCvuWp.js";var s,c=e((()=>{s=`# jb-checkbox React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-checkbox)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-checkbox/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-checkbox-react)](https://www.npmjs.com/package/jb-checkbox-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-checkbox)

React wrapper for \`jb-checkbox\`, a form-associated checkbox web component with animated checkmark and validation support.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbcheckbox)
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

## Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`boolean\` | Controlled checked value. |
| \`label\` | \`string \\| null\` | Text label. Use children with \`slot="label"\` for custom markup. |
| \`name\` | \`string\` | Form field name. |
| \`message\` | \`string \\| null\` | Helper text shown below the label. |
| \`error\` | \`string \\| null\` | External validation error message. |
| \`validationList\` | \`ValidationItem<boolean>[] \\| null\` | Custom validation rules from \`jb-validation\`. |
| \`disabled\` | \`boolean\` | Disables user toggling. |
| \`required\` | \`boolean\` | Enables required validation. |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Visual size variant. |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onBeforeChange\` | \`before-change\` | Cancelable event fired before toggling. During this event, \`event.target.value\` exposes the next value. |
| \`onChange\` | \`change\` | Cancelable event fired after value changes. Prevent default to revert the toggle. |

## Controlled value

\`\`\`jsx
const [value, setValue] = useState(false);

<JBCheckbox
  value={value}
  label="Accept terms"
  onChange={(event) => setValue(event.target.value)}
/>;
\`\`\`

## Disabled

\`\`\`jsx
<JBCheckbox disabled label="Disabled checkbox" />
\`\`\`

Disabled checkboxes cannot be toggled and are removed from the internal tab order.

## Validation

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

\`\`\`jsx
<JBCheckbox size="sm" label="Small checkbox" />
\`\`\`

Supported size values are \`xs\`, \`sm\`, \`md\`, \`lg\`, and \`xl\`.

## Custom style

The React component uses the same CSS variables, CSS parts, and custom states as the web component.

\`\`\`css
.terms-checkbox::part(label) {
  font-weight: 600;
}

.terms-checkbox:state(checked)::part(label) {
  color: var(--jb-text-primary);
}

.terms-checkbox {
  --jb-checkbox-focus-ring-color: var(--jb-primary);
}
\`\`\`

\`\`\`jsx
<JBCheckbox className="terms-checkbox" label="Accept terms" />
\`\`\`

## Shared Documentation

For web-component behavior, events, slots, CSS variables, and the full API, see [\`jb-checkbox\`](https://github.com/javadbat/jb-checkbox).

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
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};