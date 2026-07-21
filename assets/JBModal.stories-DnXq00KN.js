import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DyWnM0Wh.js";import{r as a,t as o}from"./react-BGH4lIeG.js";import{n as s,t as c}from"./react-BP_UaANx.js";import{i as l,n as u,o as d,t as f}from"./react-pEtBxZoI2.js";import{n as p,t as m}from"./dist-C5DUfNXn.js";var h=t((()=>{}));function g(e,t=0){let n=e.querySelectorAll(`jb-modal`)[t];return S(n).toBeTruthy(),S(n.shadowRoot).toBeTruthy(),n}function _(e){let t=e.shadowRoot?.querySelector(`.modal-background`);return S(t).toBeTruthy(),t}function v(e){let t=e.shadowRoot?.querySelector(`.modal-content-wrapper`);return S(t).toBeTruthy(),t}function y(e){let t=e.shadowRoot?.querySelector(`.modal-content`);return S(t).toBeTruthy(),t}function b(e,t){let n=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(t));return S(n).toBeTruthy(),n}function x(e){let t=e.shadowRoot?.querySelector(`button`);return S(t).toBeTruthy(),t}var S,C=t((()=>{({expect:S}=__STORYBOOK_MODULE_TEST__)})),w=e({AccessibilityBehavior:()=>R,ActionTest:()=>L,CancelableCloseRequest:()=>z,CloseDetail:()=>G,CustomizedUi:()=>q,DesktopAnimation:()=>U,DesktopEnterAnimation:()=>H,HashIdAndAutoClose:()=>K,MobileView:()=>W,NestedModalAccessibility:()=>B,NestedModalHistory:()=>V,Normal:()=>j,WithHeaderAndFooter:()=>M,WithLargeContent:()=>P,WithOverflowY:()=>I,__namedExportsOrder:()=>J,default:()=>A}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y=t((()=>{T=n(r(),1),f(),l(),o(),m(),h(),c(),C(),E=i(),{expect:D,userEvent:O,waitFor:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/JBModal`,component:u,decorators:[e=>(0,E.jsx)(`div`,{className:`jb-modal-sample-background`,children:(0,E.jsx)(e,{})})]},j={args:{isOpen:!0,children:(0,E.jsx)(`div`,{children:`Hello World`})}},M={render:()=>(0,E.jsxs)(u,{isOpen:!0,children:[(0,E.jsx)(`div`,{slot:`content`,children:`Here we put content of the modal, mostly we put some information here to show to the user`}),(0,E.jsxs)(`div`,{slot:`header`,children:[(0,E.jsx)(`div`,{children:`Title of Header`}),` `,(0,E.jsx)(`div`,{children:`X`})]}),(0,E.jsxs)(`div`,{slot:`footer`,children:[(0,E.jsx)(a,{color:`light`,children:`Cancel`}),(0,E.jsx)(a,{children:`Submit`})]})]})},N=`Test Long String `.repeat(200),P={args:{isOpen:!0,children:(0,E.jsx)(`div`,{className:`modal-test-content`,children:N})},play:async({canvasElement:e})=>{let t=g(e),n=y(t);await k(()=>{let e=n.getBoundingClientRect();D(t.isOpen).toBe(!0),D(e.width).toBeLessThanOrEqual(window.innerWidth),D(e.left).toBeGreaterThanOrEqual(0),D(e.right).toBeLessThanOrEqual(window.innerWidth)})}},F=p.helpers.multiple(()=>({name:p.person.fullName()}),{count:500}),I={args:{isOpen:!0,children:(0,E.jsxs)(T.Fragment,{children:[(0,E.jsx)(`div`,{slot:`header`,children:`Header`}),(0,E.jsx)(`div`,{slot:`footer`,style:{justifyContent:`start`},children:(0,E.jsx)(s,{label:`I Read and Accept All People on the list`})}),(0,E.jsx)(`div`,{slot:`content`,children:F.map(e=>(0,E.jsx)(`div`,{children:e.name},e.name))})]})},play:async({canvasElement:e})=>{let t=g(e),n=y(t);await k(()=>{let e=n.getBoundingClientRect();D(t.isOpen).toBe(!0),D(e.height).toBeLessThanOrEqual(window.innerHeight),D(e.top).toBeGreaterThanOrEqual(0),D(e.bottom).toBeLessThanOrEqual(window.innerHeight),D(getComputedStyle(n).maxHeight).not.toBe(`none`)})}},L={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsx)(`div`,{children:(0,E.jsxs)(`div`,{className:`button-wrapper`,children:[(0,E.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,E.jsx)(u,{isOpen:e,onClose:()=>{t(!1)},children:(0,E.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})})},play:async({canvasElement:e})=>{let t=g(e),n=b(e,`Open Modal`);D(t.isOpen).toBe(!1),await O.click(x(n)),await k(()=>{D(t.isOpen).toBe(!0),D(getComputedStyle(t).display).toBe(`block`),D(e).toHaveTextContent(`Hello World`)})}},R={render:()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`none`);return(0,E.jsxs)(`div`,{className:`button-wrapper`,children:[(0,E.jsx)(`button`,{type:`button`,"data-testid":`a11y-modal-opener`,onClick:()=>t(!0),children:`Open accessible modal`}),(0,E.jsxs)(`div`,{children:[`Last close type: `,n]}),(0,E.jsx)(u,{isOpen:e,label:`Edit account`,description:`Update your public account information`,onClose:e=>{r(e.detail.eventType),t(!1)},children:(0,E.jsxs)(`div`,{slot:`content`,children:[(0,E.jsxs)(`label`,{children:[`Display name`,(0,E.jsx)(`input`,{"data-testid":`initial-focus`,autoFocus:!0})]}),(0,E.jsx)(`button`,{type:`button`,"data-testid":`last-modal-control`,children:`Save changes`})]})})]})},play:async({canvasElement:e})=>{let t=g(e),n=e.querySelector(`[data-testid="a11y-modal-opener"]`),r=e.querySelector(`[data-testid="initial-focus"]`),i=e.querySelector(`[data-testid="last-modal-control"]`);D(t.inert).toBe(!0),await O.click(n),await k(()=>{D(t.isOpen).toBe(!0),D(t.inert).toBe(!1),D(document.activeElement).toBe(r)}),i.focus(),await O.tab(),D(document.activeElement).toBe(r),r.focus(),await O.tab({shift:!0}),D(document.activeElement).toBe(i),await O.keyboard(`{Escape}`),await k(()=>{D(t.isOpen).toBe(!1),D(t.inert).toBe(!0),D(document.activeElement).toBe(n),D(e).toHaveTextContent(`Last close type: ESCAPE_KEY`)})}},z={render:()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`none`);return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`button`,{type:`button`,"data-testid":`cancelable-opener`,onClick:()=>t(!0),children:`Open guarded modal`}),(0,E.jsxs)(`div`,{children:[`Rejected close type: `,n]}),(0,E.jsx)(u,{label:`Unsaved profile`,isOpen:e,autoCloseOnBackgroundClick:!0,onClose:e=>{e.preventDefault(),r(e.detail.eventType)},children:(0,E.jsx)(`button`,{type:`button`,children:`Keep editing`})})]})},play:async({canvasElement:e})=>{let t=g(e),n=e.querySelector(`[data-testid="cancelable-opener"]`);await O.click(n),await k(()=>D(t.isOpen).toBe(!0)),await O.keyboard(`{Escape}`),await k(()=>{D(t.isOpen).toBe(!0),D(e).toHaveTextContent(`Rejected close type: ESCAPE_KEY`)}),await O.click(_(t)),await k(()=>{D(t.isOpen).toBe(!0),D(e).toHaveTextContent(`Rejected close type: BACKGROUND_CLICK`)})}},B={render:()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`button`,{type:`button`,"data-testid":`parent-opener`,onClick:()=>t(!0),children:`Open parent modal`}),(0,E.jsx)(u,{label:`Parent dialog`,isOpen:e,onClose:()=>t(!1),children:(0,E.jsxs)(`div`,{slot:`content`,children:[(0,E.jsx)(`button`,{type:`button`,"data-testid":`child-opener`,onClick:()=>r(!0),children:`Open child modal`}),(0,E.jsx)(u,{label:`Child dialog`,isOpen:n,onClose:()=>r(!1),children:(0,E.jsxs)(`div`,{slot:`content`,children:[(0,E.jsx)(`input`,{"data-testid":`child-initial-focus`,autoFocus:!0,"aria-label":`Child value`}),(0,E.jsx)(`button`,{type:`button`,children:`Confirm child`})]})}),(0,E.jsx)(`button`,{type:`button`,children:`Parent action`})]})})]})},play:async({canvasElement:e})=>{let t=g(e,0),n=g(e,1),r=e.querySelector(`[data-testid="parent-opener"]`),i=e.querySelector(`[data-testid="child-opener"]`),a=e.querySelector(`[data-testid="child-initial-focus"]`);await O.click(r),await k(()=>{D(d.isTopmostModal(t)).toBe(!0),D(document.activeElement).toBe(i)}),await O.click(i),await k(()=>{D(d.isTopmostModal(n)).toBe(!0),D(document.activeElement).toBe(a)}),await O.keyboard(`{Escape}`),await k(()=>{D(n.isOpen).toBe(!1),D(t.isOpen).toBe(!0),D(d.isTopmostModal(t)).toBe(!0),D(document.activeElement).toBe(i)}),await O.keyboard(`{Escape}`),await k(()=>{D(t.isOpen).toBe(!1),D(document.activeElement).toBe(r)})}},V={render:()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!1),[i,a]=(0,T.useState)(`none`),o=(e,t)=>{a(e.detail.eventType),t(!1)};return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`button`,{type:`button`,"data-testid":`history-parent-opener`,onClick:()=>t(!0),children:`Open history parent`}),(0,E.jsxs)(`div`,{children:[`Last history close type: `,i]}),(0,E.jsx)(u,{id:`history-parent-modal`,label:`History parent`,isOpen:e,onClose:e=>o(e,t),children:(0,E.jsxs)(`div`,{slot:`content`,children:[(0,E.jsx)(`button`,{type:`button`,"data-testid":`history-child-opener`,onClick:()=>r(!0),children:`Open history child`}),(0,E.jsx)(u,{id:`history-child-modal`,label:`History child`,isOpen:n,onClose:e=>o(e,r),children:(0,E.jsx)(`button`,{type:`button`,children:`Child action`})})]})})]})},play:async({canvasElement:e})=>{let t=`${window.location.pathname}${window.location.search}${window.location.hash}`,n=window.history.state,r=`${window.location.pathname}${window.location.search}`,i=g(e,0),a=g(e,1),o=e.querySelector(`[data-testid="history-parent-opener"]`),s=e.querySelector(`[data-testid="history-child-opener"]`);try{await O.click(o),await k(()=>D(window.location.hash).toBe(`#history-parent-modal`)),await O.click(s),await k(()=>D(window.location.hash).toBe(`#history-child-modal`)),window.history.replaceState({},``,`${r}#history-parent-modal`),window.dispatchEvent(new PopStateEvent(`popstate`)),await k(()=>{D(a.isOpen).toBe(!1),D(i.isOpen).toBe(!0),D(window.location.hash).toBe(`#history-parent-modal`),D(e).toHaveTextContent(`Last history close type: HISTORY_BACK_EVENT`)}),window.history.replaceState({},``,r),window.dispatchEvent(new PopStateEvent(`popstate`)),await k(()=>{D(i.isOpen).toBe(!1),D(window.location.hash).toBe(``)})}finally{window.history.replaceState(n,``,t)}}},H={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{className:`button-wrapper`,children:[(0,E.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open enter animated modal`}),(0,E.jsxs)(u,{className:`desktop-enter-animation-modal`,isOpen:e,onClose:()=>t(!1),children:[(0,E.jsx)(`div`,{slot:`header`,children:(0,E.jsx)(`span`,{children:`Enter animation`})}),(0,E.jsx)(`div`,{slot:`content`,className:`starting-style-demo-content`,children:`This example only animates the modal while it opens.`}),(0,E.jsx)(`div`,{slot:`footer`,children:(0,E.jsx)(a,{color:`light`,onClick:()=>t(!1),children:`Close`})})]})]})},parameters:{viewport:{defaultViewport:`responsive`}},play:async({canvasElement:e})=>{let t=g(e),n=b(e,`Open enter animated modal`),r=y(t);await O.click(x(n)),await k(()=>{D(t.isOpen).toBe(!0),D(r.getBoundingClientRect().width).toBeGreaterThan(0),D(e).toHaveTextContent(`This example only animates the modal while it opens.`)})}},U={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{className:`button-wrapper`,children:[(0,E.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open animated modal`}),(0,E.jsxs)(u,{className:`desktop-starting-style-modal`,isOpen:e,onClose:()=>t(!1),children:[(0,E.jsx)(`div`,{slot:`header`,children:(0,E.jsx)(`span`,{children:`Desktop animation`})}),(0,E.jsxs)(`div`,{slot:`content`,className:`starting-style-demo-content`,children:[`This story uses CSS `,(0,E.jsx)(`code`,{children:`@starting-style`}),` with the modal shadow parts to animate the backdrop and content box as soon as the modal enters the open state on desktop.`]}),(0,E.jsxs)(`div`,{slot:`footer`,children:[(0,E.jsx)(a,{color:`light`,onClick:()=>t(!1),children:`Close`}),(0,E.jsx)(a,{onClick:()=>t(!1),children:`Done`})]})]})]})},parameters:{viewport:{defaultViewport:`responsive`}},play:async({canvasElement:e})=>{let t=g(e),n=b(e,`Open animated modal`),r=b(e,`Done`);await O.click(x(n)),await k(()=>{D(t.isOpen).toBe(!0)}),await O.click(x(r)),await k(()=>{D(t.isOpen).toBe(!1)})}},W={args:{isOpen:!0,children:(0,E.jsx)(`div`,{className:`modal-test-content`,children:`Mobile View`})},parameters:{viewport:{defaultViewport:`mobile2`}},play:async({canvasElement:e})=>{let t=g(e),n=v(t),r=y(t);await k(()=>{let e=getComputedStyle(n),i=r.getBoundingClientRect();D(t.isOpen).toBe(!0),D(e.alignItems).toBe(`flex-end`),D(Math.abs(i.bottom-window.innerHeight)).toBeLessThanOrEqual(2),D(i.width).toBeLessThanOrEqual(window.innerWidth)})}},G={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{className:`button-wrapper`,children:[(0,E.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,E.jsx)(u,{isOpen:e,onClose:e=>{console.log(`modal close event type:`,e.detail.eventType),t(!1)},onUrlOpen:()=>t(!0),id:`MyModal`,children:(0,E.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,E.jsxs)(`div`,{children:["`onClose` is called for three user close requests:",(0,E.jsxs)(`ul`,{children:[(0,E.jsx)(`li`,{children:`when user click on modal background`}),(0,E.jsx)(`li`,{children:`when user press Escape`}),(0,E.jsx)(`li`,{children:`when user hit back button in android or back button of the browser`})]})]}),(0,E.jsx)(`p`,{children:"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"}),(0,E.jsxs)(`p`,{children:["to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",(0,E.jsx)(`a`,{rel:`noopener`,target:`_blank`,href:`./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story`,children:`isolated mode`}),` then hit back button`]}),(0,E.jsx)(`q`,{children:"back button scenario only works if your modal has an `id` attribute"}),(0,E.jsx)(a,{onClick:()=>{t(!1)},children:`Close Modal`})]})})]})},play:async({canvasElement:e})=>{let t=g(e),n=b(e,`Open Modal`),r=_(t),i=``;t.addEventListener(`close`,e=>{i=e.detail.eventType}),await O.click(x(n)),await k(()=>{D(t.isOpen).toBe(!0)}),await O.click(r),await k(()=>{D(i).toBe(`BACKGROUND_CLICK`),D(t.isOpen).toBe(!1)})}},K={render:()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!0),[i,o]=(0,T.useState)(`No close event yet`),[s,c]=(0,T.useState)(window.location.hash||`(empty)`),l=`HashLinkedModal`;return(0,E.jsxs)(`div`,{className:`button-wrapper`,style:{alignItems:`flex-start`},children:[(0,E.jsx)(a,{color:`light`,onClick:()=>{t(!0),window.setTimeout(()=>c(window.location.hash||`(empty)`))},children:`Open modal and push #HashLinkedModal`}),(0,E.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.currentTarget.checked)}),`autoCloseOnBackgroundClick`]}),(0,E.jsx)(`a`,{href:`./iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story#${l}`,target:`_blank`,rel:`noopener`,children:`Open isolated story with #HashLinkedModal`}),(0,E.jsxs)(`div`,{children:[`Current hash: `,s]}),(0,E.jsxs)(`div`,{children:[`Last close event: `,i]}),(0,E.jsx)(u,{id:l,isOpen:e,autoCloseOnBackgroundClick:n,onUrlOpen:()=>t(!0),onClose:e=>{let r=e.detail.eventType;o(r),window.setTimeout(()=>c(window.location.hash||`(empty)`)),(n||r===`HISTORY_BACK_EVENT`||r===`ESCAPE_KEY`)&&t(!1)},children:(0,E.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,E.jsx)(`h3`,{children:`Hash linked modal`}),(0,E.jsxs)(`p`,{children:[`Opening this modal writes `,(0,E.jsx)(`code`,{children:`#HashLinkedModal`}),` to the URL.`]}),(0,E.jsx)(`p`,{children:`Click the backdrop or press browser back to see the close event detail.`}),(0,E.jsx)(`p`,{children:`When auto close is enabled, the demo also synchronizes React state back to closed.`}),(0,E.jsx)(a,{onClick:()=>t(!1),children:`Close modal`})]})})]})},play:async({canvasElement:e})=>{let t=`${window.location.pathname}${window.location.search}${window.location.hash}`,n=`${window.location.pathname}${window.location.search}`,r=window.history.back.bind(window.history),i=g(e),a=b(e,`Open modal and push #HashLinkedModal`),o=_(i);try{window.history.back=(()=>{window.history.replaceState({},``,n)}),await O.click(x(a)),await k(()=>{D(i.isOpen).toBe(!0),D(window.location.hash).toBe(`#HashLinkedModal`),D(e).toHaveTextContent(`Current hash: #HashLinkedModal`)}),await O.click(o),await k(()=>{D(i.isOpen).toBe(!1),D(e).toHaveTextContent(`Last close event: BACKGROUND_CLICK`)})}finally{window.history.back=r,window.history.replaceState({},``,t)}}},q={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h3`,{children:`JBModal With a Little customization`}),(0,E.jsxs)(`div`,{className:`button-wrapper`,children:[(0,E.jsx)(a,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,E.jsx)(u,{className:`customized-look-modal`,isOpen:e,onClose:()=>{t(!1)},children:(0,E.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})]})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lastCloseType, setLastCloseType] = useState("none");
    const onClose = (event: JBModalEventType<JBModalCloseEvent>) => {
      setLastCloseType(event.detail.eventType);
      setIsOpen(false);
    };
    return <div className='button-wrapper'>
        <button type="button" data-testid="a11y-modal-opener" onClick={() => setIsOpen(true)}>Open accessible modal</button>
        <div>Last close type: {lastCloseType}</div>
        <JBModal isOpen={isOpen} label="Edit account" description="Update your public account information" onClose={onClose}>
          <div slot="content">
            <label>
              Display name
              {/* biome-ignore lint/a11y/noAutofocus: this story verifies the modal's documented initial-focus priority. */}
              <input data-testid="initial-focus" autoFocus />
            </label>
            <button type="button" data-testid="last-modal-control">Save changes</button>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const opener = canvasElement.querySelector<HTMLButtonElement>('[data-testid="a11y-modal-opener"]')!;
    const initialFocus = canvasElement.querySelector<HTMLInputElement>('[data-testid="initial-focus"]')!;
    const lastControl = canvasElement.querySelector<HTMLButtonElement>('[data-testid="last-modal-control"]')!;
    expect(modal.inert).toBe(true);
    await userEvent.click(opener);
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(modal.inert).toBe(false);
      expect(document.activeElement).toBe(initialFocus);
    });
    lastControl.focus();
    await userEvent.tab();
    expect(document.activeElement).toBe(initialFocus);
    initialFocus.focus();
    await userEvent.tab({
      shift: true
    });
    expect(document.activeElement).toBe(lastControl);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(modal.isOpen).toBe(false);
      expect(modal.inert).toBe(true);
      expect(document.activeElement).toBe(opener);
      expect(canvasElement).toHaveTextContent('Last close type: ESCAPE_KEY');
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lastCloseType, setLastCloseType] = useState("none");
    return <div>
        <button type="button" data-testid="cancelable-opener" onClick={() => setIsOpen(true)}>
          Open guarded modal
        </button>
        <div>Rejected close type: {lastCloseType}</div>
        <JBModal label="Unsaved profile" isOpen={isOpen} autoCloseOnBackgroundClick onClose={event => {
        event.preventDefault();
        setLastCloseType(event.detail.eventType);
      }}>
          <button type="button">Keep editing</button>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const modal = getModal(canvasElement);
    const opener = canvasElement.querySelector<HTMLButtonElement>('[data-testid="cancelable-opener"]')!;
    await userEvent.click(opener);
    await waitFor(() => expect(modal.isOpen).toBe(true));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(canvasElement).toHaveTextContent('Rejected close type: ESCAPE_KEY');
    });
    await userEvent.click(getBackground(modal));
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(canvasElement).toHaveTextContent('Rejected close type: BACKGROUND_CLICK');
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [parentOpen, setParentOpen] = useState(false);
    const [childOpen, setChildOpen] = useState(false);
    return <div>
        <button type="button" data-testid="parent-opener" onClick={() => setParentOpen(true)}>Open parent modal</button>
        <JBModal label="Parent dialog" isOpen={parentOpen} onClose={() => setParentOpen(false)}>
          <div slot="content">
            <button type="button" data-testid="child-opener" onClick={() => setChildOpen(true)}>Open child modal</button>
            <JBModal label="Child dialog" isOpen={childOpen} onClose={() => setChildOpen(false)}>
              <div slot="content">
                {/* biome-ignore lint/a11y/noAutofocus: this story verifies nested modal initial focus. */}
                <input data-testid="child-initial-focus" autoFocus aria-label="Child value" />
                <button type="button">Confirm child</button>
              </div>
            </JBModal>
            <button type="button">Parent action</button>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const parentModal = getModal(canvasElement, 0);
    const childModal = getModal(canvasElement, 1);
    const parentOpener = canvasElement.querySelector<HTMLButtonElement>('[data-testid="parent-opener"]')!;
    const childOpener = canvasElement.querySelector<HTMLButtonElement>('[data-testid="child-opener"]')!;
    const childInitialFocus = canvasElement.querySelector<HTMLInputElement>('[data-testid="child-initial-focus"]')!;
    await userEvent.click(parentOpener);
    await waitFor(() => {
      expect(jbModalManager.isTopmostModal(parentModal)).toBe(true);
      expect(document.activeElement).toBe(childOpener);
    });
    await userEvent.click(childOpener);
    await waitFor(() => {
      expect(jbModalManager.isTopmostModal(childModal)).toBe(true);
      expect(document.activeElement).toBe(childInitialFocus);
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(childModal.isOpen).toBe(false);
      expect(parentModal.isOpen).toBe(true);
      expect(jbModalManager.isTopmostModal(parentModal)).toBe(true);
      expect(document.activeElement).toBe(childOpener);
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(parentModal.isOpen).toBe(false);
      expect(document.activeElement).toBe(parentOpener);
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [parentOpen, setParentOpen] = useState(false);
    const [childOpen, setChildOpen] = useState(false);
    const [lastCloseType, setLastCloseType] = useState("none");
    const handleClose = (event: JBModalEventType<JBModalCloseEvent>, setOpen: (value: boolean) => void) => {
      setLastCloseType(event.detail.eventType);
      setOpen(false);
    };
    return <div>
        <button type="button" data-testid="history-parent-opener" onClick={() => setParentOpen(true)}>
          Open history parent
        </button>
        <div>Last history close type: {lastCloseType}</div>
        <JBModal id="history-parent-modal" label="History parent" isOpen={parentOpen} onClose={event => handleClose(event, setParentOpen)}>
          <div slot="content">
            <button type="button" data-testid="history-child-opener" onClick={() => setChildOpen(true)}>
              Open history child
            </button>
            <JBModal id="history-child-modal" label="History child" isOpen={childOpen} onClose={event => handleClose(event, setChildOpen)}>
              <button type="button">Child action</button>
            </JBModal>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const originalUrl = \`\${window.location.pathname}\${window.location.search}\${window.location.hash}\`;
    const originalState = window.history.state;
    const baseUrl = \`\${window.location.pathname}\${window.location.search}\`;
    const parentModal = getModal(canvasElement, 0);
    const childModal = getModal(canvasElement, 1);
    const parentOpener = canvasElement.querySelector<HTMLButtonElement>('[data-testid="history-parent-opener"]')!;
    const childOpener = canvasElement.querySelector<HTMLButtonElement>('[data-testid="history-child-opener"]')!;
    try {
      await userEvent.click(parentOpener);
      await waitFor(() => expect(window.location.hash).toBe('#history-parent-modal'));
      await userEvent.click(childOpener);
      await waitFor(() => expect(window.location.hash).toBe('#history-child-modal'));
      window.history.replaceState({}, '', \`\${baseUrl}#history-parent-modal\`);
      window.dispatchEvent(new PopStateEvent('popstate'));
      await waitFor(() => {
        expect(childModal.isOpen).toBe(false);
        expect(parentModal.isOpen).toBe(true);
        expect(window.location.hash).toBe('#history-parent-modal');
        expect(canvasElement).toHaveTextContent('Last history close type: HISTORY_BACK_EVENT');
      });
      window.history.replaceState({}, '', baseUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
      await waitFor(() => {
        expect(parentModal.isOpen).toBe(false);
        expect(window.location.hash).toBe('');
      });
    } finally {
      window.history.replaceState(originalState, '', originalUrl);
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const onModalClose = (e: JBModalEventType<JBModalCloseEvent>) => {
      console.log("modal close event type:", e.detail.eventType);
      setIsOpen(false);
    };
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
        <JBModal isOpen={isOpen} onClose={onModalClose} onUrlOpen={() => setIsOpen(true)} id="MyModal">
          <div className='modal-test-content' style={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
            <div>
              \`onClose\` is called for three user close requests:
              <ul>
                <li>when user click on modal background</li>
                <li>when user press Escape</li>
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
      closeEventType = (event as JBModalEventType<JBModalCloseEvent>).detail.eventType;
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [autoClose, setAutoClose] = useState(true);
    const [lastEvent, setLastEvent] = useState("No close event yet");
    const [currentHash, setCurrentHash] = useState(window.location.hash || "(empty)");
    const modalId = "HashLinkedModal";
    const onModalClose = (e: JBModalEventType<JBModalCloseEvent>) => {
      const eventType = e.detail.eventType;
      setLastEvent(eventType);
      window.setTimeout(() => setCurrentHash(window.location.hash || "(empty)"));
      if (autoClose || eventType === "HISTORY_BACK_EVENT" || eventType === "ESCAPE_KEY") {
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
        <JBModal id={modalId} isOpen={isOpen} autoCloseOnBackgroundClick={autoClose} onUrlOpen={() => setIsOpen(true)} onClose={onModalClose}>
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
    const originalHistoryBack = window.history.back.bind(window.history);
    const modal = getModal(canvasElement);
    const openButton = getJBButton(canvasElement, 'Open modal and push #HashLinkedModal');
    const background = getBackground(modal);
    try {
      window.history.back = (() => {
        window.history.replaceState({}, '', urlWithoutHash);
      }) as typeof window.history.back;
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
      window.history.back = originalHistoryBack;
      window.history.replaceState({}, '', originalUrl);
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J=[`Normal`,`WithHeaderAndFooter`,`WithLargeContent`,`WithOverflowY`,`ActionTest`,`AccessibilityBehavior`,`CancelableCloseRequest`,`NestedModalAccessibility`,`NestedModalHistory`,`DesktopEnterAnimation`,`DesktopAnimation`,`MobileView`,`CloseDetail`,`HashIdAndAutoClose`,`CustomizedUi`]}));Y();export{R as AccessibilityBehavior,L as ActionTest,z as CancelableCloseRequest,G as CloseDetail,q as CustomizedUi,U as DesktopAnimation,H as DesktopEnterAnimation,K as HashIdAndAutoClose,W as MobileView,B as NestedModalAccessibility,V as NestedModalHistory,j as Normal,M as WithHeaderAndFooter,P as WithLargeContent,I as WithOverflowY,J as __namedExportsOrder,A as default,Y as n,w as t};