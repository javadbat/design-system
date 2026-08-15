import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-GXxEDj8I.js";import{r as a,t as o}from"./react-bE4w5FpO.js";import{n as s,t as c}from"./react-CsQEmM_5.js";function l(e){let t=e.querySelector(`jb-button`);return C(t).toBeTruthy(),t}function u(e){let t=e.querySelector(`jb-popover`);return C(t).toBeTruthy(),C(t.shadowRoot).toBeTruthy(),t}function d(e){let t=e.shadowRoot?.querySelector(`.jb-popover-web-component`);return C(t).toBeTruthy(),t}function f(e){let t=e.shadowRoot?.querySelector(`.popover-content-wrapper`);return C(t).toBeTruthy(),t}async function p(e){let t=d(e);await w(()=>{C(e.isOpen).toBe(!0),C(t.classList.contains(`--opened`)).toBe(!0)})}function m(e,t){C(Math.round(e)).toBe(Math.round(t))}function h(e,t){let n=e.getBoundingClientRect();C(t.style.position).toBe(`fixed`),m(parseFloat(t.style.insetBlockStart),n.bottom),C(t.style.insetBlockEnd).toBe(`unset`)}function g(e,t){let n=e.getBoundingClientRect();C(t.style.position).toBe(`fixed`),C(t.style.insetBlockStart).toBe(`unset`),m(parseFloat(t.style.insetBlockEnd),window.innerHeight-n.top)}function _(e,t){let n=e.getBoundingClientRect();m(parseFloat(t.style.insetInlineStart),n.left),C(t.style.insetInlineEnd).toBe(`unset`)}function v(e,t){let n=e.getBoundingClientRect();C(t.style.insetInlineStart).toBe(`unset`),m(parseFloat(t.style.insetInlineEnd),window.innerWidth-n.right)}function y(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=r.left+r.width/2-i.width/2;m(parseFloat(t.style.insetInlineStart),a),C(t.style.insetInlineEnd).toBe(`unset`)}function b(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth-r.left-r.width/2-i.width/2;m(parseFloat(t.style.insetInlineStart),a),C(t.style.insetInlineEnd).toBe(`unset`)}function x(e,t){let n=e.getBoundingClientRect(),r=n.left+n.width/2;m(parseFloat(t.style.insetInlineStart),r),C(t.style.insetInlineEnd).toBe(`unset`)}function S(e,t){let n=e.getBoundingClientRect(),r=window.innerWidth-n.left-n.width/2;C(t.style.insetInlineStart).toBe(`unset`),m(parseFloat(t.style.insetInlineEnd),r)}var C,w,T=t((()=>{({expect:C,waitFor:w}=__STORYBOOK_MODULE_TEST__)})),E=e({BlockBeforePositionArea:()=>U,Events:()=>R,InlineCenterAfterPositionArea:()=>V,InlineCenterBeforePositionArea:()=>H,InlineCenterPositionArea:()=>B,InlineEndPositionArea:()=>z,MobileHashState:()=>L,Normal:()=>P,OpenClose:()=>F,OverflowSlide:()=>I,__namedExportsOrder:()=>W,default:()=>N}),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{r(),o(),c(),D=n(r(),1),T(),O=i(),{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:A,fn:j,waitFor:M}=__STORYBOOK_MODULE_TEST__,N={title:`Components/JBPopover`,component:s,decorators:[e=>{let t=(0,D.useRef)(null),n=(0,D.useRef)(null),[r,i]=k();return(0,O.jsxs)(`div`,{style:{paddingInlineStart:`10dvw`,paddingBlockStart:`10dvh`},children:[(0,O.jsx)(a,{ref:t,onClick:()=>{i({isOpen:!r.isOpen})},children:`Click me`}),(0,O.jsx)(e,{args:{...r,anchor:t,ref:n,onClose:()=>{r.onClose?.(),i({isOpen:!1})}}})]})}]},P={args:{children:(0,O.jsx)(`div`,{children:`Hello World`}),isOpen:!1},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.open(),await p(n),h(t,r),_(t,r)}},F={args:{children:(0,O.jsx)(`div`,{children:`Open and close the popover programmatically.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=u(e);t.bindTarget(l(e)),t.open(),await p(t),t.close(),await M(()=>A(t.isOpen).toBe(!1)),t.unBindTarget()}},I={args:{children:(0,O.jsx)(`div`,{children:`Popover content remains visible when it would overflow.`}),isOpen:!1,overflowHandler:`SLIDE`},play:async({canvasElement:e})=>{let t=u(e);t.bindTarget(l(e)),t.open(),await p(t),A(t.overflowHandler).toBe(`SLIDE`)}},L={args:{id:`mobile-hash-popover`,children:(0,O.jsx)(`div`,{children:`This popover can be addressed with a URL hash on mobile.`}),isOpen:!1},play:async({canvasElement:e})=>{let t=u(e);A(t.PopoverHashPath).toBe(`#mobile-hash-popover`);let n=!1;t.addEventListener(`urlOpen`,()=>{n=!0},{once:!0});let r=window.location.href;window.history.replaceState(window.history.state,``,`#mobile-hash-popover`),t.checkInitialOpenness(),A(t.isOpen).toBe(!0),A(n).toBe(!0),t.close(),window.history.replaceState(window.history.state,``,r)}},R={args:{children:(0,O.jsx)(`div`,{children:`Popover lifecycle events.`}),isOpen:!1,onLoad:j(),onInit:j(),onClose:j()},play:async({canvasElement:e,args:t})=>{let n=u(e);n.dispatchEvent(new CustomEvent(`load`,{bubbles:!0,composed:!0})),n.dispatchEvent(new CustomEvent(`init`,{bubbles:!0,composed:!0})),n.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0,detail:{eventType:`OUTSIDE_CLICK`}})),await M(()=>{A(t.onLoad).toHaveBeenCalled(),A(t.onInit).toHaveBeenCalled(),A(t.onClose).toHaveBeenCalled()})}},z={args:{children:(0,O.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{inline:`end`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={inline:`end`},n.open(),await p(n),h(t,r),v(t,r)}},B={args:{children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{children:`Popover Will Align on Center of Box`}),(0,O.jsx)(`div`,{children:`center of the popover is in the center of the trigger button`})]}),isOpen:!1,positionArea:{inline:`center`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n),i=f(n);t.style.width=`18rem`,n.bindTarget(t),n.positionArea={inline:`center`},n.open(),await p(n),h(t,r),y(t,r,i),t.style.direction=`rtl`,n.positionArea={inline:`center`},await M(()=>{b(t,r,i)})}},V={args:{children:(0,O.jsx)(`div`,{children:`Align on Center of Box`}),isOpen:!1,positionArea:{inline:`center-after`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={inline:`center-after`},n.open(),await p(n),h(t,r),x(t,r)}},H={args:{children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{children:`Popover Will Align Before Center of Box`}),(0,O.jsx)(`div`,{children:`Test is Easy just change Page direction to see in every possible situation`})]}),isOpen:!1,positionArea:{inline:`center-before`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={inline:`center-before`},n.open(),await p(n),h(t,r),S(t,r)}},U={args:{children:(0,O.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{block:`before`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={block:`before`},n.open(),await p(n),g(t,r),_(t,r)}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Normal`,`OpenClose`,`OverflowSlide`,`MobileHashState`,`Events`,`InlineEndPositionArea`,`InlineCenterPositionArea`,`InlineCenterAfterPositionArea`,`InlineCenterBeforePositionArea`,`BlockBeforePositionArea`]}));G();export{U as BlockBeforePositionArea,R as Events,V as InlineCenterAfterPositionArea,H as InlineCenterBeforePositionArea,B as InlineCenterPositionArea,z as InlineEndPositionArea,L as MobileHashState,P as Normal,F as OpenClose,I as OverflowSlide,W as __namedExportsOrder,N as default,E as n,G as t};