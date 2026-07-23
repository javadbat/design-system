import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BgTYBwyO.js";import{A as n,d as r,u as i,v as a}from"./blocks-D5BSbCx1.js";import{t as o}from"./mdx-react-shim-D5WWw0qZ.js";var s,c=e((()=>{s=`# JBPinInput React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-pin-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-pin-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-pin-input-react)](https://www.npmjs.com/package/jb-pin-input-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-pin-input)

React wrapper for [\`jb-pin-input\`](https://github.com/javadbat/jb-pin-input). It imports and registers the underlying form-associated web component for PIN, OTP, and one-time-code entry.

- Smart paste support.
- Mobile friendly numeric cells.
- TypeScript support.
- Accepts Persian and Arabic number characters and stores English digits.
- \`onComplete\` event for when all PIN cells are filled and validation passes.

## Demo

- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-pin-input)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPinInput.tsx)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbpininput)

## Installation

\`\`\`sh
npm i jb-pin-input
\`\`\`

\`\`\`jsx
import { JBPinInput } from 'jb-pin-input/react';

<JBPinInput label="Verification code" name="otp" charLength={6} message="Enter verification code" />;
\`\`\`

## When to use

Use \`JBPinInput\` for OTP, verification code, PIN, and short numeric code entry.

Use \`JBPasswordInput\` for secret text that should be masked as a password. Use \`JBInput\` for normal single-field text entry.

## Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`string \\| number\` | Controlled PIN value. Empty cells are represented by \`-\` in the underlying web component value. |
| \`charLength\` | \`number\` | Number of PIN cells. |
| \`name\` | \`string\` | Form field name. |
| \`label\` | \`string\` | Accessible label used for the PIN group and each internal cell. |
| \`message\` | \`string\` | Helper text shown below the PIN cells when no validation error is visible. |
| \`required\` | \`boolean\` | Enables required validation. |
| \`disabled\` | \`boolean\` | Disables all PIN cells. |
| \`autofocus\` | \`boolean\` | Focuses the first PIN cell after initialization. |
| \`inputmode\` | \`string\` | Input mode forwarded to each internal input. Defaults to \`numeric\`. |
| \`error\` | \`string\` | External validation error message. |
| \`validationList\` | \`ValidationItem<string>[]\` | Custom validation rules from \`jb-validation\`. |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onBeforeInput\` | \`beforeinput\` | Called before a cell receives input. |
| \`onInput\` | \`input\` | Called after a PIN cell changes. |
| \`onChange\` | \`change\` | Called on blur when the PIN value changed during focus. |
| \`onComplete\` | \`complete\` | Called after the last cell is filled and validation passes. |
| \`onEnter\` | \`enter\` | Called when Enter is pressed. |
| \`onKeyDown\` | \`keydown\` | Re-dispatched from the active inner input. |
| \`onKeyUp\` | \`keyup\` | Re-dispatched from the active inner input. |
| \`onFocus\` | \`focus\` | Native focus event on the component host. |
| \`onBlur\` | \`blur\` | Native blur event on the component host. |

## Controlled value

\`\`\`jsx
const [value, setValue] = useState('');

<JBPinInput
  name="otp"
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>;
\`\`\`

## Character length

\`\`\`jsx
<JBPinInput charLength={5} />;
\`\`\`

## Value

Read \`event.target.value\` for the canonical English-digit PIN value. Empty internal cells are represented by \`-\` in the underlying web-component value.

## Configure behavior

\`\`\`jsx
<JBPinInput
  // Accessible name for the PIN group and generated cells.
  label="Verification code"
  // Number of cells rendered for the code.
  charLength={6}
  // Focus the first cell after mount.
  autofocus
  // Use numeric keyboard on mobile devices.
  inputmode="numeric"
  // Require all cells to be filled before validation passes.
  required
  // Disable every cell.
  disabled={false}
  // Show helper text when no validation error is visible.
  message="Enter the code sent to your phone"
  // Show an external validation error.
  error=""
/>;
\`\`\`

## Complete event

\`\`\`jsx
<JBPinInput
  charLength={6}
  onComplete={(event) => {
    console.log(event.target.value);
  }}
/>;
\`\`\`

## Smart paste

The underlying web component distributes pasted text across cells and normalizes Persian and Arabic digits to English digits.

## Autofocus

Use \`autofocus\` when the first cell should focus after initialization.

## Validation

\`\`\`jsx
<JBPinInput
  required
  validationList={[
    {
      validator: (value) => value.startsWith('1'),
      message: 'PIN must start with 1',
    },
  ]}
/>;
\`\`\`

## Styling

The React component uses the same CSS variables as the web component.

\`\`\`css
.otp-field {
  --jb-pin-input-inputs-wrapper-width: 20rem;
  --jb-pin-input-bottom-line-color-active: #0f766e;
  --jb-pin-input-pin-font-size: 1.75rem;
}
\`\`\`

\`\`\`jsx
<JBPinInput className="otp-field" />;
\`\`\`

## CSS parts and variables

Use the same CSS parts and variables as the web component. The \`Styling\` section above shows the React class-based pattern.

## Accessibility notes

Use \`label\` or \`aria-label\` to provide the accessible name for the PIN group. Add visible label text in the surrounding UI when the field purpose is not clear.

## Shared Documentation

For web-component behavior, form association, validation, events, and CSS variables, see [\`jb-pin-input\`](https://github.com/javadbat/jb-pin-input).

## Related Docs

- See [\`jb-pin-input\`](https://github.com/javadbat/jb-pin-input) if you want to use this component as a pure JavaScript web component.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBPinInput\` from \`jb-pin-input/react\`; the wrapper imports and registers the underlying \`jb-pin-input\` web component.
- Use \`charLength\` in React, not \`char-length\`.
- Use \`event.target.value\` for the canonical value. Empty cells are represented by \`-\`.
- Use \`onComplete\` when all cells are filled and validation passes; use \`onChange\` for committed changes after blur.
- Use \`label\` or \`aria-label\` for the accessible name. The component does not render a visible label element, so add visible label text in your app layout when needed.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBPinInput/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};