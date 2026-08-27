import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Dam_Gdf6.js";import{d as n,f as r,j as i,y as a}from"./blocks-DzN1-txQ.js";import{t as o}from"./mdx-react-shim-AVm1bDq_.js";var s,c=e((()=>{s=`# JBPopover React Component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-popover)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-popover/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-popover-react)](https://www.npmjs.com/package/jb-popover-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-popover)

React wrapper for [\`jb-popover\`](https://github.com/javadbat/jb-popover). It imports and registers the underlying responsive popover web component.

## Demo

Explore the [React popover examples](https://javadbat.github.io/design-system/?path=/story/components-jbpopover-react-readme--docs), including [anchored positioning](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal), [controlled open and close](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--open-close), and [overflow handling](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--overflow-slide).
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

Use \`JBPopover\` for anchored floating content such as menus, pickers, filters, and small panels that need responsive placement, overflow handling, backdrop close behavior, or mobile browser-back support. See the [anchored demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal) for the default interaction.

Use \`JBModal\` for blocking dialogs that should take over the page flow.

## Props

| prop | type | description |
| --- | --- | --- |
| \`isOpen\` | \`boolean\` | Opens or closes the popover; see the [controlled interaction](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--open-close). |
| \`anchor\` | \`React.RefObject<HTMLElement \\| null>\` | Anchor element ref passed to \`bindTarget()\`; see the [anchored demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal). |
| \`positionArea\` | \`{ inline?: 'start' \\| 'end' \\| 'center' \\| 'center-before' \\| 'center-after'; block?: 'after' \\| 'before' }\` | Preferred anchor alignment; compare [position variants](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--inline-center-position-area). |
| \`overflowHandler\` | \`'NONE' \\| 'SLIDE'\` | Overflow handling mode; see the [overflow example](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--overflow-slide). |
| \`overflowDom\` | \`HTMLElement \\| null\` | Element used as the overflow boundary; see [overflow handling](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--overflow-slide). |
| \`id\` | \`string\` | Enables mobile URL hash history behavior when set; see [mobile hash state](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--mobile-hash-state). |
| \`children\` | \`React.ReactNode\` | Popover content rendered in the default slot; see the [content demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal). |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onLoad\` | \`load\` | Called before event listeners are registered; see the [events demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--events). |
| \`onInit\` | \`init\` | Called after initialization; see the [events demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--events). |
| \`onClose\` | \`close\` | Called for backdrop clicks and mobile browser-back close attempts; see the [events demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--events). |

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

Control open state with \`isOpen\`. Use \`onClose\` to synchronize React state when the user closes the popover by backdrop click or mobile history back. The [controlled open/close demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--open-close) shows the flow.

## Slot

React children render in the default slot of the underlying popover; see the [content demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal).

## Bind to an anchor

The \`anchor\` ref binds the popover to a trigger; see the [anchored example](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal).

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

The \`positionArea\` prop controls the anchor alignment. Compare the [center](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--inline-center-position-area), [end](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--inline-end-position-area), and [before](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--block-before-position-area) examples.

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

\`overflowHandler="SLIDE"\` keeps content visible when it would overflow the viewport or \`overflowDom\`; try the [overflow demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--overflow-slide).

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

Set \`id\` when mobile browser back should close the popover before leaving the page. See the [mobile hash demo](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--mobile-hash-state).

\`\`\`jsx
<JBPopover id="actions-popover" isOpen={isOpen}>
  <div>Actions</div>
</JBPopover>
\`\`\`

## Styling

The React component uses the same CSS variables and parts as the web component. See the shared [web-component styling guidance](../README.md#css-parts-and-variables) and the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbpopover-style--gallery).

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

Use the same CSS parts and variables as the web component. The \`Styling\` section above shows the React class-based pattern; the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbpopover-style--gallery) demonstrates the available treatments.

## Accessibility notes

Move focus intentionally when opening interactive popovers and return focus to the trigger when closing if the surrounding workflow needs it. See the [interactive example](https://javadbat.github.io/design-system/?path=/story/components-jbpopover--normal) when adding keyboard handling around slotted content. Use \`JBModal\` instead for modal dialogs that require focus trapping.

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
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};