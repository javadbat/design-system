import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-GXxEDj8I.js";import{r as i,t as a}from"./react-DLiDhQMI.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./terminal-Bp9CrFd0.js";var v=e((()=>{})),y=e((()=>{})),b=e((()=>{})),x=e((()=>{})),S=e((()=>{})),C=e((()=>{})),w=e((()=>{})),T=e((()=>{})),E=e((()=>{})),D=e((()=>{})),O=e((()=>{})),k=e((()=>{}));function A({className:e}){return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`1.25rem`,minWidth:0,width:`100%`},children:[(0,N.jsx)(j,{className:e}),(0,N.jsx)(i,{className:e,label:`Price range`,mode:`range`,min:0,max:100,tickStep:25,minorTickStep:5,value:[20,80]}),(0,N.jsx)(i,{className:e,label:`Unavailable value`,min:0,max:10,value:4,error:`Choose another value`}),(0,N.jsx)(i,{className:e,label:`Disabled`,min:0,max:10,value:6,disabled:!0})]})}function j({className:e}){let t=(0,M.useRef)(null);return(0,M.useEffect)(()=>{let e=requestAnimationFrame(()=>{(t.current?.shadowRoot?.querySelector(`[part~='range-handle']`))?.dispatchEvent(new PointerEvent(`pointerover`,{bubbles:!0,pointerType:`mouse`}))});return()=>cancelAnimationFrame(e)},[]),(0,N.jsx)(i,{ref:t,className:e,label:`Volume`,min:0,max:100,tickStep:25,showTickLabels:!0,value:65})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=e((()=>{M=t(n(),1),a(),l(),c(),_(),d(),s(),h(),p(),o(),u(),m(),f(),g(),v(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),N=r(),P={title:`Components/form elements/JBRangeInput/Style`,component:i},F=[{name:`Carbon`,className:`carbon-style`},{name:`Aurora`,className:`aurora-style`},{name:`Forest`,className:`forest-style`},{name:`Sunset`,className:`sunset-style`},{name:`Porcelain`,className:`porcelain-style`},{name:`Candy`,className:`candy-style`},{name:`Terminal`,className:`terminal-style`},{name:`Material`,className:`material-style`},{name:`Fluent`,className:`fluent-style`},{name:`Bootstrap`,className:`bootstrap-style`},{name:`Cupertino`,className:`cupertino-style`},{name:`Ant Design`,className:`ant-design-style`}],I={name:`Gallery`,render:()=>(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(20rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 82rem)`},children:F.map(e=>(0,N.jsxs)(`section`,{className:e.className,style:{display:`grid`,gap:`0.75rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},children:[(0,N.jsx)(`div`,{style:{color:`var(--jb-content-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,N.jsx)(A,{className:e.className})]},e.className))})},L={render:()=>(0,N.jsx)(A,{className:``})},R={render:()=>(0,N.jsx)(A,{className:`carbon-style`})},z={render:()=>(0,N.jsx)(A,{className:`aurora-style`})},B={render:()=>(0,N.jsx)(A,{className:`forest-style`})},V={render:()=>(0,N.jsx)(A,{className:`sunset-style`})},H={render:()=>(0,N.jsx)(A,{className:`porcelain-style`})},U={render:()=>(0,N.jsx)(A,{className:`candy-style`})},W={render:()=>(0,N.jsx)(A,{className:`terminal-style`})},G={render:()=>(0,N.jsx)(A,{className:`material-style`})},K={render:()=>(0,N.jsx)(A,{className:`fluent-style`})},q={render:()=>(0,N.jsx)(A,{className:`bootstrap-style`})},J={render:()=>(0,N.jsx)(A,{className:`cupertino-style`})},Y={name:`Ant Design`,render:()=>(0,N.jsx)(A,{className:`ant-design-style`})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="" />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="carbon-style" />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="aurora-style" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="forest-style" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="sunset-style" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="porcelain-style" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="candy-style" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="terminal-style" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="material-style" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="fluent-style" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="bootstrap-style" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RangeInputStyleSample className="cupertino-style" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <RangeInputStyleSample className="ant-design-style" />
}`,...Y.parameters?.docs?.source}}},X=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));Z();export{Y as AntDesign,z as Aurora,q as Bootstrap,U as Candy,R as Carbon,J as Cupertino,L as Default,K as Fluent,B as Forest,I as Gallery,G as Material,H as Porcelain,V as Sunset,W as Terminal,X as __namedExportsOrder,P as default,Z as t};