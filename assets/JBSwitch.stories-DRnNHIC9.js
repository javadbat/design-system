import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-B93LnMfL.js";import{n as a,t as o}from"./react-DEIaQh2W.js";function s(e){let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(a,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{n(e.target.value)}})}var c,l,u=t((()=>{c=n(r(),1),o(),l=i(),s.__docgenInfo={description:``,methods:[],displayName:`JBSwitchTest`}}));function d(e){let[t,n]=(0,f.useState)(!1),[r,i]=(0,f.useState)(!1);function o(e){let t=e.target.value;i(!0),setTimeout(()=>{n(t),i(!1)},1500)}return(0,p.jsx)(a,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{o(e)},isLoading:r})}var f,p,m=t((()=>{f=n(r(),1),o(),p=i(),d.__docgenInfo={description:``,methods:[],displayName:`JBSwitchIsLoadingTest`}}));function h(e,t=0){let n=e.querySelectorAll(`jb-switch`)[t];return C(n).toBeTruthy(),C(n.shadowRoot).toBeTruthy(),n}function g(e){let t=e.shadowRoot?.querySelector(`.jb-switch-web-component`);return C(t).toBeTruthy(),t}function _(e){let t=e.shadowRoot?.querySelector(`.switch-svg`);return C(t).toBeTruthy(),t}function v(e){let t=e.shadowRoot?.querySelector(`.true-text`);return C(t).toBeTruthy(),t}function y(e){let t=e.shadowRoot?.querySelector(`.false-text`);return C(t).toBeTruthy(),t}function b(e){let t=e.shadowRoot?.querySelector(`.trigger-circle-bar`);return C(t).toBeTruthy(),t}async function x(e,t){await w(()=>{C(e.value).toBe(t),C(_(e).classList.contains(`--active`)).toBe(t),C(v(e).classList.contains(`--active`)).toBe(t),C(y(e).classList.contains(`--active`)).toBe(!t)})}async function S(e){let t=[],n=document.createElement(`jb-switch`);return n.setAttribute(`true-title`,`on`),n.setAttribute(`false-title`,`off`),n.setAttribute(`required`,``),n.addEventListener(`load`,()=>t.push(`load`)),n.addEventListener(`init`,()=>t.push(`init`)),n.addEventListener(`before-change`,()=>t.push(`before-change`)),n.addEventListener(`change`,()=>t.push(`change`)),e.appendChild(n),await w(()=>{C(t).toEqual(C.arrayContaining([`load`,`init`]))}),{switchElement:n,events:t}}var C,w,T=t((()=>{({expect:C,waitFor:w}=__STORYBOOK_MODULE_TEST__)})),E=e({ActionTest:()=>P,EventTest:()=>L,LoadingActionTest:()=>F,Normal:()=>M,RTL:()=>N,WebComponent:()=>I,__namedExportsOrder:()=>R,default:()=>j}),D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{r(),o(),u(),m(),T(),D=i(),{expect:O,userEvent:k,waitFor:A}=__STORYBOOK_MODULE_TEST__,j={title:`Components/form elements/JBSwitch`,component:a},M={args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}},play:async({canvasElement:e,args:t})=>{let n=h(e);await A(()=>{O(n.value).toBe(t.value),O(v(n).textContent).toBe(t.trueTitle),O(y(n).textContent).toBe(t.falseTitle)}),await k.click(g(n)),await x(n,!0)}},N={args:{value:!1,trueTitle:`فعال`,falseTitle:`غیر فعال`,onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e,args:t})=>{let n=h(e);await A(()=>{O(v(n).textContent).toBe(t.trueTitle),O(y(n).textContent).toBe(t.falseTitle)})}},P={render:e=>(0,D.jsx)(s,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`}},F={render:e=>(0,D.jsx)(d,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`,value:!1,isLoading:!0,onChange:e=>{console.log(e)}},play:async({canvasElement:e})=>{let t=h(e);await k.click(g(t)),await A(()=>{O(t.isLoading).toBe(!0),O(b(t).classList.contains(`--loading`)).toBe(!0)}),await A(()=>{O(t.value).toBe(!0),O(t.isLoading).toBe(!1),O(b(t).classList.contains(`--loading`)).toBe(!1)},{timeout:2500})}},I={render:e=>(0,D.jsx)(`jb-switch`,{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}},play:async({canvasElement:e,args:t})=>{let n=h(e);await A(()=>{O(n.value).toBe(!1),O(v(n).textContent).toBe(t.trueTitle),O(y(n).textContent).toBe(t.falseTitle)}),await k.click(g(n)),await x(n,!0)}},L={render:()=>(0,D.jsx)(a,{trueTitle:`active`,falseTitle:`deactivate`,required:!0}),play:async({canvasElement:e})=>{let{switchElement:t,events:n}=await S(e);O(t.reportValidity()).toBe(!1),await k.click(g(t)),await A(()=>{O(t.value).toBe(!0),O(t.reportValidity()).toBe(!0),O(n).toEqual(O.arrayContaining([`before-change`,`change`]))}),t.value=!1,t.addEventListener(`before-change`,e=>e.preventDefault(),{once:!0}),await k.click(g(t)),await A(()=>{O(t.value).toBe(!1)}),t.value=!1,t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await k.click(g(t)),await A(()=>{O(t.value).toBe(!1),O(_(t).classList.contains(`--active`)).toBe(!1)})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
      expect(getTriggerCircleBar(switchElement).classList.contains('--loading')).toBe(true);
    });
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.isLoading).toBe(false);
      expect(getTriggerCircleBar(switchElement).classList.contains('--loading')).toBe(false);
    }, {
      timeout: 2500
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: (e: any) => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Normal`,`RTL`,`ActionTest`,`LoadingActionTest`,`WebComponent`,`EventTest`]}));z();export{P as ActionTest,L as EventTest,F as LoadingActionTest,M as Normal,N as RTL,I as WebComponent,R as __namedExportsOrder,j as default,z as n,E as t};