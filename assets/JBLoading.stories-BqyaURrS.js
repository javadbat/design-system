import{R as e,r as v}from"./index-DP23ewiS.js";import"./jb-loading-Bke36SbW.js";import"./index-DA-aheCX.js";let t=e.forwardRef((d,x)=>{let r=e.useRef(null);return v.useImperativeHandle(x,()=>r?r.current:{},[r]),e.createElement("jb-loading",{style:d.style,ref:r,class:d.className},d.children)});t.displayName="JBLoading";const B={title:"Components/JBLoading",component:t},a={args:{style:{width:"5rem",height:"5rem"}}},i={args:{style:{width:"5rem",height:"5rem","--jb-loading-color":"var(--jb-primary)"}}},s={render:()=>e.createElement("div",{className:"spin-loading-page"},e.createElement("div",{style:{width:"24px",height:"24px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"40px",height:"40px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"64px",height:"64px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"128px",height:"128px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"256px",height:"256px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"400px",height:"400px"}},e.createElement(t,null)))};var o,l,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem'
    }
  }
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem',
      "--jb-loading-color": "var(--jb-primary)"
    } as CSSProperties
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var c,g,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const J=["Normal","CustomColor","CustomSize"];export{i as CustomColor,s as CustomSize,a as Normal,J as __namedExportsOrder,B as default};
