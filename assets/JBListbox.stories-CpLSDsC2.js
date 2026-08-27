import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,i,n as a,r as o,t as s}from"./iframe-Dam_Gdf6.js";import{r as c,t as l}from"./dist-BiC1ecBI.js";import{p as u,r as d,t as f,u as p}from"./jb-core-DiFOdNJT.js";import{n as m,t as h}from"./jb-validation-BBE6zJrt.js";import{r as g,t as _}from"./react-Cr8-bRyv.js";import{t as v}from"./option-B6_42v3x.js";import{r as y,t as b}from"./react-zBlDLn8i.js";import{n as x,t as S}from"./react-CbNArNoI.js";import{n as C,t as w}from"./dist-C5DUfNXn.js";import{t as ee}from"./search-B7Ewlk36.js";var T,E,D=t((()=>{f(),v(),o(),c(),h(),T=new i({en:{requiredMessage:e=>`${e||`Selection`} is required`},fa:{requiredMessage:e=>e?`انتخاب ${e} الزامی است`:`انتخاب یک گزینه الزامی است`}}),E=class extends d{static get formAssociated(){return!0}#e;#t=new Set;#n=null;#r=new Set;#i=null;#a=null;#o=!1;#s=!1;#c=!1;#l=!1;#u=!1;#d=new m({clearValidationError:this.clearValidationError.bind(this),getValidations:this.#L.bind(this),getValue:()=>this.value,getValueString:e=>this.#k(e),setValidationResult:this.#R.bind(this),showValidationError:this.showValidationError.bind(this)});get validation(){return this.#d}get value(){return Array.isArray(this.#i)?[...this.#i]:this.#i}set value(e){this.#o=!0,this.#S(e)}get initialValue(){return Array.isArray(this.#a)?[...this.#a]:this.#a}set initialValue(e){this.#a=this.#A(this.#C(e)),this.#o||this.#S(this.#A(this.#a))}get isDirty(){return!this.#j(this.#i,this.#a)}get multiple(){return this.#l}set multiple(e){let t=!!e;if(this.#l===t)return;this.#l=t,this.#e&&(this.#e.ariaMultiSelectable=t?`true`:`false`),this.#a=this.#A(this.#C(this.#a));let n=t?this.#i===null?[]:Array.isArray(this.#i)?this.#i:[this.#i]:Array.isArray(this.#i)?this.#i[0]??null:this.#i;this.#S(n)}get disabled(){return this.#s}set disabled(e){this.#s=!!e,this.#s?(this.#e?.states?.add(`disabled`),this.#e&&(this.#e.ariaDisabled=`true`),this.setAttribute(`inert`,``)):(this.#e?.states?.delete(`disabled`),this.#e&&(this.#e.ariaDisabled=`false`),this.removeAttribute(`inert`)),this.#I()}get required(){return this.#c}set required(e){this.#c=!!e,this.#e&&(this.#e.ariaRequired=this.#c?`true`:`false`),this.#d.checkValiditySync({showError:!1})}get name(){return this.getAttribute(`name`)||``}set name(e){e?this.setAttribute(`name`,e):this.removeAttribute(`name`)}get form(){return this.#e?.form??null}get isAutoValidationDisabled(){return p(this.getAttribute(`disable-auto-validation`))}get validationMessage(){return this.#e?.validationMessage||this.#d.resultSummary?.message||null}get validity(){return this.#e?.validity}get willValidate(){return this.#e?.willValidate??!1}constructor(){super(),typeof this.attachInternals==`function`&&(this.#e=this.attachInternals(),this.#e.role=`listbox`),this.#f(),this.#p()}connectedCallback(){this.#I(),this.#m(),this.#u||(this.#u=!0,this.dispatchEvent(new CustomEvent(`load`)),queueMicrotask((()=>this.dispatchEvent(new CustomEvent(`init`)))))}static get observedAttributes(){return[`disabled`,`error`,`label`,`message`,`multiple`,`name`,`required`,`value`]}attributeChangedCallback(e,t,n){switch(e){case`disabled`:this.disabled=p(n);break;case`error`:this.reportValidity();break;case`label`:this.elements.label.textContent=n||``,this.#e&&(this.#e.ariaLabel=n||``);break;case`message`:this.#e?.states?.has(`invalid`)||(this.elements.message.textContent=n||``),this.#e&&(this.#e.ariaDescription=n||``);break;case`multiple`:this.multiple=p(n);break;case`name`:this.#E();break;case`required`:this.required=p(n);break;case`value`:this.#u||this.#o?n===null?this.#o&&(this.value=this.multiple?[]:null):this.value=n:this.initialValue=n===null?this.multiple?[]:null:n}}formResetCallback(){this.#o=!1,this.#S(this.#A(this.#a)),this.#d.reset(),this.#e?.setValidity({})}formDisabledCallback(e){this.disabled=e}formStateRestoreCallback(e,t){if(typeof e==`string`)try{let t=JSON.parse(e);this.#o=!0,this.#S(t.value)}catch{this.#o=!0,this.#S(e)}}focus(e){if(this.disabled)return;super.focus(e);let t=this.#n||this.#r.values().next().value||this.#M[0];t&&this.#N(t)}checkValidity(){let e=this.#d.checkValiditySync({showError:!1});return e.isAllValid||this.dispatchEvent(new Event(`invalid`,{cancelable:!0})),e.isAllValid}reportValidity(){let e=this.#d.checkValiditySync({showError:!0});return e.isAllValid||this.dispatchEvent(new Event(`invalid`,{cancelable:!0})),e.isAllValid}setCustomValidity(e){e?this.setAttribute(`error`,e):this.removeAttribute(`error`),this.#d.checkValiditySync({showError:!!e})}showValidationError(e){this.elements.message.textContent=typeof e==`string`?e:e.message,this.#e?.states?.add(`invalid`),this.#e&&(this.#e.ariaInvalid=`true`)}clearValidationError(){this.elements.message.textContent=this.getAttribute(`message`)||``,this.#e?.states?.delete(`invalid`),this.#e&&(this.#e.ariaInvalid=`false`)}#f(){let e=this.attachShadow({mode:`open`,serializable:!0});l();let t=document.createElement(`template`);t.innerHTML=`<style>:host{--border-color:var(--jb-listbox-border-color,var(--jb-input-border-color,var(--jb-neutral-10)));--border-color-focus:var(--jb-listbox-border-color-focus,var(--jb-input-border-color-focus,var(--jb-neutral)));--border-color-invalid:var(--jb-listbox-border-color-invalid,var(--jb-error,#b3261e));--background:var(--jb-listbox-background,var(--jb-input-bg-color,var(--jb-surface-secondary)));--border-radius:var(--jb-listbox-border-radius,var(--jb-input-border-radius,var(--jb-radius)));--border-width:var(--jb-listbox-border-width,var(--jb-input-border-width,1px));--border-bottom-width:var(--jb-listbox-border-bottom-width,var(--jb-input-border-bottom-width,3px));--border-width-focus:var(--jb-listbox-border-width-focus,var(--jb-input-border-width-focus,var(--border-width)));--border-bottom-width-focus:var(--jb-listbox-border-bottom-width-focus,var(--jb-input-border-bottom-width-focus,var(--border-bottom-width)));--padding:var(--jb-listbox-padding,.25rem);--option-border-radius:max(0px, calc(var(--border-radius) - var(--padding)));--gap:var(--jb-listbox-gap,.125rem);--max-height:var(--jb-listbox-max-height,18rem);--label-color:var(--jb-listbox-label-color,inherit);--label-font-size:var(--jb-listbox-label-font-size,.875rem);--message-color:var(--jb-listbox-message-color,inherit);--message-color-invalid:var(--jb-listbox-message-color-invalid,var(--jb-error,#b3261e));--message-font-size:var(--jb-listbox-message-font-size,.75rem);--box-shadow:var(--jb-listbox-box-shadow,var(--jb-input-box-shadow,none));--box-shadow-focus:var(--jb-listbox-box-shadow-focus,var(--jb-input-box-shadow-focus,none))}:host(:focus-within){--border-color:var(--jb-listbox-border-color-focus,var(--jb-input-border-color-focus,var(--jb-neutral)))}:host(:state(disabled)){--background:var(--jb-listbox-background-disabled,var(--jb-surface-secondary))}
:host{outline:none;display:block}.jb-listbox-web-component{gap:.375rem;display:grid}.label{color:var(--label-color);font-size:var(--label-font-size)}:host(:not([label])) .label{display:none}.list{max-height:var(--max-height);gap:var(--gap);padding:var(--padding);border:var(--border-width) solid var(--border-color);border-bottom-width:var(--border-bottom-width);border-radius:var(--border-radius);background:var(--background);box-shadow:var(--box-shadow);flex-direction:column;transition:all .3s;display:flex;overflow:auto}::slotted(jb-option){display:block}::slotted(jb-option:first-child){border-start-start-radius:var(--option-border-radius);border-start-end-radius:var(--option-border-radius);overflow:hidden}::slotted(jb-option:last-child){border-end-end-radius:var(--option-border-radius);border-end-start-radius:var(--option-border-radius);overflow:hidden}:host(:focus-within) .list{border-width:var(--border-width-focus);border-bottom-width:var(--border-bottom-width-focus);border-color:var(--border-color-focus);box-shadow:var(--box-shadow-focus)}:host(:state(invalid)) .list{border-color:var(--border-color-invalid)}:host(:state(disabled)){cursor:not-allowed;opacity:.6}.message{min-height:1em;color:var(--message-color);font-size:var(--message-font-size)}:host(:state(invalid)) .message{color:var(--message-color-invalid)}</style>

    <div class="jb-listbox-web-component" part="wrapper">
      <label class="label" part="label">
        <span class="label-text"></span>
      </label>
      <div class="list" part="list" role="presentation">
        <slot></slot>
      </div>
      <div class="message" part="message" aria-live="polite"></div>
    </div>
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(`.jb-listbox-web-component`),label:e.querySelector(`.label-text`),list:e.querySelector(`.list`),optionSlot:e.querySelector(`slot`),message:e.querySelector(`.message`)}}#p(){this.addEventListener(`select`,this.#y),this.addEventListener(`deselect`,this.#b),this.addEventListener(`jb-option-connected`,this.#h),this.addEventListener(`keydown`,this.#P),this.elements.optionSlot.addEventListener(`slotchange`,this.#m)}#m=()=>{for(let e of this.elements.optionSlot.assignedElements({flatten:!0}))e.localName===`jb-option`&&this.#g(e);this.#w()};#h=e=>{let t=e.composedPath()[0];t instanceof HTMLElement&&t.localName===`jb-option`&&this.#g(t)};#g(e){this.#t.has(e)||(e.setSelectElement(this),e.addEventListener(`jb-option-disconnected`,this.#_,{once:!0}),e.addEventListener(`mouseenter`,this.#v),e.id||=`jb-listbox-option-${crypto.randomUUID?.()??Math.random().toString(36).slice(2)}`,this.#t.add(e),e.selected=this.#T(e.value))}#_=e=>{let t=e.target;this.#t.delete(t),this.#r.delete(t),this.#n===t&&(this.#n=null),t.removeEventListener(`mouseenter`,this.#v)};#v=e=>{this.disabled||this.#N(e.currentTarget)};#y=e=>{if(this.disabled)return;let t=e.composedPath()[0];if(t.localName!==`jb-option`)return;let n=this.multiple?[...Array.isArray(this.#i)?this.#i:[],t.value]:t.value;this.#o=!0,this.#S(n),this.#N(t),this.#x()};#b=e=>{if(this.disabled||!this.multiple)return;let t=e.composedPath()[0];if(t.localName!==`jb-option`)return;let n=(Array.isArray(this.#i)?this.#i:[]).filter((e=>!Object.is(e,t.value)));this.#o=!0,this.#S(n),this.#N(t),this.#x()};#x(){this.isAutoValidationDisabled||this.#d.checkValidity({showError:this.#e?.states?.has(`invalid`)??!1}),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}#S(e){this.#i=this.#C(e),this.#w(),this.#E()}#C(e){return this.multiple?e==null?[]:Array.isArray(e)?[...e]:[e]:Array.isArray(e)?e[0]??null:e??null}#w(){this.#n=null,this.#r.clear();for(let e of this.#t){let t=this.#T(e.value);e.selected=t,t&&(this.multiple?this.#r.add(e):this.#n=e)}}#T(e){return Array.isArray(this.#i)?this.#i.some((t=>Object.is(t,e))):Object.is(this.#i,e)}#E(){if(!this.#e||typeof this.#e.setFormValue!=`function`)return;let e=this.#O();if(Array.isArray(this.#i)){if(this.#i.length===0||!this.name)return void this.#e.setFormValue(null,e);let t=new FormData;for(let e of this.#i)t.append(this.name,this.#D(e));this.#e.setFormValue(t,e)}else this.#e.setFormValue(this.#i===null?null:this.#D(this.#i),e)}#D(e){if(typeof e==`string`)return e;if(e instanceof Date)return e.toISOString();if(typeof e==`object`&&e)try{return JSON.stringify(e)}catch{return String(e)}return String(e)}#O(){try{return JSON.stringify({value:this.#i})}catch{return this.#k(this.#i)}}#k(e){return e===null?``:Array.isArray(e)?e.map((e=>this.#D(e))).join(`,`):this.#D(e)}#A(e){return Array.isArray(e)?[...e]:e}#j(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>Object.is(e,t[n]))):Object.is(e,t)}get#M(){return[...this.#t].filter((e=>!e.hidden))}#N(e){for(let t of this.#t)t.active=t===e;this.#e&&(this.#e.ariaActiveDescendantElement=e)}#P=e=>{if(this.disabled||this.#F(e.composedPath()[0]))return;let t=this.#M;if(t.length===0)return;let n=t.findIndex((e=>e.active)),r;switch(e.key){case`ArrowDown`:r=t[Math.min(n+1,t.length-1)]||t[0];break;case`ArrowUp`:r=t[n<=0?0:n-1];break;case`Home`:r=t[0];break;case`End`:r=t[t.length-1];break;case`Enter`:case` `:(n>=0?t[n]:t[0]).toggleOption(),e.preventDefault();return;default:return}e.preventDefault(),r&&(this.#N(r),r.scrollIntoView({block:`nearest`}))};#F(e){return e instanceof HTMLElement&&e!==this&&e.matches(`button, input, select, textarea, a[href]`)}#I(){this.tabIndex=this.disabled?-1:0}#L(){let e=[],t=this.getAttribute(`error`)?.trim();return t&&e.push({message:t,stateType:`customError`}),this.required&&e.push({message:T.get(a,`requiredMessage`)(this.getAttribute(`label`)),stateType:`valueMissing`,validator:e=>Array.isArray(e)?e.length>0:e!=null}),e}#R(e){if(e.isAllValid)return void this.#e?.setValidity({});let t={},n=``;for(let r of e.validationList)r.isValid||(t[r.validation.stateType||`customError`]=!0,n||=r.message||``);this.#e?.setValidity(t,n)}},u(`jb-listbox`,E)})),O=t((()=>{D(),D()}));function k(e){let t=(0,A.useRef)(null),{children:n,disabled:r,error:i,initialValue:a,label:o,message:s,multiple:c,name:l,onChange:u,onInit:d,onInput:f,onInvalid:p,onLoad:m,ref:h,required:g,validationList:_,value:v,...y}=e;return(0,A.useImperativeHandle)(h,(()=>t.current??void 0),[]),(0,A.useEffect)((()=>{t.current&&(t.current.multiple=c??!1)}),[c]),(0,A.useEffect)((()=>{a!==void 0&&t.current&&(t.current.initialValue=a)}),[a]),(0,A.useEffect)((()=>{v!==void 0&&t.current&&(t.current.value=v)}),[v]),(0,A.useEffect)((()=>{t.current&&(t.current.disabled=r??!1)}),[r]),(0,A.useEffect)((()=>{t.current&&(t.current.required=g??!1)}),[g]),(0,A.useEffect)((()=>{t.current&&(t.current.name=l||``)}),[l]),(0,A.useEffect)((()=>{t.current?.validation&&(t.current.validation.list=_||[])}),[_]),(0,A.useEffect)((()=>{let e=t.current;if(!e)return;let n={error:i,label:o,message:s};for(let[t,r]of Object.entries(n))r==null?e.removeAttribute(t):e.setAttribute(t,r)}),[i,o,s]),(0,A.useEffect)((()=>{let e=t.current;if(!e)return;let n=[[`change`,u],[`init`,d],[`input`,f],[`invalid`,p],[`load`,m]];for(let[t,r]of n)r&&e.addEventListener(t,r);return()=>{for(let[t,r]of n)r&&e.removeEventListener(t,r)}}),[u,d,f,p,m]),A.createElement(`jb-listbox`,{ref:t,...y},n)}var A,j=t((()=>{O(),A=n(r(),1),k.displayName=`JBListbox`})),M=t((()=>{j()})),N=e({FilteredOptions:()=>G,KeyboardSelection:()=>Z,MultipleSelection:()=>q,MultipleWithCheckbox:()=>J,Normal:()=>W,RequiredValidation:()=>X,SingleSelection:()=>K,SingleWithCheckbox:()=>Y,__namedExportsOrder:()=>Q,default:()=>U});function P(e){return e.querySelector(`jb-listbox`)}function F(e,t){return e.querySelectorAll(`jb-option`)[t].shadowRoot.querySelector(`.option-content-wrapper`)}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{w(),I=n(r(),1),M(),b(),S(),_(),ee(),L=s(),{expect:R,userEvent:z,waitFor:B}=__STORYBOOK_MODULE_TEST__,V=k,C.seed(42),H=C.helpers.multiple(()=>({id:C.string.uuid(),name:C.company.name()}),{count:100}),U={title:`Components/form elements/JBListbox`,component:V,args:{label:`Environment`,name:`environment`},render:e=>(0,L.jsx)(`form`,{children:(0,L.jsxs)(V,{...e,children:[(0,L.jsx)(y,{value:`development`,children:`Development`}),(0,L.jsx)(y,{value:`staging`,children:`Staging`}),(0,L.jsx)(y,{value:`production`,children:`Production`})]})})},W={args:{label:`Select an environment`,message:`Choose one environment`},play:async({canvasElement:e})=>{let t=P(e);await z.click(F(t,1)),await B(()=>{R(t.value).toBe(`staging`),R(t.querySelectorAll(`jb-option`)[1].selected).toBe(!0)})}},G={args:{label:`company`,message:`Type to filter the options`},render:e=>{let[t,n]=(0,I.useState)(``),r=(0,I.useRef)(null);return(0,I.useEffect)(()=>{r.current?.dispatchEvent(new CustomEvent(`filter-change`,{detail:{filterText:t}}))},[t]),(0,L.jsx)(`form`,{children:(0,L.jsxs)(V,{...e,ref:r,children:[(0,L.jsx)(g,{placeholder:`Search Company Here`,value:t,onInput:e=>n(e.target.value),children:(0,L.jsx)(`jb-icon-search`,{slot:`end-section`})}),(0,L.jsx)(`hr`,{style:{margin:`1rem 0`,border:`1px solid #ccc`}}),(0,L.jsx)(`div`,{style:{maxHeight:`400px`,overflowY:`auto`},children:H.map(e=>(0,L.jsx)(y,{value:e.id,children:e.name},e.id))})]})})}},K={args:{initialValue:`staging`},play:async({canvasElement:e})=>{let t=P(e),n=e.querySelector(`form`);await B(()=>R(t.value).toBe(`staging`)),await z.click(F(t,2)),R(t.value).toBe(`production`),R(new FormData(n).get(`environment`)).toBe(`production`),R(t.isDirty).toBe(!0),n.reset(),R(t.value).toBe(`staging`),R(t.isDirty).toBe(!1)}},q={args:{multiple:!0,name:`teams`},render:e=>(0,L.jsx)(`form`,{children:(0,L.jsxs)(V,{...e,children:[(0,L.jsx)(y,{value:`design`,children:`Design`}),(0,L.jsx)(y,{value:`engineering`,children:`Engineering`}),(0,L.jsx)(y,{value:`qa`,children:`QA`})]})}),play:async({canvasElement:e})=>{let t=P(e),n=e.querySelector(`form`);await z.click(F(t,0)),await z.click(F(t,2)),R(t.value).toEqual([`design`,`qa`]),R(new FormData(n).getAll(`teams`)).toEqual([`design`,`qa`]),await z.click(F(t,0)),R(t.value).toEqual([`qa`])}},J={args:{multiple:!0,name:`features`,label:`Features`},render:e=>(0,L.jsx)(`form`,{children:(0,L.jsxs)(V,{...e,children:[(0,L.jsx)(y,{value:`analytics`,children:(0,L.jsx)(x,{label:`Analytics`})}),(0,L.jsx)(y,{value:`notifications`,children:(0,L.jsx)(x,{label:`Notifications`})}),(0,L.jsx)(y,{value:`billing`,children:(0,L.jsx)(x,{label:`Billing`})})]})})},Y={args:{name:`plan`,label:`Plan`},render:e=>(0,L.jsx)(`form`,{children:(0,L.jsxs)(V,{...e,children:[(0,L.jsx)(y,{value:`free`,children:(0,L.jsx)(x,{label:`Free`})}),(0,L.jsx)(y,{value:`pro`,children:(0,L.jsx)(x,{label:`Pro`})}),(0,L.jsx)(y,{value:`enterprise`,children:(0,L.jsx)(x,{label:`Enterprise`})})]})}),play:async({canvasElement:e})=>{let t=P(e),n=t.querySelectorAll(`jb-option`)[1].querySelector(`jb-checkbox`);await z.click(n.shadowRoot.querySelector(`.jb-checkbox-web-component`)),R(t.value).toBe(`pro`),R(t.querySelectorAll(`jb-option`)[1].selected).toBe(!0)}},X={args:{required:!0},play:async({canvasElement:e})=>{let t=P(e);R(t.checkValidity()).toBe(!1),R(t.reportValidity()).toBe(!1),R(t.validationMessage).toBeTruthy(),await z.click(F(t,0)),R(t.checkValidity()).toBe(!0)}},Z={play:async({canvasElement:e})=>{let t=P(e);t.focus(),await z.keyboard(`{ArrowDown}{Enter}`),R(t.value).toBe(`staging`)}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select an environment",
    message: "Choose one environment"
  },
  play: async ({
    canvasElement
  }) => {
    const listbox = getListbox(canvasElement);
    await userEvent.click(getOptionControl(listbox, 1));
    await waitFor(() => {
      expect(listbox.value).toBe("staging");
      expect(listbox.querySelectorAll<JBOptionWebComponent<string>>("jb-option")[1].selected).toBe(true);
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "company",
    message: "Type to filter the options"
  },
  render: args => {
    const [filter, setFilter] = useState("");
    const listboxRef = useRef<JBListboxWebComponent<string>>(null);
    useEffect(() => {
      listboxRef.current?.dispatchEvent(new CustomEvent("filter-change", {
        detail: {
          filterText: filter
        }
      }));
    }, [filter]);
    return <form>
        <StringListbox {...args} ref={listboxRef}>
          <JBInput placeholder="Search Company Here" value={filter} onInput={event => setFilter(event.target.value)}>
            <jb-icon-search slot="end-section" />
          </JBInput>
          <hr style={{
          margin: "1rem 0",
          border: "1px solid #ccc"
        }} />
          <div style={{
          maxHeight: "400px",
          overflowY: "auto"
        }}>
            {generatedFilterOptions.map(option => <JBOption key={option.id} value={option.id}>
                {option.name}
              </JBOption>)}
          </div>
        </StringListbox>
      </form>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: "staging"
  },
  play: async ({
    canvasElement
  }) => {
    const listbox = getListbox(canvasElement);
    const form = canvasElement.querySelector("form")!;
    await waitFor(() => expect(listbox.value).toBe("staging"));
    await userEvent.click(getOptionControl(listbox, 2));
    expect(listbox.value).toBe("production");
    expect(new FormData(form).get("environment")).toBe("production");
    expect(listbox.isDirty).toBe(true);
    form.reset();
    expect(listbox.value).toBe("staging");
    expect(listbox.isDirty).toBe(false);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    name: "teams"
  },
  render: args => <form>
      <StringListbox {...args}>
        <JBOption value="design">Design</JBOption>
        <JBOption value="engineering">Engineering</JBOption>
        <JBOption value="qa">QA</JBOption>
      </StringListbox>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const listbox = getListbox(canvasElement);
    const form = canvasElement.querySelector("form")!;
    await userEvent.click(getOptionControl(listbox, 0));
    await userEvent.click(getOptionControl(listbox, 2));
    expect(listbox.value).toEqual(["design", "qa"]);
    expect(new FormData(form).getAll("teams")).toEqual(["design", "qa"]);
    await userEvent.click(getOptionControl(listbox, 0));
    expect(listbox.value).toEqual(["qa"]);
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    name: "features",
    label: "Features"
  },
  render: args => <form>
      <StringListbox {...args}>
        <JBOption value="analytics">
          <JBCheckbox label="Analytics" />
        </JBOption>
        <JBOption value="notifications">
          <JBCheckbox label="Notifications" />
        </JBOption>
        <JBOption value="billing">
          <JBCheckbox label="Billing" />
        </JBOption>
      </StringListbox>
    </form>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    name: "plan",
    label: "Plan"
  },
  render: args => <form>
      <StringListbox {...args}>
        <JBOption value="free">
          <JBCheckbox label="Free" />
        </JBOption>
        <JBOption value="pro">
          <JBCheckbox label="Pro" />
        </JBOption>
        <JBOption value="enterprise">
          <JBCheckbox label="Enterprise" />
        </JBOption>
      </StringListbox>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const listbox = getListbox(canvasElement);
    const checkbox = listbox.querySelectorAll("jb-option")[1].querySelector("jb-checkbox")!;
    await userEvent.click(checkbox.shadowRoot!.querySelector<HTMLElement>(".jb-checkbox-web-component")!);
    expect(listbox.value).toBe("pro");
    expect(listbox.querySelectorAll<JBOptionWebComponent<string>>("jb-option")[1].selected).toBe(true);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const listbox = getListbox(canvasElement);
    expect(listbox.checkValidity()).toBe(false);
    expect(listbox.reportValidity()).toBe(false);
    expect(listbox.validationMessage).toBeTruthy();
    await userEvent.click(getOptionControl(listbox, 0));
    expect(listbox.checkValidity()).toBe(true);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const listbox = getListbox(canvasElement);
    listbox.focus();
    await userEvent.keyboard("{ArrowDown}{Enter}");
    expect(listbox.value).toBe("staging");
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Normal`,`FilteredOptions`,`SingleSelection`,`MultipleSelection`,`MultipleWithCheckbox`,`SingleWithCheckbox`,`RequiredValidation`,`KeyboardSelection`]}));$();export{G as FilteredOptions,Z as KeyboardSelection,q as MultipleSelection,J as MultipleWithCheckbox,W as Normal,X as RequiredValidation,K as SingleSelection,Y as SingleWithCheckbox,Q as __namedExportsOrder,U as default,$ as n,N as t};