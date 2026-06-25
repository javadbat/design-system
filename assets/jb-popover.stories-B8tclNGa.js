import{r,R as n}from"./index-D4lIrffr.js";import{o as V}from"./JBButton-C5Q4-nqF.js";import"./jb-popover-uLAZLIhT.js";import{r as A}from"./index-BijJAI47.js";import"./jb-button-CFQA-aHA.js";import"./jb-loading-BmlEKkU_.js";import"./index-CansPAZh.js";import"./index-Dd_ewvOK.js";let L=m=>{var i;let e=r.useRef(null),{isOpen:t,anchor:o,children:D,onClose:N,onInit:J,ref:K,onLoad:M,overflowDom:E,overflowHandler:v,positionArea:g,...U}=m;return r.useImperativeHandle(K,()=>(e==null?void 0:e.current)??void 0,[e]),r.useEffect(()=>{var s,a;t===!0?(s=e.current)==null||s.open():(a=e.current)==null||a.close()},[t,e.current]),r.useEffect(()=>{e.current&&g&&(e.current.positionArea=g)},[g,e.current]),r.useEffect(()=>{e.current&&v&&(e.current.overflowHandler=v)},[v,e.current]),r.useEffect(()=>{e.current&&(e.current.overflowDom=E??null)},[E,e.current]),r.useEffect(()=>{var s;return o!=null&&o.current&&((s=e.current)==null||s.bindTarget(o.current)),()=>{var a;return(a=e.current)==null?void 0:a.unBindTarget()}},[o]),A(e,"load",(i={onClose:N,onInit:J,onLoad:M}).onLoad,!0),A(e,"init",i.onInit,!0),A(e,"close",i.onClose),n.createElement("jb-popover",{ref:e,...U},D)};L.displayName="JBPopover";const{useArgs:Y}=__STORYBOOK_MODULE_PREVIEW_API__,ee={title:"Components/JBPopover",component:L,decorators:[m=>{const i=r.useRef(null),e=r.useRef(null),[t,o]=Y();return n.createElement("div",{style:{paddingInlineStart:"10dvw",paddingBlockStart:"10dvh"}},n.createElement(V,{ref:i,onClick:()=>{o({isOpen:!t.isOpen})}},"Click me"),n.createElement(m,{args:{...t,anchor:i,ref:e,onClose:()=>{o({isOpen:!1})}}}))}]},l={args:{children:n.createElement("div",null,"Hello World"),isOpen:!1}},c={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{inline:"end"}}},d={args:{children:n.createElement("div",null,n.createElement("div",null,"Popover Will Align on Center of Box"),n.createElement("div",null,"center of the popover is in the center of the trigger button")),isOpen:!1,positionArea:{inline:"center"}}},p={args:{children:n.createElement("div",null,"Align on Center of Box"),isOpen:!1,positionArea:{inline:"center-after"}}},u={args:{children:n.createElement("div",null,n.createElement("div",null,"Popover Will Align Before Center of Box"),n.createElement("div",null,"Test is Easy just change Page direction to see in every possible situation")),isOpen:!1,positionArea:{inline:"center-before"}}},f={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{block:"before"}}};var h,B,O;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,C,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var b,x,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(x=d.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,_,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-after"
    }
  }
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var W,y,w;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(w=(y=u.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var H,T,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  }
}`,...(j=(T=f.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const ne=["Normal","InlineEndPositionArea","InlineCenterPositionArea","InlineCenterAfterPositionArea","InlineCenterBeforePositionArea","BlockBeforePositionArea"];export{f as BlockBeforePositionArea,p as InlineCenterAfterPositionArea,u as InlineCenterBeforePositionArea,d as InlineCenterPositionArea,c as InlineEndPositionArea,l as Normal,ne as __namedExportsOrder,ee as default};
