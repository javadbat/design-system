import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CCmaC7-g.js";import{_ as n,d as r,k as i,u as a}from"./blocks-C9d-vimo.js";import{t as o}from"./mdx-react-shim-Qa2OpQoC.js";var s,c=e((()=>{s=`# jb-password-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-password-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-password-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-password-input)](https://www.npmjs.com/package/jb-password-input)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-password-input)

\`jb-password-input\` is a password-focused extension of [\`jb-input\`](https://github.com/javadbat/jb-input). It keeps the JB Design System input UI while adding native password masking, a visibility toggle button, and optional minimum-length validation.

- Uses the shared \`jb-input\` label, message, validation, form association, and styling behavior.
- Keeps the inner native input type as \`password\` unless the user presses the visibility toggle.
- Adds an eye button in the end section to show or hide the password.
- Provides a simple \`minLength\` property for built-in password length validation.

## When to use

Use \`jb-password-input\` for password, passphrase, PIN-like secret text, and credential fields that need password masking and a show/hide button.

Use [\`jb-input\`](https://github.com/javadbat/jb-input) for normal text fields. Use a custom validation list when password rules need more than minimum length, such as requiring numbers, symbols, or mixed casing.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbpasswordinput)
- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-password-input)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPasswordInput.tsx)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--password--input%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-password-input/tree/main/react)

## Installation

\`\`\`sh
npm i jb-password-input
\`\`\`

\`\`\`js
import 'jb-password-input';
\`\`\`

\`\`\`html
<jb-password-input label="Password" message="Enter your password"></jb-password-input>
\`\`\`

### CDN

\`\`\`html
<script src="https://unpkg.com/jb-input/dist/jb-input.umd.js"><\/script>
<script src="https://unpkg.com/jb-password-input/dist/jb-password-input.umd.js"><\/script>
\`\`\`

## API reference

\`jb-password-input\` extends [\`jb-input\`](https://github.com/javadbat/jb-input). For shared attributes, properties, events, methods, validation, form association, and CSS parts, see the [\`jb-input\` API](https://github.com/javadbat/jb-input#api-reference).

### Password properties

| name | type | default | description |
| --- | --- | --- | --- |
| \`minLength\` | \`number \\| null\` | \`null\` | Minimum accepted password length. Set to \`null\` or \`undefined\` to disable the built-in length validation. |
| \`isPasswordVisible\` | \`boolean \\| undefined\` | \`undefined\` | Current visibility state toggled by the eye button. |

### Events

Password value events are inherited from \`jb-input\`.

| event | description |
| --- | --- |
| \`input\` | Fired on user edits. |
| \`change\` | Fired when the value changes and is committed. |
| \`invalid\` | Fired when validation fails. |

## Value

\`\`\`js
const passwordInput = document.querySelector('jb-password-input');

passwordInput.value = 'new-secret';
console.log(passwordInput.value);
\`\`\`

## Minimum length

Use \`minLength\` for the common minimum-length rule.

\`\`\`js
const passwordInput = document.querySelector('jb-password-input');

passwordInput.minLength = 8;
\`\`\`

\`\`\`js
passwordInput.minLength = null; // disables the built-in minimum length rule
\`\`\`

For more password rules, use the inherited \`validation.list\`.

\`\`\`js
passwordInput.validation.list = [
  {
    validator: ({ value }) => /[0-9]/.test(value),
    message: 'Password must include a number',
  },
];
\`\`\`

## Visibility toggle

The component renders an eye button in the end section. Clicking it toggles \`isPasswordVisible\`, changes the inner input type between \`password\` and \`text\`, and updates the icon state.

The component ignores attempts to set the input \`type\`; use \`jb-input\` when you need a non-password input type.

## CSS variables

\`jb-password-input\` uses \`jb-input\` internally. [\`jb-input\` CSS variables and parts](https://github.com/javadbat/jb-input#css-parts-and-states) also apply.

| CSS variable name | description |
| --- | --- |
| \`--jb-password-input-active-eye-color\` | Eye icon color while the password is visible. |
| \`--jb-password-input-eye-color\` | Eye icon color while the password is hidden. |

\`\`\`css
jb-password-input {
  --jb-password-input-eye-color: #525252;
  --jb-password-input-active-eye-color: #0f766e;
}
\`\`\`

## Accessibility notes

- Shared label, message, validation, form association, focus, and accessibility behavior come from \`jb-input\`.
- The password value is submitted through the inherited form-associated \`value\`.
- The visibility toggle changes the inner input type to \`text\`, so avoid using it where showing the secret is not acceptable.

## Related Docs

- See [\`jb-password-input/react\`](https://github.com/javadbat/jb-password-input/tree/main/react) if you want to use this component in a React app.
- See [\`jb-input\`](https://github.com/javadbat/jb-input) for inherited API and styling.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-password-input\` once before using \`<jb-password-input>\`.
- Use \`.value\` exactly like \`jb-input\`; the password-specific component only changes masking, visibility toggle, and optional length validation.
- Set \`minLength\` as a JavaScript property, not as an HTML attribute.
- Do not set \`type\`; the component controls the inner input type and ignores \`type\` changes.
- The end section is used by the built-in visibility toggle.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps the \`jb-password-input\` tag name to \`JBPasswordInputWebComponent\`.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/Inputs/JBPasswordInput/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};