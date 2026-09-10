import{i as e}from"./preload-helper-CT_b8DTk.js";import{t,u as n}from"./react-if7N8eoO.js";var r,i,a,o,s,c;e((()=>{t(),{expect:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/JBGrid/Pagination`,component:n},o={args:{pageIndex:1,onChange:e=>{console.log(`change Event`,e)}}},s={args:{max:10},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-pagination`);await i(()=>r(t?.max).toBe(10));let n=t?.shadowRoot,a=n?.querySelector(`nav`);r(a?.getAttribute(`aria-label`)).toBe(`Pagination`),r(n?.querySelector(`.first-page`)?.disabled).toBe(!0),r(n?.querySelector(`.prev-page`)?.disabled).toBe(!0),r(n?.querySelector(`.next-page`)?.disabled).toBe(!1),r(n?.querySelector(`.last-page`)?.disabled).toBe(!1)}},c=[`Normal`,`Max`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pageIndex: 1,
    onChange: e => {
      console.log("change Event", e);
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10
  },
  play: async ({
    canvasElement
  }) => {
    const pagination = canvasElement.querySelector<JBPaginationWebComponent>("jb-pagination");
    await waitFor(() => expect(pagination?.max).toBe(10));
    const shadowRoot = pagination?.shadowRoot;
    const navigation = shadowRoot?.querySelector("nav");
    expect(navigation?.getAttribute("aria-label")).toBe("Pagination");
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".first-page")?.disabled).toBe(true);
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".prev-page")?.disabled).toBe(true);
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".next-page")?.disabled).toBe(false);
    expect(shadowRoot?.querySelector<HTMLButtonElement>(".last-page")?.disabled).toBe(false);
  }
}`,...s.parameters?.docs?.source}}}}))();export{s as Max,o as Normal,c as __namedExportsOrder,a as default};