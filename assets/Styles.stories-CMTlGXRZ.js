import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-DyWnM0Wh.js";import{r as i,t as a}from"./react-BMgD39it.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./terminal-T5SRCvL6.js";import{a as v,c as y,d as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./style-terminal-Cxfxcj9k.js";import{t as k}from"./style-forest-DQTh3WpY.js";var A=e({AntDesign:()=>Y,Aurora:()=>z,Bootstrap:()=>q,Candy:()=>U,Carbon:()=>R,Cupertino:()=>J,Default:()=>L,Fluent:()=>K,Forest:()=>B,Gallery:()=>I,Material:()=>G,Porcelain:()=>H,Sunset:()=>V,Terminal:()=>W,__namedExportsOrder:()=>X,default:()=>P});function j({children:e,slot:t}){return(0,N.jsx)(`span`,{slot:t,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,minWidth:`1.25rem`,fontSize:`0.75rem`,fontWeight:700,color:`var(--jb-primary, #2563eb)`},children:e})}function M({className:e}){return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,maxWidth:`100%`,width:`100%`},children:[(0,N.jsx)(i,{className:e,label:`Account name`,placeholder:`Company workspace`,message:`Shown with helper text`}),(0,N.jsxs)(i,{className:e,label:`Email`,value:`sara@example.com`,children:[(0,N.jsx)(j,{slot:`start-section`,children:`@`}),(0,N.jsx)(j,{slot:`end-section`,children:`OK`})]}),(0,N.jsx)(i,{className:e,label:`Validation error`,value:`bad`,error:`Static Error Under TextBox`}),(0,N.jsx)(i,{className:e,label:`Disabled`,value:`Locked value`,disabled:!0})]})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=t((()=>{n(),a(),l(),c(),_(),d(),s(),h(),p(),o(),u(),m(),f(),g(),b(),O(),S(),y(),E(),w(),v(),k(),x(),T(),C(),D(),N=r(),P={title:`Components/form elements/Inputs/JBInput/Style`,component:i},F=[{name:`Carbon`,className:`carbon-style`},{name:`Aurora`,className:`aurora-style`},{name:`Forest`,className:`forest-style`},{name:`Sunset`,className:`sunset-style`},{name:`Porcelain`,className:`porcelain-style`},{name:`Candy`,className:`candy-style`},{name:`Terminal`,className:`terminal-style`},{name:`Material`,className:`material-style`},{name:`Fluent`,className:`fluent-style`},{name:`Bootstrap`,className:`bootstrap-style`},{name:`Cupertino`,className:`cupertino-style`},{name:`Ant Design`,className:`ant-design-style`}],I={name:`Gallery`,render:()=>(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(18rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 76rem)`},children:F.map(e=>(0,N.jsxs)(`section`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},className:e.className.split(` `)[0],children:[(0,N.jsx)(`div`,{style:{width:`100%`,color:`var(--jb-text-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,N.jsx)(M,{className:e.className})]},e.className))})},L={name:`Default`,render:()=>(0,N.jsx)(M,{className:``})},R={name:`Carbon`,render:()=>(0,N.jsx)(M,{className:`carbon-style`})},z={name:`Aurora`,render:()=>(0,N.jsx)(M,{className:`aurora-style`})},B={name:`Forest`,render:()=>(0,N.jsx)(M,{className:`forest-style`})},V={name:`Sunset`,render:()=>(0,N.jsx)(M,{className:`sunset-style`})},H={name:`Porcelain`,render:()=>(0,N.jsx)(M,{className:`porcelain-style`})},U={name:`Candy`,render:()=>(0,N.jsx)(M,{className:`candy-style`})},W={name:`Terminal`,render:()=>(0,N.jsx)(M,{className:`terminal-style`})},G={name:`Material`,render:()=>(0,N.jsx)(M,{className:`material-style`})},K={name:`Fluent`,render:()=>(0,N.jsx)(M,{className:`fluent-style`})},q={name:`Bootstrap`,render:()=>(0,N.jsx)(M,{className:`bootstrap-style`})},J={name:`Cupertino`,render:()=>(0,N.jsx)(M,{className:`cupertino-style`})},Y={name:`Ant Design`,render:()=>(0,N.jsx)(M,{className:`ant-design-style`})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
          <InputStyleSample className={sample.className} />
        </section>)}
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <InputStyleSample className="" />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Carbon",
  render: () => <InputStyleSample className="carbon-style" />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Aurora",
  render: () => <InputStyleSample className="aurora-style" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Forest",
  render: () => <InputStyleSample className="forest-style" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Sunset",
  render: () => <InputStyleSample className="sunset-style" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Porcelain",
  render: () => <InputStyleSample className="porcelain-style" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Candy",
  render: () => <InputStyleSample className="candy-style" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Terminal",
  render: () => <InputStyleSample className="terminal-style" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Material",
  render: () => <InputStyleSample className="material-style" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Fluent",
  render: () => <InputStyleSample className="fluent-style" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Bootstrap",
  render: () => <InputStyleSample className="bootstrap-style" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Cupertino",
  render: () => <InputStyleSample className="cupertino-style" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <InputStyleSample className="ant-design-style" />
}`,...Y.parameters?.docs?.source}}},X=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{R as a,B as c,H as d,A as f,Z as h,U as i,I as l,W as m,z as n,J as o,V as p,q as r,K as s,Y as t,G as u};