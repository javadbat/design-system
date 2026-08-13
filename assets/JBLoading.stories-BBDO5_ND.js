import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-Cke0LeCu.js";import{r,t as i}from"./react-MYyVLq9c2.js";var a=e({CustomColor:()=>p,CustomSize:()=>m,LifecycleEvents:()=>f,Normal:()=>d,__namedExportsOrder:()=>h,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g=t((()=>{i(),o=n(),{expect:s,fn:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/JBLoading`,component:r},d={args:{style:{width:`5rem`,height:`5rem`}}},f={args:{onLoad:c(),onInit:c(),style:{width:`5rem`,height:`5rem`}},play:async({args:e})=>{let t=e;await l(()=>{s(e.onLoad).toHaveBeenCalled(),s(t.onInit).toHaveBeenCalled()})}},p={args:{style:{width:`5rem`,height:`5rem`,"--jb-loading-color":`var(--jb-primary)`}}},m={render:()=>(0,o.jsxs)(`div`,{className:`spin-loading-page`,children:[(0,o.jsx)(`div`,{style:{width:`1.5rem`,height:`1.5rem`},children:(0,o.jsx)(r,{})}),(0,o.jsx)(`div`,{style:{width:`2.5rem`,height:`2.5rem`},children:(0,o.jsx)(r,{})}),(0,o.jsx)(`div`,{style:{width:`4rem`,height:`4rem`},children:(0,o.jsx)(r,{})}),(0,o.jsx)(`div`,{style:{width:`8rem`,height:`8rem`},children:(0,o.jsx)(r,{})}),(0,o.jsx)(`div`,{style:{width:`16rem`,height:`16rem`},children:(0,o.jsx)(r,{})}),(0,o.jsx)(`div`,{style:{width:`25rem`,height:`25rem`},children:(0,o.jsx)(r,{})})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem'
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onLoad: fn(),
    onInit: fn(),
    style: {
      width: '5rem',
      height: '5rem'
    }
  } as unknown as Story['args'],
  play: async ({
    args
  }) => {
    const lifecycleArgs = args as unknown as {
      onInit: ReturnType<typeof fn>;
    };
    await waitFor(() => {
      expect(args.onLoad).toHaveBeenCalled();
      expect(lifecycleArgs.onInit).toHaveBeenCalled();
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem',
      "--jb-loading-color": "var(--jb-primary)"
    } as CSSProperties
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="spin-loading-page">
      <div style={{
        width: '1.5rem',
        height: '1.5rem'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '2.5rem',
        height: '2.5rem'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '4rem',
        height: '4rem'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '8rem',
        height: '8rem'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '16rem',
        height: '16rem'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '25rem',
        height: '25rem'
      }}>
        <JBLoading></JBLoading>
      </div>
    </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Normal`,`LifecycleEvents`,`CustomColor`,`CustomSize`]}));g();export{p as CustomColor,m as CustomSize,f as LifecycleEvents,d as Normal,h as __namedExportsOrder,u as default,g as n,a as t};