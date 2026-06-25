import{j as n,M as o,o as a}from"./index-BeKp1SPH.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import"./iframe-DwXzIX12.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const p=`# jb-notification-wrapper

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
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/JBNotification/Wrapper Readme"}),`
`,n.jsx(a,{children:p})]})}function w(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(e,{...t})}):e()}export{w as default};
