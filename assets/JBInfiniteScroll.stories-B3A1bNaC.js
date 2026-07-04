import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-WpqGXe4i.js";import{t as a}from"./jb-loading-CeygB3zG.js";import{r as o,t as s}from"./react-vqXMbvR2.js";import{r as c,t as l}from"./react-CA2h_KYF.js";var u,d,f=t((()=>{a(),u=class{#e;get stickToBottom(){return this.#e}set stickToBottom(e){this.#e=e,e?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}constructor(e,t){this.#e=!1,this.isUserScrolledTop=!1,this.observers=[],this.#r=()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()},this.callbacks=e,this.elements=t}init(){let e=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach((e=>{e.nodeType==Node.ELEMENT_NODE&&this.#t(e)}))};this.elements.contentWrapper.addEventListener(`scroll`,this.#r,{passive:!0}),e(),this.elements.contentSlot.addEventListener(`slotchange`,(()=>{this.#n(),e()}))}#t(e){let t=new MutationObserver(this.#i.bind(this));t.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(t)}destruct(){this.#n(),this.elements.contentWrapper.removeEventListener(`scroll`,this.#r)}#n(){this.observers.forEach((e=>e.disconnect()))}#r;#i(e,t){e.find((e=>e.addedNodes!==null))&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()}calcIsUserScrolledTop(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;return t-(e+n)>100}},function(e){return e.forceWait=`FORCE_WAIT`,e.noWait=`NO_WAIT`,e}({}),d=class extends HTMLElement{#e=!1;#t=0;#n=!1;#r=!1;#i=!1;#a=null;#o;get#s(){return this.#a===null?null:this.#a}#c=`FORCE_WAIT`;#l;constructor(){super(),typeof this.attachInternals==`function`&&(this.#o=this.attachInternals()),this.#f()}#u(e){switch(e){case`FORCE_WAIT`:default:return`FORCE_WAIT`;case`NO_WAIT`:return`NO_WAIT`}}set stateChangeWaitingBehavior(e){this.#c=this.#u(e)}get stateChangeWaitingBehavior(){return this.#c}get disableCaptureScroll(){return this.#i}set disableCaptureScroll(e){this.#i=e,this.#y(!1)}get isListEnded(){return this.#n}set isListEnded(e){this.#n=e,this.#y(!1)}get isLoading(){return this.#e}set isLoading(e){this.#e=e,this.#y(!1),e?(this.elements?.loading.classList.add(`--show`),this.#o.states?.add(`loading`)):(this.elements?.loading.classList.remove(`--show`),this.#o.states?.delete(`loading`),this.#d(),this.#h())}get isListEmpty(){return this.#a??!1}set isListEmpty(e){this.#a=e,e?this.#o.states?.add(`empty`):this.#o.states?.delete(`empty`),this.#y(!1),this.#d()}#d(){this.#s?(this.elements?.emptyListWrapper.classList.add(`--show`),this.elements?.contentWrapper.classList.remove(`--show`)):(this.elements?.contentWrapper.classList.add(`--show`),this.elements?.emptyListWrapper.classList.remove(`--show`))}connectedCallback(){this.callOnLoadEvent(),this.#m(),this.callOnInitEvent()}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}#f(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--width:var(--jb-infinite-scroll-width,100%);--height:var(--jb-infinite-scroll-height,100%);--loading-size:var(--jb-infinite-scroll-loading-size,2.5rem);--empty-padding:var(--jb-infinite-scroll-empty-padding,1rem);--content-overflow:var(--jb-infinite-scroll-content-overflow,auto)} :host{width:var(--width);height:var(--height);display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;overflow:var(--content-overflow);display:none}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:var(--loading-size);height:var(--loading-size);margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){width:100%;height:100%;max-height:100%;padding:var(--empty-padding);box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;display:flex;overflow-y:hidden}</style>

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
      `,e.appendChild(t.content.cloneNode(!0)),this.elements={loading:e.querySelector(`.loading-wrapper`),componentWrapper:e.querySelector(`.Infinite-scroll-component`),contentWrapper:e.querySelector(`.content-wrapper`),loadingWrapper:e.querySelector(`.loading-wrapper`),emptyListWrapper:e.querySelector(`.empty-list-wrapper`)},this.isLoading=this.hasAttribute(`is-loading`)?this.getAttribute(`is-loading`)===`true`:this.#e,this.#l=new u({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector(`slot`)})}#p(){this.elements.contentWrapper.addEventListener(`scroll`,this.#_.bind(this),{passive:!0})}#m(){this.#p(),this.#h()}#h(){let{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&this.#g()}scrollTo(e,t){t?this.elements.contentWrapper.scrollTo(e,t):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}#g(){this.#y(!0);let e=new CustomEvent(`scrollEnd`);this.dispatchEvent(e)}#_(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;this.#v(),e+n+this.#t>=t&&this.canCaptureScroll&&this.#g()}#v(){let e=new Event(`scroll`,{bubbles:!1,cancelable:!1,composed:!0});this.dispatchEvent(e)}#y(e){if(e){if(this.#c===`FORCE_WAIT`)this.#r=!0;else if(this.#c===`NO_WAIT`)return}this.#r=!1}get canCaptureScroll(){return!(this.#e||this.#s||this.#n||this.#r||this.#i)}static get observedAttributes(){return[`is-loading`,`is-list-empty`,`is-list-ended`,`disable-capture-scroll`,`state-change-waiting-behavior`,`stick-to-bottom`]}attributeChangedCallback(e,t,n){this.#b(e,n)}#b(e,t){switch(e){case`is-loading`:this.isLoading=t===`true`||t===``;break;case`is-list-empty`:this.isListEmpty=t===`true`||t===``;break;case`is-list-ended`:this.#n=t===`true`||t===``;break;case`disable-capture-scroll`:this.#i=t===`true`||t===``;break;case`state-change-waiting-behavior`:this.#c=this.#u(t);break;case`stick-to-bottom`:this.#l.stickToBottom=t===`true`||t===``}}},customElements.get(`jb-infinite-scroll`)||window.customElements.define(`jb-infinite-scroll`,d)})),p=t((()=>{f()})),m,h,g=t((()=>{m=n(r(),1),p(),s(),h=m.forwardRef(((e,t)=>{let n=(0,m.useRef)(null);(0,m.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{onInit:r,onLoad:i,onScroll:a,onScrollEnd:s,disableCaptureScroll:c,isListEmpty:l,isListEnded:u,stateChangeWaitingBehavior:d,isLoading:f,stickToBottom:p,children:h,...g}=e;return function(e,t){(0,m.useEffect)((()=>{e.current&&typeof t.isLoading==`boolean`&&(t.isLoading?e.current.setAttribute(`is-loading`,`true`):e.current.setAttribute(`is-loading`,`false`))}),[e.current,t.isLoading]),(0,m.useEffect)((()=>{e.current&&typeof t.isListEmpty==`boolean`&&(t.isListEmpty?e.current.setAttribute(`is-list-empty`,`true`):e.current.setAttribute(`is-list-empty`,`false`))}),[e.current,t.isListEmpty]),(0,m.useEffect)((()=>{e.current&&typeof t.isListEnded==`boolean`&&(t.isListEnded?e.current?.setAttribute(`is-list-ended`,`true`):e.current?.setAttribute(`is-list-ended`,`false`))}),[e.current,t.isListEnded]),(0,m.useEffect)((()=>{e.current&&typeof t.disableCaptureScroll==`boolean`&&(t.disableCaptureScroll?e.current?.setAttribute(`disable-capture-scroll`,`true`):e.current?.setAttribute(`disable-capture-scroll`,`false`))}),[e.current,t.disableCaptureScroll]),(0,m.useEffect)((()=>{e.current&&(t.stickToBottom?e.current?.setAttribute(`stick-to-bottom`,``):e.current?.removeAttribute(`stick-to-bottom`))}),[e.current,t.stickToBottom]),(0,m.useEffect)((()=>{t.stateChangeWaitingBehavior&&e.current&&e.current?.setAttribute(`state-change-waiting-behavior`,t.stateChangeWaitingBehavior)}),[e.current,t.stateChangeWaitingBehavior])}(n,{disableCaptureScroll:c,isListEmpty:l,isListEnded:u,stateChangeWaitingBehavior:d,isLoading:f,stickToBottom:p}),function(e,t){o(e,`load`,t.onLoad,!0),o(e,`init`,t.onInit,!0),o(e,`scroll`,t.onScroll),o(e,`scrollEnd`,t.onScrollEnd,!0)}(n,{onInit:r,onLoad:i,onScroll:a,onScrollEnd:s}),m.createElement(`jb-infinite-scroll`,{ref:n,...g},h)})),h.displayName=`JBInfiniteScroll`})),_=t((()=>{g()}));function v(e,t=0){let n=e.querySelectorAll(`jb-infinite-scroll`)[t];return O(n).toBeTruthy(),O(n.shadowRoot).toBeTruthy(),n}function y(e){let t=e.shadowRoot?.querySelector(`.content-wrapper`);return O(t).toBeTruthy(),t}function b(e){let t=e.shadowRoot?.querySelector(`.loading-wrapper`);return O(t).toBeTruthy(),t}function x(e){let t=e.shadowRoot?.querySelector(`.empty-list-wrapper`);return O(t).toBeTruthy(),t}function S(e){let t=e.querySelector(`[slot="content"]`);return O(t).toBeTruthy(),t}function C(e,t){let n=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(t));return O(n).toBeTruthy(),n}function w(e){let t=e.shadowRoot?.querySelector(`button`);return O(t).toBeTruthy(),t}async function T(e,t){e.scrollTo({top:t}),e.dispatchEvent(new Event(`scroll`)),await k(()=>{O(Math.round(e.scrollTop)).toBeGreaterThanOrEqual(Math.max(0,Math.floor(t)-1))})}async function E(e){await T(e,e.scrollHeight-e.clientHeight)}function D(e,t=2){return e.scrollHeight-e.clientHeight-e.scrollTop<=t}var O,k,A=t((()=>{({expect:O,waitFor:k}=__STORYBOOK_MODULE_TEST__)})),j=e({ActionTemplate:()=>B,Empty:()=>U,Normal:()=>z,ScrollEventTest:()=>W,ScrollManipulation:()=>V,StickToBottom:()=>H,__namedExportsOrder:()=>G,default:()=>R}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K=t((()=>{M=n(r(),1),_(),l(),A(),N=i(),{expect:P,fn:F,userEvent:I,waitFor:L}=__STORYBOOK_MODULE_TEST__,R={title:`Components/JBInfiniteScroll`,component:h},z={args:{children:(0,N.jsxs)(`div`,{slot:`content`,children:[(0,N.jsx)(`div`,{children:`item1`}),(0,N.jsx)(`div`,{children:`item2`}),(0,N.jsx)(`div`,{children:`item3`})]})}},B={render:e=>{let t=(0,M.useRef)(null),[n,r]=(0,M.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,M.useState)(!1),[o,s]=(0,M.useState)(!1),c=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)};return(0,N.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,N.jsx)(h,{...e,ref:t,onScrollEnd:c,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,N.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,N.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})})},play:async({canvasElement:e})=>{let t=v(e),n=y(t),r=b(t),i=S(e);P(i).not.toHaveTextContent(`18`),await E(n),await L(()=>{P(r).toHaveClass(`--show`),P(t.isLoading).toBe(!0)}),await L(()=>{P(i).toHaveTextContent(`18`),P(r).not.toHaveClass(`--show`),P(t.isLoading).toBe(!1)},{timeout:2e3})}},V={render:e=>{let t=(0,M.useRef)(null),[n,r]=(0,M.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,M.useState)(!1),[o,s]=(0,M.useState)(!1),l=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)},u=()=>{t.current?.scrollTo({behavior:`smooth`,top:400})},d=()=>{t.current?.scrollToEnd()};return(0,N.jsxs)(M.Fragment,{children:[(0,N.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,N.jsx)(h,{...e,ref:t,onScrollEnd:l,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,N.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,N.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,N.jsxs)(`div`,{style:{marginTop:`1rem`,display:`flex`,gap:`0.5rem`},children:[(0,N.jsx)(c,{onClick:d,children:`scroll to end`}),(0,N.jsx)(c,{onClick:u,children:`scroll to 25rem`})]})]})},play:async({canvasElement:e})=>{let t=y(v(e)),n=C(e,`scroll to 25rem`),r=C(e,`scroll to end`);await I.click(w(n)),await L(()=>{P(t.scrollTop).toBeGreaterThan(250)});let i=t.scrollHeight-t.clientHeight;await I.click(w(r)),await L(()=>{P(t.scrollTop).toBeGreaterThanOrEqual(i-2)})}},H={render:e=>{let t=(0,M.useRef)(null),[n,r]=(0,M.useState)([1,2,3,4,5,6,7,8,9]);return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,N.jsx)(h,{...e,ref:t,children:(0,N.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,N.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,N.jsx)(c,{size:`sm`,onClick:()=>{let e=n.at(-1);r(t=>[...t,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9])},children:`add more content to bottom`})]})},args:{stickToBottom:!0},play:async({canvasElement:e})=>{let t=y(v(e)),n=S(e),r=C(e,`add more content to bottom`);await L(()=>{P(D(t)).toBe(!0)}),await I.click(w(r)),await L(()=>{P(n).toHaveTextContent(`18`),P(D(t)).toBe(!0)})}},U={args:{isListEmpty:!0,children:(0,N.jsx)(`div`,{slot:`empty`,children:`list is empty`})},play:async({canvasElement:e})=>{let t=v(e),n=y(t),r=x(t);await L(()=>{P(t.isListEmpty).toBe(!0),P(n).not.toHaveClass(`--show`),P(r).toHaveClass(`--show`),P(e).toHaveTextContent(`list is empty`)})}},W={render:B.render,args:{...B.args,onScroll:F()},play:async({canvasElement:e,args:t})=>{await T(y(v(e)),100),await L(()=>{P(t.onScroll).toHaveBeenCalled()})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const infiniteScroll = getInfiniteScroll(canvasElement);
    const contentWrapper = getContentWrapper(infiniteScroll);
    const loadingWrapper = getLoadingWrapper(infiniteScroll);
    const content = getSlottedContent(canvasElement);
    expect(content).not.toHaveTextContent('18');
    await scrollContentToEnd(contentWrapper);
    await waitFor(() => {
      expect(loadingWrapper).toHaveClass('--show');
      expect(infiniteScroll.isLoading).toBe(true);
    });
    await waitFor(() => {
      expect(content).toHaveTextContent('18');
      expect(loadingWrapper).not.toHaveClass('--show');
      expect(infiniteScroll.isLoading).toBe(false);
    }, {
      timeout: 2000
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
            <JBButton onClick={scrollTo}>scroll to 25rem</JBButton>
          </div>
        </Fragment>;
  },
  play: async ({
    canvasElement
  }) => {
    const infiniteScroll = getInfiniteScroll(canvasElement);
    const contentWrapper = getContentWrapper(infiniteScroll);
    const scrollTo400Button = getJBButton(canvasElement, 'scroll to 25rem');
    const scrollToEndButton = getJBButton(canvasElement, 'scroll to end');
    await userEvent.click(getJBButtonNativeButton(scrollTo400Button));
    await waitFor(() => {
      expect(contentWrapper.scrollTop).toBeGreaterThan(250);
    });
    const bottomBeforeLoading = contentWrapper.scrollHeight - contentWrapper.clientHeight;
    await userEvent.click(getJBButtonNativeButton(scrollToEndButton));
    await waitFor(() => {
      expect(contentWrapper.scrollTop).toBeGreaterThanOrEqual(bottomBeforeLoading - 2);
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const infiniteScroll = getInfiniteScroll(canvasElement);
    const contentWrapper = getContentWrapper(infiniteScroll);
    const content = getSlottedContent(canvasElement);
    const addButton = getJBButton(canvasElement, 'add more content to bottom');
    await waitFor(() => {
      expect(isScrolledToBottom(contentWrapper)).toBe(true);
    });
    await userEvent.click(getJBButtonNativeButton(addButton));
    await waitFor(() => {
      expect(content).toHaveTextContent('18');
      expect(isScrolledToBottom(contentWrapper)).toBe(true);
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isListEmpty: true,
    children: <div slot="empty">list is empty</div>
  },
  play: async ({
    canvasElement
  }) => {
    const infiniteScroll = getInfiniteScroll(canvasElement);
    const contentWrapper = getContentWrapper(infiniteScroll);
    const emptyListWrapper = getEmptyListWrapper(infiniteScroll);
    await waitFor(() => {
      expect(infiniteScroll.isListEmpty).toBe(true);
      expect(contentWrapper).not.toHaveClass('--show');
      expect(emptyListWrapper).toHaveClass('--show');
      expect(canvasElement).toHaveTextContent('list is empty');
    });
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: ActionTemplate.render,
  args: {
    ...ActionTemplate.args,
    onScroll: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const infiniteScroll = getInfiniteScroll(canvasElement);
    const contentWrapper = getContentWrapper(infiniteScroll);
    await scrollContentTo(contentWrapper, 100);
    await waitFor(() => {
      expect(args.onScroll).toHaveBeenCalled();
    });
  }
}`,...W.parameters?.docs?.source}}},G=[`Normal`,`ActionTemplate`,`ScrollManipulation`,`StickToBottom`,`Empty`,`ScrollEventTest`]}));K();export{B as ActionTemplate,U as Empty,z as Normal,W as ScrollEventTest,V as ScrollManipulation,H as StickToBottom,G as __namedExportsOrder,R as default,K as n,j as t};