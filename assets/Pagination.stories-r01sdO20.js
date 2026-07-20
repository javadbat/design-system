import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,t as n}from"./react-695eJ1wy.js";var r,i,a,o,s;e((()=>{n(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/JBGrid/Pagination`,component:t},a={args:{pageIndex:1,onChange:e=>{console.log(`change Event`,e)}}},o={args:{max:10},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-pagination`)?.shadowRoot,n=t?.querySelector(`nav`);r(n?.getAttribute(`aria-label`)).toBe(`Pagination`),r(t?.querySelector(`.first-page`)?.disabled).toBe(!0),r(t?.querySelector(`.prev-page`)?.disabled).toBe(!0),r(t?.querySelector(`.next-page`)?.disabled).toBe(!1),r(t?.querySelector(`.last-page`)?.disabled).toBe(!1)}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pageIndex: 1,
    onChange: e => {
      console.log("change Event", e);
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10
  },
  play: async ({
    canvasElement
  }) => {
    const pagination = canvasElement.querySelector("jb-pagination");
    const shadowRoot = pagination?.shadowRoot;
    const navigation = shadowRoot?.querySelector("nav");
    expect(navigation?.getAttribute("aria-label")).toBe("Pagination");
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".first-page")?.disabled).toBe(true);
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".prev-page")?.disabled).toBe(true);
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".next-page")?.disabled).toBe(false);
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".last-page")?.disabled).toBe(false);
  }
}`,...o.parameters?.docs?.source}}},s=[`Normal`,`Max`]}))();export{o as Max,a as Normal,s as __namedExportsOrder,i as default};