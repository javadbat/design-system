import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as ee}from"./iframe-CnJHCP0O.js";import{r as te,t as ne}from"./react-CV1Vw51s.js";import{a as i,n as a,r as o,t as re}from"./react-BAX-E7Gt.js";import{n as ie,t as ae}from"./react-y2jToAwm.js";import{a as s,i as oe,n as se,r as c,t as l}from"./constants-7kQhF6ve.js";var ce=t((()=>{}));function u(e,t=0){let n=e.querySelectorAll(`jb-select`)[t];return g(n).toBeTruthy(),g(n.shadowRoot).toBeTruthy(),n}function d(e){let t=e.shadowRoot?.querySelector(`.search-input`);return g(t).toBeTruthy(),t}function f(e){return e.shadowRoot?.querySelector(`.selected-value-wrapper`)?.textContent?.trim()??``}function le(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function ue(e){let t=e.shadowRoot?.querySelector(`.clear-button`);return g(t).toBeTruthy(),t}function p(e){let t=e.shadowRoot?.querySelector(`.select-list-wrapper`);return g(t).toBeTruthy(),t}function de(e){let t=p(e).shadowRoot?.querySelector(`.jb-popover-web-component`);return g(t).toBeTruthy(),t}async function m(e,t=1){return await _(()=>{g(e.optionListWithOrder.length).toBeGreaterThanOrEqual(t)}),e.optionListWithOrder}async function h(e,t){let n=await m(e,t+1);return n[t].toggleOption(),n[t]}async function fe(e,t){let n=d(e);e.focus(),await me.type(n,t),await _(()=>{g(e.textValue).toBe(t)})}async function pe(e){let t=[`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`change`,`invalid`],n=[],r=document.createElement(`jb-select`);r.setAttribute(`required`,``);for(let e of t)r.addEventListener(e,()=>n.push(e));for(let e of[`alpha`,`beta`]){let t=document.createElement(`jb-option`);t.value=e,t.textContent=e,r.appendChild(t)}return e.appendChild(r),await _(()=>{g(n).toEqual(g.arrayContaining([`load`,`init`]))}),await m(r,2),{select:r,events:n}}var g,me,_,he=t((()=>{({expect:g,userEvent:me,waitFor:_}=__STORYBOOK_MODULE_TEST__)})),ge=e({BooleanValue:()=>Z,CustomOption:()=>q,CustomOptionRender:()=>Y,CustomSelectedValueRender:()=>J,Disabled:()=>A,DynamicList:()=>K,EmptyList:()=>U,EventTest:()=>V,FixedPopoverInPositionedContainer:()=>B,FixedPopoverInScrollableContainer:()=>z,FixedPopoverPosition:()=>j,HideCleanButton:()=>N,JBSelectDesignTest:()=>X,MissingOption:()=>Q,Multiple:()=>w,MultipleWithCheckbox:()=>E,MultipleWithCheckboxAndLabel:()=>D,MultipleWithOptionList:()=>T,MultipleWithValue:()=>O,Normal:()=>C,OptionAsChildren:()=>P,OptionObject:()=>M,OptionObjectAsChildren:()=>F,OverflowTest:()=>R,PopoverHeight:()=>W,RTL:()=>H,Required:()=>I,SizeVariants:()=>L,WithError:()=>G,WithValue:()=>k,__namedExportsOrder:()=>$,default:()=>S}),v,y,b,_e,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ve=t((()=>{r(),v=n(r(),1),re(),ne(),ce(),se(),ae(),he(),y=ee(),{expect:b,userEvent:_e,waitFor:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/form elements/JBSelect`,component:a,args:{children:(0,y.jsx)(i,{optionList:c})}},C={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`},play:async({canvasElement:e})=>{let t=u(e);await m(t,1);let n=await h(t,0);await x(()=>{b(t.value).toBe(c[0]),b(n.selected).toBe(!0),b(f(t)).toContain(c[0])})}},w={render:()=>(0,y.jsx)(a,{multiple:!0,children:s.map(e=>(0,y.jsx)(o,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),play:async({canvasElement:e})=>{let t=u(e),n=await m(t,2);await h(t,0),await h(t,1),await x(()=>{b(t.value).toEqual([s[0].userId,s[1].userId]),b(n[0].selected).toBe(!0),b(n[1].selected).toBe(!0)}),n[0].toggleOption(),await x(()=>{b(t.value).toEqual([s[1].userId]),b(n[0].selected).toBe(!1),b(n[1].selected).toBe(!0)})}},T={render:()=>(0,y.jsx)(a,{multiple:!0,label:`Assignees`,placeholder:`Choose one or more people`,children:(0,y.jsx)(i,{optionList:s,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),play:async({canvasElement:e})=>{let t=u(e),n=await m(t,2);await h(t,0),await h(t,1),await x(()=>{b(t.value).toEqual([s[0].userId,s[1].userId])}),n[0].toggleOption(),await x(()=>{b(t.value).toEqual([s[1].userId])})}},E={render:()=>(0,y.jsx)(a,{multiple:!0,children:s.map(e=>(0,y.jsxs)(o,{value:e.userId,children:[(0,y.jsx)(ie,{size:`sm`}),(0,y.jsx)(`span`,{children:`${e.name} ${e.family}`})]},e.userId))}),play:async({canvasElement:e})=>{let t=u(e),n=await m(t,1),r=n[0].querySelector(`jb-checkbox`);await h(t,0),await x(()=>{b(t.value).toEqual([s[0].userId]),b(r.value).toBe(!0)}),n[0].toggleOption(),await x(()=>{b(t.value).toEqual([]),b(r.value).toBe(!1)})}},D={render:()=>(0,y.jsx)(a,{multiple:!0,children:s.map(e=>(0,y.jsx)(o,{value:e.userId,children:(0,y.jsx)(ie,{size:`sm`,children:(0,y.jsx)(`div`,{slot:`label`,children:`${e.name} ${e.family}`})})},e.userId))})},O={render:e=>{let[t,n]=(0,v.useState)(e.value);return(0,v.useEffect)(()=>{n(e.value)},[e.value]),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,y.jsx)(a,{multiple:!0,value:t,onChange:e=>n(e.target.value),children:s.map(e=>(0,y.jsx)(o,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),(0,y.jsx)(te,{size:`sm`,onClick:()=>console.log(t),children:`Log Value (see console)`})]})},args:{value:[...s.filter((e,t)=>t%2==0).map(e=>e.userId)]},play:async({canvasElement:e,args:t})=>{let n=u(e);await m(n,s.length),await x(()=>{b(n.value).toEqual(t.value),b(f(n)).toContain(s[0].name)})}},k={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,value:c[3],children:(0,y.jsx)(i,{optionList:c})},play:async({canvasElement:e,args:t})=>{let n=u(e);await m(n,1),await x(()=>{b(n.value).toBe(t.value),b(f(n)).toContain(String(t.value))})}},A={args:{label:`select from menu`,message:`please select a value`,value:c[3],disabled:!0},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=p(t);t.focus(),await x(()=>{b(t.disabled).toBe(!0),b(n.disabled).toBe(!0),b(r.isOpen).toBe(!1)})}},j={args:{label:`fixed`,message:`open select and see popover(only works in a desktop)`,popoverPosition:`fixed`},play:async({canvasElement:e})=>{let t=u(e),n=de(t);await m(t,1),t.focus(),await x(()=>{b(p(t).isOpen).toBe(!0),b(n.style.position).toBe(`fixed`)})}},M={args:{label:`select from menu`,children:(0,y.jsx)(i,{optionList:[{name:`peter`,family:`hanan`,userId:1},{name:`reza`,family:`asadi`,userId:2}],getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId}),onChange:e=>{console.log(`onChange`,e.target.value)}},play:async({canvasElement:e})=>{let t=u(e),n=await m(t,2);b(n[0].optionContentText).toBe(`peter hanan`),b(n[0].value).toBe(1),await fe(t,`peter`),await x(()=>{b(n[0].hidden).toBe(!1),b(n[1].hidden).toBe(!0)}),n[0].toggleOption(),await x(()=>{b(t.value).toBe(1),b(f(t)).toContain(`peter hanan`)})}},N={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,hideClear:!0},play:async({canvasElement:e})=>{let t=u(e);await x(()=>{b(ue(t).style.display).toBe(`none`)})}},P={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{value:`1`,children:`one`}),(0,y.jsx)(o,{value:`2`,children:`two`}),(0,y.jsx)(o,{value:`3`,children:`three`}),(0,y.jsx)(o,{value:`4`,children:`four`}),(0,y.jsx)(o,{value:`5`,children:`five`}),(0,y.jsx)(o,{value:`6`,children:`six`}),(0,y.jsx)(o,{value:`7`,children:`seven`}),(0,y.jsx)(o,{value:`8`,children:`eight`}),(0,y.jsx)(o,{value:`9`,children:`nine`}),(0,y.jsx)(o,{value:`10`,children:`ten`})]})}},F={args:{label:`select from menu`,message:`please select a value`,placeholder:`select number here`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{value:{name:`ali`,age:10},children:`Ali`}),(0,y.jsx)(o,{value:{name:`reza`,age:12},children:`Reza`}),(0,y.jsx)(o,{value:{name:`joe`,age:14},children:`Joe`})]})},play:async({canvasElement:e})=>{let t=u(e),n=await m(t,1);await h(t,0),await x(()=>{b(t.value).toEqual(n[0].value),b(f(t)).toContain(`Ali`)})}},I={args:{label:`required select`,message:`focus and un focus without selecting a value to see validation error`,required:!0}},L={render:()=>{let e=(0,y.jsx)(v.Fragment,{children:s.map(e=>(0,y.jsx)(o,{value:e,children:e.name},e.userId))});return(0,y.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,y.jsx)(a,{size:`xl`,label:`xl size`,message:`message underneath`}),(0,y.jsx)(a,{size:`xl`,label:`xl size`,placeholder:`placeholder`,children:e}),(0,y.jsx)(a,{size:`xl`,label:`xl size`,value:s[0],children:e}),(0,y.jsx)(a,{size:`lg`,label:`lg size`,message:`message underneath`}),(0,y.jsx)(a,{size:`lg`,label:`lg size`,placeholder:`placeholder`,children:e}),(0,y.jsx)(a,{size:`lg`,label:`lg size`,value:s[0],children:e}),(0,y.jsx)(a,{size:`md`,label:`md size`,message:`message underneath`}),(0,y.jsx)(a,{size:`md`,label:`md size`,placeholder:`placeholder`,children:e}),(0,y.jsx)(a,{size:`md`,label:`md size`,value:s[0],children:e}),(0,y.jsx)(a,{size:`sm`,label:`sm size`,message:`message underneath`}),(0,y.jsx)(a,{size:`sm`,label:`sm size`,placeholder:`placeholder`,children:e}),(0,y.jsx)(a,{size:`sm`,label:`sm size`,value:s[0],children:e}),(0,y.jsx)(a,{size:`xs`,label:`xs size`,message:`message underneath`}),(0,y.jsx)(a,{size:`xs`,label:`xs size`,placeholder:`placeholder`,children:e}),(0,y.jsx)(a,{size:`xs`,label:`xs size`,value:s[0],children:e})]})}},R={render:()=>(0,y.jsxs)(`div`,{style:{height:`10rem`,overflowY:`auto`},children:[(0,y.jsx)(a,{label:`overflow test`,style:{width:`10rem`},popoverPosition:`fixed`,children:s.map(e=>(0,y.jsx)(o,{value:e,children:e.name},e.userId))}),(0,y.jsx)(`div`,{style:{height:`20rem`,background:`red`}})]})},z={render:()=>(0,y.jsxs)(`div`,{style:{height:`14rem`,maxWidth:`28rem`,overflowY:`auto`,border:`1px solid #94a3b8`,borderRadius:`0.5rem`,padding:`1rem`,background:`#f8fafc`},children:[(0,y.jsx)(`p`,{style:{margin:`0 0 8rem`},children:`Scroll this panel, then open each select near an edge to compare their popovers.`}),(0,y.jsx)(a,{label:`Default absolute popover`,placeholder:`Choose a person`,style:{width:`16rem`,marginBottom:`1rem`},children:(0,y.jsx)(i,{optionList:s,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,y.jsx)(a,{label:`Fixed popover`,placeholder:`Choose a person`,popoverPosition:`fixed`,style:{width:`16rem`},children:(0,y.jsx)(i,{optionList:s,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,y.jsx)(`div`,{style:{height:`16rem`}})]})},B={render:()=>(0,y.jsxs)(`div`,{style:{position:`relative`,maxWidth:`28rem`,overflow:`hidden`,border:`1px solid #a78bfa`,borderRadius:`0.5rem`,padding:`1rem`,background:`#faf5ff`},children:[(0,y.jsx)(`p`,{style:{marginTop:0},children:`This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.`}),(0,y.jsxs)(a,{label:`Environment`,placeholder:`Choose an environment`,popoverPosition:`fixed`,style:{width:`16rem`},children:[(0,y.jsx)(o,{value:`development`,children:`Development`}),(0,y.jsx)(o,{value:`staging`,children:`Staging`}),(0,y.jsx)(o,{value:`production`,children:`Production`})]})]})},V={render:()=>(0,y.jsxs)(a,{label:`event test`,required:!0,children:[(0,y.jsx)(o,{value:`alpha`,children:`alpha`}),(0,y.jsx)(o,{value:`beta`,children:`beta`})]}),play:async({canvasElement:e})=>{let{select:t,events:n}=await pe(e),r=d(t);b(t.reportValidity()).toBe(!1),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`a`,bubbles:!0})),r.value=`a`,r.dispatchEvent(new InputEvent(`input`,{data:`a`,inputType:`insertText`,bubbles:!0,composed:!0})),r.dispatchEvent(new KeyboardEvent(`keyup`,{key:`a`,bubbles:!0})),await x(()=>{b(t.textValue).toBe(`a`),b(n).toEqual(b.arrayContaining([`load`,`init`,`keypress`,`input`,`keyup`,`filter-change`,`invalid`]))}),await h(t,0),await x(()=>{b(t.value).toBe(`alpha`),b(n).toEqual(b.arrayContaining([`change`]))})}},H={globals:{locale:`fa`,dir:`rtl`},args:{label:`از منو انتخاب کنید`,children:(0,y.jsx)(i,{optionList:oe})},parameters:{docs:{description:{story:`RTL test`}}}},U={args:{label:`empty list`,message:`this list is a empty list`,children:(0,y.jsx)(i,{optionList:[]})},play:async({canvasElement:e})=>{let t=u(e);t.focus(),await x(()=>{b(t.optionListWithOrder.length).toBe(0),b(t.shadowRoot?.querySelector(`.empty-list-placeholder`)?.textContent).toContain(`no item available`)})}},W={args:{label:`select from in mobile`,message:`put in mobile view and open menu. it must fill half of the page`,placeholder:`select number here`,children:(0,y.jsx)(i,{optionList:oe}),style:{"--jb-select-mobile-modal-height":`50vh`,"--jb-select-mobile-modal-border-radius":`1rem`}},play:async({canvasElement:e,args:t})=>{let n=u(e);await x(()=>{b(n.getAttribute(`style`)).toContain(`--jb-select-mobile-modal-height`),b(n.style.getPropertyValue(`--jb-select-mobile-modal-height`)).toBe(t.style[`--jb-select-mobile-modal-height`])})}},G={args:{label:`with error`,message:`please select a value`,error:`error message`},play:async({canvasElement:e,args:t})=>{let n=u(e);await x(()=>{b(n.reportValidity()).toBe(!1),b(le(n)).toBe(t.error)})}},K={render:()=>{let[e,t]=(0,v.useState)([]);function n(e=``){let n=[];for(let t=0;t<20;t++)n.push(`${e} - ${t}`);t(n)}return(0,v.useEffect)(()=>{n()},[]),(0,y.jsx)(`div`,{children:(0,y.jsx)(a,{label:`please type and see result change`,onKeyUp:function(e){let t=e.target.textValue;n(t)},children:(0,y.jsx)(i,{optionList:e})})})},play:async({canvasElement:e})=>{let t=u(e);await m(t,20),await fe(t,`new`),await x(()=>{b(t.optionListWithOrder[0].optionContentText).toBe(`new - 0`)})}},q={args:{label:`Color List`,children:(0,y.jsx)(y.Fragment,{children:l.map(e=>(0,y.jsxs)(o,{value:e,children:[(0,y.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})}},J={args:{label:`Color List With Custom Selected Value Render`,message:`please select a value and see the result`,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
        <span part="color-box" style="background-color:${e.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${e.name}</span>
      `,t},children:(0,y.jsx)(y.Fragment,{children:l.map(e=>(0,y.jsxs)(o,{value:e,children:[(0,y.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})},play:async({canvasElement:e})=>{let t=u(e);await m(t,1),await h(t,0),await x(()=>{b(f(t)).toContain(`Color ${l[0].name}`),b(t.shadowRoot?.querySelector(`[part="color-box"]`)).toBeTruthy()})}},Y={args:{label:`Color List With Custom Option Render callback`,message:`here we render color list with callback function `,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t},children:(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(i,{optionList:l,getTitle:e=>e.name,getContentDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t}})})},play:async({canvasElement:e})=>{let t=u(e);b((await m(t,1))[0].textContent).toContain(`Color ${l[0].name}`),await h(t,0),await x(()=>{b(f(t)).toContain(`Color ${l[0].name}`)})}},X={render:()=>{function e(e){let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`<span part="color-box" style="background-color:`+e.value+`;width:16px;height:16px"></span>&nbsp;`+e.name,t}return(0,y.jsx)(`div`,{className:`select-custom-design`,children:(0,y.jsxs)(a,{searchPlaceholder:`search color`,getSelectedValueDOM:e,children:[l.map(e=>(0,y.jsxs)(o,{value:e,children:[(0,y.jsx)(`span`,{className:`color-circle`,style:{backgroundColor:e.value}}),e.name]},e.value)),(0,y.jsx)(`div`,{style:{height:`24px`},slot:`select-arrow-icon`,children:(0,y.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,y.jsx)(`title`,{children:`arrow icon`}),(0,y.jsx)(`rect`,{width:`24`,height:`24`,rx:`5`,fill:`#E7E7E7`}),(0,y.jsx)(`path`,{d:`M19 8.5L12 15.5L5 8.5`,stroke:`#8B8B8B`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})})}},Z={render:()=>{let[e,t]=(0,v.useState)(null);return(0,y.jsxs)(a,{value:e,onChange:e=>{t(e.target.value)},children:[(0,y.jsx)(o,{value:!0,children:`True`}),(0,y.jsx)(o,{value:!1,children:`False`})]})},play:async({canvasElement:e})=>{let t=u(e);await m(t,2),await h(t,0),await x(()=>{b(t.value).toBe(!0)}),await h(t,1),await x(()=>{b(t.value).toBe(!1)})}},Q={render:e=>{let{value:t}=e,[n,r]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(a,{value:t,label:`missing option`,message:`value is already set but options are not available when option available value will be set`,children:n.map(e=>(0,y.jsx)(o,{value:e,children:e.name}))}),(0,y.jsx)(te,{onClick:()=>r(s),children:`Fill Option`})]})},args:{value:s[3]},play:async({canvasElement:e,args:t})=>{let n=u(e),r=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(`Fill Option`));b(r).toBeTruthy(),b(n.optionListWithOrder.length).toBe(0),await _e.click(r),await m(n,s.length),await x(()=>{b(n.value).toEqual(t.value),b(f(n)).toContain(s[3].name)})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    const options = await waitForOptions<number>(select, 1);
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List With Custom Selected Value Render",
    message: "please select a value and see the result",
    getSelectedValueDOM: option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = /*html */\`
        <span part="color-box" style="background-color:\${option.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List With Custom Option Render callback",
    message: "here we render color list with callback function ",
    getSelectedValueDOM: option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = /*html */\`
              <span style="background-color:\${option.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color \${option.name}</span>
            \`;
      return optionElement;
    },
    children: <>
      {<JBOptionList optionList={colorList} getTitle={option => option.name} getContentDOM={option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("selected-value");
        optionElement.innerHTML = /*html */\`
              <span style="background-color:\${option.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    function getSelectedValueDOM(option: any) {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = '<span part="color-box" style="background-color:' + option.value + ';width:16px;height:16px"></span>' + "&nbsp;" + option.name;
      return optionElement;
    }
    return <div className="select-custom-design">
        <JBSelect searchPlaceholder="search color" getSelectedValueDOM={getSelectedValueDOM}>
          {colorList.map(o => <JBOption value={o} key={o.value}><span className="color-circle" style={{
            backgroundColor: o.value
          }}></span>{o.name}</JBOption>)}
          <div style={{
          height: "24px"
        }} slot="select-arrow-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <title>arrow icon</title>
              <rect width="24" height="24" rx="5" fill="#E7E7E7" />
              <path d="M19 8.5L12 15.5L5 8.5" stroke="#8B8B8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </JBSelect>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=`Normal.Multiple.MultipleWithOptionList.MultipleWithCheckbox.MultipleWithCheckboxAndLabel.MultipleWithValue.WithValue.Disabled.FixedPopoverPosition.OptionObject.HideCleanButton.OptionAsChildren.OptionObjectAsChildren.Required.SizeVariants.OverflowTest.FixedPopoverInScrollableContainer.FixedPopoverInPositionedContainer.EventTest.RTL.EmptyList.PopoverHeight.WithError.DynamicList.CustomOption.CustomSelectedValueRender.CustomOptionRender.JBSelectDesignTest.BooleanValue.MissingOption`.split(`.`)}));ve();export{Z as BooleanValue,q as CustomOption,Y as CustomOptionRender,J as CustomSelectedValueRender,A as Disabled,K as DynamicList,U as EmptyList,V as EventTest,B as FixedPopoverInPositionedContainer,z as FixedPopoverInScrollableContainer,j as FixedPopoverPosition,N as HideCleanButton,X as JBSelectDesignTest,Q as MissingOption,w as Multiple,E as MultipleWithCheckbox,D as MultipleWithCheckboxAndLabel,T as MultipleWithOptionList,O as MultipleWithValue,C as Normal,P as OptionAsChildren,M as OptionObject,F as OptionObjectAsChildren,R as OverflowTest,W as PopoverHeight,H as RTL,I as Required,L as SizeVariants,G as WithError,k as WithValue,$ as __namedExportsOrder,S as default,ve as n,ge as t};