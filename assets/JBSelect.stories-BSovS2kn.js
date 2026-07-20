import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as ee}from"./iframe-CKOyGSmZ.js";import{r as te,t as ne}from"./react-Cs9frFGz.js";import{a as i,n as a,r as o,t as re}from"./react-B6frd_BC.js";import{n as ie,t as ae}from"./react-nElZRJgY.js";import{n as s,t as oe}from"./dist-C5DUfNXn.js";var se=t((()=>{})),c,l,u,d,ce=t((()=>{oe(),c=`1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39`.split(`.`),l=[{id:1,name:`Red`,value:`#f00`},{id:2,name:`Green`,value:`#0f0`},{id:3,name:`Blue`,value:`#00f`},{id:4,name:`Yellow`,value:`#ff0`}],u=s.helpers.multiple(()=>s.person.firstName(),{count:100}),d=s.helpers.multiple(()=>({name:s.person.firstName(),family:s.person.lastName(),userId:s.number.int()}),{count:100})}));function f(e,t=0){let n=e.querySelectorAll(`jb-select`)[t];return _(n).toBeTruthy(),_(n.shadowRoot).toBeTruthy(),n}function p(e){let t=e.shadowRoot?.querySelector(`.search-input`);return _(t).toBeTruthy(),t}function m(e){return e.shadowRoot?.querySelector(`.selected-value-wrapper`)?.textContent?.trim()??``}function le(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function ue(e){let t=e.shadowRoot?.querySelector(`.clear-button`);return _(t).toBeTruthy(),t}function de(e){let t=e.shadowRoot?.querySelector(`.select-list-wrapper`);return _(t).toBeTruthy(),t}function fe(e){let t=de(e).shadowRoot?.querySelector(`.jb-popover-web-component`);return _(t).toBeTruthy(),t}async function h(e,t=1){return await v(()=>{_(e.optionListWithOrder.length).toBeGreaterThanOrEqual(t)}),e.optionListWithOrder}async function g(e,t){let n=await h(e,t+1);return n[t].toggleOption(),n[t]}async function pe(e,t){let n=p(e);e.focus(),await he.type(n,t),await v(()=>{_(e.textValue).toBe(t)})}async function me(e){let t=[`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`change`,`invalid`],n=[],r=document.createElement(`jb-select`);r.setAttribute(`required`,``);for(let e of t)r.addEventListener(e,()=>n.push(e));for(let e of[`alpha`,`beta`]){let t=document.createElement(`jb-option`);t.value=e,t.textContent=e,r.appendChild(t)}return e.appendChild(r),await v(()=>{_(n).toEqual(_.arrayContaining([`load`,`init`]))}),await h(r,2),{select:r,events:n}}var _,he,v,ge=t((()=>{({expect:_,userEvent:he,waitFor:v}=__STORYBOOK_MODULE_TEST__)})),_e=e({BooleanValue:()=>Q,CustomOption:()=>J,CustomOptionRender:()=>X,CustomSelectedValueRender:()=>Y,Disabled:()=>j,DynamicList:()=>q,EmptyList:()=>W,EventTest:()=>H,FixedPopoverInPositionedContainer:()=>V,FixedPopoverInScrollableContainer:()=>B,FixedPopoverPosition:()=>M,HideCleanButton:()=>P,JBSelectDesignTest:()=>Z,MissingOption:()=>$,Multiple:()=>T,MultipleWithCheckbox:()=>D,MultipleWithCheckboxAndLabel:()=>O,MultipleWithOptionList:()=>E,MultipleWithValue:()=>k,Normal:()=>w,OptionAsChildren:()=>F,OptionObject:()=>N,OptionObjectAsChildren:()=>I,OverflowTest:()=>z,PopoverHeight:()=>G,RTL:()=>U,Required:()=>L,SizeVariants:()=>R,WithError:()=>K,WithValue:()=>A,__namedExportsOrder:()=>ye,default:()=>C}),y,b,x,ve,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ye,be=t((()=>{r(),y=n(r(),1),re(),ne(),se(),ce(),ae(),ge(),b=ee(),{expect:x,userEvent:ve,waitFor:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/form elements/JBSelect`,component:i,args:{children:(0,b.jsx)(a,{optionList:u})}},w={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`},play:async({canvasElement:e})=>{let t=f(e);await h(t,1);let n=await g(t,0);await S(()=>{x(t.value).toBe(u[0]),x(n.selected).toBe(!0),x(m(t)).toContain(u[0])})}},T={render:()=>(0,b.jsx)(i,{multiple:!0,children:d.map(e=>(0,b.jsx)(o,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),play:async({canvasElement:e})=>{let t=f(e),n=await h(t,2);await g(t,0),await g(t,1),await S(()=>{x(t.value).toEqual([d[0].userId,d[1].userId]),x(n[0].selected).toBe(!0),x(n[1].selected).toBe(!0)}),n[0].toggleOption(),await S(()=>{x(t.value).toEqual([d[1].userId]),x(n[0].selected).toBe(!1),x(n[1].selected).toBe(!0)})}},E={render:()=>(0,b.jsx)(i,{multiple:!0,label:`Assignees`,placeholder:`Choose one or more people`,children:(0,b.jsx)(a,{optionList:d,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),play:async({canvasElement:e})=>{let t=f(e),n=await h(t,2);await g(t,0),await g(t,1),await S(()=>{x(t.value).toEqual([d[0].userId,d[1].userId])}),n[0].toggleOption(),await S(()=>{x(t.value).toEqual([d[1].userId])})}},D={render:()=>(0,b.jsx)(i,{multiple:!0,children:d.map(e=>(0,b.jsxs)(o,{value:e.userId,children:[(0,b.jsx)(ie,{size:`sm`}),(0,b.jsx)(`span`,{children:`${e.name} ${e.family}`})]},e.userId))}),play:async({canvasElement:e})=>{let t=f(e),n=await h(t,1),r=n[0].querySelector(`jb-checkbox`);await g(t,0),await S(()=>{x(t.value).toEqual([d[0].userId]),x(r.value).toBe(!0)}),n[0].toggleOption(),await S(()=>{x(t.value).toEqual([]),x(r.value).toBe(!1)})}},O={render:()=>(0,b.jsx)(i,{multiple:!0,children:d.map(e=>(0,b.jsx)(o,{value:e.userId,children:(0,b.jsx)(ie,{size:`sm`,children:(0,b.jsx)(`div`,{slot:`label`,children:`${e.name} ${e.family}`})})},e.userId))})},k={render:e=>{let[t,n]=(0,y.useState)(e.value);return(0,y.useEffect)(()=>{n(e.value)},[e.value]),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,b.jsx)(i,{multiple:!0,value:t,onChange:e=>n(e.target.value),children:d.map(e=>(0,b.jsx)(o,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),(0,b.jsx)(te,{size:`sm`,onClick:()=>console.log(t),children:`Log Value (see console)`})]})},args:{value:[...d.filter((e,t)=>t%2==0).map(e=>e.userId)]},play:async({canvasElement:e,args:t})=>{let n=f(e);await h(n,d.length),await S(()=>{x(n.value).toEqual(t.value),x(m(n)).toContain(d[0].name)})}},A={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,value:u[3],children:(0,b.jsx)(a,{optionList:u})},play:async({canvasElement:e,args:t})=>{let n=f(e);await h(n,1),await S(()=>{x(n.value).toBe(t.value),x(m(n)).toContain(String(t.value))})}},j={args:{label:`select from menu`,message:`please select a value`,value:u[3],disabled:!0},play:async({canvasElement:e})=>{let t=f(e),n=p(t),r=de(t);t.focus(),await S(()=>{x(t.disabled).toBe(!0),x(n.disabled).toBe(!0),x(r.isOpen).toBe(!1)})}},M={args:{label:`fixed`,message:`open select and see popover(only works in a desktop)`,popoverPosition:`fixed`},play:async({canvasElement:e})=>{let t=f(e),n=fe(t);await h(t,1),t.focus(),await S(()=>{x(de(t).isOpen).toBe(!0),x(n.style.position).toBe(`fixed`)})}},N={args:{label:`select from menu`,children:(0,b.jsx)(a,{optionList:[{name:`peter`,family:`hanan`,userId:1},{name:`reza`,family:`asadi`,userId:2}],getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId}),onChange:e=>{console.log(`onChange`,e.target.value)}},play:async({canvasElement:e})=>{let t=f(e),n=await h(t,2);x(n[0].optionContentText).toBe(`peter hanan`),x(n[0].value).toBe(1),await pe(t,`peter`),await S(()=>{x(n[0].hidden).toBe(!1),x(n[1].hidden).toBe(!0)}),n[0].toggleOption(),await S(()=>{x(t.value).toBe(1),x(m(t)).toContain(`peter hanan`)})}},P={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,hideClear:!0},play:async({canvasElement:e})=>{let t=f(e);await S(()=>{x(ue(t).style.display).toBe(`none`)})}},F={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{value:`1`,children:`one`}),(0,b.jsx)(o,{value:`2`,children:`two`}),(0,b.jsx)(o,{value:`3`,children:`three`}),(0,b.jsx)(o,{value:`4`,children:`four`}),(0,b.jsx)(o,{value:`5`,children:`five`}),(0,b.jsx)(o,{value:`6`,children:`six`}),(0,b.jsx)(o,{value:`7`,children:`seven`}),(0,b.jsx)(o,{value:`8`,children:`eight`}),(0,b.jsx)(o,{value:`9`,children:`nine`}),(0,b.jsx)(o,{value:`10`,children:`ten`})]})}},I={args:{label:`select from menu`,message:`please select a value`,placeholder:`select number here`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{value:{name:`ali`,age:10},children:`Ali`}),(0,b.jsx)(o,{value:{name:`reza`,age:12},children:`Reza`}),(0,b.jsx)(o,{value:{name:`joe`,age:14},children:`Joe`})]})},play:async({canvasElement:e})=>{let t=f(e),n=await h(t,1);await g(t,0),await S(()=>{x(t.value).toEqual(n[0].value),x(m(t)).toContain(`Ali`)})}},L={args:{label:`required select`,message:`focus and un focus without selecting a value to see validation error`,required:!0}},R={render:()=>{let e=(0,b.jsx)(y.Fragment,{children:d.map(e=>(0,b.jsx)(o,{value:e,children:e.name},e.userId))});return(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,b.jsx)(i,{size:`xl`,label:`xl size`,message:`message underneath`}),(0,b.jsx)(i,{size:`xl`,label:`xl size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(i,{size:`xl`,label:`xl size`,value:d[0],children:e}),(0,b.jsx)(i,{size:`lg`,label:`lg size`,message:`message underneath`}),(0,b.jsx)(i,{size:`lg`,label:`lg size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(i,{size:`lg`,label:`lg size`,value:d[0],children:e}),(0,b.jsx)(i,{size:`md`,label:`md size`,message:`message underneath`}),(0,b.jsx)(i,{size:`md`,label:`md size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(i,{size:`md`,label:`md size`,value:d[0],children:e}),(0,b.jsx)(i,{size:`sm`,label:`sm size`,message:`message underneath`}),(0,b.jsx)(i,{size:`sm`,label:`sm size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(i,{size:`sm`,label:`sm size`,value:d[0],children:e}),(0,b.jsx)(i,{size:`xs`,label:`xs size`,message:`message underneath`}),(0,b.jsx)(i,{size:`xs`,label:`xs size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(i,{size:`xs`,label:`xs size`,value:d[0],children:e})]})}},z={render:()=>(0,b.jsxs)(`div`,{style:{height:`10rem`,overflowY:`auto`},children:[(0,b.jsx)(i,{label:`overflow test`,style:{width:`10rem`},popoverPosition:`fixed`,children:d.map(e=>(0,b.jsx)(o,{value:e,children:e.name},e.userId))}),(0,b.jsx)(`div`,{style:{height:`20rem`,background:`red`}})]})},B={render:()=>(0,b.jsxs)(`div`,{style:{height:`14rem`,maxWidth:`28rem`,overflowY:`auto`,border:`1px solid #94a3b8`,borderRadius:`0.5rem`,padding:`1rem`,background:`#f8fafc`},children:[(0,b.jsx)(`p`,{style:{margin:`0 0 8rem`},children:`Scroll this panel, then open each select near an edge to compare their popovers.`}),(0,b.jsx)(i,{label:`Default absolute popover`,placeholder:`Choose a person`,style:{width:`16rem`,marginBottom:`1rem`},children:(0,b.jsx)(a,{optionList:d,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,b.jsx)(i,{label:`Fixed popover`,placeholder:`Choose a person`,popoverPosition:`fixed`,style:{width:`16rem`},children:(0,b.jsx)(a,{optionList:d,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,b.jsx)(`div`,{style:{height:`16rem`}})]})},V={render:()=>(0,b.jsxs)(`div`,{style:{position:`relative`,maxWidth:`28rem`,overflow:`hidden`,border:`1px solid #a78bfa`,borderRadius:`0.5rem`,padding:`1rem`,background:`#faf5ff`},children:[(0,b.jsx)(`p`,{style:{marginTop:0},children:`This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.`}),(0,b.jsxs)(i,{label:`Environment`,placeholder:`Choose an environment`,popoverPosition:`fixed`,style:{width:`16rem`},children:[(0,b.jsx)(o,{value:`development`,children:`Development`}),(0,b.jsx)(o,{value:`staging`,children:`Staging`}),(0,b.jsx)(o,{value:`production`,children:`Production`})]})]})},H={render:()=>(0,b.jsxs)(i,{label:`event test`,required:!0,children:[(0,b.jsx)(o,{value:`alpha`,children:`alpha`}),(0,b.jsx)(o,{value:`beta`,children:`beta`})]}),play:async({canvasElement:e})=>{let{select:t,events:n}=await me(e),r=p(t);x(t.reportValidity()).toBe(!1),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`a`,bubbles:!0})),r.value=`a`,r.dispatchEvent(new InputEvent(`input`,{data:`a`,inputType:`insertText`,bubbles:!0,composed:!0})),r.dispatchEvent(new KeyboardEvent(`keyup`,{key:`a`,bubbles:!0})),await S(()=>{x(t.textValue).toBe(`a`),x(n).toEqual(x.arrayContaining([`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`invalid`]))}),await g(t,0),await S(()=>{x(t.value).toBe(`alpha`),x(n).toEqual(x.arrayContaining([`change`]))})}},U={globals:{locale:`fa`,dir:`rtl`},args:{label:`از منو انتخاب کنید`,children:(0,b.jsx)(a,{optionList:c})},parameters:{docs:{description:{story:`RTL test`}}}},W={args:{label:`empty list`,message:`this list is a empty list`,children:(0,b.jsx)(a,{optionList:[]})},play:async({canvasElement:e})=>{let t=f(e);t.focus(),await S(()=>{x(t.optionListWithOrder.length).toBe(0),x(t.shadowRoot?.querySelector(`.empty-list-placeholder`)?.textContent).toContain(`no item available`)})}},G={args:{label:`select from in mobile`,message:`put in mobile view and open menu. it must fill half of the page`,placeholder:`select number here`,children:(0,b.jsx)(a,{optionList:c}),style:{"--jb-select-mobile-modal-height":`50vh`,"--jb-select-mobile-modal-border-radius":`1rem`}},play:async({canvasElement:e,args:t})=>{let n=f(e);await S(()=>{x(n.getAttribute(`style`)).toContain(`--jb-select-mobile-modal-height`),x(n.style.getPropertyValue(`--jb-select-mobile-modal-height`)).toBe(t.style[`--jb-select-mobile-modal-height`])})}},K={args:{label:`with error`,message:`please select a value`,error:`error message`},play:async({canvasElement:e,args:t})=>{let n=f(e);await S(()=>{x(n.reportValidity()).toBe(!1),x(le(n)).toBe(t.error)})}},q={render:()=>{let[e,t]=(0,y.useState)([]);function n(e=``){let n=[];for(let t=0;t<20;t++)n.push(`${e} - ${t}`);t(n)}return(0,y.useEffect)(()=>{n()},[]),(0,b.jsx)(`div`,{children:(0,b.jsx)(i,{label:`please type and see result change`,onKeyUp:function(e){let t=e.target.textValue;n(t)},children:(0,b.jsx)(a,{optionList:e})})})},play:async({canvasElement:e})=>{let t=f(e);await h(t,20),await pe(t,`new`),await S(()=>{x(t.optionListWithOrder[0].optionContentText).toBe(`new - 0`)})}},J={args:{label:`Color List`,children:(0,b.jsx)(b.Fragment,{children:l.map(e=>(0,b.jsxs)(o,{value:e,children:[(0,b.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})}},Y={args:{label:`Color List With Custom Selected Value Render`,message:`please select a value and see the result`,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
        <span part="color-box" style="background-color:${e.value};width:2rem;height:1rem;display:inline-block;"></span>&nbsp;
        <span>Color ${e.name}</span>
      `,t},children:(0,b.jsx)(b.Fragment,{children:l.map(e=>(0,b.jsxs)(o,{value:e,children:[(0,b.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})},play:async({canvasElement:e})=>{let t=f(e);await h(t,1),await g(t,0),await S(()=>{x(m(t)).toContain(`Color ${l[0].name}`),x(t.shadowRoot?.querySelector(`[part="color-box"]`)).toBeTruthy()})}},X={args:{label:`Color List With Custom Option Render callback`,message:`here we render color list with callback function `,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t},children:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(a,{optionList:l,getTitle:e=>e.name,getContentDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:1rem;height:1rem;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t}})})},play:async({canvasElement:e})=>{let t=f(e);x((await h(t,1))[0].textContent).toContain(`Color ${l[0].name}`),await g(t,0),await S(()=>{x(m(t)).toContain(`Color ${l[0].name}`)})}},Z={render:()=>{function e(e){let t=document.createElement(`div`);t.classList.add(`selected-value`);let n=document.createElement(`span`);return n.setAttribute(`part`,`color-box`),n.style.backgroundColor=e.value,t.append(n,`${e.name} · ${e.value.toUpperCase()}`),t}return(0,b.jsx)(`main`,{className:`select-custom-design`,children:(0,b.jsxs)(`section`,{className:`select-design-card`,"aria-labelledby":`palette-title`,children:[(0,b.jsxs)(`header`,{className:`select-design-header`,children:[(0,b.jsxs)(`span`,{className:`select-design-kicker`,children:[(0,b.jsx)(`i`,{"aria-hidden":`true`}),`Palette studio`]}),(0,b.jsx)(`h1`,{id:`palette-title`,children:`Pick a color that feels like you.`}),(0,b.jsx)(`p`,{children:`Give your workspace a little personality with one expressive accent.`})]}),(0,b.jsx)(`div`,{className:`select-design-palette`,"aria-hidden":`true`,children:l.map(e=>(0,b.jsx)(`span`,{style:{backgroundColor:e.value}},e.value))}),(0,b.jsx)(`div`,{className:`select-design-field`,children:(0,b.jsxs)(i,{label:`Accent color`,message:`Four vivid colors, one clear choice.`,placeholder:`Choose a color`,searchPlaceholder:`Search colors...`,getSelectedValueDOM:e,children:[l.map(e=>(0,b.jsx)(o,{value:e,children:(0,b.jsxs)(`span`,{className:`color-option`,children:[(0,b.jsx)(`span`,{className:`color-circle`,style:{backgroundColor:e.value},"aria-hidden":`true`}),(0,b.jsxs)(`span`,{className:`color-option-copy`,children:[(0,b.jsx)(`strong`,{children:e.name}),(0,b.jsx)(`small`,{children:e.value.toUpperCase()})]})]})},e.value)),(0,b.jsx)(`span`,{className:`select-design-arrow`,slot:`select-arrow-icon`,"aria-hidden":`true`,children:(0,b.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,b.jsx)(`title`,{children:`Open color menu`}),(0,b.jsx)(`path`,{d:`m6 8 4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})}),(0,b.jsxs)(`footer`,{className:`select-design-footer`,children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`i`,{"aria-hidden":`true`}),`Live component`]}),(0,b.jsx)(`span`,{children:`Keyboard ready`})]})]})})}},Q={render:()=>{let[e,t]=(0,y.useState)(null);return(0,b.jsxs)(i,{value:e,onChange:e=>{t(e.target.value)},children:[(0,b.jsx)(o,{value:!0,children:`True`}),(0,b.jsx)(o,{value:!1,children:`False`})]})},play:async({canvasElement:e})=>{let t=f(e);await h(t,2),await g(t,0),await S(()=>{x(t.value).toBe(!0)}),await g(t,1),await S(()=>{x(t.value).toBe(!1)})}},$={render:e=>{let{value:t}=e,[n,r]=(0,y.useState)([]);return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(i,{value:t,label:`missing option`,message:`value is already set but options are not available when option available value will be set`,children:n.map(e=>(0,b.jsx)(o,{value:e,children:e.name}))}),(0,b.jsx)(te,{onClick:()=>r(d),children:`Fill Option`})]})},args:{value:d[3]},play:async({canvasElement:e,args:t})=>{let n=f(e),r=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(`Fill Option`));x(r).toBeTruthy(),x(n.optionListWithOrder.length).toBe(0),await ve.click(r),await h(n,d.length),await S(()=>{x(n.value).toEqual(t.value),x(m(n)).toContain(d[3].name)})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    const options = await waitForOptions<number>(select, 2);
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
    const options = await waitForOptions<number>(select, 2);
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
}`,...$.parameters?.docs?.source}}},ye=`Normal.Multiple.MultipleWithOptionList.MultipleWithCheckbox.MultipleWithCheckboxAndLabel.MultipleWithValue.WithValue.Disabled.FixedPopoverPosition.OptionObject.HideCleanButton.OptionAsChildren.OptionObjectAsChildren.Required.SizeVariants.OverflowTest.FixedPopoverInScrollableContainer.FixedPopoverInPositionedContainer.EventTest.RTL.EmptyList.PopoverHeight.WithError.DynamicList.CustomOption.CustomSelectedValueRender.CustomOptionRender.JBSelectDesignTest.BooleanValue.MissingOption`.split(`.`)}));be();export{Q as BooleanValue,J as CustomOption,X as CustomOptionRender,Y as CustomSelectedValueRender,j as Disabled,q as DynamicList,W as EmptyList,H as EventTest,V as FixedPopoverInPositionedContainer,B as FixedPopoverInScrollableContainer,M as FixedPopoverPosition,P as HideCleanButton,Z as JBSelectDesignTest,$ as MissingOption,T as Multiple,D as MultipleWithCheckbox,O as MultipleWithCheckboxAndLabel,E as MultipleWithOptionList,k as MultipleWithValue,w as Normal,F as OptionAsChildren,N as OptionObject,I as OptionObjectAsChildren,z as OverflowTest,G as PopoverHeight,U as RTL,L as Required,R as SizeVariants,K as WithError,A as WithValue,ye as __namedExportsOrder,C as default,be as n,_e as t};