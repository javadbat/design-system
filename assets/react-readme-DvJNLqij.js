import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D8X6jgu3.js";import{_ as n,d as r,k as i,u as a}from"./blocks-zQADakWU.js";import{t as o}from"./mdx-react-shim-BocgY0yn.js";var s,c=e((()=>{s=`# jb-loading React component

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

## Slots and CSS parts

\`JBLoading\` does not expose content slots. Style the spinner with the same CSS variables as the web component.

## Accessibility notes

The spinner is visual only. Add loading text, \`aria-busy\`, or \`aria-live\` to the surrounding React UI when the loading state must be announced.

## Shared Documentation

For web-component behavior, events, CSS variables, and the full API, see [\`jb-loading\`](https://github.com/javadbat/jb-loading).

## AI agent notes

- Import \`JBLoading\` from \`jb-loading/react\`; the wrapper imports and registers the underlying \`jb-loading\` web component.
- Use standard React props such as \`className\`, \`style\`, and \`ref\`; there are no component-specific props.
- Set size with \`--jb-loading-width\` and \`--jb-loading-height\`.
- Set color with \`--jb-loading-color\`.
- Add accessible loading text or state outside the component when the loading state must be announced.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBLoading/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};