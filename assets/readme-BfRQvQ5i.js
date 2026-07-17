import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C3yTzOc_.js";import{A as n,d as r,u as i,v as a}from"./blocks-D8nrqCmJ.js";import{t as o}from"./mdx-react-shim-CMH1getV.js";var s,c=e((()=>{s=`# jb-core

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-core)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-core/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-core)](https://www.npmjs.com/package/jb-core)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-core)

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.


## React Modules

- [<img src="https://img.shields.io/badge/React.js-jb--core%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-core/tree/main/react)

## I18N modules

to see i18n modules please see [\`jb-core/i18n\`](https://github.com/javadbat/jb-core/tree/main/i18n)

## listenAndSilentEvent

this function listen to event in the capture phase and stop it's propagation and call your handler so you will be the only one who capture this event used for event forwarding (transformation) in web-components.

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
we also have \`createKeyboardEvent\`, \`createInputEvent\`, \`createFocusEvent\`.

## Inject Style

when you have your styles in a string and you want to inject it in document or shadowroot you can use this function.

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
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCore/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};