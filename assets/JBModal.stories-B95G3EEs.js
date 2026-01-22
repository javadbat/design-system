var y=n=>{throw TypeError(n)};var O=(n,e,t)=>e.has(n)||y("Cannot "+t);var r=(n,e,t)=>(O(n,e,"read from private field"),t?t.call(n):e.get(n)),c=(n,e,t)=>e.has(n)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),d=(n,e,t,s)=>(O(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t),B=(n,e,t)=>(O(n,e,"access private method"),t);import{R as o,r as a}from"./index-CC6F48bw.js";import{j as Y}from"./index-CXPivJim.js";import{r as h}from"./index-Drw24fzo.js";import{o as E}from"./JBButton-BsSO-APp.js";import"./jb-loading-KLGT6U3e.js";var l,i,m,C,q,M,$=(M=class extends HTMLElement{constructor(){super();c(this,C);c(this,l,!1);c(this,i);c(this,m,"");this.config={autoCloseOnBackgroundClick:!1},this.initWebComponent()}get id(){const e=this.getAttribute("id")||"";return r(this,m)||e}set id(e){d(this,m,e),this.checkInitialOpenness()}get isOpen(){return r(this,l)}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}callOnLoadEvent(){const e=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){const e=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){const e=this.attachShadow({mode:"open"});d(this,i,this.attachInternals()),r(this,i).ariaModal="true",Y();const t=document.createElement("template");t.innerHTML=`<style>.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component.--closed{display:none}@media (max-width:768px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media (max-width:768px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s}}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);width:auto;height:auto}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius) var(--border-radius) 0 0;width:100%;height:auto;min-height:32px;max-height:calc(100% - 80px);overflow-y:auto}}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white) l c h / .1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

  <div class="jb-modal-web-component --closed">
    <div class="modal-background"></div>
    <div class="modal-content-wrapper">
        <div class="modal-content">
            <slot name="content"></slot>
        </div>
    </div>
  </div>
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(".jb-modal-web-component"),background:e.querySelector(".modal-background")}}registerEventListener(){this.elements.background.addEventListener("click",this.onBackgroundClick.bind(this)),window.addEventListener("popstate",B(this,C,q).bind(this))}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){const e=new CustomEvent("urlOpen",{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return["is-open","id"]}attributeChangedCallback(e,t,s){this.onAttributeChange(e,s)}onAttributeChange(e,t){switch(e){case"is-open":t=="true"?r(this,l)||this.open():r(this,l)&&this.close();break;case"id":this.id=t}}onBackgroundClick(){this.dispatchCloseEvent("BACKGROUND_CLICK"),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){const t=new CustomEvent("close",{detail:{eventType:e}});this.dispatchEvent(t)}close(){d(this,l,!1),r(this,i).ariaHidden="true",this.elements.componentWrapper.classList.remove("--opened"),this.elements.componentWrapper.classList.add("--closed");const e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(d(this,l,!0),r(this,i).ariaHidden="false",this.elements.componentWrapper.classList.remove("--closed"),this.elements.componentWrapper.classList.add("--opened"),this.id){const e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},"",`#${this.id}`)}}},l=new WeakMap,i=new WeakMap,m=new WeakMap,C=new WeakSet,q=function(){this.isOpen&&(this.dispatchCloseEvent("HISTORY_BACK_EVENT"),this.config.autoCloseOnBackgroundClick&&this.close())},M);customElements.get("jb-modal")||window.customElements.define("jb-modal",$);let p=o.forwardRef((n,e)=>{let t=a.useRef(null),[s,u]=a.useState(0);return a.useImperativeHandle(e,()=>t?t.current:{},[t]),a.useEffect(()=>{u(s+1)},[t.current]),a.useEffect(()=>{t.current&&(n.isOpen==!0?t.current.open():t.current.close())},[n.isOpen]),a.useEffect(()=>{t.current&&(t.current.id=n.id)},[n.id]),h(t,"load",n.onLoad,!0),h(t,"init",n.onInit,!0),h(t,"close",n.onClose),h(t,"urlOpen",n.onUrlOpen),o.createElement("jb-modal",{ref:t,class:n.className?n.className:""},o.createElement("div",{slot:"content"},n.children))});p.displayName="JBModal";const te={title:"Components/JBModal",component:p,decorators:[n=>o.createElement("div",{className:"jb-modal-sample-background"},o.createElement(n,null))]},b={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},"Hello World")}},G="Test Long String ".repeat(200),v={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},G)}},g={render:()=>{const[n,e]=a.useState(!1);return o.createElement("div",null,o.createElement("div",{className:"button-wrapper"},o.createElement(E,{color:"light",onClick:()=>e(!0)},"Open Modal"),o.createElement(p,{isOpen:n,onClose:()=>{e(!1)}},o.createElement("div",{className:"modal-test-content"},"Hello World"))))}},w={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},"Mobile View")},parameters:{viewport:{defaultViewport:"mobile2"}}},f={render:n=>{const[e,t]=a.useState(!1),s=u=>{console.log("modal close event type:",u.detail.eventType),t(!1)};return o.createElement("div",{className:"button-wrapper"},o.createElement(E,{color:"light",onClick:u=>t(!0)},"Open Modal"),o.createElement(p,{isOpen:e,onClose:s,onUrlOpen:()=>t(!0),id:"MyModal"},o.createElement("div",{className:"modal-test-content",style:{flexDirection:"column",alignItems:"flex-start"}},o.createElement("p",null,"`onClose` event of the modal called for 2 reason:",o.createElement("ul",null,o.createElement("li",null,"when user click on modal background"),o.createElement("li",null,"when user hit back button in android or back button of the browser"))),o.createElement("p",null,"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"),o.createElement("p",null,"to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",o.createElement("a",{target:"_blank",href:"./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story"},"isolated mode")," then hit back button"),o.createElement("q",null,"back button scenario only works if your modal has an `id` attribute"),o.createElement(E,{onClick:()=>{t(!1)}},"Close Modal"))))}},k={render:()=>{const[n,e]=a.useState(!1);return o.createElement("div",null,o.createElement("h3",null,"JBModal With a Little customization"),o.createElement("div",{className:"button-wrapper"},o.createElement(E,{color:"light",onClick:()=>e(!0)},"Open Modal"),o.createElement(p,{className:"customized-look-modal",isOpen:n,onClose:()=>{e(!1)}},o.createElement("div",{className:"modal-test-content"},"Hello World"))))}};var x,N,j;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Hello World</div>
  }
}`,...(j=(N=b.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,S,L;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...(L=(S=v.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var J,W,z;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var H,T,A;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...(A=(T=w.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var U,_,R;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
            <p>to experience the second scenario with back button since we are in storybook and storybook load stories in a \`iframe\` tag you should open story in <a target='_blank' href='./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story'>isolated mode</a> then hit back button</p>
            <q>back button scenario only works if your modal has an \`id\` attribute</q>
            <JBButton onClick={() => {
            setIsOpen(false);
          }}>Close Modal</JBButton>
          </div>
        </JBModal>
      </div>;
  }
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var D,K,V;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(K=k.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const ne=["Normal","WithLargeContent","ActionTest","MobileView","CloseDetail","CustomizedUi"];export{g as ActionTest,f as CloseDetail,k as CustomizedUi,w as MobileView,b as Normal,v as WithLargeContent,ne as __namedExportsOrder,te as default};
