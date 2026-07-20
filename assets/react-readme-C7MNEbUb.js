import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CKOyGSmZ.js";import{A as n,d as r,u as i,v as a}from"./blocks-DEQQYZcV.js";import{t as o}from"./mdx-react-shim-QcUogR78.js";var s,c=e((()=>{s=`# jb-time-picker-react

React component wrapper around [\`jb-time-picker\`](https://github.com/javadbat/jb-time-picker).

## Installation

\`\`\`bash
npm i jb-time-picker-react
\`\`\`

## Usage

\`\`\`tsx
import { JBTimePicker } from 'jb-time-picker-react';

export function TimePickerSample() {
  return (
    <JBTimePicker
      value={{ hour: 3, minute: 10, second: 20 }}
      frontalZero
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
\`\`\`

You can also pass the value as a time string:

\`\`\`tsx
<JBTimePicker value="03:10:20" />
\`\`\`

## Props

- \`value?: { hour: number, minute: number, second?: number } | string | null\`
- \`secondEnabled?: boolean\`
- \`frontalZero?: boolean\`
- \`optionalUnits?: ('hour' | 'minute' | 'second')[]\`
- \`showPersianNumber?: boolean\`
- \`textWidth?: number | null\`
- \`onLoad?: (event) => void\`
- \`onInit?: (event) => void\`
- \`onChange?: (event) => void\`

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbtimepicker)

## When to use

Use \`JBTimePicker\` when a React view needs an inline time picker for hour, minute, and optionally second selection.

Use \`JBTimeInput\` when the user should type into a form field and open a picker from that input.

## Value

\`value\` accepts either an object with \`hour\`, \`minute\`, and optional \`second\`, or a time string such as \`"03:10:20"\`. Read \`event.target.value\` from \`onChange\`.

## Focus a time unit

Use a ref for imperative web-component methods such as focusing a specific time unit when the picker should guide the next edit.

## Disable seconds

Set \`secondEnabled={false}\` for hour/minute-only picking.

\`\`\`tsx
<JBTimePicker secondEnabled={false} value="03:10" />
\`\`\`

## Display options

Use \`frontalZero\`, \`optionalUnits\`, \`showPersianNumber\`, and \`textWidth\` to match the web-component display behavior from React.

## CSS parts and variables

The React wrapper uses the same CSS parts and variables as the web component.

\`\`\`css
.compact-time-picker {
  --jb-time-picker-active-color: #2563eb;
}
\`\`\`

## Accessibility notes

Provide nearby label text that describes the time being selected. Prefer \`JBTimeInput\` when the time value is part of a larger form and needs a conventional labeled input.

## Shared Documentation

For web-component behavior, events, and CSS variables, see [\`jb-time-picker\`](https://github.com/javadbat/jb-time-picker).
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBTimePicker/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};