import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C3yTzOc_.js";import{A as n,d as r,u as i,v as a}from"./blocks-D8nrqCmJ.js";import{t as o}from"./mdx-react-shim-CMH1getV.js";var s,c=e((()=>{s=`# JBButton React

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-button)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-button/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-button-react)](https://www.npmjs.com/package/jb-button-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-button)

JBButton is a simple button \`react component\` with some additional feature.

- custom styling

- loading state

sample in codepen: <https://codepen.io/javadbat/pen/NWdeMwY>

Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-button) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBButton.tsx) if you want to see and play with code

Storybook: [JBButton docs](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbbutton)

## Installation
\`\`\`sh
    npm i jb-button
\`\`\`
in your jsx file
\`\`\`js
    import {JBButton} from "jb-button/react"
\`\`\`
\`\`\` jsx
    <JBButton></JBButton>
\`\`\`
## When to use

Use \`JBButton\` for React actions that need JB Design System styling, loading state, disabled state, or form submit behavior.

## Props

| prop | type | description |
| --- | --- | --- |
| \`type\` | \`string\` | Native button type forwarded to the inner button. Use \`submit\` for form submit buttons. |
| \`name\` | \`string\` | Name forwarded to the underlying web component. |
| \`disabled\` | \`boolean\` | Disables the button. |
| \`isLoading\` | \`boolean\` | Shows the loading UI. Does not automatically disable the button. |
| \`loadingText\` | \`string\` | Text shown beside the loading indicator. |
| \`color\` | \`'primary' \\| 'secondary' \\| 'positive' \\| 'danger' \\| 'warning' \\| 'light' \\| 'dark'\` | Visual color variant. |
| \`variant\` | \`'solid' \\| 'outline' \\| 'ghost' \\| 'text'\` | Visual style variant. |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Visual size variant. |

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

Use \`type="submit"\` inside a form when the button should submit. The underlying \`jb-button\` is form-associated and calls the associated form submit flow when the click is not canceled.

\`\`\`jsx
<form>
  <JBButton type="submit">Submit</JBButton>
</form>
\`\`\`

## Events

### onClick
\`\`\`jsx
  <JBButton onClick={(event) => console.log(event)}></JBButton>
\`\`\`

## Slot

Pass button content as React children. Text, icons, and mixed content are rendered in the default slot.

\`\`\`jsx
<JBButton>
  <span aria-hidden="true">+</span>
  Add item
</JBButton>
\`\`\`

## change button style
    react component depends on CSS variable for customization so there is no difference between react component and web-component in styling . to learn more about styling jb-button see [jb-button](https://github.com/javadbat/jb-button) styling section.

## Shared Documentation

For web-component behavior, events, slots, and CSS variables, see [\`jb-button\`](https://github.com/javadbat/jb-button).

## AI agent notes

- Import \`JBButton\` from \`jb-button/react\`; the wrapper imports and registers the underlying \`jb-button\` web component.
- Put visible button content in \`children\`.
- Use \`isLoading\` for loading UI and \`disabled\` when clicks must be blocked.
- Use \`loadingText\`, not \`loading-text\`, in React props.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBButton/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};