import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-uoF7cpi9.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Dj_nyNSz.js";import{t as o}from"./mdx-react-shim-DOfCvuWp.js";var s,c=e((()=>{s=`# JBModal

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-modal)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-modal/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-modal-react)](https://www.npmjs.com/package/jb-modal-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-modal)

React wrapper for [\`jb-modal\`](https://www.npmjs.com/package/jb-modal).

## Demo

- [GitHub Pages](https://javadbat.github.io/jb-modal)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbmodal)

## Installation

\`\`\`sh
npm i jb-modal
\`\`\`

\`\`\`jsx
import { JBModal } from 'jb-modal/react';

<JBModal>Modal content</JBModal>
\`\`\`

## When to use

Use \`JBModal\` for temporary blocking UI such as confirmations, forms, detail views, and mobile bottom sheets in React.

## Props

| prop | type | description |
| --- | --- | --- |
| \`isOpen\` | \`boolean\` | Opens or closes the modal by calling the underlying \`open()\`/\`close()\` methods. |
| \`id\` | \`string\` | Modal id used for URL hash state. Forwarded to the web component. |
| \`onClose\` | \`(event) => void\` | Fired for background click and browser-back close attempts. Read \`event.detail.eventType\`. |
| \`onUrlOpen\` | \`(event) => void\` | Fired when the modal opens itself because the current URL hash matches its id. |
| \`onLoad\` | \`(event) => void\` | Fired before initialization. |
| \`onInit\` | \`(event) => void\` | Fired after initialization. |

## Controlled isOpen state

\`\`\`jsx
const [isOpen, setIsOpen] = useState(false);

<JBModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div slot="content">Modal content</div>
</JBModal>
\`\`\`

The web component dispatches \`close\` when the user clicks the background or triggers browser back while \`isOpen\` is true. Keep React state in sync in \`onClose\`.

## isOpen and close

Use \`isOpen\` as controlled React state. Use \`onClose\` to update that state when the underlying modal requests close from background click or browser history.

## Slots

\`\`\`jsx
<JBModal isOpen={isOpen}>
  <div slot="header">Modal header</div>
  <div slot="content">Modal content</div>
  <div slot="footer">
    <button onClick={() => setIsOpen(false)}>Close</button>
  </div>
</JBModal>
\`\`\`

## URL hash state

Set \`id\` when the modal should update the URL hash while \`isOpen\` is true. Use \`onUrlOpen\` to sync React state when the page loads with the modal hash.

\`\`\`jsx
const [isModalOpen, setModalOpen] = useState(false);

<JBModal
  id="profile-modal"
  isOpen={isModalOpen}
  onUrlOpen={() => setModalOpen(true)}
  onClose={() => setModalOpen(false)}
>
  <div slot="content">Profile</div>
</JBModal>
\`\`\`

## Background click

Background clicks dispatch the underlying \`close\` event. Read \`event.detail.eventType\` in \`onClose\` when your app needs to distinguish background clicks from URL-history close requests.

## Imperative access

\`\`\`jsx
const modalRef = useRef(null);

<JBModal ref={modalRef}>
  <div slot="content">Modal content</div>
</JBModal>;

modalRef.current?.open();
modalRef.current?.close();
\`\`\`

## Custom style

The React component uses the same CSS variables and parts as the web component.

| CSS variable name | description |
| --- | --- |
| \`--jb-modal-bg-color\` | Modal content background color. |
| \`--jb-modal-back-bg-color\` | Modal backdrop background color. |
| \`--jb-modal-border-radius\` | Modal content border radius. |
| \`--jb-modal-z-index\` | Modal z-index. |

\`\`\`css
.profile-modal::part(content-box) {
  min-width: 320px;
}

.profile-modal {
  --jb-modal-border-radius: 16px;
}
\`\`\`

\`\`\`jsx
<JBModal className="profile-modal" />
\`\`\`

## CSS parts and custom style

The wrapper exposes the same CSS parts and variables as the web component, including content and background parts used by the animation examples.

## Animation

\`JBModal\` does not provide a default desktop open or close animation. Different products usually need different motion styles, durations, and easing, so the wrapper leaves animation to your project CSS.

Use \`className\` on \`JBModal\` and animate the exposed web-component parts. You can animate each part differently: fade the \`background\`, scale the \`content-box\`, slide it from any direction, or give each part its own timing.

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

\`\`\`jsx
<JBModal className="profile-modal" isOpen={isOpen}>
  <div slot="content">Profile</div>
</JBModal>
\`\`\`

For close animations, add a discrete \`display\` transition to the modal host and define closed styles for the parts.

See the [Animation Storybook docs](https://javadbat.github.io/design-system/?path=/docs/components-jbmodal-animation--docs) for open-only and open-close examples.

## Accessibility notes

\`JBModal\` provides modal structure and backdrop behavior, but the current web component does not implement focus trapping or Escape-key close behavior. Add those behaviors in your app when the modal contains keyboard-interactive workflows.

## Shared Documentation

For web-component behavior, events, slots, CSS parts, URL hash behavior, and the full API, see [\`jb-modal\`](https://github.com/javadbat/jb-modal).

## AI agent notes

- Import \`JBModal\` from \`jb-modal/react\`; the wrapper imports and registers the underlying \`jb-modal\` web component.
- Use \`isOpen\` as the controlled React state and update it in \`onClose\`.
- Use \`onUrlOpen\` to sync state when the modal opens from a URL hash.
- Use \`ref.current.open()\` and \`ref.current.close()\` only for imperative workflows.
- Use \`slot="header"\`, \`slot="content"\`, and \`slot="footer"\` for structured modal content.
- The web component does not currently implement focus trapping or Escape-key close behavior.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBModal/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};