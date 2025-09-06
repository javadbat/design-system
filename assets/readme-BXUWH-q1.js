import{j as e,M as s,m as r}from"./index-BgqriNbq.js";import{useMDXComponents as a}from"./index-CpNkpSEJ.js";import"./iframe-I02ANcUd.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const i=`# jb-core

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.


## React Modules

to see react modules please see [\`jb-core/react\`](https://github.com/javadbat/jb-core/tree/main/react)

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
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/JBCore/Readme"}),`
`,e.jsx(r,{children:i})]})}function y(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{y as default};
