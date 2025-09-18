import{j as n,M as o,m as s}from"./index-cRkFOUKq.js";import{useMDXComponents as a}from"./index-CpNkpSEJ.js";import"./iframe-BSKoCD45.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const c=`# jb-core react modules

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

\`\`\`jsx
import {useInstance} from 'jb-core/react';

//create your class in js 
class YourClass{
  prop1 = null;
  prop2 = null;
  constructor(arg1,arg2){
    this.prop1 = arg1;
    this.prop2 = arg2;
  }
}

//use your class in react component

function YourComponent(){
  //pass args as array in second parameter
  const instance = useInstance(YourClass,[arg1,arg2]);

  return <div>{instance.prop1}</div>

}


\`\`\``;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/JBCore/React Readme"}),`
`,n.jsx(s,{children:c})]})}function x(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{x as default};
