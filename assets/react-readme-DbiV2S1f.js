import{j as n,M as a,o as i}from"./index-Bm-ihScP.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import"./iframe-aUp4bIN_.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const d=`# jb-loading React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-loading)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-loading/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-loading-react)](https://www.npmjs.com/package/jb-loading-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-loading)

React wrapper for \`jb-loading\`, an SVG loading spinner web component.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbloading)
- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-loading)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBLoading.tsx)

## Installation

\`\`\`sh
npm i jb-loading
\`\`\`

\`\`\`jsx
import { JBLoading } from 'jb-loading/react';

<JBLoading />;
\`\`\`

## When to use

Use \`JBLoading\` for a visual loading indicator inside React buttons, panels, empty states, or page regions.

Pair it with text, \`aria-busy\`, or \`aria-live\` on the surrounding UI when users need an accessible loading announcement.

## Props

\`JBLoading\` forwards standard React element props to the underlying \`<jb-loading>\` element. It does not define component-specific props.

\`\`\`jsx
<div aria-busy="true" aria-live="polite">
  <JBLoading className="saving-spinner" />
  <span>Saving</span>
</div>
\`\`\`

## Custom style

The React component uses the same CSS variables as the web component.

| CSS variable name | description |
| --- | --- |
| \`--jb-loading-color\` | Spinner stroke color. |
| \`--jb-loading-width\` | Host width. Default is \`100%\`. |
| \`--jb-loading-height\` | Host height. Default is \`100%\`. |

\`\`\`css
.saving-spinner {
  --jb-loading-width: 24px;
  --jb-loading-height: 24px;
  --jb-loading-color: var(--jb-primary);
}
\`\`\`

## Shared Documentation

For web-component behavior, events, CSS variables, and the full API, see [\`jb-loading\`](https://github.com/javadbat/jb-loading).

## AI agent notes

- Import \`JBLoading\` from \`jb-loading/react\`; the wrapper imports and registers the underlying \`jb-loading\` web component.
- Use standard React props such as \`className\`, \`style\`, and \`ref\`; there are no component-specific props.
- Set size with \`--jb-loading-width\` and \`--jb-loading-height\`.
- Set color with \`--jb-loading-color\`.
- Add accessible loading text or state outside the component when the loading state must be announced.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/JBLoading/React Readme"}),`
`,n.jsx(i,{children:d})]})}function j(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{j as default};
