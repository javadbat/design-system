import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-DyWnM0Wh.js";import{a as i,i as a,n as o,t as s}from"./react-W3O_t9_I.js";import{n as c,t as l}from"./dist-C5DUfNXn.js";var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{u=t(n(),1),s(),l(),d=r(),{expect:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/JBGrid/Row`,component:i},g={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`name`,size:`1fr`},{name:`family`,size:`1fr`},{name:`age`,size:`6.25rem`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:`id cell`}),(0,d.jsx)(a,{name:`name`,children:`name cell`}),(0,d.jsx)(a,{name:`age`,children:`age cell`})]})}},_={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`bio`,size:`1fr`},{name:`name`,size:`1fr`},{name:`jobTitle`,size:`6.25rem`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:c.number.int({min:1e3,max:9999})}),(0,d.jsx)(a,{name:`bio`,children:c.lorem.sentence(200)}),(0,d.jsx)(a,{name:`name`,children:c.person.fullName()}),(0,d.jsx)(a,{name:`jobTitle`,children:c.person.jobTitle()})]})}},v={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`bio`,size:`1fr`},{name:`name`,size:`1fr`},{name:`jobTitle`,size:`6.25rem`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:c.number.int({min:1e3,max:9999})}),(0,d.jsx)(a,{name:`bio`,ellipsis:!0,children:c.lorem.sentence(200)}),(0,d.jsx)(a,{name:`name`,children:c.person.fullName()}),(0,d.jsx)(a,{name:`jobTitle`,children:c.person.jobTitle()})]})}},y={args:{rowTemplate:[{name:`id`,size:`1fr`},{name:`bio`,size:`1fr`},{name:`name`,size:`1fr`},{name:`jobTitle`,size:`6.25rem`}],children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{name:`id`,children:c.number.int({min:1e3,max:9999})}),(0,d.jsx)(a,{name:`bio`,ellipsis:2,children:c.lorem.sentence(200)}),(0,d.jsx)(a,{name:`name`,children:c.person.fullName()}),(0,d.jsx)(a,{name:`jobTitle`,children:c.person.jobTitle()})]})}},b={args:{isOpen:!0,children:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsxs)(a,{name:`id`,children:[(0,d.jsx)(o,{}),`id cell`]}),(0,d.jsx)(a,{name:`name`,children:`name cell`}),(0,d.jsx)(a,{name:`age`,children:`age cell`}),(0,d.jsx)(`div`,{slot:`expand`,children:c.lorem.paragraph(50)})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-row`),n=e.querySelector(`jb-expand-toggle`)?.shadowRoot?.querySelector(`button`),r=t?.shadowRoot?.querySelector(`[role="row"]`),i=t?.shadowRoot?.querySelector(`.expand-wrapper`),a=t?.shadowRoot?.querySelector(`.expand-region`);f(t?.hasAttribute(`role`)).toBe(!1),f(r).toBeTruthy(),f(i?.getAttribute(`role`)).toBe(`row`),f(a?.getAttribute(`role`)).toBe(`region`),f(n?.getAttribute(`aria-controls`)).toBe(a?.id),await p.click(n),await m(()=>{f(n?.getAttribute(`aria-expanded`)).toBe(`false`),f(i?.hasAttribute(`inert`)).toBe(!0),f(i?.getAttribute(`aria-hidden`)).toBe(`true`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      size: '6.25rem'
    }],
    children: <Fragment>
    <JBCell name="id">id cell</JBCell>
    <JBCell name="name">name cell</JBCell>
    <JBCell name="age">age cell</JBCell>
  </Fragment>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      size: '6.25rem'
    }],
    children: <Fragment>
    <JBCell name="id">{faker.number.int({
          min: 1000,
          max: 9999
        })}</JBCell>
    <JBCell name="bio">{faker.lorem.sentence(200)}</JBCell>
    <JBCell name="name">{faker.person.fullName()}</JBCell>
    <JBCell name="jobTitle">{faker.person.jobTitle()}</JBCell>
  </Fragment>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      size: '6.25rem'
    }],
    children: <Fragment>
    <JBCell name="id">{faker.number.int({
          min: 1000,
          max: 9999
        })}</JBCell>
    <JBCell name="bio" ellipsis>{faker.lorem.sentence(200)}</JBCell>
    <JBCell name="name">{faker.person.fullName()}</JBCell>
    <JBCell name="jobTitle">{faker.person.jobTitle()}</JBCell>
  </Fragment>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      size: '6.25rem'
    }],
    children: <Fragment>
    <JBCell name="id">{faker.number.int({
          min: 1000,
          max: 9999
        })}</JBCell>
    <JBCell name="bio" ellipsis={2}>{faker.lorem.sentence(200)}</JBCell>
    <JBCell name="name">{faker.person.fullName()}</JBCell>
    <JBCell name="jobTitle">{faker.person.jobTitle()}</JBCell>
  </Fragment>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const row = canvasElement.querySelector("jb-row");
    const toggle = canvasElement.querySelector("jb-expand-toggle");
    const button = toggle?.shadowRoot?.querySelector<HTMLButtonElement>("button");
    const rowContent = row?.shadowRoot?.querySelector('[role="row"]');
    const detailsRow = row?.shadowRoot?.querySelector<HTMLElement>(".expand-wrapper");
    const detailsRegion = row?.shadowRoot?.querySelector<HTMLElement>(".expand-region");
    expect(row?.hasAttribute("role")).toBe(false);
    expect(rowContent).toBeTruthy();
    expect(detailsRow?.getAttribute("role")).toBe("row");
    expect(detailsRegion?.getAttribute("role")).toBe("region");
    expect(button?.getAttribute("aria-controls")).toBe(detailsRegion?.id);
    await userEvent.click(button!);
    await waitFor(() => {
      expect(button?.getAttribute("aria-expanded")).toBe("false");
      expect(detailsRow?.hasAttribute("inert")).toBe(true);
      expect(detailsRow?.getAttribute("aria-hidden")).toBe("true");
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`Normal`,`OverflowCellUnhandled`,`OverflowCellSingleLine`,`OverflowCellMultiLine`,`WithExpand`]}))();export{g as Normal,y as OverflowCellMultiLine,v as OverflowCellSingleLine,_ as OverflowCellUnhandled,b as WithExpand,x as __namedExportsOrder,h as default};