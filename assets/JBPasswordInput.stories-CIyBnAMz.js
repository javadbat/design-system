import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D24fxiES.js";import{r as a,t as o}from"./react-Dypl6OZe.js";import{n as s,t as c}from"./react-COvmHmu3.js";var l=e({ExplicitNullValueDoesNotFallBackToInitialValue:()=>y,InitialValue:()=>_,InitialValueDoesNotOverrideValue:()=>v,MinimumLength:()=>b,Normal:()=>g,Sizes:()=>x,__namedExportsOrder:()=>S,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{u=n(r(),1),o(),c(),d=i(),{expect:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/form elements/Inputs/JBPasswordInput`,component:s},g={args:{label:`password`,message:`simple password input`}},_={render:e=>{let t=u.useRef(null);return(0,d.jsxs)(`form`,{ref:t,children:[(0,d.jsx)(s,{...e}),(0,d.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial password`,initialValue:`initial-secret`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-password-input`),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);f(t).toBeTruthy(),f(n).toBeTruthy(),await m(()=>{f(t?.initialValue).toBe(`initial-secret`),f(t?.value).toBe(`initial-secret`),f(t?.isDirty).toBe(!1)}),t.value=`changed-secret`,await p.click(n),await m(()=>{f(t?.value).toBe(`initial-secret`),f(t?.isDirty).toBe(!1)})}},v={args:{initialValue:`initial-secret`,value:`current-secret`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-password-input`);await m(()=>{f(t?.initialValue).toBe(`initial-secret`),f(t?.value).toBe(`current-secret`),f(t?.isDirty).toBe(!0)})}},y={args:{initialValue:`initial-secret`,value:null},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-password-input`);await m(()=>{f(t?.initialValue).toBe(`initial-secret`),f(t?.value).toBe(``),f(t?.isDirty).toBe(!0)})}},b={args:{label:`with minimum length`,message:`enter value with less than 8 char to see error`,minLength:8}},x={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,d.jsx)(s,{label:`xl`,size:`xl`}),(0,d.jsx)(s,{label:`lg`,size:`lg`}),(0,d.jsx)(s,{label:`md`,size:`md`}),(0,d.jsx)(s,{label:`sm`,size:`sm`}),(0,d.jsx)(s,{label:`xs`,size:`xs`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'password',
    message: "simple password input"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = React.useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBPasswordInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial password',
    initialValue: 'initial-secret'
  },
  play: async ({
    canvasElement
  }) => {
    const passwordInput = canvasElement.querySelector<JBPasswordInputWebComponent>('jb-password-input');
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(passwordInput).toBeTruthy();
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(passwordInput?.initialValue).toBe('initial-secret');
      expect(passwordInput?.value).toBe('initial-secret');
      expect(passwordInput?.isDirty).toBe(false);
    });
    passwordInput!.value = 'changed-secret';
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(passwordInput?.value).toBe('initial-secret');
      expect(passwordInput?.isDirty).toBe(false);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 'initial-secret',
    value: 'current-secret'
  },
  play: async ({
    canvasElement
  }) => {
    const passwordInput = canvasElement.querySelector<JBPasswordInputWebComponent>('jb-password-input');
    await waitFor(() => {
      expect(passwordInput?.initialValue).toBe('initial-secret');
      expect(passwordInput?.value).toBe('current-secret');
      expect(passwordInput?.isDirty).toBe(true);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 'initial-secret',
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const passwordInput = canvasElement.querySelector<JBPasswordInputWebComponent>('jb-password-input');
    await waitFor(() => {
      expect(passwordInput?.initialValue).toBe('initial-secret');
      expect(passwordInput?.value).toBe('');
      expect(passwordInput?.isDirty).toBe(true);
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with minimum length',
    message: "enter value with less than 8 char to see error",
    minLength: 8
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`MinimumLength`,`Sizes`]}));C();export{y as ExplicitNullValueDoesNotFallBackToInitialValue,_ as InitialValue,v as InitialValueDoesNotOverrideValue,b as MinimumLength,g as Normal,x as Sizes,S as __namedExportsOrder,h as default,C as n,l as t};