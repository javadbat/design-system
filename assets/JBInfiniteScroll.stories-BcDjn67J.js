var Q=s=>{throw TypeError(s)};var q=(s,n,t)=>n.has(s)||Q("Cannot "+t);var o=(s,n,t)=>(q(s,n,"read from private field"),t?t.call(s):n.get(s)),h=(s,n,t)=>n.has(s)?Q("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(s):n.set(s,t),u=(s,n,t,i)=>(q(s,n,"write to private field"),i?i.call(s,t):n.set(s,t),t),a=(s,n,t)=>(q(s,n,"access private method"),t);import{R as l,r as d}from"./index-CwcVQgaJ.js";import"./jb-loading-BuRiKsux.js";import{r as O}from"./index-BVrqzDik.js";import{o as M}from"./JBButton-CzXHkPk6.js";import"./index-BjRxPyWZ.js";import"./jb-button-BTg9t25D.js";import"./index-BtFglznY.js";var I,f,mt,U,C,ht,V,kt=(V=class{constructor(s,n){h(this,f);h(this,I);h(this,C);u(this,I,!1),this.isUserScrolledTop=!1,this.observers=[],u(this,C,()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()}),this.callbacks=s,this.elements=n}get stickToBottom(){return o(this,I)}set stickToBottom(s){u(this,I,s),s?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}init(){const s=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach(n=>{n.nodeType==Node.ELEMENT_NODE&&a(this,f,mt).call(this,n)})};this.elements.contentWrapper.addEventListener("scroll",o(this,C),{passive:!0}),s(),this.elements.contentSlot.addEventListener("slotchange",()=>{a(this,f,U).call(this),s()})}destruct(){a(this,f,U).call(this),this.elements.contentWrapper.removeEventListener("scroll",o(this,C))}calcIsUserScrolledTop(){const{scrollTop:s,scrollHeight:n,clientHeight:t}=this.elements.contentWrapper;return n-(s+t)>100}},I=new WeakMap,f=new WeakSet,mt=function(s){const n=new MutationObserver(a(this,f,ht).bind(this));n.observe(s,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(n)},U=function(){this.observers.forEach(s=>s.disconnect())},C=new WeakMap,ht=function(s,n){s.find(t=>t.addedNodes!==null)&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()},V);(function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s})({});var y,F,S,B,T,w,v,r,D,L,A,$,G,gt,ft,Et,K,P,bt,k,vt,X,It=(X=class extends HTMLElement{constructor(){super();h(this,r);h(this,y,!1);h(this,F,0);h(this,S,!1);h(this,B,!1);h(this,T,!1);h(this,w,null);h(this,v);h(this,L,"FORCE_WAIT");h(this,A);typeof this.attachInternals=="function"&&u(this,v,this.attachInternals()),a(this,r,gt).call(this)}set stateChangeWaitingBehavior(t){u(this,L,a(this,r,$).call(this,t))}get stateChangeWaitingBehavior(){return o(this,L)}get disableCaptureScroll(){return o(this,T)}set disableCaptureScroll(t){u(this,T,t),a(this,r,k).call(this,!1)}get isListEnded(){return o(this,S)}set isListEnded(t){u(this,S,t),a(this,r,k).call(this,!1)}get isLoading(){return o(this,y)}set isLoading(t){var i,e,m,E;u(this,y,t),a(this,r,k).call(this,!1),t?((i=this.elements)==null||i.loading.classList.add("--show"),(e=o(this,v).states)==null||e.add("loading")):((m=this.elements)==null||m.loading.classList.remove("--show"),(E=o(this,v).states)==null||E.delete("loading"),a(this,r,G).call(this),a(this,r,K).call(this))}get isListEmpty(){return o(this,w)??!1}set isListEmpty(t){var i,e;u(this,w,t),t?(i=o(this,v).states)==null||i.add("empty"):(e=o(this,v).states)==null||e.delete("empty"),a(this,r,k).call(this,!1),a(this,r,G).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,r,Et).call(this),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!1});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!1});this.dispatchEvent(t)}scrollTo(t,i){i?this.elements.contentWrapper.scrollTo(t,i):this.elements.contentWrapper.scrollTo(t)}scrollToEnd(t){this.scrollTo({...t,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(o(this,y)||o(this,r,D)||o(this,S)||o(this,B)||o(this,T))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior","stick-to-bottom"]}attributeChangedCallback(t,i,e){a(this,r,vt).call(this,t,e)}},y=new WeakMap,F=new WeakMap,S=new WeakMap,B=new WeakMap,T=new WeakMap,w=new WeakMap,v=new WeakMap,r=new WeakSet,D=function(){return o(this,w)!==null?o(this,w):null},L=new WeakMap,A=new WeakMap,$=function(t){switch(t){case"FORCE_WAIT":default:return"FORCE_WAIT";case"NO_WAIT":return"NO_WAIT"}},G=function(){var t,i,e,m;o(this,r,D)?((t=this.elements)==null||t.emptyListWrapper.classList.add("--show"),(i=this.elements)==null||i.contentWrapper.classList.remove("--show")):((e=this.elements)==null||e.contentWrapper.classList.add("--show"),(m=this.elements)==null||m.emptyListWrapper.classList.remove("--show"))},gt=function(){const t=this.attachShadow({mode:"open",clonable:!0,serializable:!0}),i=document.createElement("template");i.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;max-height:100%;padding:1rem;display:flex;overflow-y:hidden}</style>

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
      `,t.appendChild(i.content.cloneNode(!0)),this.elements={loading:t.querySelector(".loading-wrapper"),componentWrapper:t.querySelector(".Infinite-scroll-component"),contentWrapper:t.querySelector(".content-wrapper"),loadingWrapper:t.querySelector(".loading-wrapper"),emptyListWrapper:t.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":o(this,y),u(this,A,new kt({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector("slot")}))},ft=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,r,bt).bind(this),{passive:!0})},Et=function(){a(this,r,ft).call(this),a(this,r,K).call(this)},K=function(){const{scrollHeight:t,clientHeight:i}=this.elements.contentWrapper;t<=i&&this.canCaptureScroll&&a(this,r,P).call(this)},P=function(){a(this,r,k).call(this,!0);const t=new CustomEvent("scrollEnd");this.dispatchEvent(t)},bt=function(){const{scrollTop:t,scrollHeight:i,clientHeight:e}=this.elements.contentWrapper;t+e+o(this,F)>=i&&this.canCaptureScroll&&a(this,r,P).call(this)},k=function(t){if(t){if(o(this,L)==="FORCE_WAIT")u(this,B,!0);else if(o(this,L)==="NO_WAIT")return}u(this,B,!1)},vt=function(t,i){switch(t){case"is-loading":this.isLoading=i==="true"||i==="";break;case"is-list-empty":this.isListEmpty=i==="true"||i==="";break;case"is-list-ended":u(this,S,i==="true"||i==="");break;case"disable-capture-scroll":u(this,T,i==="true"||i==="");break;case"state-change-waiting-behavior":u(this,L,a(this,r,$).call(this,i));break;case"stick-to-bottom":o(this,A).stickToBottom=i==="true"||i===""}},X);customElements.get("jb-infinite-scroll")||window.customElements.define("jb-infinite-scroll",It);let R=l.forwardRef((s,n)=>{var t,i;let e=d.useRef(null);d.useImperativeHandle(n,()=>e?e.current:void 0,[e]);let{onInit:m,onLoad:E,onScroll:W,onScrollEnd:x,disableCaptureScroll:p,isListEmpty:j,isListEnded:c,stateChangeWaitingBehavior:Lt,isLoading:yt,stickToBottom:St,children:Tt,...wt}=s;return t={disableCaptureScroll:p,isListEmpty:j,isListEnded:c,stateChangeWaitingBehavior:Lt,isLoading:yt,stickToBottom:St},d.useEffect(()=>{e.current&&typeof t.isLoading=="boolean"&&(t.isLoading?e.current.setAttribute("is-loading","true"):e.current.setAttribute("is-loading","false"))},[e.current,t.isLoading]),d.useEffect(()=>{e.current,typeof t.isListEmpty=="boolean"&&(t.isListEmpty?e.current.setAttribute("is-list-empty","true"):e.current.setAttribute("is-list-empty","false"))},[e.current,t.isListEmpty]),d.useEffect(()=>{var g,b;e.current&&typeof t.isListEnded=="boolean"&&(t.isListEnded?(g=e.current)==null||g.setAttribute("is-list-ended","true"):(b=e.current)==null||b.setAttribute("is-list-ended","false"))},[e.current,t.isListEnded]),d.useEffect(()=>{var g,b;e.current&&typeof t.disableCaptureScroll=="boolean"&&(t.disableCaptureScroll?(g=e.current)==null||g.setAttribute("disable-capture-scroll","true"):(b=e.current)==null||b.setAttribute("disable-capture-scroll","false"))},[e.current,t.disableCaptureScroll]),d.useEffect(()=>{var g,b;e.current&&(t.stickToBottom?(g=e.current)==null||g.setAttribute("stick-to-bottom",""):(b=e.current)==null||b.removeAttribute("stick-to-bottom"))},[e.current,t.stickToBottom]),d.useEffect(()=>{var g;t.stateChangeWaitingBehavior&&e.current&&((g=e.current)==null||g.setAttribute("state-change-waiting-behavior",t.stateChangeWaitingBehavior))},[e.current,t.stateChangeWaitingBehavior]),O(e,"load",(i={onInit:m,onLoad:E,onScroll:W,onScrollEnd:x}).onLoad,!0),O(e,"init",i.onInit,!0),O(e,"scroll",i.onScroll),O(e,"scrollEnd",i.onScrollEnd,!0),l.createElement("jb-infinite-scroll",{ref:e,...wt},Tt)});R.displayName="JBInfiniteScroll";const _t={title:"Components/JBInfiniteScroll",component:R},J={args:{children:l.createElement("div",{slot:"content"},l.createElement("div",null,"item1"),l.createElement("div",null,"item2"),l.createElement("div",null,"item3"))}},N={render:s=>{const n=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[e,m]=d.useState(!1),[E,W]=d.useState(!1),x=()=>{const p=t.at(-1);p>100&&W(!0),m(!0),setTimeout(()=>{i([...t,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),m(!1)},1e3)};return l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(R,{...s,ref:n,onScrollEnd:x,isLoading:e,isListEnded:E,disableCaptureScroll:e},l.createElement("div",{slot:"content"},t.map(p=>l.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},_={render:s=>{const n=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[e,m]=d.useState(!1),[E,W]=d.useState(!1),x=()=>{const c=t.at(-1);c>100&&W(!0),m(!0),setTimeout(()=>{i([...t,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9]),m(!1)},1e3)},p=()=>{var c;(c=n.current)==null||c.scrollTo({behavior:"smooth",top:400})},j=()=>{var c;(c=n.current)==null||c.scrollToEnd()};return l.createElement(d.Fragment,null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(R,{...s,ref:n,onScrollEnd:x,isLoading:e,isListEnded:E,disableCaptureScroll:e},l.createElement("div",{slot:"content"},t.map(c=>l.createElement("div",{key:c,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},c))))),l.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},l.createElement(M,{onClick:j},"scroll to end"),l.createElement(M,{onClick:p},"scroll to 400px")))}},z={render:s=>{const n=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]);return l.createElement("div",null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(R,{...s,ref:n},l.createElement("div",{slot:"content"},t.map(e=>l.createElement("div",{key:e,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},e))))),l.createElement(M,{size:"sm",onClick:()=>{const e=t.at(-1);i(m=>[...m,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9])}},"add more content to bottom"))},args:{stickToBottom:!0}},H={args:{isListEmpty:!0,children:l.createElement("div",{slot:"empty"},"list is empty")}};var Y,Z,tt;J.parameters={...J.parameters,docs:{...(Y=J.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(tt=(Z=J.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,st,it;N.parameters={...N.parameters,docs:{...(et=N.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(it=(st=N.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var nt,rt,ot;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(rt=_.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var lt,at,ct;z.parameters={...z.parameters,docs:{...(lt=z.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(at=z.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,pt,ut;H.parameters={...H.parameters,docs:{...(dt=H.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(ut=(pt=H.parameters)==null?void 0:pt.docs)==null?void 0:ut.source}}};const zt=["Normal","ActionTemplate","ScrollManipulation","StickToBottom","Empty"];export{N as ActionTemplate,H as Empty,J as Normal,_ as ScrollManipulation,z as StickToBottom,zt as __namedExportsOrder,_t as default};
