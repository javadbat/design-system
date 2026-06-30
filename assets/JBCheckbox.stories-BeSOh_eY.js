import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-9JcXr86A.js";import{n as a,t as o}from"./react-Dmeh8dZg.js";function s(e){let[t,n]=(0,c.useState)(``);return(0,l.jsx)(a,{label:e.label,value:t,onChange:e=>{n(e.target.value)}})}var c,l,u=t((()=>{c=n(r(),1),o(),l=i(),s.__docgenInfo={description:``,methods:[],displayName:`JBCheckboxTest`}})),d=e({ChildrenLabel:()=>C,Disabled:()=>x,DisabledTrue:()=>S,Normal:()=>v,Required:()=>b,SizeVariants:()=>E,TestCheckbox:()=>T,WithError:()=>w,WithMessage:()=>y,__namedExportsOrder:()=>D,default:()=>_}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{o(),u(),f=i(),{expect:p,fn:m,userEvent:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/form elements/JBCheckbox`,component:a},v={args:{label:`checkbox`,onChange:e=>{console.log(`onChange`,e.target.value)}}},y={args:{label:`Checkbox Label`,message:`message of checkbox`}},b={args:{label:`required checkbox`,message:`please check and then uncheck the checkbox to see validation error`,required:!0}},x={args:{label:`disabled`,disabled:!0,onChange:e=>{console.log(`onChange`,e.target.value)}},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`),n=t?.shadowRoot?.querySelector(`.jb-checkbox-web-component`),r=m();p(t).toBeTruthy(),p(n).toBeTruthy(),t?.addEventListener(`change`,r),await g(()=>{p(t?.disabled).toBe(!0),p(n?.tabIndex).toBe(-1)}),await h.click(n),p(t?.value).toBe(!1),p(r).not.toHaveBeenCalled()}},S={args:{label:`disabled with true value`,value:!0,disabled:!0,onChange:e=>{console.log(`onChange`,e.target.value)}}},C={args:{children:(0,f.jsx)(`div`,{style:{color:`blue`},slot:`label`,children:`label in children`}),onChange:e=>{console.log(`onChange`,e.target.value)}}},w={args:{label:`with error`,error:`error message passed from props`}},T={render:e=>(0,f.jsx)(s,{...e}),args:{label:`check box`}},E={render:()=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,f.jsx)(a,{size:`xl`,label:`Checkbox`}),(0,f.jsx)(a,{size:`xl`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`xl`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`lg`,label:`Checkbox`}),(0,f.jsx)(a,{size:`lg`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`lg`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`md`,label:`Checkbox`}),(0,f.jsx)(a,{size:`md`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`md`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`sm`,label:`Checkbox`}),(0,f.jsx)(a,{size:`sm`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`sm`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,f.jsx)(a,{size:`xs`,label:`Checkbox`}),(0,f.jsx)(a,{size:`xs`,label:`Checkbox`,value:!0}),(0,f.jsx)(a,{size:`xs`,label:`Checkbox`,message:`default checkbox message`,value:!0})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'checkbox',
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    message: 'message of checkbox'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required checkbox',
    message: 'please check and then uncheck the checkbox to see validation error',
    required: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector<JBCheckboxWebComponent>('jb-checkbox');
    const wrapper = checkbox?.shadowRoot?.querySelector<HTMLElement>('.jb-checkbox-web-component');
    const onChange = fn();
    expect(checkbox).toBeTruthy();
    expect(wrapper).toBeTruthy();
    checkbox?.addEventListener('change', onChange);
    await waitFor(() => {
      expect(checkbox?.disabled).toBe(true);
      expect(wrapper?.tabIndex).toBe(-1);
    });
    await userEvent.click(wrapper!);
    expect(checkbox?.value).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled with true value',
    value: true,
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      color: 'blue'
    }} slot="label">label in children</div>,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    error: 'error message passed from props'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <JBCheckboxTest {...args}></JBCheckboxTest>,
  args: {
    label: 'check box'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Normal`,`WithMessage`,`Required`,`Disabled`,`DisabledTrue`,`ChildrenLabel`,`WithError`,`TestCheckbox`,`SizeVariants`]}));O();export{C as ChildrenLabel,x as Disabled,S as DisabledTrue,v as Normal,b as Required,E as SizeVariants,T as TestCheckbox,w as WithError,y as WithMessage,D as __namedExportsOrder,_ as default,O as n,d as t};