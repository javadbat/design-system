import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-BlaOm9nc.js";import{n as a,t as o}from"./react-C5C-7xjY.js";function s(e){let[t,n]=(0,c.useState)(``);return(0,l.jsx)(a,{label:e.label,value:t,onChange:e=>{n(e.target.value)}})}var c,l,u=t((()=>{c=n(r(),1),o(),l=i(),s.__docgenInfo={description:``,methods:[],displayName:`JBCheckboxTest`}})),d=e({ChildrenLabel:()=>y,Disabled:()=>_,DisabledTrue:()=>v,Normal:()=>m,Required:()=>g,SizeVariants:()=>S,TestCheckbox:()=>x,WithError:()=>b,WithMessage:()=>h,__namedExportsOrder:()=>C,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{r(),o(),u(),f=i(),p={title:`Components/form elements/JBCheckbox`,component:a},m={args:{label:`checkbox`,onChange:e=>{console.log(`onChange`,e.target.value)}}},h={args:{label:`Checkbox Label`,message:`message of checkbox`}},g={args:{label:`required checkbox`,message:`please check and then uncheck the checkbox to see validation error`,required:!0}},_={args:{label:`disabled`,disabled:!0,onChange:e=>{console.log(`onChange`,e.target.value)}}},v={args:{label:`disabled with true value`,value:!0,disabled:!0,onChange:e=>{console.log(`onChange`,e.target.value)}}},y={args:{children:(0,f.jsx)(`div`,{style:{color:`blue`},slot:`label`,children:`label in children`}),onChange:e=>{console.log(`onChange`,e.target.value)}}},b={args:{label:`with error`,error:`error message passed from props`}},x={render:e=>(0,f.jsx)(s,{...e}),args:{label:`check box`}},S={render:()=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,f.jsx)(a,{size:`xl`,label:`Checkbox`}),(0,f.jsx)(a,{size:`xl`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`xl`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`lg`,label:`Checkbox`}),(0,f.jsx)(a,{size:`lg`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`lg`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`md`,label:`Checkbox`}),(0,f.jsx)(a,{size:`md`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`md`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`sm`,label:`Checkbox`}),(0,f.jsx)(a,{size:`sm`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`sm`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`xs`,label:`Checkbox`}),(0,f.jsx)(a,{size:`xs`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`xs`,label:`Checkbox`,message:`default checkbox message`,value:!0})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'checkbox',
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    message: 'message of checkbox'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required checkbox',
    message: 'please check and then uncheck the checkbox to see validation error',
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled with true value',
    value: true,
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      color: 'blue'
    }} slot="label">label in children</div>,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    error: 'error message passed from props'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <JBCheckboxTest {...args}></JBCheckboxTest>,
  args: {
    label: 'check box'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Normal`,`WithMessage`,`Required`,`Disabled`,`DisabledTrue`,`ChildrenLabel`,`WithError`,`TestCheckbox`,`SizeVariants`]}));w();export{y as ChildrenLabel,_ as Disabled,v as DisabledTrue,m as Normal,g as Required,S as SizeVariants,x as TestCheckbox,b as WithError,h as WithMessage,C as __namedExportsOrder,p as default,w as n,d as t};