import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DjftpzXQ.js";import{d as n,f as r,j as i,y as a}from"./blocks-BkMZfQ8f.js";import{t as o}from"./mdx-react-shim-CzRvkGBh.js";var s,c=e((()=>{s=`# jb-core

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-core)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-core/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-core)](https://www.npmjs.com/package/jb-core)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-core)

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.

## Device detection

\`jb-core\` exports two SSR-safe helpers for coarse device detection:

\`\`\`ts
import {isMobile, isTablet} from "jb-core";

if (isMobile()) {
  // Mobile user agent
}

if (isTablet()) {
  // Tablet user agent, including iPadOS desktop-mode user agents
}
\`\`\`

\`isMobile()\` checks the browser user agent for mobile devices. \`isTablet()\` recognizes common tablet user agents, Android devices without the \`Mobi\` marker, and iPadOS devices that identify as Macintosh while reporting touch points. Both methods return \`false\` when \`navigator\` is unavailable, so they can be called safely during server-side rendering.

These helpers detect device characteristics from the user agent; they do not replace viewport media queries for responsive layout. For viewport-based styling, use the shared media tokens documented in [Theme/Sizes](./theme/stories/sizes.mdx).


## React Modules

- [<img src="https://img.shields.io/badge/React.js-jb--core%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-core/tree/main/react)

See the [React module documentation](https://javadbat.github.io/design-system/?path=/story/components-jbcore-react-readme--docs) and [interactive React demos](https://javadbat.github.io/design-system/?path=/story/components-jbcore-react--use-event).

## I18N modules

to see i18n modules please see [\`jb-core/i18n\`](https://github.com/javadbat/jb-core/tree/main/i18n) and its [Storybook documentation](https://javadbat.github.io/design-system/?path=/story/components-jbcore-i18n-readme--docs).

## SSR-safe web components

Extend \`JBBaseComponent\` instead of \`HTMLElement\` when a web-component module must be importable during server-side rendering. In a browser, \`JBBaseComponent\` is the native \`HTMLElement\`. In environments such as Node.js where \`HTMLElement\` is unavailable, it uses a safe fallback so evaluating the module does not throw.

\`\`\`ts
import { JBBaseComponent } from "jb-core";

export class MyWebComponent extends JBBaseComponent {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    // Browser-only initialization belongs in the constructor or lifecycle methods.
  }
}

if (globalThis.customElements && !globalThis.customElements.get("my-component")) {
  globalThis.customElements.define("my-component", MyWebComponent);
}
\`\`\`

This makes importing the component safe during SSR; it does not run DOM behavior on the server. The browser creates or upgrades the custom element and runs its constructor and lifecycle callbacks during hydration. Keep other browser-only APIs such as \`document\`, \`window\`, and \`ResizeObserver\` out of module-scope expressions.

## listenAndSilentEvent

this function listen to event in the capture phase and stop it's propagation and call your handler so you will be the only one who capture this event used for event forwarding (transformation) in web-components. See the [event interception demo](https://javadbat.github.io/design-system/?path=/story/components-jbcore--listen-and-silent-event).

\`\`\`js
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler);
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler,{passive:true});
\`\`\`

## create events

these functions will create events based on existing event objects used mostly for event forwarding.

\`\`\`ts
  #onInputInput(e:InputEvent){
    const event = createInputEvent('input', e, { cancelable: false });
    this.dispatchEvent(event);
  }
    #onInputKeyup(e:KeyboardEvent){
    const event = createKeyboardEvent('keyup', e, { cancelable: false });
    this.dispatchEvent(event);
  }
    #onButtonClick(e:MouseEvent){
    const event = createMouseEvent('click', e, { cancelable: false });
    this.dispatchEvent(event);
  }
\`\`\`
we also have \`createKeyboardEvent\`, \`createInputEvent\`, \`createFocusEvent\`; try the [event creation demo](https://javadbat.github.io/design-system/?path=/story/components-jbcore--create-events).

## Inject Style

when you have your styles in a string and you want to inject it in document or shadowroot you can use this function. The [style injection demo](https://javadbat.github.io/design-system/?path=/story/components-jbcore--inject-style) shows the resulting stylesheet.

\`\`\`ts
import CSS from './style.css';
import {injectCss} from 'jb-core';

injectCss(CSS);
// same as
injectCss(CSS, document);
// in web-components when you want inject your style inside shadow DOM
injectCss(CSS, this.shadowRoot);
\`\`\`
## create unique id
\`\`\`ts
import {uniqueId} from 'jb-core'
// will generate unique uuid for you with given prefix
const id = uniqueId('prefix');
document.querySelector('jb-button').setAttribute('id',id)
\`\`\`
Generate prefixed identifiers in the [unique ID demo](https://javadbat.github.io/design-system/?path=/story/components-jbcore--unique-id).

## Parse attribute values

Use \`parseBooleanAttribute\` and \`parseNumberAttribute\` to convert string attribute values in web components while providing a fallback for missing or invalid values.

### \`parseBooleanAttribute\`

Converts a string attribute value to a boolean. A missing attribute (\`null\`) returns the provided default value. An empty string or \`"true"\` returns \`true\`, while \`"false"\` returns \`false\`.

\`\`\`ts
import {parseBooleanAttribute} from 'jb-core';

const disabled = parseBooleanAttribute(this.getAttribute('disabled'));
const enabled = parseBooleanAttribute(this.getAttribute('enabled'), true);
\`\`\`

### \`parseNumberAttribute\`

Converts a string attribute value to a finite number. A missing, empty, or invalid value returns the provided default value.

\`\`\`ts
import {parseNumberAttribute} from 'jb-core';

const min = parseNumberAttribute(this.getAttribute('min'));
const max = parseNumberAttribute(this.getAttribute('max'), 100);
\`\`\`
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCore/Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};