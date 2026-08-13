import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D4DdPDUe.js";import{A as n,d as r,u as i,v as a}from"./blocks-ktl38Hlw.js";import{t as o}from"./mdx-react-shim-K8FX7U1v.js";var s,c=e((()=>{s=`# JBPaymentInput React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-payment-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-payment-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-payment-input-react)](https://www.npmjs.com/package/jb-payment-input-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-payment-input)

React wrapper for [\`jb-payment-input\`](https://github.com/javadbat/jb-payment-input). It imports and registers the underlying web component and reuses \`jb-input/react\` behavior for shared input props and events.

## Demo

Try the [component examples](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--overview), or open the [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-payment-input) and [editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPaymentInput.tsx).

## Installation

\`\`\`sh
npm i jb-payment-input
\`\`\`

\`\`\`jsx
import { JBPaymentInput } from 'jb-payment-input/react';

<JBPaymentInput label="Card number (شماره کارت)" inputType="CARD" />;
<JBPaymentInput label="SHABA number (شبا)" inputType="SHABA" />;
\`\`\`

## When to use

Use \`JBPaymentInput\` for Iranian payment fields that collect bank card numbers or SHABA numbers. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number)

Use \`JBNumberInput\` for general numeric amounts and \`JBInput\` when the value is not a card or SHABA value.

## Props

\`JBPaymentInput\` accepts shared \`jb-input/react\` props such as \`value\`, \`label\`, \`message\`, \`placeholder\`, \`disabled\`, \`required\`, \`validationList\`, \`onInput\`, \`onChange\`, \`onFocus\`, \`onBlur\`, and keyboard events.

| prop | type | description |
| --- | --- | --- |
| \`inputType\` | \`'CARD' \\| 'SHABA' \\| null\` | Payment value mode. Defaults to \`CARD\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--shaba-number) |
| \`separator\` | \`string \\| null\` | Display separator. Defaults to a space; \`""\` removes grouping separators. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--dash-separator-cn) |

## Controlled value

The [card interaction demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number) shows controlled canonical values and validation.

\`\`\`jsx
const [value, setValue] = useState('');

<JBPaymentInput
  inputType="CARD"
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>;
\`\`\`

\`event.target.value\` is the canonical English-digit value without separators.

## Value and display value

The visible value may include grouping separators and Persian/Arabic input may be normalized. Always read \`event.target.value\` for the canonical English-digit card or SHABA value. Compare the [card formatting demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number) with the [SHABA demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--shaba-number).

## Input type

Set \`inputType="CARD"\` for card numbers and \`inputType="SHABA"\` for SHABA numbers. The selected type controls formatting and validation behavior. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--changing-payment-type-keeps-initial-baseline)

## Separator

\`\`\`jsx
<JBPaymentInput inputType="CARD" separator="-" />;
<JBPaymentInput inputType="CARD" separator="" />;
\`\`\`

See the [dash separator demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--dash-separator-cn).

## Bank indicator

The [bank-logo demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number-with-bank-logo) shows the React slot integration.

\`\`\`jsx
import { JBPaymentInput } from 'jb-payment-input/react';
import { BankIndicator } from 'jb-payment-input/bank-indicator/react';

<JBPaymentInput inputType="CARD" label="Card number">
  <BankIndicator slot="end-section" />
</JBPaymentInput>;
\`\`\`

## Validation

Use \`validationList\` for custom payment rules. The [card validation demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number) and [required-field demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--required-card-number) cover built-in validation.

\`\`\`jsx
const validationList = [
  {
    validator: /^603799.*$/g,
    message: 'Only Melli bank cards are accepted',
  },
  {
    validator: ({ value }) => value !== '5041373111111111',
    message: 'This card is banned',
  },
];

<JBPaymentInput validationList={validationList} />;
\`\`\`

## Events

Payment input events are inherited from \`JBInput\`; \`onInput\` exposes normalized edits and \`onChange\` exposes committed canonical values. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number-paste)

## Check validation

Use the ref-based API in the [card validation example](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number).

\`\`\`jsx
const elementRef = useRef();

const isValid = elementRef.current.checkValidity();
const isVisibleValid = elementRef.current.reportValidity();

<JBPaymentInput ref={elementRef} />;
\`\`\`

## Slots

Use inherited \`start-section\` and \`end-section\` slots for payment adornments such as the bank indicator. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number-with-bank-logo)

## Styling

The React component uses the same CSS variables as the web component. See the shared [web-component CSS guidance](../README.md#css-variables), the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput-style--gallery), and the [bank-indicator documentation](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbpaymentinput-bank-indicator-readme--docs).

## CSS variables

Use the same CSS variables as the web component, plus inherited \`jb-input\` variables for the shared input shell.

## Accessibility notes

Set a clear \`label\` that identifies whether the field expects a card number or SHABA number. Treat bank indicators as supplemental visual information and keep the text label explicit. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput--card-number-with-bank-logo)

## Shared Documentation

For web-component behavior, events, validation, slots, and CSS variables, see the shared [\`jb-payment-input\` documentation](../README.md).

## Related Docs

- See [\`jb-payment-input\`](https://github.com/javadbat/jb-payment-input) if you want to use this component as a pure JavaScript web component.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBPaymentInput\` from \`jb-payment-input/react\`; the wrapper imports and registers the underlying \`jb-payment-input\` web component.
- Use React prop \`inputType\`, not the web attribute \`input-type\`.
- Use \`event.target.value\` for the canonical value; formatted grouping is display-only.
- Import \`BankIndicator\` from \`jb-payment-input/bank-indicator/react\` when adding bank logos in React.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/Inputs/JBPaymentInput/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};