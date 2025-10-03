import{j as n,M as s,m as a}from"./index-zefJe0Vs.js";import{useMDXComponents as i}from"./index-vABTGKhX.js";import"./iframe-CWgiIvFj.js";import"./index-DhY--VwN.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const r=`# jb-core

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
\`\`\``;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/JBCore/Readme"}),`
`,n.jsx(a,{children:r})]})}function j(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{j as default};
