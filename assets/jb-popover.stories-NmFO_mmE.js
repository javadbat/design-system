import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-pq5aVzpF.js";import{r as a,t as o}from"./react-D3vVezui.js";import{n as s,t as c}from"./react-CtxKteVz.js";import{n as l,t as u}from"./react-B2UVma_q.js";function d(e){let t=e.querySelector(`jb-button`);return E(t).toBeTruthy(),t}function f(e){let t=e.shadowRoot?.querySelector(`button`);return E(t).toBeTruthy(),t}function p(e){let t=e.querySelector(`jb-popover`);return E(t).toBeTruthy(),E(t.shadowRoot).toBeTruthy(),t}function m(e){let t=e.shadowRoot?.querySelector(`.jb-popover-web-component`);return E(t).toBeTruthy(),t}function h(e){let t=e.shadowRoot?.querySelector(`.popover-content-wrapper`);return E(t).toBeTruthy(),t}async function g(e){let t=m(e);await D(()=>{E(e.isOpen).toBe(!0),E(t.classList.contains(`--opened`)).toBe(!0)})}function _(e,t){E(Math.round(e)).toBe(Math.round(t))}function v(e,t){let n=e.getBoundingClientRect();E(t.style.position).toBe(`fixed`),_(parseFloat(t.style.insetBlockStart),n.bottom),E(t.style.insetBlockEnd).toBe(`unset`)}function y(e,t){let n=e.getBoundingClientRect();E(t.style.position).toBe(`fixed`),E(t.style.insetBlockStart).toBe(`unset`),_(parseFloat(t.style.insetBlockEnd),window.innerHeight-n.top)}function b(e,t){let n=e.getBoundingClientRect();_(parseFloat(t.style.insetInlineStart),n.left),E(t.style.insetInlineEnd).toBe(`unset`)}function x(e,t){let n=e.getBoundingClientRect();E(t.style.insetInlineStart).toBe(`unset`),_(parseFloat(t.style.insetInlineEnd),window.innerWidth-n.right)}function S(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getBoundingClientRect(),o=r.left+r.width/2;_(a.left+i.width/2,o)}function C(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getBoundingClientRect(),o=r.left+r.width/2;_(a.left+i.width/2,o)}function w(e,t){let n=e.getBoundingClientRect(),r=n.left+n.width/2;_(parseFloat(t.style.insetInlineStart),r),E(t.style.insetInlineEnd).toBe(`unset`)}function T(e,t){let n=e.getBoundingClientRect(),r=window.innerWidth-n.left-n.width/2;E(t.style.insetInlineStart).toBe(`unset`),_(parseFloat(t.style.insetInlineEnd),r)}var E,D,O=t((()=>{({expect:E,waitFor:D}=__STORYBOOK_MODULE_TEST__)})),k=e({BlockBeforePositionArea:()=>X,Events:()=>G,InlineCenterAfterPositionArea:()=>J,InlineCenterBeforePositionArea:()=>Y,InlineCenterPositionArea:()=>q,InlineEndPositionArea:()=>K,InsideScrollableModal:()=>V,MobileHashState:()=>W,Normal:()=>R,OpenClose:()=>H,OverflowSlide:()=>U,TransformedContainer:()=>z,__namedExportsOrder:()=>Z,default:()=>L}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q=t((()=>{r(),o(),c(),u(),A=n(r(),1),O(),j=i(),{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:N,fn:P,userEvent:F,waitFor:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/JBPopover`,component:l,decorators:[e=>{let t=(0,A.useRef)(null),n=(0,A.useRef)(null),[r,i]=M();return(0,j.jsxs)(`div`,{style:{paddingInlineStart:`10dvw`,paddingBlockStart:`10dvh`},children:[(0,j.jsx)(a,{ref:t,onClick:()=>{i({isOpen:!r.isOpen})},children:`Click me`}),(0,j.jsx)(e,{args:{...r,anchor:t,ref:n,onClose:()=>{r.onClose?.(),i({isOpen:!1})}}})]})}]},R={args:{children:(0,j.jsx)(`div`,{children:`Hello World`}),isOpen:!1},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n);n.bindTarget(t),n.open(),await g(n),v(t,r),b(t,r)}},z={args:{children:(0,j.jsx)(`div`,{children:`Positioned inside a transformed modal container.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n),i=n.parentElement.attachShadow({mode:`open`}),a=document.createElement(`div`),o=document.createElement(`slot`);a.style.transform=`translate(6rem, 4rem)`,a.append(o),i.append(a),n.bindTarget(t),n.open(),await g(n),await I(()=>{let e=t.getBoundingClientRect(),n=r.getBoundingClientRect();_(n.left,e.left),_(n.top,e.bottom)})}},B=Array.from({length:36},(e,t)=>`Overflow content row ${t+1}`),V={render:()=>{let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(!1),i=(0,A.useRef)(null);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(a,{"data-testid":`open-modal`,onClick:()=>t(!0),children:`Open modal`}),(0,j.jsxs)(s,{isOpen:e,label:`Scrollable modal with popover`,onClose:()=>{r(!1),t(!1)},children:[(0,j.jsx)(`div`,{slot:`header`,children:`Popover inside an overflowing modal`}),(0,j.jsxs)(`div`,{slot:`content`,"data-testid":`modal-overflow-content`,style:{display:`grid`,gap:`0.75rem`},children:[B.slice(0,12).map(e=>(0,j.jsx)(`div`,{children:e},e)),(0,j.jsx)(a,{ref:i,"data-testid":`open-modal-popover`,onClick:()=>r(e=>!e),children:`Open fixed popover`}),(0,j.jsx)(l,{"data-testid":`modal-popover`,anchor:i,isOpen:n,onClose:()=>r(!1),children:(0,j.jsx)(`div`,{children:`Popover anchored inside the modal`})}),B.slice(12).map(e=>(0,j.jsx)(`div`,{children:e},e))]}),(0,j.jsx)(`div`,{slot:`footer`,children:(0,j.jsx)(a,{color:`light`,onClick:()=>t(!1),children:`Close modal`})})]})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="open-modal"]`);await F.click(f(t));let n=e.querySelector(`jb-modal`),r=e.querySelector(`[data-testid="modal-overflow-content"]`),i=e.querySelector(`[data-testid="open-modal-popover"]`),a=e.querySelector(`[data-testid="modal-popover"]`),o=m(a);await I(()=>{N(n.isOpen).toBe(!0),N(r.scrollHeight).toBeGreaterThan(r.clientHeight)}),i.scrollIntoView({block:`center`}),await F.click(f(i)),await I(()=>{let e=i.getBoundingClientRect(),t=o.getBoundingClientRect();N(a.isOpen).toBe(!0),N(o.style.position).toBe(`fixed`),_(t.left,e.left),_(t.top,e.bottom)}),r.scrollTop+=24,await I(()=>{let e=i.getBoundingClientRect(),t=o.getBoundingClientRect();_(t.left,e.left),_(t.top,e.bottom)})}},H={args:{children:(0,j.jsx)(`div`,{children:`Open and close the popover programmatically.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=p(e);t.bindTarget(d(e)),t.open(),await g(t),t.close(),await I(()=>N(t.isOpen).toBe(!1)),t.unBindTarget()}},U={args:{children:(0,j.jsx)(`div`,{children:`Popover content remains visible when it would overflow.`}),isOpen:!1,overflowHandler:`SLIDE`},play:async({canvasElement:e})=>{let t=p(e);t.bindTarget(d(e)),t.open(),await g(t),N(t.overflowHandler).toBe(`SLIDE`)}},W={args:{id:`mobile-hash-popover`,children:(0,j.jsx)(`div`,{children:`This popover can be addressed with a URL hash on mobile.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=p(e);N(t.PopoverHashPath).toBe(`#mobile-hash-popover`);let n=!1;t.addEventListener(`urlOpen`,()=>{n=!0},{once:!0});let r=window.location.href;window.history.replaceState(window.history.state,``,`#mobile-hash-popover`),t.checkInitialOpenness(),N(t.isOpen).toBe(!0),N(n).toBe(!0),t.close(),window.history.replaceState(window.history.state,``,r)}},G={args:{children:(0,j.jsx)(`div`,{children:`Popover lifecycle events.`}),isOpen:!1,onLoad:P(),onInit:P(),onClose:P()},play:async({canvasElement:e,args:t})=>{let n=p(e);n.dispatchEvent(new CustomEvent(`load`,{bubbles:!0,composed:!0})),n.dispatchEvent(new CustomEvent(`init`,{bubbles:!0,composed:!0})),n.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0,detail:{eventType:`OUTSIDE_CLICK`}})),await I(()=>{N(t.onLoad).toHaveBeenCalled(),N(t.onInit).toHaveBeenCalled(),N(t.onClose).toHaveBeenCalled()})}},K={args:{children:(0,j.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{inline:`end`}},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n);n.bindTarget(t),n.positionArea={inline:`end`},n.open(),await g(n),v(t,r),x(t,r)}},q={args:{children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{children:`Popover Will Align on Center of Box`}),(0,j.jsx)(`div`,{children:`center of the popover is in the center of the trigger button`})]}),isOpen:!1,positionArea:{inline:`center`}},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n),i=h(n);t.style.width=`18rem`,n.bindTarget(t),n.positionArea={inline:`center`},n.open(),await g(n),v(t,r),S(t,r,i),t.style.direction=`rtl`,n.positionArea={inline:`center`},await I(()=>{C(t,r,i)})}},J={args:{children:(0,j.jsx)(`div`,{children:`Align on Center of Box`}),isOpen:!1,positionArea:{inline:`center-after`}},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n);n.bindTarget(t),n.positionArea={inline:`center-after`},n.open(),await g(n),v(t,r),w(t,r)}},Y={args:{children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{children:`Popover Will Align Before Center of Box`}),(0,j.jsx)(`div`,{children:`Test is Easy just change Page direction to see in every possible situation`})]}),isOpen:!1,positionArea:{inline:`center-before`}},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n);n.bindTarget(t),n.positionArea={inline:`center-before`},n.open(),await g(n),v(t,r),T(t,r)}},X={args:{children:(0,j.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{block:`before`}},play:async({canvasElement:e})=>{let t=d(e),n=p(e),r=m(n);n.bindTarget(t),n.positionArea={block:`before`},n.open(),await g(n),y(t,r),b(t,r)}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    popover.bindTarget(anchorButton);
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineStartPosition(anchorButton, wrapper);
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Positioned inside a transformed modal container.</div>,
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    const modalHost = popover.parentElement!;

    // Match a modal's shadow-DOM slot and transformed animation wrapper.
    const modalRoot = modalHost.attachShadow({
      mode: 'open'
    });
    const modalWrapper = document.createElement('div');
    const modalSlot = document.createElement('slot');
    modalWrapper.style.transform = 'translate(6rem, 4rem)';
    modalWrapper.append(modalSlot);
    modalRoot.append(modalWrapper);
    popover.bindTarget(anchorButton);
    popover.open();
    await waitForPopoverOpen(popover);
    await waitFor(() => {
      const anchorRect = anchorButton.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      expectCloseTo(wrapperRect.left, anchorRect.left);
      expectCloseTo(wrapperRect.top, anchorRect.bottom);
    });
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const anchorRef = useRef<JBButtonWebComponent>(null);
    return <div>
        <JBButton data-testid="open-modal" onClick={() => setIsModalOpen(true)}>
          Open modal
        </JBButton>
        <JBModal isOpen={isModalOpen} label="Scrollable modal with popover" onClose={() => {
        setIsPopoverOpen(false);
        setIsModalOpen(false);
      }}>
          <div slot="header">Popover inside an overflowing modal</div>
          <div slot="content" data-testid="modal-overflow-content" style={{
          display: 'grid',
          gap: '0.75rem'
        }}>
            {modalOverflowRows.slice(0, 12).map(row => <div key={row}>{row}</div>)}
            <JBButton ref={anchorRef} data-testid="open-modal-popover" onClick={() => setIsPopoverOpen(value => !value)}>
              Open fixed popover
            </JBButton>
            <JBPopover data-testid="modal-popover" anchor={anchorRef} isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)}>
              <div>Popover anchored inside the modal</div>
            </JBPopover>
            {modalOverflowRows.slice(12).map(row => <div key={row}>{row}</div>)}
          </div>
          <div slot="footer">
            <JBButton color="light" onClick={() => setIsModalOpen(false)}>Close modal</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const modalOpener = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="open-modal"]')!;
    await userEvent.click(getNativeButton(modalOpener));
    const modal = canvasElement.querySelector('jb-modal')!;
    const overflowContent = canvasElement.querySelector<HTMLElement>('[data-testid="modal-overflow-content"]')!;
    const popoverOpener = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="open-modal-popover"]')!;
    const popover = canvasElement.querySelector<JBPopoverWebComponent>('[data-testid="modal-popover"]')!;
    const wrapper = getPopoverWrapper(popover);
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(overflowContent.scrollHeight).toBeGreaterThan(overflowContent.clientHeight);
    });
    popoverOpener.scrollIntoView({
      block: 'center'
    });
    await userEvent.click(getNativeButton(popoverOpener));
    await waitFor(() => {
      const anchorRect = popoverOpener.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      expect(popover.isOpen).toBe(true);
      expect(wrapper.style.position).toBe('fixed');
      expectCloseTo(wrapperRect.left, anchorRect.left);
      expectCloseTo(wrapperRect.top, anchorRect.bottom);
    });
    overflowContent.scrollTop += 24;
    await waitFor(() => {
      const anchorRect = popoverOpener.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      expectCloseTo(wrapperRect.left, anchorRect.left);
      expectCloseTo(wrapperRect.top, anchorRect.bottom);
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Open and close the popover programmatically.</div>,
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const popover = getPopover(canvasElement);
    popover.bindTarget(getAnchorButton(canvasElement));
    popover.open();
    await waitForPopoverOpen(popover);
    popover.close();
    await waitFor(() => expect(popover.isOpen).toBe(false));
    popover.unBindTarget();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Popover content remains visible when it would overflow.</div>,
    isOpen: false,
    overflowHandler: 'SLIDE'
  },
  play: async ({
    canvasElement
  }) => {
    const popover = getPopover(canvasElement);
    popover.bindTarget(getAnchorButton(canvasElement));
    popover.open();
    await waitForPopoverOpen(popover);
    expect(popover.overflowHandler).toBe('SLIDE');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'mobile-hash-popover',
    children: <div>This popover can be addressed with a URL hash on mobile.</div>,
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const popover = getPopover(canvasElement);
    expect(popover.PopoverHashPath).toBe('#mobile-hash-popover');
    let urlOpenDispatched = false;
    popover.addEventListener('urlOpen', () => {
      urlOpenDispatched = true;
    }, {
      once: true
    });
    const currentUrl = window.location.href;
    window.history.replaceState(window.history.state, '', '#mobile-hash-popover');
    popover.checkInitialOpenness();
    expect(popover.isOpen).toBe(true);
    expect(urlOpenDispatched).toBe(true);
    popover.close();
    window.history.replaceState(window.history.state, '', currentUrl);
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Popover lifecycle events.</div>,
    isOpen: false,
    onLoad: fn(),
    onInit: fn(),
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const popover = getPopover(canvasElement);
    popover.dispatchEvent(new CustomEvent('load', {
      bubbles: true,
      composed: true
    }));
    popover.dispatchEvent(new CustomEvent('init', {
      bubbles: true,
      composed: true
    }));
    popover.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true,
      detail: {
        eventType: 'OUTSIDE_CLICK'
      }
    }));
    await waitFor(() => {
      expect(args.onLoad).toHaveBeenCalled();
      expect(args.onInit).toHaveBeenCalled();
      expect(args.onClose).toHaveBeenCalled();
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    popover.bindTarget(anchorButton);
    popover.positionArea = {
      inline: 'end'
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineEndPosition(anchorButton, wrapper);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
      <div>Popover Will Align on Center of Box</div>
      <div>center of the popover is in the center of the trigger button</div>

    </div>,
    isOpen: false,
    positionArea: {
      inline: "center"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    const content = getPopoverContent(popover);
    anchorButton.style.width = '18rem';
    popover.bindTarget(anchorButton);
    popover.positionArea = {
      inline: 'center'
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineCenterPosition(anchorButton, wrapper, content);
    anchorButton.style.direction = 'rtl';
    popover.positionArea = {
      inline: 'center'
    };
    await waitFor(() => {
      expectInlineCenterRtlPosition(anchorButton, wrapper, content);
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-after"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    popover.bindTarget(anchorButton);
    popover.positionArea = {
      inline: 'center-after'
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineCenterAfterPosition(anchorButton, wrapper);
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
      <div>Popover Will Align Before Center of Box</div>
      <div>Test is Easy just change Page direction to see in every possible situation</div>
    </div>,
    isOpen: false,
    positionArea: {
      inline: "center-before"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    popover.bindTarget(anchorButton);
    popover.positionArea = {
      inline: 'center-before'
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineCenterBeforePosition(anchorButton, wrapper);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const anchorButton = getAnchorButton(canvasElement);
    const popover = getPopover(canvasElement);
    const wrapper = getPopoverWrapper(popover);
    popover.bindTarget(anchorButton);
    popover.positionArea = {
      block: 'before'
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectBeforePosition(anchorButton, wrapper);
    expectInlineStartPosition(anchorButton, wrapper);
  }
}`,...X.parameters?.docs?.source}}},Z=[`Normal`,`TransformedContainer`,`InsideScrollableModal`,`OpenClose`,`OverflowSlide`,`MobileHashState`,`Events`,`InlineEndPositionArea`,`InlineCenterPositionArea`,`InlineCenterAfterPositionArea`,`InlineCenterBeforePositionArea`,`BlockBeforePositionArea`]}));Q();export{X as BlockBeforePositionArea,G as Events,J as InlineCenterAfterPositionArea,Y as InlineCenterBeforePositionArea,q as InlineCenterPositionArea,K as InlineEndPositionArea,V as InsideScrollableModal,W as MobileHashState,R as Normal,H as OpenClose,U as OverflowSlide,z as TransformedContainer,Z as __namedExportsOrder,L as default,k as n,Q as t};