import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C3yPao1g.js";import{i as n,n as r,t as i}from"./react-C92HlSzJ.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c=[{name:`id`,size:`5rem`},{name:`name`,size:`1fr`},{name:`family`,size:`1fr`},{name:`age`,size:`6.25rem`}],l={title:`Components/JBGrid/TableHeader`,component:n},u={args:{headerTemplate:c,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{name:`id`,children:`ID`}),(0,a.jsx)(r,{name:`name`,sortable:!0,children:`Name`}),(0,a.jsx)(r,{name:`family`,sortable:!0,children:`Family`}),(0,a.jsx)(r,{name:`age`,children:`Age`})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-table-header`);o(t).toBeTruthy(),o(t?.getAttribute(`role`)).toBe(`rowgroup`),o(t?.headerTemplate).toEqual(c);let n=t?.shadowRoot?.querySelector(`.table-header-row`);o(n?.getAttribute(`role`)).toBe(`row`),o(Array.from(t?.querySelectorAll(`jb-col-header`)??[]).map(e=>e.getAttribute(`name`))).toEqual([`id`,`name`,`family`,`age`]),await s(()=>{let e=t?.shadowRoot?.adoptedStyleSheets[0];o(Array.from(e?.cssRules??[]).map(e=>e.cssText).join(` `)).toContain(`grid-template-columns: 5rem 1fr 1fr 6.25rem`)})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    headerTemplate,
    children: <>
        <JBColumnHeader name="id">ID</JBColumnHeader>
        <JBColumnHeader name="name" sortable>
          Name
        </JBColumnHeader>
        <JBColumnHeader name="family" sortable>
          Family
        </JBColumnHeader>
        <JBColumnHeader name="age">Age</JBColumnHeader>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const tableHeader = canvasElement.querySelector<JBTableHeaderWebComponent>("jb-table-header");
    expect(tableHeader).toBeTruthy();
    expect(tableHeader?.getAttribute("role")).toBe("rowgroup");
    expect(tableHeader?.headerTemplate).toEqual(headerTemplate);
    const headerRow = tableHeader?.shadowRoot?.querySelector(".table-header-row");
    expect(headerRow?.getAttribute("role")).toBe("row");
    const columnNames = Array.from(tableHeader?.querySelectorAll("jb-col-header") ?? []).map(columnHeader => columnHeader.getAttribute("name"));
    expect(columnNames).toEqual(["id", "name", "family", "age"]);
    await waitFor(() => {
      const templateStyles = tableHeader?.shadowRoot?.adoptedStyleSheets[0];
      const stylesheetText = Array.from(templateStyles?.cssRules ?? []).map(rule => rule.cssText).join(" ");
      expect(stylesheetText).toContain("grid-template-columns: 5rem 1fr 1fr 6.25rem");
    });
  }
}`,...u.parameters?.docs?.source}}},d=[`Normal`]}))();export{u as Normal,d as __namedExportsOrder,l as default};