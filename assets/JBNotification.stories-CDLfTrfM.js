import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-BdsXi1cQ.js";import{r as i,t as a}from"./react-BmhKyAym.js";import{t as o}from"./jb-notification-Dl8vryjT.js";var s=t((()=>{})),c,l,u=t((()=>{o(),c=class extends HTMLElement{constructor(){super(),this.initWebComponent()}initWebComponent(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--gap:var(--jb-notification-wrapper-gap,.5rem);--width:var(--jb-notification-wrapper-width,100vw);--height:var(--jb-notification-wrapper-height,100vh);--padding-top:var(--jb-notification-wrapper-padding-top,4rem);--z-index:var(--jb-notification-wrapper-z-index,9999);--top:var(--jb-notification-wrapper-top,0);--left:var(--jb-notification-wrapper-left,0);--position:var(--jb-notification-wrapper-position,absolute);--overflow:var(--jb-notification-wrapper-overflow,hidden);--display:var(--jb-notification-wrapper-display,flex);--align-items:var(--jb-notification-wrapper-align-items,center);--flex-direction:var(--jb-notification-wrapper-flex-direction,column);--pointer-events:var(--jb-notification-wrapper-pointer-events,none)} .jb-notification-wrapper-web-component{position:var(--position);box-sizing:border-box;overflow:var(--overflow);display:var(--display);align-items:var(--align-items);flex-direction:var(--flex-direction);gap:var(--gap);width:var(--width);height:var(--height);padding-top:var(--padding-top);z-index:var(--z-index);top:var(--top);left:var(--left);pointer-events:var(--pointer-events)}</style>

  <div class="jb-notification-wrapper-web-component">
    <slot></slot>
  </div>
  `,e.appendChild(t.content.cloneNode(!0))}static get observedAttributes(){return[`x-position`,`y-position`]}attributeChangedCallback(e,t,n){this.onAttributeChange(e,n)}onAttributeChange(e,t){}},customElements.get(`jb-notification-wrapper`)||window.customElements.define(`jb-notification-wrapper`,c),l=class{#e;get wrapperDom(){return this.#e}constructor(){this.#t()}#t(){let e=document.createElement(`jb-notification-wrapper`);document.body.appendChild(e),this.#e=e}#n(e){let{title:t,type:n,desc:r}=e,i=document.createElement(`jb-notification`);return i.title=t,n&&(i.type=n),r&&(i.description=r),i.addEventListener(`close`,this.onNotificationClose.bind(this)),i}new(e){let{title:t,type:n,desc:r}=e,i=this.#n({title:t,type:n,desc:r});this.wrapperDom?.appendChild(i),i.show()}onNotificationClose(e){this.wrapperDom.removeChild(e.target)}}})),d=t((()=>{u()})),f=e({ActionTest:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_,v=t((()=>{n(),a(),s(),d(),p=r(),m=new l,h={title:`Components/JBNotification`},g={render:()=>{function e(){m.new({title:`completed successfully`,type:`SUCCESS`})}function t(){m.new({title:`error happen`,type:`ERROR`})}function n(){m.new({title:`operation is not safe`,type:`WARNING`})}function r(){m.new({title:`operation is good`,type:`INFO`})}return(0,p.jsxs)(`div`,{className:`jb-notification-test-page`,children:[(0,p.jsx)(`p`,{children:`please click on each buttons and see related notification`}),(0,p.jsx)(i,{color:`positive`,onClick:e,children:`success message`}),(0,p.jsx)(i,{color:`danger`,onClick:t,children:`error message`}),(0,p.jsx)(i,{color:`warning`,onClick:n,children:`warning message`}),(0,p.jsx)(i,{color:`primary`,onClick:r,children:`information message`})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    function showSuccessMessage() {
      const message: string | null = 'completed successfully';
      notificationManager.new({
        title: message,
        type: "SUCCESS"
      });
    }
    function showErrorMessage() {
      notificationManager.new({
        title: "error happen",
        type: "ERROR"
      });
    }
    function showWarningMessage() {
      notificationManager.new({
        title: 'operation is not safe',
        type: "WARNING"
      });
    }
    function showInformationMessage() {
      notificationManager.new({
        title: 'operation is good',
        type: "INFO"
      });
    }
    return <div className="jb-notification-test-page">
        <p>please click on each buttons and see related notification</p>
        <JBButton color='positive' onClick={showSuccessMessage}>success message</JBButton>
        <JBButton color='danger' onClick={showErrorMessage}>error message</JBButton>
        <JBButton color='warning' onClick={showWarningMessage}>warning message</JBButton>
        <JBButton color='primary' onClick={showInformationMessage}>information message</JBButton>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_=[`ActionTest`]}));v();export{g as ActionTest,_ as __namedExportsOrder,h as default,v as n,f as t};