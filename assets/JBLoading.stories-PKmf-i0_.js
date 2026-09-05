import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-DRUIHCJR.js";import{r,t as i}from"./react-BhikzqGr.js";var a=e({ColorVariants:()=>_,CustomColor:()=>p,CustomSize:()=>h,CustomVariableColor:()=>m,LifecycleEvents:()=>f,Normal:()=>d,SizeVariants:()=>g,__namedExportsOrder:()=>v,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{i(),o=n(),{expect:s,fn:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/JBLoading`,component:r},d={args:{style:{width:`5rem`,height:`5rem`}}},f={args:{onLoad:c(),onInit:c(),style:{width:`5rem`,height:`5rem`}},play:async({args:e})=>{let t=e;await l(()=>{s(e.onLoad).toHaveBeenCalled(),s(t.onInit).toHaveBeenCalled()})}},p={args:{style:{width:`5rem`,height:`5rem`,color:`#ff0000`}}},m={args:{style:{width:`5rem`,height:`5rem`,"--jb-loading-color":`var(--jb-primary)`}}},h={render:()=>(0,o.jsxs)(`div`,{className:`spin-loading-page`,children:[(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{style:{width:`1.5rem`,height:`1.5rem`}})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{style:{width:`2.5rem`,height:`2.5rem`}})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{style:{width:`4rem`,height:`4rem`}})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{style:{width:`8rem`,height:`8rem`}})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{style:{width:`16rem`,height:`16rem`}})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{style:{width:`25rem`,height:`25rem`}})})]})},g={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,o.jsx)(r,{size:`xs`}),(0,o.jsx)(r,{size:`sm`}),(0,o.jsx)(r,{size:`md`}),(0,o.jsx)(r,{size:`lg`}),(0,o.jsx)(r,{size:`xl`})]})},_={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,o.jsx)(r,{color:`primary`}),(0,o.jsx)(r,{color:`secondary`}),(0,o.jsx)(r,{color:`neutral`}),(0,o.jsx)(r,{color:`content-inverse`}),(0,o.jsx)(r,{color:`content-primary`}),(0,o.jsx)(r,{color:`content-secondary`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      "color": "#ff0000"
    } as CSSProperties
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem',
      "--jb-loading-color": "var(--jb-primary)"
    } as CSSProperties
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="spin-loading-page">
      <div>
        <JBLoading style={{
          width: '1.5rem',
          height: '1.5rem'
        }}></JBLoading>
      </div>
      <div>
        <JBLoading style={{
          width: '2.5rem',
          height: '2.5rem'
        }}></JBLoading>
      </div>
      <div>
        <JBLoading style={{
          width: '4rem',
          height: '4rem'
        }}></JBLoading>
      </div>
      <div>
        <JBLoading style={{
          width: '8rem',
          height: '8rem'
        }}></JBLoading>
      </div>
      <div>
        <JBLoading style={{
          width: '16rem',
          height: '16rem'
        }}></JBLoading>
      </div>
      <div>
        <JBLoading style={{
          width: '25rem',
          height: '25rem'
        }}></JBLoading>
      </div>
    </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
      <JBLoading size="xs" />
      <JBLoading size="sm" />
      <JBLoading size="md" />
      <JBLoading size="lg" />
      <JBLoading size="xl" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
      <JBLoading color="primary" />
      <JBLoading color="secondary" />
      <JBLoading color="neutral" />
      <JBLoading color="content-inverse" />
      <JBLoading color="content-primary" />
      <JBLoading color="content-secondary" />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Normal`,`LifecycleEvents`,`CustomColor`,`CustomVariableColor`,`CustomSize`,`SizeVariants`,`ColorVariants`]}));y();export{_ as ColorVariants,p as CustomColor,h as CustomSize,m as CustomVariableColor,f as LifecycleEvents,d as Normal,g as SizeVariants,v as __namedExportsOrder,u as default,y as n,a as t};