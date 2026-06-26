import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DF-yE7r9.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Li3G0JTi.js";import{t as o}from"./mdx-react-shim-vdpo-iEd.js";var s,c=e((()=>{s=`# JBTimePicker React notes

The React wrapper is not available yet. If you need it, please open an issue in [\`jb-time-picker\`](https://github.com/javadbat/jb-time-picker/issues).

For current usage, import and render the web component directly:

\`\`\`jsx
import 'jb-time-picker';

export function TimePickerSample() {
  return <jb-time-picker value="03:10:20"></jb-time-picker>;
}
\`\`\`

To set object properties such as \`.value\`, use a ref:

\`\`\`jsx
import { useEffect, useRef } from 'react';
import 'jb-time-picker';

export function TimePickerSample() {
  const timePickerRef = useRef(null);

  useEffect(() => {
    timePickerRef.current.value = { hour: 3, minute: 10, second: 20 };
  }, []);

  return <jb-time-picker ref={timePickerRef}></jb-time-picker>;
}
\`\`\`

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbtimepicker)

## Shared Documentation

For web-component behavior, events, and CSS variables, see [\`jb-time-picker\`](https://github.com/javadbat/jb-time-picker).
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBTimePicker/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};