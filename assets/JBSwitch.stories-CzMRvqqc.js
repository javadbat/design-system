import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-BlaOm9nc.js";import{n as a,t as o}from"./react-C27G8FvI.js";function s(e){let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(a,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{n(e.target.value)}})}var c,l,u=t((()=>{c=n(r(),1),o(),l=i(),s.__docgenInfo={description:``,methods:[],displayName:`JBSwitchTest`}}));function d(e){let[t,n]=(0,f.useState)(!1),[r,i]=(0,f.useState)(!1);function o(e){let t=e.target.value;i(!0),setTimeout(()=>{n(t),i(!1)},1500)}return(0,p.jsx)(a,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{o(e)},isLoading:r})}var f,p,m=t((()=>{f=n(r(),1),o(),p=i(),d.__docgenInfo={description:``,methods:[],displayName:`JBSwitchIsLoadingTest`}})),h=e({ActionTest:()=>b,LoadingActionTest:()=>x,Normal:()=>v,RTL:()=>y,WebComponent:()=>S,__namedExportsOrder:()=>C,default:()=>_}),g,_,v,y,b,x,S,C,w=t((()=>{r(),o(),u(),m(),g=i(),_={title:`Components/form elements/JBSwitch`,component:a},v={args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}}},y={args:{value:!1,trueTitle:`فعال`,falseTitle:`غیر فعال`,onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:`rtl`}}},b={render:e=>(0,g.jsx)(s,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`}},x={render:e=>(0,g.jsx)(d,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`,value:!1,isLoading:!0,onChange:e=>{console.log(e)}}},S={render:e=>(0,g.jsx)(`jb-switch`,{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: (e: any) => {
      console.log(e);
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Normal`,`RTL`,`ActionTest`,`LoadingActionTest`,`WebComponent`]}));w();export{b as ActionTest,x as LoadingActionTest,v as Normal,y as RTL,S as WebComponent,C as __namedExportsOrder,_ as default,w as n,h as t};