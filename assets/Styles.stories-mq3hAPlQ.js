import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-1mzZH2JI.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./terminal-T5SRCvL6.js";import{n as g,t as _}from"./jb-tooltip-BxY_lzY2.js";var v=e((()=>{})),y=e((()=>{})),b=e((()=>{})),x=e((()=>{})),S=e((()=>{})),C=e((()=>{})),w=e((()=>{})),T=e((()=>{})),E=e((()=>{})),D=e((()=>{})),O=e((()=>{})),k=e((()=>{}));function A({name:e,themeClassName:t}){let n={className:t,content:`${e} tooltip styling`,"position-area":`top`,tail:`true`};return(0,N.jsx)(`div`,{className:`${t} tooltip-style-sample`,children:(0,M.createElement)(`jb-tooltip`,n,(0,N.jsx)(`button`,{className:`tooltip-style-trigger`,type:`button`,children:`Hover or focus`}))})}async function j({canvasElement:e}){let t=e.querySelector(`jb-tooltip`),n=t?.querySelector(`button`),r=t?.shadowRoot?.querySelector(`.default-message`)?.shadowRoot?.querySelector(`[part='message']`);P(t).toBeTruthy(),P(n).toBeTruthy(),P(r).toBeTruthy(),n.focus(),await F(()=>P(t.open).toBe(!0)),await F(()=>P(t.shadowRoot?.querySelector(`.tooltip`)?.dataset.placement).toBe(`top`)),P(getComputedStyle(r).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{g(),s(),o(),h(),l(),a(),p(),d(),i(),c(),f(),u(),m(),v(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),_(),M=t(n(),1),N=r(),{expect:P,waitFor:F}=__STORYBOOK_MODULE_TEST__,I=[{name:`Carbon`,themeClassName:`carbon-style`},{name:`Aurora`,themeClassName:`aurora-style`},{name:`Forest`,themeClassName:`forest-style`},{name:`Sunset`,themeClassName:`sunset-style`},{name:`Porcelain`,themeClassName:`porcelain-style`},{name:`Candy`,themeClassName:`candy-style`},{name:`Terminal`,themeClassName:`terminal-style`},{name:`Material`,themeClassName:`material-style`},{name:`Fluent`,themeClassName:`fluent-style`},{name:`Bootstrap`,themeClassName:`bootstrap-style`},{name:`Cupertino`,themeClassName:`cupertino-style`},{name:`Ant Design`,themeClassName:`ant-design-style`}],L={title:`Components/JBTooltip/Style`,component:A,parameters:{layout:`centered`},args:I[0]},R={render:()=>(0,N.jsx)(`div`,{className:`tooltip-style-gallery`,children:I.map(e=>(0,N.jsxs)(`section`,{className:`${e.themeClassName} tooltip-style-card`,children:[(0,N.jsx)(`strong`,{className:`tooltip-style-name`,children:e.name}),(0,N.jsx)(A,{...e})]},e.themeClassName))})},z={args:{name:`Default`,themeClassName:`default-tooltip-style`},play:j},B={args:I[0],play:j},V={args:I[1],play:j},H={args:I[2],play:j},U={args:I[3],play:j},W={args:I[4],play:j},G={args:I[5],play:j},K={args:I[6],play:j},q={args:I[7],play:j},J={args:I[8],play:j},Y={args:I[9],play:j},X={args:I[10],play:j},Z={name:`Ant Design`,args:I[11],play:j},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="tooltip-style-gallery">
      {styleSamples.map(sample => <section className={\`\${sample.themeClassName} tooltip-style-card\`} key={sample.themeClassName}>
          <strong className="tooltip-style-name">{sample.name}</strong>
          <TooltipStyleSample {...sample} />
        </section>)}
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Default",
    themeClassName: "default-tooltip-style"
  },
  play: openStyleTooltip
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: styleSamples[0],
  play: openStyleTooltip
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: styleSamples[1],
  play: openStyleTooltip
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: styleSamples[2],
  play: openStyleTooltip
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: styleSamples[3],
  play: openStyleTooltip
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: styleSamples[4],
  play: openStyleTooltip
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: styleSamples[5],
  play: openStyleTooltip
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: styleSamples[6],
  play: openStyleTooltip
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: styleSamples[7],
  play: openStyleTooltip
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: styleSamples[8],
  play: openStyleTooltip
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: styleSamples[9],
  play: openStyleTooltip
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: styleSamples[10],
  play: openStyleTooltip
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  args: styleSamples[11],
  play: openStyleTooltip
}`,...Z.parameters?.docs?.source}}},Q=[`Gallery`,`Default`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));$();export{Z as AntDesign,V as Aurora,Y as Bootstrap,G as Candy,B as Carbon,X as Cupertino,z as Default,J as Fluent,H as Forest,R as Gallery,q as Material,W as Porcelain,U as Sunset,K as Terminal,Q as __namedExportsOrder,L as default,$ as t};