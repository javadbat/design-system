import{j as e,M as s,k as a}from"./index-DEqm3j50.js";import{useMDXComponents as i}from"./index-DVgGKjXv.js";import"./iframe-DxbMd_zR.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# jb-core

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-core/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-core)](https://www.npmjs.com/package/jb-core)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-core)

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.


## React Modules

to see react modules please see [\`jb-core/react\`](https://github.com/javadbat/jb-core/tree/main/react)

## I18N modules

to see i18n modules please see [\`jb-core/i18n\`](https://github.com/javadbat/jb-core/tree/main/i18n)

## listenAndSilentEvent

this function listen to event in the capture phase and stop it's propagation and call your handler so you will be the only one who capture this event used for event forwarding (transformation) in web-components.

\`\`\`js
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler);
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler,{passive:true});
\`\`\`

## create events

these functions will create events base on existing event objects used mostly for event forwarding.

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
\`\`\``;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/JBCore/Readme"}),`
`,e.jsx(a,{children:r})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{b as default};
