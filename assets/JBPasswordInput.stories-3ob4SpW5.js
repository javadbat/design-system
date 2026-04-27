import{R as e}from"./index-CwcVQgaJ.js";import{p as s}from"./JBPasswordInput-LIim1_dr.js";import"./JBInput-ddxJ_STh.js";import"./index-C1suxRb_.js";import"./jb-validation-DEeh0jn_.js";import"./index-BtFglznY.js";import"./index-BjRxPyWZ.js";import"./index-Bhe3Q7G8.js";import"./index-BVrqzDik.js";const B={title:"Components/form elements/Inputs/JBPasswordInput",component:s},r={args:{label:"password",message:"simple password input"}},a={args:{label:"with minimum length",message:"enter value with less than 8 char to see error",minLength:8}},t={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(s,{label:"xl",size:"xl"}),e.createElement(s,{label:"lg",size:"lg"}),e.createElement(s,{label:"md",size:"md"}),e.createElement(s,{label:"sm",size:"sm"}),e.createElement(s,{label:"xs",size:"xs"}))};var l,m,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'password',
    message: "simple password input"
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var o,i,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'with minimum length',
    message: "enter value with less than 8 char to see error",
    minLength: 8
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <JBPasswordInput label='xl' size='xl' />
        <JBPasswordInput label='lg' size='lg' />
        <JBPasswordInput label='md' size='md' />
        <JBPasswordInput label='sm' size='sm' />
        <JBPasswordInput label='xs' size='xs' />
      </div>;
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const J=["Normal","MinimumLength","Sizes"];export{a as MinimumLength,r as Normal,t as Sizes,J as __namedExportsOrder,B as default};
