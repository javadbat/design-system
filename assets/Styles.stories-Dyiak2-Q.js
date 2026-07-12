import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-kacJPVKr.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./terminal-C9Ys-05M.js";import{r as _,t as v}from"./react-Cdj-AX4S.js";var y=t((()=>{})),b=t((()=>{})),x=t((()=>{})),S=t((()=>{})),C=t((()=>{})),w=t((()=>{})),T=t((()=>{})),E=t((()=>{})),D=t((()=>{})),O=t((()=>{})),k=t((()=>{})),A=t((()=>{})),j=e({AntDesign:()=>X,Aurora:()=>B,Bootstrap:()=>J,Candy:()=>W,Carbon:()=>z,Cupertino:()=>Y,Fluent:()=>q,Forest:()=>V,Gallery:()=>R,Material:()=>K,Porcelain:()=>U,Sunset:()=>H,Terminal:()=>G,__namedExportsOrder:()=>Z,default:()=>I});function M({className:e,focus:t,secondEnabled:n=!0}){let r=(0,P.useRef)(null);return(0,P.useEffect)(()=>{r.current?.setTimeUnitFocus(t)},[t]),(0,F.jsx)(_,{ref:r,className:e,value:n?{hour:9,minute:24,second:36}:{hour:9,minute:24},frontalZero:!0,secondEnabled:n,optionalUnits:n?[`second`]:[],textWidth:160})}function N({className:e,focus:t}){return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,width:`100%`,justifyItems:`center`},children:[(0,F.jsx)(M,{className:e,focus:t}),(0,F.jsx)(M,{className:e,focus:`minute`,secondEnabled:!1})]})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q=t((()=>{P=n(r(),1),v(),c(),s(),g(),u(),o(),m(),f(),a(),l(),p(),d(),h(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),A(),F=i(),I={title:`Components/form elements/JBTimePicker/Style`,component:_},L=[{name:`Carbon`,className:`carbon-style`,focus:`hour`},{name:`Aurora`,className:`aurora-style`,focus:`minute`},{name:`Forest`,className:`forest-style`,focus:`second`},{name:`Sunset`,className:`sunset-style`,focus:`hour`},{name:`Porcelain`,className:`porcelain-style`,focus:`minute`},{name:`Candy`,className:`candy-style`,focus:`second`},{name:`Terminal`,className:`terminal-style`,focus:`hour`},{name:`Material`,className:`material-style`,focus:`minute`},{name:`Fluent`,className:`fluent-style`,focus:`second`},{name:`Bootstrap`,className:`bootstrap-style`,focus:`hour`},{name:`Cupertino`,className:`cupertino-style`,focus:`minute`},{name:`Ant Design`,className:`ant-design-style`,focus:`second`}],R={name:`Gallery`,render:()=>(0,F.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(18rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 76rem)`},children:L.map(e=>(0,F.jsxs)(`section`,{style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},className:e.className.split(` `)[0],children:[(0,F.jsx)(`div`,{style:{width:`100%`,color:`var(--jb-text-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,F.jsx)(N,{className:e.className,focus:e.focus})]},e.className))})},z={name:`Carbon`,render:()=>(0,F.jsx)(N,{className:`carbon-style`,focus:`hour`})},B={name:`Aurora`,render:()=>(0,F.jsx)(N,{className:`aurora-style`,focus:`minute`})},V={name:`Forest`,render:()=>(0,F.jsx)(N,{className:`forest-style`,focus:`second`})},H={name:`Sunset`,render:()=>(0,F.jsx)(N,{className:`sunset-style`,focus:`hour`})},U={name:`Porcelain`,render:()=>(0,F.jsx)(N,{className:`porcelain-style`,focus:`minute`})},W={name:`Candy`,render:()=>(0,F.jsx)(N,{className:`candy-style`,focus:`second`})},G={name:`Terminal`,render:()=>(0,F.jsx)(N,{className:`terminal-style`,focus:`hour`})},K={name:`Material`,render:()=>(0,F.jsx)(N,{className:`material-style`,focus:`minute`})},q={name:`Fluent`,render:()=>(0,F.jsx)(N,{className:`fluent-style`,focus:`second`})},J={name:`Bootstrap`,render:()=>(0,F.jsx)(N,{className:`bootstrap-style`,focus:`hour`})},Y={name:`Cupertino`,render:()=>(0,F.jsx)(N,{className:`cupertino-style`,focus:`minute`})},X={name:`Ant Design`,render:()=>(0,F.jsx)(N,{className:`ant-design-style`,focus:`second`})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
          <TimePickerStyleSample className={sample.className} focus={sample.focus} />
        </section>)}
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Carbon",
  render: () => <TimePickerStyleSample className="carbon-style" focus="hour" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Aurora",
  render: () => <TimePickerStyleSample className="aurora-style" focus="minute" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Forest",
  render: () => <TimePickerStyleSample className="forest-style" focus="second" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Sunset",
  render: () => <TimePickerStyleSample className="sunset-style" focus="hour" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Porcelain",
  render: () => <TimePickerStyleSample className="porcelain-style" focus="minute" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Candy",
  render: () => <TimePickerStyleSample className="candy-style" focus="second" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Terminal",
  render: () => <TimePickerStyleSample className="terminal-style" focus="hour" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Material",
  render: () => <TimePickerStyleSample className="material-style" focus="minute" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Fluent",
  render: () => <TimePickerStyleSample className="fluent-style" focus="second" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Bootstrap",
  render: () => <TimePickerStyleSample className="bootstrap-style" focus="hour" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Cupertino",
  render: () => <TimePickerStyleSample className="cupertino-style" focus="minute" />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <TimePickerStyleSample className="ant-design-style" focus="second" />
}`,...X.parameters?.docs?.source}}},Z=[`Gallery`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{z as a,V as c,U as d,j as f,Q as h,W as i,R as l,G as m,B as n,Y as o,H as p,J as r,q as s,X as t,K as u};