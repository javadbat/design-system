import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CCmaC7-g.js";import{_ as n,d as r,k as i,u as a}from"./blocks-C9d-vimo.js";import{t as o}from"./mdx-react-shim-Qa2OpQoC.js";var s,c=e((()=>{s=`# jb-popover

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-popover)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-popover/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-popover)](https://www.npmjs.com/package/jb-popover)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-popover)

Responsive popover web component for floating content next to an element on desktop and showing the same content as a bottom sheet on mobile.

- Positions content near an anchor element with \`bindTarget()\`.
- Supports start, end, center, before, and after anchor alignment.
- Handles mobile bottom-sheet presentation with backdrop.
- Can push a URL hash on mobile so browser back closes the popover first.
- Supports overflow slide adjustment when content reaches the viewport or another container.
- Provides a default slot for any custom popover content.

## When to use

Use \`jb-popover\` for contextual actions, menus, picker panels, detail previews, and compact overlays that should stay attached to a trigger element on desktop.

Use \`jb-modal\` when the content should be a blocking dialog. Use inline content when the information should always remain visible in the document flow.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbpopover)
- Used inside components such as [jb-date-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbdateinput-), [jb-time-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbtimeinput), and [jb-select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--popover%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-popover/tree/main/react)

## Installation

\`\`\`sh
npm i jb-popover
\`\`\`

\`\`\`js
import 'jb-popover';
\`\`\`

\`\`\`html
<button id="trigger">Open</button>
<jb-popover id="actions-popover">
  <div>Popover content</div>
</jb-popover>
\`\`\`

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`is-open\` | \`boolean\` | \`false\` | Opens the popover when set to \`"true"\`. Any other value closes it. |
| \`id\` | \`string\` | \`""\` | Element id. On mobile, an id enables URL hash state while the popover is open. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| \`isOpen\` | \`boolean\` | yes | Current open state. |
| \`positionArea\` | \`{ inline?: 'start' \\| 'end' \\| 'center' \\| 'center-before' \\| 'center-after'; block?: 'after' \\| 'before' }\` | no | Preferred anchor alignment used after \`bindTarget()\`. |
| \`overflowHandler\` | \`'NONE' \\| 'SLIDE'\` | no | Overflow handling mode. \`SLIDE\` moves the content upward when it overflows. |
| \`overflowDom\` | \`HTMLElement \\| null\` | no | Element used as the overflow boundary. Defaults to the window height. |
| \`PopoverHashPath\` | \`string \\| null\` | yes | Hash path generated from \`id\`, such as \`#actions-popover\`. |
| \`JBID\` | \`symbol\` | yes | Internal unique symbol for this popover instance. |

### Methods

| name | returns | description |
| --- | --- | --- |
| \`open()\` | \`void\` | Opens the popover, updates anchor position, and pushes mobile hash history when \`id\` is set. |
| \`close()\` | \`void\` | Closes the popover and removes anchor observers. |
| \`bindTarget(element)\` | \`void\` | Binds the popover to an anchor element and positions it with \`position: fixed\` on desktop. |
| \`unBindTarget()\` | \`void\` | Removes the bound anchor and resets positioning. |
| \`checkInitialOpenness()\` | \`void\` | Opens the popover when the current URL hash matches its \`id\`. |

### Events

| event | detail | description |
| --- | --- | --- |
| \`load\` | none | Dispatched from \`connectedCallback\` before event listeners are registered. |
| \`init\` | none | Dispatched from \`connectedCallback\` after initialization. |
| \`urlOpen\` | none | Dispatched when the popover opens itself because the current URL hash matches its id. |
| \`close\` | \`{ eventType }\` | Dispatched for backdrop clicks and mobile browser-back close attempts. |

\`close\` event \`event.detail.eventType\` can be:

| value | meaning |
| --- | --- |
| \`BACKGROUND_CLICK\` | The mobile backdrop was clicked. |
| \`HISTORY_BACK_EVENT\` | Browser back/popstate was received while the mobile popover was open. |
| \`OUTSIDE_CLICK\` | Reserved close type for outside-click flows. |
| \`CLOSE_BUTTON_CLICK\` | Reserved close type for close button flows. |

## Open and close

\`\`\`js
const popover = document.querySelector('jb-popover');

popover.open();
console.log(popover.isOpen);
popover.close();
\`\`\`

\`\`\`html
<jb-popover is-open="true">
  <div>Initially open</div>
</jb-popover>
\`\`\`

## Bind to an anchor

Use \`bindTarget()\` when the popover should follow a trigger element on desktop.

\`\`\`js
const trigger = document.querySelector('#trigger');
const popover = document.querySelector('jb-popover');

popover.bindTarget(trigger);
popover.open();
\`\`\`

Call \`unBindTarget()\` when the popover should stop tracking the anchor.

## Anchor position

By default, the popover opens after the anchor and aligns to the inline start edge. In LTR, inline start is left; in RTL, inline start is right.

\`\`\`js
const popover = document.querySelector('jb-popover');

popover.positionArea = { inline: 'end' };
popover.positionArea = { block: 'before' };
popover.positionArea = { block: 'after', inline: 'center' };
\`\`\`

## Overflow handling

\`overflowHandler = 'SLIDE'\` moves the content upward when it overflows the viewport or \`overflowDom\`.

\`\`\`js
const popover = document.querySelector('jb-popover');

popover.overflowHandler = 'SLIDE';
popover.overflowDom = document.querySelector('jb-modal');
\`\`\`

## Mobile URL hash state

When the popover has an \`id\`, mobile \`open()\` pushes \`#id\` to browser history. Pressing browser back closes the popover and dispatches \`close\` with \`eventType: "HISTORY_BACK_EVENT"\` instead of immediately leaving the page.

\`\`\`html
<jb-popover id="menu-popover">
  <div>Menu content</div>
</jb-popover>
\`\`\`

If the page loads with \`#menu-popover\`, the popover opens itself and dispatches \`urlOpen\`.

## Slot

| slot | description |
| --- | --- |
| default | Popover content. |

\`\`\`html
<jb-popover>
  <div>Custom content</div>
</jb-popover>
\`\`\`

## CSS parts and variables

| part | description |
| --- | --- |
| \`content\` | The popover content wrapper. |

| CSS variable name | description |
| --- | --- |
| \`--jb-popover-z-index\` | Z-index of the opened popover. |
| \`--jb-popover-bg-color\` | Background color of the content wrapper. |
| \`--jb-popover-border-radius\` | Border radius of the content wrapper. |
| \`--jb-popover-top\` | Top position in desktop mode when not bound to an anchor. |
| \`--jb-popover-padding\` | Padding of the content wrapper. |
| \`--jb-popover-back-bg-color\` | Mobile backdrop background color. |
| \`--jb-popover-margin-top\` | Desktop margin above the popover. |

\`\`\`css
jb-popover {
  --jb-popover-z-index: 1000;
  --jb-popover-bg-color: #fff;
  --jb-popover-border-radius: 16px;
}

jb-popover::part(content) {
  min-width: 240px;
}
\`\`\`

## Accessibility notes

- The component does not manage focus trapping or Escape-key close behavior.
- Add appropriate roles, labels, and keyboard handling inside the slotted content for menus, listboxes, or dialogs.
- On mobile, backdrop click dispatches \`close\` and closes the popover.

## Related Docs

- See [\`jb-popover/react\`](https://github.com/javadbat/jb-popover/tree/main/react) if you want to use this component in React.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-popover\` once before using \`<jb-popover>\`.
- Use \`open()\` and \`close()\` for imperative control.
- Use \`bindTarget(element)\` to anchor the popover to a trigger element on desktop.
- Use \`positionArea\` as a JavaScript property, not as a string HTML attribute.
- Use \`id\` only when mobile URL hash/history integration is desired.
- Listen to \`close\` and inspect \`event.detail.eventType\` for backdrop and browser-back close requests.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps the \`jb-popover\` tag name to \`JBPopoverWebComponent\`.`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBPopover/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};