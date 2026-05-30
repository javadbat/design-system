import{r as i,R as n}from"./index-CEK5zJnf.js";import{o as K}from"./JBButton-W77Xuw-L.js";import"./jb-popover-CkK0yOS-.js";import{r as g}from"./index-DJpgW01c.js";import"./jb-button-MYbfia63.js";import"./jb-loading-BuRiKsux.js";import"./index-BjRxPyWZ.js";import"./index-BtFglznY.js";let T=u=>{var o;let e=i.useRef(null),{isOpen:s,anchor:r,children:W,onClose:y,onInit:J,ref:j,onLoad:w,...D}=u;return i.useImperativeHandle(j,()=>(e==null?void 0:e.current)??void 0,[e]),i.useEffect(()=>{var t,a;s==!0?(t=e.current)==null||t.open():(a=e.current)==null||a.close()},[s,e.current]),i.useEffect(()=>{var t;return r!=null&&r.current&&((t=e.current)==null||t.bindTarget(r.current)),()=>{var a;return(a=e.current)==null?void 0:a.unBindTarget()}},[r]),g(e,"load",(o={onClose:y,onInit:J,onLoad:w}).onLoad,!0),g(e,"init",o.onInit,!0),g(e,"close",o.onClose),n.createElement("jb-popover",{ref:e,...D},W)};T.displayName="JBPopover";const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,X={title:"Components/JBPopover",component:T,decorators:[u=>{const o=i.useRef(null),e=i.useRef(null),[s,r]=M();return n.createElement("div",{style:{paddingInlineStart:"50dvw",paddingBlockStart:"50dvh"}},n.createElement(K,{ref:o,onClick:()=>{r({isOpen:!s.isOpen})}},"Click me"),n.createElement(u,{args:{...s,anchor:o,ref:e,onClose:()=>{r({isOpen:!1})}}}))}]},l={args:{children:n.createElement("div",null,"Hello World"),isOpen:!1}},c={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{inline:"end"}}},d={args:{children:n.createElement("div",null,"Align on Center of Box"),isOpen:!1,positionArea:{inline:"center"}}},p={args:{children:n.createElement("div",null,"Align on Center of Box"),isOpen:!1,positionArea:{inline:"center-after"}}},m={args:{children:n.createElement("div",null,"Align on Center of Box"),isOpen:!1,positionArea:{inline:"center-before"}}},f={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{block:"before"}}};var A,v,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var B,O,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var h,I,P;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center"
    }
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var x,b,R;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-after"
    }
  }
}`,...(R=(b=p.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var S,_,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-before"
    }
  }
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var L,H,N;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  }
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const Z=["Normal","InlineEndPositionArea","InlineCenterPositionArea","InlineCenterAfterPositionArea","InlineCenterBeforePositionArea","BlockBeforePositionArea"];export{f as BlockBeforePositionArea,p as InlineCenterAfterPositionArea,m as InlineCenterBeforePositionArea,d as InlineCenterPositionArea,c as InlineEndPositionArea,l as Normal,Z as __namedExportsOrder,X as default};
