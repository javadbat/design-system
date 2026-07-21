import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D_Yaz38j.js";import{r as a,t as ee}from"./react--Z97vyX7.js";import{i as te,n as o,t as ne}from"./main-tgF9W-l0.js";import{t as re}from"./style-forest-DclDDcud.js";import{t as ie}from"./style-forest-DQTh3WpY.js";var ae=t((()=>{}));function s(e,t=0){let n=e.querySelectorAll(`jb-date-input`)[t];return p(n).toBeTruthy(),p(n.shadowRoot).toBeTruthy(),n}function c(e){let t=e.elements.input.shadowRoot?.querySelector(`input`);return p(t).toBeTruthy(),t}function l(e){let t=e.elements.calendar;return p(t).toBeTruthy(),p(t.shadowRoot).toBeTruthy(),t}function u(e){return e.shadowRoot}function d(e,t){let n=u(e).querySelector(`.current-month-day-wrapper .day-wrapper[day-number="${t}"]`);return p(n).toBeTruthy(),n}function oe(e){return Array.from(u(e).querySelectorAll(`.month-selection-section .month-name`)).map(e=>e.textContent)}function se(e){return e.elements.input.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function f(e){return/[۰-۹]/.test(e)}var p,ce=t((()=>{({expect:p}=__STORYBOOK_MODULE_TEST__)})),le=e({CustomFormat:()=>D,CustomMonthName:()=>j,EventTest:()=>Q,Gregorian:()=>w,GregorianInputTest:()=>G,GregorianMinMaxTest:()=>z,Headless:()=>q,InFormTest:()=>Z,Jalali:()=>C,JalaliMinMaxTest:()=>V,JalaliMinMaxTestWithCustomFormat:()=>H,JalaliTest:()=>B,JalaliWithPersianSetup:()=>E,Normal:()=>S,OverflowWithinParent:()=>P,PersianNumber:()=>A,Placeholder:()=>O,Required:()=>M,RightToLeftTest:()=>K,SizeVariants:()=>T,TimeStampMinMaxTest:()=>W,TimeStampTest:()=>U,ValueSetGet:()=>I,ValueTypeTest:()=>R,WithCustomIcon:()=>J,WithDefaultCalendarDate:()=>k,WithInlineSections:()=>X,WithOverflowHandler:()=>N,WithoutIcon:()=>Y,__namedExportsOrder:()=>$,default:()=>x,sizeTest:()=>L,withError:()=>F}),m,h,ue,de,fe,g,_,v,y,b,pe,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,me=t((()=>{m=n(r(),1),ne(),ae(),ie(),re(),h=n(r(),1),ue=n(r(),1),de=n(r(),1),fe=n(r(),1),ee(),ce(),g=i(),{expect:_,fn:v,userEvent:y,waitFor:b,within:pe}=__STORYBOOK_MODULE_TEST__,x={title:`Components/form elements/Inputs/JBDateInput`,component:o},S={args:{label:`date`}},C={args:{label:`jalali date`,inputType:`JALALI`},play:async({canvasElement:e})=>{let t=s(e),n=c(t);await y.click(n),await y.type(n,`1402/05/12`),await b(()=>{_(t.showCalendar).toBe(!0),_(l(t).inputType).toBe(`JALALI`),_(t.inputValue).toBe(`1402/05/12`),_(t.valueInDate).toBeTruthy()})}},w={args:{label:`gregorian date`,inputType:`GREGORIAN`},play:async({canvasElement:e})=>{let t=s(e),n=c(t);await y.click(n),await y.type(n,`2024/02/29`),await b(()=>{_(t.showCalendar).toBe(!0),_(l(t).inputType).toBe(`GREGORIAN`),_(t.inputValue).toBe(`2024/02/29`)})}},T={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,g.jsx)(o,{label:`xl size`,message:`message underneath`,size:`xl`}),(0,g.jsx)(o,{label:`xl size`,placeholder:`placeholder`,size:`xl`}),(0,g.jsx)(o,{label:`xl size`,value:`2021-08-03T00:00:00.000Z`,size:`xl`}),(0,g.jsx)(o,{label:`lg size`,message:`message underneath`,size:`lg`}),(0,g.jsx)(o,{label:`lg size`,placeholder:`placeholder`,size:`lg`}),(0,g.jsx)(o,{label:`lg size`,value:`2021-08-03T00:00:00.000Z`,size:`lg`}),(0,g.jsx)(o,{label:`md size`,message:`message underneath`,size:`md`}),(0,g.jsx)(o,{label:`md size`,placeholder:`placeholder`,size:`md`}),(0,g.jsx)(o,{label:`md size`,value:`2021-08-03T00:00:00.000Z`,size:`md`}),(0,g.jsx)(o,{label:`sm size`,message:`message underneath`,size:`sm`}),(0,g.jsx)(o,{label:`sm size`,placeholder:`placeholder`,size:`sm`}),(0,g.jsx)(o,{label:`sm size`,value:`2021-08-03T00:00:00.000Z`,size:`sm`}),(0,g.jsx)(o,{label:`xs size`,message:`message underneath`,size:`xs`}),(0,g.jsx)(o,{label:`xs size`,placeholder:`placeholder`,size:`xs`}),(0,g.jsx)(o,{label:`xs size`,value:`2021-08-03T00:00:00.000Z`,size:`xs`})]})},E={globals:{locale:`fa`,dir:`rtl`},args:{label:`تاریخ جلالی`,inputType:`JALALI`,direction:`rtl`,showPersianNumber:!0,message:`تاریخ جلالی با اعداد فارسی و به صورت راست به چپ`},play:async({canvasElement:e})=>{let t=s(e),n=c(t),r=l(t);await y.click(n),await y.type(n,`1402/05/12`),await b(()=>{_(t.showPersianNumber).toBe(!0),_(r.showPersianNumber).toBe(!0),_(f(t.inputValue)).toBe(!0),_(f(u(r).querySelector(`.navigator-title .year`)?.textContent??``)).toBe(!0)})}},D={render:e=>{let[t,n]=(0,h.useState)(``),[r,i]=(0,h.useState)(``);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h2`,{children:`input.value in different format`}),(0,g.jsx)(`p`,{children:`try to input some value inside date-input and see the changes in the paragraphs below`}),(0,g.jsx)(o,{label:`value with arguments format(${e.format})`,format:e.format,value:t,onChange:e=>n(e.target.value)}),(0,g.jsxs)(`p`,{children:[`your inputted value is: `,t]}),(0,g.jsx)(o,{label:`value with YYYY-MM-DD format`,format:`YYYY-MM-DD format`,value:r,onChange:e=>i(e.target.value)}),(0,g.jsxs)(`p`,{children:[`your inputted value is: `,r]})]})},args:{format:`YYYY/MM/DD`},play:async({canvasElement:e,args:t})=>{let n=s(e);n.value=`2023/08/03`,await b(()=>{_(n.value).toMatch(/^\d{4}\/\d{2}\/\d{2}$/),_(t.format).toBe(`YYYY/MM/DD`)})}},O={args:{label:`date`,placeholder:`please enter your date`,direction:`ltr`}},k={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,format:`YYYY/MM/DD`,direction:`ltr`,calendarDefaultDateView:{year:1360,month:5}},play:async({canvasElement:e})=>{let t=s(e),n=l(t);t.showCalendar=!0,await b(()=>{_(n.data.selectedYear).toBe(1360),_(n.data.selectedMonth).toBe(5),_(n.activeSection).toBe(`DAY`)})}},A={args:{label:`with persian number`,valueType:`GREGORIAN`,inputType:`JALALI`,format:`YYYY/MM/DD`,direction:`ltr`,showPersianNumber:!0,calendarDefaultDateView:{year:1360,month:5}},play:async({canvasElement:e})=>{let t=s(e),n=l(t);t.value=`1360/05/12`,t.showCalendar=!0,await b(()=>{_(t.showPersianNumber).toBe(!0),_(f(t.inputValue)).toBe(!0),_(f(u(n).querySelector(`.navigator-title .year`)?.textContent??``)).toBe(!0)})}},j={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,jalaliMonthList:[`حَمَل`,`ثَور`,`جَوزا`,`سَرَطان`,`اَسَد`,`سُنبُله`,`میزان`,`عَقرَب`,`قَوس`,`جَدْی`,`دَلو`,`حوت`]},play:async({canvasElement:e,args:t})=>{let n=s(e),r=l(n),i=u(r);n.showCalendar=!0,await y.click(i.querySelector(`.navigator-title .month`)),await b(()=>{_(oe(r)).toEqual(t.jalaliMonthList)})}},M={args:{label:`required field`,message:`please focus and then unfocus the input to see require validation message`,required:!0,direction:`ltr`}},N={args:{label:`will jump on overflow`,overflowHandler:`SLIDE`}},P={render:e=>{let t=(0,m.useRef)(null);return(0,g.jsx)(`div`,{ref:t,style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,g.jsx)(o,{...e,overflowRef:t})})},args:{label:`will jump on overflow`,overflowHandler:`SLIDE`}},F={args:{label:`with default error`,error:`error message`,message:`default message`},play:async({canvasElement:e})=>{let t=s(e);await b(()=>{_(se(t)).toBe(`error message`),_(t.reportValidity()).toBe(!1)}),t.removeAttribute(`error`),t.reportValidity(),await b(()=>{_(se(t)).toBe(`default message`)})}},I={render:()=>{let[e,t]=(0,h.useState)(``);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,g.jsx)(o,{value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(a,{onClick:()=>t(new Date),children:`set value to Today`})]})},play:async({canvasElement:e})=>{let t=pe(e),n=s(e);await y.click(t.getByText(`set value to Today`)),await b(()=>{_(n.value).not.toBe(``),_(n.inputValue).not.toBe(``),_(l(n).value.year).toBeTruthy()})}},L={render:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{style:{width:`100%`},children:[(0,g.jsx)(`h3`,{children:`parent full width`}),(0,g.jsx)(o,{})]}),(0,g.jsxs)(`div`,{style:{width:`50%`},children:[(0,g.jsx)(`h3`,{children:`parent percent width`}),(0,g.jsx)(o,{})]}),(0,g.jsxs)(`div`,{style:{width:`18.75rem`},children:[(0,g.jsx)(`h3`,{children:`parent pixel width`}),(0,g.jsx)(o,{})]}),(0,g.jsx)(`h3`,{children:`self full width`}),(0,g.jsx)(o,{style:{width:`100%`}}),(0,g.jsx)(`h3`,{children:`self percent width`}),(0,g.jsx)(o,{style:{width:`50%`}}),(0,g.jsx)(`h3`,{children:`self pixel width`}),(0,g.jsx)(o,{style:{width:`18.75rem`}}),(0,g.jsx)(`h3`,{children:`self pixel height`}),(0,g.jsx)(o,{style:{"--jb-input-height":`4.375rem`}})]}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-date-input`));await b(()=>{_(t[1].getBoundingClientRect().width).toBeCloseTo(t[1].parentElement.getBoundingClientRect().width,-1),_(t[2].getBoundingClientRect().width).toBeCloseTo(300,-1),_(t[5].getBoundingClientRect().width).toBeCloseTo(300,-1),_(t[6].getBoundingClientRect().height).toBeGreaterThanOrEqual(70)})}},R={render:e=>{let[t,n]=(0,h.useState)(``);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(o,{...e,onChange:e=>{n(e.target.value)}}),(0,g.jsx)(`div`,{children:(0,g.jsx)(`table`,{style:{margin:`1rem`},children:(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`valueType is`}),(0,g.jsx)(`td`,{children:e.valueType})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`inputType is`}),(0,g.jsx)(`td`,{children:e.inputType})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`Min date is:`}),(0,g.jsx)(`td`,{children:e.min?e.min.toString():`Unlimited`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`Max date is:`}),(0,g.jsx)(`td`,{children:e.max?e.max.toString():`Unlimited`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`Your chosen date is:`}),(0,g.jsx)(`td`,{children:t})]})]})})})]})},args:{valueType:`GREGORIAN`,inputType:`GREGORIAN`,min:``,max:``}},z={...R,args:{valueType:`GREGORIAN`,inputType:`GREGORIAN`,min:`2020-09-05T08:51:23.176Z`,max:`2020-10-15T08:51:23.176Z`,direction:`ltr`}},B={render:e=>{let[t,n]=(0,h.useState)(``),[r,i]=(0,h.useState)(new Date),ee=[{validator:/^13.*$/g,message:`date must be in 13 century`},{validator:({valueObject:e})=>e.jalali.day>=15,message:`you can only choose 15th day of month`}];return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(o,{name:`first-date-input`,value:t,onSelect:e=>{n(e.target.value)},onChange:e=>{n(e.target.value)},...e}),(0,g.jsx)(o,{name:`first-date-input`,showPersianNumber:!0,value:t,label:`${e.label} با اعداد فارسی `,onSelect:e=>{n(e.target.value)},onChange:e=>{n(e.target.value)},...e}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`valueType is `,e.valueType,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Min date is: `,e.min?e.min.toString():`Unlimited`,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Max date is: `,e.max?e.max.toString():`Unlimited`,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Your chosen date is: `,t,(0,g.jsx)(`br`,{}),(0,g.jsx)(a,{onClick:()=>{n(`1400-06-18T00:00:00.000Z`)},children:`set value to 1400-06-18T00:00:00.000Z`}),(0,g.jsx)(`br`,{}),(0,g.jsx)(a,{onClick:()=>{n(`1399/08/09`)},children:`set value to 1399/08/09`})]}),(0,g.jsx)(`h3`,{children:`Center Aligned`}),(0,g.jsx)(`div`,{style:{"--jb-date-input-text-align":`center`},children:(0,g.jsx)(o,{})}),(0,g.jsx)(`h3`,{children:`test custom validation`}),(0,g.jsx)(o,{validationList:ee,value:t,onChange:e=>{n(e.target.value)},onSelect:e=>{n(e.target.value)},...e}),(0,g.jsx)(`h3`,{children:`test via JS Date type value`}),(0,g.jsx)(o,{value:r,onChange:e=>i(e.target.valueInDate)})]})},args:{label:`date`,valueType:`JALALI`,min:`1402-08-01T12:05:39.530Z`,max:`1402-09-01T12:05:39.530Z`}},V={...B,args:{label:`date`,valueType:`JALALI`,min:`1399-05-01T12:05:39.530Z`,max:`1400-08-01T12:05:39.530Z`},play:async({canvasElement:e})=>{let t=s(e),n=l(t);n.inputType=`JALALI`,n.data.selectedYear=1399,n.data.selectedMonth=4,await b(()=>{_(d(n,30).classList.contains(`--disable`)).toBe(!0)});let r=t.value;await y.click(d(n,30)),_(t.value).toBe(r),t.value=`1399-04-30T12:05:39.530Z`,t.reportValidity(),await b(()=>{_(t.checkValidity()).toBe(!1)})}},H={...B,args:{format:`YYYY/MM/DD`,label:`date`,valueType:`JALALI`,min:`1399/05/01`,max:`1400/08/01`}},U={render:e=>{let[t,n]=(0,h.useState)(null),r=(0,ue.useMemo)(()=>t?new Date(Number(t)).toString():null,[t]);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(o,{value:t,valueType:`TIME_STAMP`,onChange:(0,de.useCallback)(e=>{n(e.target.value)},[]),...e}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`valueType is `,e.valueType,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Min date is: `,e.min?e.min.toString():`Unlimited`,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Max date is: `,e.max?e.max.toString():`Unlimited`,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Your chosen date is: `,t,(0,g.jsx)(`br`,{}),(0,g.jsx)(`br`,{}),`Your chosen date in greg is: `,r]})]})},args:{label:`date`,valueType:`TIME_STAMP`},play:async({canvasElement:e})=>{let t=s(e),n=l(t);n.data.selectedYear=1402,n.data.selectedMonth=5,await y.click(d(n,12)),await b(()=>{_(t.value).toMatch(/^\d+$/),_(Number(t.value)).toBeGreaterThan(0)})}},W={...U,args:{label:`date`,valueType:`TIME_STAMP`,min:`1596291030322`,max:`1696291030322`},play:async({canvasElement:e})=>{let t=s(e);t.value=`1577836800000`,t.reportValidity(),await b(()=>{_(t.checkValidity()).toBe(!1)})}},G={args:{label:`date`,valueType:`GREGORIAN`,inputType:`GREGORIAN`},play:async({canvasElement:e})=>{let t=s(e);t.value=`2024-02-29T00:00:00.000Z`,await b(()=>{_(t.inputType).toBe(`GREGORIAN`),_(t.valueType).toBe(`GREGORIAN`),_(t.value).toContain(`2024`),_(t.valueInDate).toBeTruthy()})}},K={args:{label:`راست به چپ`,style:{direction:`rtl`}}},q={render:e=>{let t=(0,m.useRef)(null),{value:n,onChange:r,onClick:i,onFocus:a}=te({dateInputType:`JALALI`,ref:t,showPersianNumber:!1});return(0,g.jsx)(`input`,{ref:t,value:n,onChange:r,onClick:i,onFocus:a})},name:`headless sample`,args:{},play:async({canvasElement:e})=>{let t=e.querySelector(`input`);_(t).toBeTruthy(),await y.click(t),await y.type(t,`1402/13/45`),await b(()=>{_(t.value).not.toContain(`13`),_(t.selectionStart).toBe(t.selectionEnd)}),await y.keyboard(`{Control>}a{/Control}{Backspace}`),await y.type(t,`1402/05/12`),await b(()=>{_(t.value).toBe(`1402/05/12`)})}},J={render:e=>(0,g.jsx)(o,{...e,children:(0,g.jsx)(`div`,{slot:`calendar-trigger-icon`,style:{height:`100%`,aspectRatio:`1`},children:(0,g.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,x:`0px`,y:`0px`,viewBox:`0 0 610.398 610.398`,children:[(0,g.jsx)(`title`,{children:`calendar icon`}),(0,g.jsx)(`g`,{children:(0,g.jsxs)(`g`,{children:[(0,g.jsx)(`path`,{d:`M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z`}),(0,g.jsx)(`path`,{d:`M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z`}),(0,g.jsx)(`path`,{d:`M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z`}),(0,g.jsx)(`path`,{d:`M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z`}),(0,g.jsx)(`path`,{d:`M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z`}),(0,g.jsx)(`path`,{d:`M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z`}),(0,g.jsx)(`path`,{d:`M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z`}),(0,g.jsx)(`path`,{d:`M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z`}),(0,g.jsx)(`path`,{d:`M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z`}),(0,g.jsx)(`path`,{d:`M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z`}),(0,g.jsx)(`path`,{d:`M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z`})]})})]})})}),args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`}},Y={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,direction:`ltr`,style:{"--jb-date-input-calendar-trigger-display":`none`}}},X={render:e=>(0,g.jsxs)(o,{...e,children:[(0,g.jsx)(`div`,{slot:`inline-start-section`,style:{height:`1.5rem`,borderInlineEnd:`2px solid #262626`,paddingInline:`0.5rem`},children:`🎉Birthday`}),(0,g.jsx)(`div`,{slot:`inline-end-section`,children:`⭐`})]}),args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,direction:`ltr`}},Z={render:e=>{let t=(0,m.useRef)(null);return(0,fe.useEffect)(()=>{function e(e){var t=new FormData(e.target);let n=Object.fromEntries(t);console.log(n),e.preventDefault()}t.current?.addEventListener(`submit`,e)},[t]),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Form Submit Test`}),(0,g.jsx)(`p`,{children:`change inputs value and click on submit to submit the form, then see the browser console to see the submitted value`}),(0,g.jsxs)(`form`,{ref:t,children:[(0,g.jsx)(`input`,{name:`test-input`,value:`test value`}),(0,g.jsx)(o,{label:`date in form`,name:`birthdate`}),(0,g.jsx)(`div`,{children:`see console after submit clicked`}),(0,g.jsx)(`button`,{type:`submit`,children:`submit`})]})]})},play:async({canvasElement:e})=>{let t=s(e),n=e.querySelector(`form`);_(n).toBeTruthy(),t.value=`2024-02-29T00:00:00.000Z`,await b(()=>{_(new FormData(n).get(`birthdate`)).toBe(t.value)})}},Q={args:{label:`event test:`,message:`check the console`,onChange:v(),onLoad:v(),onInit:v(),onInvalid:v(),onBeforeInput:v(),onInput:v(),onKeyUp:v(),onKeyDown:v(),onKeyPress:v(),onSelect:v(),onFocus:v(),onBlur:v()},play:async({canvasElement:e,args:t})=>{let n=s(e),r=c(n);await b(()=>{n.dispatchEvent(new CustomEvent(`load`)),_(t.onLoad).toHaveBeenCalled()}),await b(()=>{n.dispatchEvent(new CustomEvent(`init`)),_(t.onInit).toHaveBeenCalled()}),await y.click(r),await y.type(r,`1402/05/12`);let i=l(n);i.data.selectedYear=1402,i.data.selectedMonth=5,await y.click(d(i,13)),n.setAttribute(`error`,`forced error`),n.reportValidity(),r.blur(),await b(()=>{_(t.onFocus).toHaveBeenCalled(),_(t.onBeforeInput).toHaveBeenCalled(),_(t.onInput).toHaveBeenCalled(),_(t.onKeyDown).toHaveBeenCalled(),_(t.onKeyPress).toHaveBeenCalled(),_(t.onKeyUp).toHaveBeenCalled(),_(t.onChange).toHaveBeenCalled(),_(t.onSelect).toHaveBeenCalled(),_(t.onInvalid).toHaveBeenCalled(),_(t.onBlur).toHaveBeenCalled()})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "jalali date",
    inputType: "JALALI"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    await userEvent.click(input);
    await userEvent.type(input, '1402/05/12');
    await waitFor(() => {
      expect(dateInput.showCalendar).toBe(true);
      expect(getCalendar(dateInput).inputType).toBe('JALALI');
      expect(dateInput.inputValue).toBe('1402/05/12');
      expect(dateInput.valueInDate).toBeTruthy();
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    await userEvent.type(input, '2024/02/29');
    await waitFor(() => {
      expect(dateInput.showCalendar).toBe(true);
      expect(getCalendar(dateInput).inputType).toBe('GREGORIAN');
      expect(dateInput.inputValue).toBe('2024/02/29');
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem'
    }}>
      <JBDateInput label='xl size' message="message underneath" size='xl'></JBDateInput>
      <JBDateInput label='xl size' placeholder="placeholder" size='xl'></JBDateInput>
      <JBDateInput label='xl size' value='2021-08-03T00:00:00.000Z' size='xl'></JBDateInput>

      <JBDateInput label='lg size' message="message underneath" size='lg'></JBDateInput>
      <JBDateInput label='lg size' placeholder="placeholder" size='lg'></JBDateInput>
      <JBDateInput label='lg size' value='2021-08-03T00:00:00.000Z' size='lg'></JBDateInput>

      <JBDateInput label='md size' message="message underneath" size='md'></JBDateInput>
      <JBDateInput label='md size' placeholder="placeholder" size='md'></JBDateInput>
      <JBDateInput label='md size' value='2021-08-03T00:00:00.000Z' size='md'></JBDateInput>

      <JBDateInput label='sm size' message="message underneath" size='sm'></JBDateInput>
      <JBDateInput label='sm size' placeholder="placeholder" size='sm'></JBDateInput>
      <JBDateInput label='sm size' value='2021-08-03T00:00:00.000Z' size='sm'></JBDateInput>

      <JBDateInput label='xs size' message="message underneath" size='xs'></JBDateInput>
      <JBDateInput label='xs size' placeholder="placeholder" size='xs'></JBDateInput>
      <JBDateInput label='xs size' value='2021-08-03T00:00:00.000Z' size='xs'></JBDateInput>
    </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "fa",
    dir: "rtl"
  },
  args: {
    label: "تاریخ جلالی",
    inputType: "JALALI",
    direction: 'rtl',
    showPersianNumber: true,
    message: "تاریخ جلالی با اعداد فارسی و به صورت راست به چپ"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    const input = getNativeInput(dateInput);
    const calendar = getCalendar(dateInput);
    await userEvent.click(input);
    await userEvent.type(input, '1402/05/12');
    await waitFor(() => {
      expect(dateInput.showPersianNumber).toBe(true);
      expect(calendar.showPersianNumber).toBe(true);
      expect(hasPersianDigits(dateInput.inputValue)).toBe(true);
      expect(hasPersianDigits(getCalendarShadow(calendar).querySelector('.navigator-title .year')?.textContent ?? '')).toBe(true);
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
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
    dateInput.value = '2023/08/03';
    await waitFor(() => {
      expect(dateInput.value).toMatch(/^\\d{4}\\/\\d{2}\\/\\d{2}$/);
      expect(args.format).toBe('YYYY/MM/DD');
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    placeholder: "please enter your date",
    direction: "ltr"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    format: "YYYY/MM/DD",
    direction: "ltr",
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
    dateInput.showCalendar = true;
    await waitFor(() => {
      expect(calendar.data.selectedYear).toBe(1360);
      expect(calendar.data.selectedMonth).toBe(5);
      expect(calendar.activeSection).toBe('DAY');
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "with persian number",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    format: "YYYY/MM/DD",
    direction: "ltr",
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
    dateInput.value = '1360/05/12';
    dateInput.showCalendar = true;
    await waitFor(() => {
      expect(dateInput.showPersianNumber).toBe(true);
      expect(hasPersianDigits(dateInput.inputValue)).toBe(true);
      expect(hasPersianDigits(getCalendarShadow(calendar).querySelector('.navigator-title .year')?.textContent ?? '')).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    jalaliMonthList: ["حَمَل", "ثَور", "جَوزا", "سَرَطان", "اَسَد", "سُنبُله", "میزان", "عَقرَب", "قَوس", "جَدْی", "دَلو", "حوت"]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const dateInput = getDateInput(canvasElement);
    const calendar = getCalendar(dateInput);
    const shadow = getCalendarShadow(calendar);
    dateInput.showCalendar = true;
    await userEvent.click(shadow.querySelector<HTMLElement>('.navigator-title .month')!);
    await waitFor(() => {
      expect(getCalendarMonthNames(calendar)).toEqual(args.jalaliMonthList);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: "required field",
    message: "please focus and then unfocus the input to see require validation message",
    required: true,
    direction: "ltr"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<HTMLDivElement>(null);
    return <div ref={ref} style={{
      height: "10rem",
      border: "solid 1px #666",
      overflow: "hidden"
    }}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <JBDateInput {...args} overflowRef={ref} />
        </div>;
  },
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: "with default error",
    error: 'error message',
    message: 'default message'
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    await waitFor(() => {
      expect(getMessageText(dateInput)).toBe('error message');
      expect(dateInput.reportValidity()).toBe(false);
    });
    dateInput.removeAttribute('error');
    dateInput.reportValidity();
    await waitFor(() => {
      expect(getMessageText(dateInput)).toBe('default message');
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | string>("");
    return <div style={{
      display: 'flex',
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
    await userEvent.click(canvas.getByText('set value to Today'));
    await waitFor(() => {
      expect(dateInput.value).not.toBe('');
      expect(dateInput.inputValue).not.toBe('');
      expect(getCalendar(dateInput).value.year).toBeTruthy();
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <div style={{
        width: '100%'
      }}>
          <h3>parent full width</h3>
          <JBDateInput></JBDateInput>
        </div>
        <div style={{
        width: '50%'
      }}>
          <h3>parent percent width</h3>
          <JBDateInput></JBDateInput>
        </div>
        <div style={{
        width: '18.75rem'
      }}>
          <h3>parent pixel width</h3>
          <JBDateInput></JBDateInput>
        </div>

        <h3>self full width</h3>
        <JBDateInput style={{
        width: '100%'
      }}></JBDateInput>

        <h3>self percent width</h3>
        <JBDateInput style={{
        width: '50%'
      }}></JBDateInput>

        <h3>self pixel width</h3>
        <JBDateInput style={{
        width: '18.75rem'
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
    const dateInputs = Array.from(canvasElement.querySelectorAll<HTMLElement>('jb-date-input'));
    await waitFor(() => {
      expect(dateInputs[1].getBoundingClientRect().width).toBeCloseTo(dateInputs[1].parentElement!.getBoundingClientRect().width, -1);
      expect(dateInputs[2].getBoundingClientRect().width).toBeCloseTo(300, -1);
      expect(dateInputs[5].getBoundingClientRect().width).toBeCloseTo(300, -1);
      expect(dateInputs[6].getBoundingClientRect().height).toBeGreaterThanOrEqual(70);
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <div>
        <JBDateInput {...args} onChange={e => {
        setValue(e.target.value);
      }}>
        </JBDateInput>
        <div>
          <table style={{
          margin: '1rem'
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...ValueTypeTest,
  args: {
    valueType: "GREGORIAN",
    inputType: "GREGORIAN",
    min: "2020-09-05T08:51:23.176Z",
    max: "2020-10-15T08:51:23.176Z",
    direction: "ltr"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, valueSetter] = useState("");
    const [dateValue, setDateValue] = useState(new Date());
    const validationList = [{
      validator: /^13.*$/g,
      message: 'date must be in 13 century'
    }, {
      validator: ({
        valueObject
      }: ValidationValue) => {
        return valueObject.jalali.day >= 15;
      },
      message: 'you can only choose 15th day of month'
    }];
    return <div>
        <JBDateInput name="first-date-input" value={value} onSelect={e => {
        valueSetter(e.target.value);
      }} onChange={e => {
        valueSetter(e.target.value);
      }} {...args} />
        <JBDateInput name="first-date-input" showPersianNumber={true} value={value} label={\`\${args.label} با اعداد فارسی \`} onSelect={e => {
        valueSetter(e.target.value);
      }} onChange={e => {
        valueSetter(e.target.value);
      }} {...args} />
        <div>
          <br /><br />valueType is {args.valueType}
          <br /><br />Min date is: {args.min ? args.min.toString() : "Unlimited"}
          <br /><br />Max date is: {args.max ? args.max.toString() : "Unlimited"}
          <br /><br />Your chosen date is: {value}
          <br /><JBButton onClick={() => {
          valueSetter("1400-06-18T00:00:00.000Z");
        }}>set value to 1400-06-18T00:00:00.000Z</JBButton>
          <br /><JBButton onClick={() => {
          valueSetter("1399/08/09");
        }}>set value to 1399/08/09</JBButton>
        </div>
        <h3>Center Aligned</h3>
        <div style={{
        '--jb-date-input-text-align': 'center'
      } as any}>
          <JBDateInput></JBDateInput>
        </div>
        <h3>test custom validation</h3>
        <JBDateInput validationList={validationList} value={value} onChange={e => {
        valueSetter(e.target.value);
      }} onSelect={e => {
        valueSetter(e.target.value);
      }} {...args}></JBDateInput>
        <h3>test via JS Date type value</h3>
        <JBDateInput value={dateValue} onChange={e => setDateValue(e.target.valueInDate as Date)}></JBDateInput>
      </div>;
  },
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1402-08-01T12:05:39.530Z",
    max: "1402-09-01T12:05:39.530Z"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    calendar.inputType = 'JALALI';
    calendar.data.selectedYear = 1399;
    calendar.data.selectedMonth = 4;
    await waitFor(() => {
      expect(getCalendarDay(calendar, 30).classList.contains('--disable')).toBe(true);
    });
    const valueBeforeDisabledClick = dateInput.value;
    await userEvent.click(getCalendarDay(calendar, 30));
    expect(dateInput.value).toBe(valueBeforeDisabledClick);
    dateInput.value = '1399-04-30T12:05:39.530Z';
    dateInput.reportValidity();
    await waitFor(() => {
      expect(dateInput.checkValidity()).toBe(false);
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    format: "YYYY/MM/DD",
    label: "date",
    valueType: "JALALI",
    min: "1399/05/01",
    max: "1400/08/01"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [setValue, setValueSetter] = useState<string | null>(null);
    const valueInDate = useMemo(() => {
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
          <br /><br />valueType is {args.valueType}
          <br /><br />Min date is: {args.min ? args.min.toString() : "Unlimited"}
          <br /><br />Max date is: {args.max ? args.max.toString() : "Unlimited"}
          <br /><br />Your chosen date is: {setValue}
          <br /><br />Your chosen date in greg is: {valueInDate}
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
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    dateInput.value = '1577836800000';
    dateInput.reportValidity();
    await waitFor(() => {
      expect(dateInput.checkValidity()).toBe(false);
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN"
  },
  play: async ({
    canvasElement
  }) => {
    const dateInput = getDateInput(canvasElement);
    dateInput.value = '2024-02-29T00:00:00.000Z';
    await waitFor(() => {
      expect(dateInput.inputType).toBe('GREGORIAN');
      expect(dateInput.valueType).toBe('GREGORIAN');
      expect(dateInput.value).toContain('2024');
      expect(dateInput.valueInDate).toBeTruthy();
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "راست به چپ",
    style: {
      direction: "rtl"
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  name: 'headless sample',
  args: {},
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('input');
    expect(input).toBeTruthy();
    await userEvent.click(input!);
    await userEvent.type(input!, '1402/13/45');
    await waitFor(() => {
      expect(input!.value).not.toContain('13');
      expect(input!.selectionStart).toBe(input!.selectionEnd);
    });
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(input!, '1402/05/12');
    await waitFor(() => {
      expect(input!.value).toBe('1402/05/12');
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="calendar-trigger-icon" style={{
      height: '100%',
      "aspectRatio": "1"
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr",
    style: {
      "--jb-date-input-calendar-trigger-display": "none"
    } as CSSProperties
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="inline-start-section" style={{
      height: "1.5rem",
      borderInlineEnd: "2px solid #262626",
      paddingInline: "0.5rem"
    }}>
        🎉Birthday
      </div>
      <div slot="inline-end-section">⭐</div>
    </JBDateInput>,
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    const form = canvasElement.querySelector<HTMLFormElement>('form');
    expect(form).toBeTruthy();
    dateInput.value = '2024-02-29T00:00:00.000Z';
    await waitFor(() => {
      expect(new FormData(form!).get('birthdate')).toBe(dateInput.value);
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
      dateInput.dispatchEvent(new CustomEvent('load'));
      expect(args.onLoad).toHaveBeenCalled();
    });
    await waitFor(() => {
      dateInput.dispatchEvent(new CustomEvent('init'));
      expect(args.onInit).toHaveBeenCalled();
    });
    await userEvent.click(input);
    await userEvent.type(input, '1402/05/12');
    const calendar = getCalendar(dateInput);
    calendar.data.selectedYear = 1402;
    calendar.data.selectedMonth = 5;
    await userEvent.click(getCalendarDay(calendar, 13));
    dateInput.setAttribute('error', 'forced error');
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
}`,...Q.parameters?.docs?.source}}},$=`Normal.Jalali.Gregorian.SizeVariants.JalaliWithPersianSetup.CustomFormat.Placeholder.WithDefaultCalendarDate.PersianNumber.CustomMonthName.Required.WithOverflowHandler.OverflowWithinParent.withError.ValueSetGet.sizeTest.ValueTypeTest.GregorianMinMaxTest.JalaliTest.JalaliMinMaxTest.JalaliMinMaxTestWithCustomFormat.TimeStampTest.TimeStampMinMaxTest.GregorianInputTest.RightToLeftTest.Headless.WithCustomIcon.WithoutIcon.WithInlineSections.InFormTest.EventTest`.split(`.`)}));me();export{D as CustomFormat,j as CustomMonthName,Q as EventTest,w as Gregorian,G as GregorianInputTest,z as GregorianMinMaxTest,q as Headless,Z as InFormTest,C as Jalali,V as JalaliMinMaxTest,H as JalaliMinMaxTestWithCustomFormat,B as JalaliTest,E as JalaliWithPersianSetup,S as Normal,P as OverflowWithinParent,A as PersianNumber,O as Placeholder,M as Required,K as RightToLeftTest,T as SizeVariants,W as TimeStampMinMaxTest,U as TimeStampTest,I as ValueSetGet,R as ValueTypeTest,J as WithCustomIcon,k as WithDefaultCalendarDate,X as WithInlineSections,N as WithOverflowHandler,Y as WithoutIcon,$ as __namedExportsOrder,x as default,me as n,L as sizeTest,le as t,F as withError};