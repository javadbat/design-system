import{r as g,R as t}from"./index-CwcVQgaJ.js";import{l as m}from"./JBSwitch-D94a0-F0.js";import"./jb-validation-AFHFNd1g.js";import"./index-BjRxPyWZ.js";import"./index-Bhe3Q7G8.js";import"./index-BVrqzDik.js";function x(e){const[l,i]=g.useState(!1);return t.createElement(m,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:l,onChange:c=>{i(c.target.value)}})}function O(e){const[l,i]=g.useState(!1),[c,T]=g.useState(!1);function R(u){const j=u.target.value;T(!0),setTimeout(()=>{i(j),T(!1)},1500)}return t.createElement(m,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:l,onChange:u=>{R(u)},isLoading:c})}const q={title:"Components/form elements/JBSwitch",component:m},a={args:{value:!1,trueTitle:"active",falseTitle:"deactivate",onChange:e=>{console.log(e)}}},r={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:"rtl"}}},n={render:e=>t.createElement(x,{...e}),args:{trueTitle:"active",falseTitle:"deactivate"}},s={render:e=>t.createElement(O,{...e}),args:{trueTitle:"active",falseTitle:"deactivate",value:!1,isLoading:!0,onChange:e=>{console.log(e)}}},o={render:e=>t.createElement("jb-switch",{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:"active",falseTitle:"deactivate",onChange:e=>{console.log(e)}}};var d,f,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  }
}`,...(p=(f=a.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var v,h,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,L,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var E,B,J;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <JBSwitchIsLoadingTest {...args}></JBSwitchIsLoadingTest>,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate',
    value: false,
    isLoading: true,
    onChange: e => {
      console.log(e);
    }
  }
}`,...(J=(B=s.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var b,A,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: (e: any) => {
      console.log(e);
    }
  }
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const z=["Normal","RTL","ActionTest","LoadingActionTest","WebComponent"];export{n as ActionTest,s as LoadingActionTest,a as Normal,r as RTL,o as WebComponent,z as __namedExportsOrder,q as default};
