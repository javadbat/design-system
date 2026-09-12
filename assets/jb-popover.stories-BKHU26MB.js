import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{q as r,t as i}from"./iframe-NXjjqRU7.js";import{r as a,t as o}from"./react-COhcYpKA.js";import{r as s,t as c}from"./react-oFoHSwy9.js";import{r as l,t as u}from"./react-NOQcKTGB.js";import{r as ee,t as d}from"./react-Cp3QKEUA.js";import{r as f,t as te}from"./react-B1V_DimL.js";function p(e){let t=e.querySelector(`jb-button`);return D(t).toBeTruthy(),t}function m(e){let t=e.shadowRoot?.querySelector(`button`);return D(t).toBeTruthy(),t}function h(e){let t=e.querySelector(`jb-popover`);return D(t).toBeTruthy(),D(t.shadowRoot).toBeTruthy(),t}function g(e){let t=e.shadowRoot?.querySelector(`.jb-popover-web-component`);return D(t).toBeTruthy(),t}function _(e){let t=e.shadowRoot?.querySelector(`.popover-content`);return D(t).toBeTruthy(),t}async function v(e){let t=g(e);await O(()=>{D(e.isOpen).toBe(!0),D(e.matches(`:state(open)`)).toBe(!0),D(getComputedStyle(t).display).not.toBe(`none`)})}function y(e,t){D(Math.round(e)).toBe(Math.round(t))}function b(e,t){let n=e.getBoundingClientRect();D(t.style.position).toBe(`fixed`),y(parseFloat(t.style.insetBlockStart),n.bottom),D(t.style.insetBlockEnd).toBe(`unset`)}function ne(e,t){let n=e.getBoundingClientRect();D(t.style.position).toBe(`fixed`),D(t.style.insetBlockStart).toBe(`unset`),y(parseFloat(t.style.insetBlockEnd),window.innerHeight-n.top)}function x(e,t){let n=e.getBoundingClientRect();y(parseFloat(t.style.insetInlineStart),n.left),D(t.style.insetInlineEnd).toBe(`unset`)}function S(e,t){let n=e.getBoundingClientRect();D(t.style.insetInlineStart).toBe(`unset`),y(parseFloat(t.style.insetInlineEnd),window.innerWidth-n.right)}function C(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getBoundingClientRect(),o=r.left+r.width/2;y(a.left+i.width/2,o)}function w(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getBoundingClientRect(),o=r.left+r.width/2;y(a.left+i.width/2,o)}function T(e,t){let n=e.getBoundingClientRect(),r=n.left+n.width/2;y(parseFloat(t.style.insetInlineStart),r),D(t.style.insetInlineEnd).toBe(`unset`)}function E(e,t){let n=e.getBoundingClientRect(),r=window.innerWidth-n.left-n.width/2;D(t.style.insetInlineStart).toBe(`unset`),y(parseFloat(t.style.insetInlineEnd),r)}var D,O,k=t((()=>{({expect:D,waitFor:O}=__STORYBOOK_MODULE_TEST__)})),re=e({BlockBeforePositionArea:()=>Z,Events:()=>K,InlineCenterAfterPositionArea:()=>Y,InlineCenterBeforePositionArea:()=>X,InlineCenterPositionArea:()=>J,InlineEndPositionArea:()=>q,InsideScrollableModal:()=>H,MobileHashState:()=>G,NestedPopovers:()=>z,Normal:()=>R,OpenClose:()=>U,OverflowSlide:()=>W,TransformedContainer:()=>B,__namedExportsOrder:()=>Q,default:()=>L}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{r(),o(),d(),te(),A=n(r(),1),k(),c(),u(),j=i(),{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:N,fn:P,userEvent:F,waitFor:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/JBPopover`,component:f,args:{autoPlacement:!1},decorators:[(e,t)=>{let n=(0,A.useRef)(null),r=(0,A.useRef)(null),[i,o]=M();return t.parameters.standalone?(0,j.jsx)(e,{}):(0,j.jsxs)(`div`,{style:{paddingInlineStart:`10dvw`,paddingBlockStart:`10dvh`},children:[(0,j.jsx)(a,{ref:n,onClick:()=>{o({isOpen:!i.isOpen})},children:`Click me`}),(0,j.jsx)(e,{args:{...i,anchor:n,ref:r,onClose:e=>{i.onClose?.(e),e.defaultPrevented||o({isOpen:!1})}}})]})}]},R={args:{children:(0,j.jsx)(`div`,{children:`Hello World`}),isOpen:!1},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n);n.bindTarget(t),n.open(),await v(n),b(t,r),x(t,r)}},z={parameters:{standalone:!0,layout:`fullscreen`},render:()=>{let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(!1),i=(0,A.useRef)(null),o=(0,A.useRef)(null);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{style:{minHeight:`28rem`,display:`grid`,placeItems:`center`,background:`linear-gradient(135deg, #f5f7ff, #eefaf7)`,padding:`2rem`},children:(0,j.jsx)(a,{ref:i,"data-testid":`nested-open-outer`,onClick:()=>t(!0),children:`Open command center`})}),(0,j.jsx)(f,{"data-testid":`nested-outer`,"aria-label":`Command center`,isOpen:e,modal:!0,restoreFocus:!0,anchor:i,onClose:()=>{r(!1),t(!1)},children:(0,j.jsxs)(`section`,{style:{width:`min(24rem, calc(100vw - 2rem))`,boxSizing:`border-box`,padding:`1.25rem`,display:`grid`,gap:`1rem`,color:`#18324a`},children:[(0,j.jsxs)(`header`,{style:{display:`grid`,gap:`0.25rem`},children:[(0,j.jsx)(`strong`,{style:{fontSize:`1.15rem`},children:`Command center`}),(0,j.jsx)(`span`,{style:{color:`#557086`,fontSize:`0.9rem`},children:`Manage an action without losing your place.`})]}),(0,j.jsxs)(`div`,{style:{display:`grid`,gap:`0.65rem`,padding:`1rem`,borderRadius:`0.9rem`,background:`#f3f7fb`},children:[(0,j.jsx)(`span`,{style:{fontSize:`0.85rem`,color:`#557086`},children:`Workspace`}),(0,j.jsx)(`strong`,{children:`Design system / Production`}),(0,j.jsx)(a,{ref:o,"data-testid":`nested-open-inner`,onClick:()=>r(e=>!e),children:`Configure workspace`})]}),(0,j.jsx)(f,{"data-testid":`nested-inner`,"aria-label":`Workspace settings`,anchor:o,isOpen:n,modal:!0,restoreFocus:!0,onClose:e=>{e.stopPropagation(),r(!1)},children:(0,j.jsxs)(`div`,{style:{width:`min(19rem, calc(100vw - 2rem))`,padding:`1rem`,display:`grid`,gap:`0.8rem`},children:[(0,j.jsx)(`strong`,{children:`Workspace settings`}),(0,j.jsxs)(s,{label:`environment`,defaultValue:`production`,children:[(0,j.jsx)(l,{value:`production`,children:`Production`}),(0,j.jsx)(l,{value:`staging`,children:`Staging`})]}),(0,j.jsx)(a,{"data-testid":`nested-save`,onClick:()=>r(!1),children:`Save settings`})]})}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>t(!1),style:{justifySelf:`start`,border:0,background:`transparent`,color:`#557086`,cursor:`pointer`},children:`Close command center`})]})})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="nested-open-outer"]`),n=t.getBoundingClientRect();await F.click(m(t));let r=e.querySelector(`[data-testid="nested-outer"]`),i=e.querySelector(`[data-testid="nested-open-inner"]`),a=e.querySelector(`[data-testid="nested-inner"]`);await I(()=>N(r.isOpen).toBe(!0)),y(t.getBoundingClientRect().top,n.top),y(t.getBoundingClientRect().left,n.left),await F.click(m(i)),await I(()=>N(a.isOpen).toBe(!0)),N(a.shadowRoot.activeElement).toBe(_(a)),N(a.querySelector(`jb-select`).isOpen).toBe(!1),await I(()=>{let e=_(a).getBoundingClientRect();N(e.top).toBeGreaterThanOrEqual(0),N(e.bottom).toBeLessThanOrEqual(window.innerHeight+1),N(e.left).toBeGreaterThanOrEqual(0),N(e.right).toBeLessThanOrEqual(window.innerWidth+1)}),await F.keyboard(`{Escape}`),await I(()=>{N(a.isOpen).toBe(!1),N(r.isOpen).toBe(!0)});let o=e.querySelector(`[data-testid="nested-save"]`),s=m(o);s.setAttribute(`autofocus`,``);try{await F.click(m(i)),await I(()=>N(a.isOpen).toBe(!0)),N(o.shadowRoot.activeElement).toBe(s),N(a.querySelector(`jb-select`).isOpen).toBe(!1),await F.click(s)}finally{s.removeAttribute(`autofocus`)}await I(()=>N(a.isOpen).toBe(!1)),N(r.isOpen).toBe(!0)}},B={args:{children:(0,j.jsx)(`div`,{children:`Positioned inside a transformed modal container.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n),i=n.parentElement.attachShadow({mode:`open`}),a=document.createElement(`div`),o=document.createElement(`slot`);a.style.transform=`translate(6rem, 4rem)`,a.append(o),i.append(a),n.bindTarget(t),n.open(),await v(n),await I(()=>{let e=t.getBoundingClientRect(),n=r.getBoundingClientRect();y(n.left,e.left),y(n.top,e.bottom)})}},V=Array.from({length:36},(e,t)=>`Overflow content row ${t+1}`),H={render:()=>{let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(!1),i=(0,A.useRef)(null);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(a,{"data-testid":`open-modal`,onClick:()=>t(!0),children:`Open modal`}),(0,j.jsxs)(ee,{isOpen:e,label:`Scrollable modal with popover`,onClose:()=>{r(!1),t(!1)},children:[(0,j.jsx)(`div`,{slot:`header`,children:`Popover inside an overflowing modal`}),(0,j.jsxs)(`div`,{slot:`content`,"data-testid":`modal-overflow-content`,style:{display:`grid`,gap:`0.75rem`},children:[V.slice(0,12).map(e=>(0,j.jsx)(`div`,{children:e},e)),(0,j.jsx)(a,{ref:i,"data-testid":`open-modal-popover`,onClick:()=>r(e=>!e),children:`Open fixed popover`}),(0,j.jsx)(f,{"data-testid":`modal-popover`,anchor:i,isOpen:n,onClose:()=>r(!1),children:(0,j.jsx)(`div`,{children:`Popover anchored inside the modal`})}),V.slice(12).map(e=>(0,j.jsx)(`div`,{children:e},e))]}),(0,j.jsx)(`div`,{slot:`footer`,children:(0,j.jsx)(a,{color:`light`,onClick:()=>t(!1),children:`Close modal`})})]})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="open-modal"]`);await F.click(m(t));let n=e.querySelector(`jb-modal`),r=e.querySelector(`[data-testid="modal-overflow-content"]`),i=e.querySelector(`[data-testid="open-modal-popover"]`),a=e.querySelector(`[data-testid="modal-popover"]`),o=g(a);await I(()=>{N(n.isOpen).toBe(!0),N(r.scrollHeight).toBeGreaterThan(r.clientHeight)}),i.scrollIntoView({block:`center`}),await F.click(m(i)),await I(()=>{let e=i.getBoundingClientRect(),t=o.getBoundingClientRect();N(a.isOpen).toBe(!0),N(o.style.position).toBe(`fixed`),y(t.left,e.left),y(t.top,e.bottom)}),r.scrollTop+=24,await I(()=>{let e=i.getBoundingClientRect(),t=o.getBoundingClientRect();y(t.left,e.left),y(t.top,e.bottom)})}},U={args:{children:(0,j.jsx)(`div`,{children:`Open and close the popover programmatically.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=h(e);t.bindTarget(p(e)),t.open(),await v(t),t.close(),await I(()=>N(t.isOpen).toBe(!1)),t.unBindTarget()}},W={args:{children:(0,j.jsx)(`div`,{children:`Popover content remains visible when it would overflow.`}),isOpen:!1,overflowHandler:`SLIDE`},play:async({canvasElement:e})=>{let t=h(e);t.bindTarget(p(e)),t.open(),await v(t),N(t.overflowHandler).toBe(`SLIDE`)}},G={args:{id:`mobile-hash-popover`,children:(0,j.jsx)(`div`,{children:`This popover can be addressed with a URL hash on mobile.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=h(e);N(t.PopoverHashPath).toBe(`#mobile-hash-popover`);let n=!1;t.addEventListener(`url-open`,()=>{n=!0},{once:!0});let r=window.location.href;window.history.replaceState(window.history.state,``,`#mobile-hash-popover`),t.checkInitialOpenness(),N(t.isOpen).toBe(!0),N(n).toBe(!0),t.close(),window.history.replaceState(window.history.state,``,r)}},K={args:{children:(0,j.jsx)(`div`,{children:`Popover lifecycle events.`}),isOpen:!1,onLoad:P(),onInit:P(),onClose:P()},play:async({canvasElement:e,args:t})=>{let n=h(e);n.dispatchEvent(new CustomEvent(`load`,{bubbles:!0,composed:!0})),n.dispatchEvent(new CustomEvent(`init`,{bubbles:!0,composed:!0})),n.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0,detail:{eventType:`OUTSIDE_CLICK`}})),await I(()=>{N(t.onLoad).toHaveBeenCalled(),N(t.onInit).toHaveBeenCalled(),N(t.onClose).toHaveBeenCalled()})}},q={args:{children:(0,j.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{inline:`end`}},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={inline:`end`},n.open(),await v(n),b(t,r),S(t,r)}},J={args:{children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{children:`Popover Will Align on Center of Box`}),(0,j.jsx)(`div`,{children:`center of the popover is in the center of the trigger button`})]}),isOpen:!1,positionArea:{inline:`center`}},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n),i=_(n);t.style.width=`18rem`,n.bindTarget(t),n.positionArea={inline:`center`},n.open(),await v(n),b(t,r),C(t,r,i),t.style.direction=`rtl`,n.positionArea={inline:`center`},await I(()=>{w(t,r,i)})}},Y={args:{children:(0,j.jsx)(`div`,{children:`Align on Center of Box`}),isOpen:!1,positionArea:{inline:`center-after`}},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={inline:`center-after`},n.open(),await v(n),b(t,r),T(t,r)}},X={args:{children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{children:`Popover Will Align Before Center of Box`}),(0,j.jsx)(`div`,{children:`Test is Easy just change Page direction to see in every possible situation`})]}),isOpen:!1,positionArea:{inline:`center-before`}},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={inline:`center-before`},n.open(),await v(n),b(t,r),E(t,r)}},Z={args:{children:(0,j.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{block:`before`}},play:async({canvasElement:e})=>{let t=p(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={block:`before`},n.open(),await v(n),ne(t,r),x(t,r)}},Q=[`Normal`,`NestedPopovers`,`TransformedContainer`,`InsideScrollableModal`,`OpenClose`,`OverflowSlide`,`MobileHashState`,`Events`,`InlineEndPositionArea`,`InlineCenterPositionArea`,`InlineCenterAfterPositionArea`,`InlineCenterBeforePositionArea`,`BlockBeforePositionArea`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    standalone: true,
    layout: "fullscreen"
  },
  render: () => {
    const [outerOpen, setOuterOpen] = useState(false);
    const [innerOpen, setInnerOpen] = useState(false);
    const outerAnchor = useRef<JBButtonWebComponent>(null);
    const innerAnchor = useRef<JBButtonWebComponent>(null);
    return <>
        <div style={{
        minHeight: "28rem",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg, #f5f7ff, #eefaf7)",
        padding: "2rem"
      }}>
          <JBButton ref={outerAnchor} data-testid="nested-open-outer" onClick={() => setOuterOpen(true)}>
            Open command center
          </JBButton>
        </div>
        <JBPopover data-testid="nested-outer" aria-label="Command center" isOpen={outerOpen} modal restoreFocus anchor={outerAnchor} onClose={() => {
        setInnerOpen(false);
        setOuterOpen(false);
      }}>
          <section style={{
          width: "min(24rem, calc(100vw - 2rem))",
          boxSizing: "border-box",
          padding: "1.25rem",
          display: "grid",
          gap: "1rem",
          color: "#18324a"
        }}>
            <header style={{
            display: "grid",
            gap: "0.25rem"
          }}>
              <strong style={{
              fontSize: "1.15rem"
            }}>Command center</strong>
              <span style={{
              color: "#557086",
              fontSize: "0.9rem"
            }}>Manage an action without losing your place.</span>
            </header>
            <div style={{
            display: "grid",
            gap: "0.65rem",
            padding: "1rem",
            borderRadius: "0.9rem",
            background: "#f3f7fb"
          }}>
              <span style={{
              fontSize: "0.85rem",
              color: "#557086"
            }}>Workspace</span>
              <strong>Design system / Production</strong>
              <JBButton ref={innerAnchor} data-testid="nested-open-inner" onClick={() => setInnerOpen(value => !value)}>
                Configure workspace
              </JBButton>
            </div>
            <JBPopover data-testid="nested-inner" aria-label="Workspace settings" anchor={innerAnchor} isOpen={innerOpen} modal restoreFocus onClose={event => {
            event.stopPropagation();
            setInnerOpen(false);
          }}>
              <div style={{
              width: "min(19rem, calc(100vw - 2rem))",
              padding: "1rem",
              display: "grid",
              gap: "0.8rem"
            }}>
                <strong>Workspace settings</strong>
                  <JBSelect label="environment" defaultValue="production">
                    <JBOption value="production">Production</JBOption>
                    <JBOption value="staging">Staging</JBOption>
                  </JBSelect>
                <JBButton data-testid="nested-save" onClick={() => setInnerOpen(false)}>
                  Save settings
                </JBButton>
              </div>
            </JBPopover>
            <button type="button" onClick={() => setOuterOpen(false)} style={{
            justifySelf: "start",
            border: 0,
            background: "transparent",
            color: "#557086",
            cursor: "pointer"
          }}>
              Close command center
            </button>
          </section>
        </JBPopover>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const openOuter = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="nested-open-outer"]')!;
    const initialPosition = openOuter.getBoundingClientRect();
    await userEvent.click(getNativeButton(openOuter));
    const outer = canvasElement.querySelector<JBPopoverWebComponent>('[data-testid="nested-outer"]')!;
    const openInner = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="nested-open-inner"]')!;
    const inner = canvasElement.querySelector<JBPopoverWebComponent>('[data-testid="nested-inner"]')!;
    await waitFor(() => expect(outer.isOpen).toBe(true));
    expectCloseTo(openOuter.getBoundingClientRect().top, initialPosition.top);
    expectCloseTo(openOuter.getBoundingClientRect().left, initialPosition.left);
    await userEvent.click(getNativeButton(openInner));
    await waitFor(() => expect(inner.isOpen).toBe(true));
    expect(inner.shadowRoot!.activeElement).toBe(getPopoverContent(inner));
    expect(inner.querySelector("jb-select")!.isOpen).toBe(false);
    await waitFor(() => {
      const rect = getPopoverContent(inner).getBoundingClientRect();
      expect(rect.top).toBeGreaterThanOrEqual(0);
      expect(rect.bottom).toBeLessThanOrEqual(window.innerHeight + 1);
      expect(rect.left).toBeGreaterThanOrEqual(0);
      expect(rect.right).toBeLessThanOrEqual(window.innerWidth + 1);
    });
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(inner.isOpen).toBe(false);
      expect(outer.isOpen).toBe(true);
    });
    const saveHost = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="nested-save"]')!;
    const saveButton = getNativeButton(saveHost);
    saveButton.setAttribute("autofocus", "");
    try {
      await userEvent.click(getNativeButton(openInner));
      await waitFor(() => expect(inner.isOpen).toBe(true));
      expect(saveHost.shadowRoot!.activeElement).toBe(saveButton);
      expect(inner.querySelector("jb-select")!.isOpen).toBe(false);
      await userEvent.click(saveButton);
    } finally {
      saveButton.removeAttribute("autofocus");
    }
    await waitFor(() => expect(inner.isOpen).toBe(false));
    expect(outer.isOpen).toBe(true);
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      mode: "open"
    });
    const modalWrapper = document.createElement("div");
    const modalSlot = document.createElement("slot");
    modalWrapper.style.transform = "translate(6rem, 4rem)";
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
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
          display: "grid",
          gap: "0.75rem"
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
            <JBButton color="light" onClick={() => setIsModalOpen(false)}>
              Close modal
            </JBButton>
          </div>
        </JBModal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const modalOpener = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="open-modal"]')!;
    await userEvent.click(getNativeButton(modalOpener));
    const modal = canvasElement.querySelector("jb-modal")!;
    const overflowContent = canvasElement.querySelector<HTMLElement>('[data-testid="modal-overflow-content"]')!;
    const popoverOpener = canvasElement.querySelector<JBButtonWebComponent>('[data-testid="open-modal-popover"]')!;
    const popover = canvasElement.querySelector<JBPopoverWebComponent>('[data-testid="modal-popover"]')!;
    const wrapper = getPopoverWrapper(popover);
    await waitFor(() => {
      expect(modal.isOpen).toBe(true);
      expect(overflowContent.scrollHeight).toBeGreaterThan(overflowContent.clientHeight);
    });
    popoverOpener.scrollIntoView({
      block: "center"
    });
    await userEvent.click(getNativeButton(popoverOpener));
    await waitFor(() => {
      const anchorRect = popoverOpener.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      expect(popover.isOpen).toBe(true);
      expect(wrapper.style.position).toBe("fixed");
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Popover content remains visible when it would overflow.</div>,
    isOpen: false,
    overflowHandler: "SLIDE"
  },
  play: async ({
    canvasElement
  }) => {
    const popover = getPopover(canvasElement);
    popover.bindTarget(getAnchorButton(canvasElement));
    popover.open();
    await waitForPopoverOpen(popover);
    expect(popover.overflowHandler).toBe("SLIDE");
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    id: "mobile-hash-popover",
    children: <div>This popover can be addressed with a URL hash on mobile.</div>,
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const popover = getPopover(canvasElement);
    expect(popover.PopoverHashPath).toBe("#mobile-hash-popover");
    let urlEventDispatched = false;
    popover.addEventListener("url-open", () => {
      urlEventDispatched = true;
    }, {
      once: true
    });
    const currentUrl = window.location.href;
    window.history.replaceState(window.history.state, "", "#mobile-hash-popover");
    popover.checkInitialOpenness();
    expect(popover.isOpen).toBe(true);
    expect(urlEventDispatched).toBe(true);
    popover.close();
    window.history.replaceState(window.history.state, "", currentUrl);
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    popover.dispatchEvent(new CustomEvent("load", {
      bubbles: true,
      composed: true
    }));
    popover.dispatchEvent(new CustomEvent("init", {
      bubbles: true,
      composed: true
    }));
    popover.dispatchEvent(new CustomEvent("close", {
      bubbles: true,
      composed: true,
      detail: {
        eventType: "OUTSIDE_CLICK"
      }
    }));
    await waitFor(() => {
      expect(args.onLoad).toHaveBeenCalled();
      expect(args.onInit).toHaveBeenCalled();
      expect(args.onClose).toHaveBeenCalled();
    });
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
      inline: "end"
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineEndPosition(anchorButton, wrapper);
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    anchorButton.style.width = "18rem";
    popover.bindTarget(anchorButton);
    popover.positionArea = {
      inline: "center"
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineCenterPosition(anchorButton, wrapper, content);
    anchorButton.style.direction = "rtl";
    popover.positionArea = {
      inline: "center"
    };
    await waitFor(() => {
      expectInlineCenterRtlPosition(anchorButton, wrapper, content);
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
      inline: "center-after"
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineCenterAfterPosition(anchorButton, wrapper);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
      inline: "center-before"
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectAfterPosition(anchorButton, wrapper);
    expectInlineCenterBeforePosition(anchorButton, wrapper);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
      block: "before"
    };
    popover.open();
    await waitForPopoverOpen(popover);
    expectBeforePosition(anchorButton, wrapper);
    expectInlineStartPosition(anchorButton, wrapper);
  }
}`,...Z.parameters?.docs?.source}}}}));$();export{Z as BlockBeforePositionArea,K as Events,Y as InlineCenterAfterPositionArea,X as InlineCenterBeforePositionArea,J as InlineCenterPositionArea,q as InlineEndPositionArea,H as InsideScrollableModal,G as MobileHashState,z as NestedPopovers,R as Normal,U as OpenClose,W as OverflowSlide,B as TransformedContainer,Q as __namedExportsOrder,L as default,re as n,$ as t};