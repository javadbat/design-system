import{j as n,M as s,m as r}from"./index-BIon4fj_.js";import{useMDXComponents as a}from"./index-CpNkpSEJ.js";import"./iframe-BIGZavBy.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const i=`# jb-core

core modules of jb-design system mostly contain functions that help you manage your web-components & tools to connect them to ReactJS components.

## js modules

### listenAndSilentEvent

this function listen to event in the capture phase and stop it's propagation and call your handler so you will be the only one who capture this event used for event forwarding (transformation) in web-components.

\`\`\`js
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler);
  listenAndSilentEvent(inputDom, 'keyup', yourOnKeyUpHandler,{passive:true});
\`\`\`

### create events

these functions will create events base on existing event objects used mostly for event forwarding.

\`\`\`ts
  #onInputInput(e:InputEvent){
    const event = createInputEvent('input', e, { cancelable: false });
    this.dispatchEvent(event);
  }
    
\`\`\`
we also have \`createKeyboardEvent\`, \`createInputEvent\`, \`createFocusEvent\`.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/JBCore/Readme"}),`
`,n.jsx(r,{children:i})]})}function y(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{y as default};
