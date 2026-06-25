import{R as e}from"./index-D4lIrffr.js";import{p as s}from"./JBPasswordInput-CWCuRIDZ.js";const g={title:"Components/form elements/Inputs/JBPasswordInput",component:s},r={args:{label:"password",message:"simple password input"}},a={args:{label:"with minimum length",message:"enter value with less than 8 char to see error",minLength:8}},t={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(s,{label:"xl",size:"xl"}),e.createElement(s,{label:"lg",size:"lg"}),e.createElement(s,{label:"md",size:"md"}),e.createElement(s,{label:"sm",size:"sm"}),e.createElement(s,{label:"xs",size:"xs"}))};var l,n,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'password',
    message: "simple password input"
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const b=["Normal","MinimumLength","Sizes"],x=Object.freeze(Object.defineProperty({__proto__:null,MinimumLength:a,Normal:r,Sizes:t,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{a as M,r as N,x as P};
