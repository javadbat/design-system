import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-Sdk7KWEq.js";import{r as a,t as o}from"./react-2_3NvgYd.js";import{i as s,n as c,t as l}from"./main-CNDWJrf6.js";var u=t((()=>{})),d=e({CustomFormat:()=>w,CustomMonthName:()=>O,DarkMode:()=>M,EventTest:()=>X,Gregorian:()=>x,GregorianInputTest:()=>U,GregorianMinMaxTest:()=>L,Headless:()=>G,InFormTest:()=>Y,Jalali:()=>b,JalaliMinMaxTest:()=>z,JalaliMinMaxTestWithCustomFormat:()=>B,JalaliTest:()=>R,JalaliWithPersianSetup:()=>C,Normal:()=>y,OverflowWithinParent:()=>j,PersianNumber:()=>D,Placeholder:()=>T,Required:()=>k,RightToLeftTest:()=>W,SizeVariants:()=>S,TimeStampMinMaxTest:()=>H,TimeStampTest:()=>V,ValueSetGet:()=>P,ValueTypeTest:()=>I,WithCustomIcon:()=>K,WithDefaultCalendarDate:()=>E,WithInlineSections:()=>J,WithOverflowHandler:()=>A,WithoutIcon:()=>q,__namedExportsOrder:()=>Z,default:()=>v,sizeTest:()=>F,withError:()=>N}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q=t((()=>{f=n(r(),1),l(),u(),p=n(r(),1),m=n(r(),1),h=n(r(),1),g=n(r(),1),o(),_=i(),v={title:`Components/form elements/Inputs/JBDateInput`,component:c},y={args:{label:`date`}},b={args:{label:`jalali date`,inputType:`JALALI`}},x={args:{label:`gregorian date`,inputType:`GREGORIAN`}},S={render:()=>(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,_.jsx)(c,{label:`xl size`,message:`message underneath`,size:`xl`}),(0,_.jsx)(c,{label:`xl size`,placeholder:`placeholder`,size:`xl`}),(0,_.jsx)(c,{label:`xl size`,value:`2021-08-03T00:00:00.000Z`,size:`xl`}),(0,_.jsx)(c,{label:`lg size`,message:`message underneath`,size:`lg`}),(0,_.jsx)(c,{label:`lg size`,placeholder:`placeholder`,size:`lg`}),(0,_.jsx)(c,{label:`lg size`,value:`2021-08-03T00:00:00.000Z`,size:`lg`}),(0,_.jsx)(c,{label:`md size`,message:`message underneath`,size:`md`}),(0,_.jsx)(c,{label:`md size`,placeholder:`placeholder`,size:`md`}),(0,_.jsx)(c,{label:`md size`,value:`2021-08-03T00:00:00.000Z`,size:`md`}),(0,_.jsx)(c,{label:`sm size`,message:`message underneath`,size:`sm`}),(0,_.jsx)(c,{label:`sm size`,placeholder:`placeholder`,size:`sm`}),(0,_.jsx)(c,{label:`sm size`,value:`2021-08-03T00:00:00.000Z`,size:`sm`}),(0,_.jsx)(c,{label:`xs size`,message:`message underneath`,size:`xs`}),(0,_.jsx)(c,{label:`xs size`,placeholder:`placeholder`,size:`xs`}),(0,_.jsx)(c,{label:`xs size`,value:`2021-08-03T00:00:00.000Z`,size:`xs`})]})},C={globals:{locale:`fa`,dir:`rtl`},args:{label:`تاریخ جلالی`,inputType:`JALALI`,direction:`rtl`,showPersianNumber:!0,message:`تاریخ جلالی با اعداد فارسی و به صورت راست به چپ`}},w={render:e=>{let[t,n]=(0,p.useState)(``),[r,i]=(0,p.useState)(``);return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{children:`input.value in different format`}),(0,_.jsx)(`p`,{children:`try to input some value inside date-input and see the changes in the paragraphs below`}),(0,_.jsx)(c,{label:`value with arguments format(${e.format})`,format:e.format,value:t,onChange:e=>n(e.target.value)}),(0,_.jsxs)(`p`,{children:[`your inputted value is: `,t]}),(0,_.jsx)(c,{label:`value with YYYY-MM-DD format`,format:`YYYY-MM-DD format`,value:r,onChange:e=>i(e.target.value)}),(0,_.jsxs)(`p`,{children:[`your inputted value is: `,r]})]})},args:{format:`YYYY/MM/DD`}},T={args:{label:`date`,placeholder:`please enter your date`,direction:`ltr`}},E={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,format:`YYYY/MM/DD`,direction:`ltr`,calendarDefaultDateView:{year:1360,month:5}}},D={args:{label:`with persian number`,valueType:`GREGORIAN`,inputType:`JALALI`,format:`YYYY/MM/DD`,direction:`ltr`,showPersianNumber:!0,calendarDefaultDateView:{year:1360,month:5}}},O={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,jalaliMonthList:[`حَمَل`,`ثَور`,`جَوزا`,`سَرَطان`,`اَسَد`,`سُنبُله`,`میزان`,`عَقرَب`,`قَوس`,`جَدْی`,`دَلو`,`حوت`]}},k={args:{label:`required field`,message:`please focus and then unfocus the input to see require validation message`,required:!0,direction:`ltr`}},A={args:{label:`will jump on overflow`,overflowHandler:`SLIDE`}},j={render:e=>{let t=(0,f.useRef)(null);return(0,_.jsx)(`div`,{ref:t,style:{height:`10rem`,border:`solid 1px #666`,overflow:`hidden`},children:(0,_.jsx)(c,{...e,overflowRef:t})})},args:{label:`will jump on overflow`,overflowHandler:`SLIDE`}},M={render:()=>(0,_.jsxs)(`div`,{className:`dark-theme`,children:[(0,_.jsx)(`h1`,{children:`dark mode test`}),(0,_.jsx)(c,{})]})},N={args:{label:`with default error`,error:`error message`,message:`default message`}},P={render:()=>{let[e,t]=(0,p.useState)(``);return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,_.jsx)(c,{value:e,onChange:e=>t(e.target.value)}),(0,_.jsx)(a,{onClick:()=>t(new Date),children:`set value to Today`})]})}},F={render:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{style:{width:`100%`},children:[(0,_.jsx)(`h3`,{children:`parent full width`}),(0,_.jsx)(c,{})]}),(0,_.jsxs)(`div`,{style:{width:`50%`},children:[(0,_.jsx)(`h3`,{children:`parent percent width`}),(0,_.jsx)(c,{})]}),(0,_.jsxs)(`div`,{style:{width:`300px`},children:[(0,_.jsx)(`h3`,{children:`parent pixel width`}),(0,_.jsx)(c,{})]}),(0,_.jsx)(`h3`,{children:`self full width`}),(0,_.jsx)(c,{style:{width:`100%`}}),(0,_.jsx)(`h3`,{children:`self percent width`}),(0,_.jsx)(c,{style:{width:`50%`}}),(0,_.jsx)(`h3`,{children:`self pixel width`}),(0,_.jsx)(c,{style:{width:`300px`}}),(0,_.jsx)(`h3`,{children:`self pixel height`}),(0,_.jsx)(c,{style:{"--jb-input-height":`70px`}})]})},I={render:e=>{let[t,n]=(0,p.useState)(``);return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(c,{...e,onChange:e=>{n(e.target.value)}}),(0,_.jsx)(`div`,{children:(0,_.jsx)(`table`,{style:{margin:`1rem`},children:(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`valueType is`}),(0,_.jsx)(`td`,{children:e.valueType})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`inputType is`}),(0,_.jsx)(`td`,{children:e.inputType})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`Min date is:`}),(0,_.jsx)(`td`,{children:e.min?e.min.toString():`Unlimited`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`Max date is:`}),(0,_.jsx)(`td`,{children:e.max?e.max.toString():`Unlimited`})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{children:`Your chosen date is:`}),(0,_.jsx)(`td`,{children:t})]})]})})})]})},args:{valueType:`GREGORIAN`,inputType:`GREGORIAN`,min:``,max:``}},L={...I,args:{valueType:`GREGORIAN`,inputType:`GREGORIAN`,min:`2020-09-05T08:51:23.176Z`,max:`2020-10-15T08:51:23.176Z`,direction:`ltr`}},R={render:e=>{let[t,n]=(0,p.useState)(``),[r,i]=(0,p.useState)(new Date),o=[{validator:/^13.*$/g,message:`date must be in 13 century`},{validator:({valueObject:e})=>e.jalali.day>=15,message:`you can only choose 15th day of month`}];return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(c,{name:`first-date-input`,value:t,onSelect:e=>{n(e.target.value)},onChange:e=>{n(e.target.value)},...e}),(0,_.jsx)(c,{name:`first-date-input`,showPersianNumber:!0,value:t,label:e.label+` با اعداد فارسی `,onSelect:e=>{n(e.target.value)},onChange:e=>{n(e.target.value)},...e}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`valueType is `,e.valueType,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Min date is: `,e.min?e.min.toString():`Unlimited`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Max date is: `,e.max?e.max.toString():`Unlimited`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Your chosen date is: `,t,(0,_.jsx)(`br`,{}),(0,_.jsx)(a,{onClick:()=>{n(`1400-06-18T00:00:00.000Z`)},children:`set value to 1400-06-18T00:00:00.000Z`})]}),(0,_.jsx)(`h3`,{children:`Center Aligned`}),(0,_.jsx)(`div`,{style:{"--jb-date-input-text-align":`center`},children:(0,_.jsx)(c,{})}),(0,_.jsx)(`h3`,{children:`test custom validation`}),(0,_.jsx)(c,{validationList:o,value:t,onChange:e=>{n(e.target.value)},onSelect:e=>{n(e.target.value)},...e}),(0,_.jsx)(`h3`,{children:`test via JS Date type value`}),(0,_.jsx)(c,{value:r,onChange:e=>i(e.target.valueInDate)})]})},args:{label:`date`,valueType:`JALALI`,min:`1402-08-01T12:05:39.530Z`,max:`1402-09-01T12:05:39.530Z`}},z={...R,args:{label:`date`,valueType:`JALALI`,min:`1399-05-01T12:05:39.530Z`,max:`1400-08-01T12:05:39.530Z`}},B={...R,args:{format:`YYYY/MM/DD`,label:`date`,valueType:`JALALI`,min:`1399/05/01`,max:`1400/08/01`}},V={render:e=>{let[t,n]=(0,p.useState)(null),r=(0,m.useMemo)(()=>t?new Date(parseInt(t)).toString():null,[t]);return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(c,{value:t,valueType:`TIME_STAMP`,onChange:(0,h.useCallback)(e=>{n(e.target.value)},[]),...e}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`valueType is `,e.valueType,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Min date is: `,e.min?e.min.toString():`Unlimited`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Max date is: `,e.max?e.max.toString():`Unlimited`,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Your chosen date is: `,t,(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),`Your chosen date in greg is: `,r]})]})},args:{label:`date`,valueType:`TIME_STAMP`}},H={...V,args:{label:`date`,valueType:`TIME_STAMP`,min:`1596291030322`,max:`1696291030322`}},U={args:{label:`date`,valueType:`GREGORIAN`,inputType:`GREGORIAN`}},W={args:{label:`راست به چپ`,style:{direction:`rtl`}}},G={render:e=>{let t=(0,f.useRef)(null),{value:n,onChange:r,onClick:i,onFocus:a}=s({dateInputType:`JALALI`,ref:t,showPersianNumber:!1});return(0,_.jsx)(`input`,{ref:t,value:n,onChange:r,onClick:i,onFocus:a})},name:`headless sample`,args:{}},K={render:e=>(0,_.jsx)(c,{...e,children:(0,_.jsx)(`div`,{slot:`calendar-trigger-icon`,children:(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,x:`0px`,y:`0px`,viewBox:`0 0 610.398 610.398`,children:[(0,_.jsx)(`title`,{children:`calendar icon`}),(0,_.jsx)(`g`,{children:(0,_.jsxs)(`g`,{children:[(0,_.jsx)(`path`,{d:`M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z`}),(0,_.jsx)(`path`,{d:`M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z`}),(0,_.jsx)(`path`,{d:`M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z`}),(0,_.jsx)(`path`,{d:`M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z`}),(0,_.jsx)(`path`,{d:`M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z`}),(0,_.jsx)(`path`,{d:`M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z`}),(0,_.jsx)(`path`,{d:`M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z`}),(0,_.jsx)(`path`,{d:`M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z`}),(0,_.jsx)(`path`,{d:`M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z`}),(0,_.jsx)(`path`,{d:`M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z`}),(0,_.jsx)(`path`,{d:`M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z`})]})})]})})}),args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`}},q={args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,direction:`ltr`,style:{"--jb-date-input-calendar-trigger-display":`none`}}},J={render:e=>(0,_.jsxs)(c,{...e,children:[(0,_.jsx)(`div`,{slot:`inline-start-section`,style:{height:`1.5rem`,borderInlineEnd:`2px solid #262626`,paddingInline:`0.5rem`},children:`🎉Birthday`}),(0,_.jsx)(`div`,{slot:`inline-end-section`,children:`⭐`})]}),args:{label:`date`,valueType:`GREGORIAN`,inputType:`JALALI`,direction:`ltr`}},Y={render:e=>{let t=(0,f.useRef)(null);return(0,g.useEffect)(()=>{function e(e){var t=new FormData(e.target);let n=Object.fromEntries(t);console.log(n),e.preventDefault()}t.current?.addEventListener(`submit`,e)},[t]),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{children:`Form Submit Test`}),(0,_.jsx)(`p`,{children:`change inputs value and click on submit to submit the form, then see the browser console to see the submitted value`}),(0,_.jsxs)(`form`,{ref:t,children:[(0,_.jsx)(`input`,{name:`test-input`,value:`test value`}),(0,_.jsx)(c,{label:`date in form`,name:`birthdate`}),(0,_.jsx)(`div`,{children:`see console after submit clicked`}),(0,_.jsx)(`button`,{type:`submit`,children:`submit`})]})]})}},X={args:{label:`event test:`,message:`check the console`,onChange:e=>{console.log(`onChange`,e)},onLoad:e=>{console.log(`onLoad`,e)},onInit:e=>{console.log(`onInit`,e)},onInvalid:e=>{console.log(`onInvalid`,e)},onBeforeInput:e=>{console.log(`onBeforeInput`,e)},onInput:e=>{console.log(`onInput`,e)},onKeyUp:e=>{console.log(`onKeyUp`,e.composedPath())},onKeyDown:e=>{console.log(`onKeyDown`,e)},onKeyPress:e=>{console.log(`onKeyPress`,e)},onSelect:e=>{console.log(`onSelect`,e)},onFocus:e=>{console.log(`onFocus`,e)},onBlur:e=>{console.log(`onBlur`,e)}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "jalali date",
    inputType: "JALALI"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "gregorian date",
    inputType: "GREGORIAN"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    placeholder: "please enter your date",
    direction: "ltr"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    jalaliMonthList: ["حَمَل", "ثَور", "جَوزا", "سَرَطان", "اَسَد", "سُنبُله", "میزان", "عَقرَب", "قَوس", "جَدْی", "دَلو", "حوت"]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "required field",
    message: "please focus and then unfocus the input to see require validation message",
    required: true,
    direction: "ltr"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="dark-theme">
        <h1>dark mode test</h1>
        <JBDateInput></JBDateInput>
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "with default error",
    error: 'error message',
    message: 'default message'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
        width: '300px'
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
        width: '300px'
      }}></JBDateInput>

        <h3>self pixel height</h3>
        <JBDateInput style={{
        "--jb-input-height": "70px"
      } as any}></JBDateInput>
      </>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  //TODO add arg types so control in Value doc works better for test
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...ValueTypeTest,
  args: {
    valueType: "GREGORIAN",
    inputType: "GREGORIAN",
    min: "2020-09-05T08:51:23.176Z",
    max: "2020-10-15T08:51:23.176Z",
    direction: "ltr"
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
        <JBDateInput name="first-date-input" showPersianNumber={true} value={value} label={args.label + ' با اعداد فارسی '} onSelect={e => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1399-05-01T12:05:39.530Z",
    max: "1400-08-01T12:05:39.530Z"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    format: "YYYY/MM/DD",
    label: "date",
    valueType: "JALALI",
    min: "1399/05/01",
    max: "1400/08/01"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [setValue, setValueSetter] = useState<string | null>(null);
    const valueInDate = useMemo(() => {
      if (setValue) {
        return new Date(parseInt(setValue)).toString();
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
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...TimeStampTest,
  args: {
    label: "date",
    valueType: "TIME_STAMP",
    min: "1596291030322",
    max: "1696291030322"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "راست به چپ",
    style: {
      direction: "rtl"
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  args: {}
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="calendar-trigger-icon">
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr",
    style: {
      "--jb-date-input-calendar-trigger-display": "none"
    } as CSSProperties
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "event test:",
    message: "check the console",
    onChange: e => {
      console.log("onChange", e);
    },
    onLoad: e => {
      console.log("onLoad", e);
    },
    onInit: e => {
      console.log("onInit", e);
    },
    onInvalid: e => {
      console.log("onInvalid", e);
    },
    onBeforeInput: e => {
      console.log("onBeforeInput", e);
    },
    onInput: e => {
      console.log("onInput", e);
    },
    onKeyUp: e => {
      console.log("onKeyUp", e.composedPath());
    },
    onKeyDown: e => {
      console.log("onKeyDown", e);
    },
    onKeyPress: e => {
      console.log("onKeyPress", e);
    },
    onSelect: e => {
      console.log("onSelect", e);
    },
    onFocus: e => {
      console.log("onFocus", e);
    },
    onBlur: e => {
      console.log("onBlur", e);
    }
  }
}`,...X.parameters?.docs?.source}}},Z=`Normal.Jalali.Gregorian.SizeVariants.JalaliWithPersianSetup.CustomFormat.Placeholder.WithDefaultCalendarDate.PersianNumber.CustomMonthName.Required.WithOverflowHandler.OverflowWithinParent.DarkMode.withError.ValueSetGet.sizeTest.ValueTypeTest.GregorianMinMaxTest.JalaliTest.JalaliMinMaxTest.JalaliMinMaxTestWithCustomFormat.TimeStampTest.TimeStampMinMaxTest.GregorianInputTest.RightToLeftTest.Headless.WithCustomIcon.WithoutIcon.WithInlineSections.InFormTest.EventTest`.split(`.`)}));Q();export{w as CustomFormat,O as CustomMonthName,M as DarkMode,X as EventTest,x as Gregorian,U as GregorianInputTest,L as GregorianMinMaxTest,G as Headless,Y as InFormTest,b as Jalali,z as JalaliMinMaxTest,B as JalaliMinMaxTestWithCustomFormat,R as JalaliTest,C as JalaliWithPersianSetup,y as Normal,j as OverflowWithinParent,D as PersianNumber,T as Placeholder,k as Required,W as RightToLeftTest,S as SizeVariants,H as TimeStampMinMaxTest,V as TimeStampTest,P as ValueSetGet,I as ValueTypeTest,K as WithCustomIcon,E as WithDefaultCalendarDate,J as WithInlineSections,A as WithOverflowHandler,q as WithoutIcon,Z as __namedExportsOrder,v as default,Q as n,F as sizeTest,d as t,N as withError};