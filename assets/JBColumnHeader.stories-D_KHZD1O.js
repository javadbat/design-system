import{i as e}from"./preload-helper-CT_b8DTk.js";import{o as t,t as n}from"./react-BnBmtCw2.js";var r,i,a,o,s,c,l;e((()=>{n(),{expect:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/JBGrid/ColumnHeader`,component:t},o={args:{name:`name`,children:`Name`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-col-header`),n=t?.shadowRoot?.querySelector(`.column-header`);r(t?.getAttribute(`role`)).toBe(`columnheader`),r(n?.hasAttribute(`role`)).toBe(!1),r(n?.hasAttribute(`tabindex`)).toBe(!1)}},s={args:{name:`name`,sortable:!0,children:`Name`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-col-header`),n=t?.shadowRoot?.querySelector(`.column-header`);r(n?.getAttribute(`role`)).toBe(`button`),r(n?.tabIndex).toBe(0),n?.focus(),await i.keyboard(`{Enter}`),r(t?.sort).toBe(`asc`),r(t?.getAttribute(`aria-sort`)).toBe(`ascending`)}},c={args:{name:`name`,sortable:!0,sort:`asc`,enableSortingRemoval:!0,children:`Name`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    children: "Name"
  },
  play: async ({
    canvasElement
  }) => {
    const columnHeader = canvasElement.querySelector("jb-col-header");
    const wrapper = columnHeader?.shadowRoot?.querySelector(".column-header");
    expect(columnHeader?.getAttribute("role")).toBe("columnheader");
    expect(wrapper?.hasAttribute("role")).toBe(false);
    expect(wrapper?.hasAttribute("tabindex")).toBe(false);
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    sortable: true,
    children: "Name"
  },
  play: async ({
    canvasElement
  }) => {
    const columnHeader = canvasElement.querySelector<HTMLElement & {
      sort: "asc" | "desc" | null;
    }>("jb-col-header");
    const wrapper = columnHeader?.shadowRoot?.querySelector<HTMLElement>(".column-header");
    expect(wrapper?.getAttribute("role")).toBe("button");
    expect(wrapper?.tabIndex).toBe(0);
    wrapper?.focus();
    await userEvent.keyboard("{Enter}");
    expect(columnHeader?.sort).toBe("asc");
    expect(columnHeader?.getAttribute("aria-sort")).toBe("ascending");
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    sortable: true,
    sort: "asc",
    enableSortingRemoval: true,
    children: "Name"
  }
}`,...c.parameters?.docs?.source}}},l=[`Normal`,`Sortable`,`enableSortingRemoval`]}))();export{o as Normal,s as Sortable,l as __namedExportsOrder,a as default,c as enableSortingRemoval};