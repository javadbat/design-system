import{r,R as n}from"./index-D4lIrffr.js";import{o as U}from"./JBButton-C5Q4-nqF.js";import"./jb-popover-uLAZLIhT.js";import{r as A}from"./index-BijJAI47.js";let L=m=>{var t;let e=r.useRef(null),{isOpen:i,anchor:o,children:N,onClose:D,onInit:J,ref:M,onLoad:z,overflowDom:E,overflowHandler:v,positionArea:g,...K}=m;return r.useImperativeHandle(M,()=>(e==null?void 0:e.current)??void 0,[e]),r.useEffect(()=>{var s,a;i===!0?(s=e.current)==null||s.open():(a=e.current)==null||a.close()},[i,e.current]),r.useEffect(()=>{e.current&&g&&(e.current.positionArea=g)},[g,e.current]),r.useEffect(()=>{e.current&&v&&(e.current.overflowHandler=v)},[v,e.current]),r.useEffect(()=>{e.current&&(e.current.overflowDom=E??null)},[E,e.current]),r.useEffect(()=>{var s;return o!=null&&o.current&&((s=e.current)==null||s.bindTarget(o.current)),()=>{var a;return(a=e.current)==null?void 0:a.unBindTarget()}},[o]),A(e,"load",(t={onClose:D,onInit:J,onLoad:z}).onLoad,!0),A(e,"init",t.onInit,!0),A(e,"close",t.onClose),n.createElement("jb-popover",{ref:e,...K},N)};L.displayName="JBPopover";const{useArgs:V}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:"Components/JBPopover",component:L,decorators:[m=>{const t=r.useRef(null),e=r.useRef(null),[i,o]=V();return n.createElement("div",{style:{paddingInlineStart:"10dvw",paddingBlockStart:"10dvh"}},n.createElement(U,{ref:t,onClick:()=>{o({isOpen:!i.isOpen})}},"Click me"),n.createElement(m,{args:{...i,anchor:t,ref:e,onClose:()=>{o({isOpen:!1})}}}))}]},l={args:{children:n.createElement("div",null,"Hello World"),isOpen:!1}},c={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{inline:"end"}}},d={args:{children:n.createElement("div",null,n.createElement("div",null,"Popover Will Align on Center of Box"),n.createElement("div",null,"center of the popover is in the center of the trigger button")),isOpen:!1,positionArea:{inline:"center"}}},p={args:{children:n.createElement("div",null,"Align on Center of Box"),isOpen:!1,positionArea:{inline:"center-after"}}},u={args:{children:n.createElement("div",null,n.createElement("div",null,"Popover Will Align Before Center of Box"),n.createElement("div",null,"Test is Easy just change Page direction to see in every possible situation")),isOpen:!1,positionArea:{inline:"center-before"}}},f={args:{children:n.createElement("div",null,"Align on End of Box"),isOpen:!1,positionArea:{block:"before"}}};var h,B,O;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <div>Hello World</div>,
    isOpen: false
  }
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,C,b;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "end"
    }
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var I,x,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var S,R,y;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <div>Align on Center of Box</div>,
    isOpen: false,
    positionArea: {
      inline: "center-after"
    }
  }
}`,...(y=(R=p.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var k,W,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var T,w,H;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <div>Align on End of Box</div>,
    isOpen: false,
    positionArea: {
      block: "before"
    }
  }
}`,...(H=(w=f.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const q=["Normal","InlineEndPositionArea","InlineCenterPositionArea","InlineCenterAfterPositionArea","InlineCenterBeforePositionArea","BlockBeforePositionArea"],Z=Object.freeze(Object.defineProperty({__proto__:null,BlockBeforePositionArea:f,InlineCenterAfterPositionArea:p,InlineCenterBeforePositionArea:u,InlineCenterPositionArea:d,InlineEndPositionArea:c,Normal:l,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{d as I,l as N,Z as P};
