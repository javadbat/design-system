import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BlaOm9nc.js";import{_ as n,d as r,k as i,u as a}from"./blocks-BAphiJOc.js";import{t as o}from"./mdx-react-shim-CJm47l1A.js";var s,c=e((()=>{s=`# jb-payment-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-payment-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-payment-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-payment-input)](https://www.npmjs.com/package/jb-payment-input)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-payment-input)

\`jb-payment-input\` is a payment-focused extension of [\`jb-input\`](https://github.com/javadbat/jb-input) for Iranian card numbers (شماره کارت) and SHABA (شبا)/IBAN values.

- Supports \`CARD\` mode for 16-digit card numbers (شماره کارت).
- Supports \`SHABA\` mode for Iranian SHABA (شبا) values (\`IR\` + 24 digits).
- Keeps \`.value\` as the canonical unseparated value and shows a grouped \`displayValue\`.
- Accepts Persian/Arabic digits and stores English digits.
- Supports smart paste by extracting the payment value from text with unrelated characters.
- Includes built-in card length, SHABA length, and SHABA format validation.
- Supports optional Iranian bank logo detection with the \`bank-indicator\` companion component.

## When to use

Use \`jb-payment-input\` for Iranian payment fields that collect bank card numbers (شماره کارت) or SHABA (شبا) numbers.

Use [\`jb-number-input\`](https://github.com/javadbat/jb-number-input) for general numeric amounts. Use [\`jb-input\`](https://github.com/javadbat/jb-input) when the value is not a card or SHABA value.

## Demo

- [CodePen](https://codepen.io/javadbat/pen/rNvWdve)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--payment--input%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-payment-input/tree/main/react)

## Installation

\`\`\`sh
npm i jb-payment-input
\`\`\`

\`\`\`js
import 'jb-payment-input';
\`\`\`

\`\`\`html
<jb-payment-input input-type="CARD" label="Card number (شماره کارت)"></jb-payment-input>
<jb-payment-input input-type="SHABA" label="SHABA number (شبا)"></jb-payment-input>
\`\`\`

### CDN

\`\`\`html
<script src="https://unpkg.com/jb-input/dist/jb-input.umd.js"><\/script>
<script src="https://unpkg.com/jb-payment-input/dist/jb-payment-input.umd.js"><\/script>
\`\`\`

## API reference

\`jb-payment-input\` extends [\`jb-input\`](https://github.com/javadbat/jb-input). For shared attributes, properties, events, methods, validation, form association, slots, and CSS parts, see the [\`jb-input\` API](https://github.com/javadbat/jb-input#api-reference).

### Payment attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`input-type\` | \`'CARD' \\| 'SHABA'\` | \`CARD\` | Payment value mode. Invalid values fall back to \`CARD\`. |
| \`separator\` | \`string\` | space | Separator used in \`displayValue\`, such as space, \`-\`, or \`_\`. |

### Payment properties

| name | type | default | description |
| --- | --- | --- | --- |
| \`paymentInputType\` | \`'CARD' \\| 'SHABA'\` | \`CARD\` | Payment value mode. Invalid values fall back to \`CARD\`. |
| \`separatorString\` | \`string\` | space | Separator used in \`displayValue\`. Empty string shows the value without grouping separators. |
| \`value\` | \`string\` | \`""\` | Canonical value inherited from \`jb-input\`; English digits and no separator. |
| \`displayValue\` | \`string\` | \`""\` | Rendered value inherited from \`jb-input\`; grouped with \`separatorString\`. |

## Value and display value

In \`CARD\` mode, the component keeps only card number (شماره کارت) digits and truncates to 16 digits.

\`\`\`js
const paymentInput = document.querySelector('jb-payment-input');

paymentInput.paymentInputType = 'CARD';
paymentInput.value = '6037991234567890';

console.log(paymentInput.value); // "6037991234567890"
console.log(paymentInput.displayValue); // "6037 9912 3456 7890"
\`\`\`

In \`SHABA\` (شبا) mode, the component keeps \`IR\` plus up to 24 digits. If the user enters only digits, \`IR\` is added automatically.

\`\`\`js
paymentInput.paymentInputType = 'SHABA';
paymentInput.value = '120000000000000000000000';

console.log(paymentInput.value); // "IR120000000000000000000000"
console.log(paymentInput.displayValue); // "IR12 0000 0000 0000 0000 0000 00"
\`\`\`

## Input type

\`\`\`html
<jb-payment-input input-type="CARD"></jb-payment-input>
<jb-payment-input input-type="SHABA"></jb-payment-input>
\`\`\`

\`\`\`js
const paymentInput = document.querySelector('jb-payment-input');

paymentInput.paymentInputType = 'CARD';
paymentInput.paymentInputType = 'SHABA';
\`\`\`

## Separator

The default separator is a space.

\`\`\`html
<jb-payment-input input-type="CARD" separator="-"></jb-payment-input>
\`\`\`

\`\`\`js
const paymentInput = document.querySelector('jb-payment-input');

paymentInput.separatorString = '-'; // 6037-9912-3456-7890
paymentInput.separatorString = '_'; // 6037_9912_3456_7890
paymentInput.separatorString = ''; // 6037991234567890
\`\`\`

## Bank indicator

Use \`bank-indicator\` inside the payment input to show a detected Iranian bank logo from the first six card digits.

\`\`\`js
import 'jb-payment-input';
import 'jb-payment-input/bank-indicator';
\`\`\`

\`\`\`html
<jb-payment-input input-type="CARD" label="Card number" message="With bank indicator">
  <bank-indicator slot="end-section"></bank-indicator>
</jb-payment-input>
\`\`\`

You can also use the bank indicator standalone by setting a six-digit \`prefix\`.

\`\`\`html
<bank-indicator prefix="603799"></bank-indicator>
\`\`\`

For standalone bank indicator usage, see [bank-indicator README](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbpaymentinput-bank-indicator-readme--docs).

## Validation

Built-in validation depends on \`paymentInputType\`:

| type | built-in validation |
| --- | --- |
| \`CARD\` | Empty or exactly 16 digits. |
| \`SHABA\` | Empty or exactly 26 characters in \`IR\` + 24 digit SHABA (شبا) format. |

Use the inherited \`validation.list\` for custom rules.

\`\`\`js
const paymentInput = document.querySelector('jb-payment-input');

paymentInput.validation.list = [
  {
    validator: /^603799.*$/g,
    message: 'Only Melli bank cards are accepted',
  },
  {
    validator: ({ value }) => value !== '5041373111111111',
    message: 'This card is banned',
  },
  {
    validator: ({ displayValue, value }) => {
      if (value.startsWith('111111')) {
        return 'This bank is not accepted';
      }
      if (displayValue.startsWith('2222 2222')) {
        return 'This displayed card range is not accepted';
      }
      return true;
    },
    message: 'Invalid card',
  },
];
\`\`\`

## Events

Payment input events are inherited from \`jb-input\`.

\`\`\`js
paymentInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});

paymentInput.addEventListener('change', (event) => {
  console.log(event.target.value);
});

paymentInput.addEventListener('enter', (event) => {
  console.log(event.target.value);
});
\`\`\`

## CSS variables

\`jb-payment-input\` uses \`jb-input\` internally. [\`jb-input\` CSS variables and parts](https://github.com/javadbat/jb-input#css-parts-and-states) also apply.

\`bank-indicator\` supports:

| CSS variable name | description |
| --- | --- |
| \`--bank-indicator-padding\` | Bank logo padding. Default is \`8px 16px\`. |

\`\`\`css
bank-indicator {
  --bank-indicator-padding: 6px 12px;
}
\`\`\`

## Accessibility notes

- Shared label, message, validation, form association, focus, slots, and accessibility behavior come from \`jb-input\`.
- The inner input direction is set to \`ltr\` for payment values.
- Form submission uses the canonical \`.value\`, not \`displayValue\`.

## Related Docs

- See [\`jb-payment-input/react\`](https://github.com/javadbat/jb-payment-input/tree/main/react) if you want to use this component in a React app.
- See [\`jb-input\`](https://github.com/javadbat/jb-input) for inherited API and styling.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-payment-input\` once before using \`<jb-payment-input>\`.
- Import \`jb-payment-input/bank-indicator\` before using \`<bank-indicator>\`.
- Use \`input-type="CARD"\` or \`paymentInputType = 'CARD'\` for card numbers.
- Use \`input-type="SHABA"\` or \`paymentInputType = 'SHABA'\` for SHABA values.
- Read \`.value\` for the canonical English-digit value without separators; use \`.displayValue\` only for rendered formatted text.
- Use \`separator\` / \`separatorString\` for visual grouping only; it is removed from \`.value\`.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps tag names such as \`jb-payment-input\` and \`bank-indicator\` to their implementation classes.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/Inputs/JBPaymentInput/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};