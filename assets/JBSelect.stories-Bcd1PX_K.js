import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as ee}from"./iframe-BHkX38Rj.js";import{r as i,t as te}from"./react-CtoZBjrr.js";import{a,n as o,r as s,t as ne}from"./react-CJxkSgTm.js";import{n as re,t as ie}from"./react-KRYLn80q.js";import{n as ae,t as oe}from"./dist-C5DUfNXn.js";var se=t((()=>{})),ce,c,l,u,le=t((()=>{oe(),ce=`1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39`.split(`.`),c=[{id:1,name:`Red`,value:`#f00`},{id:2,name:`Green`,value:`#0f0`},{id:3,name:`Blue`,value:`#00f`},{id:4,name:`Yellow`,value:`#ff0`}],l=ae.helpers.multiple(()=>ae.person.firstName(),{count:100}),u=ae.helpers.multiple(()=>({name:ae.person.firstName(),family:ae.person.lastName(),userId:ae.number.int()}),{count:100})}));function d(e,t=0){let n=e.querySelectorAll(`jb-select`)[t];return h(n).toBeTruthy(),h(n.shadowRoot).toBeTruthy(),n}function ue(e){let t=e.shadowRoot?.querySelector(`.search-input`);return h(t).toBeTruthy(),t}function f(e){return e.shadowRoot?.querySelector(`.selected-value-wrapper`)?.textContent?.trim()??``}function de(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function fe(e){let t=e.shadowRoot?.querySelector(`.clear-button`);return h(t).toBeTruthy(),t}function pe(e){let t=e.shadowRoot?.querySelector(`.select-list-wrapper`);return h(t).toBeTruthy(),t}function me(e){let t=pe(e).shadowRoot?.querySelector(`.jb-popover-web-component`);return h(t).toBeTruthy(),t}async function p(e,t=1){return await ye(()=>{h(e.optionListWithOrder.length).toBeGreaterThanOrEqual(t)}),e.optionListWithOrder}async function m(e,t){let n=await p(e,t+1);return n[t].toggleOption(),n[t]}async function he(e,t){let n=ue(e);e.focus(),await ve.type(n,t),await ye(()=>{h(e.textValue).toBe(t)})}function ge(e){let t=e.shadowRoot?.querySelector(`button`);return h(t).toBeTruthy(),t}async function _e(e){let t=[`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`change`,`invalid`],n=[],r=document.createElement(`jb-select`);r.setAttribute(`required`,``);for(let e of t)r.addEventListener(e,()=>n.push(e));for(let e of[`alpha`,`beta`]){let t=document.createElement(`jb-option`);t.value=e,t.textContent=e,r.appendChild(t)}return e.appendChild(r),await ye(()=>{h(n).toEqual(h.arrayContaining([`load`,`init`]))}),await p(r,2),{select:r,events:n}}var h,ve,ye,be=t((()=>{({expect:h,userEvent:ve,waitFor:ye}=__STORYBOOK_MODULE_TEST__)})),xe=e({BooleanValue:()=>Q,CustomOption:()=>J,CustomOptionRender:()=>X,CustomSelectedValueRender:()=>Y,Disabled:()=>j,DynamicList:()=>q,EmptyList:()=>W,EventTest:()=>H,ExplicitNullValueDoesNotFallBackToInitialValue:()=>C,FixedPopoverInPositionedContainer:()=>V,FixedPopoverInScrollableContainer:()=>B,FixedPopoverPosition:()=>M,HideCleanButton:()=>P,InitialValue:()=>x,InitialValueDoesNotOverrideValue:()=>S,JBSelectDesignTest:()=>Z,MissingOption:()=>$,Multiple:()=>T,MultipleInitialValue:()=>Te,MultipleWithCheckbox:()=>D,MultipleWithCheckboxAndLabel:()=>O,MultipleWithOptionList:()=>E,MultipleWithValue:()=>k,Normal:()=>b,OptionAsChildren:()=>F,OptionObject:()=>N,OptionObjectAsChildren:()=>I,OverflowTest:()=>z,PopoverHeight:()=>G,PreventedChangeKeepsInitialValueClean:()=>w,RTL:()=>U,Required:()=>L,SizeVariants:()=>R,WithError:()=>K,WithValue:()=>A,__namedExportsOrder:()=>Ee,default:()=>we}),Se,g,_,v,Ce,y,we,b,x,S,C,Te,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ee,De=t((()=>{Se=n(r(),1),g=n(r(),1),ne(),te(),se(),le(),ie(),be(),_=ee(),{expect:v,userEvent:Ce,waitFor:y}=__STORYBOOK_MODULE_TEST__,we={title:`Components/form elements/JBSelect`,component:o,args:{children:(0,_.jsx)(a,{optionList:l})}},b={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`},play:async({canvasElement:e})=>{let t=d(e);await p(t,1);let n=await m(t,0);await y(()=>{v(t.value).toBe(l[0]),v(n.selected).toBe(!0),v(f(t)).toContain(l[0])})}},x={render(e){let t=(0,Se.useRef)(null);return(0,_.jsxs)(`form`,{ref:t,children:[(0,_.jsx)(o,{...e}),(0,_.jsx)(i,{onClick:()=>{t.current?.reset()},children:`Reset`})]})},args:{label:`initialValueTest`,message:`a initial provided value should be setted by default`,initialValue:l[0],placeholder:`select a value`},play:async({canvasElement:e,args:t})=>{let n=d(e),r=await p(n,3),ee=e.querySelector(`jb-button`);v(ee).toBeTruthy(),await y(()=>{v(n.value).toBe(t.initialValue),v(n.isDirty).toBe(!1),v(r[0].selected).toBe(!0),v(f(n)).toContain(String(t.initialValue))}),await m(n,1),await y(()=>{v(n.value).toBe(l[1]),v(n.isDirty).toBe(!0),v(r[0].selected).toBe(!1),v(r[1].selected).toBe(!0)}),n.initialValue=null,await y(()=>{v(n.initialValue).toBeNull(),v(n.isDirty).toBe(!0),v(n.value).toBe(l[1]),v(r[1].selected).toBe(!0)}),await Ce.click(ge(ee)),await y(()=>{v(n.value).toBeNull(),v(n.isDirty).toBe(!1),v(r.every(e=>!e.selected)).toBe(!0)}),await m(n,0),n.initialValue=l[2],await y(()=>{v(n.initialValue).toBe(l[2]),v(n.value).toBe(l[0]),v(n.isDirty).toBe(!0),v(r[0].selected).toBe(!0),v(r[2].selected).toBe(!1)}),await Ce.click(ge(ee)),await y(()=>{v(n.value).toBe(l[2]),v(n.initialValue).toBe(n.value),v(n.isDirty).toBe(!1),v(r[0].selected).toBe(!1),v(r[2].selected).toBe(!0),v(f(n)).toContain(l[2])})}},S={args:{initialValue:l[0],value:l[1]},play:async({canvasElement:e})=>{let t=d(e),n=await p(t,3);await y(()=>{v(t.value).toBe(l[1]),v(t.isDirty).toBe(!0),v(n[0].selected).toBe(!1),v(n[1].selected).toBe(!0)})}},C={args:{initialValue:l[0],value:null},play:async({canvasElement:e})=>{let t=d(e),n=await p(t,3);await y(()=>{v(t.value).toBeNull(),v(t.isDirty).toBe(!0),v(n.every(e=>!e.selected)).toBe(!0)})}},Te={render:e=>{let t=(0,Se.useRef)(null);return(0,_.jsxs)(`form`,{ref:t,children:[(0,_.jsx)(o,{...e,children:(0,_.jsx)(a,{optionList:l})}),(0,_.jsx)(i,{onClick:()=>{t.current?.reset()},children:`Reset`})]})},args:{multiple:!0,initialValue:[l[0],l[2]]},play:async({canvasElement:e,args:t})=>{let n=d(e),r=await p(n,3),ee=e.querySelector(`jb-button`);v(ee).toBeTruthy(),await y(()=>{v(n.value).toEqual([l[0],l[2]]),v(n.initialValue).not.toBe(t.initialValue),v(n.value).not.toBe(t.initialValue),v(n.isDirty).toBe(!1),v(r[0].selected).toBe(!0),v(r[1].selected).toBe(!1),v(r[2].selected).toBe(!0)}),await m(n,0),await y(()=>{v(n.value).toEqual([l[2]]),v(n.initialValue).toEqual([l[0],l[2]]),v(t.initialValue).toEqual([l[0],l[2]]),v(n.isDirty).toBe(!0)}),await Ce.click(ge(ee)),await y(()=>{v(n.value).toEqual([l[0],l[2]]),v(n.isDirty).toBe(!1),v(r[0].selected).toBe(!0),v(r[1].selected).toBe(!1),v(r[2].selected).toBe(!0)});let i=[l[0],l[1]];n.value=i,await y(()=>{v(n.value).toEqual(i),v(n.value).not.toBe(i)}),await m(n,0),await y(()=>{v(n.value).toEqual([l[1]]),v(i).toEqual([l[0],l[1]])})}},w={args:{initialValue:l[0]},play:async({canvasElement:e})=>{let t=d(e),n=await p(t,2);await y(()=>{v(t.value).toBe(l[0]),v(t.isDirty).toBe(!1)}),t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await m(t,1),await y(()=>{v(t.value).toBe(l[0]),v(t.isDirty).toBe(!1),v(n[0].selected).toBe(!0),v(n[1].selected).toBe(!1)}),t.initialValue=l[2],await y(()=>{v(t.value).toBe(l[2]),v(t.isDirty).toBe(!1)})}},T={render:()=>(0,_.jsx)(o,{multiple:!0,children:u.map(e=>(0,_.jsx)(s,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),play:async({canvasElement:e})=>{let t=d(e),n=await p(t,2);await m(t,0),await m(t,1),await y(()=>{v(t.value).toEqual([u[0].userId,u[1].userId]),v(n[0].selected).toBe(!0),v(n[1].selected).toBe(!0)}),n[0].toggleOption(),await y(()=>{v(t.value).toEqual([u[1].userId]),v(n[0].selected).toBe(!1),v(n[1].selected).toBe(!0)})}},E={render:()=>(0,_.jsx)(o,{multiple:!0,label:`Assignees`,placeholder:`Choose one or more people`,children:(0,_.jsx)(a,{optionList:u,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),play:async({canvasElement:e})=>{let t=d(e),n=await p(t,2);await m(t,0),await m(t,1),await y(()=>{v(t.value).toEqual([u[0].userId,u[1].userId])}),n[0].toggleOption(),await y(()=>{v(t.value).toEqual([u[1].userId])})}},D={render:()=>(0,_.jsx)(o,{multiple:!0,children:u.map(e=>(0,_.jsxs)(s,{value:e.userId,children:[(0,_.jsx)(re,{size:`sm`}),(0,_.jsx)(`span`,{children:`${e.name} ${e.family}`})]},e.userId))}),play:async({canvasElement:e})=>{let t=d(e),n=await p(t,1),r=n[0].querySelector(`jb-checkbox`);await m(t,0),await y(()=>{v(t.value).toEqual([u[0].userId]),v(r.value).toBe(!0)}),n[0].toggleOption(),await y(()=>{v(t.value).toEqual([]),v(r.value).toBe(!1)})}},O={render:()=>(0,_.jsx)(o,{multiple:!0,children:u.map(e=>(0,_.jsx)(s,{value:e.userId,children:(0,_.jsx)(re,{size:`sm`,children:(0,_.jsx)(`div`,{slot:`label`,children:`${e.name} ${e.family}`})})},e.userId))})},k={render:e=>{let[t,n]=(0,g.useState)(e.value);return(0,g.useEffect)(()=>{n(e.value)},[e.value]),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,_.jsx)(o,{multiple:!0,value:t,onChange:e=>n(e.target.value),children:u.map(e=>(0,_.jsx)(s,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),(0,_.jsx)(i,{size:`sm`,onClick:()=>console.log(t),children:`Log Value (see console)`})]})},args:{value:[...u.filter((e,t)=>t%2==0).map(e=>e.userId)]},play:async({canvasElement:e,args:t})=>{let n=d(e);await p(n,u.length),await y(()=>{v(n.value).toEqual(t.value),v(f(n)).toContain(u[0].name)})}},A={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,value:l[3],children:(0,_.jsx)(a,{optionList:l})},play:async({canvasElement:e,args:t})=>{let n=d(e);await p(n,1),await y(()=>{v(n.value).toBe(t.value),v(f(n)).toContain(String(t.value))})}},j={args:{label:`select from menu`,message:`please select a value`,value:l[3],disabled:!0},play:async({canvasElement:e})=>{let t=d(e),n=ue(t),r=pe(t);t.focus(),await y(()=>{v(t.disabled).toBe(!0),v(n.disabled).toBe(!0),v(r.isOpen).toBe(!1)})}},M={args:{label:`fixed`,message:`open select and see popover(only works in a desktop)`,popoverPosition:`fixed`},play:async({canvasElement:e})=>{let t=d(e),n=me(t);await p(t,1),t.focus(),await y(()=>{v(pe(t).isOpen).toBe(!0),v(n.style.position).toBe(`fixed`)})}},N={args:{label:`select from menu`,children:(0,_.jsx)(a,{optionList:[{name:`peter`,family:`hanan`,userId:1},{name:`reza`,family:`asadi`,userId:2}],getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId}),onChange:e=>{console.log(`onChange`,e.target.value)}},play:async({canvasElement:e})=>{let t=d(e),n=await p(t,2);v(n[0].optionContentText).toBe(`peter hanan`),v(n[0].value).toBe(1),await he(t,`peter`),await y(()=>{v(n[0].hidden).toBe(!1),v(n[1].hidden).toBe(!0)}),n[0].toggleOption(),await y(()=>{v(t.value).toBe(1),v(f(t)).toContain(`peter hanan`)})}},P={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,hideClear:!0},play:async({canvasElement:e})=>{let t=d(e);await y(()=>{v(fe(t).style.display).toBe(`none`)})}},F={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{value:`1`,children:`one`}),(0,_.jsx)(s,{value:`2`,children:`two`}),(0,_.jsx)(s,{value:`3`,children:`three`}),(0,_.jsx)(s,{value:`4`,children:`four`}),(0,_.jsx)(s,{value:`5`,children:`five`}),(0,_.jsx)(s,{value:`6`,children:`six`}),(0,_.jsx)(s,{value:`7`,children:`seven`}),(0,_.jsx)(s,{value:`8`,children:`eight`}),(0,_.jsx)(s,{value:`9`,children:`nine`}),(0,_.jsx)(s,{value:`10`,children:`ten`})]})}},I={args:{label:`select from menu`,message:`please select a value`,placeholder:`select number here`,children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{value:{name:`ali`,age:10},children:`Ali`}),(0,_.jsx)(s,{value:{name:`reza`,age:12},children:`Reza`}),(0,_.jsx)(s,{value:{name:`joe`,age:14},children:`Joe`})]})},play:async({canvasElement:e})=>{let t=d(e),n=await p(t,1);await m(t,0),await y(()=>{v(t.value).toEqual(n[0].value),v(f(t)).toContain(`Ali`)})}},L={args:{label:`required select`,message:`focus and un focus without selecting a value to see validation error`,required:!0}},R={render:()=>{let e=(0,_.jsx)(g.Fragment,{children:u.map(e=>(0,_.jsx)(s,{value:e,children:e.name},e.userId))});return(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,_.jsx)(o,{size:`xl`,label:`xl size`,message:`message underneath`}),(0,_.jsx)(o,{size:`xl`,label:`xl size`,placeholder:`placeholder`,children:e}),(0,_.jsx)(o,{size:`xl`,label:`xl size`,value:u[0],children:e}),(0,_.jsx)(o,{size:`lg`,label:`lg size`,message:`message underneath`}),(0,_.jsx)(o,{size:`lg`,label:`lg size`,placeholder:`placeholder`,children:e}),(0,_.jsx)(o,{size:`lg`,label:`lg size`,value:u[0],children:e}),(0,_.jsx)(o,{size:`md`,label:`md size`,message:`message underneath`}),(0,_.jsx)(o,{size:`md`,label:`md size`,placeholder:`placeholder`,children:e}),(0,_.jsx)(o,{size:`md`,label:`md size`,value:u[0],children:e}),(0,_.jsx)(o,{size:`sm`,label:`sm size`,message:`message underneath`}),(0,_.jsx)(o,{size:`sm`,label:`sm size`,placeholder:`placeholder`,children:e}),(0,_.jsx)(o,{size:`sm`,label:`sm size`,value:u[0],children:e}),(0,_.jsx)(o,{size:`xs`,label:`xs size`,message:`message underneath`}),(0,_.jsx)(o,{size:`xs`,label:`xs size`,placeholder:`placeholder`,children:e}),(0,_.jsx)(o,{size:`xs`,label:`xs size`,value:u[0],children:e})]})}},z={render:()=>(0,_.jsxs)(`div`,{style:{height:`10rem`,overflowY:`auto`},children:[(0,_.jsx)(o,{label:`overflow test`,style:{width:`10rem`},popoverPosition:`fixed`,children:u.map(e=>(0,_.jsx)(s,{value:e,children:e.name},e.userId))}),(0,_.jsx)(`div`,{style:{height:`20rem`,background:`red`}})]})},B={render:()=>(0,_.jsxs)(`div`,{style:{height:`14rem`,maxWidth:`28rem`,overflowY:`auto`,border:`1px solid #94a3b8`,borderRadius:`0.5rem`,padding:`1rem`,background:`#f8fafc`},children:[(0,_.jsx)(`p`,{style:{margin:`0 0 8rem`},children:`Scroll this panel, then open each select near an edge to compare their popovers.`}),(0,_.jsx)(o,{label:`Default absolute popover`,placeholder:`Choose a person`,style:{width:`16rem`,marginBottom:`1rem`},children:(0,_.jsx)(a,{optionList:u,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,_.jsx)(o,{label:`Fixed popover`,placeholder:`Choose a person`,popoverPosition:`fixed`,style:{width:`16rem`},children:(0,_.jsx)(a,{optionList:u,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,_.jsx)(`div`,{style:{height:`16rem`}})]})},V={render:()=>(0,_.jsxs)(`div`,{style:{position:`relative`,maxWidth:`28rem`,overflow:`hidden`,border:`1px solid #a78bfa`,borderRadius:`0.5rem`,padding:`1rem`,background:`#faf5ff`},children:[(0,_.jsx)(`p`,{style:{marginTop:0},children:`This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.`}),(0,_.jsxs)(o,{label:`Environment`,placeholder:`Choose an environment`,popoverPosition:`fixed`,style:{width:`16rem`},children:[(0,_.jsx)(s,{value:`development`,children:`Development`}),(0,_.jsx)(s,{value:`staging`,children:`Staging`}),(0,_.jsx)(s,{value:`production`,children:`Production`})]})]})},H={render:()=>(0,_.jsxs)(o,{label:`event test`,required:!0,children:[(0,_.jsx)(s,{value:`alpha`,children:`alpha`}),(0,_.jsx)(s,{value:`beta`,children:`beta`})]}),play:async({canvasElement:e})=>{let{select:t,events:n}=await _e(e),r=ue(t);v(t.reportValidity()).toBe(!1),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`a`,bubbles:!0})),r.value=`a`,r.dispatchEvent(new InputEvent(`input`,{data:`a`,inputType:`insertText`,bubbles:!0,composed:!0})),r.dispatchEvent(new KeyboardEvent(`keyup`,{key:`a`,bubbles:!0})),await y(()=>{v(t.textValue).toBe(`a`),v(n).toEqual(v.arrayContaining([`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`invalid`]))}),await m(t,0),await y(()=>{v(t.value).toBe(`alpha`),v(n).toEqual(v.arrayContaining([`change`]))})}},U={globals:{locale:`fa`,dir:`rtl`},args:{label:`از منو انتخاب کنید`,children:(0,_.jsx)(a,{optionList:ce})},parameters:{docs:{description:{story:`RTL test`}}}},W={args:{label:`empty list`,message:`this list is a empty list`,children:(0,_.jsx)(a,{optionList:[]})},play:async({canvasElement:e})=>{let t=d(e);t.focus(),await y(()=>{v(t.optionListWithOrder.length).toBe(0),v(t.shadowRoot?.querySelector(`.empty-list-placeholder`)?.textContent).toContain(`no item available`)})}},G={args:{label:`select from in mobile`,message:`put in mobile view and open menu. it must fill half of the page`,placeholder:`select number here`,children:(0,_.jsx)(a,{optionList:ce}),style:{"--jb-select-mobile-modal-height":`50vh`,"--jb-select-mobile-modal-border-radius":`1rem`}},play:async({canvasElement:e,args:t})=>{let n=d(e);await y(()=>{v(n.getAttribute(`style`)).toContain(`--jb-select-mobile-modal-height`),v(n.style.getPropertyValue(`--jb-select-mobile-modal-height`)).toBe(t.style[`--jb-select-mobile-modal-height`])})}},K={args:{label:`with error`,message:`please select a value`,error:`error message`},play:async({canvasElement:e,args:t})=>{let n=d(e);await y(()=>{v(n.reportValidity()).toBe(!1),v(de(n)).toBe(t.error)})}},q={render:()=>{let[e,t]=(0,g.useState)([]);function n(e=``){let n=[];for(let t=0;t<20;t++)n.push(`${e} - ${t}`);t(n)}return(0,g.useEffect)(()=>{n()},[]),(0,_.jsx)(`div`,{children:(0,_.jsx)(o,{label:`please type and see result change`,onKeyUp:function(e){let t=e.target.textValue;n(t)},children:(0,_.jsx)(a,{optionList:e})})})},play:async({canvasElement:e})=>{let t=d(e);await p(t,20),await he(t,`new`),await y(()=>{v(t.optionListWithOrder[0].optionContentText).toBe(`new - 0`)})}},J={args:{label:`Color List`,children:(0,_.jsx)(_.Fragment,{children:c.map(e=>(0,_.jsxs)(s,{value:e,children:[(0,_.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})}},Y={args:{label:`Color List With Custom Selected Value Render`,message:`please select a value and see the result`,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
        <span part="color-box" style="background-color:${e.value};width:2rem;height:1rem;display:inline-block;"></span>&nbsp;
        <span>Color ${e.name}</span>
      `,t},children:(0,_.jsx)(_.Fragment,{children:c.map(e=>(0,_.jsxs)(s,{value:e,children:[(0,_.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})},play:async({canvasElement:e})=>{let t=d(e);await p(t,1),await m(t,0),await y(()=>{v(f(t)).toContain(`Color ${c[0].name}`),v(t.shadowRoot?.querySelector(`[part="color-box"]`)).toBeTruthy()})}},X={args:{label:`Color List With Custom Option Render callback`,message:`here we render color list with callback function `,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t},children:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(a,{optionList:c,getTitle:e=>e.name,getContentDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t}})})},play:async({canvasElement:e})=>{let t=d(e);v((await p(t,1))[0].textContent).toContain(`Color ${c[0].name}`),await m(t,0),await y(()=>{v(f(t)).toContain(`Color ${c[0].name}`)})}},Z={render:()=>{function e(e){let t=document.createElement(`div`);t.classList.add(`selected-value`);let n=document.createElement(`span`);return n.setAttribute(`part`,`color-box`),n.style.backgroundColor=e.value,t.append(n,`${e.name} · ${e.value.toUpperCase()}`),t}return(0,_.jsx)(`main`,{className:`select-custom-design`,children:(0,_.jsxs)(`section`,{className:`select-design-card`,"aria-labelledby":`palette-title`,children:[(0,_.jsxs)(`header`,{className:`select-design-header`,children:[(0,_.jsxs)(`span`,{className:`select-design-kicker`,children:[(0,_.jsx)(`i`,{"aria-hidden":`true`}),`Palette studio`]}),(0,_.jsx)(`h1`,{id:`palette-title`,children:`Pick a color that feels like you.`}),(0,_.jsx)(`p`,{children:`Give your workspace a little personality with one expressive accent.`})]}),(0,_.jsx)(`div`,{className:`select-design-palette`,"aria-hidden":`true`,children:c.map(e=>(0,_.jsx)(`span`,{style:{backgroundColor:e.value}},e.value))}),(0,_.jsx)(`div`,{className:`select-design-field`,children:(0,_.jsxs)(o,{label:`Accent color`,message:`Four vivid colors, one clear choice.`,placeholder:`Choose a color`,searchPlaceholder:`Search colors...`,getSelectedValueDOM:e,children:[c.map(e=>(0,_.jsx)(s,{value:e,children:(0,_.jsxs)(`span`,{className:`color-option`,children:[(0,_.jsx)(`span`,{className:`color-circle`,style:{backgroundColor:e.value},"aria-hidden":`true`}),(0,_.jsxs)(`span`,{className:`color-option-copy`,children:[(0,_.jsx)(`strong`,{children:e.name}),(0,_.jsx)(`small`,{children:e.value.toUpperCase()})]})]})},e.value)),(0,_.jsx)(`span`,{className:`select-design-arrow`,slot:`select-arrow-icon`,"aria-hidden":`true`,children:(0,_.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,_.jsx)(`title`,{children:`Open color menu`}),(0,_.jsx)(`path`,{d:`m6 8 4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})}),(0,_.jsxs)(`footer`,{className:`select-design-footer`,children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`i`,{"aria-hidden":`true`}),`Live component`]}),(0,_.jsx)(`span`,{children:`Keyboard ready`})]})]})})}},Q={render:()=>{let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(o,{value:e,onChange:e=>{t(e.target.value)},children:[(0,_.jsx)(s,{value:!0,children:`True`}),(0,_.jsx)(s,{value:!1,children:`False`})]})},play:async({canvasElement:e})=>{let t=d(e);await p(t,2),await m(t,0),await y(()=>{v(t.value).toBe(!0)}),await m(t,1),await y(()=>{v(t.value).toBe(!1)})}},$={render:e=>{let{value:t}=e,[n,r]=(0,g.useState)([]);return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(o,{value:t,label:`missing option`,message:`value is already set but options are not available when option available value will be set`,children:n.map(e=>(0,_.jsx)(s,{value:e,children:e.name}))}),(0,_.jsx)(i,{onClick:()=>r(u),children:`Fill Option`})]})},args:{value:u[3]},play:async({canvasElement:e,args:t})=>{let n=d(e),r=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(`Fill Option`));v(r).toBeTruthy(),v(n.optionListWithOrder.length).toBe(0),await Ce.click(r),await p(n,u.length),await y(()=>{v(n.value).toEqual(t.value),v(f(n)).toContain(u[3].name)})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
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
}`,...Te.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    await waitForOptions(select, 1);
    await waitFor(() => {
      expect(select.value).toBe(args.value);
      expect(getSelectedValueText(select)).toContain(String(args.value));
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    const popover = getOptionPopover(select);
    select.focus();
    await waitFor(() => {
      expect(select.disabled).toBe(true);
      expect(input.disabled).toBe(true);
      expect(popover.isOpen).toBe(false);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    hideClear: true
  },
  play: async ({
    canvasElement
  }) => {
    const select = getSelect<string>(canvasElement);
    await waitFor(() => {
      expect(getClearButton(select).style.display).toBe('none');
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    const onKeyup = function (e: JBSelectEventType<KeyboardEvent>) {
      const text = e.target.textValue;
      fillList(text);
    };
    return <div>
        <JBSelect label="please type and see result change" onKeyUp={onKeyup}>
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ee=`Normal.InitialValue.InitialValueDoesNotOverrideValue.ExplicitNullValueDoesNotFallBackToInitialValue.MultipleInitialValue.PreventedChangeKeepsInitialValueClean.Multiple.MultipleWithOptionList.MultipleWithCheckbox.MultipleWithCheckboxAndLabel.MultipleWithValue.WithValue.Disabled.FixedPopoverPosition.OptionObject.HideCleanButton.OptionAsChildren.OptionObjectAsChildren.Required.SizeVariants.OverflowTest.FixedPopoverInScrollableContainer.FixedPopoverInPositionedContainer.EventTest.RTL.EmptyList.PopoverHeight.WithError.DynamicList.CustomOption.CustomSelectedValueRender.CustomOptionRender.JBSelectDesignTest.BooleanValue.MissingOption`.split(`.`)}));De();export{Q as BooleanValue,J as CustomOption,X as CustomOptionRender,Y as CustomSelectedValueRender,j as Disabled,q as DynamicList,W as EmptyList,H as EventTest,C as ExplicitNullValueDoesNotFallBackToInitialValue,V as FixedPopoverInPositionedContainer,B as FixedPopoverInScrollableContainer,M as FixedPopoverPosition,P as HideCleanButton,x as InitialValue,S as InitialValueDoesNotOverrideValue,Z as JBSelectDesignTest,$ as MissingOption,T as Multiple,Te as MultipleInitialValue,D as MultipleWithCheckbox,O as MultipleWithCheckboxAndLabel,E as MultipleWithOptionList,k as MultipleWithValue,b as Normal,F as OptionAsChildren,N as OptionObject,I as OptionObjectAsChildren,z as OverflowTest,G as PopoverHeight,w as PreventedChangeKeepsInitialValueClean,U as RTL,L as Required,R as SizeVariants,K as WithError,A as WithValue,Ee as __namedExportsOrder,we as default,De as n,xe as t};