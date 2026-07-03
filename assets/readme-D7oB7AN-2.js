import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CS2hR0SM.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Bft8nf94.js";import{t as o}from"./mdx-react-shim-nI9Pyy70.js";var s,c=e((()=>{s=`# jb-modal

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-modal)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-modal/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-modal)](https://www.npmjs.com/package/jb-modal)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-modal)

Responsive modal web component.

Benefits:

- Responsive, opens as a centered dialog on desktop and a bottom sheet on mobile devices.
- Framework free, so you can use it anywhere.
- Customizable content and style.
- Pre-styled header and footer slots.
- TypeScript support.
- Optional auto close on background click.
- Optional route history with browser back handling.
- Keeps modal open after page refresh when you provide an \`id\`.

## When to use

Use \`jb-modal\` for temporary blocking UI such as confirmations, forms, detail views, and mobile bottom sheets.

Use an inline panel or page route when the content should remain part of the normal document flow or needs a shareable full-page URL.

## Demo

- [GitHub Pages](https://javadbat.github.io/jb-modal)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbmodal)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--modal%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-modal/tree/main/react)

## Installation

\`\`\`sh
npm i jb-modal
\`\`\`

\`\`\`js
import 'jb-modal';
\`\`\`

\`\`\`html
<jb-modal>
  <div>Modal content</div>
</jb-modal>
\`\`\`

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`is-open\` | \`boolean\` | \`false\` | Opens the modal when set to \`"true"\`. Any other value closes it. |
| \`id\` | \`string\` | \`""\` | Modal id used for URL hash state. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| \`isOpen\` | \`boolean\` | yes | Current \`isOpen\` state. |
| \`id\` | \`string\` | no | Modal id used for URL hash state. See the [Hash Id Storybook docs](https://javadbat.github.io/design-system/?path=/docs/components-jbmodal-hash-id--docs). |
| \`config\` | \`{ autoCloseOnBackgroundClick: boolean }\` | no | Runtime configuration. |

### Methods

| name | returns | description |
| --- | --- | --- |
| \`open()\` | \`void\` | Opens the modal, sets \`ariaHidden\` to \`false\`, and pushes \`#id\` to browser history when \`id\` is set. |
| \`close()\` | \`void\` | Closes the modal, sets \`ariaHidden\` to \`true\`, and navigates back when the current URL hash matches the modal id. |

### Events

| event | detail | description |
| --- | --- | --- |
| \`load\` | none | Dispatched from \`connectedCallback\` before initialization. |
| \`init\` | none | Dispatched from \`connectedCallback\` after initialization. |
| \`urlOpen\` | none | Dispatched when the modal opens itself because the current URL hash matches its id. |
| \`close\` | \`{ eventType }\` | Dispatched for background click and browser-back close attempts. |

\`close\` event \`event.detail.eventType\` can be:

| value | meaning |
| --- | --- |
| \`BACKGROUND_CLICK\` | The backdrop was clicked. |
| \`HISTORY_BACK_EVENT\` | Browser back/popstate was received while the modal was open. |
| \`CLOSE_BUTTON_CLICK\` | Reserved close type for close button flows. |

## isOpen and close

\`\`\`js
const modal = document.querySelector('jb-modal');

modal.open();
modal.close();
console.log(modal.isOpen);
\`\`\`

\`\`\`html
<jb-modal is-open="true">
  <div>Modal content</div>
</jb-modal>
\`\`\`

## Slots

Use the default slot for simple content or named slots for structured modal sections.

\`\`\`html
<jb-modal>
  <div slot="header">Modal header</div>
  <div slot="content">Modal content</div>
  <div slot="footer">
    <jb-button>Done</jb-button>
  </div>
</jb-modal>
\`\`\`

| slot | description |
| --- | --- |
| default | Modal content rendered as the fallback of the \`content\` slot. |
| \`header\` | Header area at the top of the content box. |
| \`content\` | Main scrollable modal content area. |
| \`footer\` | Footer area at the bottom of the content box. |

## Background click

The component always dispatches \`close\` with \`eventType: "BACKGROUND_CLICK"\` when the backdrop is clicked. It only closes automatically when \`config.autoCloseOnBackgroundClick\` is \`true\`.

\`\`\`js
const modal = document.querySelector('jb-modal');

modal.config.autoCloseOnBackgroundClick = true;

modal.addEventListener('close', (event) => {
  if (event.detail.eventType === 'BACKGROUND_CLICK') {
    console.log('Backdrop clicked');
  }
});
\`\`\`

## URL hash state

Set \`id\` when the modal should update the URL hash while \`isOpen\` is true. When \`open()\` runs, the modal pushes \`#id\` to browser history. If the page loads with the same hash, the modal opens itself and dispatches \`urlOpen\`.

Demo: [Hash Id Storybook docs](https://javadbat.github.io/design-system/?path=/docs/components-jbmodal-hash-id--docs). To test the real browser hash and back-button behavior, open the [isolated hash demo](https://javadbat.github.io/design-system/iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story#HashLinkedModal) in a new window.

\`\`\`html
<jb-modal id="profile-modal">
  <div slot="content">Profile</div>
</jb-modal>
\`\`\`

\`\`\`js
const modal = document.querySelector('#profile-modal');

modal.addEventListener('urlOpen', () => {
  console.log('Opened from URL hash');
});
\`\`\`

Browser back dispatches a \`close\` event with \`eventType: "HISTORY_BACK_EVENT"\`. In the current implementation, browser-back auto close uses the same \`config.autoCloseOnBackgroundClick\` flag.

## CSS parts and custom style

| part | description |
| --- | --- |
| \`background\` | The modal backdrop/background. |
| \`content-box\` | The modal content box that contains header, content, and footer slots. |
| \`component-wrapper\` | div that wrap whole component |

| CSS variable name | description |
| --- | --- |
| \`--jb-modal-bg-color\` | Modal content background color. |
| \`--jb-modal-back-bg-color\` | Modal backdrop background color. |
| \`--jb-modal-border-radius\` | Modal content border radius. |
| \`--jb-modal-z-index\` | Modal z-index. |

\`\`\`css
jb-modal::part(content-box) {
  min-width: 320px;
}

jb-modal {
  --jb-modal-border-radius: 16px;
  --jb-modal-z-index: 1000;
}
\`\`\`

## Animation

\`jb-modal\` does not ship with a default desktop open or close animation. Modal animation is usually tied to each project's visual language, motion duration, easing, and interaction style, so the component keeps the behavior simple and lets you add animation from your own CSS.

You can animate each exposed part independently. For example, fade the \`background\`, scale or slide the \`content-box\`, or use different durations for each part.

\`\`\`css
@media (min-width: 769px) {
  .profile-modal::part(background) {
    opacity: 1;
    transition: opacity 300ms ease;
  }

  .profile-modal::part(content-box) {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition:
      opacity 300ms ease,
      transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .profile-modal:state(open)::part(background) {
    @starting-style {
      opacity: 0;
    }
  }

  .profile-modal:state(open)::part(content-box) {
    @starting-style {
      opacity: 0;
      transform: translateY(1rem) scale(0.96);
    }
  }
}
\`\`\`

For close animations, include a discrete \`display\` transition on the modal host so the element remains rendered while its parts animate back to their closed styles.

See the [Animation Storybook docs](https://javadbat.github.io/design-system/?path=/docs/components-jbmodal-animation--docs) for open-only and open-close examples.

## Accessibility notes

- The component attaches \`ElementInternals\` and sets \`ariaModal\` to \`true\`.
- \`ariaHidden\` is set to \`false\` when opened and \`true\` when closed.

## Related Docs

- See [\`jb-modal/react\`](https://github.com/javadbat/jb-modal/tree/main/react) if you want to use this component in React.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-modal\` once before using \`<jb-modal>\`.
- Use \`open()\` and \`close()\` for imperative control; there is no public \`open\` property setter.
- Use \`is-open="true"\` only for initial \`isOpen\` markup state.
- Use \`config.autoCloseOnBackgroundClick = true\` when backdrop clicks should close the modal.
- Listen to \`close\` and inspect \`event.detail.eventType\` to know why close was requested.
- Use \`id\` only when URL hash/history integration is desired.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps the \`jb-modal\` tag name to \`JBModalWebComponent\`.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBModal/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};