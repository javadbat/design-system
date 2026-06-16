import{j as t,M as e,o as a}from"./index-CJCalR8i.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const r=`# jb-notification

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-notification)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-notification/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-notification)](https://www.npmjs.com/package/jb-notification)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-notification)

notification ui web component to show notification directly from pure js code without any framework

- no dependency.
- works with every JS structure and do not depend on any frameworks.
- bold with smooth animation.
- easy to use and accessible. 

## Demo

[storybook](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--normal)    
[code sandbox preview](https://3f63dj.csb.app/samples/jb-notification)    
[code sandbox code](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBNotification.tsx%3A11%2C24)

## Attributes/Properties

| name | type | description |
| --- | --- | --- |
| \`title\` | attribute/property | Main notification title. |
| \`description\` | attribute/property | Optional detail text below the title. |
| \`type\` | attribute/property | Notification type: \`SUCCESS\`, \`ERROR\`, \`WARNING\`, or \`INFO\`. |
| \`close\` | event | Fired when the notification asks to be removed. |

## set title & description

\`\`\`js
  document.querySelector('jb-notification').title = "Information Message";
  document.querySelector('jb-notification').description = "optional detail about what happen you may not set it";
\`\`\`
\`\`\`html
<jb-notification title="message title" description="description below title text to tell more about what happen"></jb-notification>
\`\`\`
## set notification type
\`\`\`js
  document.querySelector('jb-notification').type = "SUCCESS";
\`\`\`
\`\`\`html
  <jb-notification title="message title" type="SUCCESS"></jb-notification>
\`\`\`
## MessageTypes:

we have several types of message the types are : \`SUCCESS\`,\`ERROR\`,\`WARNING\`,\`INFO\`;
\`\`\`js
  document.querySelector('jb-notification').type = \`SUCCESS\`;
\`\`\`

## wrapper

jb-notification is a independent module block to show notification but in most cases you need a wrapper dom to wrap and manage all the notifications and their positions.
although you can create your own wrapper dom in you body and append \`<jb-notification>\` dom to it, we also make \`<jb-notification-wrapper>\` with some functionality to manage your notifications.    
using this wrapper in easy. just put \`<jb-notification-wrapper></jb-notification-wrapper>\` somewhere in your dom tree and then append your \`<jb-notification>\` dom to it.    
here is a compact sample:

\`\`\`ts
  const notificationDom = document.createElement('jb-notification') as JBNotificationWebComponent;
  notificationDom.title = title;
  if(type){ notificationDom.type = type};
  if(desc){notificationDom.description = desc};
  const wrapperDpm = document.querySelector('jb-notification-wrapper')
  notificationDom.addEventListener("close", ()=>wrapperDom.removeChild(e.target));
  wrapperDpm.appendChild(notificationDom)
\`\`\`

For wrapper-specific usage and CSS variables, see [jb-notification-wrapper README](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-wrapper-readme--docs).

For manager-specific helpers, see [jb-notification-manager README](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-manager-readme--docs).

## CSS Variables
| CSS variable name | description |
| --- | --- |
| --jb-notification-error-bg-color | Customize error bg color. |
| --jb-notification-info-bg-color | Customize info bg color. |
| --jb-notification-success-bg-color | Customize success bg color. |

### wrapper CSS variables

| CSS variable name | description |
| --- | --- |
| --jb-notification-wrapper-position | Customize notification wrapper position. |
| --jb-notification-wrapper-padding-top | Customize notification wrapper top padding. |

## Related Docs
- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function i(n){return t.jsxs(t.Fragment,{children:[t.jsx(e,{title:"Components/JBNotification/Readme"}),`
`,t.jsx(a,{children:r})]})}function h(n={}){const{wrapper:o}={...s(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i()}export{h as default};
