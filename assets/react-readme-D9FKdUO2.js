import{j as n,M as i,o}from"./index-DuFiKK-e.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import"./iframe-DWoQbKgK.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const p=`# JBPaymentInput React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-payment-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-payment-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-payment-input-react)](https://www.npmjs.com/package/jb-payment-input-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-payment-input)

React wrapper for [\`jb-payment-input\`](https://github.com/javadbat/jb-payment-input). It imports and registers the underlying web component and reuses \`jb-input/react\` behavior for shared input props and events.

## Demo

- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-payment-input)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPaymentInput.tsx)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbpaymentinput)

## Installation

\`\`\`sh
npm i jb-payment-input
\`\`\`

\`\`\`jsx
import { JBPaymentInput } from 'jb-payment-input/react';

<JBPaymentInput label="Card number (شماره کارت)" inputType="CARD" />;
<JBPaymentInput label="SHABA number (شبا)" inputType="SHABA" />;
\`\`\`

## Props

\`JBPaymentInput\` accepts shared \`jb-input/react\` props such as \`value\`, \`label\`, \`message\`, \`placeholder\`, \`disabled\`, \`required\`, \`validationList\`, \`onInput\`, \`onChange\`, \`onFocus\`, \`onBlur\`, and keyboard events.

| prop | type | description |
| --- | --- | --- |
| \`inputType\` | \`'CARD' \\| 'SHABA' \\| null\` | Payment value mode. Defaults to \`CARD\`. |
| \`separator\` | \`string \\| null\` | Display separator. Defaults to a space; \`""\` removes grouping separators. |

## Controlled value

\`\`\`jsx
const [value, setValue] = useState('');

<JBPaymentInput
  inputType="CARD"
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>;
\`\`\`

\`event.target.value\` is the canonical English-digit value without separators.

## Separator

\`\`\`jsx
<JBPaymentInput inputType="CARD" separator="-" />;
<JBPaymentInput inputType="CARD" separator="" />;
\`\`\`

## Bank indicator

\`\`\`jsx
import { JBPaymentInput } from 'jb-payment-input/react';
import { BankIndicator } from 'jb-payment-input/bank-indicator/react';

<JBPaymentInput inputType="CARD" label="Card number">
  <BankIndicator slot="end-section" />
</JBPaymentInput>;
\`\`\`

## Validation

Use \`validationList\` for custom payment rules.

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

## Check validation

\`\`\`jsx
const elementRef = useRef();

const isValid = elementRef.current.checkValidity();
const isVisibleValid = elementRef.current.reportValidity();

<JBPaymentInput ref={elementRef} />;
\`\`\`

## Styling

The React component uses the same CSS variables as the web component. For custom style options, see [\`jb-payment-input\`](https://github.com/javadbat/jb-payment-input), [\`bank-indicator\`](https://github.com/javadbat/jb-payment-input/tree/main/bank-indicator), and inherited [\`jb-input\`](https://github.com/javadbat/jb-input) styling docs.

## Shared Documentation

For web-component behavior, events, validation, slots, and CSS variables, see [\`jb-payment-input\`](https://github.com/javadbat/jb-payment-input).

## Related Docs

- See [\`jb-payment-input\`](https://github.com/javadbat/jb-payment-input) if you want to use this component as a pure JavaScript web component.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBPaymentInput\` from \`jb-payment-input/react\`; the wrapper imports and registers the underlying \`jb-payment-input\` web component.
- Use React prop \`inputType\`, not the web attribute \`input-type\`.
- Use \`event.target.value\` for the canonical value; formatted grouping is display-only.
- Import \`BankIndicator\` from \`jb-payment-input/bank-indicator/react\` when adding bank logos in React.
`;function a(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/form elements/Inputs/JBPaymentInput/React Readme"}),`
`,n.jsx(o,{children:p})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a()}export{h as default};
