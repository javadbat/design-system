import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{q as r,t as i}from"./iframe-DlBehn5c.js";import{r as a,t as ee}from"./react-cvegqbt7.js";import{r as o,t as te}from"./react-BrHmOuIv.js";import{r as s,t as ne}from"./react-ur30_S-t.js";import{n as re,t as ie}from"./react-DbvlL92-.js";import{r as c,t as ae}from"./react-y_EZIWK0.js";import{n as oe,t as se}from"./dist-C5DUfNXn.js";var ce=t((()=>{})),le,l,u,d,ue=t((()=>{se(),le=`1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39`.split(`.`),l=[{id:1,name:`Red`,value:`#f00`},{id:2,name:`Green`,value:`#0f0`},{id:3,name:`Blue`,value:`#00f`},{id:4,name:`Yellow`,value:`#ff0`}],u=oe.helpers.multiple(()=>oe.person.firstName(),{count:100}),d=oe.helpers.multiple(()=>({name:oe.person.firstName(),family:oe.person.lastName(),userId:oe.number.int()}),{count:100})}));function f(e,t=0){let n=e.querySelectorAll(`jb-select`)[t];return g(n).toBeTruthy(),g(n.shadowRoot).toBeTruthy(),n}function de(e){let t=e.shadowRoot?.querySelector(`.search-input`);return g(t).toBeTruthy(),t}function p(e){return e.shadowRoot?.querySelector(`.selected-value-wrapper`)?.textContent?.trim()??``}function fe(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function pe(e){let t=e.shadowRoot?.querySelector(`.clear-button`);return g(t).toBeTruthy(),t}function me(e){let t=e.shadowRoot?.querySelector(`.select-list-wrapper`);return g(t).toBeTruthy(),t}function he(e){let t=me(e).shadowRoot?.querySelector(`.jb-popover-web-component`);return g(t).toBeTruthy(),t}async function m(e,t=1){return await be(()=>{g(e.optionListWithOrder.length).toBeGreaterThanOrEqual(t)}),e.optionListWithOrder}async function h(e,t){let n=await m(e,t+1);return n[t].toggleOption(),n[t]}async function ge(e,t){let n=de(e);e.focus(),await ye.type(n,t),await be(()=>{g(e.textValue).toBe(t)})}function _e(e){let t=e.shadowRoot?.querySelector(`button`);return g(t).toBeTruthy(),t}async function ve(e){let t=[`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`change`,`invalid`],n=[],r=document.createElement(`jb-select`);r.setAttribute(`required`,``);for(let e of t)r.addEventListener(e,()=>n.push(e));for(let e of[`alpha`,`beta`]){let t=document.createElement(`jb-option`);t.value=e,t.textContent=e,r.appendChild(t)}return e.appendChild(r),await be(()=>{g(n).toEqual(g.arrayContaining([`load`,`init`]))}),await m(r,2),{select:r,events:n}}var g,ye,be,xe=t((()=>{({expect:g,userEvent:ye,waitFor:be}=__STORYBOOK_MODULE_TEST__)})),Se=e({BooleanValue:()=>De,CustomOption:()=>Y,CustomOptionRender:()=>Z,CustomSelectedValueRender:()=>X,Disabled:()=>M,DynamicList:()=>J,EmptyList:()=>G,EventTest:()=>U,ExplicitNullValueDoesNotFallBackToInitialValue:()=>C,FixedPopoverInPositionedContainer:()=>H,FixedPopoverInScrollableContainer:()=>V,FixedPopoverPosition:()=>N,HideCleanButton:()=>F,InitialValue:()=>S,InitialValueDoesNotOverrideValue:()=>Ee,JBSelectDesignTest:()=>Q,MissingOption:()=>$,Multiple:()=>E,MultipleInitialValue:()=>w,MultipleWithCheckbox:()=>O,MultipleWithCheckboxAndLabel:()=>k,MultipleWithOptionList:()=>D,MultipleWithValue:()=>A,Normal:()=>x,OptionAsChildren:()=>I,OptionObject:()=>P,OptionObjectAsChildren:()=>L,OverflowTest:()=>B,PopoverHeight:()=>K,PreventedChangeKeepsInitialValueClean:()=>T,RTL:()=>W,Required:()=>R,SizeVariants:()=>z,WithError:()=>q,WithValue:()=>j,__namedExportsOrder:()=>Oe,default:()=>Te}),Ce,_,v,y,we,b,Te,x,S,Ee,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,De,$,Oe,ke=t((()=>{Ce=n(r(),1),_=n(r(),1),te(),ne(),ae(),ee(),ce(),ue(),ie(),xe(),v=i(),{expect:y,userEvent:we,waitFor:b}=__STORYBOOK_MODULE_TEST__,Te={title:`Components/form elements/JBSelect`,component:o,args:{children:(0,v.jsx)(c,{optionList:u})}},x={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`},play:async({canvasElement:e})=>{let t=f(e);await m(t,1);let n=await h(t,0);await b(()=>{y(t.value).toBe(u[0]),y(n.selected).toBe(!0),y(p(t)).toContain(u[0])}),n.isActive=!0,y(n.isActive).toBe(!0),n.isActive=!1}},S={render(e){let t=(0,Ce.useRef)(null);return(0,v.jsxs)(`form`,{ref:t,children:[(0,v.jsx)(o,{...e}),(0,v.jsx)(a,{onClick:()=>{t.current?.reset()},children:`Reset`})]})},args:{label:`initialValueTest`,message:`a initial provided value should be setted by default`,initialValue:u[0],placeholder:`select a value`},play:async({canvasElement:e,args:t})=>{let n=f(e),r=await m(n,3),i=e.querySelector(`jb-button`);y(i).toBeTruthy(),await b(()=>{y(n.value).toBe(t.initialValue),y(n.isDirty).toBe(!1),y(r[0].selected).toBe(!0),y(p(n)).toContain(String(t.initialValue))}),await h(n,1),await b(()=>{y(n.value).toBe(u[1]),y(n.isDirty).toBe(!0),y(r[0].selected).toBe(!1),y(r[1].selected).toBe(!0)}),n.initialValue=null,await b(()=>{y(n.initialValue).toBeNull(),y(n.isDirty).toBe(!0),y(n.value).toBe(u[1]),y(r[1].selected).toBe(!0)}),await we.click(_e(i)),await b(()=>{y(n.value).toBeNull(),y(n.isDirty).toBe(!1),y(r.every(e=>!e.selected)).toBe(!0)}),await h(n,0),n.initialValue=u[2],await b(()=>{y(n.initialValue).toBe(u[2]),y(n.value).toBe(u[0]),y(n.isDirty).toBe(!0),y(r[0].selected).toBe(!0),y(r[2].selected).toBe(!1)}),await we.click(_e(i)),await b(()=>{y(n.value).toBe(u[2]),y(n.initialValue).toBe(n.value),y(n.isDirty).toBe(!1),y(r[0].selected).toBe(!1),y(r[2].selected).toBe(!0),y(p(n)).toContain(u[2])})}},Ee={args:{initialValue:u[0],value:u[1]},play:async({canvasElement:e})=>{let t=f(e),n=await m(t,3);await b(()=>{y(t.value).toBe(u[1]),y(t.isDirty).toBe(!0),y(n[0].selected).toBe(!1),y(n[1].selected).toBe(!0)})}},C={args:{initialValue:u[0],value:null},play:async({canvasElement:e})=>{let t=f(e),n=await m(t,3);await b(()=>{y(t.value).toBeNull(),y(t.isDirty).toBe(!0),y(n.every(e=>!e.selected)).toBe(!0)})}},w={render:e=>{let t=(0,Ce.useRef)(null);return(0,v.jsxs)(`form`,{ref:t,children:[(0,v.jsx)(o,{...e,children:(0,v.jsx)(c,{optionList:u})}),(0,v.jsx)(a,{onClick:()=>{t.current?.reset()},children:`Reset`})]})},args:{multiple:!0,initialValue:[u[0],u[2]]},play:async({canvasElement:e,args:t})=>{let n=f(e),r=await m(n,3),i=e.querySelector(`jb-button`);y(i).toBeTruthy(),await b(()=>{y(n.value).toEqual([u[0],u[2]]),y(n.initialValue).not.toBe(t.initialValue),y(n.value).not.toBe(t.initialValue),y(n.isDirty).toBe(!1),y(r[0].selected).toBe(!0),y(r[1].selected).toBe(!1),y(r[2].selected).toBe(!0)}),await h(n,0),await b(()=>{y(n.value).toEqual([u[2]]),y(n.initialValue).toEqual([u[0],u[2]]),y(t.initialValue).toEqual([u[0],u[2]]),y(n.isDirty).toBe(!0)}),await we.click(_e(i)),await b(()=>{y(n.value).toEqual([u[0],u[2]]),y(n.isDirty).toBe(!1),y(r[0].selected).toBe(!0),y(r[1].selected).toBe(!1),y(r[2].selected).toBe(!0)});let a=[u[0],u[1]];n.value=a,await b(()=>{y(n.value).toEqual(a),y(n.value).not.toBe(a)}),await h(n,0),await b(()=>{y(n.value).toEqual([u[1]]),y(a).toEqual([u[0],u[1]])})}},T={args:{initialValue:u[0]},play:async({canvasElement:e})=>{let t=f(e),n=await m(t,2);await b(()=>{y(t.value).toBe(u[0]),y(t.isDirty).toBe(!1)}),t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await h(t,1),await b(()=>{y(t.value).toBe(u[0]),y(t.isDirty).toBe(!1),y(n[0].selected).toBe(!0),y(n[1].selected).toBe(!1)}),t.initialValue=u[2],await b(()=>{y(t.value).toBe(u[2]),y(t.isDirty).toBe(!1)})}},E={render:()=>(0,v.jsx)(o,{multiple:!0,label:`multiple select`,placeholder:`Select Options from Here`,children:d.map(e=>(0,v.jsx)(s,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),play:async({canvasElement:e})=>{let t=f(e),n=await m(t,2);await h(t,0),await h(t,1),await b(()=>{y(t.value).toEqual([d[0].userId,d[1].userId]),y(n[0].selected).toBe(!0),y(n[1].selected).toBe(!0)}),n[0].toggleOption(),await b(()=>{y(t.value).toEqual([d[1].userId]),y(n[0].selected).toBe(!1),y(n[1].selected).toBe(!0)})}},D={render:()=>(0,v.jsx)(o,{multiple:!0,label:`Assignees`,placeholder:`Choose one or more people`,children:(0,v.jsx)(c,{optionList:d,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),play:async({canvasElement:e})=>{let t=f(e),n=await m(t,2);await h(t,0),await h(t,1),await b(()=>{y(t.value).toEqual([d[0].userId,d[1].userId])}),n[0].toggleOption(),await b(()=>{y(t.value).toEqual([d[1].userId])})}},O={render:()=>(0,v.jsx)(o,{multiple:!0,children:d.map(e=>(0,v.jsxs)(s,{value:e.userId,children:[(0,v.jsx)(re,{size:`sm`}),(0,v.jsx)(`span`,{children:`${e.name} ${e.family}`})]},e.userId))}),play:async({canvasElement:e})=>{let t=f(e),n=await m(t,1),r=n[0].querySelector(`jb-checkbox`);await h(t,0),await b(()=>{y(t.value).toEqual([d[0].userId]),y(r.value).toBe(!0)}),n[0].toggleOption(),await b(()=>{y(t.value).toEqual([]),y(r.value).toBe(!1)})}},k={render:()=>(0,v.jsx)(o,{multiple:!0,children:d.map(e=>(0,v.jsx)(s,{value:e.userId,children:(0,v.jsx)(re,{size:`sm`,children:(0,v.jsx)(`div`,{slot:`label`,children:`${e.name} ${e.family}`})})},e.userId))})},A={render:e=>{let[t,n]=(0,_.useState)(e.value);return(0,_.useEffect)(()=>{n(e.value)},[e.value]),(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,v.jsx)(o,{multiple:!0,value:t,onChange:e=>n(e.target.value),children:d.map(e=>(0,v.jsx)(s,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),(0,v.jsx)(a,{size:`sm`,onClick:()=>console.log(t),children:`Log Value (see console)`})]})},args:{value:[...d.filter((e,t)=>t%2==0).map(e=>e.userId)]},play:async({canvasElement:e,args:t})=>{let n=f(e);await m(n,d.length),await b(()=>{y(n.value).toEqual(t.value),y(p(n)).toContain(d[0].name)})}},j={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,value:u[3],children:(0,v.jsx)(c,{optionList:u})},play:async({canvasElement:e,args:t})=>{let n=f(e),r=pe(n);await m(n,1),await b(()=>{y(n.value).toBe(t.value),y(p(n)).toContain(String(t.value)),y(r.localName).toBe(`button`),y(r.type).toBe(`button`),y(r.hidden).toBe(!1),y(getComputedStyle(r).display).toBe(`flex`)}),n.value=null,await b(()=>y(r.hidden).toBe(!0)),y(n.shadowRoot?.querySelector(`.clear-button`)).toBe(r),n.value=t.value,await b(()=>y(r.hidden).toBe(!1)),y(n.shadowRoot?.querySelector(`.clear-button`)).toBe(r)}},M={args:{label:`select from menu`,message:`please select a value`,value:u[3],disabled:!0},play:async({canvasElement:e})=>{let t=f(e),n=de(t),r=pe(t),i=me(t);t.focus(),await b(()=>{y(t.disabled).toBe(!0),y(n.disabled).toBe(!0),y(r.disabled).toBe(!0),y(i.isOpen).toBe(!1)})}},N={args:{label:`fixed`,message:`open select and see popover(only works in a desktop)`,popoverPosition:`fixed`},play:async({canvasElement:e})=>{let t=f(e),n=he(t);await m(t,1),t.focus(),await b(()=>{y(me(t).isOpen).toBe(!0),y(n.style.position).toBe(`fixed`)})}},P={args:{label:`select from menu`,children:(0,v.jsx)(c,{optionList:[{name:`peter`,family:`hanan`,userId:1},{name:`reza`,family:`asadi`,userId:2}],getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId}),onChange:e=>{console.log(`onChange`,e.target.value)}},play:async({canvasElement:e})=>{let t=f(e),n=await m(t,2);y(n[0].optionContentText).toBe(`peter hanan`),y(n[0].value).toBe(1),await ge(t,`peter`),await b(()=>{y(n[0].hidden).toBe(!1),y(n[1].hidden).toBe(!0)}),n[0].toggleOption(),await b(()=>{y(t.value).toBe(1),y(p(t)).toContain(`peter hanan`)})}},F={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,value:u[0],clearable:!1},play:async({canvasElement:e})=>{let t=f(e);await b(()=>{y(t.value).toBe(u[0]),y(t.clearable).toBe(!1),y(t.shadowRoot?.querySelector(`.clear-button`)).toBeNull()}),t.clearable=!0;let n=pe(t);y(n.hidden).toBe(!1),y(n.querySelector(`jb-icon-close`)?.shadowRoot).toBeTruthy(),t.clearable=!1,y(t.shadowRoot?.querySelector(`.clear-button`)).toBeNull(),t.clearable=!0,y(pe(t)).toBe(n)}},I={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{value:`1`,children:`one`}),(0,v.jsx)(s,{value:`2`,children:`two`}),(0,v.jsx)(s,{value:`3`,children:`three`}),(0,v.jsx)(s,{value:`4`,children:`four`}),(0,v.jsx)(s,{value:`5`,children:`five`}),(0,v.jsx)(s,{value:`6`,children:`six`}),(0,v.jsx)(s,{value:`7`,children:`seven`}),(0,v.jsx)(s,{value:`8`,children:`eight`}),(0,v.jsx)(s,{value:`9`,children:`nine`}),(0,v.jsx)(s,{value:`10`,children:`ten`})]})}},L={args:{label:`select from menu`,message:`please select a value`,placeholder:`select number here`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{value:{name:`ali`,age:10},children:`Ali`}),(0,v.jsx)(s,{value:{name:`reza`,age:12},children:`Reza`}),(0,v.jsx)(s,{value:{name:`joe`,age:14},children:`Joe`})]})},play:async({canvasElement:e})=>{let t=f(e),n=await m(t,1);await h(t,0),await b(()=>{y(t.value).toEqual(n[0].value),y(p(t)).toContain(`Ali`)})}},R={args:{label:`required select`,message:`focus and un focus without selecting a value to see validation error`,required:!0}},z={render:()=>{let e=(0,v.jsx)(_.Fragment,{children:d.map(e=>(0,v.jsx)(s,{value:e,children:e.name},e.userId))});return(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,v.jsx)(o,{size:`xl`,label:`xl size`,message:`message underneath`}),(0,v.jsx)(o,{size:`xl`,label:`xl size`,placeholder:`placeholder`,children:e}),(0,v.jsx)(o,{size:`xl`,label:`xl size`,value:d[0],children:e}),(0,v.jsx)(o,{size:`lg`,label:`lg size`,message:`message underneath`}),(0,v.jsx)(o,{size:`lg`,label:`lg size`,placeholder:`placeholder`,children:e}),(0,v.jsx)(o,{size:`lg`,label:`lg size`,value:d[0],children:e}),(0,v.jsx)(o,{size:`md`,label:`md size`,message:`message underneath`}),(0,v.jsx)(o,{size:`md`,label:`md size`,placeholder:`placeholder`,children:e}),(0,v.jsx)(o,{size:`md`,label:`md size`,value:d[0],children:e}),(0,v.jsx)(o,{size:`sm`,label:`sm size`,message:`message underneath`}),(0,v.jsx)(o,{size:`sm`,label:`sm size`,placeholder:`placeholder`,children:e}),(0,v.jsx)(o,{size:`sm`,label:`sm size`,value:d[0],children:e}),(0,v.jsx)(o,{size:`xs`,label:`xs size`,message:`message underneath`}),(0,v.jsx)(o,{size:`xs`,label:`xs size`,placeholder:`placeholder`,children:e}),(0,v.jsx)(o,{size:`xs`,label:`xs size`,value:d[0],children:e})]})}},B={render:()=>(0,v.jsxs)(`div`,{style:{height:`10rem`,overflowY:`auto`},children:[(0,v.jsx)(o,{label:`overflow test`,style:{width:`10rem`},popoverPosition:`fixed`,children:d.map(e=>(0,v.jsx)(s,{value:e,children:e.name},e.userId))}),(0,v.jsx)(`div`,{style:{height:`20rem`,background:`red`}})]})},V={render:()=>(0,v.jsxs)(`div`,{style:{height:`14rem`,maxWidth:`28rem`,overflowY:`auto`,border:`1px solid #94a3b8`,borderRadius:`0.5rem`,padding:`1rem`,background:`#f8fafc`},children:[(0,v.jsx)(`p`,{style:{margin:`0 0 8rem`},children:`Scroll this panel, then open each select near an edge to compare their popovers.`}),(0,v.jsx)(o,{label:`Default absolute popover`,placeholder:`Choose a person`,style:{width:`16rem`,marginBottom:`1rem`},children:(0,v.jsx)(c,{optionList:d,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,v.jsx)(o,{label:`Fixed popover`,placeholder:`Choose a person`,popoverPosition:`fixed`,style:{width:`16rem`},children:(0,v.jsx)(c,{optionList:d,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,v.jsx)(`div`,{style:{height:`16rem`}})]})},H={render:()=>(0,v.jsxs)(`div`,{style:{position:`relative`,maxWidth:`28rem`,overflow:`hidden`,border:`1px solid #a78bfa`,borderRadius:`0.5rem`,padding:`1rem`,background:`#faf5ff`},children:[(0,v.jsx)(`p`,{style:{marginTop:0},children:`This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.`}),(0,v.jsxs)(o,{label:`Environment`,placeholder:`Choose an environment`,popoverPosition:`fixed`,style:{width:`16rem`},children:[(0,v.jsx)(s,{value:`development`,children:`Development`}),(0,v.jsx)(s,{value:`staging`,children:`Staging`}),(0,v.jsx)(s,{value:`production`,children:`Production`})]})]})},U={render:()=>(0,v.jsxs)(o,{label:`event test`,required:!0,children:[(0,v.jsx)(s,{value:`alpha`,children:`alpha`}),(0,v.jsx)(s,{value:`beta`,children:`beta`})]}),play:async({canvasElement:e})=>{let{select:t,events:n}=await ve(e),r=de(t);y(t.reportValidity()).toBe(!1),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`a`,bubbles:!0})),r.value=`a`,r.dispatchEvent(new InputEvent(`input`,{data:`a`,inputType:`insertText`,bubbles:!0,composed:!0})),r.dispatchEvent(new KeyboardEvent(`keyup`,{key:`a`,bubbles:!0})),await b(()=>{y(t.textValue).toBe(`a`),y(n).toEqual(y.arrayContaining([`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`invalid`]))}),await h(t,0),await b(()=>{y(t.value).toBe(`alpha`),y(n).toEqual(y.arrayContaining([`change`]))})}},W={globals:{locale:`fa`,dir:`rtl`},args:{label:`از منو انتخاب کنید`,children:(0,v.jsx)(c,{optionList:le})},parameters:{docs:{description:{story:`RTL test`}}}},G={args:{label:`empty list`,message:`this list is a empty list`,children:(0,v.jsx)(c,{optionList:[]})},play:async({canvasElement:e})=>{let t=f(e);t.focus(),await b(()=>{y(t.optionListWithOrder.length).toBe(0),y(t.shadowRoot?.querySelector(`.empty-list-placeholder`)?.textContent).toContain(`no item available`)})}},K={args:{label:`select from in mobile`,message:`put in mobile view and open menu. it must fill half of the page`,placeholder:`select number here`,children:(0,v.jsx)(c,{optionList:le}),style:{"--jb-select-mobile-modal-height":`50vh`,"--jb-select-mobile-modal-border-radius":`1rem`}},play:async({canvasElement:e,args:t})=>{let n=f(e);await b(()=>{y(n.getAttribute(`style`)).toContain(`--jb-select-mobile-modal-height`),y(n.style.getPropertyValue(`--jb-select-mobile-modal-height`)).toBe(t.style[`--jb-select-mobile-modal-height`])})}},q={args:{label:`with error`,message:`please select a value`,error:`error message`},play:async({canvasElement:e,args:t})=>{let n=f(e);await b(()=>{y(n.reportValidity()).toBe(!1),y(fe(n)).toBe(t.error)})}},J={render:()=>{let[e,t]=(0,_.useState)([]);function n(e=``){let n=[];for(let t=0;t<20;t++)n.push(`${e} - ${t}`);t(n)}return(0,_.useEffect)(()=>{n()},[]),(0,v.jsx)(`div`,{children:(0,v.jsx)(o,{label:`please type and see result change`,onKeyUp:function(e){let t=e.target.textValue;n(t)},children:(0,v.jsx)(c,{optionList:e})})})},play:async({canvasElement:e})=>{let t=f(e);await m(t,20),await ge(t,`new`),await b(()=>{y(t.optionListWithOrder[0].optionContentText).toBe(`new - 0`)})}},Y={args:{label:`Color List`,children:(0,v.jsx)(v.Fragment,{children:l.map(e=>(0,v.jsxs)(s,{value:e,children:[(0,v.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})}},X={args:{label:`Color List With Custom Selected Value Render`,message:`please select a value and see the result`,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
        <span part="color-box" style="background-color:${e.value};width:2rem;height:1rem;display:inline-block;"></span>&nbsp;
        <span>Color ${e.name}</span>
      `,t},children:(0,v.jsx)(v.Fragment,{children:l.map(e=>(0,v.jsxs)(s,{value:e,children:[(0,v.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})},play:async({canvasElement:e})=>{let t=f(e);await m(t,1),await h(t,0),await b(()=>{y(p(t)).toContain(`Color ${l[0].name}`),y(t.shadowRoot?.querySelector(`[part="color-box"]`)).toBeTruthy()})}},Z={args:{label:`Color List With Custom Option Render callback`,message:`here we render color list with callback function `,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t},children:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(c,{optionList:l,getTitle:e=>e.name,getContentDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t}})})},play:async({canvasElement:e})=>{let t=f(e);y((await m(t,1))[0].textContent).toContain(`Color ${l[0].name}`),await h(t,0),await b(()=>{y(p(t)).toContain(`Color ${l[0].name}`)})}},Q={render:()=>{function e(e){let t=document.createElement(`div`);t.classList.add(`selected-value`);let n=document.createElement(`span`);return n.setAttribute(`part`,`color-box`),n.style.backgroundColor=e.value,t.append(n,`${e.name} · ${e.value.toUpperCase()}`),t}return(0,v.jsx)(`main`,{className:`select-custom-design`,children:(0,v.jsxs)(`section`,{className:`select-design-card`,"aria-labelledby":`palette-title`,children:[(0,v.jsxs)(`header`,{className:`select-design-header`,children:[(0,v.jsxs)(`span`,{className:`select-design-kicker`,children:[(0,v.jsx)(`i`,{"aria-hidden":`true`}),`Palette studio`]}),(0,v.jsx)(`h1`,{id:`palette-title`,children:`Pick a color that feels like you.`}),(0,v.jsx)(`p`,{children:`Give your workspace a little personality with one expressive accent.`})]}),(0,v.jsx)(`div`,{className:`select-design-palette`,"aria-hidden":`true`,children:l.map(e=>(0,v.jsx)(`span`,{style:{backgroundColor:e.value}},e.value))}),(0,v.jsx)(`div`,{className:`select-design-field`,children:(0,v.jsxs)(o,{label:`Accent color`,message:`Four vivid colors, one clear choice.`,placeholder:`Choose a color`,searchPlaceholder:`Search colors...`,getSelectedValueDOM:e,children:[l.map(e=>(0,v.jsx)(s,{value:e,children:(0,v.jsxs)(`span`,{className:`color-option`,children:[(0,v.jsx)(`span`,{className:`color-circle`,style:{backgroundColor:e.value},"aria-hidden":`true`}),(0,v.jsxs)(`span`,{className:`color-option-copy`,children:[(0,v.jsx)(`strong`,{children:e.name}),(0,v.jsx)(`small`,{children:e.value.toUpperCase()})]})]})},e.value)),(0,v.jsx)(`span`,{className:`select-design-arrow`,slot:`select-arrow-icon`,"aria-hidden":`true`,children:(0,v.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,v.jsx)(`title`,{children:`Open color menu`}),(0,v.jsx)(`path`,{d:`m6 8 4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})}),(0,v.jsxs)(`footer`,{className:`select-design-footer`,children:[(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`i`,{"aria-hidden":`true`}),`Live component`]}),(0,v.jsx)(`span`,{children:`Keyboard ready`})]})]})})}},De={render:()=>{let[e,t]=(0,_.useState)(null);return(0,v.jsxs)(o,{value:e,onChange:e=>{t(e.target.value)},children:[(0,v.jsx)(s,{value:!0,children:`True`}),(0,v.jsx)(s,{value:!1,children:`False`})]})},play:async({canvasElement:e})=>{let t=f(e);await m(t,2),await h(t,0),await b(()=>{y(t.value).toBe(!0)}),await h(t,1),await b(()=>{y(t.value).toBe(!1)})}},$={render:e=>{let{value:t}=e,[n,r]=(0,_.useState)([]);return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{value:t,label:`missing option`,message:`value is already set but options are not available when option available value will be set`,children:n.map(e=>(0,v.jsx)(s,{value:e,children:e.name}))}),(0,v.jsx)(a,{onClick:()=>r(d),children:`Fill Option`})]})},args:{value:d[3]},play:async({canvasElement:e,args:t})=>{let n=f(e),r=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(`Fill Option`));y(r).toBeTruthy(),y(n.optionListWithOrder.length).toBe(0),await we.click(r),await m(n,d.length),await b(()=>{y(n.value).toEqual(t.value),y(p(n)).toContain(d[3].name)})}},Oe=`Normal.InitialValue.InitialValueDoesNotOverrideValue.ExplicitNullValueDoesNotFallBackToInitialValue.MultipleInitialValue.PreventedChangeKeepsInitialValueClean.Multiple.MultipleWithOptionList.MultipleWithCheckbox.MultipleWithCheckboxAndLabel.MultipleWithValue.WithValue.Disabled.FixedPopoverPosition.OptionObject.HideCleanButton.OptionAsChildren.OptionObjectAsChildren.Required.SizeVariants.OverflowTest.FixedPopoverInScrollableContainer.FixedPopoverInPositionedContainer.EventTest.RTL.EmptyList.PopoverHeight.WithError.DynamicList.CustomOption.CustomSelectedValueRender.CustomOptionRender.JBSelectDesignTest.BooleanValue.MissingOption`.split(`.`),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    await waitForOptions(select, 1);
    const option = await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toBe(nameList[0]);
      expect(option.selected).toBe(true);
      expect(getSelectedValueText(select)).toContain(nameList[0]);
    });
    option.isActive = true;
    expect(option.isActive).toBe(true);
    option.isActive = false;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render(args) {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBSelect {...args} />
        <JBButton onClick={() => {
        formRef.current?.reset();
      }}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initialValueTest',
    message: "a initial provided value should be setted by default",
    initialValue: nameList[0],
    placeholder: "select a value"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect<string>(canvasElement);
    const options = await waitForOptions<string>(select, 3);
    const resetButton = canvasElement.querySelector<HTMLElement>('jb-button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(select.value).toBe(args.initialValue);
      expect(select.isDirty).toBe(false);
      expect(options[0].selected).toBe(true);
      expect(getSelectedValueText(select)).toContain(String(args.initialValue));
    });
    await selectOptionByIndex(select, 1);
    await waitFor(() => {
      expect(select.value).toBe(nameList[1]);
      expect(select.isDirty).toBe(true);
      expect(options[0].selected).toBe(false);
      expect(options[1].selected).toBe(true);
    });
    select.initialValue = null;
    await waitFor(() => {
      expect(select.initialValue).toBeNull();
      expect(select.isDirty).toBe(true);
      expect(select.value).toBe(nameList[1]);
      expect(options[1].selected).toBe(true);
    });
    await userEvent.click(getNativeButton(resetButton!));
    await waitFor(() => {
      expect(select.value).toBeNull();
      expect(select.isDirty).toBe(false);
      expect(options.every(option => !option.selected)).toBe(true);
    });
    await selectOptionByIndex(select, 0);
    select.initialValue = nameList[2];
    await waitFor(() => {
      expect(select.initialValue).toBe(nameList[2]);
      expect(select.value).toBe(nameList[0]);
      expect(select.isDirty).toBe(true);
      expect(options[0].selected).toBe(true);
      expect(options[2].selected).toBe(false);
    });
    await userEvent.click(getNativeButton(resetButton!));
    await waitFor(() => {
      expect(select.value).toBe(nameList[2]);
      expect(select.initialValue).toBe(select.value);
      expect(select.isDirty).toBe(false);
      expect(options[0].selected).toBe(false);
      expect(options[2].selected).toBe(true);
      expect(getSelectedValueText(select)).toContain(nameList[2]);
    });
  }
}`,...S.parameters?.docs?.source}}},Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: nameList[0],
    value: nameList[1]
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    const options = await waitForOptions<string>(select, 3);
    await waitFor(() => {
      expect(select.value).toBe(nameList[1]);
      expect(select.isDirty).toBe(true);
      expect(options[0].selected).toBe(false);
      expect(options[1].selected).toBe(true);
    });
  }
}`,...Ee.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: nameList[0],
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    const options = await waitForOptions<string>(select, 3);
    await waitFor(() => {
      expect(select.value).toBeNull();
      expect(select.isDirty).toBe(true);
      expect(options.every(option => !option.selected)).toBe(true);
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBSelect {...args}>
          <JBOptionList optionList={nameList} />
        </JBSelect>
        <JBButton onClick={() => {
        formRef.current?.reset();
      }}>Reset</JBButton>
      </form>;
  },
  args: {
    multiple: true,
    initialValue: [nameList[0], nameList[2]]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect<string[]>(canvasElement);
    const options = await waitForOptions<string[]>(select, 3);
    const resetButton = canvasElement.querySelector<HTMLElement>('jb-button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(select.value).toEqual([nameList[0], nameList[2]]);
      // Both the reset baseline and live selection must be isolated from the
      // mutable array supplied by Storybook/React.
      expect(select.initialValue).not.toBe(args.initialValue);
      expect(select.value).not.toBe(args.initialValue);
      expect(select.isDirty).toBe(false);
      expect(options[0].selected).toBe(true);
      expect(options[1].selected).toBe(false);
      expect(options[2].selected).toBe(true);
    });

    // Deselect an option from the initial array. This used to mutate both the
    // live value and initialValue because they shared the same array instance.
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toEqual([nameList[2]]);
      expect(select.initialValue).toEqual([nameList[0], nameList[2]]);
      expect(args.initialValue).toEqual([nameList[0], nameList[2]]);
      expect(select.isDirty).toBe(true);
    });
    await userEvent.click(getNativeButton(resetButton!));
    await waitFor(() => {
      expect(select.value).toEqual([nameList[0], nameList[2]]);
      expect(select.isDirty).toBe(false);
      expect(options[0].selected).toBe(true);
      expect(options[1].selected).toBe(false);
      expect(options[2].selected).toBe(true);
    });
    const callerOwnedValue = [nameList[0], nameList[1]];
    select.value = callerOwnedValue;
    await waitFor(() => {
      expect(select.value).toEqual(callerOwnedValue);
      expect(select.value).not.toBe(callerOwnedValue);
    });

    // Deselecting mutates the component's live array in place. The array
    // passed to the value setter must remain safe for controlled consumers.
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toEqual([nameList[1]]);
      expect(callerOwnedValue).toEqual([nameList[0], nameList[1]]);
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: nameList[0]
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    const options = await waitForOptions<string>(select, 2);
    await waitFor(() => {
      expect(select.value).toBe(nameList[0]);
      expect(select.isDirty).toBe(false);
    });

    // A canceled selection restores both value and the internal assignment
    // latch, so a later initialValue can still initialize the component.
    select.addEventListener('change', event => event.preventDefault(), {
      once: true
    });
    await selectOptionByIndex(select, 1);
    await waitFor(() => {
      expect(select.value).toBe(nameList[0]);
      expect(select.isDirty).toBe(false);
      expect(options[0].selected).toBe(true);
      expect(options[1].selected).toBe(false);
    });
    select.initialValue = nameList[2];
    await waitFor(() => {
      expect(select.value).toBe(nameList[2]);
      expect(select.isDirty).toBe(false);
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple label='multiple select' placeholder='Select Options from Here'>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
      })}
      </JBSelect>;
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<number[]>(canvasElement);
    const options = await waitForOptions<number[]>(select, 2);
    await selectOptionByIndex(select, 0);
    await selectOptionByIndex(select, 1);
    await waitFor(() => {
      expect(select.value).toEqual([persons[0].userId, persons[1].userId]);
      expect(options[0].selected).toBe(true);
      expect(options[1].selected).toBe(true);
    });
    options[0].toggleOption();
    await waitFor(() => {
      expect(select.value).toEqual([persons[1].userId]);
      expect(options[0].selected).toBe(false);
      expect(options[1].selected).toBe(true);
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple label="Assignees" placeholder="Choose one or more people">
        <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
      </JBSelect>;
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<number[]>(canvasElement);
    const options = await waitForOptions<number[]>(select, 2);
    await selectOptionByIndex(select, 0);
    await selectOptionByIndex(select, 1);
    await waitFor(() => {
      expect(select.value).toEqual([persons[0].userId, persons[1].userId]);
    });
    options[0].toggleOption();
    await waitFor(() => {
      expect(select.value).toEqual([persons[1].userId]);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm' /><span>{\`\${p.name} \${p.family}\`}</span></JBOption>;
      })}
      </JBSelect>;
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<number[]>(canvasElement);
    const options = await waitForOptions(select, 1);
    const checkbox = options[0].querySelector('jb-checkbox') as HTMLElement & {
      value: boolean;
    };
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toEqual([persons[0].userId]);
      expect(checkbox.value).toBe(true);
    });
    options[0].toggleOption();
    await waitFor(() => {
      expect(select.value).toEqual([]);
      expect(checkbox.value).toBe(false);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <JBSelect multiple value={value} onChange={e => setValue(e.target.value)}>
          {persons.map(p => {
          return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
        })}
        </JBSelect>
        <JBButton size='sm' onClick={() => console.log(value)}>Log Value (see console)</JBButton>
      </div>;
  },
  args: {
    value: [...persons.filter((_, i) => i % 2 == 0).map(x => x.userId)]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect<number[]>(canvasElement);
    await waitForOptions(select, persons.length);
    await waitFor(() => {
      expect(select.value).toEqual(args.value);
      expect(getSelectedValueText(select)).toContain(persons[0].name);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect<string>(canvasElement);
    const clearButton = getClearButton(select);
    await waitForOptions(select, 1);
    await waitFor(() => {
      expect(select.value).toBe(args.value);
      expect(getSelectedValueText(select)).toContain(String(args.value));
      expect(clearButton.localName).toBe('button');
      expect(clearButton.type).toBe('button');
      expect(clearButton.hidden).toBe(false);
      expect(getComputedStyle(clearButton).display).toBe('flex');
    });
    select.value = null;
    await waitFor(() => expect(clearButton.hidden).toBe(true));
    expect(select.shadowRoot?.querySelector('.clear-button')).toBe(clearButton);
    select.value = args.value;
    await waitFor(() => expect(clearButton.hidden).toBe(false));
    expect(select.shadowRoot?.querySelector('.clear-button')).toBe(clearButton);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    value: nameList[3],
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    const input = getNativeInput(select);
    const clearButton = getClearButton(select);
    const popover = getOptionPopover(select);
    select.focus();
    await waitFor(() => {
      expect(select.disabled).toBe(true);
      expect(input.disabled).toBe(true);
      expect(clearButton.disabled).toBe(true);
      expect(popover.isOpen).toBe(false);
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'fixed',
    message: "open select and see popover(only works in a desktop)",
    popoverPosition: "fixed"
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    const popoverWrapper = getOptionPopoverWrapper(select);
    await waitForOptions(select, 1);
    select.focus();
    await waitFor(() => {
      expect(getOptionPopover(select).isOpen).toBe(true);
      expect(popoverWrapper.style.position).toBe('fixed');
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    children: <JBOptionList optionList={[{
      name: 'peter',
      family: 'hanan',
      userId: 1
    }, {
      name: 'reza',
      family: 'asadi',
      userId: 2
    }]} getTitle={option => \`\${option.name} \${option.family}\`} getValue={option => option.userId} />,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<number>(canvasElement);
    const options = await waitForOptions<number>(select, 2);
    expect(options[0].optionContentText).toBe('peter hanan');
    expect(options[0].value).toBe(1);
    await typeInSelect(select, 'peter');
    await waitFor(() => {
      expect(options[0].hidden).toBe(false);
      expect(options[1].hidden).toBe(true);
    });
    options[0].toggleOption();
    await waitFor(() => {
      expect(select.value).toBe(1);
      expect(getSelectedValueText(select)).toContain('peter hanan');
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[0],
    clearable: false
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    await waitFor(() => {
      expect(select.value).toBe(nameList[0]);
      expect(select.clearable).toBe(false);
      expect(select.shadowRoot?.querySelector('.clear-button')).toBeNull();
    });
    select.clearable = true;
    const clearButton = getClearButton(select);
    expect(clearButton.hidden).toBe(false);
    expect(clearButton.querySelector('jb-icon-close')?.shadowRoot).toBeTruthy();
    select.clearable = false;
    expect(select.shadowRoot?.querySelector('.clear-button')).toBeNull();
    select.clearable = true;
    expect(getClearButton(select)).toBe(clearButton);
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    children: <>
        <JBOption value="1">one</JBOption>
        <JBOption value="2">two</JBOption>
        <JBOption value="3">three</JBOption>
        <JBOption value="4">four</JBOption>
        <JBOption value="5">five</JBOption>
        <JBOption value="6">six</JBOption>
        <JBOption value="7">seven</JBOption>
        <JBOption value="8">eight</JBOption>
        <JBOption value="9">nine</JBOption>
        <JBOption value="10">ten</JBOption>
      </>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
    children: <>
        <JBOption value={{
        name: "ali",
        age: 10
      }}>Ali</JBOption>
        <JBOption value={{
        name: "reza",
        age: 12
      }}>Reza</JBOption>
        <JBOption value={{
        name: "joe",
        age: 14
      }}>Joe</JBOption>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<{
      name: string;
      age: number;
    }>(canvasElement);
    const options = await waitForOptions<{
      name: string;
      age: number;
    }>(select, 1);
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toEqual(options[0].value);
      expect(getSelectedValueText(select)).toContain('Ali');
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = <Fragment>
      {persons.map(p => <JBOption key={p.userId} value={p}>{p.name}</JBOption>)}
    </Fragment>;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem'
    }}>
      <JBSelect size='xl' label='xl size' message="message underneath"></JBSelect>
      <JBSelect size='xl' label='xl size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='xl' label='xl size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='lg' label='lg size' message="message underneath"></JBSelect>
      <JBSelect size='lg' label='lg size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='lg' label='lg size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='md' label='md size' message="message underneath"></JBSelect>
      <JBSelect size='md' label='md size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='md' label='md size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='sm' label='sm size' message="message underneath"></JBSelect>
      <JBSelect size='sm' label='sm size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='sm' label='sm size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='xs' label='xs size' message="message underneath"></JBSelect>
      <JBSelect size='xs' label='xs size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='xs' label='xs size' value={persons[0]}>{options}</JBSelect>
    </div>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '10rem',
      overflowY: "auto"
    }}>
      <JBSelect label='overflow test' style={{
        width: "10rem"
      }} popoverPosition='fixed'>
        {persons.map(p => <JBOption key={p.userId} value={p}>{p.name}</JBOption>)}
      </JBSelect>
      <div style={{
        height: '20rem',
        background: 'red'
      }}></div>
    </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '14rem',
      maxWidth: '28rem',
      overflowY: 'auto',
      border: '1px solid #94a3b8',
      borderRadius: '0.5rem',
      padding: '1rem',
      background: '#f8fafc'
    }}>
        <p style={{
        margin: '0 0 8rem'
      }}>
          Scroll this panel, then open each select near an edge to compare their popovers.
        </p>
        <JBSelect label="Default absolute popover" placeholder="Choose a person" style={{
        width: '16rem',
        marginBottom: '1rem'
      }}>
          <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
        </JBSelect>
        <JBSelect label="Fixed popover" placeholder="Choose a person" popoverPosition="fixed" style={{
        width: '16rem'
      }}>
          <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
        </JBSelect>
        <div style={{
        height: '16rem'
      }} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      position: 'relative',
      maxWidth: '28rem',
      overflow: 'hidden',
      border: '1px solid #a78bfa',
      borderRadius: '0.5rem',
      padding: '1rem',
      background: '#faf5ff'
    }}>
        <p style={{
        marginTop: 0
      }}>
          This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.
        </p>
        <JBSelect label="Environment" placeholder="Choose an environment" popoverPosition="fixed" style={{
        width: '16rem'
      }}>
          <JBOption value="development">Development</JBOption>
          <JBOption value="staging">Staging</JBOption>
          <JBOption value="production">Production</JBOption>
        </JBSelect>
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <JBSelect label="event test" required>
      <JBOption value="alpha">alpha</JBOption>
      <JBOption value="beta">beta</JBOption>
    </JBSelect>,
  play: async ({
    canvasElement
  }) => {
    const {
      select,
      events
    } = await appendEventTestSelect(canvasElement);
    const input = getNativeInput(select);
    expect(select.reportValidity()).toBe(false);
    input.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'a',
      bubbles: true
    }));
    input.value = 'a';
    input.dispatchEvent(new InputEvent('input', {
      data: 'a',
      inputType: 'insertText',
      bubbles: true,
      composed: true
    }));
    input.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'a',
      bubbles: true
    }));
    await waitFor(() => {
      expect(select.textValue).toBe('a');
      expect(events).toEqual(expect.arrayContaining(['load', 'init', 'keypress', 'input', 'keyup', 'filter-change', 'invalid']));
    });
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toBe('alpha');
      expect(events).toEqual(expect.arrayContaining(['change']));
    });
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "fa",
    dir: "rtl"
  },
  args: {
    label: 'از منو انتخاب کنید',
    children: <JBOptionList optionList={numberOptionList} />
  },
  parameters: {
    docs: {
      description: {
        story: 'RTL test'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect(canvasElement);
    select.focus();
    await waitFor(() => {
      expect(select.optionListWithOrder.length).toBe(0);
      expect(select.shadowRoot?.querySelector('.empty-list-placeholder')?.textContent).toContain('no item available');
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from in mobile',
    message: "put in mobile view and open menu. it must fill half of the page",
    placeholder: "select number here",
    children: <JBOptionList optionList={numberOptionList} />,
    style: {
      "--jb-select-mobile-modal-height": "50vh",
      "--jb-select-mobile-modal-border-radius": "1rem"
    } as React.CSSProperties
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect(canvasElement);
    await waitFor(() => {
      expect(select.getAttribute('style')).toContain('--jb-select-mobile-modal-height');
      expect(select.style.getPropertyValue('--jb-select-mobile-modal-height')).toBe((args.style as React.CSSProperties)['--jb-select-mobile-modal-height' as keyof React.CSSProperties]);
    });
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect(canvasElement);
    await waitFor(() => {
      expect(select.reportValidity()).toBe(false);
      expect(getMessageText(select)).toBe(args.error);
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [optionList, setOptionList] = useState<string[]>([]);
    function fillList(text = "") {
      const newList: string[] = [];
      for (let i = 0; i < 20; i++) {
        newList.push(\`\${text} - \${i}\`);
      }
      setOptionList(newList);
    }
    useEffect(() => {
      fillList();
    }, []);
    const onKeyUp = function (e: JBSelectEventType<KeyboardEvent>) {
      const text = e.target.textValue;
      fillList(text);
    };
    return <div>
        <JBSelect label="please type and see result change" onKeyUp={onKeyUp}>
          <JBOptionList optionList={optionList}></JBOptionList>
        </JBSelect>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    await waitForOptions(select, 20);
    await typeInSelect(select, 'new');
    await waitFor(() => {
      expect(select.optionListWithOrder[0].optionContentText).toBe('new - 0');
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List",
    children: <>
      {colorList.map(color => <JBOption key={color.value} value={color}><span style={{
          backgroundColor: color.value,
          marginInlineEnd: '0.5rem',
          width: '1rem',
          height: '1rem',
          borderRadius: '0.5rem'
        }}></span>{color.name}</JBOption>)}
    </>
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List With Custom Selected Value Render",
    message: "please select a value and see the result",
    getSelectedValueDOM: option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = /*html */\`
        <span part="color-box" style="background-color:\${option.value};width:2rem;height:1rem;display:inline-block;"></span>&nbsp;
        <span>Color \${option.name}</span>
      \`;
      return optionElement;
    },
    children: <>
      {colorList.map(color => <JBOption key={color.value} value={color}><span style={{
          backgroundColor: color.value,
          marginInlineEnd: '0.5rem',
          width: '1rem',
          height: '1rem',
          borderRadius: '0.5rem'
        }}></span>{color.name}</JBOption>)}
    </>
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<(typeof colorList)[number]>(canvasElement);
    await waitForOptions(select, 1);
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(getSelectedValueText(select)).toContain(\`Color \${colorList[0].name}\`);
      expect(select.shadowRoot?.querySelector('[part="color-box"]')).toBeTruthy();
    });
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List With Custom Option Render callback",
    message: "here we render color list with callback function ",
    getSelectedValueDOM: option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = /*html */\`
              <span style="background-color:\${option.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color \${option.name}</span>
            \`;
      return optionElement;
    },
    children: <>
      {<JBOptionList optionList={colorList} getTitle={option => option.name} getContentDOM={option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("selected-value");
        optionElement.innerHTML = /*html */\`
              <span style="background-color:\${option.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color \${option.name}</span>
            \`;
        return optionElement;
      }} />}
    </>
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<(typeof colorList)[number]>(canvasElement);
    const options = await waitForOptions(select, 1);
    expect(options[0].textContent).toContain(\`Color \${colorList[0].name}\`);
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(getSelectedValueText(select)).toContain(\`Color \${colorList[0].name}\`);
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    function getSelectedValueDOM(option: (typeof colorList)[number]) {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      const colorBox = document.createElement("span");
      colorBox.setAttribute("part", "color-box");
      colorBox.style.backgroundColor = option.value;
      optionElement.append(colorBox, \`\${option.name} · \${option.value.toUpperCase()}\`);
      return optionElement;
    }
    return <main className="select-custom-design">
        <section className="select-design-card" aria-labelledby="palette-title">
          <header className="select-design-header">
            <span className="select-design-kicker"><i aria-hidden="true" />Palette studio</span>
            <h1 id="palette-title">Pick a color that feels like you.</h1>
            <p>Give your workspace a little personality with one expressive accent.</p>
          </header>

          <div className="select-design-palette" aria-hidden="true">
            {colorList.map(color => <span key={color.value} style={{
            backgroundColor: color.value
          }} />)}
          </div>

          <div className="select-design-field">
            <JBSelect label="Accent color" message="Four vivid colors, one clear choice." placeholder="Choose a color" searchPlaceholder="Search colors..." getSelectedValueDOM={getSelectedValueDOM}>
              {colorList.map(color => <JBOption value={color} key={color.value}>
                  <span className="color-option">
                    <span className="color-circle" style={{
                  backgroundColor: color.value
                }} aria-hidden="true" />
                    <span className="color-option-copy">
                      <strong>{color.name}</strong>
                      <small>{color.value.toUpperCase()}</small>
                    </span>
                  </span>
                </JBOption>)}
              <span className="select-design-arrow" slot="select-arrow-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <title>Open color menu</title>
                  <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </JBSelect>
          </div>

          <footer className="select-design-footer">
            <span><i aria-hidden="true" />Live component</span>
            <span>Keyboard ready</span>
          </footer>
        </section>
      </main>;
  }
}`,...Q.parameters?.docs?.source}}},De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<boolean | null>(null);
    return <JBSelect value={value} onChange={e => {
      setValue(e.target.value);
    }}>
        <JBOption value={true}>True</JBOption>
        <JBOption value={false}>False</JBOption>
      </JBSelect>;
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<boolean>(canvasElement);
    await waitForOptions(select, 2);
    await selectOptionByIndex(select, 0);
    await waitFor(() => {
      expect(select.value).toBe(true);
    });
    await selectOptionByIndex(select, 1);
    await waitFor(() => {
      expect(select.value).toBe(false);
    });
  }
}`,...De.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value
    } = args;
    const [optionList, setOptionList] = useState<typeof persons>([]);
    return <div>
        <JBSelect value={value} label="missing option" message="value is already set but options are not available when option available value will be set">
          {optionList.map(person => <JBOption value={person}>{person.name}</JBOption>)}
        </JBSelect>
        <JBButton onClick={() => setOptionList(persons)}>Fill Option</JBButton>
      </div>;
  },
  args: {
    value: persons[3]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const select = getSelect<(typeof persons)[number]>(canvasElement);
    const fillButton = Array.from(canvasElement.querySelectorAll<HTMLElement>('jb-button')).find(button => button.textContent?.includes('Fill Option'));
    expect(fillButton).toBeTruthy();
    expect(select.optionListWithOrder.length).toBe(0);
    await userEvent.click(fillButton!);
    await waitForOptions(select, persons.length);
    await waitFor(() => {
      expect(select.value).toEqual(args.value);
      expect(getSelectedValueText(select)).toContain(persons[3].name);
    });
  }
}`,...$.parameters?.docs?.source}}}}));ke();export{De as BooleanValue,Y as CustomOption,Z as CustomOptionRender,X as CustomSelectedValueRender,M as Disabled,J as DynamicList,G as EmptyList,U as EventTest,C as ExplicitNullValueDoesNotFallBackToInitialValue,H as FixedPopoverInPositionedContainer,V as FixedPopoverInScrollableContainer,N as FixedPopoverPosition,F as HideCleanButton,S as InitialValue,Ee as InitialValueDoesNotOverrideValue,Q as JBSelectDesignTest,$ as MissingOption,E as Multiple,w as MultipleInitialValue,O as MultipleWithCheckbox,k as MultipleWithCheckboxAndLabel,D as MultipleWithOptionList,A as MultipleWithValue,x as Normal,I as OptionAsChildren,P as OptionObject,L as OptionObjectAsChildren,B as OverflowTest,K as PopoverHeight,T as PreventedChangeKeepsInitialValueClean,W as RTL,R as Required,z as SizeVariants,q as WithError,j as WithValue,Oe as __namedExportsOrder,Te as default,ke as n,Se as t};