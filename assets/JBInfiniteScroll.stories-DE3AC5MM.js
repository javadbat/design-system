var X=i=>{throw TypeError(i)};var F=(i,t,e)=>t.has(i)||X("Cannot "+e);var o=(i,t,e)=>(F(i,t,"read from private field"),e?e.call(i):t.get(i)),u=(i,t,e)=>t.has(i)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),m=(i,t,e,r)=>(F(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),a=(i,t,e)=>(F(i,t,"access private method"),e);import{R as l,r as d}from"./index-DwQS_Y10.js";import"./jb-loading-CG_FOTv2.js";import{r as N}from"./index-BJ5IkxrY.js";import{o as U}from"./JBButton-CgFwNxXH.js";import"./index-bfIR6bpK.js";var x,f,ht,D,A,gt,Y,Bt=(Y=class{constructor(i,t){u(this,f);u(this,x,!1);u(this,A,()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()});this.isUserScrolledTop=!1,this.observers=[],this.callbacks=i,this.elements=t}get stickToBottom(){return o(this,x)}set stickToBottom(i){m(this,x,i),i?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}init(){const i=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach(t=>{t.nodeType==Node.ELEMENT_NODE&&a(this,f,ht).call(this,t)})};this.elements.contentWrapper.addEventListener("scroll",o(this,A),{passive:!0}),i(),this.elements.contentSlot.addEventListener("slotchange",()=>{a(this,f,D).call(this),i()})}destruct(){a(this,f,D).call(this),this.elements.contentWrapper.removeEventListener("scroll",o(this,A))}calcIsUserScrolledTop(){const{scrollTop:i,scrollHeight:t,clientHeight:e}=this.elements.contentWrapper;return t-(i+e)>100}},x=new WeakMap,f=new WeakSet,ht=function(i){const t=new MutationObserver(a(this,f,gt).bind(this));t.observe(i,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(t)},D=function(){this.observers.forEach(i=>i.disconnect())},A=new WeakMap,gt=function(i,t){i.find(e=>e.addedNodes!==null)&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()},Y);let I=(function(i){return i.forceWait="FORCE_WAIT",i.noWait="NO_WAIT",i})({});var L,q,y,k,S,w,v,n,G,b,J,K,P,ft,Et,vt,Q,V,bt,T,Lt,Z,Wt=(Z=class extends HTMLElement{constructor(){super();u(this,n);u(this,L,!1);u(this,q,0);u(this,y,!1);u(this,k,!1);u(this,S,!1);u(this,w,null);u(this,v);u(this,b,I.forceWait);u(this,J);typeof this.attachInternals=="function"&&m(this,v,this.attachInternals()),a(this,n,ft).call(this)}set stateChangeWaitingBehavior(t){m(this,b,a(this,n,K).call(this,t))}get stateChangeWaitingBehavior(){return o(this,b)}get disableCaptureScroll(){return o(this,S)}set disableCaptureScroll(t){m(this,S,t),a(this,n,T).call(this,!1)}get isListEnded(){return o(this,y)}set isListEnded(t){m(this,y,t),a(this,n,T).call(this,!1)}get isLoading(){return o(this,L)}set isLoading(t){var e,r,s,h;m(this,L,t),a(this,n,T).call(this,!1),t?((e=this.elements)==null||e.loading.classList.add("--show"),(r=o(this,v).states)==null||r.add("loading")):((s=this.elements)==null||s.loading.classList.remove("--show"),(h=o(this,v).states)==null||h.delete("loading"),a(this,n,P).call(this),a(this,n,Q).call(this))}get isListEmpty(){return o(this,w)}set isListEmpty(t){var e,r;m(this,w,t),t?(e=o(this,v).states)==null||e.add("empty"):(r=o(this,v).states)==null||r.delete("empty"),a(this,n,T).call(this,!1),a(this,n,P).call(this)}connectedCallback(){this.callOnLoadEvent(),a(this,n,vt).call(this),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(t)}scrollTo(t,e){e?this.elements.contentWrapper.scrollTo(t,e):this.elements.contentWrapper.scrollTo(t)}scrollToEnd(t){this.scrollTo({...t,top:this.elements.contentWrapper.scrollHeight})}get canCaptureScroll(){return!(o(this,L)||o(this,n,G)||o(this,y)||o(this,k)||o(this,S))}static get observedAttributes(){return["is-loading","is-list-empty","is-list-ended","disable-capture-scroll","state-change-waiting-behavior","stick-to-bottom"]}attributeChangedCallback(t,e,r){a(this,n,Lt).call(this,t,r)}},L=new WeakMap,q=new WeakMap,y=new WeakMap,k=new WeakMap,S=new WeakMap,w=new WeakMap,v=new WeakMap,n=new WeakSet,G=function(){if(o(this,w)!==null)return o(this,w)},b=new WeakMap,J=new WeakMap,K=function(t){switch(t){case"FORCE_WAIT":default:return I.forceWait;case"NO_WAIT":return I.noWait}},P=function(){var t,e,r,s;o(this,n,G)?((t=this.elements)==null||t.emptyListWrapper.classList.add("--show"),(e=this.elements)==null||e.contentWrapper.classList.remove("--show")):((r=this.elements)==null||r.contentWrapper.classList.add("--show"),(s=this.elements)==null||s.emptyListWrapper.classList.remove("--show"))},ft=function(){const t=this.attachShadow({mode:"open"}),e=document.createElement("template");e.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;max-height:100%;padding:1rem;display:flex;overflow-y:hidden}</style>

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
      `,t.appendChild(e.content.cloneNode(!0)),this.elements={loading:t.querySelector(".loading-wrapper"),componentWrapper:t.querySelector(".Infinite-scroll-component"),contentWrapper:t.querySelector(".content-wrapper"),loadingWrapper:t.querySelector(".loading-wrapper"),emptyListWrapper:t.querySelector(".empty-list-wrapper")},this.isLoading=this.hasAttribute("is-loading")?this.getAttribute("is-loading")==="true":o(this,L),m(this,J,new Bt({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector("slot")}))},Et=function(){this.elements.contentWrapper.addEventListener("scroll",a(this,n,bt).bind(this),{passive:!0})},vt=function(){a(this,n,Et).call(this),a(this,n,Q).call(this)},Q=function(){const{scrollHeight:t,clientHeight:e}=this.elements.contentWrapper;t<=e&&this.canCaptureScroll&&a(this,n,V).call(this)},V=function(){a(this,n,T).call(this,!0);const t=new CustomEvent("scrollEnd");this.dispatchEvent(t)},bt=function(){const{scrollTop:t,scrollHeight:e,clientHeight:r}=this.elements.contentWrapper;t+r+o(this,q)>=e&&this.canCaptureScroll&&a(this,n,V).call(this)},T=function(t){if(t){if(o(this,b)===I.forceWait)m(this,k,!0);else if(o(this,b)===I.noWait)return}m(this,k,!1)},Lt=function(t,e){switch(t){case"is-loading":this.isLoading=e==="true"||e==="";break;case"is-list-empty":this.isListEmpty=e==="true"||e==="";break;case"is-list-ended":m(this,y,e==="true"||e==="");break;case"disable-capture-scroll":m(this,S,e==="true"||e==="");break;case"state-change-waiting-behavior":m(this,b,a(this,n,K).call(this,e));break;case"stick-to-bottom":o(this,J).stickToBottom=e==="true"||e===""}},Z);customElements.get("jb-infinite-scroll")||window.customElements.define("jb-infinite-scroll",Wt);let R=l.forwardRef((i,t)=>{var e,r;let s=d.useRef(null);d.useImperativeHandle(t,()=>s?s.current:void 0,[s]);let{onInit:h,onLoad:B,onScroll:W,onScrollEnd:C,disableCaptureScroll:p,isListEmpty:M,isListEnded:c,stateChangeWaitingBehavior:yt,isLoading:St,stickToBottom:wt,children:Tt,...kt}=i;return e={disableCaptureScroll:p,isListEmpty:M,isListEnded:c,stateChangeWaitingBehavior:yt,isLoading:St,stickToBottom:wt},d.useEffect(()=>{s.current&&typeof e.isLoading=="boolean"&&(e.isLoading?s.current.setAttribute("is-loading","true"):s.current.setAttribute("is-loading","false"))},[s.current,e.isLoading]),d.useEffect(()=>{s.current,typeof e.isListEmpty=="boolean"&&(e.isListEmpty?s.current.setAttribute("is-list-empty","true"):s.current.setAttribute("is-list-empty","false"))},[s.current,e.isListEmpty]),d.useEffect(()=>{var g,E;s.current&&typeof e.isListEnded=="boolean"&&(e.isListEnded?(g=s.current)==null||g.setAttribute("is-list-ended","true"):(E=s.current)==null||E.setAttribute("is-list-ended","false"))},[s.current,e.isListEnded]),d.useEffect(()=>{var g,E;s.current&&typeof e.disableCaptureScroll=="boolean"&&(e.disableCaptureScroll?(g=s.current)==null||g.setAttribute("disable-capture-scroll","true"):(E=s.current)==null||E.setAttribute("disable-capture-scroll","false"))},[s.current,e.disableCaptureScroll]),d.useEffect(()=>{var g,E;s.current&&(e.stickToBottom?(g=s.current)==null||g.setAttribute("stick-to-bottom",""):(E=s.current)==null||E.removeAttribute("stick-to-bottom"))},[s.current,e.stickToBottom]),d.useEffect(()=>{var g;e.stateChangeWaitingBehavior&&s.current&&((g=s.current)==null||g.setAttribute("state-change-waiting-behavior",e.stateChangeWaitingBehavior))},[s.current,e.stateChangeWaitingBehavior]),N(s,"load",(r={onInit:h,onLoad:B,onScroll:W,onScrollEnd:C}).onLoad,!0),N(s,"init",r.onInit,!0),N(s,"scroll",r.onScroll),N(s,"scrollEnd",r.onScrollEnd,!0),l.createElement("jb-infinite-scroll",{ref:s,...kt},Tt)});R.displayName="JBInfiniteScroll";const Nt={title:"Components/JBInfiniteScroll",component:R},O={args:{children:l.createElement("div",{slot:"content"},l.createElement("div",null,"item1"),l.createElement("div",null,"item2"),l.createElement("div",null,"item3"))}},H={render:i=>{const t=d.useRef(null),[e,r]=d.useState([1,2,3,4,5,6,7,8,9]),[s,h]=d.useState(!1),[B,W]=d.useState(!1),C=()=>{const p=e.at(-1);p>100&&W(!0),h(!0),setTimeout(()=>{r([...e,p+1,p+2,p+3,p+4,p+5,p+6,p+7,p+8,p+9]),h(!1)},1e3)};return l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(R,{...i,ref:t,onScrollEnd:C,isLoading:s,isListEnded:B,disableCaptureScroll:s},l.createElement("div",{slot:"content"},e.map(p=>l.createElement("div",{key:p,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},p)))))}},z={render:i=>{const t=d.useRef(null),[e,r]=d.useState([1,2,3,4,5,6,7,8,9]),[s,h]=d.useState(!1),[B,W]=d.useState(!1),C=()=>{const c=e.at(-1);c>100&&W(!0),h(!0),setTimeout(()=>{r([...e,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9]),h(!1)},1e3)},p=()=>{var c;(c=t.current)==null||c.scrollTo({behavior:"smooth",top:400})},M=()=>{var c;(c=t.current)==null||c.scrollToEnd()};return l.createElement(d.Fragment,null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(R,{...i,ref:t,onScrollEnd:C,isLoading:s,isListEnded:B,disableCaptureScroll:s},l.createElement("div",{slot:"content"},e.map(c=>l.createElement("div",{key:c,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},c))))),l.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"}},l.createElement(U,{onClick:M},"scroll to end"),l.createElement(U,{onClick:p},"scroll to 400px")))}},j={render:i=>{const t=d.useRef(null),[e,r]=d.useState([1,2,3,4,5,6,7,8,9]);return l.createElement("div",null,l.createElement("div",{style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},l.createElement(R,{...i,ref:t},l.createElement("div",{slot:"content"},e.map(s=>l.createElement("div",{key:s,style:{border:"solid 1px #black",fontSize:"3rem",textAlign:"center",padding:"2rem"}},s))))),l.createElement(U,{size:"sm",onClick:()=>{const s=e.at(-1);r(h=>[...h,s+1,s+2,s+3,s+4,s+5,s+6,s+7,s+8,s+9])}},"add more content to bottom"))},args:{stickToBottom:!0}},_={args:{isListEmpty:!0,children:l.createElement("div",{slot:"empty"},"list is empty")}};var $,tt,et;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...(et=(tt=O.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var st,it,nt;H.parameters={...H.parameters,docs:{...(st=H.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(nt=(it=H.parameters)==null?void 0:it.docs)==null?void 0:nt.source}}};var rt,ot,lt;z.parameters={...z.parameters,docs:{...(rt=z.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ot=z.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var at,ct,dt;j.parameters={...j.parameters,docs:{...(at=j.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(dt=(ct=j.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,ut,mt;_.parameters={..._.parameters,docs:{...(pt=_.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...(mt=(ut=_.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};const Ot=["Normal","ActionTemplate","ScrollManipulation","StickToBottom","Empty"];export{H as ActionTemplate,_ as Empty,O as Normal,z as ScrollManipulation,j as StickToBottom,Ot as __namedExportsOrder,Nt as default};
