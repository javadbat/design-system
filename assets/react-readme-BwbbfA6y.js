import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Sdk7KWEq.js";import{_ as n,d as r,k as i,u as a}from"./blocks-C8_8gXbV.js";import{t as o}from"./mdx-react-shim-BbFg_QFP.js";var s,c=e((()=>{s=`# jb-time-picker-react

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

## Shared Documentation

For web-component behavior, events, and CSS variables, see [\`jb-time-picker\`](https://github.com/javadbat/jb-time-picker).
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBTimePicker/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};