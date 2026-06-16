import{j as n,M as e,o as a}from"./index-CJCalR8i.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const p=`# jb-notification-wrapper

\`jb-notification-wrapper\` is the container web component that keeps notification items positioned and stacked.

## Usage
\`\`\`html
<jb-notification-wrapper></jb-notification-wrapper>
\`\`\`

\`\`\`ts
const notification = document.createElement('jb-notification');
notification.title = 'Saved';
notification.type = 'SUCCESS';

document.querySelector('jb-notification-wrapper')?.appendChild(notification);
\`\`\`

## CSS Variables
| CSS variable name | description |
| --- | --- |
| --jb-notification-wrapper-position | Notification wrapper position. |
| --jb-notification-wrapper-padding-top | Notification wrapper top padding. |
`;function o(t){return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Components/JBNotification/Wrapper Readme"}),`
`,n.jsx(a,{children:p})]})}function b(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(o,{...t})}):o()}export{b as default};
