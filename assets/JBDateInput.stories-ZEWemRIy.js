import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{q as r,t as i}from"./iframe-BmqQnRJW.js";import{r as a,t as ee}from"./react-DaCNG6F2.js";import{i as te,n as o,t as ne}from"./main-DxkQ482O.js";import{t as re}from"./style-forest-CH9rw81m.js";import{t as ie}from"./style-forest-D9A1oZwc.js";var ae=t((()=>{}));function s(e,t=0){let n=e.querySelectorAll(`jb-date-input`)[t];return l(n).toBeTruthy(),l(n.shadowRoot).toBeTruthy(),n}function oe(e){let t=e.elements.input.shadowRoot?.querySelector(`input`);return l(t).toBeTruthy(),t}function c(e){let t=e.elements.calendar;return l(t).toBeTruthy(),l(t.shadowRoot).toBeTruthy(),t}function se(e){return e.shadowRoot}function ce(e,t){let n=se(e).querySelector(`.current-month-day-wrapper .day-wrapper[day-number="${t}"]`);return l(n).toBeTruthy(),n}function le(e){return Array.from(se(e).querySelectorAll(`.month-selection-section .month-name`)).map(e=>e.textContent)}function ue(e){return e.elements.input.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function de(e){return/[۰-۹]/.test(e)}var l,fe=t((()=>{({expect:l}=__STORYBOOK_MODULE_TEST__)})),pe=e({AlignCenter:()=>D,CustomFormat:()=>E,CustomMonthName:()=>j,Disabled:()=>N,EventTest:()=>$,ExplicitNullValueDoesNotFallBackToInitialValue:()=>b,Gregorian:()=>C,GregorianInputTest:()=>K,GregorianMinMaxTest:()=>B,Headless:()=>J,ImperativeMethods:()=>_,InFormTest:()=>Q,InitialValue:()=>v,InitialValueDoesNotOverrideValue:()=>y,Jalali:()=>S,JalaliMinMaxTest:()=>H,JalaliMinMaxTestWithCustomFormat:()=>U,JalaliTest:()=>V,JalaliWithPersianSetup:()=>T,Normal:()=>g,OverflowWithinParent:()=>F,PersianNumber:()=>A,Placeholder:()=>O,RejectedTimestampDoesNotBlockInitialValue:()=>x,Required:()=>M,RightToLeftTest:()=>q,SizeVariants:()=>w,TimeStampMinMaxTest:()=>G,TimeStampTest:()=>W,ValueSetGet:()=>L,ValueTypeTest:()=>z,WithCustomIcon:()=>Y,WithDefaultCalendarDate:()=>k,WithInlineSections:()=>Z,WithOverflowHandler:()=>P,WithoutIcon:()=>X,__namedExportsOrder:()=>be,default:()=>ye,sizeTest:()=>R,withError:()=>I}),me,u,he,ge,_e,d,f,p,m,h,ve,ye,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,be,xe=t((()=>{me=n(r(),1),ne(),ae(),ie(),re(),u=n(r(),1),he=n(r(),1),ge=n(r(),1),_e=n(r(),1),ee(),fe(),d=i(),{expect:f,fn:p,userEvent:m,waitFor:h,within:ve}=__STORYBOOK_MODULE_TEST__,ye={title:`Components/form elements/Inputs/JBDateInput`,component:o,argTypes:{inputType:{control:{type:`select`},options:[`GREGORIAN`,`JALALI`]}}},g={args:{label:`date`}},_={args:{label:`Imperative API`},play:async({canvasElement:e})=>{let t=s(e),n=oe(t),r=c(t);await h(()=>f(t.elements.input).toBeTruthy()),t.setFormat(`YYYY/MM/DD`),t.value=`2024/01/15`,t.setMinDate(`2024/01/01`),t.setMaxDate(`2024/12/31`),f(t.valueFormat).toBe(`YYYY/MM/DD`),f(t.value).toBe(`2024/01/15`),f(t.dateRestrictions.min).toBeInstanceOf(Date),f(t.dateRestrictions.max).toBeInstanceOf(Date),f(t.getDateValue(`GREGORIAN`)).toBe(`2024/01/15`),t.setMonthList(`JALALI`,Array.from({length:12},(e,t)=>`Month ${t+1}`)),t.setSelectionRange(0,4),f(n.selectionStart).toBe(0),f(n.selectionEnd).toBe(4),t.value=``,t.inputType=`JALALI`,t.setCalendarDefaultDateView(1360,5,`JALALI`),t.isOpen=!0,await h(()=>{f(r.data.selectedYear).toBe(1360),f(r.data.selectedMonth).toBe(5)}),t.required=!0,t.value=``,f(t.checkValidity()).toBe(!1),f(t.reportValidity()).toBe(!1),t.clearValidationError(),t.focus(),f(document.activeElement).toBe(t)}},v={render:e=>{let t=(0,me.useRef)(null);return(0,d.jsxs)(`form`,{ref:t,children:[(0,d.jsx)(o,{...e}),(0,d.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initialValueTest`,message:`An initial value should be set by default`,initialValue:`2024-02-29T00:00:00.000Z`,inputType:`GREGORIAN`},play:async({canvasElement:e,args:t})=>{let n=s(e),r=oe(n),i=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);f(i).toBeTruthy(),await h(()=>{f(n.initialValue).toBe(t.initialValue),f(n.value).toBe(t.initialValue),f(r.value).not.toBe(``),f(n.isDirty).toBe(!1)});let a=c(n);n.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),a.data.selectedYear=2024,a.data.selectedMonth=3,await m.click(ce(a,2)),await h(()=>{f(n.value).toBe(t.initialValue),f(n.isDirty).toBe(!1)}),n.initialValue=`2024-03-01T00:00:00.000Z`,await h(()=>{f(n.value).toBe(`2024-03-01T00:00:00.000Z`),f(n.isDirty).toBe(!1)}),n.value=new Date(NaN),n.value=`invalid-date`,n.initialValue=`2024-03-03T00:00:00.000Z`,await h(()=>{f(n.initialValue).toBe(`2024-03-03T00:00:00.000Z`),f(n.value).toBe(`2024-03-03T00:00:00.000Z`),f(n.isDirty).toBe(!1)}),n.value=`2024-03-02T00:00:00.000Z`,await h(()=>{f(n.value).toBe(`2024-03-02T00:00:00.000Z`),f(n.isDirty).toBe(!0)}),n.initialValue=null,await h(()=>{f(n.initialValue).toBeNull(),f(n.value).toBe(`2024-03-02T00:00:00.000Z`),f(n.isDirty).toBe(!0)}),await m.click(i),await h(()=>{f(n.value).toBe(`0000-00-00T00:00:00.000Z`),f(n.isDirty).toBe(!1)}),n.value=`2025-03-20T00:00:00.000Z`,n.initialValue=`2026-03-20T00:00:00.000Z`,await h(()=>{f(n.initialValue).toBe(`2026-03-20T00:00:00.000Z`),f(n.value).toBe(`2025-03-20T00:00:00.000Z`),f(n.isDirty).toBe(!0)}),await m.click(i),await h(()=>{f(n.value).toBe(`2026-03-20T00:00:00.000Z`),f(n.initialValue).toBe(n.value),f(n.isDirty).toBe(!1)})}},y={args:{initialValue:`2024-02-29T00:00:00.000Z`,value:`2025-03-20T00:00:00.000Z`,inputType:`GREGORIAN`},play:async({canvasElement:e})=>{let t=s(e);await h(()=>{f(t.value).toBe(`2025-03-20T00:00:00.000Z`),f(t.isDirty).toBe(!0)})}},b={args:{initialValue:`2024-02-29T00:00:00.000Z`,value:null},play:async({canvasElement:e})=>{let t=s(e);await h(()=>{f(t.value).toBe(`0000-00-00T00:00:00.000Z`),f(t.isDirty).toBe(!0)})}},x={args:{valueType:`TIME_STAMP`,inputType:`GREGORIAN`,initialValue:`1709164800000`},play:async({canvasElement:e})=>{let t=s(e);await h(()=>{f(t.value).toBe(`1709164800000`),f(t.isDirty).toBe(!1)}),t.value=`not-a-timestamp`,t.initialValue=`1709251200000`,await h(()=>{f(t.initialValue).toBe(`1709251200000`),f(t.value).toBe(`1709251200000`),f(t.isDirty).toBe(!1)})}},S={args:{label:`jalali date`,inputType:`JALALI`}},C={args:{label:`gregorian date`,inputType:`GREGORIAN`},play:async({canvasElement:e})=>{let t=s(e),n=oe(t);await m.click(n),await m.type(n,`2024/02/29`),await h(()=>{f(t.isOpen).toBe(!0),f(c(t).inputType).toBe(`GREGORIAN`),f(t.displayValue).toBe(`2024/02/29`)});let r=t.value;t.initialValue=`2025-03-20T00:00:00.000Z`,await h(()=>{f(t.value).toBe(r)})}},w={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,d.jsx)(o,{label:`xl size`,message:`message underneath`,size:`xl`}),(0,d.jsx)(o,{label:`xl size`,placeholder:`placeholder`,size:`xl`}),(0,d.jsx)(o,{label:`xl size`,value:`2021-08-03T00:00:00.000Z`,size:`xl`}),(0,d.jsx)(o,{label:`lg size`,message:`message underneath`,size:`lg`}),(0,d.jsx)(o,{label:`lg size`,placeholder:`placeholder`,size:`lg`}),(0,d.jsx)(o,{label:`lg size`,value:`2021-08-03T00:00:00.000Z`,size:`lg`}),(0,d.jsx)(o,{label:`md size`,message:`message underneath`,size:`md`}),(0,d.jsx)(o,{label:`md size`,placeholder:`placeholder`,size:`md`}),(0,d.jsx)(o,{label:`md size`,value:`2021-08-03T00:00:00.000Z`,size:`md`}),(0,d.jsx)(o,{label:`sm size`,message:`message underneath`,size:`sm`}),(0,d.jsx)(o,{label:`sm size`,placeholder:`placeholder`,size:`sm`}),(0,d.jsx)(o,{label:`sm size`,value:`2021-08-03T00:00:00.000Z`,size:`sm`}),(0,d.jsx)(o,{label:`xs size`,message:`message underneath`,size:`xs`}),(0,d.jsx)(o,{label:`xs size`,placeholder:`placeholder`,size:`xs`}),(0,d.jsx)(o,{label:`xs size`,value:`2021-08-03T00:00:00.000Z`,size:`xs`})]})},T={globals:{locale:`fa`,dir:`rtl`},args:{label:`ØªØ§Ø±ÛŒØ® Ø¬Ù„Ø§Ù„ÛŒ`,inputType:`JALALI`,dir:`rtl`,showPersianNumber:!0,message:`ØªØ§Ø±ÛŒØ® Ø¬Ù„Ø§Ù„ÛŒ Ø¨Ø§ Ø§Ø¹Ø¯Ø§Ø¯ ÙØ§Ø±Ø³ÛŒ Ùˆ Ø¨Ù‡ ØµÙˆØ±Øª Ø±Ø§Ø³Øª Ø¨Ù‡ Ú†Ù¾`},play:async({canvasElement:e})=>{let t=s(e),n=oe(t),r=c(t);await m.click(n),await m.type(n,`1402/05/12`),await h(()=>{f(t.showPersianNumber).toBe(!0),f(r.showPersianNumber).toBe(!0),f(de(t.displayValue)).toBe(!0),f(de(se(r).querySelector(`.navigator-title .year`)?.textContent??``)).toBe(!0)})}},E={render:e=>{let[t,n]=(0,u.useState)(``),[r,i]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h2`,{children:`input.value in different format`}),(0,d.jsx)(`p`,{children:`try to input some value inside date-input and see the changes in the paragraphs below`}),(0,d.jsx)(o,{label:`value with arguments format(${e.format})`,format:e.format,value:t,onChange:e=>n(e.target.value)}),(0,d.jsxs)(`p`,{children:[`your inputted value is: `,t]}),(0,d.jsx)(o,{label:`value with YYYY-MM-DD format`,format:`YYYY-MM-DD format`,value:r,onChange:e=>i(e.target.value)}),(0,d.jsxs)(`p`,{children:[`your inputted value is: `,r]})]})},args:{format:`YYYY/MM/DD`},play:async({canvasElement:e,args:t})=>{let n=s(e);n.value=`2023/08/03`,await h(()=>{f(n.value).toMatch(/^\d{4}\/\d{2}\/\d{2}$/),f(t.format).toBe(`YYYY/MM/DD`)})}},D={args:{label:`Align Center`,style:{"--jb-input-input-text-align":`center`}}},O={args:{label:`date`,placeholder:`please enter your date`,dir:`ltr`}},k={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,format:`YYYY/MM/DD`,dir:`ltr`,calendarDefaultDateView:{year:1360,month:5}},play:async({canvasElement:e})=>{let t=s(e),n=c(t);t.isOpen=!0,await h(()=>{f(n.data.selectedYear).toBe(1360),f(n.data.selectedMonth).toBe(5),f(n.activeSection).toBe(`DAY`)})}},A={args:{label:`with persian number`,valueType:`GREGORIAN`,inputType:`JALALI`,format:`YYYY/MM/DD`,dir:`ltr`,showPersianNumber:!0,calendarDefaultDateView:{year:1360,month:5}},play:async({canvasElement:e})=>{let t=s(e),n=c(t);t.value=`1360/05/12`,t.isOpen=!0,await h(()=>{f(t.showPersianNumber).toBe(!0),f(de(t.displayValue)).toBe(!0),f(de(se(n).querySelector(`.navigator-title .year`)?.textContent??``)).toBe(!0)})}},j={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,jalaliMonthList:[`Ø­ÙŽÙ…ÙŽÙ„`,`Ø«ÙŽÙˆØ±`,`Ø¬ÙŽÙˆØ²Ø§`,`Ø³ÙŽØ±ÙŽØ·Ø§Ù†`,`Ø§ÙŽØ³ÙŽØ¯`,`Ø³ÙÙ†Ø¨ÙÙ„Ù‡`,`Ù…ÛŒØ²Ø§Ù†`,`Ø¹ÙŽÙ‚Ø±ÙŽØ¨`,`Ù‚ÙŽÙˆØ³`,`Ø¬ÙŽØ¯Ù’ÛŒ`,`Ø¯ÙŽÙ„Ùˆ`,`Ø­ÙˆØª`]},play:async({canvasElement:e,args:t})=>{let n=s(e),r=c(n),i=se(r);n.isOpen=!0,await m.click(i.querySelector(`.navigator-title .month`)),await h(()=>{f(le(r)).toEqual(t.jalaliMonthList)})}},M={args:{label:`required field`,message:`please focus and then unfocus the input to see require validation message`,required:!0,dir:`ltr`}},N={args:{label:`disabled field`,disabled:!0},play:async({canvasElement:e})=>{let t=s(e);await h(()=>{f(t.disabled).toBe(!0),f(oe(t).disabled).toBe(!0)})}},P={args:{label:`will jump on overflow`,overflowHandler:`SLIDE`}},F={render:e=>{let t=(0,me.useRef)(null);return(0,d.jsx)(`div`,{ref:t,style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,d.jsx)(o,{...e,overflowRef:t})})},args:{label:`will jump on overflow`,overflowHandler:`SLIDE`}},I={args:{label:`with default error`,error:`error message`,message:`default message`},play:async({canvasElement:e})=>{let t=s(e);await h(()=>{f(ue(t)).toBe(`error message`),f(t.reportValidity()).toBe(!1)}),t.removeAttribute(`error`),t.reportValidity(),await h(()=>{f(ue(t)).toBe(`default message`)})}},L={render:()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,d.jsx)(o,{value:e,onChange:e=>t(e.target.value)}),(0,d.jsx)(a,{onClick:()=>t(new Date),children:`set value to Today`})]})},play:async({canvasElement:e})=>{let t=ve(e),n=s(e);await m.click(t.getByText(`set value to Today`)),await h(()=>{f(n.value).not.toBe(``),f(n.displayValue).not.toBe(``),f(c(n).value.year).toBeTruthy()})}},R={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsx)(`h3`,{children:`parent full width`}),(0,d.jsx)(o,{})]}),(0,d.jsxs)(`div`,{style:{width:`50%`},children:[(0,d.jsx)(`h3`,{children:`parent percent width`}),(0,d.jsx)(o,{})]}),(0,d.jsxs)(`div`,{style:{width:`18.75rem`},children:[(0,d.jsx)(`h3`,{children:`parent pixel width`}),(0,d.jsx)(o,{})]}),(0,d.jsx)(`h3`,{children:`self full width`}),(0,d.jsx)(o,{style:{width:`100%`}}),(0,d.jsx)(`h3`,{children:`self percent width`}),(0,d.jsx)(o,{style:{width:`50%`}}),(0,d.jsx)(`h3`,{children:`self pixel width`}),(0,d.jsx)(o,{style:{width:`18.75rem`}}),(0,d.jsx)(`h3`,{children:`self pixel height`}),(0,d.jsx)(o,{style:{"--jb-input-height":`4.375rem`}})]}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-date-input`));await h(()=>{f(t[1].getBoundingClientRect().width).toBeCloseTo(t[1].parentElement.getBoundingClientRect().width,-1),f(t[2].getBoundingClientRect().width).toBeCloseTo(300,-1),f(t[5].getBoundingClientRect().width).toBeCloseTo(300,-1),f(t[6].getBoundingClientRect().height).toBeGreaterThanOrEqual(70)})}},z={render:e=>{let[t,n]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(o,{...e,onChange:e=>{n(e.target.value)}}),(0,d.jsx)(`div`,{children:(0,d.jsx)(`table`,{style:{margin:`1rem`},children:(0,d.jsxs)(`tbody`,{children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:`valueType is`}),(0,d.jsx)(`td`,{children:e.valueType})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:`inputType is`}),(0,d.jsx)(`td`,{children:e.inputType})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:`Min date is:`}),(0,d.jsx)(`td`,{children:e.min?e.min.toString():`Unlimited`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:`Max date is:`}),(0,d.jsx)(`td`,{children:e.max?e.max.toString():`Unlimited`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:`Your chosen date is:`}),(0,d.jsx)(`td`,{children:t})]})]})})})]})},args:{valueType:`GREGORIAN`,inputType:`GREGORIAN`,min:``,max:``}},B={...z,args:{valueType:`GREGORIAN`,inputType:`GREGORIAN`,min:`2020-09-05T08:51:23.176Z`,max:`2020-10-15T08:51:23.176Z`,dir:`ltr`}},V={render:e=>{let[t,n]=(0,u.useState)(``),[r,i]=(0,u.useState)(new Date),ee=[{validator:/^13.*$/g,message:`date must be in 13 century`},{validator:({valueObject:e})=>e.jalali.day>=15,message:`you can only choose 15th day of month`}];return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(o,{inputType:`JALALI`,name:`first-date-input`,value:t,onSelect:e=>{n(e.target.value)},onChange:e=>{n(e.target.value)},...e}),(0,d.jsx)(o,{inputType:`JALALI`,name:`first-date-input`,showPersianNumber:!0,value:t,label:`${e.label} Ø¨Ø§ Ø§Ø¹Ø¯Ø§Ø¯ ÙØ§Ø±Ø³ÛŒ `,onSelect:e=>{n(e.target.value)},onChange:e=>{n(e.target.value)},...e}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`valueType is `,e.valueType,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Min date is: `,e.min?e.min.toString():`Unlimited`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Max date is: `,e.max?e.max.toString():`Unlimited`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Your chosen date is: `,t,(0,d.jsx)(`br`,{}),(0,d.jsx)(a,{onClick:()=>{n(`1400-06-18T00:00:00.000Z`)},children:`set value to 1400-06-18T00:00:00.000Z`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(a,{onClick:()=>{n(`1399/08/09`)},children:`set value to 1399/08/09`})]}),(0,d.jsx)(`h3`,{children:`test custom validation`}),(0,d.jsx)(o,{inputType:`JALALI`,validationList:ee,value:t,onChange:e=>{n(e.target.value)},onSelect:e=>{n(e.target.value)},...e}),(0,d.jsx)(`h3`,{children:`test via JS Date type value`}),(0,d.jsx)(o,{inputType:`JALALI`,value:r,onChange:e=>i(e.target.valueAsDate)})]})},args:{label:`date`,valueType:`JALALI`,min:`1402-08-01T12:05:39.530Z`,max:`1402-09-01T12:05:39.530Z`}},H={...V,args:{label:`date`,valueType:`JALALI`,min:`1399-05-01T12:05:39.530Z`,max:`1400-08-01T12:05:39.530Z`},play:async({canvasElement:e})=>{let t=s(e),n=c(t);n.inputType=`JALALI`,n.data.selectedYear=1399,n.data.selectedMonth=4,await h(()=>{f(ce(n,30).classList.contains(`--disable`)).toBe(!0)});let r=t.value;await m.click(ce(n,30)),f(t.value).toBe(r),t.value=`1399-04-30T12:05:39.530Z`,t.reportValidity(),await h(()=>{f(t.checkValidity()).toBe(!1)})}},U={...V,args:{format:`YYYY/MM/DD`,label:`date`,valueType:`JALALI`,min:`1399/05/01`,max:`1400/08/01`}},W={render:e=>{let[t,n]=(0,u.useState)(null),r=(0,he.useMemo)(()=>t?new Date(Number(t)).toString():null,[t]);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(o,{value:t,valueType:`TIME_STAMP`,onChange:(0,ge.useCallback)(e=>{n(e.target.value)},[]),...e}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`valueType is `,e.valueType,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Min date is: `,e.min?e.min.toString():`Unlimited`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Max date is: `,e.max?e.max.toString():`Unlimited`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Your chosen date is: `,t,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Your chosen date in greg is: `,r]})]})},args:{label:`date`,valueType:`TIME_STAMP`},play:async({canvasElement:e})=>{let t=s(e),n=c(t);n.data.selectedYear=1402,n.data.selectedMonth=5,await m.click(ce(n,12)),await h(()=>{f(t.value).toMatch(/^\d+$/),f(Number(t.value)).toBeGreaterThan(0)});let r=t.value;t.initialValue=`0`,await h(()=>{f(t.value).toBe(r)})}},G={...W,args:{label:`date`,valueType:`TIME_STAMP`,min:`1596291030322`,max:`1696291030322`},play:async({canvasElement:e})=>{let t=s(e);t.value=`1577836800000`,t.reportValidity(),await h(()=>{f(t.checkValidity()).toBe(!1)})}},K={args:{label:`date`,valueType:`GREGORIAN`,inputType:`GREGORIAN`},play:async({canvasElement:e})=>{let t=s(e);t.value=`2024-02-29T00:00:00.000Z`,await h(()=>{f(t.inputType).toBe(`GREGORIAN`),f(t.valueType).toBe(`GREGORIAN`),f(t.value).toContain(`2024`),f(t.valueAsDate).toBeTruthy()})}},q={args:{label:`Ø±Ø§Ø³Øª Ø¨Ù‡ Ú†Ù¾`,dir:`rtl`}},J={render:e=>{let t=(0,me.useRef)(null),{value:n,onChange:r,onClick:i,onFocus:a}=te({dateInputType:`JALALI`,ref:t,showPersianNumber:!1});return(0,d.jsx)(`input`,{ref:t,value:n,onChange:r,onClick:i,onFocus:a})},name:`headless sample`,args:{},play:async({canvasElement:e})=>{let t=e.querySelector(`input`);f(t).toBeTruthy(),await m.click(t),await m.type(t,`1402/13/45`),await h(()=>{f(t.value).not.toContain(`13`),f(t.selectionStart).toBe(t.selectionEnd)}),await m.keyboard(`{Control>}a{/Control}{Backspace}`),await m.type(t,`1402/05/12`),await h(()=>{f(t.value).toBe(`1402/05/12`)})}},Y={render:e=>(0,d.jsx)(o,{...e,children:(0,d.jsx)(`div`,{slot:`calendar-trigger-icon`,style:{height:`100%`,aspectRatio:`1`},children:(0,d.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,x:`0px`,y:`0px`,viewBox:`0 0 610.398 610.398`,children:[(0,d.jsx)(`title`,{children:`calendar icon`}),(0,d.jsx)(`g`,{children:(0,d.jsxs)(`g`,{children:[(0,d.jsx)(`path`,{d:`M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z`}),(0,d.jsx)(`path`,{d:`M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z`}),(0,d.jsx)(`path`,{d:`M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z`}),(0,d.jsx)(`path`,{d:`M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z`}),(0,d.jsx)(`path`,{d:`M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z`}),(0,d.jsx)(`path`,{d:`M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z`}),(0,d.jsx)(`path`,{d:`M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z`}),(0,d.jsx)(`path`,{d:`M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z`}),(0,d.jsx)(`path`,{d:`M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z`}),(0,d.jsx)(`path`,{d:`M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z`}),(0,d.jsx)(`path`,{d:`M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z`})]})})]})})}),args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`}},X={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,dir:`ltr`,style:{"--jb-date-input-calendar-trigger-display":`none`}}},Z={render:e=>(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(`div`,{slot:`inline-start`,style:{height:`1.5rem`,borderInlineEnd:`2px solid #262626`,paddingInline:`0.5rem`},children:`ðŸŽ‰Birthday`}),(0,d.jsx)(`div`,{slot:`inline-end`,children:`â­`})]}),args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,dir:`ltr`}},Q={render:e=>{let t=(0,me.useRef)(null);return(0,_e.useEffect)(()=>{function e(e){var t=new FormData(e.target);let n=Object.fromEntries(t);console.log(n),e.preventDefault()}t.current?.addEventListener(`submit`,e)},[t]),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{children:`Form Submit Test`}),(0,d.jsx)(`p`,{children:`change inputs value and click on submit to submit the form, then see the browser console to see the submitted value`}),(0,d.jsxs)(`form`,{ref:t,children:[(0,d.jsx)(`input`,{name:`test-input`,value:`test value`}),(0,d.jsx)(o,{label:`date in form`,name:`birthdate`}),(0,d.jsx)(`div`,{children:`see console after submit clicked`}),(0,d.jsx)(`button`,{type:`submit`,children:`submit`})]})]})},play:async({canvasElement:e})=>{let t=s(e),n=e.querySelector(`form`);f(n).toBeTruthy(),t.value=`2024-02-29T00:00:00.000Z`,await h(()=>{f(new FormData(n).get(`birthdate`)).toBe(t.value)})}},$={args:{label:`event test:`,message:`check the console`,onChange:p(),onLoad:p(),onInit:p(),onInvalid:p(),onBeforeInput:p(),onInput:p(),onKeyUp:p(),onKeyDown:p(),onKeyPress:p(),onSelect:p(),onFocus:p(),onBlur:p()},play:async({canvasElement:e,args:t})=>{let n=s(e),r=oe(n);await h(()=>{n.dispatchEvent(new CustomEvent(`load`)),f(t.onLoad).toHaveBeenCalled()}),await h(()=>{n.dispatchEvent(new CustomEvent(`init`)),f(t.onInit).toHaveBeenCalled()}),await m.click(r),await m.type(r,`1402/05/12`);let i=c(n);i.data.selectedYear=1402,i.data.selectedMonth=5,await m.click(ce(i,13)),n.setAttribute(`error`,`forced error`),n.reportValidity(),r.blur(),await h(()=>{f(t.onFocus).toHaveBeenCalled(),f(t.onBeforeInput).toHaveBeenCalled(),f(t.onInput).toHaveBeenCalled(),f(t.onKeyDown).toHaveBeenCalled(),f(t.onKeyPress).toHaveBeenCalled(),f(t.onKeyUp).toHaveBeenCalled(),f(t.onChange).toHaveBeenCalled(),f(t.onSelect).toHaveBeenCalled(),f(t.onInvalid).toHaveBeenCalled(),f(t.onBlur).toHaveBeenCalled()})}},be=`Normal.ImperativeMethods.InitialValue.InitialValueDoesNotOverrideValue.ExplicitNullValueDoesNotFallBackToInitialValue.RejectedTimestampDoesNotBlockInitialValue.Jalali.Gregorian.SizeVariants.JalaliWithPersianSetup.CustomFormat.AlignCenter.Placeholder.WithDefaultCalendarDate.PersianNumber.CustomMonthName.Required.Disabled.WithOverflowHandler.OverflowWithinParent.withError.ValueSetGet.sizeTest.ValueTypeTest.GregorianMinMaxTest.JalaliTest.JalaliMinMaxTest.JalaliMinMaxTestWithCustomFormat.TimeStampTest.TimeStampMinMaxTest.GregorianInputTest.RightToLeftTest.Headless.WithCustomIcon.WithoutIcon.WithInlineSections.InFormTest.EventTest`.split(`.`),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Imperative API"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    const calendar = getCalendar(dateInput);
    await waitFor(() => expect(dateInput.elements.input).toBeTruthy());
    dateInput.setFormat("YYYY/MM/DD");
    dateInput.value = "2024/01/15";
    dateInput.setMinDate("2024/01/01");
    dateInput.setMaxDate("2024/12/31");
    expect(dateInput.valueFormat).toBe("YYYY/MM/DD");
    expect(dateInput.value).toBe("2024/01/15");
    expect(dateInput.dateRestrictions.min).toBeInstanceOf(Date);
    expect(dateInput.dateRestrictions.max).toBeInstanceOf(Date);
    expect(dateInput.getDateValue("GREGORIAN")).toBe("2024/01/15");
    dateInput.setMonthList("JALALI", Array.from({
      length: 12
    }, (_, index) => \`Month \${index + 1}\`));
    dateInput.setSelectionRange(0, 4);
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(4);
    dateInput.value = "";
    dateInput.inputType = "JALALI";
    dateInput.setCalendarDefaultDateView(1360, 5, "JALALI");
    dateInput.isOpen = true;
    await waitFor(() => {
      expect(calendar.data.selectedYear).toBe(1360);
      expect(calendar.data.selectedMonth).toBe(5);
    });
    dateInput.required = true;
    dateInput.value = "";
    expect(dateInput.checkValidity()).toBe(false);
    expect(dateInput.reportValidity()).toBe(false);
    dateInput.clearValidationError();
    dateInput.focus();
    expect(document.activeElement).toBe(dateInput);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBDateInput {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: "initialValueTest",
    message: "An initial value should be set by default",
    initialValue: "2024-02-29T00:00:00.000Z",
    inputType: "GREGORIAN"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    const resetButton = canvasElement.querySelector("jb-button")?.shadowRoot?.querySelector<HTMLButtonElement>("button");
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(dateInput.initialValue).toBe(args.initialValue);
      expect(dateInput.value).toBe(args.initialValue);
      expect(input.value).not.toBe("");
      expect(dateInput.isDirty).toBe(false);
    });
    const calendar = getCalendar(dateInput);
    dateInput.addEventListener("change", event => event.preventDefault(), {
      once: true
    });
    calendar.data.selectedYear = 2024;
    calendar.data.selectedMonth = 3;
    await userEvent.click(getCalendarDay(calendar, 2));
    await waitFor(() => {
      // A canceled calendar selection restores both date and the internal
      // assignment latch, leaving later baseline updates effective.
      expect(dateInput.value).toBe(args.initialValue);
      expect(dateInput.isDirty).toBe(false);
    });
    dateInput.initialValue = "2024-03-01T00:00:00.000Z";
    await waitFor(() => {
      expect(dateInput.value).toBe("2024-03-01T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(false);
    });

    // Invalid Date objects follow a separate validation path from strings.
    dateInput.value = new Date(Number.NaN);

    // Rejected date strings must leave the clean initialization state intact.
    dateInput.value = "invalid-date";
    dateInput.initialValue = "2024-03-03T00:00:00.000Z";
    await waitFor(() => {
      expect(dateInput.initialValue).toBe("2024-03-03T00:00:00.000Z");
      expect(dateInput.value).toBe("2024-03-03T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(false);
    });
    dateInput.value = "2024-03-02T00:00:00.000Z";
    await waitFor(() => {
      expect(dateInput.value).toBe("2024-03-02T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(true);
    });
    dateInput.initialValue = null;
    await waitFor(() => {
      expect(dateInput.initialValue).toBeNull();
      expect(dateInput.value).toBe("2024-03-02T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(true);
    });
    await userEvent.click(resetButton!);
    await waitFor(() => {
      // The date component serializes its empty GREGORIAN value canonically.
      expect(dateInput.value).toBe("0000-00-00T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(false);
    });
    dateInput.value = "2025-03-20T00:00:00.000Z";
    dateInput.initialValue = "2026-03-20T00:00:00.000Z";
    await waitFor(() => {
      expect(dateInput.initialValue).toBe("2026-03-20T00:00:00.000Z");
      expect(dateInput.value).toBe("2025-03-20T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(true);
    });
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(dateInput.value).toBe("2026-03-20T00:00:00.000Z");
      expect(dateInput.initialValue).toBe(dateInput.value);
      expect(dateInput.isDirty).toBe(false);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: "2024-02-29T00:00:00.000Z",
    value: "2025-03-20T00:00:00.000Z",
    inputType: "GREGORIAN"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    await waitFor(() => {
      expect(dateInput.value).toBe("2025-03-20T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(true);
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: "2024-02-29T00:00:00.000Z",
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    await waitFor(() => {
      expect(dateInput.value).toBe("0000-00-00T00:00:00.000Z");
      expect(dateInput.isDirty).toBe(true);
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    valueType: "TIME_STAMP",
    inputType: "GREGORIAN",
    initialValue: "1709164800000"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    await waitFor(() => {
      expect(dateInput.value).toBe("1709164800000");
      expect(dateInput.isDirty).toBe(false);
    });
    dateInput.value = "not-a-timestamp";
    dateInput.initialValue = "1709251200000";
    await waitFor(() => {
      // A non-finite timestamp is rejected as a live assignment and therefore
      // cannot block the next initialValue from seeding the input.
      expect(dateInput.initialValue).toBe("1709251200000");
      expect(dateInput.value).toBe("1709251200000");
      expect(dateInput.isDirty).toBe(false);
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "jalali date",
    inputType: "JALALI"
  }
  // play: async ({ canvasElement }) => {
  //   const dateInput = getDateInput(canvasElement);
  //   const input = getNativeInput(dateInput);

  //   await userEvent.click(input);
  //   await userEvent.type(input, '1402/05/12');

  //   await waitFor(() => {
  //     expect(dateInput.isOpen).toBe(true);
  //     expect(getCalendar(dateInput).inputType).toBe('JALALI');
  //     expect(dateInput.displayValue).toBe('1402/05/12');
  //     expect(dateInput.valueAsDate).toBeTruthy();
  //   });
  // }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "gregorian date",
    inputType: "GREGORIAN"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    await userEvent.click(input);
    await userEvent.type(input, "2024/02/29");
    await waitFor(() => {
      expect(dateInput.isOpen).toBe(true);
      expect(getCalendar(dateInput).inputType).toBe("GREGORIAN");
      expect(dateInput.displayValue).toBe("2024/02/29");
    });
    const typedValue = dateInput.value;
    dateInput.initialValue = "2025-03-20T00:00:00.000Z";
    await waitFor(() => {
      expect(dateInput.value).toBe(typedValue);
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1rem"
    }}>
        <JBDateInput label="xl size" message="message underneath" size="xl"></JBDateInput>
        <JBDateInput label="xl size" placeholder="placeholder" size="xl"></JBDateInput>
        <JBDateInput label="xl size" value="2021-08-03T00:00:00.000Z" size="xl"></JBDateInput>

        <JBDateInput label="lg size" message="message underneath" size="lg"></JBDateInput>
        <JBDateInput label="lg size" placeholder="placeholder" size="lg"></JBDateInput>
        <JBDateInput label="lg size" value="2021-08-03T00:00:00.000Z" size="lg"></JBDateInput>

        <JBDateInput label="md size" message="message underneath" size="md"></JBDateInput>
        <JBDateInput label="md size" placeholder="placeholder" size="md"></JBDateInput>
        <JBDateInput label="md size" value="2021-08-03T00:00:00.000Z" size="md"></JBDateInput>

        <JBDateInput label="sm size" message="message underneath" size="sm"></JBDateInput>
        <JBDateInput label="sm size" placeholder="placeholder" size="sm"></JBDateInput>
        <JBDateInput label="sm size" value="2021-08-03T00:00:00.000Z" size="sm"></JBDateInput>

        <JBDateInput label="xs size" message="message underneath" size="xs"></JBDateInput>
        <JBDateInput label="xs size" placeholder="placeholder" size="xs"></JBDateInput>
        <JBDateInput label="xs size" value="2021-08-03T00:00:00.000Z" size="xs"></JBDateInput>
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "fa",
    dir: "rtl"
  },
  args: {
    label: "ØªØ§Ø±ÛŒØ® Ø¬Ù„Ø§Ù„ÛŒ",
    inputType: "JALALI",
    dir: "rtl",
    showPersianNumber: true,
    message: "ØªØ§Ø±ÛŒØ® Ø¬Ù„Ø§Ù„ÛŒ Ø¨Ø§ Ø§Ø¹Ø¯Ø§Ø¯ ÙØ§Ø±Ø³ÛŒ Ùˆ Ø¨Ù‡ ØµÙˆØ±Øª Ø±Ø§Ø³Øª Ø¨Ù‡ Ú†Ù¾"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    const calendar = getCalendar(dateInput);
    await userEvent.click(input);
    await userEvent.type(input, "1402/05/12");
    await waitFor(() => {
      expect(dateInput.showPersianNumber).toBe(true);
      expect(calendar.showPersianNumber).toBe(true);
      expect(hasPersianDigits(dateInput.displayValue)).toBe(true);
      expect(hasPersianDigits(getCalendarShadow(calendar).querySelector(".navigator-title .year")?.textContent ?? "")).toBe(true);
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    return <div>
        <h2>input.value in different format</h2>
        <p>try to input some value inside date-input and see the changes in the paragraphs below</p>
        <JBDateInput label={\`value with arguments format(\${args.format})\`} format={args.format} value={value} onChange={e => setValue(e.target.value)} />
        <p>your inputted value is: {value}</p>
        <JBDateInput label="value with YYYY-MM-DD format" format="YYYY-MM-DD format" value={value2} onChange={e => setValue2(e.target.value)} />
        <p>your inputted value is: {value2}</p>
      </div>;
  },
  args: {
    format: "YYYY/MM/DD"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const dateInput = getDateInput(canvasElement);
    dateInput.value = "2023/08/03";
    await waitFor(() => {
      expect(dateInput.value).toMatch(/^\\d{4}\\/\\d{2}\\/\\d{2}$/);
      expect(args.format).toBe("YYYY/MM/DD");
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Align Center",
    style: {
      "--jb-input-input-text-align": "center"
    } as any
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    placeholder: "please enter your date",
    dir: "ltr"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    format: "YYYY/MM/DD",
    dir: "ltr",
    calendarDefaultDateView: {
      year: 1360,
      month: 5
    }
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const calendar = getCalendar(dateInput);
    dateInput.isOpen = true;
    await waitFor(() => {
      expect(calendar.data.selectedYear).toBe(1360);
      expect(calendar.data.selectedMonth).toBe(5);
      expect(calendar.activeSection).toBe("DAY");
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "with persian number",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    format: "YYYY/MM/DD",
    dir: "ltr",
    showPersianNumber: true,
    calendarDefaultDateView: {
      year: 1360,
      month: 5
    }
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const calendar = getCalendar(dateInput);
    dateInput.value = "1360/05/12";
    dateInput.isOpen = true;
    await waitFor(() => {
      expect(dateInput.showPersianNumber).toBe(true);
      expect(hasPersianDigits(dateInput.displayValue)).toBe(true);
      expect(hasPersianDigits(getCalendarShadow(calendar).querySelector(".navigator-title .year")?.textContent ?? "")).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    jalaliMonthList: ["Ø­ÙŽÙ…ÙŽÙ„", "Ø«ÙŽÙˆØ±", "Ø¬ÙŽÙˆØ²Ø§", "Ø³ÙŽØ±ÙŽØ·Ø§Ù†", "Ø§ÙŽØ³ÙŽØ¯", "Ø³ÙÙ†Ø¨ÙÙ„Ù‡", "Ù…ÛŒØ²Ø§Ù†", "Ø¹ÙŽÙ‚Ø±ÙŽØ¨", "Ù‚ÙŽÙˆØ³", "Ø¬ÙŽØ¯Ù’ÛŒ", "Ø¯ÙŽÙ„Ùˆ", "Ø­ÙˆØª"]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const dateInput = getDateInput(canvasElement);
    const calendar = getCalendar(dateInput);
    const shadow = getCalendarShadow(calendar);
    dateInput.isOpen = true;
    await userEvent.click(shadow.querySelector<HTMLElement>(".navigator-title .month")!);
    await waitFor(() => {
      expect(getCalendarMonthNames(calendar)).toEqual(args.jalaliMonthList);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: "required field",
    message: "please focus and then unfocus the input to see require validation message",
    required: true,
    dir: "ltr"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "disabled field",
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    await waitFor(() => {
      expect(dateInput.disabled).toBe(true);
      expect(getNativeInput(dateInput).disabled).toBe(true);
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<HTMLDivElement>(null);
    return <div ref={ref} style={{
      height: "10rem",
      border: "solid 1px #666",
      overflow: "hidden"
    }}>
        {/* ðŸ‘‡ Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <JBDateInput {...args} overflowRef={ref} />
      </div>;
  },
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: "with default error",
    error: "error message",
    message: "default message"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    await waitFor(() => {
      expect(getMessageText(dateInput)).toBe("error message");
      expect(dateInput.reportValidity()).toBe(false);
    });
    dateInput.removeAttribute("error");
    dateInput.reportValidity();
    await waitFor(() => {
      expect(getMessageText(dateInput)).toBe("default message");
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | string>("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }}>
        <JBDateInput value={value} onChange={e => setValue(e.target.value)}></JBDateInput>
        <JBButton onClick={() => setValue(new Date())}>set value to Today</JBButton>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dateInput = getDateInput(canvasElement);
    await userEvent.click(canvas.getByText("set value to Today"));
    await waitFor(() => {
      expect(dateInput.value).not.toBe("");
      expect(dateInput.displayValue).not.toBe("");
      expect(getCalendar(dateInput).value.year).toBeTruthy();
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <div style={{
        width: "100%"
      }}>
          <h3>parent full width</h3>
          <JBDateInput></JBDateInput>
        </div>
        <div style={{
        width: "50%"
      }}>
          <h3>parent percent width</h3>
          <JBDateInput></JBDateInput>
        </div>
        <div style={{
        width: "18.75rem"
      }}>
          <h3>parent pixel width</h3>
          <JBDateInput></JBDateInput>
        </div>

        <h3>self full width</h3>
        <JBDateInput style={{
        width: "100%"
      }}></JBDateInput>

        <h3>self percent width</h3>
        <JBDateInput style={{
        width: "50%"
      }}></JBDateInput>

        <h3>self pixel width</h3>
        <JBDateInput style={{
        width: "18.75rem"
      }}></JBDateInput>

        <h3>self pixel height</h3>
        <JBDateInput style={{
        "--jb-input-height": "4.375rem"
      } as any}></JBDateInput>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const dateInputs = Array.from(canvasElement.querySelectorAll<HTMLElement>("jb-date-input"));
    await waitFor(() => {
      expect(dateInputs[1].getBoundingClientRect().width).toBeCloseTo(dateInputs[1].parentElement!.getBoundingClientRect().width, -1);
      expect(dateInputs[2].getBoundingClientRect().width).toBeCloseTo(300, -1);
      expect(dateInputs[5].getBoundingClientRect().width).toBeCloseTo(300, -1);
      expect(dateInputs[6].getBoundingClientRect().height).toBeGreaterThanOrEqual(70);
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <div>
        <JBDateInput {...args} onChange={e => {
        setValue(e.target.value);
      }}></JBDateInput>
        <div>
          <table style={{
          margin: "1rem"
        }}>
            <tbody>
              <tr>
                <td>valueType is</td>
                <td>{args.valueType}</td>
              </tr>
              <tr>
                <td>inputType is</td>
                <td>{args.inputType}</td>
              </tr>
              <tr>
                <td>Min date is:</td>
                <td>{args.min ? args.min.toString() : "Unlimited"}</td>
              </tr>
              <tr>
                <td>Max date is:</td>
                <td>{args.max ? args.max.toString() : "Unlimited"}</td>
              </tr>
              <tr>
                <td>Your chosen date is:</td>
                <td>{value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>;
  },
  args: {
    valueType: "GREGORIAN",
    inputType: "GREGORIAN",
    min: "",
    max: ""
  }
  //TODO: add arg types so control in Value doc works better for test
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...ValueTypeTest,
  args: {
    valueType: "GREGORIAN",
    inputType: "GREGORIAN",
    min: "2020-09-05T08:51:23.176Z",
    max: "2020-10-15T08:51:23.176Z",
    dir: "ltr"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, valueSetter] = useState("");
    const [dateValue, setDateValue] = useState(new Date());
    const validationList = [{
      validator: /^13.*$/g,
      message: "date must be in 13 century"
    }, {
      validator: ({
        valueObject
      }: ValidationValue) => {
        return valueObject.jalali.day >= 15;
      },
      message: "you can only choose 15th day of month"
    }];
    return <div>
        <JBDateInput inputType="JALALI" name="first-date-input" value={value} onSelect={e => {
        valueSetter(e.target.value);
      }} onChange={e => {
        valueSetter(e.target.value);
      }} {...args} />
        <JBDateInput inputType="JALALI" name="first-date-input" showPersianNumber={true} value={value} label={\`\${args.label} Ø¨Ø§ Ø§Ø¹Ø¯Ø§Ø¯ ÙØ§Ø±Ø³ÛŒ \`} onSelect={e => {
        valueSetter(e.target.value);
      }} onChange={e => {
        valueSetter(e.target.value);
      }} {...args} />
        <div>
          <br />
          <br />
          valueType is {args.valueType}
          <br />
          <br />
          Min date is: {args.min ? args.min.toString() : "Unlimited"}
          <br />
          <br />
          Max date is: {args.max ? args.max.toString() : "Unlimited"}
          <br />
          <br />
          Your chosen date is: {value}
          <br />
          <JBButton onClick={() => {
          valueSetter("1400-06-18T00:00:00.000Z");
        }}>
            set value to 1400-06-18T00:00:00.000Z
          </JBButton>
          <br />
          <JBButton onClick={() => {
          valueSetter("1399/08/09");
        }}>
            set value to 1399/08/09
          </JBButton>
        </div>
        <h3>test custom validation</h3>
        <JBDateInput inputType="JALALI" validationList={validationList} value={value} onChange={e => {
        valueSetter(e.target.value);
      }} onSelect={e => {
        valueSetter(e.target.value);
      }} {...args}></JBDateInput>
        <h3>test via JS Date type value</h3>
        <JBDateInput inputType="JALALI" value={dateValue} onChange={e => setDateValue(e.target.valueAsDate as Date)}></JBDateInput>
      </div>;
  },
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1402-08-01T12:05:39.530Z",
    max: "1402-09-01T12:05:39.530Z"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1399-05-01T12:05:39.530Z",
    max: "1400-08-01T12:05:39.530Z"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const calendar = getCalendar(dateInput);
    calendar.inputType = "JALALI";
    calendar.data.selectedYear = 1399;
    calendar.data.selectedMonth = 4;
    await waitFor(() => {
      expect(getCalendarDay(calendar, 30).classList.contains("--disable")).toBe(true);
    });
    const valueBeforeDisabledClick = dateInput.value;
    await userEvent.click(getCalendarDay(calendar, 30));
    expect(dateInput.value).toBe(valueBeforeDisabledClick);
    dateInput.value = "1399-04-30T12:05:39.530Z";
    dateInput.reportValidity();
    await waitFor(() => {
      expect(dateInput.checkValidity()).toBe(false);
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    format: "YYYY/MM/DD",
    label: "date",
    valueType: "JALALI",
    min: "1399/05/01",
    max: "1400/08/01"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [setValue, setValueSetter] = useState<string | null>(null);
    const valueAsDate = useMemo(() => {
      if (setValue) {
        return new Date(Number(setValue)).toString();
      } else {
        return null;
      }
    }, [setValue]);
    const onChange = useCallback((e: JBDateInputEventType<Event>) => {
      setValueSetter(e.target.value);
    }, []);
    return <div>
        <JBDateInput value={setValue} valueType="TIME_STAMP" onChange={onChange} {...args} />
        <div>
          <br />
          <br />
          valueType is {args.valueType}
          <br />
          <br />
          Min date is: {args.min ? args.min.toString() : "Unlimited"}
          <br />
          <br />
          Max date is: {args.max ? args.max.toString() : "Unlimited"}
          <br />
          <br />
          Your chosen date is: {setValue}
          <br />
          <br />
          Your chosen date in greg is: {valueAsDate}
        </div>
      </div>;
  },
  args: {
    label: "date",
    valueType: "TIME_STAMP"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const calendar = getCalendar(dateInput);
    calendar.data.selectedYear = 1402;
    calendar.data.selectedMonth = 5;
    await userEvent.click(getCalendarDay(calendar, 12));
    await waitFor(() => {
      expect(dateInput.value).toMatch(/^\\d+$/);
      expect(Number(dateInput.value)).toBeGreaterThan(0);
    });
    const selectedValue = dateInput.value;
    dateInput.initialValue = "0";
    await waitFor(() => {
      expect(dateInput.value).toBe(selectedValue);
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...TimeStampTest,
  args: {
    label: "date",
    valueType: "TIME_STAMP",
    min: "1596291030322",
    max: "1696291030322"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    dateInput.value = "1577836800000";
    dateInput.reportValidity();
    await waitFor(() => {
      expect(dateInput.checkValidity()).toBe(false);
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    dateInput.value = "2024-02-29T00:00:00.000Z";
    await waitFor(() => {
      expect(dateInput.inputType).toBe("GREGORIAN");
      expect(dateInput.valueType).toBe("GREGORIAN");
      expect(dateInput.value).toContain("2024");
      expect(dateInput.valueAsDate).toBeTruthy();
    });
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Ø±Ø§Ø³Øª Ø¨Ù‡ Ú†Ù¾",
    dir: "rtl"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<HTMLInputElement>(null);
    const {
      value,
      onChange,
      onClick,
      onFocus
    } = useJBDateInput({
      dateInputType: "JALALI",
      ref,
      showPersianNumber: false
    });
    return <input ref={ref} value={value} onChange={onChange} onClick={onClick} onFocus={onFocus} />;
  },
  name: "headless sample",
  args: {},
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>("input");
    expect(input).toBeTruthy();
    await userEvent.click(input!);
    await userEvent.type(input!, "1402/13/45");
    await waitFor(() => {
      expect(input!.value).not.toContain("13");
      expect(input!.selectionStart).toBe(input!.selectionEnd);
    });
    await userEvent.keyboard("{Control>}a{/Control}{Backspace}");
    await userEvent.type(input!, "1402/05/12");
    await waitFor(() => {
      expect(input!.value).toBe("1402/05/12");
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="calendar-trigger-icon" style={{
      height: "100%",
      aspectRatio: "1"
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 610.398 610.398">
          <title>calendar icon</title>
          <g>
            <g>
              <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z" />
              <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z" />
              <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z" />
              <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z" />
              <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z" />
              <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z" />
              <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z" />
              <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z" />
              <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z" />
              <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z" />
              <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z" />
            </g>
          </g>
        </svg>
      </div>
    </JBDateInput>,
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    dir: "ltr",
    style: {
      "--jb-date-input-calendar-trigger-display": "none"
    } as CSSProperties
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="inline-start" style={{
      height: "1.5rem",
      borderInlineEnd: "2px solid #262626",
      paddingInline: "0.5rem"
    }}>
        ðŸŽ‰Birthday
      </div>
      <div slot="inline-end">â­</div>
    </JBDateInput>,
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    dir: "ltr"
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
      // formRef.current.addEventListener('formdata', ({ formData }) => {
      //     console.log(formData);
      //     debugger;
      // });
      function handleForm(event: SubmitEvent) {
        var formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log(data);
        event.preventDefault();
      }
      formRef.current?.addEventListener("submit", handleForm);
    }, [formRef]);
    return <div>
        <h3>Form Submit Test</h3>
        <p>change inputs value and click on submit to submit the form, then see the browser console to see the submitted value</p>
        <form ref={formRef}>
          <input name="test-input" value="test value"></input>
          <JBDateInput label="date in form" name="birthdate"></JBDateInput>
          <div>see console after submit clicked</div>
          <button type="submit">submit</button>
        </form>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const form = canvasElement.querySelector<HTMLFormElement>("form");
    expect(form).toBeTruthy();
    dateInput.value = "2024-02-29T00:00:00.000Z";
    await waitFor(() => {
      expect(new FormData(form!).get("birthdate")).toBe(dateInput.value);
    });
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: "event test:",
    message: "check the console",
    onChange: fn(),
    onLoad: fn(),
    onInit: fn(),
    onInvalid: fn(),
    onBeforeInput: fn(),
    onInput: fn(),
    onKeyUp: fn(),
    onKeyDown: fn(),
    onKeyPress: fn(),
    onSelect: fn(),
    onFocus: fn(),
    onBlur: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    await waitFor(() => {
      dateInput.dispatchEvent(new CustomEvent("load"));
      expect(args.onLoad).toHaveBeenCalled();
    });
    await waitFor(() => {
      dateInput.dispatchEvent(new CustomEvent("init"));
      expect(args.onInit).toHaveBeenCalled();
    });
    await userEvent.click(input);
    await userEvent.type(input, "1402/05/12");
    const calendar = getCalendar(dateInput);
    calendar.data.selectedYear = 1402;
    calendar.data.selectedMonth = 5;
    await userEvent.click(getCalendarDay(calendar, 13));
    dateInput.setAttribute("error", "forced error");
    dateInput.reportValidity();
    input.blur();
    await waitFor(() => {
      expect(args.onFocus).toHaveBeenCalled();
      expect(args.onBeforeInput).toHaveBeenCalled();
      expect(args.onInput).toHaveBeenCalled();
      expect(args.onKeyDown).toHaveBeenCalled();
      expect(args.onKeyPress).toHaveBeenCalled();
      expect(args.onKeyUp).toHaveBeenCalled();
      expect(args.onChange).toHaveBeenCalled();
      expect(args.onSelect).toHaveBeenCalled();
      expect(args.onInvalid).toHaveBeenCalled();
      expect(args.onBlur).toHaveBeenCalled();
    });
  }
}`,...$.parameters?.docs?.source}}}}));xe();export{D as AlignCenter,E as CustomFormat,j as CustomMonthName,N as Disabled,$ as EventTest,b as ExplicitNullValueDoesNotFallBackToInitialValue,C as Gregorian,K as GregorianInputTest,B as GregorianMinMaxTest,J as Headless,_ as ImperativeMethods,Q as InFormTest,v as InitialValue,y as InitialValueDoesNotOverrideValue,S as Jalali,H as JalaliMinMaxTest,U as JalaliMinMaxTestWithCustomFormat,V as JalaliTest,T as JalaliWithPersianSetup,g as Normal,F as OverflowWithinParent,A as PersianNumber,O as Placeholder,x as RejectedTimestampDoesNotBlockInitialValue,M as Required,q as RightToLeftTest,w as SizeVariants,G as TimeStampMinMaxTest,W as TimeStampTest,L as ValueSetGet,z as ValueTypeTest,Y as WithCustomIcon,k as WithDefaultCalendarDate,Z as WithInlineSections,P as WithOverflowHandler,X as WithoutIcon,be as __namedExportsOrder,ye as default,xe as n,R as sizeTest,pe as t,I as withError};