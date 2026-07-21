import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-D_Yaz38j.js";import{r,t as i}from"./react-BHXKgqFV.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./terminal-T5SRCvL6.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./style-terminal-Cxfxcj9k.js";import{t as O}from"./style-forest-DQTh3WpY.js";import{n as k,t as A}from"./react-CayoK0tf.js";var j=e({AntDesign:()=>Y,Aurora:()=>z,Bootstrap:()=>q,Candy:()=>U,Carbon:()=>R,Cupertino:()=>J,Default:()=>L,Fluent:()=>K,Forest:()=>B,Gallery:()=>I,Material:()=>G,Porcelain:()=>H,Sunset:()=>V,Terminal:()=>W,__namedExportsOrder:()=>X,default:()=>P});function M({className:e}){return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,maxWidth:`100%`,width:`100%`},children:[(0,N.jsx)(r,{className:e,label:`Card number`,value:`6037991234567890`,message:`Detected bank card`,inputType:`CARD`,children:(0,N.jsx)(k,{slot:`end-section`,prefix:`603799`})}),(0,N.jsx)(r,{className:e,label:`IBAN / Shaba`,value:`IR120000000000000000000000`,inputType:`SHABA`}),(0,N.jsx)(r,{className:e,label:`Validation error`,value:`603799123456789`,error:`Enter all 16 digits of the card number`,inputType:`CARD`}),(0,N.jsx)(r,{className:e,label:`Disabled card`,value:`6037991234567890`,inputType:`CARD`,disabled:!0})]})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=t((()=>{A(),i(),c(),s(),g(),u(),o(),m(),f(),a(),l(),p(),d(),h(),y(),D(),x(),v(),T(),C(),_(),O(),b(),w(),S(),E(),N=n(),P={title:`Components/form elements/Inputs/JBPaymentInput/Style`,component:r},F=[{name:`Carbon`,className:`carbon-style`},{name:`Aurora`,className:`aurora-style`},{name:`Forest`,className:`forest-style`},{name:`Sunset`,className:`sunset-style`},{name:`Porcelain`,className:`porcelain-style`},{name:`Candy`,className:`candy-style`},{name:`Terminal`,className:`terminal-style`},{name:`Material`,className:`material-style`},{name:`Fluent`,className:`fluent-style`},{name:`Bootstrap`,className:`bootstrap-style`},{name:`Cupertino`,className:`cupertino-style`},{name:`Ant Design`,className:`ant-design-style`}],I={name:`Gallery`,render:()=>(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(21rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 82rem)`},children:F.map(e=>(0,N.jsxs)(`section`,{className:e.className,style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},children:[(0,N.jsx)(`div`,{style:{width:`100%`,color:`var(--jb-text-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,N.jsx)(M,{className:e.className})]},e.className))})},L={name:`Default`,render:()=>(0,N.jsx)(M,{className:``})},R={name:`Carbon`,render:()=>(0,N.jsx)(M,{className:`carbon-style`})},z={name:`Aurora`,render:()=>(0,N.jsx)(M,{className:`aurora-style`})},B={name:`Forest`,render:()=>(0,N.jsx)(M,{className:`forest-style`})},V={name:`Sunset`,render:()=>(0,N.jsx)(M,{className:`sunset-style`})},H={name:`Porcelain`,render:()=>(0,N.jsx)(M,{className:`porcelain-style`})},U={name:`Candy`,render:()=>(0,N.jsx)(M,{className:`candy-style`})},W={name:`Terminal`,render:()=>(0,N.jsx)(M,{className:`terminal-style`})},G={name:`Material`,render:()=>(0,N.jsx)(M,{className:`material-style`})},K={name:`Fluent`,render:()=>(0,N.jsx)(M,{className:`fluent-style`})},q={name:`Bootstrap`,render:()=>(0,N.jsx)(M,{className:`bootstrap-style`})},J={name:`Cupertino`,render:()=>(0,N.jsx)(M,{className:`cupertino-style`})},Y={name:`Ant Design`,render:()=>(0,N.jsx)(M,{className:`ant-design-style`})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(21rem, 1fr))",
    gap: "1.25rem",
    alignItems: "start",
    width: "min(100%, 82rem)"
  }}>
      {styleSamples.map(sample => <section key={sample.className} className={sample.className} style={{
      display: "grid",
      gap: "0.75rem",
      minWidth: 0,
      padding: "1rem",
      background: "var(--jb-surface, #ffffff)",
      border: "1px solid var(--jb-border-color, #e5e7eb)",
      borderRadius: "0.75rem",
      boxShadow: "0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)"
    }}>
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
          <PaymentInputStyleSample className={sample.className} />
        </section>)}
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <PaymentInputStyleSample className="" />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Carbon",
  render: () => <PaymentInputStyleSample className="carbon-style" />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Aurora",
  render: () => <PaymentInputStyleSample className="aurora-style" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Forest",
  render: () => <PaymentInputStyleSample className="forest-style" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Sunset",
  render: () => <PaymentInputStyleSample className="sunset-style" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Porcelain",
  render: () => <PaymentInputStyleSample className="porcelain-style" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Candy",
  render: () => <PaymentInputStyleSample className="candy-style" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Terminal",
  render: () => <PaymentInputStyleSample className="terminal-style" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Material",
  render: () => <PaymentInputStyleSample className="material-style" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Fluent",
  render: () => <PaymentInputStyleSample className="fluent-style" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Bootstrap",
  render: () => <PaymentInputStyleSample className="bootstrap-style" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Cupertino",
  render: () => <PaymentInputStyleSample className="cupertino-style" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <PaymentInputStyleSample className="ant-design-style" />
}`,...Y.parameters?.docs?.source}}},X=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{Z as n,j as t};