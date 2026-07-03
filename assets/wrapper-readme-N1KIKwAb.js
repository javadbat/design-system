import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CS2hR0SM.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Bft8nf94.js";import{t as o}from"./mdx-react-shim-nI9Pyy70.js";var s,c=e((()=>{s=`# jb-notification-wrapper

\`jb-notification-wrapper\` is the container web component that stacks \`jb-notification\` items in a full-screen overlay.

## Installation

\`\`\`sh
npm i jb-notification-wrapper
\`\`\`

\`\`\`js
import 'jb-notification';
import 'jb-notification-wrapper';
\`\`\`

## Usage

\`\`\`html
<jb-notification-wrapper></jb-notification-wrapper>
\`\`\`

\`\`\`js
const wrapper = document.querySelector('jb-notification-wrapper');
const notification = document.createElement('jb-notification');

notification.title = 'Saved';
notification.type = 'SUCCESS';
notification.addEventListener('close', (event) => {
  wrapper.removeChild(event.target);
});

wrapper.appendChild(notification);
notification.show();
\`\`\`

## API reference

### Slots

| slot | description |
| --- | --- |
| default | Notification elements rendered inside the wrapper. |

### CSS variables

| CSS variable name | description |
| --- | --- |
| \`--jb-notification-wrapper-position\` | Wrapper CSS \`position\` value. |
| \`--jb-notification-wrapper-padding-top\` | Wrapper top padding. |

\`\`\`css
jb-notification-wrapper {
  --jb-notification-wrapper-position: fixed;
  --jb-notification-wrapper-padding-top: 5rem;
}
\`\`\`

## Related components

- [\`jb-notification\`](https://github.com/javadbat/jb-notification)
- [\`jb-notification-manager\`](https://github.com/javadbat/jb-notification/tree/main/manager)

## AI agent notes

- Import \`jb-notification-wrapper\` before using \`<jb-notification-wrapper>\`.
- Append \`jb-notification\` elements to the wrapper and call \`notification.show()\`.
- Listen to each notification \`close\` event and remove that notification from the wrapper.
- The observed \`x-position\` and \`y-position\` attributes are reserved in source but do not currently change wrapper layout.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBNotification/Wrapper Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};