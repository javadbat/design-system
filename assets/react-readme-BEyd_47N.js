import{j as n,M as a,o as s}from"./index-BypAoLk3.js";import{useMDXComponents as d}from"./index-B8rYRX2K.js";import"./iframe-P5ebwbZQ.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const l=`# JBModal

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

## Shared Documentation

For web-component behavior, events, slots, CSS parts, URL hash behavior, and the full API, see [\`jb-modal\`](https://github.com/javadbat/jb-modal).

## AI agent notes

- Import \`JBModal\` from \`jb-modal/react\`; the wrapper imports and registers the underlying \`jb-modal\` web component.
- Use \`isOpen\` as the controlled React state and update it in \`onClose\`.
- Use \`onUrlOpen\` to sync state when the modal opens from a URL hash.
- Use \`ref.current.open()\` and \`ref.current.close()\` only for imperative workflows.
- Use \`slot="header"\`, \`slot="content"\`, and \`slot="footer"\` for structured modal content.
- The web component does not currently implement focus trapping or Escape-key close behavior.
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/JBModal/React Readme"}),`
`,n.jsx(s,{children:l})]})}function f(e={}){const{wrapper:o}={...d(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{f as default};
