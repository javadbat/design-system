var le=Object.defineProperty;var j=o=>{throw TypeError(o)};var ie=(o,e,n)=>e in o?le(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var B=(o,e,n)=>ie(o,typeof e!="symbol"?e+"":e,n),I=(o,e,n)=>e.has(o)||j("Cannot "+n);var r=(o,e,n)=>(I(o,e,"read from private field"),n?n.call(o):e.get(o)),p=(o,e,n)=>e.has(o)?j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,n),u=(o,e,n,a)=>(I(o,e,"write to private field"),a?a.call(o,n):e.set(o,n),n);import{R as t,r as i}from"./index-D4lIrffr.js";import{N as de}from"./index-CansPAZh.js";import{r as y}from"./index-BijJAI47.js";import{o as d}from"./JBButton-CbaRHm9y.js";import{f as N}from"./chunk-MVUZLZE2-OakZy48_.js";import{a as ce}from"./JBCheckbox--jxmdS6A.js";var s,l,O,k,J,me=(J=class extends HTMLElement{constructor(){super();p(this,s,!1);p(this,l);p(this,O,"");B(this,"elements");B(this,"config",{autoCloseOnBackgroundClick:!1});p(this,k,()=>{this.isOpen&&(this.dispatchCloseEvent("HISTORY_BACK_EVENT"),this.config.autoCloseOnBackgroundClick&&this.close())});this.initWebComponent()}get id(){const e=this.getAttribute("id")||"";return r(this,O)||e}set id(e){u(this,O,e),this.checkInitialOpenness()}get isOpen(){return r(this,s)}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}disconnectedCallback(){window.removeEventListener("popstate",r(this,k))}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){const e=this.attachShadow({mode:"open",clonable:!0,serializable:!0});u(this,l,this.attachInternals()),r(this,l).ariaModal="true",de();const n=document.createElement("template");n.innerHTML=`<style>.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component.--closed{display:none}@media (max-width:768px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media (max-width:768px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s}}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);grid-template:"header"max-content"content"minmax(0,1fr)"footer"max-content/1fr;width:auto;max-width:calc(100% - 2rem);height:auto;max-height:calc(100dvh - 4rem);display:grid;overflow:hidden}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius)var(--border-radius)0 0;width:100%;max-width:100%;height:auto;min-height:2rem;max-height:calc(100% - 5rem);overflow-y:auto}}.jb-modal-web-component .modal-content-wrapper slot[name=header]::slotted(*){grid-area:header;justify-content:space-between;align-items:center;gap:.5rem;padding:1rem;font-size:1.5rem;font-weight:700;display:flex}.jb-modal-web-component .modal-content-wrapper slot[name=content]::slotted(*),.jb-modal-web-component .modal-content-wrapper slot:not([name])::slotted(*){grid-area:content;max-height:100%;padding:1rem;overflow:auto}.jb-modal-web-component .modal-content-wrapper slot[name=footer]::slotted(*){grid-area:footer;justify-content:flex-end;gap:.5rem;padding:1rem;display:flex}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white)l c h/.1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

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
  `,e.appendChild(n.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(".jb-modal-web-component"),background:e.querySelector(".modal-background")}}registerEventListener(){this.elements.background.addEventListener("click",this.onBackgroundClick.bind(this)),window.addEventListener("popstate",r(this,k))}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){const e=new CustomEvent("urlOpen",{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return["is-open","id"]}attributeChangedCallback(e,n,a){this.onAttributeChange(e,a)}onAttributeChange(e,n){switch(e){case"is-open":n=="true"?r(this,s)||this.open():r(this,s)&&this.close();break;case"id":this.id=n}}onBackgroundClick(){this.dispatchCloseEvent("BACKGROUND_CLICK"),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){const n=new CustomEvent("close",{detail:{eventType:e}});this.dispatchEvent(n)}close(){u(this,s,!1),r(this,l).ariaHidden="true",this.elements.componentWrapper.classList.remove("--opened"),this.elements.componentWrapper.classList.add("--closed");const e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(u(this,s,!0),r(this,l).ariaHidden="false",this.elements.componentWrapper.classList.remove("--closed"),this.elements.componentWrapper.classList.add("--opened"),this.id){const e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},"",`#${this.id}`)}}},s=new WeakMap,l=new WeakMap,O=new WeakMap,k=new WeakMap,J);!customElements.get("jb-modal")&&window.customElements.define("jb-modal",me);let c=t.forwardRef((o,e)=>{var n;let a=i.useRef(null);i.useImperativeHandle(e,()=>a?a.current:void 0,[a]);let{isOpen:m,onClose:oe,onInit:ne,onLoad:ae,onUrlOpen:re,...se}=o;return i.useEffect(()=>{var x,M;m==!0?(x=a.current)==null||x.open():(M=a.current)==null||M.close()},[m,a.current]),y(a,"load",(n={onClose:oe,onInit:ne,onLoad:ae,onUrlOpen:re}).onLoad,!0),y(a,"init",n.onInit,!0),y(a,"close",n.onClose),y(a,"urlOpen",n.onUrlOpen),t.createElement("jb-modal",{ref:a,...se},o.children)});c.displayName="JBModal";const pe={title:"Components/JBModal",component:c,decorators:[o=>t.createElement("div",{className:"jb-modal-sample-background"},t.createElement(o,null))]},h={args:{isOpen:!0,children:t.createElement("div",null,"Hello World")}},b={render:()=>t.createElement(c,{isOpen:!0},t.createElement("div",{slot:"content"},"Here we put content of the modal, mostly we put some information here to show to the user"),t.createElement("div",{slot:"header"},t.createElement("div",null,"Title of Header")," ",t.createElement("div",null,"X")),t.createElement("div",{slot:"footer"},t.createElement(d,{color:"light"},"Cancel"),t.createElement(d,null,"Submit")))},ue="Test Long String ".repeat(200),v={args:{isOpen:!0,children:t.createElement("div",{className:"modal-test-content"},ue)}},he=N.helpers.multiple(()=>({name:N.person.fullName()}),{count:500}),g={args:{isOpen:!0,children:t.createElement(i.Fragment,null,t.createElement("div",{slot:"header"},"Header"),t.createElement("div",{slot:"footer",style:{justifyContent:"start"}},t.createElement(ce,{label:"I Read and Accept All People on the list"})),t.createElement("div",{slot:"content"},he.map(o=>t.createElement("div",null,o.name))))}},w={render:()=>{const[o,e]=i.useState(!1);return t.createElement("div",null,t.createElement("div",{className:"button-wrapper"},t.createElement(d,{color:"light",onClick:()=>e(!0)},"Open Modal"),t.createElement(c,{isOpen:o,onClose:()=>{e(!1)}},t.createElement("div",{className:"modal-test-content"},"Hello World"))))}},f={args:{isOpen:!0,children:t.createElement("div",{className:"modal-test-content"},"Mobile View")},parameters:{viewport:{defaultViewport:"mobile2"}}},E={render:o=>{const[e,n]=i.useState(!1),a=m=>{console.log("modal close event type:",m.detail.eventType),n(!1)};return t.createElement("div",{className:"button-wrapper"},t.createElement(d,{color:"light",onClick:m=>n(!0)},"Open Modal"),t.createElement(c,{isOpen:e,onClose:a,onUrlOpen:()=>n(!0),id:"MyModal"},t.createElement("div",{className:"modal-test-content",style:{flexDirection:"column",alignItems:"flex-start"}},t.createElement("p",null,"`onClose` event of the modal called for 2 reason:",t.createElement("ul",null,t.createElement("li",null,"when user click on modal background"),t.createElement("li",null,"when user hit back button in android or back button of the browser"))),t.createElement("p",null,"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"),t.createElement("p",null,"to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",t.createElement("a",{rel:"noopener",target:"_blank",href:"./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story"},"isolated mode")," then hit back button"),t.createElement("q",null,"back button scenario only works if your modal has an `id` attribute"),t.createElement(d,{onClick:()=>{n(!1)}},"Close Modal"))))}},C={render:()=>{const[o,e]=i.useState(!1);return t.createElement("div",null,t.createElement("h3",null,"JBModal With a Little customization"),t.createElement("div",{className:"button-wrapper"},t.createElement(d,{color:"light",onClick:()=>e(!0)},"Open Modal"),t.createElement(c,{className:"customized-look-modal",isOpen:o,onClose:()=>{e(!1)}},t.createElement("div",{className:"modal-test-content"},"Hello World"))))}};var S,L,W;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var H,A,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...(z=(A=b.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var T,_,U;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...(U=(_=v.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var R,D,K;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(D=g.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var V,Y,q;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var F,P,$;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...($=(P=f.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var G,X,Q;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const be=["Normal","WithHeaderAndFooter","WithLargeContent","WithOverflowY","ActionTest","MobileView","CloseDetail","CustomizedUi"],ke=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:w,CloseDetail:E,CustomizedUi:C,MobileView:f,Normal:h,WithHeaderAndFooter:b,WithLargeContent:v,WithOverflowY:g,__namedExportsOrder:be,default:pe},Symbol.toStringTag,{value:"Module"}));export{w as A,ke as M,b as W};
