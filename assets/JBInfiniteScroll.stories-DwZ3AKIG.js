import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,a as i,n as a,r as o,t as s}from"./iframe-1mzZH2JI.js";import{t as c}from"./jb-loading-BQZOd6zQ.js";import{f as l,t as u}from"./jb-core-mHSQ7_YN.js";import{r as d,t as f}from"./react-Dx3Wbp90.js";import{r as p,t as m}from"./react-CW4er7_1.js";var h,g,_,v,y=t((()=>{o(),c(),u(),h=class{#e;get stickToBottom(){return this.#e}set stickToBottom(e){this.#e=e,e?(this.callbacks.scrollToEnd(),this.init()):this.destruct()}constructor(e,t){this.#e=!1,this.isUserScrolledTop=!1,this.observers=[],this.#r=()=>{this.isUserScrolledTop=this.calcIsUserScrolledTop()},this.callbacks=e,this.elements=t}init(){let e=()=>{this.elements.contentSlot.assignedNodes({flatten:!0}).forEach((e=>{e.nodeType==Node.ELEMENT_NODE&&this.#t(e)}))};this.elements.contentWrapper.addEventListener(`scroll`,this.#r,{passive:!0}),e(),this.elements.contentSlot.addEventListener(`slotchange`,(()=>{this.#n(),e()}))}#t(e){let t=new MutationObserver(this.#i.bind(this));t.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!1}),this.observers.push(t)}destruct(){this.#n(),this.elements.contentWrapper.removeEventListener(`scroll`,this.#r)}#n(){this.observers.forEach((e=>e.disconnect()))}#r;#i(e,t){e.find((e=>e.addedNodes!==null))&&this.stickToBottom&&!this.isUserScrolledTop&&this.callbacks.scrollToEnd()}calcIsUserScrolledTop(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;return t-(e+n)>100}},g=new a({fa:{loadingMoreItems:`در حال بارگذاری موارد بیشتر`},en:{loadingMoreItems:`Loading more items`}}),_=function(e){return e.forceWait=`FORCE_WAIT`,e.noWait=`NO_WAIT`,e}({}),v=class extends HTMLElement{#e=!1;#t=0;#n=!1;#r=!1;#i=!1;#a=null;#o;get#s(){return this.#a===null?null:this.#a}#c=`FORCE_WAIT`;#l;constructor(){super(),typeof this.attachInternals==`function`&&(this.#o=this.attachInternals()),this.#f()}#u(e){switch(e){case`FORCE_WAIT`:default:return`FORCE_WAIT`;case`NO_WAIT`:return`NO_WAIT`}}set stateChangeWaitingBehavior(e){this.#c=this.#u(e)}get stateChangeWaitingBehavior(){return this.#c}get disableCaptureScroll(){return this.#i}set disableCaptureScroll(e){this.#i=e,this.#y(!1)}get isListEnded(){return this.#n}set isListEnded(e){this.#n=e,this.#y(!1)}get isLoading(){return this.#e}set isLoading(e){this.#e=e,this.#o&&(this.#o.ariaBusy=e?`true`:`false`),this.#y(!1),e?(this.elements?.loading.classList.add(`--show`),this.#o.states?.add(`loading`)):(this.elements?.loading.classList.remove(`--show`),this.#o.states?.delete(`loading`),this.#d(),this.#h())}get isListEmpty(){return this.#a??!1}set isListEmpty(e){this.#a=e,e?this.#o.states?.add(`empty`):this.#o.states?.delete(`empty`),this.#o&&(this.#o.ariaDescription=e?`The list is empty`:``),this.#y(!1),this.#d()}#d(){this.#s?(this.elements?.emptyListWrapper.classList.add(`--show`),this.elements?.contentWrapper.classList.remove(`--show`)):(this.elements?.contentWrapper.classList.add(`--show`),this.elements?.emptyListWrapper.classList.remove(`--show`))}connectedCallback(){this.callOnLoadEvent(),this.#m(),this.callOnInitEvent()}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}#f(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=`<style>:host{--width:var(--jb-infinite-scroll-width,100%);--height:var(--jb-infinite-scroll-height,100%);--loading-size:var(--jb-infinite-scroll-loading-size,2.5rem);--empty-padding:var(--jb-infinite-scroll-empty-padding,1rem);--content-overflow:var(--jb-infinite-scroll-content-overflow,auto)} :host{width:var(--width);height:var(--height);display:block}.infinite-scroll-component{height:100%}.infinite-scroll-component .content-wrapper{width:100%;height:100%;overflow:var(--content-overflow);display:none}.infinite-scroll-component .content-wrapper.--show{display:block}.infinite-scroll-component .content-wrapper ::slotted([slot=content]){height:auto}.infinite-scroll-component .loading-wrapper{display:none}.infinite-scroll-component .loading-wrapper .default-loading{width:var(--loading-size);height:var(--loading-size);margin:0 auto}.infinite-scroll-component .loading-wrapper.--show{display:block}.infinite-scroll-component .empty-list-wrapper{width:100%;height:100%;display:none}.infinite-scroll-component .empty-list-wrapper.--show{justify-content:center;align-items:center;display:flex}.infinite-scroll-component .empty-list-wrapper ::slotted([slot=empty]){width:100%;height:100%;max-height:100%;padding:var(--empty-padding);box-sizing:border-box;background-color:#0000;justify-content:center;align-items:center;display:flex;overflow-y:hidden}</style>\n\n  <div class="infinite-scroll-component">\n    <div class="content-wrapper" part="content-wrapper">\n        <slot name="content"></slot>\n        <div class="loading-wrapper" part="loading-wrapper" role="status" aria-live="polite" aria-label="${g.get(i,`loadingMoreItems`)}">\n            <slot name="loading">\n                <div class="default-loading">\n                    <jb-loading part="default-loading"></jb-loading>\n                </div>\n            </slot>\n        </div>\n    </div>\n    <div class="empty-list-wrapper" part="empty-list-wrapper" role="status" aria-live="polite">\n        <slot name="empty">\n        </slot>\n    </div>  \n  </div>\n      `,n=document.createElement(`template`);n.innerHTML=t,e.appendChild(n.content.cloneNode(!0)),this.elements={loading:e.querySelector(`.loading-wrapper`),componentWrapper:e.querySelector(`.Infinite-scroll-component`),contentWrapper:e.querySelector(`.content-wrapper`),loadingWrapper:e.querySelector(`.loading-wrapper`),emptyListWrapper:e.querySelector(`.empty-list-wrapper`)},this.isLoading=l(this.getAttribute(`is-loading`),this.#e),this.#l=new h({scrollToEnd:this.scrollToEnd.bind(this)},{contentWrapper:this.elements.contentWrapper,contentSlot:this.elements.contentWrapper.querySelector(`slot`)})}#p(){this.elements.contentWrapper.addEventListener(`scroll`,this.#_.bind(this),{passive:!0})}#m(){this.#p(),this.#h()}#h(){let{scrollHeight:e,clientHeight:t}=this.elements.contentWrapper;e<=t&&this.canCaptureScroll&&this.#g()}scrollTo(e,t){t?this.elements.contentWrapper.scrollTo(e,t):this.elements.contentWrapper.scrollTo(e)}scrollToEnd(e){this.scrollTo({...e,top:this.elements.contentWrapper.scrollHeight})}#g(){this.#y(!0);let e=new CustomEvent(`scrollEnd`);this.dispatchEvent(e)}#_(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.elements.contentWrapper;this.#v(),e+n+this.#t>=t&&this.canCaptureScroll&&this.#g()}#v(){let e=new Event(`scroll`,{bubbles:!1,cancelable:!1,composed:!0});this.dispatchEvent(e)}#y(e){if(e){if(this.#c===`FORCE_WAIT`)this.#r=!0;else if(this.#c===`NO_WAIT`)return}this.#r=!1}get canCaptureScroll(){return!(this.#e||this.#s||this.#n||this.#r||this.#i)}static get observedAttributes(){return[`is-loading`,`is-list-empty`,`is-list-ended`,`disable-capture-scroll`,`state-change-waiting-behavior`,`stick-to-bottom`]}attributeChangedCallback(e,t,n){this.#b(e,n)}#b(e,t){switch(e){case`is-loading`:this.isLoading=l(t);break;case`is-list-empty`:this.isListEmpty=l(t);break;case`is-list-ended`:this.#n=l(t);break;case`disable-capture-scroll`:this.#i=l(t);break;case`state-change-waiting-behavior`:this.#c=this.#u(t);break;case`stick-to-bottom`:this.#l.stickToBottom=l(t)}}},customElements.get(`jb-infinite-scroll`)||window.customElements.define(`jb-infinite-scroll`,v)})),b=t((()=>{y()})),x,S,C=t((()=>{x=n(r(),1),b(),f(),S=x.forwardRef(((e,t)=>{let n=(0,x.useRef)(null);(0,x.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{onInit:r,onLoad:i,onScroll:a,onScrollEnd:o,disableCaptureScroll:s,isListEmpty:c,isListEnded:l,stateChangeWaitingBehavior:u,isLoading:f,stickToBottom:p,children:m,...h}=e;return function(e,t){(0,x.useEffect)((()=>{e.current&&typeof t.isLoading==`boolean`&&(t.isLoading?e.current.setAttribute(`is-loading`,`true`):e.current.setAttribute(`is-loading`,`false`))}),[e.current,t.isLoading]),(0,x.useEffect)((()=>{e.current&&typeof t.isListEmpty==`boolean`&&(t.isListEmpty?e.current.setAttribute(`is-list-empty`,`true`):e.current.setAttribute(`is-list-empty`,`false`))}),[e.current,t.isListEmpty]),(0,x.useEffect)((()=>{e.current&&typeof t.isListEnded==`boolean`&&(t.isListEnded?e.current?.setAttribute(`is-list-ended`,`true`):e.current?.setAttribute(`is-list-ended`,`false`))}),[e.current,t.isListEnded]),(0,x.useEffect)((()=>{e.current&&typeof t.disableCaptureScroll==`boolean`&&(t.disableCaptureScroll?e.current?.setAttribute(`disable-capture-scroll`,`true`):e.current?.setAttribute(`disable-capture-scroll`,`false`))}),[e.current,t.disableCaptureScroll]),(0,x.useEffect)((()=>{e.current&&(t.stickToBottom?e.current?.setAttribute(`stick-to-bottom`,``):e.current?.removeAttribute(`stick-to-bottom`))}),[e.current,t.stickToBottom]),(0,x.useEffect)((()=>{t.stateChangeWaitingBehavior&&e.current&&e.current?.setAttribute(`state-change-waiting-behavior`,t.stateChangeWaitingBehavior)}),[e.current,t.stateChangeWaitingBehavior])}(n,{disableCaptureScroll:s,isListEmpty:c,isListEnded:l,stateChangeWaitingBehavior:u,isLoading:f,stickToBottom:p}),function(e,t){d(e,`load`,t.onLoad,!0),d(e,`init`,t.onInit,!0),d(e,`scroll`,t.onScroll),d(e,`scrollEnd`,t.onScrollEnd,!0)}(n,{onInit:r,onLoad:i,onScroll:a,onScrollEnd:o}),x.createElement(`jb-infinite-scroll`,{ref:n,...h},m)})),S.displayName=`JBInfiniteScroll`})),w=t((()=>{C()}));function T(e,t=0){let n=e.querySelectorAll(`jb-infinite-scroll`)[t];return P(n).toBeTruthy(),P(n.shadowRoot).toBeTruthy(),n}function E(e){let t=e.shadowRoot?.querySelector(`.content-wrapper`);return P(t).toBeTruthy(),t}function D(e){let t=e.shadowRoot?.querySelector(`.loading-wrapper`);return P(t).toBeTruthy(),t}function O(e){let t=e.shadowRoot?.querySelector(`.empty-list-wrapper`);return P(t).toBeTruthy(),t}function k(e){let t=e.querySelector(`[slot="content"]`);return P(t).toBeTruthy(),t}function A(e,t){let n=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(t));return P(n).toBeTruthy(),n}function j(e){let t=e.shadowRoot?.querySelector(`button`);return P(t).toBeTruthy(),t}async function M(e,t){e.scrollTo({top:t}),e.dispatchEvent(new Event(`scroll`)),await F(()=>{P(Math.round(e.scrollTop)).toBeGreaterThanOrEqual(Math.max(0,Math.floor(t)-1))})}async function ee(e){await M(e,e.scrollHeight-e.clientHeight)}function N(e,t=2){return e.scrollHeight-e.clientHeight-e.scrollTop<=t}var P,F,I=t((()=>{({expect:P,waitFor:F}=__STORYBOOK_MODULE_TEST__)})),L=e({ActionTemplate:()=>K,Empty:()=>X,Normal:()=>G,ScrollEventTest:()=>Z,ScrollManipulation:()=>J,StateGuards:()=>q,StickToBottom:()=>Y,__namedExportsOrder:()=>Q,default:()=>W}),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{R=n(r(),1),w(),m(),I(),z=s(),{expect:B,fn:V,userEvent:H,waitFor:U}=__STORYBOOK_MODULE_TEST__,W={title:`Components/JBInfiniteScroll`,component:S},G={args:{children:(0,z.jsxs)(`div`,{slot:`content`,children:[(0,z.jsx)(`div`,{children:`item1`}),(0,z.jsx)(`div`,{children:`item2`}),(0,z.jsx)(`div`,{children:`item3`})]})}},K={render:e=>{let t=(0,R.useRef)(null),[n,r]=(0,R.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,R.useState)(!1),[o,s]=(0,R.useState)(!1),c=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)};return(0,z.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,z.jsx)(S,{...e,ref:t,onScrollEnd:c,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,z.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,z.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})})},play:async({canvasElement:e})=>{let t=T(e),n=E(t),r=D(t),i=k(e);B(i).not.toHaveTextContent(`18`),await ee(n),await U(()=>{B(r).toHaveClass(`--show`),B(t.isLoading).toBe(!0)}),await U(()=>{B(i).toHaveTextContent(`18`),B(r).not.toHaveClass(`--show`),B(t.isLoading).toBe(!1)},{timeout:2e3})}},q={render:()=>(0,z.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,height:`20rem`},children:[(0,z.jsx)(S,{"data-testid":`loading-guard`,isLoading:!0,children:(0,z.jsx)(`div`,{slot:`content`,children:`Loading content`})}),(0,z.jsx)(S,{"data-testid":`empty-guard`,isListEmpty:!0,children:(0,z.jsx)(`div`,{slot:`empty`,children:`No items found`})}),(0,z.jsx)(S,{"data-testid":`ended-guard`,isListEnded:!0,children:(0,z.jsx)(`div`,{slot:`content`,children:`The end`})}),(0,z.jsx)(S,{"data-testid":`disabled-guard`,disableCaptureScroll:!0,children:(0,z.jsx)(`div`,{slot:`content`,children:`Capture disabled`})}),(0,z.jsx)(S,{"data-testid":`no-wait-guard`,stateChangeWaitingBehavior:_.noWait,children:(0,z.jsx)(`div`,{slot:`content`,children:`No-wait mode`})})]}),play:async({canvasElement:e})=>{let t=t=>e.querySelector(`[data-testid="${t}"]`);await U(()=>{B(t(`loading-guard`)?.isLoading).toBe(!0),B(t(`loading-guard`)?.canCaptureScroll).toBe(!1),B(t(`empty-guard`)?.isListEmpty).toBe(!0),B(t(`empty-guard`)?.canCaptureScroll).toBe(!1),B(t(`ended-guard`)?.isListEnded).toBe(!0),B(t(`ended-guard`)?.canCaptureScroll).toBe(!1),B(t(`disabled-guard`)?.disableCaptureScroll).toBe(!0),B(t(`disabled-guard`)?.canCaptureScroll).toBe(!1),B(t(`no-wait-guard`)?.stateChangeWaitingBehavior).toBe(_.noWait),B(t(`no-wait-guard`)?.canCaptureScroll).toBe(!0)})}},J={render:e=>{let t=(0,R.useRef)(null),[n,r]=(0,R.useState)([1,2,3,4,5,6,7,8,9]),[i,a]=(0,R.useState)(!1),[o,s]=(0,R.useState)(!1),c=()=>{let e=n.at(-1);e>100&&s(!0),a(!0),setTimeout(()=>{r([...n,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9]),a(!1)},1e3)},l=()=>{t.current?.scrollTo({behavior:`smooth`,top:400})},u=()=>{t.current?.scrollToEnd()};return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,z.jsx)(S,{...e,ref:t,onScrollEnd:c,isLoading:i,isListEnded:o,disableCaptureScroll:i,children:(0,z.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,z.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,z.jsxs)(`div`,{style:{marginTop:`1rem`,display:`flex`,gap:`0.5rem`},children:[(0,z.jsx)(p,{onClick:u,children:`scroll to end`}),(0,z.jsx)(p,{onClick:l,children:`scroll to 25rem`})]})]})},play:async({canvasElement:e})=>{let t=E(T(e)),n=A(e,`scroll to 25rem`),r=A(e,`scroll to end`);await H.click(j(n)),await U(()=>{B(t.scrollTop).toBeGreaterThan(250)});let i=t.scrollHeight-t.clientHeight;await H.click(j(r)),await U(()=>{B(t.scrollTop).toBeGreaterThanOrEqual(i-2)})}},Y={render:e=>{let t=(0,R.useRef)(null),[n,r]=(0,R.useState)([1,2,3,4,5,6,7,8,9]);return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,z.jsx)(S,{...e,ref:t,children:(0,z.jsx)(`div`,{slot:`content`,children:n.map(e=>(0,z.jsx)(`div`,{style:{border:`solid 1px #black`,fontSize:`3rem`,textAlign:`center`,padding:`2rem`},children:e},e))})})}),(0,z.jsx)(p,{size:`sm`,onClick:()=>{let e=n.at(-1);r(t=>[...t,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9])},children:`add more content to bottom`})]})},args:{stickToBottom:!0},play:async({canvasElement:e})=>{let t=E(T(e)),n=k(e),r=A(e,`add more content to bottom`);await U(()=>{B(N(t)).toBe(!0)}),await H.click(j(r)),await U(()=>{B(n).toHaveTextContent(`18`),B(N(t)).toBe(!0)})}},X={args:{isListEmpty:!0,children:(0,z.jsx)(`div`,{slot:`empty`,children:`list is empty`})},play:async({canvasElement:e})=>{let t=T(e),n=E(t),r=O(t);await U(()=>{B(t.isListEmpty).toBe(!0),B(n).not.toHaveClass(`--show`),B(r).toHaveClass(`--show`),B(e).toHaveTextContent(`list is empty`)})}},Z={render:K.render,args:{...K.args,onScroll:V()},play:async({canvasElement:e,args:t})=>{await M(E(T(e)),100),await U(()=>{B(t.onScroll).toHaveBeenCalled()})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div slot="content">
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </div>
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "1rem",
    height: "20rem"
  }}>
      <JBInfiniteScroll data-testid="loading-guard" isLoading>
        <div slot="content">Loading content</div>
      </JBInfiniteScroll>
      <JBInfiniteScroll data-testid="empty-guard" isListEmpty>
        <div slot="empty">No items found</div>
      </JBInfiniteScroll>
      <JBInfiniteScroll data-testid="ended-guard" isListEnded>
        <div slot="content">The end</div>
      </JBInfiniteScroll>
      <JBInfiniteScroll data-testid="disabled-guard" disableCaptureScroll>
        <div slot="content">Capture disabled</div>
      </JBInfiniteScroll>
      <JBInfiniteScroll data-testid="no-wait-guard" stateChangeWaitingBehavior={StateChangeWaitingBehavior.noWait}>
        <div slot="content">No-wait mode</div>
      </JBInfiniteScroll>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const getGuard = (name: string) => canvasElement.querySelector<JBInfiniteScrollWebComponent>(\`[data-testid="\${name}"]\`);
    await waitFor(() => {
      expect(getGuard("loading-guard")?.isLoading).toBe(true);
      expect(getGuard("loading-guard")?.canCaptureScroll).toBe(false);
      expect(getGuard("empty-guard")?.isListEmpty).toBe(true);
      expect(getGuard("empty-guard")?.canCaptureScroll).toBe(false);
      expect(getGuard("ended-guard")?.isListEnded).toBe(true);
      expect(getGuard("ended-guard")?.canCaptureScroll).toBe(false);
      expect(getGuard("disabled-guard")?.disableCaptureScroll).toBe(true);
      expect(getGuard("disabled-guard")?.canCaptureScroll).toBe(false);
      expect(getGuard("no-wait-guard")?.stateChangeWaitingBehavior).toBe(StateChangeWaitingBehavior.noWait);
      expect(getGuard("no-wait-guard")?.canCaptureScroll).toBe(true);
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Normal`,`ActionTemplate`,`StateGuards`,`ScrollManipulation`,`StickToBottom`,`Empty`,`ScrollEventTest`]}));$();export{K as ActionTemplate,X as Empty,G as Normal,Z as ScrollEventTest,J as ScrollManipulation,q as StateGuards,Y as StickToBottom,Q as __namedExportsOrder,W as default,$ as n,L as t};