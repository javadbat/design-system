import{r as s,R as r}from"./index-CEK5zJnf.js";import{o as C}from"./JBButton-W77Xuw-L.js";import"./jb-popover-DJy27njC.js";import{r as m}from"./index-DJpgW01c.js";import"./jb-button-MYbfia63.js";import"./jb-loading-BuRiKsux.js";import"./index-BjRxPyWZ.js";import"./index-BtFglznY.js";let I=p=>{var o;let e=s.useRef(null),{isOpen:t,anchor:n,children:R,onClose:_,onInit:P,ref:b,onLoad:k,...x}=p;return s.useImperativeHandle(b,()=>(e==null?void 0:e.current)??void 0,[e]),s.useEffect(()=>{var a,i;t==!0?(a=e.current)==null||a.open():(i=e.current)==null||i.close()},[t,e.current]),s.useEffect(()=>{var a;return n!=null&&n.current&&((a=e.current)==null||a.bindTarget(n.current)),()=>{var i;return(i=e.current)==null?void 0:i.unBindTarget()}},[n]),m(e,"load",(o={onClose:_,onInit:P,onLoad:k}).onLoad,!0),m(e,"init",o.onInit,!0),m(e,"close",o.onClose),r.createElement("jb-popover",{ref:e,...x},R)};I.displayName="JBPopover";const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/JBPopover",component:I,decorators:[p=>{const o=s.useRef(null),e=s.useRef(null),[t,n]=L();return r.createElement("div",{style:{paddingInline:"5rem",paddingBlock:"5rem"}},r.createElement(C,{ref:o,onClick:()=>{n({isOpen:!t.isOpen})}},"Click me"),r.createElement(p,{args:{...t,anchor:o,ref:e,onClose:()=>{n({isOpen:!1})}}}))}]},l={args:{children:r.createElement("div",null,"Hello World"),isOpen:!1}},c={args:{children:r.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{inline:"end"}}},d={args:{children:r.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{block:"before"}}};var u,f,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var E,v,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var O,B,h;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  }
}`,...(h=(B=d.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};const K=["Normal","InlineEndPositionArea","BlockBeforePositionArea"];export{d as BlockBeforePositionArea,c as InlineEndPositionArea,l as Normal,K as __namedExportsOrder,D as default};
