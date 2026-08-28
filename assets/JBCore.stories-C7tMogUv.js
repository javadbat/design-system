import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-pxpe10JU.js";import{a as i,d as a,f as o,g as s,h as c,i as l,s as u,t as d}from"./jb-core-DiFOdNJT.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{f=t(n(),1),d(),p=r(),{expect:m,userEvent:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/JBCore`,parameters:{layout:`centered`}},v={render:()=>{let e=(0,f.useRef)(null),[t,n]=(0,f.useState)(0),[r,a]=(0,f.useState)(0);return(0,f.useEffect)(()=>{e.current&&i(e.current,`click`,()=>{n(e=>e+1)})},[]),(0,p.jsxs)(`div`,{onClick:()=>a(e=>e+1),children:[(0,p.jsx)(`button`,{ref:e,type:`button`,children:`Dispatch click`}),(0,p.jsxs)(`p`,{children:[`Intercepted: `,(0,p.jsx)(`output`,{"data-testid":`intercepted-count`,children:t})]}),(0,p.jsxs)(`p`,{children:[`Outer handler: `,(0,p.jsx)(`output`,{"data-testid":`bubbled-count`,children:r})]})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`button`);m(t).toBeTruthy(),await h.click(t),await g(()=>{m(e.querySelector(`[data-testid="intercepted-count"]`)?.textContent).toBe(`1`),m(e.querySelector(`[data-testid="bubbled-count"]`)?.textContent).toBe(`0`)})}},y={render:()=>{let[e,t]=(0,f.useState)(`No derived events created yet.`);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>{let e=new MouseEvent(`click`,{bubbles:!0,clientX:12,clientY:24}),n=new KeyboardEvent(`keydown`,{key:`Enter`,code:`Enter`}),r=new InputEvent(`input`,{data:`a`,inputType:`insertText`}),i=new FocusEvent(`focus`),s=a(`demo-click`,e,{detail:7}),l=c(`demo-keydown`,n,{key:` `}),d=o(`demo-input`,r,{data:`b`}),f=u(`demo-focus`,i,{bubbles:!0});t(`${s.type} (${s.detail}), ${l.type} (${l.key}), ${d.type} (${d.data}), ${f.type} (bubbles: ${f.bubbles})`)},children:`Create derived events`}),(0,p.jsx)(`p`,{"data-testid":`event-summary`,children:e})]})},play:async({canvasElement:e})=>{await h.click(e.querySelector(`button`)),await g(()=>{m(e.querySelector(`[data-testid="event-summary"]`)?.textContent).toContain(`demo-click (7)`),m(e.querySelector(`[data-testid="event-summary"]`)?.textContent).toContain(`demo-keydown ( )`),m(e.querySelector(`[data-testid="event-summary"]`)?.textContent).toContain(`demo-input (b)`),m(e.querySelector(`[data-testid="event-summary"]`)?.textContent).toContain(`demo-focus (bubbles: true)`)})}},b={render:()=>{let[e,t]=(0,f.useState)(`Injecting stylesheet…`);return(0,f.useEffect)(()=>{t(`Injected ${l(`.jb-core-style-demo { color: rgb(0, 102, 204); }`).cssRules.length} CSS rule`)},[]),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`jb-core-style-demo`,children:`This text uses the injected stylesheet.`}),(0,p.jsx)(`output`,{"data-testid":`style-status`,children:e})]})},play:async({canvasElement:e})=>{await g(()=>{m(e.querySelector(`[data-testid="style-status"]`)?.textContent).toBe(`Injected 1 CSS rule`)})}},x={render:()=>{let[e,t]=(0,f.useState)([]);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(e=>[...e,s(`demo`)]),children:`Generate ID`}),(0,p.jsx)(`ul`,{"data-testid":`generated-ids`,children:e.map(e=>(0,p.jsx)(`li`,{children:e},e))})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`button`);await h.click(t),await h.click(t);let n=[...e.querySelectorAll(`[data-testid="generated-ids"] li`)].map(e=>e.textContent);m(n).toHaveLength(2),m(n[0]).toMatch(/^demo-/),m(n[1]).toMatch(/^demo-/),m(n[0]).not.toBe(n[1])}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [intercepted, setIntercepted] = useState(0);
    const [bubbled, setBubbled] = useState(0);
    useEffect(() => {
      if (!buttonRef.current) return;
      listenAndSilentEvent(buttonRef.current, 'click', () => {
        setIntercepted(value => value + 1);
      });
    }, []);
    return <div onClick={() => setBubbled(value => value + 1)}>
        <button ref={buttonRef} type="button">Dispatch click</button>
        <p>Intercepted: <output data-testid="intercepted-count">{intercepted}</output></p>
        <p>Outer handler: <output data-testid="bubbled-count">{bubbled}</output></p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector('button');
    expect(button).toBeTruthy();
    await userEvent.click(button!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="intercepted-count"]')?.textContent).toBe('1');
      expect(canvasElement.querySelector('[data-testid="bubbled-count"]')?.textContent).toBe('0');
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [summary, setSummary] = useState('No derived events created yet.');
    const createDerivedEvents = () => {
      const mouseSource = new MouseEvent('click', {
        bubbles: true,
        clientX: 12,
        clientY: 24
      });
      const keyboardSource = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter'
      });
      const inputSource = new InputEvent('input', {
        data: 'a',
        inputType: 'insertText'
      });
      const focusSource = new FocusEvent('focus');
      const mouse = createMouseEvent('demo-click', mouseSource, {
        detail: 7
      });
      const keyboard = createKeyboardEvent('demo-keydown', keyboardSource, {
        key: ' '
      });
      const input = createInputEvent('demo-input', inputSource, {
        data: 'b'
      });
      const focus = createFocusEvent('demo-focus', focusSource, {
        bubbles: true
      });
      setSummary(\`\${mouse.type} (\${mouse.detail}), \${keyboard.type} (\${keyboard.key}), \${input.type} (\${input.data}), \${focus.type} (bubbles: \${focus.bubbles})\`);
    };
    return <div>
        <button type="button" onClick={createDerivedEvents}>Create derived events</button>
        <p data-testid="event-summary">{summary}</p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-click (7)');
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-keydown ( )');
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-input (b)');
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-focus (bubbles: true)');
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [status, setStatus] = useState('Injecting stylesheet…');
    useEffect(() => {
      const stylesheet = injectCss('.jb-core-style-demo { color: rgb(0, 102, 204); }');
      setStatus(\`Injected \${stylesheet.cssRules.length} CSS rule\`);
    }, []);
    return <div>
        <p className="jb-core-style-demo">This text uses the injected stylesheet.</p>
        <output data-testid="style-status">{status}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="style-status"]')?.textContent).toBe('Injected 1 CSS rule');
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [ids, setIds] = useState<string[]>([]);
    return <div>
        <button type="button" onClick={() => setIds(values => [...values, uniqueId('demo')])}>Generate ID</button>
        <ul data-testid="generated-ids">
          {ids.map(id => <li key={id}>{id}</li>)}
        </ul>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector('button')!;
    await userEvent.click(button);
    await userEvent.click(button);
    const ids = [...canvasElement.querySelectorAll('[data-testid="generated-ids"] li')].map(item => item.textContent);
    expect(ids).toHaveLength(2);
    expect(ids[0]).toMatch(/^demo-/);
    expect(ids[1]).toMatch(/^demo-/);
    expect(ids[0]).not.toBe(ids[1]);
  }
}`,...x.parameters?.docs?.source}}},S=[`ListenAndSilentEvent`,`CreateEvents`,`InjectStyle`,`UniqueId`]}))();export{y as CreateEvents,b as InjectStyle,v as ListenAndSilentEvent,x as UniqueId,S as __namedExportsOrder,_ as default};