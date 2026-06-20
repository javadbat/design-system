import{R as e,r as s}from"./index-D4lIrffr.js";import{O as p,R as a,T as d}from"./JBGrid-CWjJ9NLk.js";import{f as g}from"./chunk-MVUZLZE2-OakZy48_.js";import"./index-D7ggZhY0.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./jb-searchbar-Dmde5Xhk.js";import"./index-CansPAZh.js";import"./index-Br1cBDPB.js";import"./jb-button-CtUV5eF-.js";import"./jb-loading-BmlEKkU_.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-BijJAI47.js";const y={title:"Components/JBGrid/Row",component:p},r={args:{rowTemplate:[{name:"id",size:"1fr"},{name:"name",size:"1fr"},{name:"family",size:"1fr"},{name:"age",size:"100px"}],children:e.createElement(s.Fragment,null,e.createElement(a,{name:"id"},"id cell"),e.createElement(a,{name:"name"},"name cell"),e.createElement(a,{name:"age"},"age cell"))}},m={args:{isOpen:!0,children:e.createElement(s.Fragment,null,e.createElement(a,{name:"id"},e.createElement(d,null),"id cell"),e.createElement(a,{name:"name"},"name cell"),e.createElement(a,{name:"age"},"age cell"),e.createElement("div",{slot:"expand"},g.lorem.paragraph(50)))}};var l,n,t;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    rowTemplate: [{
      name: "id",
      size: "1fr"
    }, {
      name: "name",
      size: "1fr"
    }, {
      name: "family",
      size: "1fr"
    }, {
      name: "age",
      size: '100px'
    }],
    children: <Fragment>
    <JBCell name="id">id cell</JBCell>
    <JBCell name="name">name cell</JBCell>
    <JBCell name="age">age cell</JBCell>
  </Fragment>
  }
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var o,i,c;m.parameters={...m.parameters,docs:{...(o=m.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <Fragment>
    <JBCell name="id"><JBExpandToggle />id cell</JBCell>
    <JBCell name="name">name cell</JBCell>
    <JBCell name="age">age cell</JBCell>
    <div slot="expand">
      {faker.lorem.paragraph(50)}
    </div>
  </Fragment>
  }
}`,...(c=(i=m.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const N=["Normal","WithExpand"];export{r as Normal,m as WithExpand,N as __namedExportsOrder,y as default};
