import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-BJZP98JJ.js";import{r as a,t as o}from"./react-ExXeb3oT.js";import{n as s,t as c}from"./react-DnqOZo9t.js";function l(e){let[t,n]=(0,u.useState)(!1);return(0,d.jsx)(s,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{n(e.target.value)}})}var u,d,f=t((()=>{u=n(r(),1),c(),d=i(),l.__docgenInfo={description:``,methods:[],displayName:`JBSwitchTest`}}));function p(e){let[t,n]=(0,m.useState)(!1),[r,i]=(0,m.useState)(!1);function a(e){let t=e.target.value;i(!0),setTimeout(()=>{n(t),i(!1)},1500)}return(0,h.jsx)(s,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{a(e)},isLoading:r})}var m,h,g=t((()=>{m=n(r(),1),c(),h=i(),p.__docgenInfo={description:``,methods:[],displayName:`JBSwitchIsLoadingTest`}}));function _(e,t=0){let n=e.querySelectorAll(`jb-switch`)[t];return T(n).toBeTruthy(),T(n.shadowRoot).toBeTruthy(),n}function v(e){let t=e.shadowRoot?.querySelector(`.jb-switch-web-component`);return T(t).toBeTruthy(),t}function y(e){let t=e.shadowRoot?.querySelector(`.switch-svg`);return T(t).toBeTruthy(),t}function b(e){let t=e.shadowRoot?.querySelector(`.true-text`);return T(t).toBeTruthy(),t}function x(e){let t=e.shadowRoot?.querySelector(`.false-text`);return T(t).toBeTruthy(),t}function S(e){let t=e.shadowRoot?.querySelector(`.trigger-circle-bar`);return T(t).toBeTruthy(),t}async function C(e,t){await E(()=>{T(e.value).toBe(t),T(y(e).classList.contains(`--active`)).toBe(t),T(b(e).classList.contains(`--active`)).toBe(t),T(x(e).classList.contains(`--active`)).toBe(!t)})}async function w(e){let t=[],n=document.createElement(`jb-switch`);return n.setAttribute(`true-title`,`on`),n.setAttribute(`false-title`,`off`),n.setAttribute(`required`,``),n.addEventListener(`load`,()=>t.push(`load`)),n.addEventListener(`init`,()=>t.push(`init`)),n.addEventListener(`before-change`,()=>t.push(`before-change`)),n.addEventListener(`change`,()=>t.push(`change`)),e.appendChild(n),await E(()=>{T(t).toEqual(T.arrayContaining([`load`,`init`]))}),{switchElement:n,events:t}}var T,E,D=t((()=>{({expect:T,waitFor:E}=__STORYBOOK_MODULE_TEST__)})),O=e({ActionTest:()=>B,EventTest:()=>U,ExplicitNullValueDoesNotFallBackToInitialValue:()=>R,InitialValue:()=>I,InitialValueDoesNotOverrideValue:()=>L,LoadingActionTest:()=>V,Normal:()=>F,RTL:()=>z,WebComponent:()=>H,__namedExportsOrder:()=>W,default:()=>P}),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{k=n(r(),1),c(),o(),f(),g(),D(),A=i(),{expect:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/form elements/JBSwitch`,component:s},F={args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}},play:async({canvasElement:e,args:t})=>{let n=_(e);await N(()=>{j(n.value).toBe(t.value),j(b(n).textContent).toBe(t.trueTitle),j(x(n).textContent).toBe(t.falseTitle)}),await M.click(v(n)),await C(n,!0)}},I={render:e=>{let t=k.useRef(null);return(0,A.jsxs)(`form`,{ref:t,children:[(0,A.jsx)(s,{...e}),(0,A.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{initialValue:!0,trueTitle:`active`,falseTitle:`deactivate`},play:async({canvasElement:e})=>{let t=_(e),n=v(t),r=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);j(r).toBeTruthy(),await N(()=>{j(t.initialValue).toBe(!0),j(t.value).toBe(!0),j(t.isDirty).toBe(!1),j(y(t).classList.contains(`--active`)).toBe(!0)}),t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await M.click(n),await N(()=>{j(t.value).toBe(!0),j(t.isDirty).toBe(!1)}),t.initialValue=!1,await N(()=>{j(t.value).toBe(!1),j(t.isDirty).toBe(!1)}),t.initialValue=!0,await M.click(n),await N(()=>{j(t.value).toBe(!1),j(t.isDirty).toBe(!0)}),t.initialValue=!0,j(t.value).toBe(!1),j(t.isDirty).toBe(!0),await M.click(r),await N(()=>{j(t.value).toBe(!0),j(t.initialValue).toBe(t.value),j(t.isDirty).toBe(!1)}),t.initialValue=!1,await N(()=>{j(t.value).toBe(!1),j(t.isDirty).toBe(!1),j(y(t).classList.contains(`--active`)).toBe(!1)})}},L={args:{initialValue:!1,value:!0,trueTitle:`active`,falseTitle:`deactivate`},play:async({canvasElement:e})=>{let t=_(e);await N(()=>{j(t.initialValue).toBe(!1),j(t.value).toBe(!0),j(t.isDirty).toBe(!0),j(y(t).classList.contains(`--active`)).toBe(!0)})}},R={args:{initialValue:!0,value:null,trueTitle:`active`,falseTitle:`deactivate`},play:async({canvasElement:e})=>{let t=_(e);await N(()=>{j(t.initialValue).toBe(!0),j(t.value).toBe(!1),j(t.isDirty).toBe(!0),j(y(t).classList.contains(`--active`)).toBe(!1)})}},z={args:{value:!1,trueTitle:`فعال`,falseTitle:`غیر فعال`,onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e,args:t})=>{let n=_(e);await N(()=>{j(b(n).textContent).toBe(t.trueTitle),j(x(n).textContent).toBe(t.falseTitle)})}},B={render:e=>(0,A.jsx)(l,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`}},V={render:e=>(0,A.jsx)(p,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`,value:!1,isLoading:!0,onChange:e=>{console.log(e)}},play:async({canvasElement:e})=>{let t=_(e);await M.click(v(t)),await N(()=>{j(t.isLoading).toBe(!0),j(t.hasAttribute(`is-loading`)).toBe(!0),j(S(t).classList.contains(`--loading`)).toBe(!0)}),await N(()=>{j(t.value).toBe(!0),j(t.isLoading).toBe(!1),j(t.hasAttribute(`is-loading`)).toBe(!1),j(S(t).classList.contains(`--loading`)).toBe(!1)},{timeout:2500})}},H={render:e=>(0,A.jsx)(`jb-switch`,{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}},play:async({canvasElement:e,args:t})=>{let n=_(e);await N(()=>{j(n.value).toBe(!1),j(b(n).textContent).toBe(t.trueTitle),j(x(n).textContent).toBe(t.falseTitle)}),await M.click(v(n)),await C(n,!0)}},U={render:()=>(0,A.jsx)(s,{trueTitle:`active`,falseTitle:`deactivate`,required:!0}),play:async({canvasElement:e})=>{let{switchElement:t,events:n}=await w(e);j(t.reportValidity()).toBe(!1),await M.click(v(t)),await N(()=>{j(t.value).toBe(!0),j(t.reportValidity()).toBe(!0),j(n).toEqual(j.arrayContaining([`before-change`,`change`]))}),t.value=!1,t.addEventListener(`before-change`,e=>e.preventDefault(),{once:!0}),await M.click(v(t)),await N(()=>{j(t.value).toBe(!1)}),t.value=!1,t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await M.click(v(t)),await N(()=>{j(t.value).toBe(!1),j(y(t).classList.contains(`--active`)).toBe(!1)})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(switchElement.value).toBe(args.value);
      expect(getTrueText(switchElement).textContent).toBe(args.trueTitle);
      expect(getFalseText(switchElement).textContent).toBe(args.falseTitle);
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitForSwitchValue(switchElement, true);
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = React.useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBSwitch {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    initialValue: true,
    trueTitle: 'active',
    falseTitle: 'deactivate'
  },
  play: async ({
    canvasElement
  }) => {
    const switchElement = getSwitch(canvasElement);
    const wrapper = getSwitchWrapper(switchElement);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(switchElement.initialValue).toBe(true);
      expect(switchElement.value).toBe(true);
      expect(switchElement.isDirty).toBe(false);
      expect(getSwitchSvg(switchElement).classList.contains('--active')).toBe(true);
    });

    // A canceled change must restore the assignment latch as well as value.
    switchElement.addEventListener('change', event => event.preventDefault(), {
      once: true
    });
    await userEvent.click(wrapper);
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.isDirty).toBe(false);
    });
    switchElement.initialValue = false;
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(switchElement.isDirty).toBe(false);
    });
    switchElement.initialValue = true;
    await userEvent.click(wrapper);
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(switchElement.isDirty).toBe(true);
    });
    switchElement.initialValue = true;
    expect(switchElement.value).toBe(false);
    expect(switchElement.isDirty).toBe(true);
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.initialValue).toBe(switchElement.value);
      expect(switchElement.isDirty).toBe(false);
    });
    switchElement.initialValue = false;
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(switchElement.isDirty).toBe(false);
      expect(getSwitchSvg(switchElement).classList.contains('--active')).toBe(false);
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: false,
    value: true,
    trueTitle: 'active',
    falseTitle: 'deactivate'
  },
  play: async ({
    canvasElement
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(switchElement.initialValue).toBe(false);
      expect(switchElement.value).toBe(true);
      expect(switchElement.isDirty).toBe(true);
      expect(getSwitchSvg(switchElement).classList.contains('--active')).toBe(true);
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: true,
    value: null,
    trueTitle: 'active',
    falseTitle: 'deactivate'
  },
  play: async ({
    canvasElement
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(switchElement.initialValue).toBe(true);
      expect(switchElement.value).toBe(false);
      expect(switchElement.isDirty).toBe(true);
      expect(getSwitchSvg(switchElement).classList.contains('--active')).toBe(false);
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
    }
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(getTrueText(switchElement).textContent).toBe(args.trueTitle);
      expect(getFalseText(switchElement).textContent).toBe(args.falseTitle);
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <JBSwitchIsLoadingTest {...args}></JBSwitchIsLoadingTest>,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate',
    value: false,
    isLoading: true,
    onChange: e => {
      console.log(e);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const switchElement = getSwitch(canvasElement);
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.isLoading).toBe(true);
      expect(switchElement.hasAttribute('is-loading')).toBe(true);
      expect(getTriggerCircleBar(switchElement).classList.contains('--loading')).toBe(true);
    });
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.isLoading).toBe(false);
      expect(switchElement.hasAttribute('is-loading')).toBe(false);
      expect(getTriggerCircleBar(switchElement).classList.contains('--loading')).toBe(false);
    }, {
      timeout: 2500
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(getTrueText(switchElement).textContent).toBe(args.trueTitle);
      expect(getFalseText(switchElement).textContent).toBe(args.falseTitle);
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitForSwitchValue(switchElement, true);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <JBSwitch trueTitle="active" falseTitle="deactivate" required />,
  play: async ({
    canvasElement
  }) => {
    const {
      switchElement,
      events
    } = await appendEventSwitch(canvasElement);
    expect(switchElement.reportValidity()).toBe(false);
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.reportValidity()).toBe(true);
      expect(events).toEqual(expect.arrayContaining(['before-change', 'change']));
    });
    switchElement.value = false;
    switchElement.addEventListener('before-change', event => event.preventDefault(), {
      once: true
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
    });
    switchElement.value = false;
    switchElement.addEventListener('change', event => event.preventDefault(), {
      once: true
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(getSwitchSvg(switchElement).classList.contains('--active')).toBe(false);
    });
  }
}`,...U.parameters?.docs?.source}}},W=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`RTL`,`ActionTest`,`LoadingActionTest`,`WebComponent`,`EventTest`]}));G();export{B as ActionTest,U as EventTest,R as ExplicitNullValueDoesNotFallBackToInitialValue,I as InitialValue,L as InitialValueDoesNotOverrideValue,V as LoadingActionTest,F as Normal,z as RTL,H as WebComponent,W as __namedExportsOrder,P as default,G as n,O as t};