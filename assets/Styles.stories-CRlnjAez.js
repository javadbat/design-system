import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-pxpe10JU.js";import{r as a,t as o}from"./react-Cigoc-Wo.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./terminal-Bp9CrFd0.js";var y=t((()=>{})),b=t((()=>{})),x=t((()=>{})),S=t((()=>{})),C=t((()=>{})),w=t((()=>{})),T=t((()=>{})),E=t((()=>{})),D=t((()=>{})),O=t((()=>{})),k=t((()=>{})),A=t((()=>{})),j=e({AntDesign:()=>Z,Aurora:()=>V,Bootstrap:()=>Y,Candy:()=>G,Carbon:()=>B,Cupertino:()=>X,Default:()=>z,Fluent:()=>J,Forest:()=>H,Gallery:()=>R,Material:()=>q,Porcelain:()=>W,Sunset:()=>U,Terminal:()=>K,__namedExportsOrder:()=>Q,default:()=>I});function M({className:e}){return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:`1.25rem`,minWidth:0,width:`100%`},children:[(0,F.jsx)(N,{className:e}),(0,F.jsx)(a,{className:e,label:`Price range`,mode:`range`,min:0,max:100,tickStep:25,minorTickStep:5,value:[20,80]}),(0,F.jsx)(a,{className:e,label:`Unavailable value`,min:0,max:10,value:4,error:`Choose another value`}),(0,F.jsx)(a,{className:e,label:`Disabled`,min:0,max:10,value:6,disabled:!0})]})}function N({className:e}){let t=(0,P.useRef)(null);return(0,P.useEffect)(()=>{let e=requestAnimationFrame(()=>{(t.current?.shadowRoot?.querySelector(`[part~='range-handle']`))?.dispatchEvent(new PointerEvent(`pointerover`,{bubbles:!0,pointerType:`mouse`}))});return()=>cancelAnimationFrame(e)},[]),(0,F.jsx)(a,{ref:t,className:e,label:`Volume`,min:0,max:100,tickStep:25,showTickLabels:!0,value:65})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{P=n(r(),1),o(),u(),l(),v(),f(),c(),g(),m(),s(),d(),h(),p(),_(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),A(),F=i(),I={title:`Components/form elements/JBRangeInput/Style`,component:a},L=[{name:`Carbon`,className:`carbon-style`},{name:`Aurora`,className:`aurora-style`},{name:`Forest`,className:`forest-style`},{name:`Sunset`,className:`sunset-style`},{name:`Porcelain`,className:`porcelain-style`},{name:`Candy`,className:`candy-style`},{name:`Terminal`,className:`terminal-style`},{name:`Material`,className:`material-style`},{name:`Fluent`,className:`fluent-style`},{name:`Bootstrap`,className:`bootstrap-style`},{name:`Cupertino`,className:`cupertino-style`},{name:`Ant Design`,className:`ant-design-style`}],R={name:`Gallery`,render:()=>(0,F.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(20rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 82rem)`},children:L.map(e=>(0,F.jsxs)(`section`,{className:e.className,style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},children:[(0,F.jsx)(`div`,{style:{color:`var(--jb-content-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,F.jsx)(M,{className:e.className})]},e.className))})},z={render:()=>(0,F.jsx)(M,{className:``})},B={render:()=>(0,F.jsx)(M,{className:`carbon-style`})},V={render:()=>(0,F.jsx)(M,{className:`aurora-style`})},H={render:()=>(0,F.jsx)(M,{className:`forest-style`})},U={render:()=>(0,F.jsx)(M,{className:`sunset-style`})},W={render:()=>(0,F.jsx)(M,{className:`porcelain-style`})},G={render:()=>(0,F.jsx)(M,{className:`candy-style`})},K={render:()=>(0,F.jsx)(M,{className:`terminal-style`})},q={render:()=>(0,F.jsx)(M,{className:`material-style`})},J={render:()=>(0,F.jsx)(M,{className:`fluent-style`})},Y={render:()=>(0,F.jsx)(M,{className:`bootstrap-style`})},X={render:()=>(0,F.jsx)(M,{className:`cupertino-style`})},Z={name:`Ant Design`,render:()=>(0,F.jsx)(M,{className:`ant-design-style`})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
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
        color: "var(--jb-content-primary, #334155)",
        fontSize: "0.875rem",
        fontWeight: 700,
        lineHeight: 1.4,
        textAlign: "center"
      }}>
            {sample.name}
          </div>
          <RangeInputStyleSample className={sample.className} />
        </section>)}
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="carbon-style" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="aurora-style" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="forest-style" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="sunset-style" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="porcelain-style" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="candy-style" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="terminal-style" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="material-style" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="fluent-style" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="bootstrap-style" />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="cupertino-style" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <RangeInputStyleSample className="ant-design-style" />
}`,...Z.parameters?.docs?.source}}},Q=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{B as a,H as c,W as d,j as f,$ as h,G as i,R as l,K as m,V as n,X as o,U as p,Y as r,J as s,Z as t,q as u};