import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-kacJPVKr.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./terminal-C9Ys-05M.js";import{t as _}from"./jb-notification-BQLuUrQ6.js";var v=t((()=>{})),y=t((()=>{})),b=t((()=>{})),x=t((()=>{})),S=t((()=>{})),C=t((()=>{})),w=t((()=>{})),T=t((()=>{})),E=t((()=>{})),D=t((()=>{})),O=t((()=>{})),k=t((()=>{})),A=e({AntDesign:()=>X,Aurora:()=>B,Bootstrap:()=>J,Candy:()=>W,Carbon:()=>z,Cupertino:()=>Y,Fluent:()=>q,Forest:()=>V,Gallery:()=>R,Material:()=>K,Porcelain:()=>U,Sunset:()=>H,Terminal:()=>G,__namedExportsOrder:()=>Z,default:()=>F});function j({className:e,description:t,title:n,type:r}){return N.createElement(`jb-notification`,{className:e,description:t,title:n,type:r})}function M({notificationClassName:e,themeClassName:t}){return(0,P.jsx)(`div`,{className:`${t} notification-demo-stack`,children:I.map(t=>(0,P.jsx)(j,{className:e,description:t.description,title:t.title,type:t.type},t.type))})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q=t((()=>{N=n(r(),1),_(),c(),s(),g(),u(),o(),m(),f(),a(),l(),p(),d(),h(),v(),y(),b(),x(),S(),C(),w(),T(),E(),D(),O(),k(),P=i(),F={title:`Components/JBNotification/Style`},I=[{type:`SUCCESS`,title:`Changes saved`,description:`The project settings are now live.`},{type:`INFO`,title:`Sync completed`,description:`All records are up to date.`},{type:`WARNING`,title:`Review needed`,description:`Some permissions need approval.`},{type:`ERROR`,title:`Upload failed`,description:`Try again or choose another file.`}],L=[{name:`Carbon`,themeClassName:`carbon-style`,notificationClassName:`carbon-style`},{name:`Aurora`,themeClassName:`aurora-style`,notificationClassName:`aurora-style`},{name:`Forest`,themeClassName:`forest-style`,notificationClassName:`forest-style`},{name:`Sunset`,themeClassName:`sunset-style`,notificationClassName:`sunset-style`},{name:`Porcelain`,themeClassName:`porcelain-style`,notificationClassName:`porcelain-style`},{name:`Candy`,themeClassName:`candy-style`,notificationClassName:`candy-style`},{name:`Terminal`,themeClassName:`terminal-style`,notificationClassName:`terminal-style`},{name:`Material`,themeClassName:`material-style`,notificationClassName:`material-style`},{name:`Fluent`,themeClassName:`fluent-style`,notificationClassName:`fluent-style`},{name:`Bootstrap`,themeClassName:`bootstrap-style`,notificationClassName:`bootstrap-style`},{name:`Cupertino`,themeClassName:`cupertino-style`,notificationClassName:`cupertino-style`},{name:`Ant Design`,themeClassName:`ant-design-style`,notificationClassName:`ant-design-style`}],R={name:`Gallery`,render:()=>(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(22rem, 1fr))`,gap:`1.25rem`,alignItems:`start`,width:`min(100%, 92rem)`},children:L.map(e=>(0,P.jsxs)(`section`,{className:e.themeClassName,style:{display:`grid`,gap:`0.875rem`,minWidth:0,padding:`1rem`,background:`var(--jb-surface, #ffffff)`,border:`1px solid var(--jb-border-color, #e5e7eb)`,borderRadius:`0.75rem`,boxShadow:`0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)`},children:[(0,P.jsx)(`div`,{style:{width:`100%`,color:`var(--jb-text-primary, #334155)`,fontSize:`0.875rem`,fontWeight:700,lineHeight:1.4,textAlign:`center`},children:e.name}),(0,P.jsx)(M,{...e})]},e.notificationClassName))})},z={name:`Carbon`,render:()=>(0,P.jsx)(M,{...L[0]})},B={name:`Aurora`,render:()=>(0,P.jsx)(M,{...L[1]})},V={name:`Forest`,render:()=>(0,P.jsx)(M,{...L[2]})},H={name:`Sunset`,render:()=>(0,P.jsx)(M,{...L[3]})},U={name:`Porcelain`,render:()=>(0,P.jsx)(M,{...L[4]})},W={name:`Candy`,render:()=>(0,P.jsx)(M,{...L[5]})},G={name:`Terminal`,render:()=>(0,P.jsx)(M,{...L[6]})},K={name:`Material`,render:()=>(0,P.jsx)(M,{...L[7]})},q={name:`Fluent`,render:()=>(0,P.jsx)(M,{...L[8]})},J={name:`Bootstrap`,render:()=>(0,P.jsx)(M,{...L[9]})},Y={name:`Cupertino`,render:()=>(0,P.jsx)(M,{...L[10]})},X={name:`Ant Design`,render:()=>(0,P.jsx)(M,{...L[11]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
    gap: "1.25rem",
    alignItems: "start",
    width: "min(100%, 92rem)"
  }}>
      {styleSamples.map(sample => <section key={sample.notificationClassName} className={sample.themeClassName} style={{
      display: "grid",
      gap: "0.875rem",
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
          <NotificationStyleSample {...sample} />
        </section>)}
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Carbon",
  render: () => <NotificationStyleSample {...styleSamples[0]} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Aurora",
  render: () => <NotificationStyleSample {...styleSamples[1]} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Forest",
  render: () => <NotificationStyleSample {...styleSamples[2]} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Sunset",
  render: () => <NotificationStyleSample {...styleSamples[3]} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Porcelain",
  render: () => <NotificationStyleSample {...styleSamples[4]} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Candy",
  render: () => <NotificationStyleSample {...styleSamples[5]} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Terminal",
  render: () => <NotificationStyleSample {...styleSamples[6]} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Material",
  render: () => <NotificationStyleSample {...styleSamples[7]} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Fluent",
  render: () => <NotificationStyleSample {...styleSamples[8]} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Bootstrap",
  render: () => <NotificationStyleSample {...styleSamples[9]} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Cupertino",
  render: () => <NotificationStyleSample {...styleSamples[10]} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Ant Design",
  render: () => <NotificationStyleSample {...styleSamples[11]} />
}`,...X.parameters?.docs?.source}}},Z=[`Gallery`,`Carbon`,`Aurora`,`Forest`,`Sunset`,`Porcelain`,`Candy`,`Terminal`,`Material`,`Fluent`,`Bootstrap`,`Cupertino`,`AntDesign`]}));export{z as a,V as c,U as d,A as f,Q as h,W as i,R as l,G as m,B as n,Y as o,H as p,J as r,q as s,X as t,K as u};