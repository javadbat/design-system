import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{r as n,t as r}from"./react-D3SjPa4d.js";function i(e,t=0){let n=e.querySelectorAll(`jb-national-input`)[t];return s(n).toBeTruthy(),s(n.shadowRoot).toBeTruthy(),n}function a(e){let t=e.shadowRoot?.querySelector(`input`);return s(t).toBeTruthy(),t}function o(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var s,c=t((()=>{({expect:s}=__STORYBOOK_MODULE_TEST__)})),l=e({Normal:()=>m,__namedExportsOrder:()=>h,default:()=>p}),u,d,f,p,m,h,g=t((()=>{r(),c(),{expect:u,userEvent:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/form elements/Inputs/JBNationalInput`,component:n},m={args:{label:`national id`,message:`please enter your national code`},play:async({canvasElement:e,args:t})=>{let n=i(e),r=a(n);await d.type(r,`abc0012345679123`),await f(()=>{u(n.value).toBe(`0012345679`),u(n.displayValue).toBe(`0012345679`),u(r.value).toBe(`0012345679`),u(n.reportValidity()).toBe(!0),u(o(n)).toBe(t.message)}),r.focus(),await d.keyboard(`{Control>}a{/Control}{Backspace}`),await d.type(r,`0012345678`),await f(()=>{u(n.value).toBe(`0012345678`),u(n.reportValidity()).toBe(!1),u(o(n)).toBe(`The entered national code is invalid`),u(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await d.keyboard(`{Control>}a{/Control}{Backspace}`),await d.type(r,`۰۰۱۲۳۴۵۶۷۹`),await f(()=>{u(n.value).toBe(`0012345679`),u(n.displayValue).toBe(`۰۰۱۲۳۴۵۶۷۹`),u(n.reportValidity()).toBe(!0),u(n.hasState(`invalid`)).toBe(!1)})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'national id',
    message: "please enter your national code"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const nationalInput = getNationalInput(canvasElement);
    const nativeInput = getNativeInput(nationalInput);
    await userEvent.type(nativeInput, 'abc0012345679123');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.displayValue).toBe('0012345679');
      expect(nativeInput.value).toBe('0012345679');
      expect(nationalInput.reportValidity()).toBe(true);
      expect(getMessageText(nationalInput)).toBe(args.message);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '0012345678');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345678');
      expect(nationalInput.reportValidity()).toBe(false);
      expect(getMessageText(nationalInput)).toBe('The entered national code is invalid');
      expect(nationalInput.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '۰۰۱۲۳۴۵۶۷۹');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.displayValue).toBe('۰۰۱۲۳۴۵۶۷۹');
      expect(nationalInput.reportValidity()).toBe(true);
      expect(nationalInput.hasState('invalid')).toBe(false);
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Normal`]}));g();export{m as Normal,h as __namedExportsOrder,p as default,g as n,l as t};