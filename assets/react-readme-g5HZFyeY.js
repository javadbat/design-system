import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-ggKXR4rT.js";import{_ as n,d as r,k as i,u as a}from"./blocks-CLyHj7Mb.js";import{t as o}from"./mdx-react-shim-Ob8i-TrQ.js";var s,c=e((()=>{s=`# JBPopover React Component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-popover)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-popover/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-popover-react)](https://www.npmjs.com/package/jb-popover-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-popover)

React wrapper for [\`jb-popover\`](https://github.com/javadbat/jb-popover). It imports and registers the underlying responsive popover web component.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbpopover)
- Used inside components such as [jb-date-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbdateinput-), [jb-time-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbtimeinput), and [jb-select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)

## Installation

\`\`\`sh
npm i jb-popover
\`\`\`

\`\`\`jsx
import { JBPopover } from 'jb-popover/react';

<JBPopover>
  <div>Popover content</div>
</JBPopover>;
\`\`\`

## When to use

Use \`JBPopover\` for anchored floating content such as menus, pickers, filters, and small panels that need responsive placement, overflow handling, backdrop close behavior, or mobile browser-back support.

Use \`JBModal\` for blocking dialogs that should take over the page flow.

## Props

| prop | type | description |
| --- | --- | --- |
| \`isOpen\` | \`boolean\` | Opens or closes the popover. |
| \`anchor\` | \`React.RefObject<HTMLElement \\| null>\` | Anchor element ref passed to \`bindTarget()\`. |
| \`positionArea\` | \`{ inline?: 'start' \\| 'end' \\| 'center' \\| 'center-before' \\| 'center-after'; block?: 'after' \\| 'before' }\` | Preferred anchor alignment. |
| \`overflowHandler\` | \`'NONE' \\| 'SLIDE'\` | Overflow handling mode. |
| \`overflowDom\` | \`HTMLElement \\| null\` | Element used as the overflow boundary. |
| \`id\` | \`string\` | Enables mobile URL hash history behavior when set. |
| \`children\` | \`React.ReactNode\` | Popover content. |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onLoad\` | \`load\` | Called before event listeners are registered. |
| \`onInit\` | \`init\` | Called after initialization. |
| \`onClose\` | \`close\` | Called for backdrop clicks and mobile browser-back close attempts. |

\`onClose\` receives \`event.detail.eventType\`, such as \`BACKGROUND_CLICK\` or \`HISTORY_BACK_EVENT\`.

## Controlled open state

\`\`\`jsx
const [isOpen, setIsOpen] = useState(false);

<JBPopover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div>Popover content</div>
</JBPopover>;
\`\`\`

## Open and close

Control open state with \`isOpen\`. Use \`onClose\` to synchronize React state when the user closes the popover by backdrop click or mobile history back.

## Slot

React children render in the default slot of the underlying popover.

## Bind to an anchor

\`\`\`tsx
const anchorRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <button ref={anchorRef} onClick={() => setIsOpen(true)}>
      Open
    </button>
    <JBPopover
      anchor={anchorRef}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div>Actions</div>
    </JBPopover>
  </>
);
\`\`\`

## Anchor position

\`\`\`jsx
<JBPopover
  anchor={anchorRef}
  isOpen={isOpen}
  positionArea={{ block: 'before', inline: 'end' }}
>
  <div>Aligned content</div>
</JBPopover>;
\`\`\`

## Overflow handling

\`\`\`jsx
<JBPopover
  isOpen={isOpen}
  anchor={anchorRef}
  overflowHandler="SLIDE"
  overflowDom={modalElement}
>
  <div>Popover content</div>
</JBPopover>;
\`\`\`

## Mobile URL hash state

Set \`id\` when mobile browser back should close the popover before leaving the page.

\`\`\`jsx
<JBPopover id="actions-popover" isOpen={isOpen}>
  <div>Actions</div>
</JBPopover>
\`\`\`

## Styling

The React component uses the same CSS variables and parts as the web component.

\`\`\`css
.actions-popover {
  --jb-popover-z-index: 1000;
  --jb-popover-bg-color: #fff;
  --jb-popover-border-radius: 1rem;
}
\`\`\`

\`\`\`jsx
<JBPopover className="actions-popover">
  <div>Actions</div>
</JBPopover>
\`\`\`

## CSS parts and variables

Use the same CSS parts and variables as the web component. The \`Styling\` section above shows the React class-based pattern.

## Accessibility notes

Move focus intentionally when opening interactive popovers and return focus to the trigger when closing if the surrounding workflow needs it. Use \`JBModal\` instead for modal dialogs that require focus trapping.

## Shared Documentation

For web-component behavior, events, slots, URL hash behavior, and CSS variables, see [\`jb-popover\`](https://github.com/javadbat/jb-popover).

## Related Docs

- See [\`jb-popover\`](https://github.com/javadbat/jb-popover) if you want to use this component as a pure JavaScript web component.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBPopover\` from \`jb-popover/react\`; the wrapper imports and registers the underlying \`jb-popover\` web component.
- Use \`isOpen\` for controlled open state.
- Use \`anchor={ref}\` to position the popover relative to a trigger element.
- Use \`positionArea\` as an object prop, not a string.
- Use \`onClose\` to sync React state after backdrop or mobile browser-back close requests.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBPopover/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};