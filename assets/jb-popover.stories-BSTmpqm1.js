import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-ggKXR4rT.js";import{r as a,t as o}from"./react-BLwDrkbf.js";import{r as s,t as c}from"./react-CGLJsh9j.js";import{t as l}from"./jb-popover-Dk77L4Lc.js";var u,d,f=t((()=>{u=n(r(),1),l(),o(),d=e=>{let t=(0,u.useRef)(null),{isOpen:n,anchor:r,children:i,onClose:o,onInit:s,ref:c,onLoad:l,overflowDom:d,overflowHandler:f,positionArea:p,...m}=e;return(0,u.useImperativeHandle)(c,(()=>t?.current??void 0),[t]),(0,u.useEffect)((()=>{!0===n?t.current?.open():t.current?.close()}),[n,t.current]),(0,u.useEffect)((()=>{t.current&&p&&(t.current.positionArea=p)}),[p,t.current]),(0,u.useEffect)((()=>{t.current&&f&&(t.current.overflowHandler=f)}),[f,t.current]),(0,u.useEffect)((()=>{t.current&&(t.current.overflowDom=d??null)}),[d,t.current]),(0,u.useEffect)((()=>(r?.current&&t.current?.bindTarget(r.current),()=>t.current?.unBindTarget())),[r]),function(e,t){a(e,`load`,t.onLoad,!0),a(e,`init`,t.onInit,!0),a(e,`close`,t.onClose)}(t,{onClose:o,onInit:s,onLoad:l}),u.createElement(`jb-popover`,{ref:t,...m},i)},d.displayName=`JBPopover`})),p=t((()=>{f()}));function m(e){let t=e.querySelector(`jb-button`);return O(t).toBeTruthy(),t}function h(e){let t=e.querySelector(`jb-popover`);return O(t).toBeTruthy(),O(t.shadowRoot).toBeTruthy(),t}function g(e){let t=e.shadowRoot?.querySelector(`.jb-popover-web-component`);return O(t).toBeTruthy(),t}function _(e){let t=e.shadowRoot?.querySelector(`.popover-content-wrapper`);return O(t).toBeTruthy(),t}async function v(e){let t=g(e);await k(()=>{O(e.isOpen).toBe(!0),O(t.classList.contains(`--opened`)).toBe(!0)})}function y(e,t){O(Math.round(e)).toBe(Math.round(t))}function b(e,t){let n=e.getBoundingClientRect();O(t.style.position).toBe(`fixed`),y(parseFloat(t.style.insetBlockStart),n.bottom),O(t.style.insetBlockEnd).toBe(`unset`)}function x(e,t){let n=e.getBoundingClientRect();O(t.style.position).toBe(`fixed`),O(t.style.insetBlockStart).toBe(`unset`),y(parseFloat(t.style.insetBlockEnd),window.innerHeight-n.top)}function S(e,t){let n=e.getBoundingClientRect();y(parseFloat(t.style.insetInlineStart),n.left),O(t.style.insetInlineEnd).toBe(`unset`)}function C(e,t){let n=e.getBoundingClientRect();O(t.style.insetInlineStart).toBe(`unset`),y(parseFloat(t.style.insetInlineEnd),window.innerWidth-n.right)}function w(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=r.left+r.width/2-i.width/2;y(parseFloat(t.style.insetInlineStart),a),O(t.style.insetInlineEnd).toBe(`unset`)}function T(e,t,n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth-r.left-r.width/2-i.width/2;y(parseFloat(t.style.insetInlineStart),a),O(t.style.insetInlineEnd).toBe(`unset`)}function E(e,t){let n=e.getBoundingClientRect(),r=n.left+n.width/2;y(parseFloat(t.style.insetInlineStart),r),O(t.style.insetInlineEnd).toBe(`unset`)}function D(e,t){let n=e.getBoundingClientRect(),r=window.innerWidth-n.left-n.width/2;O(t.style.insetInlineStart).toBe(`unset`),y(parseFloat(t.style.insetInlineEnd),r)}var O,k,A=t((()=>{({expect:O,waitFor:k}=__STORYBOOK_MODULE_TEST__)})),j=e({BlockBeforePositionArea:()=>H,InlineCenterAfterPositionArea:()=>B,InlineCenterBeforePositionArea:()=>V,InlineCenterPositionArea:()=>z,InlineEndPositionArea:()=>R,Normal:()=>L,__namedExportsOrder:()=>U,default:()=>I}),M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{r(),c(),p(),M=n(r(),1),A(),N=i(),{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,{waitFor:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/JBPopover`,component:d,decorators:[e=>{let t=(0,M.useRef)(null),n=(0,M.useRef)(null),[r,i]=P();return(0,N.jsxs)(`div`,{style:{paddingInlineStart:`10dvw`,paddingBlockStart:`10dvh`},children:[(0,N.jsx)(s,{ref:t,onClick:()=>{i({isOpen:!r.isOpen})},children:`Click me`}),(0,N.jsx)(e,{args:{...r,anchor:t,ref:n,onClose:()=>{i({isOpen:!1})}}})]})}]},L={args:{children:(0,N.jsx)(`div`,{children:`Hello World`}),isOpen:!1},play:async({canvasElement:e})=>{let t=m(e),n=h(e),r=g(n);n.bindTarget(t),n.open(),await v(n),b(t,r),S(t,r)}},R={args:{children:(0,N.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{inline:`end`}},play:async({canvasElement:e})=>{let t=m(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={inline:`end`},n.open(),await v(n),b(t,r),C(t,r)}},z={args:{children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{children:`Popover Will Align on Center of Box`}),(0,N.jsx)(`div`,{children:`center of the popover is in the center of the trigger button`})]}),isOpen:!1,positionArea:{inline:`center`}},play:async({canvasElement:e})=>{let t=m(e),n=h(e),r=g(n),i=_(n);t.style.width=`18rem`,n.bindTarget(t),n.positionArea={inline:`center`},n.open(),await v(n),b(t,r),w(t,r,i),t.style.direction=`rtl`,n.positionArea={inline:`center`},await F(()=>{T(t,r,i)})}},B={args:{children:(0,N.jsx)(`div`,{children:`Align on Center of Box`}),isOpen:!1,positionArea:{inline:`center-after`}},play:async({canvasElement:e})=>{let t=m(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={inline:`center-after`},n.open(),await v(n),b(t,r),E(t,r)}},V={args:{children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{children:`Popover Will Align Before Center of Box`}),(0,N.jsx)(`div`,{children:`Test is Easy just change Page direction to see in every possible situation`})]}),isOpen:!1,positionArea:{inline:`center-before`}},play:async({canvasElement:e})=>{let t=m(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={inline:`center-before`},n.open(),await v(n),b(t,r),D(t,r)}},H={args:{children:(0,N.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{block:`before`}},play:async({canvasElement:e})=>{let t=m(e),n=h(e),r=g(n);n.bindTarget(t),n.positionArea={block:`before`},n.open(),await v(n),x(t,r),S(t,r)}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Normal`,`InlineEndPositionArea`,`InlineCenterPositionArea`,`InlineCenterAfterPositionArea`,`InlineCenterBeforePositionArea`,`BlockBeforePositionArea`]}));W();export{H as BlockBeforePositionArea,B as InlineCenterAfterPositionArea,V as InlineCenterBeforePositionArea,z as InlineCenterPositionArea,R as InlineEndPositionArea,L as Normal,U as __namedExportsOrder,I as default,j as n,W as t};