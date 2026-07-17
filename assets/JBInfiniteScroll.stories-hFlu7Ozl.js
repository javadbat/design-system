import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,a as i,n as a,r as o,t as s}from"./iframe-CxfI9dM7.js";import{t as c}from"./jb-loading-BqBJjIv7.js";import{r as l,t as u}from"./react-D9lexoxj.js";import{r as d,t as f}from"./react-BsidYpTV.js";var p,m,h,g=t((()=>{o(),c(),p=class{#e;get stickToBottom(){return this.#e}set stickToBottom(e){this.#e=e,e?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}constructor(e,t){this.#e=!1,this.isUserScrolledTop=!1,this.observers=[],this.#r=()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()},this.callbacks=e,this.elements=t}init(){let e=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach((e=>{e.nodeType==Node.ELEMENT_NODE&&this.#t(e)}))};this.elements.contentWrapper.addEventListener(`scroll`,this.#r,{passive:!0}),e(),this.elements.contentSlot.addEventListener(`slotchange`,(()=>{this.#n(),e()}))}#t(e){let t=new MutationObserver(this.#i.bind(this));t.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(t)}destruct(){this.#n(),this.elements.contentWrapper.removeEventListener(`scroll`,this.#r)}#n(){this.observers.forEach((e=>e.disconnect()))}#r;#i(e,t){e.find((e=>e.addedNodes!==null))&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()}calcIsUserScrolledTop(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;return t-(e+n)>100}},m=new a({fa:{loadingMoreItems:`در حال بارگذاری موارد بیشتر`},en:{loadingMoreItems:`Loading more items`}}),function(e){return e.forceWait=`FORCE_WAIT`,e.noWait=`NO_WAIT`,e}({}),h=class extends HTMLElement{#e=!1;#t=0;#n=!1;#r=!1;#i=!1;#a=null;#o;get#s(){return this.#a===null?null:this.#a}#c=`FORCE_WAIT`;#l;constructor(){super(),typeof this.attachInternals==`function`&&(this.#o=this.attachInternals()),this.#f()}#u(e){switch(e){case`FORCE_WAIT`:default:return`FORCE_WAIT`;case`NO_WAIT`:return`NO_WAIT`}}set stateChangeWaitingBehavior(e){this.#c=this.#u(e)}get stateChangeWaitingBehavior(){return this.#c}get disableCaptureScroll(){return this.#i}set disableCaptureScroll(e){this.#i=e,this.#y(!1)}get isListEnded(){return this.#n}set isListEnded(e){this.#n=e,this.#y(!1)}get isLoading(){return this.#e}set isLoading(e){this.#e=e,this.#o&&(this.#o.ariaBusy=e?`true`:`false`),this.#y(!1),e?(this.elements?.loading.classList.add(`--show`),this.#o.states?.add(`loading`)):(this.elements?.loading.classList.remove(`--show`),this.#o.states?.delete(`loading`),this.#d(),this.#h())}get isListEmpty(){return this.#a??!1}set isListEmpty(e){this.#a=e,e?this.#o.states?.add(`empty`):this.#o.states?.delete(`empty`),this.#o&&(this.#o.ariaDescription=e?`The list is empty`:``),this.#y(!1),this.#d()}#d(){this.#s?(this.elements?.emptyListWrapper.classList.add(`--show`),this.elements?.contentWrapper.classList.remove(`--show`)):(this.elements?.contentWrapper.classList.add(`--show`),this.elements?.emptyListWrapper.classList.remove(`--show`))}connectedCallback(){this.callOnLoadEvent(),this.#m(),this.callOnInitEvent()}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}#f(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=`<style>:host{--width:var(--jb-infinite-scroll-width,100%);--height:var(--jb-infinite-scroll-height,100%);--loading-size:var(--jb-infinite-scroll-loading-size,2.5rem);--empty-padding:var(--jb-infinite-scroll-empty-padding,1rem);--content-overflow:var(--jb-infinite-scroll-content-overflow,auto)} :host{width:var(--width);height:var(--height);display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;overflow:var(--content-overflow);display:none}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:var(--loading-size);height:var(--loading-size);margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){width:100%;height:100%;max-height:100%;padding:var(--empty-padding);box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;display:flex;overflow-y:hidden}</style>\n\n  <div class="infinite-scroll-component">\n    <div class="content-wrapper" part="content-wrapper">\n        <slot name="content"></slot>\n        <div class="loading-wrapper" part="loading-wrapper" role="status" aria-live="polite" aria-label="${m.get(i,`loadingMoreItems`)}">\n            <slot name="loading">\n                <div class="default-loading">\n                    <jb-loading part="default-loading"></jb-loading>\n                </div>\n            </slot>\n        </div>\n    </div>\n    <div class="empty-list-wrapper" part="empty-list-wrapper" role="status" aria-live="polite">\n        <slot name="empty">\n        </slot>\n    </div>  \n  </div>\n      `,n=document.createElement(`template`);n.innerHTML=t,e.appendChild(n.content.cloneNode(!0)),this.elements={loading:e.querySelector(`.loading-wrapper`),componentWrapper:e.querySelector(`.Infinite-scroll-component`),contentWrapper:e.querySelector(`.content-wrapper`),loadingWrapper:e.querySelector(`.loading-wrapper`),emptyListWrapper:e.querySelector(`.empty-list-wrapper`)},this.isLoading=this.hasAttribute(`is-loading`)?this.getAttribute(`is-loading`)===`true`:this.#e,this.#l=new p({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector(`slot`)})}#p(){this.elements.contentWrapper.addEventListener(`scroll`,this.#_.bind(this),{passive:!0})}#m(){this.#p(),this.#h()}#h(){let{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&this.#g()}scrollTo(e,t){t?this.elements.contentWrapper.scrollTo(e,t):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}#g(){this.#y(!0);let e=new CustomEvent(`scrollEnd`);this.dispatchEvent(e)}#_(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;this.#v(),e+n+this.#t>=t&&this.canCaptureScroll&&this.#g()}#v(){let e=new Event(`scroll`,{bubbles:!1,cancelable:!1,composed:!0});this.dispatchEvent(e)}#y(e){if(e){if(this.#c===`FORCE_WAIT`)this.#r=!0;else if(this.#c===`NO_WAIT`)return}this.#r=!1}get canCaptureScroll(){return!(this.#e||this.#s||this.#n||this.#r||this.#i)}static get observedAttributes(){return[`is-loading`,`is-list-empty`,`is-list-ended`,`disable-capture-scroll`,`state-change-waiting-behavior`,`stick-to-bottom`]}attributeChangedCallback(e,t,n){this.#b(e,n)}#b(e,t){switch(e){case`is-loading`:this.isLoading=t===`true`||t===``;break;case`is-list-empty`:this.isListEmpty=t===`true`||t===``;break;case`is-list-ended`:this.#n=t===`true`||t===``;break;case`disable-capture-scroll`:this.#i=t===`true`||t===``;break;case`state-change-waiting-behavior`:this.#c=this.#u(t);break;case`stick-to-bottom`:this.#l.stickToBottom=t===`true`||t===``}}},customElements.get(`jb-infinite-scroll`)||window.customElements.define(`jb-infinite-scroll`,h)})),_=t((()=>{g()})),v,y,b=t((()=>{v=n(r(),1),_(),u(),y=v.forwardRef(((e,t)=>{let n=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{onInit:r,onLoad:i,onScroll:a,onScrollEnd:o,disableCaptureScroll:s,isListEmpty:c,isListEnded:u,stateChangeWaitingBehavior:d,isLoading:f,stickToBottom:p,children:m,...h}=e;return function(e,t){(0,v.useEffect)((()=>{e.current&&typeof t.isLoading==`boolean`&&(t.isLoading?e.current.setAttribute(`is-loading`,`true`):e.current.setAttribute(`is-loading`,`false`))}),[e.current,t.isLoading]),(0,v.useEffect)((()=>{e.current&&typeof t.isListEmpty==`boolean`&&(t.isListEmpty?e.current.setAttribute(`is-list-empty`,`true`):e.current.setAttribute(`is-list-empty`,`false`))}),[e.current,t.isListEmpty]),(0,v.useEffect)((()=>{e.current&&typeof t.isListEnded==`boolean`&&(t.isListEnded?e.current?.setAttribute(`is-list-ended`,`true`):e.current?.setAttribute(`is-list-ended`,`false`))}),[e.current,t.isListEnded]),(0,v.useEffect)((()=>{e.current&&typeof t.disableCaptureScroll==`boolean`&&(t.disableCaptureScroll?e.current?.setAttribute(`disable-capture-scroll`,`true`):e.current?.setAttribute(`disable-capture-scroll`,`false`))}),[e.current,t.disableCaptureScroll]),(0,v.useEffect)((()=>{e.current&&(t.stickToBottom?e.current?.setAttribute(`stick-to-bottom`,``):e.current?.removeAttribute(`stick-to-bottom`))}),[e.current,t.stickToBottom]),(0,v.useEffect)((()=>{t.stateChangeWaitingBehavior&&e.current&&e.current?.setAttribute(`state-change-waiting-behavior`,t.stateChangeWaitingBehavior)}),[e.current,t.stateChangeWaitingBehavior])}(n,{disableCaptureScroll:s,isListEmpty:c,isListEnded:u,stateChangeWaitingBehavior:d,isLoading:f,stickToBottom:p}),function(e,t){l(e,`load`,t.onLoad,!0),l(e,`init`,t.onInit,!0),l(e,`scroll`,t.onScroll),l(e,`scrollEnd`,t.onScrollEnd,!0)}(n,{onInit:r,onLoad:i,onScroll:a,onScrollEnd:o}),v.createElement(`jb-infinite-scroll`,{ref:n,...h},m)})),y.displayName=`JBInfiniteScroll`})),x=t((()=>{b()}));function S(e,t=0){let n=e.querySelectorAll(`jb-infinite-scroll`)[t];return M(n).toBeTruthy(),M(n.shadowRoot).toBeTruthy(),n}function C(e){let t=e.shadowRoot?.querySelector(`.content-wrapper`);return M(t).toBeTruthy(),t}function w(e){let t=e.shadowRoot?.querySelector(`.loading-wrapper`);return M(t).toBeTruthy(),t}function T(e){let t=e.shadowRoot?.querySelector(`.empty-list-wrapper`);return M(t).toBeTruthy(),t}function E(e){let t=e.querySelector(`[slot="content"]`);return M(t).toBeTruthy(),t}function D(e,t){let n=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(t));return M(n).toBeTruthy(),n}function O(e){let t=e.shadowRoot?.querySelector(`button`);return M(t).toBeTruthy(),t}async function k(e,t){e.scrollTo({top:t}),e.dispatchEvent(new Event(`scroll`)),await N(()=>{M(Math.round(e.scrollTop)).toBeGreaterThanOrEqual(Math.max(0,Math.floor(t)-1))})}async function A(e){await k(e,e.scrollHeight-e.clientHeight)}function j(e,t=2){return e.scrollHeight-e.clientHeight-e.scrollTop<=t}var M,N,P=t((()=>{({expect:M,waitFor:N}=__STORYBOOK_MODULE_TEST__)})),F=e({ActionTemplate:()=>W,Empty:()=>q,Normal:()=>U,ScrollEventTest:()=>J,ScrollManipulation:()=>G,StickToBottom:()=>K,__namedExportsOrder:()=>Y,default:()=>H}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X=t((()=>{I=n(r(),1),x(),f(),P(),L=s(),{expect:R,fn:z,userEvent:B,waitFor:V}=__STORYBOOK_MODULE_TEST__,H={title:`Components/JBInfiniteScroll`,component:y},U={args:{children:(0,L.jsxs)(`div`,{slot:`content`,children:[(0,L.jsx)(`div`,{children:`item1`}),(0,L.jsx)(`div`,{children:`item2`}),(0,L.jsx)(`div`,{children:`item3`})]})}},W={render:e=>{let t=(0,I.useRef)(null),[n,r]=(0,I.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,I.useState)(!1),[o,s]=(0,I.useState)(!1),c=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)};return(0,L.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,L.jsx)(y,{...e,ref:t,onScrollEnd:c,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,L.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,L.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})})},play:async({canvasElement:e})=>{let t=S(e),n=C(t),r=w(t),i=E(e);R(i).not.toHaveTextContent(`18`),await A(n),await V(()=>{R(r).toHaveClass(`--show`),R(t.isLoading).toBe(!0)}),await V(()=>{R(i).toHaveTextContent(`18`),R(r).not.toHaveClass(`--show`),R(t.isLoading).toBe(!1)},{timeout:2e3})}},G={render:e=>{let t=(0,I.useRef)(null),[n,r]=(0,I.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,I.useState)(!1),[o,s]=(0,I.useState)(!1),c=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)},l=()=>{t.current?.scrollTo({behavior:`smooth`,top:400})},u=()=>{t.current?.scrollToEnd()};return(0,L.jsxs)(I.Fragment,{children:[(0,L.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,L.jsx)(y,{...e,ref:t,onScrollEnd:c,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,L.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,L.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,L.jsxs)(`div`,{style:{marginTop:`1rem`,display:`flex`,gap:`0.5rem`},children:[(0,L.jsx)(d,{onClick:u,children:`scroll to end`}),(0,L.jsx)(d,{onClick:l,children:`scroll to 25rem`})]})]})},play:async({canvasElement:e})=>{let t=C(S(e)),n=D(e,`scroll to 25rem`),r=D(e,`scroll to end`);await B.click(O(n)),await V(()=>{R(t.scrollTop).toBeGreaterThan(250)});let i=t.scrollHeight-t.clientHeight;await B.click(O(r)),await V(()=>{R(t.scrollTop).toBeGreaterThanOrEqual(i-2)})}},K={render:e=>{let t=(0,I.useRef)(null),[n,r]=(0,I.useState)([1,2,3,4,5,6,7,8,9]);return(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,L.jsx)(y,{...e,ref:t,children:(0,L.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,L.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,L.jsx)(d,{size:`sm`,onClick:()=>{let e=n.at(-1);r(t=>[...t,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9])},children:`add more content to bottom`})]})},args:{stickToBottom:!0},play:async({canvasElement:e})=>{let t=C(S(e)),n=E(e),r=D(e,`add more content to bottom`);await V(()=>{R(j(t)).toBe(!0)}),await B.click(O(r)),await V(()=>{R(n).toHaveTextContent(`18`),R(j(t)).toBe(!0)})}},q={args:{isListEmpty:!0,children:(0,L.jsx)(`div`,{slot:`empty`,children:`list is empty`})},play:async({canvasElement:e})=>{let t=S(e),n=C(t),r=T(t);await V(()=>{R(t.isListEmpty).toBe(!0),R(n).not.toHaveClass(`--show`),R(r).toHaveClass(`--show`),R(e).toHaveTextContent(`list is empty`)})}},J={render:W.render,args:{...W.args,onScroll:z()},play:async({canvasElement:e,args:t})=>{await k(C(S(e)),100),await V(()=>{R(t.onScroll).toHaveBeenCalled()})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`Normal`,`ActionTemplate`,`ScrollManipulation`,`StickToBottom`,`Empty`,`ScrollEventTest`]}));X();export{W as ActionTemplate,q as Empty,U as Normal,J as ScrollEventTest,G as ScrollManipulation,K as StickToBottom,Y as __namedExportsOrder,H as default,X as n,F as t};