import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-CJEKjAwU.js";import{n as a,t as o}from"./react-BRaJSH6O.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./terminal-C9Ys-05M.js";var y=t((()=>{})),b=t((()=>{})),x=t((()=>{})),S=t((()=>{})),C=t((()=>{})),w=t((()=>{})),T=t((()=>{})),E=t((()=>{})),D=t((()=>{})),O=t((()=>{})),k=t((()=>{})),A=t((()=>{})),j=e({AntDesign:()=>Z,Aurora:()=>V,Bootstrap:()=>Y,Candy:()=>G,Carbon:()=>B,Cupertino:()=>X,Default:()=>z,Fluent:()=>J,Forest:()=>H,Gallery:()=>R,Material:()=>q,Porcelain:()=>W,Sunset:()=>U,Terminal:()=>K,__namedExportsOrder:()=>Q,default:()=>I});function M(e,t,n){let r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
    <rect width="320" height="220" fill="${n}"/>
    <circle cx="84" cy="70" r="34" fill="${t}" opacity="0.9"/>
    <path d="M0 180 L86 104 L144 154 L204 88 L320 188 L320 220 L0 220 Z" fill="${t}" opacity="0.72"/>
    <path d="M170 124 L220 82 L320 170 L320 220 L130 220 Z" fill="#ffffff" opacity="0.34"/>
  </svg>`;return new File([r],e,{type:`image/svg+xml`})}function N({className:e}){let t=(0,P.useMemo)(()=>M(`gallery-preview.svg`,`#ffffff`,`#2563eb`),[]);return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:`0.75rem`,width:`100%`},children:[(0,F.jsx)(a,{className:e,label:`Select image`,message:`PNG, JPG, or SVG`}),(0,F.jsx)(a,{className:e,label:`Selected image`,file:t}),(0,F.jsx)(a,{className:e,label:`Disabled image`,message:`Read only`,disabled:!0})]})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{P=n(r(),1),o(),u(),l(),v(),f(),c(),g(),m(),s(),d(),h(),p(),_(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),A(),F=i(),I={title:`Components/form elements/JBImageInput/Style`,component:a},L=[{name:`Carbon`,className:`carbon-style carbon-image-input`},{name:`Aurora`,className:`aurora-style aurora-image-input`},{name:`Forest`,className:`forest-style forest-image-input`},{name:`Sunset`,className:`sunset-style sunset-image-input`},{name:`Porcelain`,className:`porcelain-style porcelain-image-input`},{name:`Candy`,className:`candy-style candy-image-input`},{name:`Terminal`,className:`terminal-style terminal-image-input`},{name:`Material`,className:`material-style material-image-input`},{name:`Fluent`,className:`fluent-style fluent-image-input`},{name:`Bootstrap`,className:`bootstrap-style bootstrap-image-input`},{name:`Cupertino`,className:`cupertino-style cupertino-image-input`},{name:`Ant Design`,className:`ant-design-style ant-image-input`}],R={name:`Gallery`,render:()=>(0,F.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(18rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 76rem)`},children:L.map(e=>(0,F.jsxs)(`section`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},className:e.className.split(` `)[0],children:[(0,F.jsx)(`div`,{style:{width:`100%`,color:`var(--jb-text-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,F.jsx)(N,{className:e.className})]},e.className))})},z={name:`Default`,render:()=>(0,F.jsx)(N,{className:``})},B={name:`Carbon`,render:()=>(0,F.jsx)(N,{className:`carbon-style carbon-image-input`})},V={name:`Aurora`,render:()=>(0,F.jsx)(N,{className:`aurora-style aurora-image-input`})},H={name:`Forest`,render:()=>(0,F.jsx)(N,{className:`forest-style forest-image-input`})},U={name:`Sunset`,render:()=>(0,F.jsx)(N,{className:`sunset-style sunset-image-input`})},W={name:`Porcelain`,render:()=>(0,F.jsx)(N,{className:`porcelain-style porcelain-image-input`})},G={name:`Candy`,render:()=>(0,F.jsx)(N,{className:`candy-style candy-image-input`})},K={name:`Terminal`,render:()=>(0,F.jsx)(N,{className:`terminal-style terminal-image-input`})},q={name:`Material`,render:()=>(0,F.jsx)(N,{className:`material-style material-image-input`})},J={name:`Fluent`,render:()=>(0,F.jsx)(N,{className:`fluent-style fluent-image-input`})},Y={name:`Bootstrap`,render:()=>(0,F.jsx)(N,{className:`bootstrap-style bootstrap-image-input`})},X={name:`Cupertino`,render:()=>(0,F.jsx)(N,{className:`cupertino-style cupertino-image-input`})},Z={name:`Ant Design`,render:()=>(0,F.jsx)(N,{className:`ant-design-style ant-image-input`})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "1.25rem",
    alignItems: "start",
    width: "min(100%, 76rem)"
  }}>
      {styleSamples.map(sample => <section key={sample.className} style={{
      display: "grid",
      gap: "0.75rem",
      minWidth: 0,
      padding: "1rem",
      background: "var(--jb-surface, #ffffff)",
      border: "1px solid var(--jb-border-color, #e5e7eb)",
      borderRadius: "0.75rem",
      boxShadow: "0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)"
    }} className={sample.className.split(" ")[0]}>
          <div style={{
        width: "100%",
        color: "var(--jb-text-primary, #334155)",
        fontSize: "0.875rem",
        fontWeight: 700,
        lineHeight: 1.4,
        textAlign: "center"
      }}>
            {sample.name}
          </div>
          <ImageInputStyleSample className={sample.className} />
        </section>)}
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <ImageInputStyleSample className="" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Carbon",
  render: () => <ImageInputStyleSample className="carbon-style carbon-image-input" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Aurora",
  render: () => <ImageInputStyleSample className="aurora-style aurora-image-input" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Forest",
  render: () => <ImageInputStyleSample className="forest-style forest-image-input" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Sunset",
  render: () => <ImageInputStyleSample className="sunset-style sunset-image-input" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Porcelain",
  render: () => <ImageInputStyleSample className="porcelain-style porcelain-image-input" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Candy",
  render: () => <ImageInputStyleSample className="candy-style candy-image-input" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Terminal",
  render: () => <ImageInputStyleSample className="terminal-style terminal-image-input" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Material",
  render: () => <ImageInputStyleSample className="material-style material-image-input" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Fluent",
  render: () => <ImageInputStyleSample className="fluent-style fluent-image-input" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Bootstrap",
  render: () => <ImageInputStyleSample className="bootstrap-style bootstrap-image-input" />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Cupertino",
  render: () => <ImageInputStyleSample className="cupertino-style cupertino-image-input" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <ImageInputStyleSample className="ant-design-style ant-image-input" />
}`,...Z.parameters?.docs?.source}}},Q=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{B as a,H as c,W as d,j as f,$ as h,G as i,R as l,K as m,V as n,X as o,U as p,Y as r,J as s,Z as t,q as u};