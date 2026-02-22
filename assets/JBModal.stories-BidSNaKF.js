var B=n=>{throw TypeError(n)};var x=(n,e,o)=>e.has(n)||B("Cannot "+o);var a=(n,e,o)=>(x(n,e,"read from private field"),o?o.call(n):e.get(n)),m=(n,e,o)=>e.has(n)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,o),p=(n,e,o,s)=>(x(n,e,"write to private field"),s?s.call(n,o):e.set(n,o),o);import{R as t,r}from"./index-DwQS_Y10.js";import{N as Z}from"./index-bfIR6bpK.js";import{r as y}from"./index-BJ5IkxrY.js";import{o as d}from"./JBButton-DitBmYU6.js";import{f as M}from"./chunk-MVUZLZE2-OakZy48_.js";import{i as ee}from"./JBCheckbox-Dr42RPKD.js";var l,i,k,O,j,te=(j=class extends HTMLElement{constructor(){super();m(this,l,!1);m(this,i);m(this,k,"");m(this,O,()=>{this.isOpen&&(this.dispatchCloseEvent("HISTORY_BACK_EVENT"),this.config.autoCloseOnBackgroundClick&&this.close())});this.config={autoCloseOnBackgroundClick:!1},this.initWebComponent()}get id(){const e=this.getAttribute("id")||"";return a(this,k)||e}set id(e){p(this,k,e),this.checkInitialOpenness()}get isOpen(){return a(this,l)}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}disconnectedCallback(){window.removeEventListener("popstate",a(this,O))}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){const e=this.attachShadow({mode:"open"});p(this,i,this.attachInternals()),a(this,i).ariaModal="true",Z();const o=document.createElement("template");o.innerHTML=`<style>.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component.--closed{display:none}@media (max-width:768px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media (max-width:768px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s}}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);grid-template:"header"max-content"content"minmax(0,1fr)"footer"max-content/1fr;width:auto;max-width:calc(100% - 2rem);height:auto;max-height:calc(100dvh - 4rem);display:grid;overflow:hidden}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius) var(--border-radius) 0 0;width:100%;max-width:100%;height:auto;min-height:2rem;max-height:calc(100% - 5rem);overflow-y:auto}}.jb-modal-web-component .modal-content-wrapper slot[name=header]::slotted(*){grid-area:header;justify-content:space-between;align-items:center;gap:.5rem;padding:1rem;font-size:1.5rem;font-weight:700;display:flex}.jb-modal-web-component .modal-content-wrapper slot[name=content]::slotted(*),.jb-modal-web-component .modal-content-wrapper slot:not([name])::slotted(*){grid-area:content;max-height:100%;padding:1rem;overflow:auto}.jb-modal-web-component .modal-content-wrapper slot[name=footer]::slotted(*){grid-area:footer;justify-content:flex-end;gap:.5rem;padding:1rem;display:flex}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white) l c h / .1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

  <div class="jb-modal-web-component --closed">
    <div class="modal-background" part="background"></div>
    <div class="modal-content-wrapper">
        <div class="modal-content" part="content-box">
            <slot name="header"></slot>
            <slot name="content"><slot></slot></slot>
            <slot name="footer"></slot>
        </div>
    </div>
  </div>
  `,e.appendChild(o.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(".jb-modal-web-component"),background:e.querySelector(".modal-background")}}registerEventListener(){this.elements.background.addEventListener("click",this.onBackgroundClick.bind(this)),window.addEventListener("popstate",a(this,O))}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){const e=new CustomEvent("urlOpen",{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return["is-open","id"]}attributeChangedCallback(e,o,s){this.onAttributeChange(e,s)}onAttributeChange(e,o){switch(e){case"is-open":o=="true"?a(this,l)||this.open():a(this,l)&&this.close();break;case"id":this.id=o}}onBackgroundClick(){this.dispatchCloseEvent("BACKGROUND_CLICK"),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){const o=new CustomEvent("close",{detail:{eventType:e}});this.dispatchEvent(o)}close(){p(this,l,!1),a(this,i).ariaHidden="true",this.elements.componentWrapper.classList.remove("--opened"),this.elements.componentWrapper.classList.add("--closed");const e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(p(this,l,!0),a(this,i).ariaHidden="false",this.elements.componentWrapper.classList.remove("--closed"),this.elements.componentWrapper.classList.add("--opened"),this.id){const e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},"",`#${this.id}`)}}},l=new WeakMap,i=new WeakMap,k=new WeakMap,O=new WeakMap,j);customElements.get("jb-modal")||window.customElements.define("jb-modal",te);let c=t.forwardRef((n,e)=>{let o=r.useRef(null),[s,C]=r.useState(0);return r.useImperativeHandle(e,()=>o?o.current:{},[o]),r.useEffect(()=>{C(s+1)},[o.current]),r.useEffect(()=>{o.current&&(n.isOpen==!0?o.current.open():o.current.close())},[n.isOpen]),r.useEffect(()=>{o.current&&(o.current.id=n.id)},[n.id]),y(o,"load",n.onLoad,!0),y(o,"init",n.onInit,!0),y(o,"close",n.onClose),y(o,"urlOpen",n.onUrlOpen),t.createElement("jb-modal",{ref:o,class:n.className?n.className:""},n.children)});c.displayName="JBModal";const oe={title:"Components/JBModal",component:c,decorators:[n=>t.createElement("div",{className:"jb-modal-sample-background"},t.createElement(n,null))]},u={args:{isOpen:!0,children:t.createElement("div",null,"Hello World")}},h={render:()=>t.createElement(c,{isOpen:!0},t.createElement("div",{slot:"content"},"Here we put content of the modal, mostly we put some information here to show to the user"),t.createElement("div",{slot:"header"},t.createElement("div",null,"Title of Header")," ",t.createElement("div",null,"X")),t.createElement("div",{slot:"footer"},t.createElement(d,{color:"light"},"Cancel"),t.createElement(d,null,"Submit")))},ne="Test Long String ".repeat(200),b={args:{isOpen:!0,children:t.createElement("div",{className:"modal-test-content"},ne)}},ae=M.helpers.multiple(()=>({name:M.person.fullName()}),{count:500}),v={args:{isOpen:!0,children:t.createElement(r.Fragment,null,t.createElement("div",{slot:"header"},"Header"),t.createElement("div",{slot:"footer",style:{justifyContent:"start"}},t.createElement(ee,{label:"I Read and Accept All People on the list"})),t.createElement("div",{slot:"content"},ae.map(n=>t.createElement("div",null,n.name))))}},g={render:()=>{const[n,e]=r.useState(!1);return t.createElement("div",null,t.createElement("div",{className:"button-wrapper"},t.createElement(d,{color:"light",onClick:()=>e(!0)},"Open Modal"),t.createElement(c,{isOpen:n,onClose:()=>{e(!1)}},t.createElement("div",{className:"modal-test-content"},"Hello World"))))}},f={args:{isOpen:!0,children:t.createElement("div",{className:"modal-test-content"},"Mobile View")},parameters:{viewport:{defaultViewport:"mobile2"}}},w={render:n=>{const[e,o]=r.useState(!1),s=C=>{console.log("modal close event type:",C.detail.eventType),o(!1)};return t.createElement("div",{className:"button-wrapper"},t.createElement(d,{color:"light",onClick:C=>o(!0)},"Open Modal"),t.createElement(c,{isOpen:e,onClose:s,onUrlOpen:()=>o(!0),id:"MyModal"},t.createElement("div",{className:"modal-test-content",style:{flexDirection:"column",alignItems:"flex-start"}},t.createElement("p",null,"`onClose` event of the modal called for 2 reason:",t.createElement("ul",null,t.createElement("li",null,"when user click on modal background"),t.createElement("li",null,"when user hit back button in android or back button of the browser"))),t.createElement("p",null,"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"),t.createElement("p",null,"to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",t.createElement("a",{rel:"noopener",target:"_blank",href:"./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story"},"isolated mode")," then hit back button"),t.createElement("q",null,"back button scenario only works if your modal has an `id` attribute"),t.createElement(d,{onClick:()=>{o(!1)}},"Close Modal"))))}},E={render:()=>{const[n,e]=r.useState(!1);return t.createElement("div",null,t.createElement("h3",null,"JBModal With a Little customization"),t.createElement("div",{className:"button-wrapper"},t.createElement(d,{color:"light",onClick:()=>e(!0)},"Open Modal"),t.createElement(c,{className:"customized-look-modal",isOpen:n,onClose:()=>{e(!1)}},t.createElement("div",{className:"modal-test-content"},"Hello World"))))}};var N,I,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var J,L,W;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var H,A,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...(z=(A=b.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var T,_,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <Fragment>
      <div slot="header">Header</div>
      <div slot="footer" style={{
        justifyContent: "start"
      }}><JBCheckbox label="I Read and Accept All People on the list"></JBCheckbox></div>
      <div slot='content'>
        {users.map(u => {
          return <div>{u.name}</div>;
        })}
      </div>
    </Fragment>
  }
}`,...(R=(_=v.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var U,D,K;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(D=g.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var V,Y,q;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...(q=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var F,P,$;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(P=w.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var G,X,Q;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const re=["Normal","WithHeaderAndFooter","WithLargeContent","WithOverflowY","ActionTest","MobileView","CloseDetail","CustomizedUi"],ue=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:g,CloseDetail:w,CustomizedUi:E,MobileView:f,Normal:u,WithHeaderAndFooter:h,WithLargeContent:b,WithOverflowY:v,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{g as A,ue as M,h as W};
