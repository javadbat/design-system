import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CNtKknPt.js";import{r as a,t as o}from"./dist-CSLcGHe3.js";import{r as s,t as c}from"./react-g5MK8YOm.js";import{r as l,t as u}from"./react-D6Ta17ro.js";import{n as d,t as f}from"./react-BBHyBV_L.js";import{n as p,t as m}from"./dist-FcoDOuCf.js";var h,g=t((()=>{a(),h=class extends HTMLElement{#e;#t;#n;get id(){let e=this.getAttribute(`id`)||``;return this.#n||e}set id(e){this.#n=e,this.checkInitialOpenness()}get isOpen(){return this.#e}constructor(){super(),this.#e=!1,this.#n=``,this.config={autoCloseOnBackgroundClick:!1},this.#r=()=>{this.isOpen&&(this.dispatchCloseEvent(`HISTORY_BACK_EVENT`),this.config.autoCloseOnBackgroundClick&&this.close())},this.initWebComponent()}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}disconnectedCallback(){window.removeEventListener(`popstate`,this.#r)}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0});this.#t=this.attachInternals(),this.#t.ariaModal=`true`,o();let t=document.createElement(`template`);t.innerHTML=`<style>.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component.--closed{display:none}@media (max-width:768px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media (max-width:768px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s}}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);grid-template:"header"max-content"content"minmax(0,1fr)"footer"max-content/1fr;width:auto;max-width:calc(100% - 2rem);height:auto;max-height:calc(100dvh - 4rem);display:grid;overflow:hidden}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius) var(--border-radius) 0 0;width:100%;max-width:100%;height:auto;min-height:2rem;max-height:calc(100% - 5rem);overflow-y:auto}}.jb-modal-web-component .modal-content-wrapper slot[name=header]::slotted(*){grid-area:header;justify-content:space-between;align-items:center;gap:.5rem;padding:1rem;font-size:1.5rem;font-weight:700;display:flex}.jb-modal-web-component .modal-content-wrapper slot[name=content]::slotted(*),.jb-modal-web-component .modal-content-wrapper slot:not([name])::slotted(*){grid-area:content;max-height:100%;padding:1rem;overflow:auto}.jb-modal-web-component .modal-content-wrapper slot[name=footer]::slotted(*){grid-area:footer;justify-content:flex-end;gap:.5rem;padding:1rem;display:flex}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white) l c h / .1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

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
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(`.jb-modal-web-component`),background:e.querySelector(`.modal-background`)}}registerEventListener(){this.elements.background.addEventListener(`click`,this.onBackgroundClick.bind(this)),window.addEventListener(`popstate`,this.#r)}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){let e=new CustomEvent(`urlOpen`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return[`is-open`,`id`]}attributeChangedCallback(e,t,n){this.onAttributeChange(e,n)}onAttributeChange(e,t){switch(e){case`is-open`:t==`true`?this.#e||this.open():this.#e&&this.close();break;case`id`:this.id=t}}onBackgroundClick(){this.dispatchCloseEvent(`BACKGROUND_CLICK`),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){let t=new CustomEvent(`close`,{detail:{eventType:e}});this.dispatchEvent(t)}close(){this.#e=!1,this.#t.ariaHidden=`true`,this.elements.componentWrapper.classList.remove(`--opened`),this.elements.componentWrapper.classList.add(`--closed`);let e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(this.#e=!0,this.#t.ariaHidden=`false`,this.elements.componentWrapper.classList.remove(`--closed`),this.elements.componentWrapper.classList.add(`--opened`),this.id){let e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},``,`#${this.id}`)}}#r},customElements.get(`jb-modal`)||window.customElements.define(`jb-modal`,h)})),_=t((()=>{g()})),v,y,b=t((()=>{v=n(r(),1),_(),c(),y=v.forwardRef(((e,t)=>{let n=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,(()=>n?n.current:void 0),[n]);let{isOpen:r,onClose:i,onInit:a,onLoad:o,onUrlOpen:c,...l}=e;return(0,v.useEffect)((()=>{r==1?n.current?.open():n.current?.close()}),[r,n.current]),function(e,t){s(e,`load`,t.onLoad,!0),s(e,`init`,t.onInit,!0),s(e,`close`,t.onClose),s(e,`urlOpen`,t.onUrlOpen)}(n,{onClose:i,onInit:a,onLoad:o,onUrlOpen:c}),v.createElement(`jb-modal`,{ref:n,...l},e.children)})),y.displayName=`JBModal`})),x=t((()=>{b()})),S=t((()=>{})),C=e({ActionTest:()=>N,CloseDetail:()=>F,CustomizedUi:()=>I,MobileView:()=>P,Normal:()=>D,WithHeaderAndFooter:()=>O,WithLargeContent:()=>A,WithOverflowY:()=>M,__namedExportsOrder:()=>L,default:()=>E}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R=t((()=>{w=n(r(),1),x(),u(),m(),S(),f(),T=i(),E={title:`Components/JBModal`,component:y,decorators:[e=>(0,T.jsx)(`div`,{className:`jb-modal-sample-background`,children:(0,T.jsx)(e,{})})]},D={args:{isOpen:!0,children:(0,T.jsx)(`div`,{children:`Hello World`})}},O={render:()=>(0,T.jsxs)(y,{isOpen:!0,children:[(0,T.jsx)(`div`,{slot:`content`,children:`Here we put content of the modal, mostly we put some information here to show to the user`}),(0,T.jsxs)(`div`,{slot:`header`,children:[(0,T.jsx)(`div`,{children:`Title of Header`}),` `,(0,T.jsx)(`div`,{children:`X`})]}),(0,T.jsxs)(`div`,{slot:`footer`,children:[(0,T.jsx)(l,{color:`light`,children:`Cancel`}),(0,T.jsx)(l,{children:`Submit`})]})]})},k=`Test Long String `.repeat(200),A={args:{isOpen:!0,children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:k})}},j=p.helpers.multiple(()=>({name:p.person.fullName()}),{count:500}),M={args:{isOpen:!0,children:(0,T.jsxs)(w.Fragment,{children:[(0,T.jsx)(`div`,{slot:`header`,children:`Header`}),(0,T.jsx)(`div`,{slot:`footer`,style:{justifyContent:`start`},children:(0,T.jsx)(d,{label:`I Read and Accept All People on the list`})}),(0,T.jsx)(`div`,{slot:`content`,children:j.map(e=>(0,T.jsx)(`div`,{children:e.name}))})]})}},N={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsx)(`div`,{children:(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,T.jsx)(y,{isOpen:e,onClose:()=>{t(!1)},children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})})}},P={args:{isOpen:!0,children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:`Mobile View`})},parameters:{viewport:{defaultViewport:`mobile2`}}},F={render:e=>{let[t,n]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:e=>n(!0),children:`Open Modal`}),(0,T.jsx)(y,{isOpen:t,onClose:e=>{console.log(`modal close event type:`,e.detail.eventType),n(!1)},onUrlOpen:()=>n(!0),id:`MyModal`,children:(0,T.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,T.jsxs)(`p`,{children:["`onClose` event of the modal called for 2 reason:",(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:`when user click on modal background`}),(0,T.jsx)(`li`,{children:`when user hit back button in android or back button of the browser`})]})]}),(0,T.jsx)(`p`,{children:"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"}),(0,T.jsxs)(`p`,{children:["to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",(0,T.jsx)(`a`,{rel:`noopener`,target:`_blank`,href:`./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story`,children:`isolated mode`}),` then hit back button`]}),(0,T.jsx)(`q`,{children:"back button scenario only works if your modal has an `id` attribute"}),(0,T.jsx)(l,{onClick:()=>{n(!1)},children:`Close Modal`})]})})]})}},I={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{children:`JBModal With a Little customization`}),(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,T.jsx)(y,{className:`customized-look-modal`,isOpen:e,onClose:()=>{t(!1)},children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Normal`,`WithHeaderAndFooter`,`WithLargeContent`,`WithOverflowY`,`ActionTest`,`MobileView`,`CloseDetail`,`CustomizedUi`]}));R();export{N as ActionTest,F as CloseDetail,I as CustomizedUi,P as MobileView,D as Normal,O as WithHeaderAndFooter,A as WithLargeContent,M as WithOverflowY,L as __namedExportsOrder,E as default,R as n,C as t};