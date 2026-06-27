import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CI8AyR3H.js";import{r as a,t as o}from"./react--vmouXv9.js";import{r as s,t as c}from"./react-Ez7zuf8t.js";import{t as l}from"./jb-popover-e_-N5CgW.js";var u,d,f=t((()=>{u=n(r(),1),l(),o(),d=e=>{let t=(0,u.useRef)(null),{isOpen:n,anchor:r,children:i,onClose:o,onInit:s,ref:c,onLoad:l,overflowDom:d,overflowHandler:f,positionArea:p,...m}=e;return(0,u.useImperativeHandle)(c,(()=>t?.current??void 0),[t]),(0,u.useEffect)((()=>{!0===n?t.current?.open():t.current?.close()}),[n,t.current]),(0,u.useEffect)((()=>{t.current&&p&&(t.current.positionArea=p)}),[p,t.current]),(0,u.useEffect)((()=>{t.current&&f&&(t.current.overflowHandler=f)}),[f,t.current]),(0,u.useEffect)((()=>{t.current&&(t.current.overflowDom=d??null)}),[d,t.current]),(0,u.useEffect)((()=>(r?.current&&t.current?.bindTarget(r.current),()=>t.current?.unBindTarget())),[r]),function(e,t){a(e,`load`,t.onLoad,!0),a(e,`init`,t.onInit,!0),a(e,`close`,t.onClose)}(t,{onClose:o,onInit:s,onLoad:l}),u.createElement(`jb-popover`,{ref:t,...m},i)},d.displayName=`JBPopover`})),p=t((()=>{f()})),m=e({BlockBeforePositionArea:()=>w,InlineCenterAfterPositionArea:()=>S,InlineCenterBeforePositionArea:()=>C,InlineCenterPositionArea:()=>x,InlineEndPositionArea:()=>b,Normal:()=>y,__namedExportsOrder:()=>T,default:()=>v}),h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{r(),c(),p(),h=n(r(),1),g=i(),{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:`Components/JBPopover`,component:d,decorators:[e=>{let t=(0,h.useRef)(null),n=(0,h.useRef)(null),[r,i]=_();return(0,g.jsxs)(`div`,{style:{paddingInlineStart:`10dvw`,paddingBlockStart:`10dvh`},children:[(0,g.jsx)(s,{ref:t,onClick:()=>{i({isOpen:!r.isOpen})},children:`Click me`}),(0,g.jsx)(e,{args:{...r,anchor:t,ref:n,onClose:()=>{i({isOpen:!1})}}})]})}]},y={args:{children:(0,g.jsx)(`div`,{children:`Hello World`}),isOpen:!1}},b={args:{children:(0,g.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{inline:`end`}}},x={args:{children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{children:`Popover Will Align on Center of Box`}),(0,g.jsx)(`div`,{children:`center of the popover is in the center of the trigger button`})]}),isOpen:!1,positionArea:{inline:`center`}}},S={args:{children:(0,g.jsx)(`div`,{children:`Align on Center of Box`}),isOpen:!1,positionArea:{inline:`center-after`}}},C={args:{children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{children:`Popover Will Align Before Center of Box`}),(0,g.jsx)(`div`,{children:`Test is Easy just change Page direction to see in every possible situation`})]}),isOpen:!1,positionArea:{inline:`center-before`}}},w={args:{children:(0,g.jsx)(`div`,{children:`Align on End of Box`}),isOpen:!1,positionArea:{block:`before`}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
      <div>Popover Will Align on Center of Box</div>
      <div>center of the popover is in the center of the trigger button</div>
      
      </div>,
    isOpen: false,
    positionArea: {
      inline: "center"
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-after"
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <div>Popover Will Align Before Center of Box</div>
        <div>Test is Easy just change Page direction to see in every possible situation</div>
      </div>,
    isOpen: false,
    positionArea: {
      inline: "center-before"
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Normal`,`InlineEndPositionArea`,`InlineCenterPositionArea`,`InlineCenterAfterPositionArea`,`InlineCenterBeforePositionArea`,`BlockBeforePositionArea`]}));E();export{w as BlockBeforePositionArea,S as InlineCenterAfterPositionArea,C as InlineCenterBeforePositionArea,x as InlineCenterPositionArea,b as InlineEndPositionArea,y as Normal,T as __namedExportsOrder,v as default,m as n,E as t};