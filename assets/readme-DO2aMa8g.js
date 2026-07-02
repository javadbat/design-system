import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B-xp21_X.js";import{_ as n,d as r,k as i,u as a}from"./blocks-C2gx6B-V.js";import{t as o}from"./mdx-react-shim-BzRr41bz.js";var s,c=e((()=>{s=`# jb-notification

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-notification)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-notification/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-notification)](https://www.npmjs.com/package/jb-notification)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-notification)

Notification and toast web components for showing short application messages from plain JavaScript or any framework.

- Framework free and usable in any JavaScript app.
- Supports \`INFO\`, \`SUCCESS\`, \`WARNING\`, and \`ERROR\` notification types.
- Animated show, hide, and swipe-to-dismiss behavior.
- Optional wrapper component for stacking notifications.
- Optional manager helper for creating notifications from JavaScript.

## When to use

Use \`jb-notification\` for short-lived feedback messages such as success messages, errors, warnings, and informational toasts.

Use an inline message component when the message must stay attached to a form field or page section. Use \`jb-modal\` when the user must respond before continuing.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--normal)
- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-notification)
- [CodeSandbox code](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBNotification.tsx%3A11%2C24)

## Installation

\`\`\`sh
npm i jb-notification
\`\`\`

\`\`\`js
import 'jb-notification';
\`\`\`

\`\`\`html
<jb-notification title="Saved" type="SUCCESS"></jb-notification>
\`\`\`

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`title\` | \`string\` | \`""\` | Main notification title. |
| \`description\` | \`string\` | \`null\` | Optional detail text below the title. |
| \`type\` | \`'INFO' \\| 'SUCCESS' \\| 'WARNING' \\| 'ERROR'\` | \`INFO\` | Notification visual type. Invalid values are ignored and logged in the console. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| \`title\` | \`string\` | no | Main notification title. |
| \`description\` | \`string \\| null\` | no | Optional detail text below the title. |
| \`type\` | \`'INFO' \\| 'SUCCESS' \\| 'WARNING' \\| 'ERROR'\` | no | Notification visual type. |
| \`state\` | \`'OPEN' \\| 'CLOSE'\` | yes | Current notification state. |

### Methods

| name | returns | description |
| --- | --- | --- |
| \`show()\` | \`void\` | Shows the notification, starts the show animation, and schedules hide after the internal duration. |
| \`hide()\` | \`void\` | Starts the hide animation and dispatches \`close\` after the animation completes. |
| \`onClose()\` | \`void\` | Sets state to \`CLOSE\`, clears the timer, and dispatches \`close\`. |

### Events

| event | detail | description |
| --- | --- | --- |
| \`close\` | none | Dispatched when the notification finishes closing or is dismissed by swipe. Use it to remove the element from its wrapper. |

## Basic usage

\`\`\`js
const notification = document.createElement('jb-notification');

notification.title = 'Saved';
notification.description = 'Your changes were saved successfully.';
notification.type = 'SUCCESS';
notification.addEventListener('close', (event) => {
  event.target.remove();
});

document.body.appendChild(notification);
notification.show();
\`\`\`

\`\`\`html
<jb-notification
  title="Connection lost"
  description="Please check your internet connection."
  type="ERROR"
></jb-notification>
\`\`\`

## Message types

| type | use for |
| --- | --- |
| \`INFO\` | Neutral information. |
| \`SUCCESS\` | Successful completion. |
| \`WARNING\` | Recoverable warnings or caution messages. |
| \`ERROR\` | Failed actions or blocking problems. |

## Wrapper

\`jb-notification-wrapper\` is a companion component that stacks notifications in a full-screen overlay.

\`\`\`js
import 'jb-notification';
import 'jb-notification/wrapper';

const wrapper = document.createElement('jb-notification-wrapper');
const notification = document.createElement('jb-notification');

notification.title = 'Saved';
notification.type = 'SUCCESS';
notification.addEventListener('close', (event) => {
  wrapper.removeChild(event.target);
});

document.body.appendChild(wrapper);
wrapper.appendChild(notification);
notification.show();
\`\`\`

For wrapper-specific usage and CSS variables, see [jb-notification-wrapper README](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-wrapper-readme--docs).

## Manager

\`NotificationManager\` creates a wrapper in \`document.body\`, creates notifications, appends them to the wrapper, shows them, and removes each notification after its \`close\` event.

\`\`\`js
import { NotificationManager } from 'jb-notification/manager';

const notificationManager = new NotificationManager();

notificationManager.new({
  title: 'Saved',
  desc: 'Your changes were saved successfully.',
  type: 'SUCCESS',
});
\`\`\`

For manager-specific helpers, see [jb-notification-manager README](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-manager-readme--docs).

## CSS parts and custom style

| part | description |
| --- | --- |
| \`content\` | Notification content box. |
| \`icon\` | Icon container. |
| \`title\` | Title text element. |
| \`description\` | Description text element. |

| CSS variable name | description |
| --- | --- |
| \`--jb-notification-error-bg-color\` | Error notification background color. |
| \`--jb-notification-info-bg-color\` | Info notification background color. |
| \`--jb-notification-success-bg-color\` | Success notification background color. |
| \`--jb-notification-wrapper-position\` | Wrapper CSS \`position\` value. |
| \`--jb-notification-wrapper-padding-top\` | Wrapper top padding. |

\`\`\`css
jb-notification::part(content) {
  border-radius: 12px;
}

jb-notification {
  --jb-notification-success-bg-color: #0f7a4f;
}

jb-notification-wrapper {
  --jb-notification-wrapper-padding-top: 5rem;
}
\`\`\`

## Accessibility notes

- The notification sets \`ElementInternals.role\` to \`alertdialog\` when ElementInternals is available.
- The component does not trap focus or require user action before it closes.
- Use concise \`title\` and \`description\` text because notifications auto-hide after the internal duration.

## Related Docs

- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-notification\` once before using \`<jb-notification>\`.
- Import \`jb-notification/wrapper\` before using \`<jb-notification-wrapper>\`.
- Use \`show()\` to display a created notification and listen to \`close\` to remove it from the DOM.
- Prefer \`NotificationManager\` from \`jb-notification/manager\` when creating notifications from application code.
- \`type\` only accepts \`INFO\`, \`SUCCESS\`, \`WARNING\`, or \`ERROR\`.
- The auto-hide duration is internal and is not currently configurable from an attribute or public property.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps tag names such as \`jb-notification\` to their implementation classes.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBNotification/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};