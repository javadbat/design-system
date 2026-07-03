import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CS2hR0SM.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Bft8nf94.js";import{t as o}from"./mdx-react-shim-nI9Pyy70.js";var s,c=e((()=>{s=`# jb-national-input-react

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-national-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-national-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-national-input-react)](https://www.npmjs.com/package/jb-national-input-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-national-input)

React wrapper for [\`jb-national-input\`](https://github.com/javadbat/jb-national-input), an Iranian national code input built on [\`jb-input/react\`](https://github.com/javadbat/jb-input/tree/main/react).

## Demo

- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-national-input)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBNationalInput.tsx)

## Installation

\`\`\`sh
npm install --save jb-national-input
\`\`\`

\`\`\`jsx
import { JBNationalInput } from 'jb-national-input/react';

<JBNationalInput label="National code" />;
\`\`\`

## When to use

Use \`JBNationalInput\` when a React form must collect an Iranian national code with built-in digit filtering and checksum validation.

Use \`JBInput\` from \`jb-input/react\` for generic text fields.

## API

\`JBNationalInput\` uses the inherited React props and events from \`jb-input/react\`. For the full inherited API, see [\`jb-input/react\`](https://github.com/javadbat/jb-input/tree/main/react).

## Value format

Read \`event.target.value\` for normalized English-digit data.

\`\`\`jsx
const [nationalCode, setNationalCode] = useState('');

<JBNationalInput
  value={nationalCode}
  label="National code"
  onInput={(event) => setNationalCode(event.target.value)}
/>;
\`\`\`

## Validation

The underlying web component adds Iranian national-code checksum validation to inherited \`jb-input\` validation.

\`\`\`jsx
<JBNationalInput required="National code is required" />
\`\`\`

Use a ref for imperative validation:

\`\`\`jsx
const nationalInputRef = useRef(null);

<JBNationalInput ref={nationalInputRef} required />;

const isValid = nationalInputRef.current?.reportValidity();
\`\`\`

## Styling

All styling is inherited from \`jb-input\` except this variable:

| CSS variable name | description |
| --- | --- |
| \`--jb-national-input-input-direction\` | Direction of the inner input text. Default is \`ltr\`. |

## Shared Documentation

For web-component national-code behavior, see [\`jb-national-input\`](https://github.com/javadbat/jb-national-input).

For inherited input props, events, validation, slots, and styling, see [\`jb-input/react\`](https://github.com/javadbat/jb-input/tree/main/react).

## Related Docs

- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBNationalInput\` from \`jb-national-input/react\`; the wrapper imports and registers the underlying \`jb-national-input\` web component.
- Use this component for Iranian national codes; use \`JBInput\` for generic text.
- Do not duplicate the inherited \`jb-input/react\` API in generated docs; link to [\`jb-input/react\`](https://github.com/javadbat/jb-input/tree/main/react).
- Read \`event.target.value\` for normalized English-digit data.
- Do not add custom national-code checksum validation; the component already includes it.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/Inputs/JBNationalInput/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};