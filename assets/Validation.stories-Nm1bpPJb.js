import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-BJZP98JJ.js";import{n as i,t as a}from"./jb-validation-BBE6zJrt.js";function o({scenario:e}){let[t,n]=(0,s.useState)(e===`manual`?`server-value`:`ab`),r=(0,s.useRef)(t);r.current=t;let[a,o]=(0,s.useState)(null),[l,u]=(0,s.useState)(``),d=(0,s.useMemo)(()=>new i({getValue:()=>r.current,getValueString:e=>e,showValidationError:({message:e})=>u(e),clearValidationError:()=>u(``),setValidationResult:e=>o(e)}),[]);return(0,s.useEffect)(()=>{e===`sync`&&(d.list=[{validator:/.{3}/,message:`Use at least 3 characters.`}]),e===`async`&&(d.list=[{validator:async e=>e===`available`||`That value is already taken.`,message:`That value is already taken.`,defer:!0}]),e===`getter`&&d.addValidationListGetter(()=>[{validator:e=>e.startsWith(`JB`),message:`Value must start with JB.`}]),(e===`manual`||e===`reset`)&&(d.list=[{message:`The server rejected this value.`}])},[d,e]),(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`0.75rem`,maxWidth:`28rem`},children:[(0,c.jsxs)(`label`,{children:[`Value`,(0,c.jsx)(`input`,{"aria-label":`Value`,value:t,onChange:e=>n(e.target.value)})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[(0,c.jsx)(`button`,{type:`button`,onClick:async()=>{e===`sync`?d.checkValiditySync({showError:!0}):await d.checkValidity({showError:!0})},children:`Check validation`}),e===`reset`&&(0,c.jsx)(`button`,{type:`button`,onClick:()=>{d.reset(),o(null)},children:`Reset`})]}),(0,c.jsx)(`output`,{"aria-live":`polite`,children:a===null?`Not checked`:a.isAllValid?`Valid`:`Invalid`}),l&&(0,c.jsx)(`div`,{role:`alert`,children:l})]})}var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{s=t(n(),1),a(),c=r(),{expect:l,userEvent:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/JBValidation`,component:o,parameters:{layout:`centered`},argTypes:{scenario:{control:`select`,options:[`sync`,`async`,`getter`,`manual`,`reset`]}}},p={args:{scenario:`sync`},play:async({canvasElement:e})=>{await u.click(e.querySelector(`button`)),await d(()=>l(e.querySelector(`output`)).toHaveTextContent(`Invalid`))}},m={args:{scenario:`async`},play:async({canvasElement:e})=>{let t=e.querySelector(`input`);await u.clear(t),await u.type(t,`available`),await u.click(e.querySelector(`button`)),await d(()=>l(e.querySelector(`output`)).toHaveTextContent(`Valid`))}},h={args:{scenario:`getter`},play:async({canvasElement:e})=>{await u.click(e.querySelector(`button`)),await d(()=>l(e.querySelector(`output`)).toHaveTextContent(`Invalid`))}},g={args:{scenario:`manual`},play:async({canvasElement:e})=>{await u.click(e.querySelector(`button`)),await d(()=>l(e.querySelector(`[role='alert']`)).toHaveTextContent(`server rejected`))}},_={args:{scenario:`reset`},play:async({canvasElement:e})=>{let t=e.querySelectorAll(`button`);await u.click(t[0]),await d(()=>l(e.querySelector(`output`)).toHaveTextContent(`Invalid`)),await u.click(t[1]),await d(()=>l(e.querySelector(`output`)).toHaveTextContent(`Not checked`))}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "sync"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector("button")!);
    await waitFor(() => expect(canvasElement.querySelector("output")).toHaveTextContent("Invalid"));
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "async"
  },
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>("input")!;
    await userEvent.clear(input);
    await userEvent.type(input, "available");
    await userEvent.click(canvasElement.querySelector("button")!);
    await waitFor(() => expect(canvasElement.querySelector("output")).toHaveTextContent("Valid"));
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "getter"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector("button")!);
    await waitFor(() => expect(canvasElement.querySelector("output")).toHaveTextContent("Invalid"));
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "manual"
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector("button")!);
    await waitFor(() => expect(canvasElement.querySelector("[role='alert']")).toHaveTextContent("server rejected"));
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "reset"
  },
  play: async ({
    canvasElement
  }) => {
    const buttons = canvasElement.querySelectorAll("button");
    await userEvent.click(buttons[0]);
    await waitFor(() => expect(canvasElement.querySelector("output")).toHaveTextContent("Invalid"));
    await userEvent.click(buttons[1]);
    await waitFor(() => expect(canvasElement.querySelector("output")).toHaveTextContent("Not checked"));
  }
}`,..._.parameters?.docs?.source}}},v=[`SyncValidation`,`AsyncValidation`,`DynamicValidationGetter`,`ManualError`,`Reset`]}))();export{m as AsyncValidation,h as DynamicValidationGetter,g as ManualError,_ as Reset,p as SyncValidation,v as __namedExportsOrder,f as default};