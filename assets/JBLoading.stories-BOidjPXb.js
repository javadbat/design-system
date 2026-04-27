import{R as e,r as w}from"./index-CwcVQgaJ.js";import"./jb-loading-BuRiKsux.js";import"./index-BjRxPyWZ.js";let t=e.forwardRef((u,x)=>{let r=e.useRef(null);w.useImperativeHandle(x,()=>r?r.current:{},[r]);let{children:v,...y}=u;return e.createElement("jb-loading",{ref:r,...y},v)});t.displayName="JBLoading";const L={title:"Components/JBLoading",component:t},i={args:{style:{width:"5rem",height:"5rem"}}},a={args:{style:{width:"5rem",height:"5rem","--jb-loading-color":"var(--jb-primary)"}}},d={render:()=>e.createElement("div",{className:"spin-loading-page"},e.createElement("div",{style:{width:"24px",height:"24px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"40px",height:"40px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"64px",height:"64px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"128px",height:"128px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"256px",height:"256px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"400px",height:"400px"}},e.createElement(t,null)))};var o,s,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem'
    }
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem',
      "--jb-loading-color": "var(--jb-primary)"
    } as CSSProperties
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,c,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div className="spin-loading-page">
      <div style={{
        width: '24px',
        height: '24px'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '40px',
        height: '40px'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '64px',
        height: '64px'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '128px',
        height: '128px'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '256px',
        height: '256px'
      }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{
        width: '400px',
        height: '400px'
      }}>
        <JBLoading></JBLoading>
      </div>
    </div>;
  }
}`,...(g=(c=d.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const C=["Normal","CustomColor","CustomSize"];export{a as CustomColor,d as CustomSize,i as Normal,C as __namedExportsOrder,L as default};
