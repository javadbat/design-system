import{r as g,R as o}from"./index-D4lIrffr.js";import{a as m}from"./JBSwitch-B-6ZvQYe.js";function y(e){const[l,i]=g.useState(!1);return o.createElement(m,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:l,onChange:c=>{i(c.target.value)}})}function I(e){const[l,i]=g.useState(!1),[c,d]=g.useState(!1);function A(u){const O=u.target.value;d(!0),setTimeout(()=>{i(O),d(!1)},1500)}return o.createElement(m,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:l,onChange:u=>{A(u)},isLoading:c})}const R={title:"Components/form elements/JBSwitch",component:m},t={args:{value:!1,trueTitle:"active",falseTitle:"deactivate",onChange:e=>{console.log(e)}}},a={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:"rtl"}}},r={render:e=>o.createElement(y,{...e}),args:{trueTitle:"active",falseTitle:"deactivate"}},n={render:e=>o.createElement(I,{...e}),args:{trueTitle:"active",falseTitle:"deactivate",value:!1,isLoading:!0,onChange:e=>{console.log(e)}}},s={render:e=>o.createElement("jb-switch",{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:"active",falseTitle:"deactivate",onChange:e=>{console.log(e)}}};var T,f,p;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  }
}`,...(p=(f=t.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var v,h,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,L,w;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...(w=(L=r.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var b,E,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(E=n.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var J,_,j;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: (e: any) => {
      console.log(e);
    }
  }
}`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const x=["Normal","RTL","ActionTest","LoadingActionTest","WebComponent"],W=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:r,LoadingActionTest:n,Normal:t,RTL:a,WebComponent:s,__namedExportsOrder:x,default:R},Symbol.toStringTag,{value:"Module"}));export{r as A,n as L,W as S};
