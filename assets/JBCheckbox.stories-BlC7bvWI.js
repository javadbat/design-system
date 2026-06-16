import{r as F,R as e}from"./index-D4lIrffr.js";import{a}from"./JBCheckbox-DxIuKqvS.js";import"./jb-validation-Dz3z_GNT.js";import"./index-CansPAZh.js";import"./index-D7ggZhY0.js";function G(r){const[O,j]=F.useState("");return e.createElement(a,{label:r.label,value:O,onChange:A=>{j(A.target.value)}})}const U={title:"Components/form elements/JBCheckbox",component:a},s={args:{label:"checkbox",onChange:r=>{console.log("onChange",r.target.value)}}},l={args:{label:"Checkbox Label",message:"message of checkbox"}},o={args:{label:"required checkbox",message:"please check and then uncheck the checkbox to see validation error",required:!0}},c={args:{label:"disabled",disabled:!0,onChange:r=>{console.log("onChange",r.target.value)}}},t={args:{label:"disabled with true value",value:!0,disabled:!0,onChange:r=>{console.log("onChange",r.target.value)}}},n={args:{children:e.createElement("div",{style:{color:"blue"},slot:"label"},"label in children"),onChange:r=>{console.log("onChange",r.target.value)}}},b={args:{label:"with error",error:"error message passed from props"}},u={render:r=>e.createElement(G,{...r}),args:{label:"check box"}},m={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(a,{size:"xl",label:"Checkbox"}),e.createElement(a,{size:"xl",label:"Checkbox",value:!0}),e.createElement(a,{size:"xl",label:"Checkbox",message:"default checkbox message",value:!0}),e.createElement(a,{size:"lg",label:"Checkbox"}),e.createElement(a,{size:"lg",label:"Checkbox",value:!0}),e.createElement(a,{size:"lg",label:"Checkbox",message:"default checkbox message",value:!0}),e.createElement(a,{size:"md",label:"Checkbox"}),e.createElement(a,{size:"md",label:"Checkbox",value:!0}),e.createElement(a,{size:"md",label:"Checkbox",message:"default checkbox message",value:!0}),e.createElement(a,{size:"sm",label:"Checkbox"}),e.createElement(a,{size:"sm",label:"Checkbox",value:!0}),e.createElement(a,{size:"sm",label:"Checkbox",message:"default checkbox message",value:!0}),e.createElement(a,{size:"xs",label:"Checkbox"}),e.createElement(a,{size:"xs",label:"Checkbox",value:!0}),e.createElement(a,{size:"xs",label:"Checkbox",message:"default checkbox message",value:!0}))};var h,i,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'checkbox',
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var d,x,k;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    message: 'message of checkbox'
  }
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,p,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'required checkbox',
    message: 'please check and then uncheck the checkbox to see validation error',
    required: true
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var z,f,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(E=(f=c.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var B,J,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'disabled with true value',
    value: true,
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(S=(J=t.parameters)==null?void 0:J.docs)==null?void 0:S.source}}};var T,q,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      color: 'blue'
    }} slot="label">label in children</div>,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(y=(q=n.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var w,D,L;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    error: 'error message passed from props'
  }
}`,...(L=(D=b.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,W,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <JBCheckboxTest {...args}></JBCheckboxTest>,
  args: {
    label: 'check box'
  }
}`,...(V=(W=u.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var M,N,_;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem'
    }}>
      <JBCheckbox size='xl' label='Checkbox' />
      <JBCheckbox size='xl' label='Checkbox' value={true} />
      <JBCheckbox size='xl' label='Checkbox' message='default checkbox message' value={true} />

      <JBCheckbox size='lg' label='Checkbox' />
      <JBCheckbox size='lg' label='Checkbox' value={true} />
      <JBCheckbox size='lg' label='Checkbox' message='default checkbox message' value={true} />

      <JBCheckbox size='md' label='Checkbox' />
      <JBCheckbox size='md' label='Checkbox' value={true} />
      <JBCheckbox size='md' label='Checkbox' message='default checkbox message' value={true} />

      <JBCheckbox size='sm' label='Checkbox' />
      <JBCheckbox size='sm' label='Checkbox' value={true} />
      <JBCheckbox size='sm' label='Checkbox' message='default checkbox message' value={true} />

      <JBCheckbox size='xs' label='Checkbox' />
      <JBCheckbox size='xs' label='Checkbox' value={true} />
      <JBCheckbox size='xs' label='Checkbox' message='default checkbox message' value={true} />

    </div>;
  }
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const X=["Normal","WithMessage","Required","Disabled","DisabledTrue","ChildrenLabel","WithError","TestCheckbox","SizeVariants"];export{n as ChildrenLabel,c as Disabled,t as DisabledTrue,s as Normal,o as Required,m as SizeVariants,u as TestCheckbox,b as WithError,l as WithMessage,X as __namedExportsOrder,U as default};
