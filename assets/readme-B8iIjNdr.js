import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-kacJPVKr.js";import{A as n,d as r,u as i,v as a}from"./blocks-GMI-_iQo.js";import{t as o}from"./mdx-react-shim-BnxG2iIe.js";var s,c=e((()=>{s=`# jb-loading

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-loading)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-loading/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-loading)](https://www.npmjs.com/package/jb-loading)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-loading)

SVG loading spinner web component.

- Fills its host size.
- Uses a lightweight SVG animation.
- Customizable with CSS variables.
- Works as a standalone web component or inside other JB components.

## When to use

Use \`jb-loading\` for a visual loading indicator inside a button, empty state, panel, or page area.

Pair it with text, \`aria-busy\`, or \`aria-live\` on the surrounding UI when users need an accessible loading announcement.

## Demo

- [GitHub Pages](https://javadbat.github.io/jb-loading/)
- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbloading)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--loading%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-loading/tree/main/react)

## Installation

### Using npm

\`\`\`sh
npm i jb-loading
\`\`\`

\`\`\`js
import 'jb-loading';
\`\`\`

\`\`\`html
<jb-loading></jb-loading>
\`\`\`

### Using CDN

\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/jb-loading/dist/JBLoading.umd.js"><\/script>
<jb-loading></jb-loading>
\`\`\`

## API reference

### Attributes

\`jb-loading\` does not currently define public HTML attributes.

### Properties

\`jb-loading\` does not currently define public JavaScript properties.

### Methods

\`jb-loading\` does not currently define public methods.

### Events

| event | detail | description |
| --- | --- | --- |
| \`load\` | none | Dispatched from \`connectedCallback\` when the component is connected. |
| \`init\` | none | Dispatched from \`connectedCallback\` after \`load\`. |

## Slots and CSS parts

\`jb-loading\` does not currently expose public slots or CSS parts.

## Custom style

For complete styling guidance, live examples, and copyable style recipes, see [Styling](https://javadbat.github.io/design-system/?path=/docs/components-jbloading-styling).

Set CSS variables in the parent scope of the component.

| CSS variable name | description |
| --- | --- |
| \`--jb-loading-color\` | Spinner stroke color. |
| \`--jb-loading-width\` | Host width. Default is \`100%\`. |
| \`--jb-loading-height\` | Host height. Default is \`100%\`. |

\`\`\`css
jb-loading {
  --jb-loading-width: 2.75rem;
  --jb-loading-height: 2.75rem;
  --jb-loading-color: var(--jb-primary);
}
\`\`\`

## Accessibility notes

\`jb-loading\` is a visual spinner. Add accessible loading semantics to the surrounding UI when needed.

\`\`\`html
<div aria-busy="true" aria-live="polite">
  <jb-loading style="--jb-loading-width: 1.5rem; --jb-loading-height: 1.5rem;"></jb-loading>
  <span>Loading</span>
</div>
\`\`\`

## Related Docs

- See [\`jb-loading/react\`](https://github.com/javadbat/jb-loading/tree/main/react) if you want to use this component in React.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-loading\` once before using \`<jb-loading>\`.
- Do not expect attributes, properties, methods, slots, or CSS parts; the public customization API is CSS variables.
- Set size with \`--jb-loading-width\` and \`--jb-loading-height\` or you can set width/height directly.
- Set color with \`--jb-loading-color\`.
- Add accessible loading text or state outside the component when the loading state must be announced.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes the JavaScript/TypeScript class export and \`exports.kind: "custom-element-definition"\` maps the \`jb-loading\` tag name to that class.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBLoading/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};