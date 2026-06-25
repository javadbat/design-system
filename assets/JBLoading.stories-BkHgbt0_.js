import{R as e,r as w}from"./index-D4lIrffr.js";import"./jb-loading-BmlEKkU_.js";let t=e.forwardRef((u,x)=>{let o=e.useRef(null);w.useImperativeHandle(x,()=>o?o.current:{},[o]);let{children:v,...y}=u;return e.createElement("jb-loading",{ref:o,...y},v)});t.displayName="JBLoading";const E={title:"Components/JBLoading",component:t},r={args:{style:{width:"5rem",height:"5rem"}}},a={args:{style:{width:"5rem",height:"5rem","--jb-loading-color":"var(--jb-primary)"}}},i={render:()=>e.createElement("div",{className:"spin-loading-page"},e.createElement("div",{style:{width:"24px",height:"24px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"40px",height:"40px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"64px",height:"64px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"128px",height:"128px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"256px",height:"256px"}},e.createElement(t,null)),e.createElement("div",{style:{width:"400px",height:"400px"}},e.createElement(t,null)))};var d,s,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem'
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    style: {
      width: '5rem',
      height: '5rem',
      "--jb-loading-color": "var(--jb-primary)"
    } as CSSProperties
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,h,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const L=["Normal","CustomColor","CustomSize"],S=Object.freeze(Object.defineProperty({__proto__:null,CustomColor:a,CustomSize:i,Normal:r,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{i as C,S as L,r as N};
