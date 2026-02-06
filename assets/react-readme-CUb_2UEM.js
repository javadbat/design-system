import{j as n,M as t,l as m}from"./index-CFSn5dqC.js";import{useMDXComponents as s}from"./index-DVgGKjXv.js";import"./iframe-Befpusgx.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const a=`# JBForm React

jb form react component to make jb-form easier to use

## usage
\`\`\`jsx
import {JBForm} from 'jb-form/react'

<JBForm>
{/*put your form here*/}
</JBForm>

\`\`\`
## get form instance

to get from instance you have 2 way:
1. with Ref props
\`\`\`jsx
const formRef = useRef();
if(formRef.current){
  //do whatever you want here
  formRef.current.checkValidity()
}
return(
<JBForm ref={formRef}>
{/*put your form here*/}
</JBForm>
)

\`\`\`
2. get with \`useJBForm\` hook.`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Components/form elements/JBForm/React Readme"}),`
`,n.jsx(m,{children:a})]})}function R(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o()}export{R as default};
