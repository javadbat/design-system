import{R as e,r as s}from"./index-CEK5zJnf.js";import{k as p,I as a,N as d}from"./JBGrid-BQx5zbwD.js";import{f as g}from"./chunk-NAVWDHVN-nYOG0we8.js";import"./index-Bhe3Q7G8.js";import"./index-C2vOwVL5.js";import"./index-CupGaPSm.js";import"./jb-searchbar-DoOk5NAp.js";import"./index-BjRxPyWZ.js";import"./index-C6I8ccWY.js";import"./jb-button-MYbfia63.js";import"./jb-loading-BuRiKsux.js";import"./index-BtFglznY.js";import"./jb-popover-Cuo183Gr.js";import"./jb-validation-AFHFNd1g.js";import"./index-DJpgW01c.js";const T={title:"Components/JBGrid/Row",component:p},r={args:{rowTemplate:[{name:"id",size:"1fr"},{name:"name",size:"1fr"},{name:"family",size:"1fr"},{name:"age",size:"100px"}],children:e.createElement(s.Fragment,null,e.createElement(a,{name:"id"},"id cell"),e.createElement(a,{name:"name"},"name cell"),e.createElement(a,{name:"age"},"age cell"))}},m={args:{isOpen:!0,children:e.createElement(s.Fragment,null,e.createElement(a,{name:"id"},e.createElement(d,null),"id cell"),e.createElement(a,{name:"name"},"name cell"),e.createElement(a,{name:"age"},"age cell"),e.createElement("div",{slot:"expand"},g.lorem.paragraph(50)))}};var l,n,t;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(i=m.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Normal","WithExpand"];export{r as Normal,m as WithExpand,k as __namedExportsOrder,T as default};
