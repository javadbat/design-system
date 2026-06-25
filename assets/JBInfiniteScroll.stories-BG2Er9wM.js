var Je=Object.defineProperty;var Y=s=>{throw TypeError(s)};var Re=(s,n,e)=>n in s?Je(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var B=(s,n,e)=>Re(s,typeof n!="symbol"?n+"":n,e),D=(s,n,e)=>n.has(s)||Y("Cannot "+e);var o=(s,n,e)=>(D(s,n,"read from private field"),e?e.call(s):n.get(s)),m=(s,n,e)=>n.has(s)?Y("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(s):n.set(s,e),h=(s,n,e,i)=>(D(s,n,"write to private field"),i?i.call(s,e):n.set(s,e),e),a=(s,n,e)=>(D(s,n,"access private method"),e);import{R as l,r as d}from"./index-D4lIrffr.js";import"./jb-loading-BmlEKkU_.js";import{r as q}from"./index-BijJAI47.js";import{o as P}from"./JBButton-C5Q4-nqF.js";var _,f,ve,$,H,Se,Z,Oe=(Z=class{constructor(s,n){m(this,f);m(this,_,!1);B(this,"isUserScrolledTop",!1);B(this,"callbacks");B(this,"elements");B(this,"observers",[]);m(this,H,()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()});this.callbacks=s,this.elements=n}get stickToBottom(){return o(this,_)}set stickToBottom(s){h(this,_,s),s?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}init(){const s=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach(n=>{n.nodeType==Node.ELEMENT_NODE&&a(this,f,ve).call(this,n)})};this.elements.contentWrapper.addEventListener("scroll",o(this,H),{passive:!0}),s(),this.elements.contentSlot.addEventListener("slotchange",()=>{a(this,f,$).call(this),s()})}destruct(){a(this,f,$).call(this),this.elements.contentWrapper.removeEventListener("scroll",o(this,H))}calcIsUserScrolledTop(){const{scrollTop:s,scrollHeight:n,clientHeight:e}=this.elements.contentWrapper;return n-(s+e)>100}},_=new WeakMap,f=new WeakSet,ve=function(s){const n=new MutationObserver(a(this,f,Se).bind(this));n.observe(s,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(n)},$=function(){this.observers.forEach(s=>s.disconnect())},H=new WeakMap,Se=function(s,n){s.find(e=>e.addedNodes!==null)&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()},Z);let A=function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s}({});var L,F,w,W,T,k,v,r,G,S,j,K,Q,ye,Le,we,V,X,Te,ke,I,Be,ee,ze=(ee=class extends HTMLElement{constructor(){super();m(this,r);B(this,"elements");m(this,L,!1);m(this,F,0);m(this,w,!1);m(this,W,!1);m(this,T,!1);m(this,k,null);m(this,v);m(this,S,A.forceWait);m(this,j);typeof this.attachInternals=="function"&&h(this,v,this.attachInternals()),a(this,r,ye).call(this)}set stateChangeWaitingBehavior(e){h(this,S,a(this,r,K).call(this,e))}get stateChangeWaitingBehavior(){return o(this,S)}get disableCaptureScroll(){return o(this,T)}set disableCaptureScroll(e){h(this,T,e),a(this,r,I).call(this,!1)}get isListEnded(){return o(this,w)}set isListEnded(e){h(this,w,e),a(this,r,I).call(this,!1)}get isLoading(){return o(this,L)}set isLoading(e){var i,t,u,E;h(this,L,e),a(this,r,I).call(this,!1),e?((i=this.elements)==null||i.loading.classList.add("--show"),(t=o(this,v).states)==null||t.add("loading")):((u=this.elements)==null||u.loading.classList.remove("--show"),(E=o(this,v).states)==null||E.delete("loading"),a(this,r,Q).call(this),a(this,r,V).call(this))}get isListEmpty(){return o(this,k)??!1}set isListEmpty(e){var i,t;h(this,k,e),e?(i=o(this,v).states)==null||i.add("empty"):(t=o(this,v).states)==null||t.delete("empty"),a(this,r,I).call(this,!1),a(this,r,Q).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,r,we).call(this),this.callOnInitEvent()}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!1});this.dispatchEvent(e)}scrollTo(e,i){i?this.elements.contentWrapper.scrollTo(e,i):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(o(this,L)||o(this,r,G)||o(this,w)||o(this,W)||o(this,T))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior","stick-to-bottom"]}attributeChangedCallback(e,i,t){a(this,r,Be).call(this,e,t)}},L=new WeakMap,F=new WeakMap,w=new WeakMap,W=new WeakMap,T=new WeakMap,k=new WeakMap,v=new WeakMap,r=new WeakSet,G=function(){return o(this,k)!==null?o(this,k):null},S=new WeakMap,j=new WeakMap,K=function(e){switch(e){case"FORCE_WAIT":default:return A.forceWait;case"NO_WAIT":return A.noWait}},Q=function(){var e,i,t,u;o(this,r,G)?((e=this.elements)==null||e.emptyListWrapper.classList.add("--show"),(i=this.elements)==null||i.contentWrapper.classList.remove("--show")):((t=this.elements)==null||t.contentWrapper.classList.add("--show"),(u=this.elements)==null||u.emptyListWrapper.classList.remove("--show"))},ye=function(){const e=this.attachShadow({mode:"open",clonable:!0,serializable:!0}),i=document.createElement("template");i.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;max-height:100%;padding:1rem;display:flex;overflow-y:hidden}</style>

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
      `,e.appendChild(i.content.cloneNode(!0)),this.elements={loading:e.querySelector(".loading-wrapper"),componentWrapper:e.querySelector(".Infinite-scroll-component"),contentWrapper:e.querySelector(".content-wrapper"),loadingWrapper:e.querySelector(".loading-wrapper"),emptyListWrapper:e.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":o(this,L),h(this,j,new Oe({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector("slot")}))},Le=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,r,Te).bind(this),{passive:!0})},we=function(){a(this,r,Le).call(this),a(this,r,V).call(this)},V=function(){const{scrollHeight:e,clientHeight:i}=this.elements.contentWrapper;e<=i&&this.canCaptureScroll&&a(this,r,X).call(this)},X=function(){a(this,r,I).call(this,!0);const e=new CustomEvent("scrollEnd");this.dispatchEvent(e)},Te=function(){const{scrollTop:e,scrollHeight:i,clientHeight:t}=this.elements.contentWrapper;a(this,r,ke).call(this),e+t+o(this,F)>=i&&this.canCaptureScroll&&a(this,r,X).call(this)},ke=function(){const e=new Event("scroll",{bubbles:!1,cancelable:!1,composed:!0});this.dispatchEvent(e)},I=function(e){if(e){if(o(this,S)===A.forceWait)h(this,W,!0);else if(o(this,S)===A.noWait)return}h(this,W,!1)},Be=function(e,i){switch(e){case"is-loading":this.isLoading=i==="true"||i==="";break;case"is-list-empty":this.isListEmpty=i==="true"||i==="";break;case"is-list-ended":h(this,w,i==="true"||i==="");break;case"disable-capture-scroll":h(this,T,i==="true"||i==="");break;case"state-change-waiting-behavior":h(this,S,a(this,r,K).call(this,i));break;case"stick-to-bottom":o(this,j).stickToBottom=i==="true"||i===""}},ee);!customElements.get("jb-infinite-scroll")&&window.customElements.define("jb-infinite-scroll",ze);let M=l.forwardRef((s,n)=>{var e,i;let t=d.useRef(null);d.useImperativeHandle(n,()=>t.current??void 0,[t]);let{onInit:u,onLoad:E,onScroll:C,onScrollEnd:x,disableCaptureScroll:p,isListEmpty:U,isListEnded:c,stateChangeWaitingBehavior:Ie,isLoading:We,stickToBottom:Ce,children:xe,...Ae}=s;return e={disableCaptureScroll:p,isListEmpty:U,isListEnded:c,stateChangeWaitingBehavior:Ie,isLoading:We,stickToBottom:Ce},d.useEffect(()=>{t.current&&typeof e.isLoading=="boolean"&&(e.isLoading?t.current.setAttribute("is-loading","true"):t.current.setAttribute("is-loading","false"))},[t.current,e.isLoading]),d.useEffect(()=>{t.current&&typeof e.isListEmpty=="boolean"&&(e.isListEmpty?t.current.setAttribute("is-list-empty","true"):t.current.setAttribute("is-list-empty","false"))},[t.current,e.isListEmpty]),d.useEffect(()=>{var g,b;t.current&&typeof e.isListEnded=="boolean"&&(e.isListEnded?(g=t.current)==null||g.setAttribute("is-list-ended","true"):(b=t.current)==null||b.setAttribute("is-list-ended","false"))},[t.current,e.isListEnded]),d.useEffect(()=>{var g,b;t.current&&typeof e.disableCaptureScroll=="boolean"&&(e.disableCaptureScroll?(g=t.current)==null||g.setAttribute("disable-capture-scroll","true"):(b=t.current)==null||b.setAttribute("disable-capture-scroll","false"))},[t.current,e.disableCaptureScroll]),d.useEffect(()=>{var g,b;t.current&&(e.stickToBottom?(g=t.current)==null||g.setAttribute("stick-to-bottom",""):(b=t.current)==null||b.removeAttribute("stick-to-bottom"))},[t.current,e.stickToBottom]),d.useEffect(()=>{var g;e.stateChangeWaitingBehavior&&t.current&&((g=t.current)==null||g.setAttribute("state-change-waiting-behavior",e.stateChangeWaitingBehavior))},[t.current,e.stateChangeWaitingBehavior]),q(t,"load",(i={onInit:u,onLoad:E,onScroll:C,onScrollEnd:x}).onLoad,!0),q(t,"init",i.onInit,!0),q(t,"scroll",i.onScroll),q(t,"scrollEnd",i.onScrollEnd,!0),l.createElement("jb-infinite-scroll",{ref:t,...Ae},xe)});M.displayName="JBInfiniteScroll";const Ne={title:"Components/JBInfiniteScroll",component:M},J={args:{children:l.createElement("div",{slot:"content"},l.createElement("div",null,"item1"),l.createElement("div",null,"item2"),l.createElement("div",null,"item3"))}},y={render:s=>{const n=d.useRef(null),[e,i]=d.useState([1,2,3,4,5,6,7,8,9]),[t,u]=d.useState(!1),[E,C]=d.useState(!1),x=()=>{const p=e.at(-1);p>100&&C(!0),u(!0),setTimeout(()=>{i([...e,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),u(!1)},1e3)};return l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(M,{...s,ref:n,onScrollEnd:x,isLoading:t,isListEnded:E,disableCaptureScroll:t},l.createElement("div",{slot:"content"},e.map(p=>l.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},R={render:s=>{const n=d.useRef(null),[e,i]=d.useState([1,2,3,4,5,6,7,8,9]),[t,u]=d.useState(!1),[E,C]=d.useState(!1),x=()=>{const c=e.at(-1);c>100&&C(!0),u(!0),setTimeout(()=>{i([...e,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9]),u(!1)},1e3)},p=()=>{var c;(c=n.current)==null||c.scrollTo({behavior:"smooth",top:400})},U=()=>{var c;(c=n.current)==null||c.scrollToEnd()};return l.createElement(d.Fragment,null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(M,{...s,ref:n,onScrollEnd:x,isLoading:t,isListEnded:E,disableCaptureScroll:t},l.createElement("div",{slot:"content"},e.map(c=>l.createElement("div",{key:c,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},c))))),l.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},l.createElement(P,{onClick:U},"scroll to end"),l.createElement(P,{onClick:p},"scroll to 400px")))}},O={render:s=>{const n=d.useRef(null),[e,i]=d.useState([1,2,3,4,5,6,7,8,9]);return l.createElement("div",null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(M,{...s,ref:n},l.createElement("div",{slot:"content"},e.map(t=>l.createElement("div",{key:t,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},t))))),l.createElement(P,{size:"sm",onClick:()=>{const t=e.at(-1);i(u=>[...u,t+1,t+2,t+3,t+4,t+5,t+6,t+7,t+8,t+9])}},"add more content to bottom"))},args:{stickToBottom:!0}},z={args:{isListEmpty:!0,children:l.createElement("div",{slot:"empty"},"list is empty")}},N={render:y.render,args:{...y.args,onScroll:s=>console.log("scrolled",s)}};var te,se,ie;J.parameters={...J.parameters,docs:{...(te=J.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(ie=(se=J.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,re,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=y.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ae,ce;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var de,pe,ue;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,ge;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(ge=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,Ee,be;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: ActionTemplate.render,
  args: {
    ...ActionTemplate.args,
    onScroll: e => console.log("scrolled", e)
  }
}`,...(be=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:be.source}}};const _e=["Normal","ActionTemplate","ScrollManipulation","StickToBottom","Empty","ScrollEventTest"],De=Object.freeze(Object.defineProperty({__proto__:null,ActionTemplate:y,Empty:z,Normal:J,ScrollEventTest:N,ScrollManipulation:R,StickToBottom:O,__namedExportsOrder:_e,default:Ne},Symbol.toStringTag,{value:"Module"}));export{y as A,De as I};
