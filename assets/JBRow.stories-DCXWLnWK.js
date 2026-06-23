import{R as e,r as i}from"./index-D4lIrffr.js";import{O as b,R as a,T as z}from"./JBGrid-lmAS581r.js";import{f as n}from"./chunk-MVUZLZE2-OakZy48_.js";import"./index-D7ggZhY0.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./jb-searchbar-Dmde5Xhk.js";import"./index-CansPAZh.js";import"./index-Br1cBDPB.js";import"./jb-button-CtUV5eF-.js";import"./jb-loading-BmlEKkU_.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-BijJAI47.js";const W={title:"Components/JBGrid/Row",component:b},r={args:{rowTemplate:[{name:"id",size:"1fr"},{name:"name",size:"1fr"},{name:"family",size:"1fr"},{name:"age",size:"100px"}],children:e.createElement(i.Fragment,null,e.createElement(a,{name:"id"},"id cell"),e.createElement(a,{name:"name"},"name cell"),e.createElement(a,{name:"age"},"age cell"))}},l={args:{rowTemplate:[{name:"id",size:"1fr"},{name:"bio",size:"1fr"},{name:"name",size:"1fr"},{name:"jobTitle",size:"100px"}],children:e.createElement(i.Fragment,null,e.createElement(a,{name:"id"},n.number.int({min:1e3,max:9999})),e.createElement(a,{name:"bio","max-line":"1"},n.lorem.sentence(200)),e.createElement(a,{name:"name"},n.person.fullName()),e.createElement(a,{name:"jobTitle"},n.person.jobTitle()))}},m={args:{rowTemplate:[{name:"id",size:"1fr"},{name:"bio",size:"1fr"},{name:"name",size:"1fr"},{name:"jobTitle",size:"100px"}],children:e.createElement(i.Fragment,null,e.createElement(a,{name:"id"},n.number.int({min:1e3,max:9999})),e.createElement(a,{name:"bio","max-line":"2"},n.lorem.sentence(200)),e.createElement(a,{name:"name"},n.person.fullName()),e.createElement(a,{name:"jobTitle"},n.person.jobTitle()))}},t={args:{isOpen:!0,children:e.createElement(i.Fragment,null,e.createElement(a,{name:"id"},e.createElement(z,null),"id cell"),e.createElement(a,{name:"name"},"name cell"),e.createElement(a,{name:"age"},"age cell"),e.createElement("div",{slot:"expand"},n.lorem.paragraph(50)))}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,d,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    rowTemplate: [{
      name: "id",
      size: "1fr"
    }, {
      name: "bio",
      size: "1fr"
    }, {
      name: "name",
      size: "1fr"
    }, {
      name: "jobTitle",
      size: '100px'
    }],
    children: <Fragment>
    <JBCell name="id">{faker.number.int({
          min: 1000,
          max: 9999
        })}</JBCell>
    <JBCell name="bio" max-line="1">{faker.lorem.sentence(200)}</JBCell>
    <JBCell name="name">{faker.person.fullName()}</JBCell>
    <JBCell name="jobTitle">{faker.person.jobTitle()}</JBCell>
  </Fragment>
  }
}`,...(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,C,u;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    rowTemplate: [{
      name: "id",
      size: "1fr"
    }, {
      name: "bio",
      size: "1fr"
    }, {
      name: "name",
      size: "1fr"
    }, {
      name: "jobTitle",
      size: '100px'
    }],
    children: <Fragment>
    <JBCell name="id">{faker.number.int({
          min: 1000,
          max: 9999
        })}</JBCell>
    <JBCell name="bio" max-line="2">{faker.lorem.sentence(200)}</JBCell>
    <JBCell name="name">{faker.person.fullName()}</JBCell>
    <JBCell name="jobTitle">{faker.person.jobTitle()}</JBCell>
  </Fragment>
  }
}`,...(u=(C=m.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var B,J,E;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(J=t.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};const _=["Normal","OverflowCellSingleLine","OverflowCellMultiLine","WithExpand"];export{r as Normal,m as OverflowCellMultiLine,l as OverflowCellSingleLine,t as WithExpand,_ as __namedExportsOrder,W as default};
