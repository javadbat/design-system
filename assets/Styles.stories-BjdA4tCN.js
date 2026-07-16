import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-CJEKjAwU.js";import{n as a,t as o}from"./react-CRcPDkRI.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./terminal-C9Ys-05M.js";var y=t((()=>{})),b=t((()=>{})),x=t((()=>{})),S=t((()=>{})),C=t((()=>{})),w=t((()=>{})),T=t((()=>{})),E=t((()=>{})),D=t((()=>{})),O=t((()=>{})),k=t((()=>{})),A=t((()=>{})),j=e({AntDesign:()=>Q,Aurora:()=>H,Bootstrap:()=>X,Candy:()=>K,Carbon:()=>V,Cupertino:()=>Z,Default:()=>B,Fluent:()=>Y,Forest:()=>U,Gallery:()=>z,Material:()=>J,Porcelain:()=>G,Sunset:()=>W,Terminal:()=>q,__namedExportsOrder:()=>$,default:()=>L});function M({className:e,...t}){return(0,I.jsx)(a,{className:e,...t})}function N({className:e}){return(0,I.jsx)(a,{ref:(0,F.useRef)(null),className:e,label:`Open picker`,value:`09:24:36`,message:`Picker uses the same theme`})}function P(e){return(0,I.jsxs)(`div`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,maxWidth:`100%`,width:`100%`},children:[(0,I.jsx)(M,{...e,label:`Meeting time`,placeholder:`HH:mm:ss`,message:`Pick a delivery window`}),(0,I.jsx)(M,{...e,label:`Selected time`,value:`13:45:20`}),(0,I.jsx)(M,{...e,label:`Validation error`,error:`Time is outside working hours`}),(0,I.jsx)(M,{...e,label:`Without seconds`,value:`09:24`,secondEnabled:!1}),(0,I.jsx)(N,{...e})]})}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ee=t((()=>{F=n(r(),1),o(),u(),l(),v(),f(),c(),g(),m(),s(),d(),h(),p(),_(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),A(),I=i(),L={title:`Components/form elements/Inputs/JBTimeInput/Style`,component:a},R=[{name:`Carbon`,themeClassName:`carbon-style`},{name:`Aurora`,themeClassName:`aurora-style`},{name:`Forest`,themeClassName:`forest-style`},{name:`Sunset`,themeClassName:`sunset-style`},{name:`Porcelain`,themeClassName:`porcelain-style`},{name:`Candy`,themeClassName:`candy-style`},{name:`Terminal`,themeClassName:`terminal-style`},{name:`Material`,themeClassName:`material-style`},{name:`Fluent`,themeClassName:`fluent-style`},{name:`Bootstrap`,themeClassName:`bootstrap-style`},{name:`Cupertino`,themeClassName:`cupertino-style`},{name:`Ant Design`,themeClassName:`ant-design-style`}],z={name:`Gallery`,render:()=>(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(21rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 82rem)`},children:R.map(e=>(0,I.jsxs)(`section`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},className:e.themeClassName,children:[(0,I.jsx)(`div`,{style:{width:`100%`,color:`var(--jb-text-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,I.jsx)(P,{className:e.themeClassName})]},e.themeClassName))})},B={name:`Default`,render:()=>(0,I.jsx)(P,{className:``})},V={name:`Carbon`,render:()=>(0,I.jsx)(P,{className:`carbon-style`})},H={name:`Aurora`,render:()=>(0,I.jsx)(P,{className:`aurora-style`})},U={name:`Forest`,render:()=>(0,I.jsx)(P,{className:`forest-style`})},W={name:`Sunset`,render:()=>(0,I.jsx)(P,{className:`sunset-style`})},G={name:`Porcelain`,render:()=>(0,I.jsx)(P,{className:`porcelain-style`})},K={name:`Candy`,render:()=>(0,I.jsx)(P,{className:`candy-style`})},q={name:`Terminal`,render:()=>(0,I.jsx)(P,{className:`terminal-style`})},J={name:`Material`,render:()=>(0,I.jsx)(P,{className:`material-style`})},Y={name:`Fluent`,render:()=>(0,I.jsx)(P,{className:`fluent-style`})},X={name:`Bootstrap`,render:()=>(0,I.jsx)(P,{className:`bootstrap-style`})},Z={name:`Cupertino`,render:()=>(0,I.jsx)(P,{className:`cupertino-style`})},Q={name:`Ant Design`,render:()=>(0,I.jsx)(P,{className:`ant-design-style`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(21rem, 1fr))",
    gap: "1.25rem",
    alignItems: "start",
    width: "min(100%, 82rem)"
  }}>
      {styleSamples.map(sample => <section key={sample.themeClassName} style={{
      display: "grid",
      gap: "0.75rem",
      minWidth: 0,
      padding: "1rem",
      background: "var(--jb-surface, #ffffff)",
      border: "1px solid var(--jb-border-color, #e5e7eb)",
      borderRadius: "0.75rem",
      boxShadow: "0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)"
    }} className={sample.themeClassName}>
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
          <TimeInputStyleSample className={sample.themeClassName} />
        </section>)}
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <TimeInputStyleSample className="" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Carbon",
  render: () => <TimeInputStyleSample className="carbon-style" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Aurora",
  render: () => <TimeInputStyleSample className="aurora-style" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Forest",
  render: () => <TimeInputStyleSample className="forest-style" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Sunset",
  render: () => <TimeInputStyleSample className="sunset-style" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Porcelain",
  render: () => <TimeInputStyleSample className="porcelain-style" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Candy",
  render: () => <TimeInputStyleSample className="candy-style" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Terminal",
  render: () => <TimeInputStyleSample className="terminal-style" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Material",
  render: () => <TimeInputStyleSample className="material-style" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Fluent",
  render: () => <TimeInputStyleSample className="fluent-style" />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Bootstrap",
  render: () => <TimeInputStyleSample className="bootstrap-style" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Cupertino",
  render: () => <TimeInputStyleSample className="cupertino-style" />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <TimeInputStyleSample className="ant-design-style" />
}`,...Q.parameters?.docs?.source}}},$=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{V as a,U as c,G as d,j as f,ee as h,K as i,z as l,q as m,H as n,Z as o,W as p,X as r,Y as s,Q as t,J as u};