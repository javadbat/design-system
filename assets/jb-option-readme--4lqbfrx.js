import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Cke0LeCu.js";import{A as n,d as r,u as i,v as a}from"./blocks-DDo4t-fV.js";import{t as o}from"./mdx-react-shim-BCxdF7rO.js";var s,c=e((()=>{s=`# jb-option

\`jb-option\` is the option item web component used inside \`jb-select\` and \`jb-option-list\`.

## Usage

Import the independently built web component entry point:

\`\`\`js
import 'jb-select';
import 'jb-select/option';
\`\`\`

\`\`\`html
<jb-select label="City">
  <jb-option value="tehran">Tehran</jb-option>
  <jb-option value="shiraz">Shiraz</jb-option>
</jb-select>
\`\`\`

For React, use the dedicated wrapper entry point:

\`\`\`tsx
import { JBOption } from 'jb-select/option/react';
\`\`\`

You can place custom HTML inside the option when the visible label needs richer UI.

\`\`\`html
<jb-option value="red">
  <span class="color-circle" style="background-color: #f00"></span>
  Red
</jb-option>
\`\`\`

## CSS Variables
| CSS variable name | description |
| --- | --- |
| --jb-option-border-radius | Option border radius. |
| --jb-option-padding | Option padding. |
| --jb-option-font-size | Option font size. |
| --jb-option-min-height | Option minimum height. |
| --jb-option-color | Option text color. |
| --jb-option-color-active | Option text color on hover or keyboard navigation. |
| --jb-option-bg-color | Option background color. |
| --jb-option-bg-color-active | Option background color on hover or keyboard navigation. |
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBSelect/JBOption Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};