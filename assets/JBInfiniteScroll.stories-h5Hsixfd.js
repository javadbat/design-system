var yt=Object.defineProperty;var K=s=>{throw TypeError(s)};var Lt=(s,e,t)=>e in s?yt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var S=(s,e,t)=>Lt(s,typeof e!="symbol"?e+"":e,t),q=(s,e,t)=>e.has(s)||K("Cannot "+t);var o=(s,e,t)=>(q(s,e,"read from private field"),t?t.call(s):e.get(s)),u=(s,e,t)=>e.has(s)?K("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),m=(s,e,t,i)=>(q(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),a=(s,e,t)=>(q(s,e,"access private method"),t);import{R as l,r as d}from"./index-0yr9KlQE.js";import"./jb-loading-DQPCEDsW.js";import{r as x}from"./index-Dsu68ezD.js";import{o as M}from"./JBButton-BAp5u7ZW.js";var W,E,pt,ut,B,mt,P,St=(P=class{constructor(s,e){u(this,E);u(this,W,!1);S(this,"isUserScrolledTop",!1);S(this,"callbacks");S(this,"elements");S(this,"observers",[]);u(this,B,()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()});this.callbacks=s,this.elements=e}get stickToBottom(){return o(this,W)}set stickToBottom(s){m(this,W,s),s?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}init(){this.elements.contentWrapper.addEventListener("scroll",o(this,B),{passive:!0}),this.elements.contentSlot.addEventListener("slotchange",()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach(s=>{s.nodeType==Node.ELEMENT_NODE&&a(this,E,pt).call(this,s)})})}destruct(){a(this,E,ut).call(this),this.elements.contentWrapper.removeEventListener("scroll",o(this,B))}calcIsUserScrolledTop(){const{scrollTop:s,scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;return e-(s+t)>100}},W=new WeakMap,E=new WeakSet,pt=function(s){const e=new MutationObserver(a(this,E,mt).bind(this));e.observe(s,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(e)},ut=function(){this.observers.forEach(s=>s.disconnect())},B=new WeakMap,mt=function(s,e){s.find(t=>t.addedNodes!==null)&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()},P);let k=function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s}({});var b,H,v,T,y,L,g,n,F,f,I,U,D,ht,gt,ft,$,G,Et,w,bt,Q,wt=(Q=class extends HTMLElement{constructor(){super();u(this,n);S(this,"elements");u(this,b,!1);u(this,H,0);u(this,v,!1);u(this,T,!1);u(this,y,!1);u(this,L,null);u(this,g);u(this,f,k.forceWait);u(this,I);typeof this.attachInternals=="function"&&m(this,g,this.attachInternals()),a(this,n,ht).call(this)}set stateChangeWaitingBehavior(e){m(this,f,a(this,n,U).call(this,e))}get stateChangeWaitingBehavior(){return o(this,f)}get disableCaptureScroll(){return o(this,y)}set disableCaptureScroll(e){m(this,y,e),a(this,n,w).call(this,!1)}get isListEnded(){return o(this,v)}set isListEnded(e){m(this,v,e),a(this,n,w).call(this,!1)}get isLoading(){return o(this,b)}set isLoading(e){var t,i,r,h;m(this,b,e),a(this,n,w).call(this,!1),e?((t=this.elements)==null||t.loading.classList.add("--show"),(i=o(this,g).states)==null||i.add("loading")):((r=this.elements)==null||r.loading.classList.remove("--show"),(h=o(this,g).states)==null||h.delete("loading"),a(this,n,D).call(this),a(this,n,$).call(this))}get isListEmpty(){return o(this,L)}set isListEmpty(e){var t,i;m(this,L,e),e?(t=o(this,g).states)==null||t.add("empty"):(i=o(this,g).states)==null||i.delete("empty"),a(this,n,w).call(this,!1),a(this,n,D).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,n,ft).call(this),this.callOnInitEvent()}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}scrollTo(e,t){t?this.elements.contentWrapper.scrollTo(e,t):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(o(this,b)||o(this,n,F)||o(this,v)||o(this,T)||o(this,y))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior","stick-to-bottom"]}attributeChangedCallback(e,t,i){a(this,n,bt).call(this,e,i)}},b=new WeakMap,H=new WeakMap,v=new WeakMap,T=new WeakMap,y=new WeakMap,L=new WeakMap,g=new WeakMap,n=new WeakSet,F=function(){if(o(this,L)!==null)return o(this,L)},f=new WeakMap,I=new WeakMap,U=function(e){switch(e){case"FORCE_WAIT":default:return k.forceWait;case"NO_WAIT":return k.noWait}},D=function(){var e,t,i,r;o(this,n,F)?((e=this.elements)==null||e.emptyListWrapper.classList.add("--show"),(t=this.elements)==null||t.contentWrapper.classList.remove("--show")):((i=this.elements)==null||i.contentWrapper.classList.add("--show"),(r=this.elements)==null||r.emptyListWrapper.classList.remove("--show"))},ht=function(){const e=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{display:flex;justify-content:center;align-items:center}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){height:100%;width:100%;display:flex;justify-content:center;align-items:center;max-height:100%;overflow-y:hidden;background-color:rgba(0,0,0,0);padding:1rem;box-sizing:border-box}</style>

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
      `,e.appendChild(t.content.cloneNode(!0)),this.elements={loading:e.querySelector(".loading-wrapper"),componentWrapper:e.querySelector(".Infinite-scroll-component"),contentWrapper:e.querySelector(".content-wrapper"),loadingWrapper:e.querySelector(".loading-wrapper"),emptyListWrapper:e.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":o(this,b),m(this,I,new St({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector("slot")}))},gt=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,n,Et).bind(this),{passive:!0})},ft=function(){a(this,n,gt).call(this),a(this,n,$).call(this)},$=function(){const{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&a(this,n,G).call(this)},G=function(){a(this,n,w).call(this,!0);const e=new CustomEvent("scrollEnd");this.dispatchEvent(e)},Et=function(){const{scrollTop:e,scrollHeight:t,clientHeight:i}=this.elements.contentWrapper;e+i+o(this,H)>=t&&this.canCaptureScroll&&a(this,n,G).call(this)},w=function(e){if(e){if(o(this,f)===k.forceWait)m(this,T,!0);else if(o(this,f)===k.noWait)return}m(this,T,!1)},bt=function(e,t){switch(e){case"is-loading":this.isLoading=t==="true"||t==="";break;case"is-list-empty":this.isListEmpty=t==="true"||t==="";break;case"is-list-ended":m(this,v,t==="true"||t==="");break;case"disable-capture-scroll":m(this,y,t==="true"||t==="");break;case"state-change-waiting-behavior":m(this,f,a(this,n,U).call(this,t));break;case"stick-to-bottom":o(this,I).stickToBottom=t==="true"||t===""}},Q);!customElements.get("jb-infinite-scroll")&&window.customElements.define("jb-infinite-scroll",wt);let C=l.forwardRef((s,e)=>{let t=d.useRef(null);return d.useImperativeHandle(e,()=>t?t.current:void 0,[t]),d.useEffect(()=>{t.current&&typeof s.isLoading=="boolean"&&(s.isLoading?t.current.setAttribute("is-loading","true"):t.current.setAttribute("is-loading","false"))},[t.current,s.isLoading]),d.useEffect(()=>{t.current,typeof s.isListEmpty=="boolean"&&(s.isListEmpty?t.current.setAttribute("is-list-empty","true"):t.current.setAttribute("is-list-empty","false"))},[t.current,s.isListEmpty]),d.useEffect(()=>{var i,r;t.current&&typeof s.isListEnded=="boolean"&&(s.isListEnded?(i=t.current)==null||i.setAttribute("is-list-ended","true"):(r=t.current)==null||r.setAttribute("is-list-ended","false"))},[t.current,s.isListEnded]),d.useEffect(()=>{var i,r;t.current&&typeof s.disableCaptureScroll=="boolean"&&(s.disableCaptureScroll?(i=t.current)==null||i.setAttribute("disable-capture-scroll","true"):(r=t.current)==null||r.setAttribute("disable-capture-scroll","false"))},[t.current,s.disableCaptureScroll]),d.useEffect(()=>{var i,r;t.current&&(s.stickToBottom?(i=t.current)==null||i.setAttribute("stick-to-bottom",""):(r=t.current)==null||r.removeAttribute("stick-to-bottom"))},[t.current,s.stickToBottom]),d.useEffect(()=>{var i;s.stateChangeWaitingBehavior&&t.current&&((i=t.current)==null||i.setAttribute("state-change-waiting-behavior",s.stateChangeWaitingBehavior))},[t.current,s.stateChangeWaitingBehavior]),x(t,"load",s.onLoad,!0),x(t,"init",s.onInit,!0),x(t,"scroll",s.onScroll),x(t,"scrollEnd",s.onScrollEnd,!0),l.createElement("jb-infinite-scroll",{style:s.style,class:s.className,ref:t},s.children)});C.displayName="JBInfiniteScroll";const Ct={title:"Components/JBInfiniteScroll",component:C},A={args:{children:l.createElement("div",{slot:"content"},l.createElement("div",null,"item1"),l.createElement("div",null,"item2"),l.createElement("div",null,"item3"))}},J={render:s=>{const e=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[r,h]=d.useState(!1),[z,j]=d.useState(!1),_=()=>{const p=t.at(-1);p>100&&j(!0),h(!0),setTimeout(()=>{i([...t,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),h(!1)},1e3)};return l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(C,{...s,ref:e,onScrollEnd:_,isLoading:r,isListEnded:z,disableCaptureScroll:r},l.createElement("div",{slot:"content"},t.map(p=>l.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},R={render:s=>{const e=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[r,h]=d.useState(!1),[z,j]=d.useState(!1),_=()=>{const c=t.at(-1);c>100&&j(!0),h(!0),setTimeout(()=>{i([...t,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9]),h(!1)},1e3)},p=()=>{var c;(c=e.current)==null||c.scrollTo({behavior:"smooth",top:400})},vt=()=>{var c;(c=e.current)==null||c.scrollToEnd()};return l.createElement(d.Fragment,null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(C,{...s,ref:e,onScrollEnd:_,isLoading:r,isListEnded:z,disableCaptureScroll:r},l.createElement("div",{slot:"content"},t.map(c=>l.createElement("div",{key:c,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},c))))),l.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},l.createElement(M,{onClick:vt},"scroll to end"),l.createElement(M,{onClick:p},"scroll to 400px")))}},N={render:s=>{const e=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]);return l.createElement("div",null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(C,{...s,ref:e},l.createElement("div",{slot:"content"},t.map(r=>l.createElement("div",{key:r,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},r))))),l.createElement(M,{size:"sm",onClick:()=>{const r=t.at(-1);i(h=>[...h,r+1,r+2,r+3,r+4,r+5,r+6,r+7,r+8,r+9])}},"add more content to bottom"))},args:{stickToBottom:!0}},O={args:{isListEmpty:!0,children:l.createElement("div",{slot:"empty"},"list is empty")}};var V,X,Y;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;J.parameters={...J.parameters,docs:{...(Z=J.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(et=(tt=J.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var st,it,rt;R.parameters={...R.parameters,docs:{...(st=R.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(rt=(it=R.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var nt,ot,lt;N.parameters={...N.parameters,docs:{...(nt=N.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(ot=N.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var at,ct,dt;O.parameters={...O.parameters,docs:{...(at=O.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(dt=(ct=O.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};const xt=["Normal","ActionTemplate","ScrollManipulation","StickToBottom","Empty"];export{J as ActionTemplate,O as Empty,A as Normal,R as ScrollManipulation,N as StickToBottom,xt as __namedExportsOrder,Ct as default};
