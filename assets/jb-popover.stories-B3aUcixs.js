import{r as i,R as n}from"./index-CMhrCaxv.js";import{o as K}from"./JBButton-CHnNN6Xl.js";import"./jb-popover-cKkzZLRf.js";import{r as v}from"./index-DOk7Zm8f.js";import"./jb-button-MYbfia63.js";import"./jb-loading-BuRiKsux.js";import"./index-BjRxPyWZ.js";import"./index-BtFglznY.js";let L=f=>{var o;let e=i.useRef(null),{isOpen:t,anchor:r,children:j,onClose:H,onInit:N,ref:J,onLoad:w,...D}=f;return i.useImperativeHandle(J,()=>(e==null?void 0:e.current)??void 0,[e]),i.useEffect(()=>{var s,a;t==!0?(s=e.current)==null||s.open():(a=e.current)==null||a.close()},[t,e.current]),i.useEffect(()=>{var s;return r!=null&&r.current&&((s=e.current)==null||s.bindTarget(r.current)),()=>{var a;return(a=e.current)==null?void 0:a.unBindTarget()}},[r]),v(e,"load",(o={onClose:H,onInit:N,onLoad:w}).onLoad,!0),v(e,"init",o.onInit,!0),v(e,"close",o.onClose),n.createElement("jb-popover",{ref:e,...D},j)};L.displayName="JBPopover";const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,X={title:"Components/JBPopover",component:L,decorators:[f=>{const o=i.useRef(null),e=i.useRef(null),[t,r]=M();return n.createElement("div",{style:{paddingInlineStart:"10dvw",paddingBlockStart:"10dvh"}},n.createElement(K,{ref:o,onClick:()=>{r({isOpen:!t.isOpen})}},"Click me"),n.createElement(f,{args:{...t,anchor:o,ref:e,onClose:()=>{r({isOpen:!1})}}}))}]},l={args:{children:n.createElement("div",null,"Hello World"),isOpen:!1}},c={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{inline:"end"}}},d={args:{children:n.createElement("div",null,n.createElement("div",null,"Popover Will Align on Center of Box"),n.createElement("div",null,"center of the popover is in the center of the trigger button")),isOpen:!1,positionArea:{inline:"center"}}},p={args:{children:n.createElement("div",null,"Align on Center of Box"),isOpen:!1,positionArea:{inline:"center-after"}}},m={args:{children:n.createElement("div",null,n.createElement("div",null,"Popover Will Align Before Center of Box"),n.createElement("div",null,"Test is Easy just change Page direction to see in every possible situation")),isOpen:!1,positionArea:{inline:"center-before"}}},u={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{block:"before"}}};var g,A,E;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var h,B,O;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,C,I;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var b,x,R;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-after"
    }
  }
}`,...(R=(x=p.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,_,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var W,y,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  }
}`,...(T=(y=u.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const Z=["Normal","InlineEndPositionArea","InlineCenterPositionArea","InlineCenterAfterPositionArea","InlineCenterBeforePositionArea","BlockBeforePositionArea"];export{u as BlockBeforePositionArea,p as InlineCenterAfterPositionArea,m as InlineCenterBeforePositionArea,d as InlineCenterPositionArea,c as InlineEndPositionArea,l as Normal,Z as __namedExportsOrder,X as default};
