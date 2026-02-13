import{r as V,R as d}from"./index-DwQS_Y10.js";import{i as M}from"./JBCheckbox-Dr42RPKD.js";import"./jb-validation-DPnsTO1v.js";import"./index-bfIR6bpK.js";import"./index-_b1slotr.js";function j(e){const[N,_]=V.useState("");return d.createElement(M,{label:e.label,value:N,onChange:O=>{_(O.target.value)}})}const I={title:"Components/form elements/JBCheckbox",component:M},r={args:{label:"checkbox",onChange:e=>{console.log("onChange",e.target.value)}}},a={args:{label:"Checkbox Label",message:"message of checkbox"}},o={args:{label:"required checkbox",message:"please check and then uncheck the checkbox to see validation error",required:!0}},s={args:{label:"disabled",disabled:!0,onChange:e=>{console.log("onChange",e.target.value)}}},n={args:{label:"disabled with true value",value:!0,disabled:!0,onChange:e=>{console.log("onChange",e.target.value)}}},t={args:{children:d.createElement("div",{style:{color:"blue"},slot:"label"},"label in children"),onChange:e=>{console.log("onChange",e.target.value)}}},l={args:{label:"with error",error:"error message passed from props"}},c={render:e=>d.createElement(j,{...e}),args:{label:"check box"}};var g,i,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'checkbox',
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,h,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    message: 'message of checkbox'
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var p,C,k;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'required checkbox',
    message: 'please check and then uncheck the checkbox to see validation error',
    required: true
  }
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var x,v,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,E,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'disabled with true value',
    value: true,
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var q,w,B;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      color: 'blue'
    }} slot="label">label in children</div>,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var D,J,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    error: 'error message passed from props'
  }
}`,...(L=(J=l.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var R,W,y;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <JBCheckboxTest {...args}></JBCheckboxTest>,
  args: {
    label: 'check box'
  }
}`,...(y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};const K=["Normal","WithMessage","Required","Disabled","DisabledTrue","ChildrenLabel","WithError","TestCheckbox"];export{t as ChildrenLabel,s as Disabled,n as DisabledTrue,r as Normal,o as Required,c as TestCheckbox,l as WithError,a as WithMessage,K as __namedExportsOrder,I as default};
