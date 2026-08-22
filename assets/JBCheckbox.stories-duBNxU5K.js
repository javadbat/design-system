import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-BMjwejaC.js";import{r as a,t as o}from"./react-pbAd0qxJ.js";import{n as s,t as c}from"./react-DFuYcajo.js";function l(e){let[t,n]=(0,u.useState)(``);return(0,d.jsx)(s,{label:e.label,value:t,onChange:e=>{n(e.target.value)}})}var u,d,f=t((()=>{u=n(r(),1),c(),d=i(),l.__docgenInfo={description:``,methods:[],displayName:`JBCheckboxTest`}})),p=e({CancelableEvents:()=>C,ChildrenLabel:()=>j,Disabled:()=>k,DisabledTrue:()=>A,ExplicitNullValueDoesNotFallBackToInitialValue:()=>E,ImperativeMethods:()=>S,InitialValue:()=>w,InitialValueDoesNotOverrideValue:()=>T,Normal:()=>x,Required:()=>O,SizeVariants:()=>P,TestCheckbox:()=>N,WithError:()=>M,WithMessage:()=>D,__namedExportsOrder:()=>F,default:()=>b}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{c(),o(),f(),m=n(r(),1),h=i(),{expect:g,fn:_,userEvent:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/form elements/JBCheckbox`,component:s},x={args:{label:`checkbox`,onChange:e=>{console.log(`onChange`,e.target.value)}}},S={args:{label:`Accept terms`,required:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`),n=t?.shadowRoot?.querySelector(`.jb-checkbox-web-component`);g(t).toBeTruthy(),g(n).toBeTruthy(),await y(()=>{g(t?.required).toBe(!0),g(t?.checkValidity()).toBe(!1)}),g(t?.reportValidity()).toBe(!1),await v.click(n),g(t?.value).toBe(!0),g(t?.checkValidity()).toBe(!0),t?.focus(),g(t?.shadowRoot?.activeElement).toBe(n)}},C={args:{label:`Accept terms`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`),n=t?.shadowRoot?.querySelector(`.jb-checkbox-web-component`),r=_(e=>e.preventDefault()),i=_();g(t).toBeTruthy(),g(n).toBeTruthy(),t?.addEventListener(`before-change`,r),t?.addEventListener(`change`,i),await v.click(n),g(r).toHaveBeenCalledOnce(),g(r.mock.calls[0][0].cancelable).toBe(!0),g(i).not.toHaveBeenCalled(),g(t?.value).toBe(!1),t?.removeEventListener(`before-change`,r),await v.click(n),g(i).toHaveBeenCalledOnce(),g(t?.value).toBe(!0)}},w={render:e=>{let t=(0,m.useRef)(null);return(0,h.jsxs)(`form`,{ref:t,children:[(0,h.jsx)(s,{...e}),(0,h.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial value`,initialValue:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`),n=t?.shadowRoot?.querySelector(`.jb-checkbox-web-component`),r=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);g(t).toBeTruthy(),g(n).toBeTruthy(),g(r).toBeTruthy(),await y(()=>{g(t?.initialValue).toBe(!0),g(t?.value).toBe(!0),g(t?.checked).toBe(!0),g(t?.isDirty).toBe(!1)}),t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await v.click(n),g(t?.value).toBe(!0),g(t?.checked).toBe(!0),g(t?.isDirty).toBe(!1),t.initialValue=!1,g(t?.value).toBe(!1),g(t?.isDirty).toBe(!1),t.initialValue=!0,await v.click(n),g(t?.value).toBe(!1),g(t?.checked).toBe(!1),g(t?.isDirty).toBe(!0),t.initialValue=!0,g(t?.value).toBe(!1),g(t?.isDirty).toBe(!0),await v.click(r),g(t?.value).toBe(!0),g(t?.checked).toBe(!0),g(t?.initialValue).toBe(t?.value),g(t?.isDirty).toBe(!1),t.initialValue=!1,g(t?.value).toBe(!1),g(t?.checked).toBe(!1),g(t?.isDirty).toBe(!1)}},T={args:{label:`value takes precedence`,initialValue:!1,value:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`);await y(()=>{g(t?.initialValue).toBe(!1),g(t?.value).toBe(!0),g(t?.checked).toBe(!0),g(t?.isDirty).toBe(!0)})}},E={args:{label:`explicit null value`,initialValue:!0,value:null},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`);await y(()=>{g(t?.initialValue).toBe(!0),g(t?.value).toBe(!1),g(t?.checked).toBe(!1),g(t?.isDirty).toBe(!0)})}},D={args:{label:`Checkbox Label`,message:`message of checkbox`}},O={args:{label:`required checkbox`,message:`please check and then uncheck the checkbox to see validation error`,required:!0}},k={args:{label:`disabled`,disabled:!0,onChange:e=>{console.log(`onChange`,e.target.value)}},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-checkbox`),n=t?.shadowRoot?.querySelector(`.jb-checkbox-web-component`),r=_();g(t).toBeTruthy(),g(n).toBeTruthy(),t?.addEventListener(`change`,r),await y(()=>{g(t?.disabled).toBe(!0),g(n?.tabIndex).toBe(-1)}),await v.click(n),g(t?.value).toBe(!1),g(r).not.toHaveBeenCalled()}},A={args:{label:`disabled with true value`,value:!0,disabled:!0,onChange:e=>{console.log(`onChange`,e.target.value)}}},j={args:{children:(0,h.jsx)(`div`,{style:{color:`blue`},slot:`label`,children:`label in children`}),onChange:e=>{console.log(`onChange`,e.target.value)}}},M={args:{label:`with error`,error:`error message passed from props`}},N={render:e=>(0,h.jsx)(l,{...e}),args:{label:`check box`}},P={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,h.jsx)(s,{size:`xl`,label:`Checkbox`}),(0,h.jsx)(s,{size:`xl`,label:`Checkbox`,value:!0}),(0,h.jsx)(s,{size:`xl`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,h.jsx)(s,{size:`lg`,label:`Checkbox`}),(0,h.jsx)(s,{size:`lg`,label:`Checkbox`,value:!0}),(0,h.jsx)(s,{size:`lg`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,h.jsx)(s,{size:`md`,label:`Checkbox`}),(0,h.jsx)(s,{size:`md`,label:`Checkbox`,value:!0}),(0,h.jsx)(s,{size:`md`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,h.jsx)(s,{size:`sm`,label:`Checkbox`}),(0,h.jsx)(s,{size:`sm`,label:`Checkbox`,value:!0}),(0,h.jsx)(s,{size:`sm`,label:`Checkbox`,message:`default checkbox message`,value:!0}),(0,h.jsx)(s,{size:`xs`,label:`Checkbox`}),(0,h.jsx)(s,{size:`xs`,label:`Checkbox`,value:!0}),(0,h.jsx)(s,{size:`xs`,label:`Checkbox`,message:`default checkbox message`,value:!0})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'checkbox',
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector<JBCheckboxWebComponent>('jb-checkbox');
    const wrapper = checkbox?.shadowRoot?.querySelector<HTMLElement>('.jb-checkbox-web-component');
    expect(checkbox).toBeTruthy();
    expect(wrapper).toBeTruthy();
    await waitFor(() => {
      expect(checkbox?.required).toBe(true);
      expect(checkbox?.checkValidity()).toBe(false);
    });
    expect(checkbox?.reportValidity()).toBe(false);
    await userEvent.click(wrapper!);
    expect(checkbox?.value).toBe(true);
    expect(checkbox?.checkValidity()).toBe(true);
    checkbox?.focus();
    expect(checkbox?.shadowRoot?.activeElement).toBe(wrapper);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms'
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector<JBCheckboxWebComponent>('jb-checkbox');
    const wrapper = checkbox?.shadowRoot?.querySelector<HTMLElement>('.jb-checkbox-web-component');
    const onBeforeChange = fn((event: Event) => event.preventDefault());
    const onChange = fn();
    expect(checkbox).toBeTruthy();
    expect(wrapper).toBeTruthy();
    checkbox?.addEventListener('before-change', onBeforeChange);
    checkbox?.addEventListener('change', onChange);
    await userEvent.click(wrapper!);
    expect(onBeforeChange).toHaveBeenCalledOnce();
    expect(onBeforeChange.mock.calls[0][0].cancelable).toBe(true);
    expect(onChange).not.toHaveBeenCalled();
    expect(checkbox?.value).toBe(false);
    checkbox?.removeEventListener('before-change', onBeforeChange);
    await userEvent.click(wrapper!);
    expect(onChange).toHaveBeenCalledOnce();
    expect(checkbox?.value).toBe(true);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBCheckbox {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial value',
    initialValue: true
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector<JBCheckboxWebComponent>('jb-checkbox');
    const wrapper = checkbox?.shadowRoot?.querySelector<HTMLElement>('.jb-checkbox-web-component');
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(checkbox).toBeTruthy();
    expect(wrapper).toBeTruthy();
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(checkbox?.initialValue).toBe(true);
      expect(checkbox?.value).toBe(true);
      expect(checkbox?.checked).toBe(true);
      expect(checkbox?.isDirty).toBe(false);
    });

    // A canceled change must restore the assignment latch as well as value.
    checkbox!.addEventListener('change', event => event.preventDefault(), {
      once: true
    });
    await userEvent.click(wrapper!);
    expect(checkbox?.value).toBe(true);
    expect(checkbox?.checked).toBe(true);
    expect(checkbox?.isDirty).toBe(false);
    checkbox!.initialValue = false;
    expect(checkbox?.value).toBe(false);
    expect(checkbox?.isDirty).toBe(false);
    checkbox!.initialValue = true;
    await userEvent.click(wrapper!);
    expect(checkbox?.value).toBe(false);
    expect(checkbox?.checked).toBe(false);
    expect(checkbox?.isDirty).toBe(true);
    checkbox!.initialValue = true;
    expect(checkbox?.value).toBe(false);
    expect(checkbox?.isDirty).toBe(true);
    await userEvent.click(resetButton!);
    expect(checkbox?.value).toBe(true);
    expect(checkbox?.checked).toBe(true);
    expect(checkbox?.initialValue).toBe(checkbox?.value);
    expect(checkbox?.isDirty).toBe(false);
    checkbox!.initialValue = false;
    expect(checkbox?.value).toBe(false);
    expect(checkbox?.checked).toBe(false);
    expect(checkbox?.isDirty).toBe(false);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'value takes precedence',
    initialValue: false,
    value: true
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector<JBCheckboxWebComponent>('jb-checkbox');
    await waitFor(() => {
      expect(checkbox?.initialValue).toBe(false);
      expect(checkbox?.value).toBe(true);
      expect(checkbox?.checked).toBe(true);
      expect(checkbox?.isDirty).toBe(true);
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'explicit null value',
    initialValue: true,
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector<JBCheckboxWebComponent>('jb-checkbox');
    await waitFor(() => {
      expect(checkbox?.initialValue).toBe(true);
      expect(checkbox?.value).toBe(false);
      expect(checkbox?.checked).toBe(false);
      expect(checkbox?.isDirty).toBe(true);
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    message: 'message of checkbox'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required checkbox',
    message: 'please check and then uncheck the checkbox to see validation error',
    required: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled with true value',
    value: true,
    disabled: true,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      color: 'blue'
    }} slot="label">label in children</div>,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    error: 'error message passed from props'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <JBCheckboxTest {...args}></JBCheckboxTest>,
  args: {
    label: 'check box'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Normal`,`ImperativeMethods`,`CancelableEvents`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`WithMessage`,`Required`,`Disabled`,`DisabledTrue`,`ChildrenLabel`,`WithError`,`TestCheckbox`,`SizeVariants`]}));I();export{C as CancelableEvents,j as ChildrenLabel,k as Disabled,A as DisabledTrue,E as ExplicitNullValueDoesNotFallBackToInitialValue,S as ImperativeMethods,w as InitialValue,T as InitialValueDoesNotOverrideValue,x as Normal,O as Required,P as SizeVariants,N as TestCheckbox,M as WithError,D as WithMessage,F as __namedExportsOrder,b as default,I as n,p as t};