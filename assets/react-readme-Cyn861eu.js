import{j as e,M as r,k as m}from"./index-CkPYrGr3.js";import{useMDXComponents as a}from"./index-DVRRELxc.js";import"./iframe-DSbquyYE.js";import"./index-CwcVQgaJ.js";import"./index-BEjDVx3I.js";import"./index-C8bfMtE3.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# JBForm React

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
2. get with \`useJBForm\` hook.

\`\`\`ts
const form = useJBForm();
\`\`\`

## Get form value in react with Hooks

syncing form value with react states are a challenging job. some times we have complex forms that rendering one part is depend on other parts.
here we develop a hook that listen to changes event of form value and update states base on latest value

\`\`\`ts
  // get all forms value
  const formValues = useJBFormValue({formRef:ref});
  // by passing name name you get specific form elements value 
  const {value:bookName} = useJBFormValue<string>({formRef:ref, name:"bookName"});
\`\`\``;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/form elements/JBForm/React Readme"}),`
`,e.jsx(m,{children:s})]})}function g(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{g as default};
