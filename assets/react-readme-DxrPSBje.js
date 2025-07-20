import{j as n,M as r,m as s}from"./index-BIBbk7mA.js";import{useMDXComponents as a}from"./index-B8rYRX2K.js";import"./iframe-C0ISyA5V.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const c=`# jb-core react modules

## useEvent

used to bind web-component events to react component event prop

\`\`\`jsx
import {useEvent} from 'jb-core/react';

useEvent(ref,'event',props.onEvent);
//for example
useEvent(ref,'change',props.onChange);
\`\`\`

### useInstance

create a instance of an class inside a react component.

\`\`\`js
useInstance(YourClass,[arg1,arg2]);
//for 
class YourClass{
  constructor(arg1,arg2){

  }
}

\`\`\``;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Components/JBCore/React Readme"}),`
`,n.jsx(s,{children:c})]})}function x(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{x as default};
