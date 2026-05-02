var M=n=>{throw TypeError(n)};var j=(n,e,o)=>e.has(n)||M("Cannot "+o);var r=(n,e,o)=>(j(n,e,"read from private field"),o?o.call(n):e.get(n)),b=(n,e,o)=>e.has(n)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,o),l=(n,e,o,a)=>(j(n,e,"write to private field"),a?a.call(n,o):e.set(n,o),o);import{R as t,r as d}from"./index-CwcVQgaJ.js";import{N as se}from"./index-BjRxPyWZ.js";import{r as y}from"./index-BVrqzDik.js";import{o as p}from"./JBButton-CzXHkPk6.js";import{f as I}from"./chunk-NAVWDHVN-nYOG0we8.js";import{a as le}from"./JBCheckbox-BKpcuLpg.js";var s,i,c,m,N,ie=(N=class extends HTMLElement{constructor(){super();b(this,s);b(this,i);b(this,c);b(this,m);l(this,s,!1),l(this,c,""),this.config={autoCloseOnBackgroundClick:!1},l(this,m,()=>{this.isOpen&&(this.dispatchCloseEvent("HISTORY_BACK_EVENT"),this.config.autoCloseOnBackgroundClick&&this.close())}),this.initWebComponent()}get id(){const e=this.getAttribute("id")||"";return r(this,c)||e}set id(e){l(this,c,e),this.checkInitialOpenness()}get isOpen(){return r(this,s)}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}disconnectedCallback(){window.removeEventListener("popstate",r(this,m))}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){const e=this.attachShadow({mode:"open",clonable:!0,serializable:!0});l(this,i,this.attachInternals()),r(this,i).ariaModal="true",se();const o=document.createElement("template");o.innerHTML=`<style>.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component.--closed{display:none}@media (max-width:768px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media (max-width:768px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s}}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);grid-template:"header"max-content"content"minmax(0,1fr)"footer"max-content/1fr;width:auto;max-width:calc(100% - 2rem);height:auto;max-height:calc(100dvh - 4rem);display:grid;overflow:hidden}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius) var(--border-radius) 0 0;width:100%;max-width:100%;height:auto;min-height:2rem;max-height:calc(100% - 5rem);overflow-y:auto}}.jb-modal-web-component .modal-content-wrapper slot[name=header]::slotted(*){grid-area:header;justify-content:space-between;align-items:center;gap:.5rem;padding:1rem;font-size:1.5rem;font-weight:700;display:flex}.jb-modal-web-component .modal-content-wrapper slot[name=content]::slotted(*),.jb-modal-web-component .modal-content-wrapper slot:not([name])::slotted(*){grid-area:content;max-height:100%;padding:1rem;overflow:auto}.jb-modal-web-component .modal-content-wrapper slot[name=footer]::slotted(*){grid-area:footer;justify-content:flex-end;gap:.5rem;padding:1rem;display:flex}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white) l c h / .1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

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
  `,e.appendChild(o.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(".jb-modal-web-component"),background:e.querySelector(".modal-background")}}registerEventListener(){this.elements.background.addEventListener("click",this.onBackgroundClick.bind(this)),window.addEventListener("popstate",r(this,m))}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){const e=new CustomEvent("urlOpen",{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return["is-open","id"]}attributeChangedCallback(e,o,a){this.onAttributeChange(e,a)}onAttributeChange(e,o){switch(e){case"is-open":o=="true"?r(this,s)||this.open():r(this,s)&&this.close();break;case"id":this.id=o}}onBackgroundClick(){this.dispatchCloseEvent("BACKGROUND_CLICK"),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){const o=new CustomEvent("close",{detail:{eventType:e}});this.dispatchEvent(o)}close(){l(this,s,!1),r(this,i).ariaHidden="true",this.elements.componentWrapper.classList.remove("--opened"),this.elements.componentWrapper.classList.add("--closed");const e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(l(this,s,!0),r(this,i).ariaHidden="false",this.elements.componentWrapper.classList.remove("--closed"),this.elements.componentWrapper.classList.add("--opened"),this.id){const e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},"",`#${this.id}`)}}},s=new WeakMap,i=new WeakMap,c=new WeakMap,m=new WeakMap,N);customElements.get("jb-modal")||window.customElements.define("jb-modal",ie);let u=t.forwardRef((n,e)=>{var o;let a=d.useRef(null);d.useImperativeHandle(e,()=>a?a.current:void 0,[a]);let{isOpen:h,onClose:te,onInit:oe,onLoad:ne,onUrlOpen:ae,...re}=n;return d.useEffect(()=>{var B,x;h==!0?(B=a.current)==null||B.open():(x=a.current)==null||x.close()},[h,a.current]),y(a,"load",(o={onClose:te,onInit:oe,onLoad:ne,onUrlOpen:ae}).onLoad,!0),y(a,"init",o.onInit,!0),y(a,"close",o.onClose),y(a,"urlOpen",o.onUrlOpen),t.createElement("jb-modal",{ref:a,...re},n.children)});u.displayName="JBModal";const de={title:"Components/JBModal",component:u,decorators:[n=>t.createElement("div",{className:"jb-modal-sample-background"},t.createElement(n,null))]},v={args:{isOpen:!0,children:t.createElement("div",null,"Hello World")}},g={render:()=>t.createElement(u,{isOpen:!0},t.createElement("div",{slot:"content"},"Here we put content of the modal, mostly we put some information here to show to the user"),t.createElement("div",{slot:"header"},t.createElement("div",null,"Title of Header")," ",t.createElement("div",null,"X")),t.createElement("div",{slot:"footer"},t.createElement(p,{color:"light"},"Cancel"),t.createElement(p,null,"Submit")))},ce="Test Long String ".repeat(200),w={args:{isOpen:!0,children:t.createElement("div",{className:"modal-test-content"},ce)}},me=I.helpers.multiple(()=>({name:I.person.fullName()}),{count:500}),f={args:{isOpen:!0,children:t.createElement(d.Fragment,null,t.createElement("div",{slot:"header"},"Header"),t.createElement("div",{slot:"footer",style:{justifyContent:"start"}},t.createElement(le,{label:"I Read and Accept All People on the list"})),t.createElement("div",{slot:"content"},me.map(n=>t.createElement("div",null,n.name))))}},E={render:()=>{const[n,e]=d.useState(!1);return t.createElement("div",null,t.createElement("div",{className:"button-wrapper"},t.createElement(p,{color:"light",onClick:()=>e(!0)},"Open Modal"),t.createElement(u,{isOpen:n,onClose:()=>{e(!1)}},t.createElement("div",{className:"modal-test-content"},"Hello World"))))}},C={args:{isOpen:!0,children:t.createElement("div",{className:"modal-test-content"},"Mobile View")},parameters:{viewport:{defaultViewport:"mobile2"}}},O={render:n=>{const[e,o]=d.useState(!1),a=h=>{console.log("modal close event type:",h.detail.eventType),o(!1)};return t.createElement("div",{className:"button-wrapper"},t.createElement(p,{color:"light",onClick:h=>o(!0)},"Open Modal"),t.createElement(u,{isOpen:e,onClose:a,onUrlOpen:()=>o(!0),id:"MyModal"},t.createElement("div",{className:"modal-test-content",style:{flexDirection:"column",alignItems:"flex-start"}},t.createElement("p",null,"`onClose` event of the modal called for 2 reason:",t.createElement("ul",null,t.createElement("li",null,"when user click on modal background"),t.createElement("li",null,"when user hit back button in android or back button of the browser"))),t.createElement("p",null,"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"),t.createElement("p",null,"to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",t.createElement("a",{rel:"noopener",target:"_blank",href:"./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story"},"isolated mode")," then hit back button"),t.createElement("q",null,"back button scenario only works if your modal has an `id` attribute"),t.createElement(p,{onClick:()=>{o(!1)}},"Close Modal"))))}},k={render:()=>{const[n,e]=d.useState(!1);return t.createElement("div",null,t.createElement("h3",null,"JBModal With a Little customization"),t.createElement("div",{className:"button-wrapper"},t.createElement(p,{color:"light",onClick:()=>e(!0)},"Open Modal"),t.createElement(u,{className:"customized-look-modal",isOpen:n,onClose:()=>{e(!1)}},t.createElement("div",{className:"modal-test-content"},"Hello World"))))}};var J,S,L;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...(L=(S=v.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var W,H,A;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...(A=(H=g.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var z,T,_;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...(_=(T=w.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var U,R,D;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(D=(R=f.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var K,V,Y;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(V=E.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var q,F,P;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...(P=(F=C.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var $,G,X;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(G=O.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Q,Z,ee;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pe=["Normal","WithHeaderAndFooter","WithLargeContent","WithOverflowY","ActionTest","MobileView","CloseDetail","CustomizedUi"],Ee=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:E,CloseDetail:O,CustomizedUi:k,MobileView:C,Normal:v,WithHeaderAndFooter:g,WithLargeContent:w,WithOverflowY:f,__namedExportsOrder:pe,default:de},Symbol.toStringTag,{value:"Module"}));export{E as A,Ee as M,g as W};
