var Jt=Object.defineProperty;var Y=s=>{throw TypeError(s)};var Rt=(s,n,t)=>n in s?Jt(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var k=(s,n,t)=>Rt(s,typeof n!="symbol"?n+"":n,t),D=(s,n,t)=>n.has(s)||Y("Cannot "+t);var o=(s,n,t)=>(D(s,n,"read from private field"),t?t.call(s):n.get(s)),u=(s,n,t)=>n.has(s)?Y("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(s):n.set(s,t),h=(s,n,t,i)=>(D(s,n,"write to private field"),i?i.call(s,t):n.set(s,t),t),a=(s,n,t)=>(D(s,n,"access private method"),t);import{R as l,r as d}from"./index-D4lIrffr.js";import"./jb-loading-BmlEKkU_.js";import{r as z}from"./index-BijJAI47.js";import{o as $}from"./JBButton-CbaRHm9y.js";import"./index-CansPAZh.js";import"./jb-button-CtUV5eF-.js";import"./index-Dd_ewvOK.js";var J,f,vt,G,R,St,Z,Nt=(Z=class{constructor(s,n){u(this,f);u(this,J,!1);k(this,"isUserScrolledTop",!1);k(this,"callbacks");k(this,"elements");k(this,"observers",[]);u(this,R,()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()});this.callbacks=s,this.elements=n}get stickToBottom(){return o(this,J)}set stickToBottom(s){h(this,J,s),s?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}init(){const s=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach(n=>{n.nodeType==Node.ELEMENT_NODE&&a(this,f,vt).call(this,n)})};this.elements.contentWrapper.addEventListener("scroll",o(this,R),{passive:!0}),s(),this.elements.contentSlot.addEventListener("slotchange",()=>{a(this,f,G).call(this),s()})}destruct(){a(this,f,G).call(this),this.elements.contentWrapper.removeEventListener("scroll",o(this,R))}calcIsUserScrolledTop(){const{scrollTop:s,scrollHeight:n,clientHeight:t}=this.elements.contentWrapper;return n-(s+t)>100}},J=new WeakMap,f=new WeakSet,vt=function(s){const n=new MutationObserver(a(this,f,St).bind(this));n.observe(s,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(n)},G=function(){this.observers.forEach(s=>s.disconnect())},R=new WeakMap,St=function(s,n){s.find(t=>t.addedNodes!==null)&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()},Z);let A=function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s}({});var L,F,y,C,w,T,v,r,K,S,N,P,Q,Lt,yt,wt,V,X,Tt,kt,B,Bt,tt,Ot=(tt=class extends HTMLElement{constructor(){super();u(this,r);k(this,"elements");u(this,L,!1);u(this,F,0);u(this,y,!1);u(this,C,!1);u(this,w,!1);u(this,T,null);u(this,v);u(this,S,A.forceWait);u(this,N);typeof this.attachInternals=="function"&&h(this,v,this.attachInternals()),a(this,r,Lt).call(this)}set stateChangeWaitingBehavior(t){h(this,S,a(this,r,P).call(this,t))}get stateChangeWaitingBehavior(){return o(this,S)}get disableCaptureScroll(){return o(this,w)}set disableCaptureScroll(t){h(this,w,t),a(this,r,B).call(this,!1)}get isListEnded(){return o(this,y)}set isListEnded(t){h(this,y,t),a(this,r,B).call(this,!1)}get isLoading(){return o(this,L)}set isLoading(t){var i,e,m,E;h(this,L,t),a(this,r,B).call(this,!1),t?((i=this.elements)==null||i.loading.classList.add("--show"),(e=o(this,v).states)==null||e.add("loading")):((m=this.elements)==null||m.loading.classList.remove("--show"),(E=o(this,v).states)==null||E.delete("loading"),a(this,r,Q).call(this),a(this,r,V).call(this))}get isListEmpty(){return o(this,T)??!1}set isListEmpty(t){var i,e;h(this,T,t),t?(i=o(this,v).states)==null||i.add("empty"):(e=o(this,v).states)==null||e.delete("empty"),a(this,r,B).call(this,!1),a(this,r,Q).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,r,wt).call(this),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!1});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!1});this.dispatchEvent(t)}scrollTo(t,i){i?this.elements.contentWrapper.scrollTo(t,i):this.elements.contentWrapper.scrollTo(t)}scrollToEnd(t){this.scrollTo({...t,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(o(this,L)||o(this,r,K)||o(this,y)||o(this,C)||o(this,w))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior","stick-to-bottom"]}attributeChangedCallback(t,i,e){a(this,r,Bt).call(this,t,e)}},L=new WeakMap,F=new WeakMap,y=new WeakMap,C=new WeakMap,w=new WeakMap,T=new WeakMap,v=new WeakMap,r=new WeakSet,K=function(){return o(this,T)!==null?o(this,T):null},S=new WeakMap,N=new WeakMap,P=function(t){switch(t){case"FORCE_WAIT":default:return A.forceWait;case"NO_WAIT":return A.noWait}},Q=function(){var t,i,e,m;o(this,r,K)?((t=this.elements)==null||t.emptyListWrapper.classList.add("--show"),(i=this.elements)==null||i.contentWrapper.classList.remove("--show")):((e=this.elements)==null||e.contentWrapper.classList.add("--show"),(m=this.elements)==null||m.emptyListWrapper.classList.remove("--show"))},Lt=function(){const t=this.attachShadow({mode:"open",clonable:!0,serializable:!0}),i=document.createElement("template");i.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;max-height:100%;padding:1rem;display:flex;overflow-y:hidden}</style>

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
  </div>
      `,t.appendChild(i.content.cloneNode(!0)),this.elements={loading:t.querySelector(".loading-wrapper"),componentWrapper:t.querySelector(".Infinite-scroll-component"),contentWrapper:t.querySelector(".content-wrapper"),loadingWrapper:t.querySelector(".loading-wrapper"),emptyListWrapper:t.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":o(this,L),h(this,N,new Nt({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector("slot")}))},yt=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,r,Tt).bind(this),{passive:!0})},wt=function(){a(this,r,yt).call(this),a(this,r,V).call(this)},V=function(){const{scrollHeight:t,clientHeight:i}=this.elements.contentWrapper;t<=i&&this.canCaptureScroll&&a(this,r,X).call(this)},X=function(){a(this,r,B).call(this,!0);const t=new CustomEvent("scrollEnd");this.dispatchEvent(t)},Tt=function(){const{scrollTop:t,scrollHeight:i,clientHeight:e}=this.elements.contentWrapper;a(this,r,kt).call(this),t+e+o(this,F)>=i&&this.canCaptureScroll&&a(this,r,X).call(this)},kt=function(){const t=new Event("scroll",{bubbles:!1,cancelable:!1,composed:!0});this.dispatchEvent(t)},B=function(t){if(t){if(o(this,S)===A.forceWait)h(this,C,!0);else if(o(this,S)===A.noWait)return}h(this,C,!1)},Bt=function(t,i){switch(t){case"is-loading":this.isLoading=i==="true"||i==="";break;case"is-list-empty":this.isListEmpty=i==="true"||i==="";break;case"is-list-ended":h(this,y,i==="true"||i==="");break;case"disable-capture-scroll":h(this,w,i==="true"||i==="");break;case"state-change-waiting-behavior":h(this,S,a(this,r,P).call(this,i));break;case"stick-to-bottom":o(this,N).stickToBottom=i==="true"||i===""}},tt);!customElements.get("jb-infinite-scroll")&&window.customElements.define("jb-infinite-scroll",Ot);let O=l.forwardRef((s,n)=>{var t,i;let e=d.useRef(null);d.useImperativeHandle(n,()=>e.current??void 0,[e]);let{onInit:m,onLoad:E,onScroll:I,onScrollEnd:x,disableCaptureScroll:p,isListEmpty:U,isListEnded:c,stateChangeWaitingBehavior:Wt,isLoading:Ct,stickToBottom:It,children:xt,...At}=s;return t={disableCaptureScroll:p,isListEmpty:U,isListEnded:c,stateChangeWaitingBehavior:Wt,isLoading:Ct,stickToBottom:It},d.useEffect(()=>{e.current&&typeof t.isLoading=="boolean"&&(t.isLoading?e.current.setAttribute("is-loading","true"):e.current.setAttribute("is-loading","false"))},[e.current,t.isLoading]),d.useEffect(()=>{e.current&&typeof t.isListEmpty=="boolean"&&(t.isListEmpty?e.current.setAttribute("is-list-empty","true"):e.current.setAttribute("is-list-empty","false"))},[e.current,t.isListEmpty]),d.useEffect(()=>{var g,b;e.current&&typeof t.isListEnded=="boolean"&&(t.isListEnded?(g=e.current)==null||g.setAttribute("is-list-ended","true"):(b=e.current)==null||b.setAttribute("is-list-ended","false"))},[e.current,t.isListEnded]),d.useEffect(()=>{var g,b;e.current&&typeof t.disableCaptureScroll=="boolean"&&(t.disableCaptureScroll?(g=e.current)==null||g.setAttribute("disable-capture-scroll","true"):(b=e.current)==null||b.setAttribute("disable-capture-scroll","false"))},[e.current,t.disableCaptureScroll]),d.useEffect(()=>{var g,b;e.current&&(t.stickToBottom?(g=e.current)==null||g.setAttribute("stick-to-bottom",""):(b=e.current)==null||b.removeAttribute("stick-to-bottom"))},[e.current,t.stickToBottom]),d.useEffect(()=>{var g;t.stateChangeWaitingBehavior&&e.current&&((g=e.current)==null||g.setAttribute("state-change-waiting-behavior",t.stateChangeWaitingBehavior))},[e.current,t.stateChangeWaitingBehavior]),z(e,"load",(i={onInit:m,onLoad:E,onScroll:I,onScrollEnd:x}).onLoad,!0),z(e,"init",i.onInit,!0),z(e,"scroll",i.onScroll),z(e,"scrollEnd",i.onScrollEnd,!0),l.createElement("jb-infinite-scroll",{ref:e,...At},xt)});O.displayName="JBInfiniteScroll";const $t={title:"Components/JBInfiniteScroll",component:O},H={args:{children:l.createElement("div",{slot:"content"},l.createElement("div",null,"item1"),l.createElement("div",null,"item2"),l.createElement("div",null,"item3"))}},W={render:s=>{const n=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[e,m]=d.useState(!1),[E,I]=d.useState(!1),x=()=>{const p=t.at(-1);p>100&&I(!0),m(!0),setTimeout(()=>{i([...t,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),m(!1)},1e3)};return l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(O,{...s,ref:n,onScrollEnd:x,isLoading:e,isListEnded:E,disableCaptureScroll:e},l.createElement("div",{slot:"content"},t.map(p=>l.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},j={render:s=>{const n=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[e,m]=d.useState(!1),[E,I]=d.useState(!1),x=()=>{const c=t.at(-1);c>100&&I(!0),m(!0),setTimeout(()=>{i([...t,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9]),m(!1)},1e3)},p=()=>{var c;(c=n.current)==null||c.scrollTo({behavior:"smooth",top:400})},U=()=>{var c;(c=n.current)==null||c.scrollToEnd()};return l.createElement(d.Fragment,null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(O,{...s,ref:n,onScrollEnd:x,isLoading:e,isListEnded:E,disableCaptureScroll:e},l.createElement("div",{slot:"content"},t.map(c=>l.createElement("div",{key:c,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},c))))),l.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},l.createElement($,{onClick:U},"scroll to end"),l.createElement($,{onClick:p},"scroll to 400px")))}},_={render:s=>{const n=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]);return l.createElement("div",null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(O,{...s,ref:n},l.createElement("div",{slot:"content"},t.map(e=>l.createElement("div",{key:e,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},e))))),l.createElement($,{size:"sm",onClick:()=>{const e=t.at(-1);i(m=>[...m,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9])}},"add more content to bottom"))},args:{stickToBottom:!0}},q={args:{isListEmpty:!0,children:l.createElement("div",{slot:"empty"},"list is empty")}},M={render:W.render,args:{...W.args,onScroll:s=>console.log("scrolled",s)}};var et,st,it;H.parameters={...H.parameters,docs:{...(et=H.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(it=(st=H.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var nt,rt,ot;W.parameters={...W.parameters,docs:{...(nt=W.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(rt=W.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var lt,at,ct;j.parameters={...j.parameters,docs:{...(lt=j.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<JBInfiniteScrollWebComponent>(null);
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
    const scrollTo = () => {
      ref.current?.scrollTo({
        behavior: 'smooth',
        top: 400
      });
    };
    const scrollToEnd = () => {
      ref.current?.scrollToEnd();
    };
    return <Fragment>
          <div style={{
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
          </div>
          <div style={{
        marginTop: '1rem',
        'display': 'flex',
        gap: '0.5rem'
      }}>
            <JBButton onClick={scrollToEnd}>scroll to end</JBButton>
            <JBButton onClick={scrollTo}>scroll to 400px</JBButton>
          </div>
        </Fragment>;
  }
}`,...(ct=(at=j.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,pt,mt;_.parameters={..._.parameters,docs:{...(dt=_.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return <div>
        <div style={{
        height: "10rem",
        border: "solid 1px #666",
        overflow: "hidden"
      }}>
          <JBInfiniteScroll {...args} ref={ref}>
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

        </div>
        <JBButton size="sm" onClick={() => {
        const i = list.at(-1)!;
        setList(l => [...l, ...[i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]]);
      }}>add more content to bottom</JBButton>
      </div>;
  },
  args: {
    stickToBottom: true
  }
}`,...(mt=(pt=_.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ut,ht,gt;q.parameters={...q.parameters,docs:{...(ut=q.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(gt=(ht=q.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};var ft,Et,bt;M.parameters={...M.parameters,docs:{...(ft=M.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: ActionTemplate.render,
  args: {
    ...ActionTemplate.args,
    onScroll: e => console.log("scrolled", e)
  }
}`,...(bt=(Et=M.parameters)==null?void 0:Et.docs)==null?void 0:bt.source}}};const Gt=["Normal","ActionTemplate","ScrollManipulation","StickToBottom","Empty","ScrollEventTest"];export{W as ActionTemplate,q as Empty,H as Normal,M as ScrollEventTest,j as ScrollManipulation,_ as StickToBottom,Gt as __namedExportsOrder,$t as default};
