var et=Object.defineProperty;var H=s=>{throw TypeError(s)};var st=(s,e,t)=>e in s?et(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var N=(s,e,t)=>st(s,typeof e!="symbol"?e+"":e,t),x=(s,e,t)=>e.has(s)||H("Cannot "+t);var n=(s,e,t)=>(x(s,e,"read from private field"),t?t.call(s):e.get(s)),p=(s,e,t)=>e.has(s)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),c=(s,e,t,r)=>(x(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t),a=(s,e,t)=>(x(s,e,"access private method"),t);import{R as m,r as d}from"./index-D4lIrffr.js";import"./jb-loading-D4Szr20-.js";import{r as S}from"./index-B65NTg4l.js";let w=function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s}({});var E,A,g,v,f,y,u,i,k,h,T,B,Q,U,V,O,R,X,b,Y,_,it=(_=class extends HTMLElement{constructor(){super();p(this,i);N(this,"elements");p(this,E,!1);p(this,A,0);p(this,g,!1);p(this,v,!1);p(this,f,!1);p(this,y,null);p(this,u);p(this,h,w.forceWait);typeof this.attachInternals=="function"&&c(this,u,this.attachInternals()),a(this,i,Q).call(this)}set stateChangeWaitingBehavior(e){c(this,h,a(this,i,T).call(this,e))}get stateChangeWaitingBehavior(){return n(this,h)}get disableCaptureScroll(){return n(this,f)}set disableCaptureScroll(e){c(this,f,e),a(this,i,b).call(this,!1)}get isListEnded(){return n(this,g)}set isListEnded(e){c(this,g,e),a(this,i,b).call(this,!1)}get isLoading(){return n(this,E)}set isLoading(e){var t,r,o,L;c(this,E,e),a(this,i,b).call(this,!1),e?((t=this.elements)==null||t.loading.classList.add("--show"),(r=n(this,u).states)==null||r.add("loading")):((o=this.elements)==null||o.loading.classList.remove("--show"),(L=n(this,u).states)==null||L.delete("loading"),a(this,i,B).call(this),a(this,i,O).call(this))}get isListEmpty(){return n(this,y)}set isListEmpty(e){var t,r;c(this,y,e),e?(t=n(this,u).states)==null||t.add("empty"):(r=n(this,u).states)==null||r.delete("empty"),a(this,i,b).call(this,!1),a(this,i,B).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,i,V).call(this),this.callOnInitEvent()}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}get canCaptureScroll(){return!(n(this,E)||n(this,i,k)||n(this,g)||n(this,v)||n(this,f))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior"]}attributeChangedCallback(e,t,r){a(this,i,Y).call(this,e,r)}},E=new WeakMap,A=new WeakMap,g=new WeakMap,v=new WeakMap,f=new WeakMap,y=new WeakMap,u=new WeakMap,i=new WeakSet,k=function(){if(n(this,y)!==null)return n(this,y)},h=new WeakMap,T=function(e){switch(e){case"FORCE_WAIT":default:return w.forceWait;case"NO_WAIT":return w.noWait}},B=function(){var e,t,r,o;n(this,i,k)?((e=this.elements)==null||e.emptyListWrapper.classList.add("--show"),(t=this.elements)==null||t.contentWrapper.classList.remove("--show")):((r=this.elements)==null||r.contentWrapper.classList.add("--show"),(o=this.elements)==null||o.emptyListWrapper.classList.remove("--show"))},Q=function(){const e=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{display:flex;justify-content:center;align-items:center}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){height:100%;width:100%;display:flex;justify-content:center;align-items:center;max-height:100%;overflow-y:hidden;background-color:rgba(0,0,0,0);padding:1rem;box-sizing:border-box}</style>
<div class="infinite-scroll-component">
    <div class="content-wrapper" part="content-wrapper">
        <slot name="content"></slot>
        <div class="loading-wrapper" part="loading-wrapper">
            <slot name="loading">
                <div class="default-loading">
                    <jb-loading part="default-loading"></jb-loading>
                </div>
            </slot>
        </div>
    </div>
    <div class="empty-list-wrapper" part="empty-list-wrapper">
        <slot name="empty">
        </slot>
    </div>
    
</div>`,e.appendChild(t.content.cloneNode(!0)),this.elements={loading:e.querySelector(".loading-wrapper"),componentWrapper:e.querySelector(".Infinite-scroll-component"),contentWrapper:e.querySelector(".content-wrapper"),loadingWrapper:e.querySelector(".loading-wrapper"),emptyListWrapper:e.querySelector(".empty-list-wrapper")}},U=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,i,X).bind(this),{passive:!0})},V=function(){a(this,i,U).call(this),a(this,i,O).call(this)},O=function(){const{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&a(this,i,R).call(this)},R=function(){a(this,i,b).call(this,!0);const e=new CustomEvent("scrollEnd");this.dispatchEvent(e)},X=function(){const{scrollTop:e,scrollHeight:t,clientHeight:r}=this.elements.contentWrapper;e+r+n(this,A)>=t&&this.canCaptureScroll&&a(this,i,R).call(this)},b=function(e){if(e){if(n(this,h)===w.forceWait)c(this,v,!0);else if(n(this,h)===w.noWait)return}c(this,v,!1)},Y=function(e,t){switch(e){case"is-loading":this.isLoading=t==="true";break;case"is-list-empty":this.isListEmpty=t==="true";break;case"is-list-ended":c(this,g,t==="true");break;case"disable-capture-scroll":c(this,f,t==="true");break;case"state-change-waiting-behavior":c(this,h,a(this,i,T).call(this,t))}},_);!customElements.get("jb-infinite-scroll")&&window.customElements.define("jb-infinite-scroll",it);let j=m.forwardRef((s,e)=>{let t=d.useRef(null);return d.useImperativeHandle(e,()=>t?t.current:void 0,[t]),d.useEffect(()=>{t.current&&typeof s.isLoading=="boolean"&&(s.isLoading?t.current.setAttribute("is-loading","true"):t.current.setAttribute("is-loading","false"))},[t.current,s.isLoading]),d.useEffect(()=>{t.current,typeof s.isListEmpty=="boolean"&&(s.isListEmpty?t.current.setAttribute("is-list-empty","true"):t.current.setAttribute("is-list-empty","false"))},[t.current,s.isListEmpty]),d.useEffect(()=>{var r,o;t.current&&typeof s.isListEnded=="boolean"&&(s.isListEnded?(r=t.current)==null||r.setAttribute("is-list-ended","true"):(o=t.current)==null||o.setAttribute("is-list-ended","false"))},[t.current,s.isListEnded]),d.useEffect(()=>{var r,o;t.current&&typeof s.disableCaptureScroll=="boolean"&&(s.disableCaptureScroll?(r=t.current)==null||r.setAttribute("disable-capture-scroll","true"):(o=t.current)==null||o.setAttribute("disable-capture-scroll","false"))},[t.current,s.disableCaptureScroll]),d.useEffect(()=>{var r;s.stateChangeWaitingBehavior&&t.current&&((r=t.current)==null||r.setAttribute("state-change-waiting-behavior",s.stateChangeWaitingBehavior))},[t.current,s.stateChangeWaitingBehavior]),S(t,"load",s.onLoad,!0),S(t,"init",s.onInit,!0),S(t,"scroll",s.onScroll),S(t,"scrollEnd",s.onScrollEnd,!0),m.createElement("jb-infinite-scroll",{style:s.style,class:s.className,ref:t},s.children)});j.displayName="JBInfiniteScroll";const lt={title:"Components/JBInfiniteScroll",component:j},W={args:{}},C={render:s=>{const e=d.useRef(null),[t,r]=d.useState([1,2,3,4,5,6,7,8,9]),[o,L]=d.useState(!1),[Z,$]=d.useState(!1),tt=()=>{const l=t.at(-1);l>100&&$(!0),L(!0),setTimeout(()=>{r([...t,l+1,l+2,l+3,l+4,l+5,l+6,l+7,l+8,l+9]),L(!1)},1e3)};return m.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},m.createElement(j,{...s,ref:e,onScrollEnd:tt,isLoading:o,isListEnded:Z,disableCaptureScroll:o},m.createElement("div",{slot:"content"},t.map(l=>m.createElement("div",{key:l,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},l)))))}},I={args:{isListEmpty:!0,children:m.createElement("div",{slot:"empty"},"list is empty")}};var q,J,z;W.parameters={...W.parameters,docs:{...(q=W.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {}
}`,...(z=(J=W.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var F,M,D;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [isLoading, setIsLoading] = useState(false);
    const [isListEnded, setIsListEnded] = useState(false);
    const onScrollEnd = () => {
      const i = list.at(-1)!;
      if (i > 100) {
        setIsListEnded(true);
      }
      setIsLoading(true);
      setTimeout(() => {
        setList([...list, ...[i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]]);
        setIsLoading(false);
      }, 1000);
    };
    return <div style={{
      height: "10rem",
      border: "solid 1px #666",
      overflow: "hidden"
    }}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <JBInfiniteScroll {...args} ref={ref} onScrollEnd={onScrollEnd} isLoading={isLoading} isListEnded={isListEnded} disableCaptureScroll={isLoading}>
            <div slot="content">
              {list.map(item => {
            return <div key={item} style={{
              border: 'solid 1px #black',
              fontSize: '3rem',
              textAlign: 'center',
              padding: '2rem'
            }}>{item}</div>;
          })}
            </div>
          </JBInfiniteScroll>
        </div>;
  }
}`,...(D=(M=C.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var G,K,P;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(P=(K=I.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ct=["Normal","ActionTemplate","Empty"];export{C as ActionTemplate,I as Empty,W as Normal,ct as __namedExportsOrder,lt as default};
