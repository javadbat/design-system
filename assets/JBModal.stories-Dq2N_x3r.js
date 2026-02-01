var y=n=>{throw TypeError(n)};var B=(n,e,t)=>e.has(n)||y("Cannot "+t);var a=(n,e,t)=>(B(n,e,"read from private field"),t?t.call(n):e.get(n)),m=(n,e,t)=>e.has(n)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),p=(n,e,t,r)=>(B(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);import{R as o,r as s}from"./index-DwQS_Y10.js";import{N as G}from"./index-bfIR6bpK.js";import{r as C}from"./index-BJ5IkxrY.js";import{o as d}from"./JBButton-CgFwNxXH.js";var l,i,E,k,M,P=(M=class extends HTMLElement{constructor(){super();m(this,l,!1);m(this,i);m(this,E,"");m(this,k,()=>{this.isOpen&&(this.dispatchCloseEvent("HISTORY_BACK_EVENT"),this.config.autoCloseOnBackgroundClick&&this.close())});this.config={autoCloseOnBackgroundClick:!1},this.initWebComponent()}get id(){const e=this.getAttribute("id")||"";return a(this,E)||e}set id(e){p(this,E,e),this.checkInitialOpenness()}get isOpen(){return a(this,l)}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}disconnectedCallback(){window.removeEventListener("popstate",a(this,k))}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){const e=this.attachShadow({mode:"open"});p(this,i,this.attachInternals()),a(this,i).ariaModal="true",G();const t=document.createElement("template");t.innerHTML=`<style>.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component.--closed{display:none}@media (max-width:768px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media (max-width:768px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s}}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);width:auto;height:auto}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius) var(--border-radius) 0 0;width:100%;height:auto;min-height:32px;max-height:calc(100% - 80px);overflow-y:auto}}.jb-modal-web-component .modal-content-wrapper slot[name=header]::slotted(*){justify-content:space-between;align-items:center;gap:.5rem;padding:1rem;font-size:1.5rem;font-weight:700;display:flex}.jb-modal-web-component .modal-content-wrapper slot[name=content]::slotted(*),.jb-modal-web-component .modal-content-wrapper slot:not([name])::slotted(*){padding:1rem}.jb-modal-web-component .modal-content-wrapper slot[name=footer]::slotted(*){justify-content:flex-end;gap:.5rem;padding:1rem;display:flex}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white) l c h / .1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

  <div class="jb-modal-web-component --closed">
    <div class="modal-background"></div>
    <div class="modal-content-wrapper">
        <div class="modal-content">
            <slot name="header"></slot>
            <slot name="content"><slot></slot></slot>
            <slot name="footer"></slot>
        </div>
    </div>
  </div>
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(".jb-modal-web-component"),background:e.querySelector(".modal-background")}}registerEventListener(){this.elements.background.addEventListener("click",this.onBackgroundClick.bind(this)),window.addEventListener("popstate",a(this,k))}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){const e=new CustomEvent("urlOpen",{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return["is-open","id"]}attributeChangedCallback(e,t,r){this.onAttributeChange(e,r)}onAttributeChange(e,t){switch(e){case"is-open":t=="true"?a(this,l)||this.open():a(this,l)&&this.close();break;case"id":this.id=t}}onBackgroundClick(){this.dispatchCloseEvent("BACKGROUND_CLICK"),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){const t=new CustomEvent("close",{detail:{eventType:e}});this.dispatchEvent(t)}close(){p(this,l,!1),a(this,i).ariaHidden="true",this.elements.componentWrapper.classList.remove("--opened"),this.elements.componentWrapper.classList.add("--closed");const e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(p(this,l,!0),a(this,i).ariaHidden="false",this.elements.componentWrapper.classList.remove("--closed"),this.elements.componentWrapper.classList.add("--opened"),this.id){const e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},"",`#${this.id}`)}}},l=new WeakMap,i=new WeakMap,E=new WeakMap,k=new WeakMap,M);customElements.get("jb-modal")||window.customElements.define("jb-modal",P);let c=o.forwardRef((n,e)=>{let t=s.useRef(null),[r,O]=s.useState(0);return s.useImperativeHandle(e,()=>t?t.current:{},[t]),s.useEffect(()=>{O(r+1)},[t.current]),s.useEffect(()=>{t.current&&(n.isOpen==!0?t.current.open():t.current.close())},[n.isOpen]),s.useEffect(()=>{t.current&&(t.current.id=n.id)},[n.id]),C(t,"load",n.onLoad,!0),C(t,"init",n.onInit,!0),C(t,"close",n.onClose),C(t,"urlOpen",n.onUrlOpen),o.createElement("jb-modal",{ref:t,class:n.className?n.className:""},n.children)});c.displayName="JBModal";const F={title:"Components/JBModal",component:c,decorators:[n=>o.createElement("div",{className:"jb-modal-sample-background"},o.createElement(n,null))]},u={args:{isOpen:!0,children:o.createElement("div",null,"Hello World")}},h={render:()=>o.createElement(c,{isOpen:!0},o.createElement("div",{slot:"content"},"Here we put content of the modal, mostly we put some information here to show to the user"),o.createElement("div",{slot:"header"},o.createElement("div",null,"Title of Header")," ",o.createElement("div",null,"X")),o.createElement("div",{slot:"footer"},o.createElement(d,{color:"light"},"Cancel"),o.createElement(d,null,"Submit")))},X="Test Long String ".repeat(200),b={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},X)}},v={render:()=>{const[n,e]=s.useState(!1);return o.createElement("div",null,o.createElement("div",{className:"button-wrapper"},o.createElement(d,{color:"light",onClick:()=>e(!0)},"Open Modal"),o.createElement(c,{isOpen:n,onClose:()=>{e(!1)}},o.createElement("div",{className:"modal-test-content"},"Hello World"))))}},w={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},"Mobile View")},parameters:{viewport:{defaultViewport:"mobile2"}}},g={render:n=>{const[e,t]=s.useState(!1),r=O=>{console.log("modal close event type:",O.detail.eventType),t(!1)};return o.createElement("div",{className:"button-wrapper"},o.createElement(d,{color:"light",onClick:O=>t(!0)},"Open Modal"),o.createElement(c,{isOpen:e,onClose:r,onUrlOpen:()=>t(!0),id:"MyModal"},o.createElement("div",{className:"modal-test-content",style:{flexDirection:"column",alignItems:"flex-start"}},o.createElement("p",null,"`onClose` event of the modal called for 2 reason:",o.createElement("ul",null,o.createElement("li",null,"when user click on modal background"),o.createElement("li",null,"when user hit back button in android or back button of the browser"))),o.createElement("p",null,"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"),o.createElement("p",null,"to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",o.createElement("a",{rel:"noopener",target:"_blank",href:"./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story"},"isolated mode")," then hit back button"),o.createElement("q",null,"back button scenario only works if your modal has an `id` attribute"),o.createElement(d,{onClick:()=>{t(!1)}},"Close Modal"))))}},f={render:()=>{const[n,e]=s.useState(!1);return o.createElement("div",null,o.createElement("h3",null,"JBModal With a Little customization"),o.createElement("div",{className:"button-wrapper"},o.createElement(d,{color:"light",onClick:()=>e(!0)},"Open Modal"),o.createElement(c,{className:"customized-look-modal",isOpen:n,onClose:()=>{e(!1)}},o.createElement("div",{className:"modal-test-content"},"Hello World"))))}};var j,x,N;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...(N=(x=u.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,I,J;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var L,W,H;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var z,T,A;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <div className='button-wrapper'>
          <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
          <JBModal isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }}>
            <div className='modal-test-content'>Hello World</div>
          </JBModal>
        </div>
      </div>;
  }
}`,...(A=(T=v.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var _,U,R;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...(R=(U=w.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var D,K,V;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: story => {
    const [isOpen, setIsOpen] = useState(false);
    const onModalClose = (e: JBModalEventType<CustomEvent<any>>) => {
      console.log("modal close event type:", e.detail.eventType);
      setIsOpen(false);
    };
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={e => setIsOpen(true)}>Open Modal</JBButton>
        <JBModal isOpen={isOpen} onClose={onModalClose} onUrlOpen={() => setIsOpen(true)} id="MyModal">
          <div className='modal-test-content' style={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
            <p>
              \`onClose\` event of the modal called for 2 reason:
              <ul>
                <li>when user click on modal background</li>
                <li>when user hit back button in android or back button of the browser</li>
              </ul>
            </p>
            <p>to simulate the first one you just have to click on modal background and you can see developer tools console that shows \`BACKGROUND_CLICK\`</p>
            <p>to experience the second scenario with back button since we are in storybook and storybook load stories in a \`iframe\` tag you should open story in <a rel="noopener" target='_blank' href='./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story'>isolated mode</a> then hit back button</p>
            <q>back button scenario only works if your modal has an \`id\` attribute</q>
            <JBButton onClick={() => {
            setIsOpen(false);
          }}>Close Modal</JBButton>
          </div>
        </JBModal>
      </div>;
  }
}`,...(V=(K=g.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var q,Y,$;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <h3>JBModal With a Little customization</h3>
        <div className='button-wrapper'>
          <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
          <JBModal className='customized-look-modal' isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }}>
            <div className='modal-test-content'>Hello World</div>
          </JBModal>
        </div>
      </div>;
  }
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const Q=["Normal","WithHeaderAndFooter","WithLargeContent","ActionTest","MobileView","CloseDetail","CustomizedUi"],ae=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:v,CloseDetail:g,CustomizedUi:f,MobileView:w,Normal:u,WithHeaderAndFooter:h,WithLargeContent:b,__namedExportsOrder:Q,default:F},Symbol.toStringTag,{value:"Module"}));export{v as A,ae as M,h as W};
