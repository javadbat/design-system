import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Dam_Gdf6.js";import{d as n,f as r,j as i,y as a}from"./blocks-DzN1-txQ.js";import{t as o}from"./mdx-react-shim-AVm1bDq_.js";var s,c=e((()=>{s=`# jb-loading React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-loading)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-loading/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-loading-react)](https://www.npmjs.com/package/jb-loading-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-loading)

React wrapper for \`jb-loading\`, an SVG loading spinner web component.

## Demo

Try the [component examples](https://javadbat.github.io/design-system/?path=/story/components-jbloading--overview), read the [React API docs](https://javadbat.github.io/design-system/?path=/docs/components-jbloading-react-readme--docs), or open the [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-loading) and [editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBLoading.tsx).

## Installation

\`\`\`sh
npm i jb-loading
\`\`\`

\`\`\`jsx
import { JBLoading } from 'jb-loading/react';

<JBLoading />;
\`\`\`

## When to use

Use \`JBLoading\` for a visual loading indicator inside React buttons, panels, empty states, or page regions. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbloading--normal)

Pair it with text, \`aria-busy\`, or \`aria-live\` on the surrounding UI when users need an accessible loading announcement.

## Props

\`JBLoading\` forwards standard React element props to the underlying \`<jb-loading>\` element. It does not define component-specific props.

The wrapper has no component-specific attributes or properties; use standard props such as \`className\`, \`style\`, and \`ref\`. [Sizing demo](https://javadbat.github.io/design-system/?path=/story/components-jbloading--custom-size)

\`\`\`jsx
<div aria-busy="true" aria-live="polite">
  <JBLoading className="saving-spinner" />
  <span>Saving</span>
</div>
\`\`\`

## Events

The wrapper forwards the web component's \`onLoad\` and \`onInit\` lifecycle events. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbloading--lifecycle-events)

## Custom style

The React component uses the same CSS variables as the web component. See the shared [web-component styling guidance](../README.md#custom-style), the [styling guide](https://javadbat.github.io/design-system/?path=/story/components-jbloading-styling--docs), and the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbloading-style--gallery).

| CSS variable name | description |
| --- | --- |
| \`--jb-loading-color\` | Spinner stroke color. |
| \`--jb-loading-width\` | Host width. Default is \`100%\`. |
| \`--jb-loading-height\` | Host height. Default is \`100%\`. |

\`\`\`css
.saving-spinner {
  --jb-loading-width: 1.5rem;
  --jb-loading-height: 1.5rem;
  --jb-loading-color: var(--jb-primary);
}
\`\`\`

## Slots and CSS parts

\`JBLoading\` does not expose content slots. Style the spinner with the same CSS variables and CSS parts as the web component; see the [parts gallery](https://javadbat.github.io/design-system/?path=/story/components-jbloading-style--gallery).

## Accessibility notes

The spinner is visual only. Add loading text, \`aria-busy\`, or \`aria-live\` to the surrounding React UI when the loading state must be announced. [Usage demo](https://javadbat.github.io/design-system/?path=/story/components-jbloading--normal)

## Shared Documentation

For web-component behavior, events, CSS variables, and the full API, see the shared [\`jb-loading\` documentation](../README.md).

## AI agent notes

- Import \`JBLoading\` from \`jb-loading/react\`; the wrapper imports and registers the underlying \`jb-loading\` web component.
- Use standard React props such as \`className\`, \`style\`, and \`ref\`; there are no component-specific props.
- Set size with \`--jb-loading-width\` and \`--jb-loading-height\`.
- Set color with \`--jb-loading-color\`.
- Add accessible loading text or state outside the component when the loading state must be announced.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBLoading/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};