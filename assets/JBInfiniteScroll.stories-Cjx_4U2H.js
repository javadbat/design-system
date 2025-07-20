var ae=Object.defineProperty;var z=s=>{throw TypeError(s)};var ce=(s,t,e)=>t in s?ae(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>ce(s,typeof t!="symbol"?t+"":t,e),O=(s,t,e)=>t.has(s)||z("Cannot "+e);var r=(s,t,e)=>(O(s,t,"read from private field"),e?e.call(s):t.get(s)),m=(s,t,e)=>t.has(s)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),u=(s,t,e,n)=>(O(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),l=(s,t,e)=>(O(s,t,"access private method"),e);import{R as a,r as d}from"./index-D4lIrffr.js";import"./jb-loading-DQPCEDsW.js";import{r as C}from"./index-B65NTg4l.js";import{o as M}from"./JBButton-KZyHeMVF.js";let w=function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s}({});var E,k,v,S,b,y,g,i,H,f,j,N,se,ie,ne,_,q,re,L,oe,D,de=(D=class extends HTMLElement{constructor(){super();m(this,i);F(this,"elements");m(this,E,!1);m(this,k,0);m(this,v,!1);m(this,S,!1);m(this,b,!1);m(this,y,null);m(this,g);m(this,f,w.forceWait);typeof this.attachInternals=="function"&&u(this,g,this.attachInternals()),l(this,i,se).call(this)}set stateChangeWaitingBehavior(t){u(this,f,l(this,i,j).call(this,t))}get stateChangeWaitingBehavior(){return r(this,f)}get disableCaptureScroll(){return r(this,b)}set disableCaptureScroll(t){u(this,b,t),l(this,i,L).call(this,!1)}get isListEnded(){return r(this,v)}set isListEnded(t){u(this,v,t),l(this,i,L).call(this,!1)}get isLoading(){return r(this,E)}set isLoading(t){var e,n,c,h;u(this,E,t),l(this,i,L).call(this,!1),t?((e=this.elements)==null||e.loading.classList.add("--show"),(n=r(this,g).states)==null||n.add("loading")):((c=this.elements)==null||c.loading.classList.remove("--show"),(h=r(this,g).states)==null||h.delete("loading"),l(this,i,N).call(this),l(this,i,_).call(this))}get isListEmpty(){return r(this,y)}set isListEmpty(t){var e,n;u(this,y,t),t?(e=r(this,g).states)==null||e.add("empty"):(n=r(this,g).states)==null||n.delete("empty"),l(this,i,L).call(this,!1),l(this,i,N).call(this)}connectedCallback(){this.callOnLoadEvent(),l(this,i,ne).call(this),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(t)}scrollTo(t,e){e?this.elements.contentWrapper.scrollTo(t,e):this.elements.contentWrapper.scrollTo(t)}scrollToEnd(t){this.scrollTo({...t,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(r(this,E)||r(this,i,H)||r(this,v)||r(this,S)||r(this,b))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior"]}attributeChangedCallback(t,e,n){l(this,i,oe).call(this,t,n)}},E=new WeakMap,k=new WeakMap,v=new WeakMap,S=new WeakMap,b=new WeakMap,y=new WeakMap,g=new WeakMap,i=new WeakSet,H=function(){if(r(this,y)!==null)return r(this,y)},f=new WeakMap,j=function(t){switch(t){case"FORCE_WAIT":default:return w.forceWait;case"NO_WAIT":return w.noWait}},N=function(){var t,e,n,c;r(this,i,H)?((t=this.elements)==null||t.emptyListWrapper.classList.add("--show"),(e=this.elements)==null||e.contentWrapper.classList.remove("--show")):((n=this.elements)==null||n.contentWrapper.classList.add("--show"),(c=this.elements)==null||c.emptyListWrapper.classList.remove("--show"))},se=function(){const t=this.attachShadow({mode:"open"}),e=document.createElement("template");e.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{display:flex;justify-content:center;align-items:center}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){height:100%;width:100%;display:flex;justify-content:center;align-items:center;max-height:100%;overflow-y:hidden;background-color:rgba(0,0,0,0);padding:1rem;box-sizing:border-box}</style>

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
      `,t.appendChild(e.content.cloneNode(!0)),this.elements={loading:t.querySelector(".loading-wrapper"),componentWrapper:t.querySelector(".Infinite-scroll-component"),contentWrapper:t.querySelector(".content-wrapper"),loadingWrapper:t.querySelector(".loading-wrapper"),emptyListWrapper:t.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":r(this,E)},ie=function(){this.elements.contentWrapper.addEventListener("scroll",l(this,i,re).bind(this),{passive:!0})},ne=function(){l(this,i,ie).call(this),l(this,i,_).call(this)},_=function(){const{scrollHeight:t,clientHeight:e}=this.elements.contentWrapper;t<=e&&this.canCaptureScroll&&l(this,i,q).call(this)},q=function(){l(this,i,L).call(this,!0);const t=new CustomEvent("scrollEnd");this.dispatchEvent(t)},re=function(){const{scrollTop:t,scrollHeight:e,clientHeight:n}=this.elements.contentWrapper;t+n+r(this,k)>=e&&this.canCaptureScroll&&l(this,i,q).call(this)},L=function(t){if(t){if(r(this,f)===w.forceWait)u(this,S,!0);else if(r(this,f)===w.noWait)return}u(this,S,!1)},oe=function(t,e){switch(t){case"is-loading":this.isLoading=e==="true";break;case"is-list-empty":this.isListEmpty=e==="true";break;case"is-list-ended":u(this,v,e==="true");break;case"disable-capture-scroll":u(this,b,e==="true");break;case"state-change-waiting-behavior":u(this,f,l(this,i,j).call(this,e))}},D);!customElements.get("jb-infinite-scroll")&&window.customElements.define("jb-infinite-scroll",de);let A=a.forwardRef((s,t)=>{let e=d.useRef(null);return d.useImperativeHandle(t,()=>e?e.current:void 0,[e]),d.useEffect(()=>{e.current&&typeof s.isLoading=="boolean"&&(s.isLoading?e.current.setAttribute("is-loading","true"):e.current.setAttribute("is-loading","false"))},[e.current,s.isLoading]),d.useEffect(()=>{e.current,typeof s.isListEmpty=="boolean"&&(s.isListEmpty?e.current.setAttribute("is-list-empty","true"):e.current.setAttribute("is-list-empty","false"))},[e.current,s.isListEmpty]),d.useEffect(()=>{var n,c;e.current&&typeof s.isListEnded=="boolean"&&(s.isListEnded?(n=e.current)==null||n.setAttribute("is-list-ended","true"):(c=e.current)==null||c.setAttribute("is-list-ended","false"))},[e.current,s.isListEnded]),d.useEffect(()=>{var n,c;e.current&&typeof s.disableCaptureScroll=="boolean"&&(s.disableCaptureScroll?(n=e.current)==null||n.setAttribute("disable-capture-scroll","true"):(c=e.current)==null||c.setAttribute("disable-capture-scroll","false"))},[e.current,s.disableCaptureScroll]),d.useEffect(()=>{var n;s.stateChangeWaitingBehavior&&e.current&&((n=e.current)==null||n.setAttribute("state-change-waiting-behavior",s.stateChangeWaitingBehavior))},[e.current,s.stateChangeWaitingBehavior]),C(e,"load",s.onLoad,!0),C(e,"init",s.onInit,!0),C(e,"scroll",s.onScroll),C(e,"scrollEnd",s.onScrollEnd,!0),a.createElement("jb-infinite-scroll",{style:s.style,class:s.className,ref:e},s.children)});A.displayName="JBInfiniteScroll";const fe={title:"Components/JBInfiniteScroll",component:A},I={args:{children:a.createElement("div",{slot:"content"},a.createElement("div",null,"item1"),a.createElement("div",null,"item2"),a.createElement("div",null,"item3"))}},W={render:s=>{const t=d.useRef(null),[e,n]=d.useState([1,2,3,4,5,6,7,8,9]),[c,h]=d.useState(!1),[B,R]=d.useState(!1),J=()=>{const p=e.at(-1);p>100&&R(!0),h(!0),setTimeout(()=>{n([...e,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),h(!1)},1e3)};return a.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},a.createElement(A,{...s,ref:t,onScrollEnd:J,isLoading:c,isListEnded:B,disableCaptureScroll:c},a.createElement("div",{slot:"content"},e.map(p=>a.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},T={render:s=>{const t=d.useRef(null),[e,n]=d.useState([1,2,3,4,5,6,7,8,9]),[c,h]=d.useState(!1),[B,R]=d.useState(!1),J=()=>{const o=e.at(-1);o>100&&R(!0),h(!0),setTimeout(()=>{n([...e,o+1,o+2,o+3,o+4,o+5,o+6,o+7,o+8,o+9]),h(!1)},1e3)},p=()=>{var o;(o=t.current)==null||o.scrollTo({behavior:"smooth",top:400})},le=()=>{var o;(o=t.current)==null||o.scrollToEnd()};return a.createElement(d.Fragment,null,a.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},a.createElement(A,{...s,ref:t,onScrollEnd:J,isLoading:c,isListEnded:B,disableCaptureScroll:c},a.createElement("div",{slot:"content"},e.map(o=>a.createElement("div",{key:o,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},o))))),a.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},a.createElement(M,{onClick:le},"scroll to end"),a.createElement(M,{onClick:p},"scroll to 400px")))}},x={args:{isListEmpty:!0,children:a.createElement("div",{slot:"empty"},"list is empty")}};var G,K,P;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(P=(K=I.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,V;W.parameters={...W.parameters,docs:{...(Q=W.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(U=W.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ee=["Normal","ActionTemplate","ScrollManipulation","Empty"];export{W as ActionTemplate,x as Empty,I as Normal,T as ScrollManipulation,Ee as __namedExportsOrder,fe as default};
