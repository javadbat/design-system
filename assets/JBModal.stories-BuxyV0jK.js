import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-B75_HK07.js";import{r as a,t as o}from"./react-B85pxjpe.js";import{n as s,t as c}from"./react-CUawlhHK.js";import{r as l,t as u}from"./react-Co15iVYu2.js";import{n as d,t as f}from"./dist-C5DUfNXn.js";var p=t((()=>{}));function m(e,t=0){let n=e.querySelectorAll(`jb-modal`)[t];return b(n).toBeTruthy(),b(n.shadowRoot).toBeTruthy(),n}function h(e){let t=e.shadowRoot?.querySelector(`.modal-background`);return b(t).toBeTruthy(),t}function g(e){let t=e.shadowRoot?.querySelector(`.modal-content-wrapper`);return b(t).toBeTruthy(),t}function _(e){let t=e.shadowRoot?.querySelector(`.modal-content`);return b(t).toBeTruthy(),t}function v(e,t){let n=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(t));return b(n).toBeTruthy(),n}function y(e){let t=e.shadowRoot?.querySelector(`button`);return b(t).toBeTruthy(),t}var b,x=t((()=>{({expect:b}=__STORYBOOK_MODULE_TEST__)})),S=e({ActionTest:()=>F,CloseDetail:()=>z,CustomizedUi:()=>V,DesktopAnimation:()=>L,DesktopEnterAnimation:()=>I,HashIdAndAutoClose:()=>B,MobileView:()=>R,Normal:()=>k,WithHeaderAndFooter:()=>A,WithLargeContent:()=>M,WithOverflowY:()=>P,__namedExportsOrder:()=>H,default:()=>O}),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=t((()=>{C=n(r(),1),u(),o(),f(),p(),c(),x(),w=i(),{expect:T,userEvent:E,waitFor:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/JBModal`,component:l,decorators:[e=>(0,w.jsx)(`div`,{className:`jb-modal-sample-background`,children:(0,w.jsx)(e,{})})]},k={args:{isOpen:!0,children:(0,w.jsx)(`div`,{children:`Hello World`})}},A={render:()=>(0,w.jsxs)(l,{isOpen:!0,children:[(0,w.jsx)(`div`,{slot:`content`,children:`Here we put content of the modal, mostly we put some information here to show to the user`}),(0,w.jsxs)(`div`,{slot:`header`,children:[(0,w.jsx)(`div`,{children:`Title of Header`}),` `,(0,w.jsx)(`div`,{children:`X`})]}),(0,w.jsxs)(`div`,{slot:`footer`,children:[(0,w.jsx)(a,{color:`light`,children:`Cancel`}),(0,w.jsx)(a,{children:`Submit`})]})]})},j=`Test Long String `.repeat(200),M={args:{isOpen:!0,children:(0,w.jsx)(`div`,{className:`modal-test-content`,children:j})},play:async({canvasElement:e})=>{let t=m(e),n=_(t);await D(()=>{let e=n.getBoundingClientRect();T(t.isOpen).toBe(!0),T(e.width).toBeLessThanOrEqual(window.innerWidth),T(e.left).toBeGreaterThanOrEqual(0),T(e.right).toBeLessThanOrEqual(window.innerWidth)})}},N=d.helpers.multiple(()=>({name:d.person.fullName()}),{count:500}),P={args:{isOpen:!0,children:(0,w.jsxs)(C.Fragment,{children:[(0,w.jsx)(`div`,{slot:`header`,children:`Header`}),(0,w.jsx)(`div`,{slot:`footer`,style:{justifyContent:`start`},children:(0,w.jsx)(s,{label:`I Read and Accept All People on the list`})}),(0,w.jsx)(`div`,{slot:`content`,children:N.map(e=>(0,w.jsx)(`div`,{children:e.name},e.name))})]})},play:async({canvasElement:e})=>{let t=m(e),n=_(t);await D(()=>{let e=n.getBoundingClientRect();T(t.isOpen).toBe(!0),T(e.height).toBeLessThanOrEqual(window.innerHeight),T(e.top).toBeGreaterThanOrEqual(0),T(e.bottom).toBeLessThanOrEqual(window.innerHeight),T(getComputedStyle(n).maxHeight).not.toBe(`none`)})}},F={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsx)(`div`,{children:(0,w.jsxs)(`div`,{className:`button-wrapper`,children:[(0,w.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,w.jsx)(l,{isOpen:e,onClose:()=>{t(!1)},children:(0,w.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})})},play:async({canvasElement:e})=>{let t=m(e),n=v(e,`Open Modal`);T(t.isOpen).toBe(!1),await E.click(y(n)),await D(()=>{T(t.isOpen).toBe(!0),T(getComputedStyle(t).display).toBe(`block`),T(e).toHaveTextContent(`Hello World`)})}},I={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`button-wrapper`,children:[(0,w.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open enter animated modal`}),(0,w.jsxs)(l,{className:`desktop-enter-animation-modal`,isOpen:e,onClose:()=>t(!1),children:[(0,w.jsx)(`div`,{slot:`header`,children:(0,w.jsx)(`span`,{children:`Enter animation`})}),(0,w.jsx)(`div`,{slot:`content`,className:`starting-style-demo-content`,children:`This example only animates the modal while it opens.`}),(0,w.jsx)(`div`,{slot:`footer`,children:(0,w.jsx)(a,{color:`light`,onClick:()=>t(!1),children:`Close`})})]})]})},parameters:{viewport:{defaultViewport:`responsive`}},play:async({canvasElement:e})=>{let t=m(e),n=v(e,`Open enter animated modal`),r=_(t);await E.click(y(n)),await D(()=>{T(t.isOpen).toBe(!0),T(r.getBoundingClientRect().width).toBeGreaterThan(0),T(e).toHaveTextContent(`This example only animates the modal while it opens.`)})}},L={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`button-wrapper`,children:[(0,w.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open animated modal`}),(0,w.jsxs)(l,{className:`desktop-starting-style-modal`,isOpen:e,onClose:()=>t(!1),children:[(0,w.jsx)(`div`,{slot:`header`,children:(0,w.jsx)(`span`,{children:`Desktop animation`})}),(0,w.jsxs)(`div`,{slot:`content`,className:`starting-style-demo-content`,children:[`This story uses CSS `,(0,w.jsx)(`code`,{children:`@starting-style`}),` with the modal shadow parts to animate the backdrop and content box as soon as the modal enters the open state on desktop.`]}),(0,w.jsxs)(`div`,{slot:`footer`,children:[(0,w.jsx)(a,{color:`light`,onClick:()=>t(!1),children:`Close`}),(0,w.jsx)(a,{onClick:()=>t(!1),children:`Done`})]})]})]})},parameters:{viewport:{defaultViewport:`responsive`}},play:async({canvasElement:e})=>{let t=m(e),n=v(e,`Open animated modal`),r=v(e,`Done`);await E.click(y(n)),await D(()=>{T(t.isOpen).toBe(!0)}),await E.click(y(r)),await D(()=>{T(t.isOpen).toBe(!1)})}},R={args:{isOpen:!0,children:(0,w.jsx)(`div`,{className:`modal-test-content`,children:`Mobile View`})},parameters:{viewport:{defaultViewport:`mobile2`}},play:async({canvasElement:e})=>{let t=m(e),n=g(t),r=_(t);await D(()=>{let e=getComputedStyle(n),i=r.getBoundingClientRect();T(t.isOpen).toBe(!0),T(e.alignItems).toBe(`flex-end`),T(Math.abs(i.bottom-window.innerHeight)).toBeLessThanOrEqual(2),T(i.width).toBeLessThanOrEqual(window.innerWidth)})}},z={render:e=>{let[t,n]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`button-wrapper`,children:[(0,w.jsx)(a,{color:`light`,onClick:e=>n(!0),children:`Open Modal`}),(0,w.jsx)(l,{isOpen:t,onClose:e=>{console.log(`modal close event type:`,e.detail.eventType),n(!1)},onUrlOpen:()=>n(!0),id:`MyModal`,children:(0,w.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,w.jsxs)(`div`,{children:["`onClose` event of the modal called for 2 reason:",(0,w.jsxs)(`ul`,{children:[(0,w.jsx)(`li`,{children:`when user click on modal background`}),(0,w.jsx)(`li`,{children:`when user hit back button in android or back button of the browser`})]})]}),(0,w.jsx)(`p`,{children:"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"}),(0,w.jsxs)(`p`,{children:["to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",(0,w.jsx)(`a`,{rel:`noopener`,target:`_blank`,href:`./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story`,children:`isolated mode`}),` then hit back button`]}),(0,w.jsx)(`q`,{children:"back button scenario only works if your modal has an `id` attribute"}),(0,w.jsx)(a,{onClick:()=>{n(!1)},children:`Close Modal`})]})})]})},play:async({canvasElement:e})=>{let t=m(e),n=v(e,`Open Modal`),r=h(t),i=``;t.addEventListener(`close`,e=>{i=e.detail.eventType}),await E.click(y(n)),await D(()=>{T(t.isOpen).toBe(!0)}),await E.click(r),await D(()=>{T(i).toBe(`BACKGROUND_CLICK`),T(t.isOpen).toBe(!1)})}},B={render:()=>{let e=(0,C.useRef)(null),[t,n]=(0,C.useState)(!1),[r,i]=(0,C.useState)(!0),[o,s]=(0,C.useState)(`No close event yet`),[c,u]=(0,C.useState)(window.location.hash||`(empty)`),d=`HashLinkedModal`;return(0,C.useEffect)(()=>{e.current&&(e.current.config.autoCloseOnBackgroundClick=r)},[r]),(0,w.jsxs)(`div`,{className:`button-wrapper`,style:{alignItems:`flex-start`},children:[(0,w.jsx)(a,{color:`light`,onClick:()=>{n(!0),window.setTimeout(()=>u(window.location.hash||`(empty)`))},children:`Open modal and push #HashLinkedModal`}),(0,w.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:r,onChange:e=>i(e.currentTarget.checked)}),`autoCloseOnBackgroundClick`]}),(0,w.jsx)(`a`,{href:`./iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story#${d}`,target:`_blank`,rel:`noopener`,children:`Open isolated story with #HashLinkedModal`}),(0,w.jsxs)(`div`,{children:[`Current hash: `,c]}),(0,w.jsxs)(`div`,{children:[`Last close event: `,o]}),(0,w.jsx)(l,{ref:e,id:d,isOpen:t,onUrlOpen:()=>n(!0),onClose:e=>{let t=e.detail.eventType;s(t),window.setTimeout(()=>u(window.location.hash||`(empty)`)),r&&n(!1)},children:(0,w.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,w.jsx)(`h3`,{children:`Hash linked modal`}),(0,w.jsxs)(`p`,{children:[`Opening this modal writes `,(0,w.jsx)(`code`,{children:`#HashLinkedModal`}),` to the URL.`]}),(0,w.jsx)(`p`,{children:`Click the backdrop or press browser back to see the close event detail.`}),(0,w.jsx)(`p`,{children:`When auto close is enabled, the demo also synchronizes React state back to closed.`}),(0,w.jsx)(a,{onClick:()=>n(!1),children:`Close modal`})]})})]})},play:async({canvasElement:e})=>{let t=`${window.location.pathname}${window.location.search}${window.location.hash}`,n=`${window.location.pathname}${window.location.search}`,r=window.history.go.bind(window.history),i=m(e),a=v(e,`Open modal and push #HashLinkedModal`),o=h(i);try{window.history.go=(()=>{window.history.replaceState({},``,n)}),await E.click(y(a)),await D(()=>{T(i.isOpen).toBe(!0),T(window.location.hash).toBe(`#HashLinkedModal`),T(e).toHaveTextContent(`Current hash: #HashLinkedModal`)}),await E.click(o),await D(()=>{T(i.isOpen).toBe(!1),T(e).toHaveTextContent(`Last close event: BACKGROUND_CLICK`)})}finally{window.history.go=r,window.history.replaceState({},``,t)}}},V={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h3`,{children:`JBModal With a Little customization`}),(0,w.jsxs)(`div`,{className:`button-wrapper`,children:[(0,w.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,w.jsx)(l,{className:`customized-look-modal`,isOpen:e,onClose:()=>{t(!1)},children:(0,w.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const contentBox = getContentBox(modal);
    await waitFor(() => {
      const boxRect = contentBox.getBoundingClientRect();
      expect(modal.isOpen).toBe(true);
      expect(boxRect.width).toBeLessThanOrEqual(window.innerWidth);
      expect(boxRect.left).toBeGreaterThanOrEqual(0);
      expect(boxRect.right).toBeLessThanOrEqual(window.innerWidth);
    });
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <Fragment>
      <div slot="header">Header</div>
      <div slot="footer" style={{
        justifyContent: "start"
      }}><JBCheckbox label="I Read and Accept All People on the list"></JBCheckbox></div>
      <div slot='content'>
        {users.map(u => {
          return <div key={u.name}>{u.name}</div>;
        })}
      </div>
    </Fragment>
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const contentBox = getContentBox(modal);
    await waitFor(() => {
      const boxRect = contentBox.getBoundingClientRect();
      expect(modal.isOpen).toBe(true);
      expect(boxRect.height).toBeLessThanOrEqual(window.innerHeight);
      expect(boxRect.top).toBeGreaterThanOrEqual(0);
      expect(boxRect.bottom).toBeLessThanOrEqual(window.innerHeight);
      expect(getComputedStyle(contentBox).maxHeight).not.toBe('none');
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <div className='button-wrapper'>
          <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
          <JBModal isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }}>
            <div className='modal-test-content'>Hello World</div>
          </JBModal>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const openButton = getJBButton(canvasElement, 'Open Modal');
    expect(modal.isOpen).toBe(false);
    await userEvent.click(getJBButtonNativeButton(openButton));
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(getComputedStyle(modal).display).toBe('block');
      expect(canvasElement).toHaveTextContent('Hello World');
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={() => setIsOpen(true)}>Open enter animated modal</JBButton>
        <JBModal className='desktop-enter-animation-modal' isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div slot="header">
            <span>Enter animation</span>
          </div>
          <div slot="content" className='starting-style-demo-content'>
            This example only animates the modal while it opens.
          </div>
          <div slot="footer">
            <JBButton color='light' onClick={() => setIsOpen(false)}>Close</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const openButton = getJBButton(canvasElement, 'Open enter animated modal');
    const contentBox = getContentBox(modal);
    await userEvent.click(getJBButtonNativeButton(openButton));
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(contentBox.getBoundingClientRect().width).toBeGreaterThan(0);
      expect(canvasElement).toHaveTextContent('This example only animates the modal while it opens.');
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={() => setIsOpen(true)}>Open animated modal</JBButton>
        <JBModal className='desktop-starting-style-modal' isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div slot="header">
            <span>Desktop animation</span>
          </div>
          <div slot="content" className='starting-style-demo-content'>
            This story uses CSS <code>@starting-style</code> with the modal shadow parts to animate
            the backdrop and content box as soon as the modal enters the open state on desktop.
          </div>
          <div slot="footer">
            <JBButton color='light' onClick={() => setIsOpen(false)}>Close</JBButton>
            <JBButton onClick={() => setIsOpen(false)}>Done</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const openButton = getJBButton(canvasElement, 'Open animated modal');
    const doneButton = getJBButton(canvasElement, 'Done');
    await userEvent.click(getJBButtonNativeButton(openButton));
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
    });
    await userEvent.click(getJBButtonNativeButton(doneButton));
    await waitFor(() => {
      expect(modal.isOpen).toBe(false);
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const contentWrapper = getContentWrapper(modal);
    const contentBox = getContentBox(modal);
    await waitFor(() => {
      const wrapperStyle = getComputedStyle(contentWrapper);
      const boxRect = contentBox.getBoundingClientRect();
      expect(modal.isOpen).toBe(true);
      expect(wrapperStyle.alignItems).toBe('flex-end');
      expect(Math.abs(boxRect.bottom - window.innerHeight)).toBeLessThanOrEqual(2);
      expect(boxRect.width).toBeLessThanOrEqual(window.innerWidth);
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: story => {
    const [isOpen, setIsOpen] = useState(false);
    const onModalClose = (e: JBModalEventType<CustomEvent<any>>) => {
      console.log("modal close event type:", e.detail.eventType);
      setIsOpen(false);
    };
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={e => setIsOpen(true)}>Open Modal</JBButton>
        <JBModal isOpen={isOpen} onClose={onModalClose} onUrlOpen={() => setIsOpen(true)} id="MyModal">
          <div className='modal-test-content' style={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
            <div>
              \`onClose\` event of the modal called for 2 reason:
              <ul>
                <li>when user click on modal background</li>
                <li>when user hit back button in android or back button of the browser</li>
              </ul>
            </div>
            <p>to simulate the first one you just have to click on modal background and you can see developer tools console that shows \`BACKGROUND_CLICK\`</p>
            <p>to experience the second scenario with back button since we are in storybook and storybook load stories in a \`iframe\` tag you should open story in <a rel="noopener" target='_blank' href='./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story'>isolated mode</a> then hit back button</p>
            <q>back button scenario only works if your modal has an \`id\` attribute</q>
            <JBButton onClick={() => {
            setIsOpen(false);
          }}>Close Modal</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const openButton = getJBButton(canvasElement, 'Open Modal');
    const background = getBackground(modal);
    let closeEventType = '';
    modal.addEventListener('close', event => {
      closeEventType = (event as JBModalEventType<CustomEvent>).detail.eventType;
    });
    await userEvent.click(getJBButtonNativeButton(openButton));
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
    });
    await userEvent.click(background);
    await waitFor(() => {
      expect(closeEventType).toBe('BACKGROUND_CLICK');
      expect(modal.isOpen).toBe(false);
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const modalRef = useRef<JBModalWebComponent>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [autoClose, setAutoClose] = useState(true);
    const [lastEvent, setLastEvent] = useState("No close event yet");
    const [currentHash, setCurrentHash] = useState(window.location.hash || "(empty)");
    const modalId = "HashLinkedModal";
    useEffect(() => {
      if (modalRef.current) {
        modalRef.current.config.autoCloseOnBackgroundClick = autoClose;
      }
    }, [autoClose]);
    const onModalClose = (e: JBModalEventType<CustomEvent>) => {
      const eventType = e.detail.eventType;
      setLastEvent(eventType);
      window.setTimeout(() => setCurrentHash(window.location.hash || "(empty)"));
      if (autoClose) {
        setIsOpen(false);
      }
    };
    const openModal = () => {
      setIsOpen(true);
      window.setTimeout(() => setCurrentHash(window.location.hash || "(empty)"));
    };
    return <div className='button-wrapper' style={{
      alignItems: 'flex-start'
    }}>
        <JBButton color='light' onClick={openModal}>Open modal and push #HashLinkedModal</JBButton>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <input type="checkbox" checked={autoClose} onChange={event => setAutoClose(event.currentTarget.checked)} />
          autoCloseOnBackgroundClick
        </label>
        <a href={\`./iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story#\${modalId}\`} target="_blank" rel="noopener">Open isolated story with #HashLinkedModal</a>
        <div>Current hash: {currentHash}</div>
        <div>Last close event: {lastEvent}</div>
        <JBModal ref={modalRef} id={modalId} isOpen={isOpen} onUrlOpen={() => setIsOpen(true)} onClose={onModalClose}>
          <div className='modal-test-content' style={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
            <h3>Hash linked modal</h3>
            <p>Opening this modal writes <code>#HashLinkedModal</code> to the URL.</p>
            <p>Click the backdrop or press browser back to see the close event detail.</p>
            <p>When auto close is enabled, the demo also synchronizes React state back to closed.</p>
            <JBButton onClick={() => setIsOpen(false)}>Close modal</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const originalUrl = \`\${window.location.pathname}\${window.location.search}\${window.location.hash}\`;
    const urlWithoutHash = \`\${window.location.pathname}\${window.location.search}\`;
    const originalHistoryGo = window.history.go.bind(window.history);
    const modal = getModal(canvasElement);
    const openButton = getJBButton(canvasElement, 'Open modal and push #HashLinkedModal');
    const background = getBackground(modal);
    try {
      window.history.go = (() => {
        window.history.replaceState({}, '', urlWithoutHash);
      }) as typeof window.history.go;
      await userEvent.click(getJBButtonNativeButton(openButton));
      await waitFor(() => {
        expect(modal.isOpen).toBe(true);
        expect(window.location.hash).toBe('#HashLinkedModal');
        expect(canvasElement).toHaveTextContent('Current hash: #HashLinkedModal');
      });
      await userEvent.click(background);
      await waitFor(() => {
        expect(modal.isOpen).toBe(false);
        expect(canvasElement).toHaveTextContent('Last close event: BACKGROUND_CLICK');
      });
    } finally {
      window.history.go = originalHistoryGo;
      window.history.replaceState({}, '', originalUrl);
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <h3>JBModal With a Little customization</h3>
        <div className='button-wrapper'>
          <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
          <JBModal className='customized-look-modal' isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }}>
            <div className='modal-test-content'>Hello World</div>
          </JBModal>
        </div>
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H=[`Normal`,`WithHeaderAndFooter`,`WithLargeContent`,`WithOverflowY`,`ActionTest`,`DesktopEnterAnimation`,`DesktopAnimation`,`MobileView`,`CloseDetail`,`HashIdAndAutoClose`,`CustomizedUi`]}));U();export{F as ActionTest,z as CloseDetail,V as CustomizedUi,L as DesktopAnimation,I as DesktopEnterAnimation,B as HashIdAndAutoClose,R as MobileView,k as Normal,A as WithHeaderAndFooter,M as WithLargeContent,P as WithOverflowY,H as __namedExportsOrder,O as default,U as n,S as t};