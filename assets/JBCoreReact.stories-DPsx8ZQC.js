import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-DRUIHCJR.js";import{i,r as a,t as o}from"./react-D4fu2urf.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{s=t(n(),1),o(),c=r(),{expect:l,userEvent:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/JBCore/React`,parameters:{layout:`centered`}},p={render:()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(0);return a(e,`click`,()=>n(e=>e+1)),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`button`,{ref:e,type:`button`,children:`Dispatch event`}),(0,c.jsxs)(`p`,{children:[`Events received: `,(0,c.jsx)(`output`,{"data-testid":`event-count`,children:t})]})]})},play:async({canvasElement:e})=>{await u.click(e.querySelector(`button`)),await d(()=>{l(e.querySelector(`[data-testid="event-count"]`)?.textContent).toBe(`1`)})}},m=class{constructor(e){this.value=e}increment(){this.value+=1}},h={render:()=>{let e=i(m,[1]),[,t]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`button`,{type:`button`,onClick:()=>{e.increment(),t(e=>e+1)},children:`Increment instance`}),(0,c.jsxs)(`p`,{children:[`Instance value: `,(0,c.jsx)(`output`,{"data-testid":`instance-value`,children:e.value})]})]})},play:async({canvasElement:e})=>{await u.click(e.querySelector(`button`)),await d(()=>{l(e.querySelector(`[data-testid="instance-value"]`)?.textContent).toBe(`2`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [events, setEvents] = useState(0);
    useEvent(buttonRef, 'click', () => setEvents(value => value + 1));
    return <div>
        <button ref={buttonRef} type="button">Dispatch event</button>
        <p>Events received: <output data-testid="event-count">{events}</output></p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="event-count"]')?.textContent).toBe('1');
    });
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const counter = useInstance(Counter, [1]);
    const [, refresh] = useState(0);
    return <div>
        <button type="button" onClick={() => {
        counter.increment();
        refresh(value => value + 1);
      }}>Increment instance</button>
        <p>Instance value: <output data-testid="instance-value">{counter.value}</output></p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="instance-value"]')?.textContent).toBe('2');
    });
  }
}`,...h.parameters?.docs?.source}}},g=[`UseEvent`,`UseInstance`]}))();export{p as UseEvent,h as UseInstance,g as __namedExportsOrder,f as default};