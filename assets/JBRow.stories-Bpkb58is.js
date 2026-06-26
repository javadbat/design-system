import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{ot as n,t as r}from"./iframe-CNtKknPt.js";import{i,r as a,s as o,t as s}from"./react-jNBl_lIQ.js";import{n as c,t as l}from"./dist-FcoDOuCf.js";var u,d,f,p,m,h,g,_;e((()=>{u=t(n(),1),s(),l(),d=r(),f={title:`Components/JBGrid/Row`,component:o},p={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`name`,size:`1fr`},{name:`family`,size:`1fr`},{name:`age`,size:`100px`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:`id cell`}),(0,d.jsx)(a,{name:`name`,children:`name cell`}),(0,d.jsx)(a,{name:`age`,children:`age cell`})]})}},m={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`bio`,size:`1fr`},{name:`name`,size:`1fr`},{name:`jobTitle`,size:`100px`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:c.number.int({min:1e3,max:9999})}),(0,d.jsx)(a,{name:`bio`,"max-line":`1`,children:c.lorem.sentence(200)}),(0,d.jsx)(a,{name:`name`,children:c.person.fullName()}),(0,d.jsx)(a,{name:`jobTitle`,children:c.person.jobTitle()})]})}},h={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`bio`,size:`1fr`},{name:`name`,size:`1fr`},{name:`jobTitle`,size:`100px`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:c.number.int({min:1e3,max:9999})}),(0,d.jsx)(a,{name:`bio`,"max-line":`2`,children:c.lorem.sentence(200)}),(0,d.jsx)(a,{name:`name`,children:c.person.fullName()}),(0,d.jsx)(a,{name:`jobTitle`,children:c.person.jobTitle()})]})}},g={args:{isOpen:!0,children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsxs)(a,{name:`id`,children:[(0,d.jsx)(i,{}),`id cell`]}),(0,d.jsx)(a,{name:`name`,children:`name cell`}),(0,d.jsx)(a,{name:`age`,children:`age cell`}),(0,d.jsx)(`div`,{slot:`expand`,children:c.lorem.paragraph(50)})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Normal`,`OverflowCellSingleLine`,`OverflowCellMultiLine`,`WithExpand`]}))();export{p as Normal,h as OverflowCellMultiLine,m as OverflowCellSingleLine,g as WithExpand,_ as __namedExportsOrder,f as default};