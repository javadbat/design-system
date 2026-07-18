import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-CI-Ob_5H.js";import{r as a,t as o}from"./react-xDFHksud.js";import{n as s,t as c}from"./react-BQJK6Wt1.js";function l(e){let t=e.querySelector(`jb-button`);return C(t).toBeTruthy(),t}function u(e){let t=e.querySelector(`jb-popover`);return C(t).toBeTruthy(),C(t.shadowRoot).toBeTruthy(),t}function d(e){let t=e.shadowRoot?.querySelector(`.jb-popover-web-component`);return C(t).toBeTruthy(),t}function f(e){let t=e.shadowRoot?.querySelector(`.popover-content-wrapper`);return C(t).toBeTruthy(),t}async function p(e){let t=d(e);await w(()=>{C(e.isOpen).toBe(!0),C(t.classList.contains(`--opened`)).toBe(!0)})}function m(e,t){C(Math.round(e)).toBe(Math.round(t))}function h(e,t){let n=e.getBoundingClientRect();C(t.style.position).toBe(`fixed`),m(parseFloat(t.style.insetBlockStart),n.bottom),C(t.style.insetBlockEnd).toBe(`unset`)}function g(e,t){let n=e.getBoundingClientRect();C(t.style.position).toBe(`fixed`),C(t.style.insetBlockStart).toBe(`unset`),m(parseFloat(t.style.insetBlockEnd),window.innerHeight-n.top)}function _(e,t){let n=e.getBoundingClientRect();m(parseFloat(t.style.insetInlineStart),n.left),C(t.style.insetInlineEnd).toBe(`unset`)}function v(e,t){let n=e.getBoundingClientRect();C(t.style.insetInlineStart).toBe(`unset`),m(parseFloat(t.style.insetInlineEnd),window.innerWidth-n.right)}function y(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=r.left+r.width/2-i.width/2;m(parseFloat(t.style.insetInlineStart),a),C(t.style.insetInlineEnd).toBe(`unset`)}function b(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth-r.left-r.width/2-i.width/2;m(parseFloat(t.style.insetInlineStart),a),C(t.style.insetInlineEnd).toBe(`unset`)}function x(e,t){let n=e.getBoundingClientRect(),r=n.left+n.width/2;m(parseFloat(t.style.insetInlineStart),r),C(t.style.insetInlineEnd).toBe(`unset`)}function S(e,t){let n=e.getBoundingClientRect(),r=window.innerWidth-n.left-n.width/2;C(t.style.insetInlineStart).toBe(`unset`),m(parseFloat(t.style.insetInlineEnd),r)}var C,w,T=t((()=>{({expect:C,waitFor:w}=__STORYBOOK_MODULE_TEST__)})),E=e({BlockBeforePositionArea:()=>L,InlineCenterAfterPositionArea:()=>F,InlineCenterBeforePositionArea:()=>I,InlineCenterPositionArea:()=>P,InlineEndPositionArea:()=>N,Normal:()=>M,__namedExportsOrder:()=>R,default:()=>j}),D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{r(),o(),c(),D=n(r(),1),T(),O=i(),{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,{waitFor:A}=__STORYBOOK_MODULE_TEST__,j={title:`Components/JBPopover`,component:s,decorators:[e=>{let t=(0,D.useRef)(null),n=(0,D.useRef)(null),[r,i]=k();return(0,O.jsxs)(`div`,{style:{paddingInlineStart:`10dvw`,paddingBlockStart:`10dvh`},children:[(0,O.jsx)(a,{ref:t,onClick:()=>{i({isOpen:!r.isOpen})},children:`Click me`}),(0,O.jsx)(e,{args:{...r,anchor:t,ref:n,onClose:()=>{i({isOpen:!1})}}})]})}]},M={args:{children:(0,O.jsx)(`div`,{children:`Hello World`}),isOpen:!1},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.open(),await p(n),h(t,r),_(t,r)}},N={args:{children:(0,O.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{inline:`end`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={inline:`end`},n.open(),await p(n),h(t,r),v(t,r)}},P={args:{children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{children:`Popover Will Align on Center of Box`}),(0,O.jsx)(`div`,{children:`center of the popover is in the center of the trigger button`})]}),isOpen:!1,positionArea:{inline:`center`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n),i=f(n);t.style.width=`18rem`,n.bindTarget(t),n.positionArea={inline:`center`},n.open(),await p(n),h(t,r),y(t,r,i),t.style.direction=`rtl`,n.positionArea={inline:`center`},await A(()=>{b(t,r,i)})}},F={args:{children:(0,O.jsx)(`div`,{children:`Align on Center of Box`}),isOpen:!1,positionArea:{inline:`center-after`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={inline:`center-after`},n.open(),await p(n),h(t,r),x(t,r)}},I={args:{children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{children:`Popover Will Align Before Center of Box`}),(0,O.jsx)(`div`,{children:`Test is Easy just change Page direction to see in every possible situation`})]}),isOpen:!1,positionArea:{inline:`center-before`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={inline:`center-before`},n.open(),await p(n),h(t,r),S(t,r)}},L={args:{children:(0,O.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{block:`before`}},play:async({canvasElement:e})=>{let t=l(e),n=u(e),r=d(n);n.bindTarget(t),n.positionArea={block:`before`},n.open(),await p(n),g(t,r),_(t,r)}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Normal`,`InlineEndPositionArea`,`InlineCenterPositionArea`,`InlineCenterAfterPositionArea`,`InlineCenterBeforePositionArea`,`BlockBeforePositionArea`]}));z();export{L as BlockBeforePositionArea,F as InlineCenterAfterPositionArea,I as InlineCenterBeforePositionArea,P as InlineCenterPositionArea,N as InlineEndPositionArea,M as Normal,R as __namedExportsOrder,j as default,E as n,z as t};