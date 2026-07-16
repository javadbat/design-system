import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CJEKjAwU.js";import{A as n,d as r,u as i,v as a}from"./blocks-BSzqjapA.js";import{t as o}from"./mdx-react-shim-D6Em9IKr.js";var s,c=e((()=>{s=`# jb-password-input React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-password-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-password-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-password-input-react)](https://www.npmjs.com/package/jb-password-input-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-password-input)

React wrapper for [\`jb-password-input\`](https://github.com/javadbat/jb-password-input). It imports and registers the underlying web component and reuses [\`jb-input/react\`](https://github.com/javadbat/jb-input-react) behavior for shared input props and events.

## Demo

- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-password-input)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPasswordInput.tsx)
- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbpasswordinput)

## Demo image

![](pass.png)
![](passShow.png)

## Installation

\`\`\`sh
npm i jb-password-input
\`\`\`

\`\`\`jsx
import { JBPasswordInput } from 'jb-password-input/react';

<JBPasswordInput label="Password" message="Enter your password" />;
\`\`\`

## When to use

Use \`JBPasswordInput\` for password, passphrase, PIN-like secret text, and credential fields that need password masking and a show/hide button.

Use \`JBInput\` for normal text fields. Use \`validationList\` when password rules need more than minimum length, such as requiring numbers, symbols, or mixed casing.

## Props

\`JBPasswordInput\` accepts shared \`jb-input/react\` props such as \`value\`, \`label\`, \`message\`, \`placeholder\`, \`disabled\`, \`required\`, \`validationList\`, \`onInput\`, \`onChange\`, \`onFocus\`, \`onBlur\`, and keyboard events.

| prop | type | description |
| --- | --- | --- |
| \`minLength\` | \`number \\| null\` | Minimum accepted password length. Set to \`null\` or \`undefined\` to disable the built-in length validation. |

## Controlled value

\`\`\`jsx
const [value, setValue] = useState('');

<JBPasswordInput
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>;
\`\`\`

## Minimum length

\`\`\`jsx
<JBPasswordInput minLength={8} />;
\`\`\`

Use \`validationList\` for password rules beyond minimum length.

\`\`\`jsx
<JBPasswordInput
  validationList={[
    {
      validator: ({ value }) => /[0-9]/.test(value),
      message: 'Password must include a number',
    },
  ]}
/>;
\`\`\`

## Visibility toggle

The web component owns the password visibility toggle and switches the internal input type between hidden and visible states. Do not pass a custom \`type\` prop to control masking.

## Styling

The React component uses the same CSS variables as the web component. For custom style options, see [\`jb-password-input\`](https://github.com/javadbat/jb-password-input) and inherited [\`jb-input\`](https://github.com/javadbat/jb-input) styling docs.

## CSS variables

Use the same CSS variables as the web component, plus inherited \`jb-input\` variables for the shared input shell.

## Accessibility notes

Set \`label\` for the password field. If your app needs password rules announced before typing, include those rules in nearby visible helper text or the \`message\` prop.

## Shared Documentation

For web-component behavior, events, validation, and CSS variables, see [\`jb-password-input\`](https://github.com/javadbat/jb-password-input).

## Related Docs

- See [\`jb-password-input\`](https://github.com/javadbat/jb-password-input) if you want to use this as a web component in a pure JavaScript app or any other framework.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBPasswordInput\` from \`jb-password-input/react\`; the wrapper imports and registers the underlying \`jb-password-input\` web component.
- Use \`minLength\` as a React prop; the wrapper sets it as a property on the web component.
- Use \`event.target.value\` for the password value.
- Do not pass \`type\`; the web component controls the inner input type for password masking and visibility toggle.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/Inputs/JBPasswordInput/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};