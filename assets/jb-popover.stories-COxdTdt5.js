import{r as o,R as t}from"./index-CEK5zJnf.js";import{o as C}from"./JBButton-W77Xuw-L.js";import"./jb-popover-C02X0F8_.js";import{r as p}from"./index-DJpgW01c.js";import"./jb-button-MYbfia63.js";import"./jb-loading-BuRiKsux.js";import"./index-BjRxPyWZ.js";import"./index-BtFglznY.js";let O=d=>{var n;let e=o.useRef(null),{isOpen:i,anchor:r,children:A,onClose:I,onInit:R,ref:_,onLoad:h,...B}=d;return o.useImperativeHandle(_,()=>(e==null?void 0:e.current)??void 0,[e]),o.useEffect(()=>{var s,a;i==!0?(s=e.current)==null||s.open():(a=e.current)==null||a.close()},[i,e.current]),o.useEffect(()=>{var s;return r!=null&&r.current&&((s=e.current)==null||s.bindTarget(r.current)),()=>{var a;return(a=e.current)==null?void 0:a.unBindTarget()}},[r]),p(e,"load",(n={onClose:I,onInit:R,onLoad:h}).onLoad,!0),p(e,"init",n.onInit,!0),p(e,"close",n.onClose),t.createElement("jb-popover",{ref:e,...B},A)};O.displayName="JBPopover";const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/JBPopover",component:O,decorators:[d=>{const n=o.useRef(null),e=o.useRef(null),[i,r]=P();return t.createElement("div",{style:{paddingInline:"5rem",paddingBlock:"5rem"}},t.createElement(C,{ref:n,onClick:()=>{r({isOpen:!0})}},"Click me"),t.createElement(d,{args:{...i,anchor:n,ref:e,onClose:()=>{r({isOpen:!1})}}}))}]},l={args:{children:t.createElement("div",null,"Hello World"),isOpen:!1}},c={args:{children:t.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{inline:"end"}}};var m,u,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var E,g,v;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const y=["Normal","InlineEndPositionArea"];export{c as InlineEndPositionArea,l as Normal,y as __namedExportsOrder,W as default};
