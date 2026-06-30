import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CCmaC7-g.js";import{t as a}from"./jb-loading-BNmXGcgN.js";import{r as o,t as s}from"./react-CxIWQIh_.js";import{r as c,t as l}from"./react-BK0eYxPk.js";var u,d,f=t((()=>{a(),u=class{#e;get stickToBottom(){return this.#e}set stickToBottom(e){this.#e=e,e?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}constructor(e,t){this.#e=!1,this.isUserScrolledTop=!1,this.observers=[],this.#r=()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()},this.callbacks=e,this.elements=t}init(){let e=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach((e=>{e.nodeType==Node.ELEMENT_NODE&&this.#t(e)}))};this.elements.contentWrapper.addEventListener(`scroll`,this.#r,{passive:!0}),e(),this.elements.contentSlot.addEventListener(`slotchange`,(()=>{this.#n(),e()}))}#t(e){let t=new MutationObserver(this.#i.bind(this));t.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(t)}destruct(){this.#n(),this.elements.contentWrapper.removeEventListener(`scroll`,this.#r)}#n(){this.observers.forEach((e=>e.disconnect()))}#r;#i(e,t){e.find((e=>e.addedNodes!==null))&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()}calcIsUserScrolledTop(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;return t-(e+n)>100}},function(e){return e.forceWait=`FORCE_WAIT`,e.noWait=`NO_WAIT`,e}({}),d=class extends HTMLElement{#e=!1;#t=0;#n=!1;#r=!1;#i=!1;#a=null;#o;get#s(){return this.#a===null?null:this.#a}#c=`FORCE_WAIT`;#l;constructor(){super(),typeof this.attachInternals==`function`&&(this.#o=this.attachInternals()),this.#f()}#u(e){switch(e){case`FORCE_WAIT`:default:return`FORCE_WAIT`;case`NO_WAIT`:return`NO_WAIT`}}set stateChangeWaitingBehavior(e){this.#c=this.#u(e)}get stateChangeWaitingBehavior(){return this.#c}get disableCaptureScroll(){return this.#i}set disableCaptureScroll(e){this.#i=e,this.#y(!1)}get isListEnded(){return this.#n}set isListEnded(e){this.#n=e,this.#y(!1)}get isLoading(){return this.#e}set isLoading(e){this.#e=e,this.#y(!1),e?(this.elements?.loading.classList.add(`--show`),this.#o.states?.add(`loading`)):(this.elements?.loading.classList.remove(`--show`),this.#o.states?.delete(`loading`),this.#d(),this.#h())}get isListEmpty(){return this.#a??!1}set isListEmpty(e){this.#a=e,e?this.#o.states?.add(`empty`):this.#o.states?.delete(`empty`),this.#y(!1),this.#d()}#d(){this.#s?(this.elements?.emptyListWrapper.classList.add(`--show`),this.elements?.contentWrapper.classList.remove(`--show`)):(this.elements?.contentWrapper.classList.add(`--show`),this.elements?.emptyListWrapper.classList.remove(`--show`))}connectedCallback(){this.callOnLoadEvent(),this.#m(),this.callOnInitEvent()}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}#f(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{width:100%;height:100%;display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;display:none;overflow:auto}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:40px;height:40px;margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;width:100%;height:100%;max-height:100%;padding:1rem;display:flex;overflow-y:hidden}</style>

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
      `,e.appendChild(t.content.cloneNode(!0)),this.elements={loading:e.querySelector(`.loading-wrapper`),componentWrapper:e.querySelector(`.Infinite-scroll-component`),contentWrapper:e.querySelector(`.content-wrapper`),loadingWrapper:e.querySelector(`.loading-wrapper`),emptyListWrapper:e.querySelector(`.empty-list-wrapper`)},this.isLoading=this.hasAttribute(`is-loading`)?this.getAttribute(`is-loading`)===`true`:this.#e,this.#l=new u({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector(`slot`)})}#p(){this.elements.contentWrapper.addEventListener(`scroll`,this.#_.bind(this),{passive:!0})}#m(){this.#p(),this.#h()}#h(){let{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&this.#g()}scrollTo(e,t){t?this.elements.contentWrapper.scrollTo(e,t):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}#g(){this.#y(!0);let e=new CustomEvent(`scrollEnd`);this.dispatchEvent(e)}#_(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;this.#v(),e+n+this.#t>=t&&this.canCaptureScroll&&this.#g()}#v(){let e=new Event(`scroll`,{bubbles:!1,cancelable:!1,composed:!0});this.dispatchEvent(e)}#y(e){if(e){if(this.#c===`FORCE_WAIT`)this.#r=!0;else if(this.#c===`NO_WAIT`)return}this.#r=!1}get canCaptureScroll(){return!(this.#e||this.#s||this.#n||this.#r||this.#i)}static get observedAttributes(){return[`is-loading`,`is-list-empty`,`is-list-ended`,`disable-capture-scroll`,`state-change-waiting-behavior`,`stick-to-bottom`]}attributeChangedCallback(e,t,n){this.#b(e,n)}#b(e,t){switch(e){case`is-loading`:this.isLoading=t===`true`||t===``;break;case`is-list-empty`:this.isListEmpty=t===`true`||t===``;break;case`is-list-ended`:this.#n=t===`true`||t===``;break;case`disable-capture-scroll`:this.#i=t===`true`||t===``;break;case`state-change-waiting-behavior`:this.#c=this.#u(t);break;case`stick-to-bottom`:this.#l.stickToBottom=t===`true`||t===``}}},customElements.get(`jb-infinite-scroll`)||window.customElements.define(`jb-infinite-scroll`,d)})),p=t((()=>{f()})),m,h,g=t((()=>{m=n(r(),1),p(),s(),h=m.forwardRef(((e,t)=>{let n=(0,m.useRef)(null);(0,m.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{onInit:r,onLoad:i,onScroll:a,onScrollEnd:s,disableCaptureScroll:c,isListEmpty:l,isListEnded:u,stateChangeWaitingBehavior:d,isLoading:f,stickToBottom:p,children:h,...g}=e;return function(e,t){(0,m.useEffect)((()=>{e.current&&typeof t.isLoading==`boolean`&&(t.isLoading?e.current.setAttribute(`is-loading`,`true`):e.current.setAttribute(`is-loading`,`false`))}),[e.current,t.isLoading]),(0,m.useEffect)((()=>{e.current&&typeof t.isListEmpty==`boolean`&&(t.isListEmpty?e.current.setAttribute(`is-list-empty`,`true`):e.current.setAttribute(`is-list-empty`,`false`))}),[e.current,t.isListEmpty]),(0,m.useEffect)((()=>{e.current&&typeof t.isListEnded==`boolean`&&(t.isListEnded?e.current?.setAttribute(`is-list-ended`,`true`):e.current?.setAttribute(`is-list-ended`,`false`))}),[e.current,t.isListEnded]),(0,m.useEffect)((()=>{e.current&&typeof t.disableCaptureScroll==`boolean`&&(t.disableCaptureScroll?e.current?.setAttribute(`disable-capture-scroll`,`true`):e.current?.setAttribute(`disable-capture-scroll`,`false`))}),[e.current,t.disableCaptureScroll]),(0,m.useEffect)((()=>{e.current&&(t.stickToBottom?e.current?.setAttribute(`stick-to-bottom`,``):e.current?.removeAttribute(`stick-to-bottom`))}),[e.current,t.stickToBottom]),(0,m.useEffect)((()=>{t.stateChangeWaitingBehavior&&e.current&&e.current?.setAttribute(`state-change-waiting-behavior`,t.stateChangeWaitingBehavior)}),[e.current,t.stateChangeWaitingBehavior])}(n,{disableCaptureScroll:c,isListEmpty:l,isListEnded:u,stateChangeWaitingBehavior:d,isLoading:f,stickToBottom:p}),function(e,t){o(e,`load`,t.onLoad,!0),o(e,`init`,t.onInit,!0),o(e,`scroll`,t.onScroll),o(e,`scrollEnd`,t.onScrollEnd,!0)}(n,{onInit:r,onLoad:i,onScroll:a,onScrollEnd:s}),m.createElement(`jb-infinite-scroll`,{ref:n,...g},h)})),h.displayName=`JBInfiniteScroll`})),_=t((()=>{g()})),v=e({ActionTemplate:()=>C,Empty:()=>E,Normal:()=>S,ScrollEventTest:()=>D,ScrollManipulation:()=>w,StickToBottom:()=>T,__namedExportsOrder:()=>O,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k=t((()=>{y=n(r(),1),_(),l(),b=i(),x={title:`Components/JBInfiniteScroll`,component:h},S={args:{children:(0,b.jsxs)(`div`,{slot:`content`,children:[(0,b.jsx)(`div`,{children:`item1`}),(0,b.jsx)(`div`,{children:`item2`}),(0,b.jsx)(`div`,{children:`item3`})]})}},C={render:e=>{let t=(0,y.useRef)(null),[n,r]=(0,y.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,y.useState)(!1),[o,s]=(0,y.useState)(!1),c=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)};return(0,b.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,b.jsx)(h,{...e,ref:t,onScrollEnd:c,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,b.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,b.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})})}},w={render:e=>{let t=(0,y.useRef)(null),[n,r]=(0,y.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,y.useState)(!1),[o,s]=(0,y.useState)(!1),l=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)},u=()=>{t.current?.scrollTo({behavior:`smooth`,top:400})},d=()=>{t.current?.scrollToEnd()};return(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,b.jsx)(h,{...e,ref:t,onScrollEnd:l,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,b.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,b.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,b.jsxs)(`div`,{style:{marginTop:`1rem`,display:`flex`,gap:`0.5rem`},children:[(0,b.jsx)(c,{onClick:d,children:`scroll to end`}),(0,b.jsx)(c,{onClick:u,children:`scroll to 400px`})]})]})}},T={render:e=>{let t=(0,y.useRef)(null),[n,r]=(0,y.useState)([1,2,3,4,5,6,7,8,9]);return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,b.jsx)(h,{...e,ref:t,children:(0,b.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,b.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,b.jsx)(c,{size:`sm`,onClick:()=>{let e=n.at(-1);r(t=>[...t,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9])},children:`add more content to bottom`})]})},args:{stickToBottom:!0}},E={args:{isListEmpty:!0,children:(0,b.jsx)(`div`,{slot:`empty`,children:`list is empty`})}},D={render:C.render,args:{...C.args,onScroll:e=>console.log(`scrolled`,e)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: ActionTemplate.render,
  args: {
    ...ActionTemplate.args,
    onScroll: e => console.log("scrolled", e)
  }
}`,...D.parameters?.docs?.source}}},O=[`Normal`,`ActionTemplate`,`ScrollManipulation`,`StickToBottom`,`Empty`,`ScrollEventTest`]}));k();export{C as ActionTemplate,E as Empty,S as Normal,D as ScrollEventTest,w as ScrollManipulation,T as StickToBottom,O as __namedExportsOrder,x as default,k as n,v as t};