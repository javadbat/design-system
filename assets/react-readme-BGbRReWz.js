import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CKFpjfZi.js";import{d as n,f as r,j as i,y as a}from"./blocks-DMsn289S.js";import{t as o}from"./mdx-react-shim-9EA0vkyW.js";var s,c=e((()=>{s=`# JBButton React

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-button)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-button/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-button-react)](https://www.npmjs.com/package/jb-button-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-button)

JBButton is a simple button \`react component\` with some additional feature.

- custom styling

- loading state

sample in codepen: <https://codepen.io/javadbat/pen/NWdeMwY>

Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-button) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBButton.tsx) if you want to see and play with code

Explore \`JBButton\` in the interactive [Demo](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbbutton).

## Installation

### using npm

\`\`\`sh
npm i jb-button
\`\`\`

In your JSX file:

\`\`\`js
import { JBButton } from "jb-button/react";
\`\`\`

\`\`\`jsx
<JBButton>Save</JBButton>
\`\`\`

### using cdn

The React wrapper is distributed as an npm entry point and does not provide a standalone CDN bundle. For script-tag usage without React, see the [web-component CDN installation](../README.md#using-cdn).

## When to use

Use \`JBButton\` for React actions that need JB Design System styling, loading state, disabled state, or form submit behavior.

## Using With JS Frameworks

This entry point is specifically for React. For Angular, Vue, Nuxt, Svelte, SolidJS, Lit, and other integrations, see [Using With JS Frameworks in the web-component README](../README.md#using-with-js-frameworks).

## API reference

### Props

| prop | type | description |
| --- | --- | --- |
| \`type\` | \`string\` | Native button type forwarded to the inner button. Use \`submit\` for form submit buttons. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--form-submit) |
| \`name\` | \`string\` | Name forwarded to the underlying web component. |
| \`disabled\` | \`boolean\` | Disables the button. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--disabled) |
| \`isLoading\` | \`boolean\` | Shows the loading UI. Does not automatically disable the button. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--loading-with-text) |
| \`loadingText\` | \`string\` | Text shown beside the loading indicator. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--loading-with-text) |
| \`color\` | \`'primary' \\| 'secondary' \\| 'positive' \\| 'danger' \\| 'warning' \\| 'light' \\| 'dark'\` | Visual color variant. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--variants) |
| \`variant\` | \`'solid' \\| 'outline' \\| 'ghost' \\| 'text'\` | Visual style variant. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--variants) |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Visual size variant. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--with-icon) |
| \`square\` | \`boolean\` | Makes inline padding equal to block padding, ignoring \`--jb-button-inline-padding\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--square) |

### Attributes

React consumers should use the props above instead of setting web-component attributes directly. For the underlying attribute names and reflection behavior, see the [web-component attributes reference](../README.md#attributes).

### Properties

The React props synchronize the underlying public properties such as \`isLoading\` and \`disabled\`. For the complete element property reference, see the [web-component properties reference](../README.md#properties).

### Events

#### onClick

\`onClick\` receives the cancelable click event re-dispatched by the underlying web component. Call \`event.preventDefault()\` to cancel its click behavior and prevent form submission; see the [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--cancelable-click).

\`\`\`jsx
<JBButton onClick={(event) => console.log(event)}>Save</JBButton>
\`\`\`

## Square buttons

Use \`square\` for icon-only or compact buttons that need equal inline and block padding; see the square-button [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--square).

\`\`\`jsx
<JBButton square aria-label="Add item">+</JBButton>
\`\`\`

## Loading state

\`\`\`jsx
<JBButton isLoading loadingText="Saving">
  Save
</JBButton>
\`\`\`

Set \`disabled\` too if the user must not click the button while loading:

\`\`\`jsx
<JBButton isLoading disabled loadingText="Saving">
  Save
</JBButton>
\`\`\`

## Form usage

Use \`type="submit"\` inside a form when the button should submit. The underlying \`jb-button\` is form-associated and calls the associated form submit flow when the click is not canceled; see the [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--form-submit).

\`\`\`jsx
<form>
  <JBButton type="submit">Submit</JBButton>
</form>
\`\`\`

## Slot

Pass button content as React children. Text, icons, and mixed content are rendered in the default slot; see the button-content [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton--with-icon).

\`\`\`jsx
<JBButton>
  <span aria-hidden="true">+</span>
  Add item
</JBButton>
\`\`\`

## change button style

Styling is shared with the web component. See the [web-component styling section](../README.md#change-button-style), including its style-gallery [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbbutton-style--gallery), for CSS variables, state selectors, and examples.

## Related Docs

- See the [\`jb-button\` web-component README](../README.md) for shared behavior, slots, and styling.
- See the [JB Design System component list](https://javadbat.github.io/design-system/) for more components.
- Use the [contribution guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) to contribute to this component.

## AI agent notes

- Import \`JBButton\` from \`jb-button/react\`; the wrapper imports and registers the underlying \`jb-button\` web component.
- Put visible button content in \`children\`.
- Use \`isLoading\` for loading UI and \`disabled\` when clicks must be blocked.
- Use \`loadingText\`, not \`loading-text\`, in React props.
- Use \`square\` for icon-only or compact buttons that need equal inline and block padding.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBButton/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};