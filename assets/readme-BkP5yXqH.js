import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DyWnM0Wh.js";import{A as n,d as r,u as i,v as a}from"./blocks-C21yMPAO.js";import{t as o}from"./mdx-react-shim-r49eUm_3.js";var s,c=e((()=>{s=`# jb-national-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-national-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-national-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-national-input)](https://www.npmjs.com/package/jb-national-input)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-national-input)

Iranian national code input (\`کد ملی\`) built on [\`jb-input\`](https://github.com/javadbat/jb-input).

- Accepts Persian and English digits.
- Blocks non-digit input.
- Truncates input to 10 digits.
- Stores \`value\` as English digits.
- Adds ready-to-use Iranian national-code checksum validation.

## When to use

Use \`jb-national-input\` when the field must collect an Iranian national code.

Use [\`jb-input\`](https://github.com/javadbat/jb-input) for generic text fields and [\`jb-mobile-input\`](https://github.com/javadbat/jb-mobile-input) for Iranian mobile numbers.

## Demo

- [CodePen](https://codepen.io/javadbat/pen/PorNxOw)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-inputs-jbnationalinput)

## Using With JS Frameworks

<a href="https://github.com/javadbat/jb-national-input/tree/main/react" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/React.js-jb--national--input%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" /></a>

Other integrations: <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#angular" target="_blank" rel="noopener noreferrer">Angular</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#vue" target="_blank" rel="noopener noreferrer">Vue</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nuxt" target="_blank" rel="noopener noreferrer">Nuxt</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#svelte" target="_blank" rel="noopener noreferrer">Svelte</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#sveltekit" target="_blank" rel="noopener noreferrer">SvelteKit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#solidjs" target="_blank" rel="noopener noreferrer">SolidJS</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#lit" target="_blank" rel="noopener noreferrer">Lit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nextjs" target="_blank" rel="noopener noreferrer">Next.js</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#astro" target="_blank" rel="noopener noreferrer">Astro</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#blazor" target="_blank" rel="noopener noreferrer">Blazor</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#server-rendered-templates" target="_blank" rel="noopener noreferrer">Server-rendered templates</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#wordpress" target="_blank" rel="noopener noreferrer">WordPress</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#alpinejs-and-htmx" target="_blank" rel="noopener noreferrer">Alpine.js and HTMX</a>

## Installation

\`\`\`sh
npm install --save jb-national-input
\`\`\`

\`\`\`js
import 'jb-national-input';
\`\`\`

\`\`\`html
<jb-national-input label="National code"></jb-national-input>
\`\`\`

## API

\`jb-national-input\` extends \`JBInputWebComponent\`. For inherited attributes, properties, methods, events, slots, CSS parts, validation, and form behavior, see the [\`jb-input\` API documentation](https://github.com/javadbat/jb-input#api-reference).

## Value format

\`value\` is always normalized to English digits and limited to 10 digits.

\`displayValue\` is the filtered text shown in the input. If the user enters Persian digits, the display can keep Persian digits while \`value\` is normalized.

\`\`\`js
const nationalInput = document.querySelector('jb-national-input');

nationalInput.value = '۰۰۱۲۳۴۵۶۷۸';
console.log(nationalInput.value); // 0012345678
\`\`\`

## Validation

The component adds Iranian national-code checksum validation to the inherited \`jb-input\` validation flow. Empty value is valid unless \`required\` is set.

\`\`\`html
<jb-national-input required="National code is required"></jb-national-input>
\`\`\`

\`\`\`js
const isValid = document.querySelector('jb-national-input').reportValidity();
\`\`\`

## Styling

All styles are inherited from [\`jb-input\`](https://github.com/javadbat/jb-input) except this variable:

| CSS variable name | description |
| --- | --- |
| \`--jb-national-input-input-direction\` | Direction of the inner input text. Default is \`ltr\`. |

## Related Docs

- See [\`jb-national-input/react\`](https://github.com/javadbat/jb-national-input/tree/main/react) if you want to use this component as a React component.
- See [\`jb-input\`](https://github.com/javadbat/jb-input) for inherited input API, events, validation, slots, and styling.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-national-input\` once before using \`<jb-national-input>\`.
- Use this component for Iranian national codes; use \`jb-input\` for generic text.
- Do not duplicate the inherited \`jb-input\` API in generated docs; link to [\`jb-input\` API documentation](https://github.com/javadbat/jb-input#api-reference).
- Read \`value\` for normalized English-digit data.
- Do not add custom national-code checksum validation; the component already includes it.
- Style with inherited \`jb-input\` styling plus \`--jb-national-input-input-direction\`.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps the \`jb-national-input\` tag name to \`JBNationalInputWebComponent\`.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/Inputs/JBNationalInput/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};