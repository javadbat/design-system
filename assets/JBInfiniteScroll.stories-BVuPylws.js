var K=s=>{throw TypeError(s)};var _=(s,e,t)=>e.has(s)||K("Cannot "+t);var o=(s,e,t)=>(_(s,e,"read from private field"),t?t.call(s):e.get(s)),u=(s,e,t)=>e.has(s)?K("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),m=(s,e,t,i)=>(_(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),a=(s,e,t)=>(_(s,e,"access private method"),t);import{R as l,r as d}from"./index-DwQS_Y10.js";import"./jb-loading-CG_FOTv2.js";import{r as C}from"./index-BJ5IkxrY.js";import{o as q}from"./JBButton-CgFwNxXH.js";import"./index-bfIR6bpK.js";var k,g,pt,M,W,ut,P,bt=(P=class{constructor(s,e){u(this,g);u(this,k,!1);u(this,W,()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()});this.isUserScrolledTop=!1,this.observers=[],this.callbacks=s,this.elements=e}get stickToBottom(){return o(this,k)}set stickToBottom(s){m(this,k,s),s?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}init(){const s=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach(e=>{e.nodeType==Node.ELEMENT_NODE&&a(this,g,pt).call(this,e)})};this.elements.contentWrapper.addEventListener("scroll",o(this,W),{passive:!0}),s(),this.elements.contentSlot.addEventListener("slotchange",()=>{a(this,g,M).call(this),s()})}destruct(){a(this,g,M).call(this),this.elements.contentWrapper.removeEventListener("scroll",o(this,W))}calcIsUserScrolledTop(){const{scrollTop:s,scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;return e-(s+t)>100}},k=new WeakMap,g=new WeakSet,pt=function(s){const e=new MutationObserver(a(this,g,ut).bind(this));e.observe(s,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(e)},M=function(){this.observers.forEach(s=>s.disconnect())},W=new WeakMap,ut=function(s,e){s.find(t=>t.addedNodes!==null)&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()},P);let T=(function(s){return s.forceWait="FORCE_WAIT",s.noWait="NO_WAIT",s})({});var v,O,b,w,y,L,f,n,F,E,B,U,D,mt,ht,gt,$,G,ft,S,Et,Q,yt=(Q=class extends HTMLElement{constructor(){super();u(this,n);u(this,v,!1);u(this,O,0);u(this,b,!1);u(this,w,!1);u(this,y,!1);u(this,L,null);u(this,f);u(this,E,T.forceWait);u(this,B);typeof this.attachInternals=="function"&&m(this,f,this.attachInternals()),a(this,n,mt).call(this)}set stateChangeWaitingBehavior(e){m(this,E,a(this,n,U).call(this,e))}get stateChangeWaitingBehavior(){return o(this,E)}get disableCaptureScroll(){return o(this,y)}set disableCaptureScroll(e){m(this,y,e),a(this,n,S).call(this,!1)}get isListEnded(){return o(this,b)}set isListEnded(e){m(this,b,e),a(this,n,S).call(this,!1)}get isLoading(){return o(this,v)}set isLoading(e){var t,i,r,h;m(this,v,e),a(this,n,S).call(this,!1),e?((t=this.elements)==null||t.loading.classList.add("--show"),(i=o(this,f).states)==null||i.add("loading")):((r=this.elements)==null||r.loading.classList.remove("--show"),(h=o(this,f).states)==null||h.delete("loading"),a(this,n,D).call(this),a(this,n,$).call(this))}get isListEmpty(){return o(this,L)}set isListEmpty(e){var t,i;m(this,L,e),e?(t=o(this,f).states)==null||t.add("empty"):(i=o(this,f).states)==null||i.delete("empty"),a(this,n,S).call(this,!1),a(this,n,D).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,n,gt).call(this),this.callOnInitEvent()}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}scrollTo(e,t){t?this.elements.contentWrapper.scrollTo(e,t):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(o(this,v)||o(this,n,F)||o(this,b)||o(this,w)||o(this,y))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior","stick-to-bottom"]}attributeChangedCallback(e,t,i){a(this,n,Et).call(this,e,i)}},v=new WeakMap,O=new WeakMap,b=new WeakMap,w=new WeakMap,y=new WeakMap,L=new WeakMap,f=new WeakMap,n=new WeakSet,F=function(){if(o(this,L)!==null)return o(this,L)},E=new WeakMap,B=new WeakMap,U=function(e){switch(e){case"FORCE_WAIT":default:return T.forceWait;case"NO_WAIT":return T.noWait}},D=function(){var e,t,i,r;o(this,n,F)?((e=this.elements)==null||e.emptyListWrapper.classList.add("--show"),(t=this.elements)==null||t.contentWrapper.classList.remove("--show")):((i=this.elements)==null||i.contentWrapper.classList.add("--show"),(r=this.elements)==null||r.emptyListWrapper.classList.remove("--show"))},mt=function(){const e=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;max-height:100%;padding:1rem;display:flex;overflow-y:hidden}</style>

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
      `,e.appendChild(t.content.cloneNode(!0)),this.elements={loading:e.querySelector(".loading-wrapper"),componentWrapper:e.querySelector(".Infinite-scroll-component"),contentWrapper:e.querySelector(".content-wrapper"),loadingWrapper:e.querySelector(".loading-wrapper"),emptyListWrapper:e.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":o(this,v),m(this,B,new bt({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector("slot")}))},ht=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,n,ft).bind(this),{passive:!0})},gt=function(){a(this,n,ht).call(this),a(this,n,$).call(this)},$=function(){const{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&a(this,n,G).call(this)},G=function(){a(this,n,S).call(this,!0);const e=new CustomEvent("scrollEnd");this.dispatchEvent(e)},ft=function(){const{scrollTop:e,scrollHeight:t,clientHeight:i}=this.elements.contentWrapper;e+i+o(this,O)>=t&&this.canCaptureScroll&&a(this,n,G).call(this)},S=function(e){if(e){if(o(this,E)===T.forceWait)m(this,w,!0);else if(o(this,E)===T.noWait)return}m(this,w,!1)},Et=function(e,t){switch(e){case"is-loading":this.isLoading=t==="true"||t==="";break;case"is-list-empty":this.isListEmpty=t==="true"||t==="";break;case"is-list-ended":m(this,b,t==="true"||t==="");break;case"disable-capture-scroll":m(this,y,t==="true"||t==="");break;case"state-change-waiting-behavior":m(this,E,a(this,n,U).call(this,t));break;case"stick-to-bottom":o(this,B).stickToBottom=t==="true"||t===""}},Q);customElements.get("jb-infinite-scroll")||window.customElements.define("jb-infinite-scroll",yt);let I=l.forwardRef((s,e)=>{let t=d.useRef(null);return d.useImperativeHandle(e,()=>t?t.current:void 0,[t]),d.useEffect(()=>{t.current&&typeof s.isLoading=="boolean"&&(s.isLoading?t.current.setAttribute("is-loading","true"):t.current.setAttribute("is-loading","false"))},[t.current,s.isLoading]),d.useEffect(()=>{t.current,typeof s.isListEmpty=="boolean"&&(s.isListEmpty?t.current.setAttribute("is-list-empty","true"):t.current.setAttribute("is-list-empty","false"))},[t.current,s.isListEmpty]),d.useEffect(()=>{var i,r;t.current&&typeof s.isListEnded=="boolean"&&(s.isListEnded?(i=t.current)==null||i.setAttribute("is-list-ended","true"):(r=t.current)==null||r.setAttribute("is-list-ended","false"))},[t.current,s.isListEnded]),d.useEffect(()=>{var i,r;t.current&&typeof s.disableCaptureScroll=="boolean"&&(s.disableCaptureScroll?(i=t.current)==null||i.setAttribute("disable-capture-scroll","true"):(r=t.current)==null||r.setAttribute("disable-capture-scroll","false"))},[t.current,s.disableCaptureScroll]),d.useEffect(()=>{var i,r;t.current&&(s.stickToBottom?(i=t.current)==null||i.setAttribute("stick-to-bottom",""):(r=t.current)==null||r.removeAttribute("stick-to-bottom"))},[t.current,s.stickToBottom]),d.useEffect(()=>{var i;s.stateChangeWaitingBehavior&&t.current&&((i=t.current)==null||i.setAttribute("state-change-waiting-behavior",s.stateChangeWaitingBehavior))},[t.current,s.stateChangeWaitingBehavior]),C(t,"load",s.onLoad,!0),C(t,"init",s.onInit,!0),C(t,"scroll",s.onScroll),C(t,"scrollEnd",s.onScrollEnd,!0),l.createElement("jb-infinite-scroll",{style:s.style,class:s.className,ref:t},s.children)});I.displayName="JBInfiniteScroll";const Bt={title:"Components/JBInfiniteScroll",component:I},x={args:{children:l.createElement("div",{slot:"content"},l.createElement("div",null,"item1"),l.createElement("div",null,"item2"),l.createElement("div",null,"item3"))}},A={render:s=>{const e=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[r,h]=d.useState(!1),[H,z]=d.useState(!1),j=()=>{const p=t.at(-1);p>100&&z(!0),h(!0),setTimeout(()=>{i([...t,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),h(!1)},1e3)};return l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(I,{...s,ref:e,onScrollEnd:j,isLoading:r,isListEnded:H,disableCaptureScroll:r},l.createElement("div",{slot:"content"},t.map(p=>l.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},J={render:s=>{const e=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]),[r,h]=d.useState(!1),[H,z]=d.useState(!1),j=()=>{const c=t.at(-1);c>100&&z(!0),h(!0),setTimeout(()=>{i([...t,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9]),h(!1)},1e3)},p=()=>{var c;(c=e.current)==null||c.scrollTo({behavior:"smooth",top:400})},vt=()=>{var c;(c=e.current)==null||c.scrollToEnd()};return l.createElement(d.Fragment,null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(I,{...s,ref:e,onScrollEnd:j,isLoading:r,isListEnded:H,disableCaptureScroll:r},l.createElement("div",{slot:"content"},t.map(c=>l.createElement("div",{key:c,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},c))))),l.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},l.createElement(q,{onClick:vt},"scroll to end"),l.createElement(q,{onClick:p},"scroll to 400px")))}},R={render:s=>{const e=d.useRef(null),[t,i]=d.useState([1,2,3,4,5,6,7,8,9]);return l.createElement("div",null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(I,{...s,ref:e},l.createElement("div",{slot:"content"},t.map(r=>l.createElement("div",{key:r,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},r))))),l.createElement(q,{size:"sm",onClick:()=>{const r=t.at(-1);i(h=>[...h,r+1,r+2,r+3,r+4,r+5,r+6,r+7,r+8,r+9])}},"add more content to bottom"))},args:{stickToBottom:!0}},N={args:{isListEmpty:!0,children:l.createElement("div",{slot:"empty"},"list is empty")}};var V,X,Y;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(et=(tt=A.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var st,it,rt;J.parameters={...J.parameters,docs:{...(st=J.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(rt=(it=J.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var nt,ot,lt;R.parameters={...R.parameters,docs:{...(nt=R.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(ot=R.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var at,ct,dt;N.parameters={...N.parameters,docs:{...(at=N.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(dt=(ct=N.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};const It=["Normal","ActionTemplate","ScrollManipulation","StickToBottom","Empty"];export{A as ActionTemplate,N as Empty,x as Normal,J as ScrollManipulation,R as StickToBottom,It as __namedExportsOrder,Bt as default};
