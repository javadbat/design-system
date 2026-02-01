import{r as o,R as e}from"./index-DwQS_Y10.js";import{m as a,p as Bt}from"./JBDateInput-CofqkoS-.js";import{o as At}from"./JBButton-CgFwNxXH.js";const Ct={title:"Components/form elements/Inputs/JBDateInput",component:a},p={args:{label:"date"}},g={args:{label:"jalali date",inputType:"JALALI"}},h={args:{label:"gregorian date",inputType:"GREGORIAN"}},v={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(a,{label:"xl size",message:"message underneath",size:"xl"}),e.createElement(a,{label:"xl size",placeholder:"placeholder",size:"xl"}),e.createElement(a,{label:"xl size",value:"2021-08-03T00:00:00.000Z",size:"xl"}),e.createElement(a,{label:"lg size",message:"message underneath",size:"lg"}),e.createElement(a,{label:"lg size",placeholder:"placeholder",size:"lg"}),e.createElement(a,{label:"lg size",value:"2021-08-03T00:00:00.000Z",size:"lg"}),e.createElement(a,{label:"md size",message:"message underneath",size:"md"}),e.createElement(a,{label:"md size",placeholder:"placeholder",size:"md"}),e.createElement(a,{label:"md size",value:"2021-08-03T00:00:00.000Z",size:"md"}),e.createElement(a,{label:"sm size",message:"message underneath",size:"sm"}),e.createElement(a,{label:"sm size",placeholder:"placeholder",size:"sm"}),e.createElement(a,{label:"sm size",value:"2021-08-03T00:00:00.000Z",size:"sm"}),e.createElement(a,{label:"xs size",message:"message underneath",size:"xs"}),e.createElement(a,{label:"xs size",placeholder:"placeholder",size:"xs"}),e.createElement(a,{label:"xs size",value:"2021-08-03T00:00:00.000Z",size:"xs"}))},b={globals:{locale:"fa",dir:"rtl"},args:{label:"تاریخ جلالی",inputType:"JALALI",direction:"rtl",showPersianNumber:!0,message:"تاریخ جلالی با اعداد فارسی و به صورت راست به چپ"}},E={render:t=>{const[n,r]=o.useState(""),[s,i]=o.useState("");return e.createElement("div",null,e.createElement("h2",null,"input.value in different format"),e.createElement("p",null,"try to input some value inside date-input and see the changes in the paragraphs below"),e.createElement(a,{label:`value with arguments format(${t.format})`,format:t.format,value:n,onChange:u=>r(u.target.value)}),e.createElement("p",null,"your inputted value is: ",n),e.createElement(a,{label:"value with YYYY-MM-DD format",format:"YYYY-MM-DD format",value:s,onChange:u=>i(u.target.value)}),e.createElement("p",null,"your inputted value is: ",s))},args:{format:"YYYY/MM/DD"}},I={args:{label:"date",placeholder:"please enter your date",direction:"ltr"}},f={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",format:"YYYY/MM/DD",direction:"ltr",calendarDefaultDateView:{year:1360,month:5}}},y={args:{label:"with persian number",valueType:"GREGORIAN",inputType:"JALALI",format:"YYYY/MM/DD",direction:"ltr",showPersianNumber:!0,calendarDefaultDateView:{year:1360,month:5}}},T={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},D={args:{label:"required field",message:"please focus and then unfocus the input to see require validation message",required:!0,direction:"ltr"}},S={args:{label:"will jump on overflow",overflowHandler:"SLIDE"}},J={render:t=>{const n=o.useRef(null);return e.createElement("div",{ref:n,style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},e.createElement(a,{...t,overflowRef:n}))},args:{label:"will jump on overflow",overflowHandler:"SLIDE"}},M={render:()=>e.createElement("div",{className:"dark-theme"},e.createElement("h1",null,"dark mode test"),e.createElement(a,null))},x={args:{label:"with default error",error:"error message",message:"default message"}},w={render:()=>{const[t,n]=o.useState("");return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(a,{value:t,onChange:r=>n(r.target.value)}),e.createElement(At,{onClick:()=>n(new Date)},"set value to Today"))}},z={render:()=>e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"100%"}},e.createElement("h3",null,"parent full width"),e.createElement(a,null)),e.createElement("div",{style:{width:"50%"}},e.createElement("h3",null,"parent percent width"),e.createElement(a,null)),e.createElement("div",{style:{width:"300px"}},e.createElement("h3",null,"parent pixel width"),e.createElement(a,null)),e.createElement("h3",null,"self full width"),e.createElement(a,{style:{width:"100%"}}),e.createElement("h3",null,"self percent width"),e.createElement(a,{style:{width:"50%"}}),e.createElement("h3",null,"self pixel width"),e.createElement(a,{style:{width:"300px"}}),e.createElement("h3",null,"self pixel height"),e.createElement(a,{style:{"--jb-input-height":"70px"}}))},m={render:t=>{const[n,r]=o.useState("");return e.createElement("div",null,e.createElement(a,{...t,onChange:s=>{r(s.target.value)}}),e.createElement("div",null,e.createElement("table",{style:{margin:"1rem"}},e.createElement("tr",null,e.createElement("td",null,"valueType is"),e.createElement("td",null,t.valueType)),e.createElement("tr",null,e.createElement("td",null,"inputType is"),e.createElement("td",null,t.inputType)),e.createElement("tr",null,e.createElement("td",null,"Min date is:"),e.createElement("td",null,t.min?t.min.toString():"Unlimited")),e.createElement("tr",null,e.createElement("td",null,"Max date is:"),e.createElement("td",null,t.max?t.max.toString():"Unlimited")),e.createElement("tr",null,e.createElement("td",null,"Your chosen date is:"),e.createElement("td",null,n)))))},args:{valueType:"GREGORIAN",inputType:"GREGORIAN",min:"",max:""}},B={...m,args:{valueType:"GREGORIAN",inputType:"GREGORIAN",min:"2020-09-05T08:51:23.176Z",max:"2020-10-15T08:51:23.176Z",direction:"ltr"}},c={render:t=>{const[n,r]=o.useState(""),[s,i]=o.useState(new Date),u=[{validator:/^13.*$/g,message:"date must be in 13 century"},{validator:({valueObject:l})=>l.jalali.day>=15,message:"you can only choose 15th day of month"}];return e.createElement("div",null,e.createElement(a,{name:"first-date-input",value:n,onSelect:l=>{r(l.target.value)},onChange:l=>{r(l.target.value)},...t}),e.createElement(a,{name:"first-date-input",showPersianNumber:!0,value:n,label:t.label+" با اعداد فارسی ",onSelect:l=>{r(l.target.value)},onChange:l=>{r(l.target.value)},...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",n,e.createElement("br",null),e.createElement("button",{onClick:()=>{r("1400-06-18T00:00:00.000Z")}},"set value to 1400-06-18T00:00:00.000Z")),e.createElement("h3",null,"Center Aligned"),e.createElement("div",{style:{"--jb-date-input-text-align":"center"}},e.createElement(a,null)),e.createElement("h3",null,"test custom validation"),e.createElement(a,{validationList:u,value:n,onChange:l=>{r(l.target.value)},onSelect:l=>{r(l.target.value)},...t}),e.createElement("h3",null,"test via JS Date type value"),e.createElement(a,{value:s,onChange:l=>i(l.target.valueInDate)}))},args:{label:"date",valueType:"JALALI",min:"1402-08-01T12:05:39.530Z",max:"1402-09-01T12:05:39.530Z"}},A={...c,args:{label:"date",valueType:"JALALI",min:"1399-05-01T12:05:39.530Z",max:"1400-08-01T12:05:39.530Z"}},C={...c,args:{format:"YYYY/MM/DD",label:"date",valueType:"JALALI",min:"1399/05/01",max:"1400/08/01"}},d={render:t=>{const[n,r]=o.useState(null),s=o.useMemo(()=>n?new Date(parseInt(n)).toString():null,[n]),i=o.useCallback(u=>{r(u.target.value)},[]);return e.createElement("div",null,e.createElement(a,{value:n,valueType:"TIME_STAMP",onChange:i,...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",n,e.createElement("br",null),e.createElement("br",null),"Your chosen date in greg is: ",s))},args:{label:"date",valueType:"TIME_STAMP"}},R={...d,args:{label:"date",valueType:"TIME_STAMP",min:"1596291030322",max:"1696291030322"}},L={args:{label:"date",valueType:"GREGORIAN",inputType:"GREGORIAN"}},V={args:{label:"راست به چپ",style:{direction:"rtl"}}},G={render:t=>{const n=o.useRef(null),{value:r,onChange:s,onClick:i,onFocus:u}=Bt({dateInputType:"JALALI",ref:n});return e.createElement("input",{ref:n,value:r,onChange:s,onClick:i,onFocus:u})},name:"headless sample",args:{}},Y={render:t=>e.createElement(a,{...t},e.createElement("div",{slot:"calendar-trigger-icon"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 610.398 610.398"},e.createElement("g",null,e.createElement("g",null,e.createElement("path",{d:"M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"}),e.createElement("path",{d:"M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"}),e.createElement("path",{d:"M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"}),e.createElement("path",{d:"M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"}),e.createElement("path",{d:"M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"}),e.createElement("path",{d:"M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"}),e.createElement("path",{d:"M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"}),e.createElement("path",{d:"M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"}),e.createElement("path",{d:"M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"}),e.createElement("path",{d:"M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"}),e.createElement("path",{d:"M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"})))))),args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI"}},N={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",direction:"ltr",style:{"--jb-date-input-calendar-trigger-display":"none"}}},H={render:t=>e.createElement(a,{...t},e.createElement("div",{slot:"inline-start-section",style:{height:"1.5rem",borderInlineEnd:"2px solid #262626",paddingInline:"0.5rem"}},"🎉Birthday"),e.createElement("div",{slot:"inline-end-section"},"⭐")),args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",direction:"ltr"}},O={render:t=>{const n=o.useRef(null);return o.useEffect(()=>{var s;function r(i){var u=new FormData(i.target);const l=Object.fromEntries(u);console.log(l),i.preventDefault()}(s=n.current)==null||s.addEventListener("submit",r)},[n]),e.createElement("div",null,e.createElement("h3",null,"Form Submit Test"),e.createElement("p",null,"change inputs value and click on submit to submit the form, then see the browser console to see the submitted value"),e.createElement("form",{ref:n},e.createElement("input",{name:"test-input",value:"test value"}),e.createElement(a,{label:"date in form",name:"birthdate"}),e.createElement("div",null,"see console after submit clicked"),e.createElement("button",{type:"submit"},"submit")))}},P={args:{label:"event test:",message:"check the console",onChange:t=>{console.log("onChange",t)},onLoad:t=>{console.log("onLoad",t)},onInit:t=>{console.log("onInit",t)},onInvalid:t=>{console.log("onInvalid",t)},onBeforeInput:t=>{console.log("onBeforeInput",t)},onInput:t=>{console.log("onInput",t)},onKeyUp:t=>{console.log("onKeyUp",t.composedPath())},onKeyDown:t=>{console.log("onKeyDown",t)},onKeyPress:t=>{console.log("onKeyPress",t)},onSelect:t=>{console.log("onSelect",t)},onFocus:t=>{console.log("onFocus",t)},onBlur:t=>{console.log("onBlur",t)}}};var Z,k,F;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "date"
  }
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,W,U;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "jalali date",
    inputType: "JALALI"
  }
}`,...(U=(W=g.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var K,_,q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "gregorian date",
    inputType: "GREGORIAN"
  }
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var $,Q,X;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,le;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(re=E.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,oe,ue;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: "date",
    placeholder: "please enter your date",
    direction: "ltr"
  }
}`,...(ue=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,ce,me;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(me=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,ge;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,ve,be;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    jalaliMonthList: ["حَمَل", "ثَور", "جَوزا", "سَرَطان", "اَسَد", "سُنبُله", "میزان", "عَقرَب", "قَوس", "جَدْی", "دَلو", "حوت"]
  }
}`,...(be=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Ee,Ie,fe;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: "required field",
    message: "please focus and then unfocus the input to see require validation message",
    required: true,
    direction: "ltr"
  }
}`,...(fe=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var ye,Te,De;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...(De=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Se,Je,Me;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Me=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Me.source}}};var xe,we,ze;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    return <div className="dark-theme">
        <h1>dark mode test</h1>
        <JBDateInput></JBDateInput>
      </div>;
  }
}`,...(ze=(we=M.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Be,Ae,Ce;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    label: "with default error",
    error: 'error message',
    message: 'default message'
  }
}`,...(Ce=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Re,Le,Ve;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ve=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var Ge,Ye,Ne;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ne=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Ne.source}}};var He,Oe,Pe;m.parameters={...m.parameters,docs:{...(He=m.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=m.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Ze,ke,Fe;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  ...ValueTypeTest,
  args: {
    valueType: "GREGORIAN",
    inputType: "GREGORIAN",
    min: "2020-09-05T08:51:23.176Z",
    max: "2020-10-15T08:51:23.176Z",
    direction: "ltr"
  }
}`,...(Fe=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Fe.source}}};var je,We,Ue;c.parameters={...c.parameters,docs:{...(je=c.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
          <br /><button onClick={() => {
          valueSetter("1400-06-18T00:00:00.000Z");
        }}>set value to 1400-06-18T00:00:00.000Z</button>
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
}`,...(Ue=(We=c.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var Ke,_e,qe;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1399-05-01T12:05:39.530Z",
    max: "1400-08-01T12:05:39.530Z"
  }
}`,...(qe=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var $e,Qe,Xe;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    format: "YYYY/MM/DD",
    label: "date",
    valueType: "JALALI",
    min: "1399/05/01",
    max: "1400/08/01"
  }
}`,...(Xe=(Qe=C.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var et,tt,at;d.parameters={...d.parameters,docs:{...(et=d.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=d.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,lt;R.parameters={...R.parameters,docs:{...(nt=R.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  ...TimeStampTest,
  args: {
    label: "date",
    valueType: "TIME_STAMP",
    min: "1596291030322",
    max: "1696291030322"
  }
}`,...(lt=(rt=R.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};var st,ot,ut;L.parameters={...L.parameters,docs:{...(st=L.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN"
  }
}`,...(ut=(ot=L.parameters)==null?void 0:ot.docs)==null?void 0:ut.source}}};var it,ct,mt;V.parameters={...V.parameters,docs:{...(it=V.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    label: "راست به چپ",
    style: {
      direction: "rtl"
    }
  }
}`,...(mt=(ct=V.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var dt,pt,gt;G.parameters={...G.parameters,docs:{...(dt=G.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(gt=(pt=G.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var ht,vt,bt;Y.parameters={...Y.parameters,docs:{...(ht=Y.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="calendar-trigger-icon">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 610.398 610.398">
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
}`,...(bt=(vt=Y.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var Et,It,ft;N.parameters={...N.parameters,docs:{...(Et=N.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr",
    style: {
      "--jb-date-input-calendar-trigger-display": "none"
    } as CSSProperties
  }
}`,...(ft=(It=N.parameters)==null?void 0:It.docs)==null?void 0:ft.source}}};var yt,Tt,Dt;H.parameters={...H.parameters,docs:{...(yt=H.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=H.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var St,Jt,Mt;O.parameters={...O.parameters,docs:{...(St=O.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Mt=(Jt=O.parameters)==null?void 0:Jt.docs)==null?void 0:Mt.source}}};var xt,wt,zt;P.parameters={...P.parameters,docs:{...(xt=P.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(zt=(wt=P.parameters)==null?void 0:wt.docs)==null?void 0:zt.source}}};const Rt=["Normal","Jalali","Gregorian","SizeVariants","JalaliWithPersianSetup","CustomFormat","Placeholder","WithDefaultCalendarDate","PersianNumber","CustomMonthName","Required","WithOverflowHandler","OverflowWithinParent","DarkMode","withError","ValueSetGet","sizeTest","ValueTypeTest","GregorianMinMaxTest","JalaliTest","JalaliMinMaxTest","JalaliMinMaxTestWithCustomFormat","TimeStampTest","TimeStampMinMaxTest","GregorianInputTest","RightToLeftTest","Headless","WithCustomIcon","WithoutIcon","WithInlineSections","InFormTest","EventTest"],Yt=Object.freeze(Object.defineProperty({__proto__:null,CustomFormat:E,CustomMonthName:T,DarkMode:M,EventTest:P,Gregorian:h,GregorianInputTest:L,GregorianMinMaxTest:B,Headless:G,InFormTest:O,Jalali:g,JalaliMinMaxTest:A,JalaliMinMaxTestWithCustomFormat:C,JalaliTest:c,JalaliWithPersianSetup:b,Normal:p,OverflowWithinParent:J,PersianNumber:y,Placeholder:I,Required:D,RightToLeftTest:V,SizeVariants:v,TimeStampMinMaxTest:R,TimeStampTest:d,ValueSetGet:w,ValueTypeTest:m,WithCustomIcon:Y,WithDefaultCalendarDate:f,WithInlineSections:H,WithOverflowHandler:S,WithoutIcon:N,__namedExportsOrder:Rt,default:Ct,sizeTest:z,withError:x},Symbol.toStringTag,{value:"Module"}));export{E as C,Yt as D,h as G,G as H,g as J,p as N,w as V,H as W,b as a,Y as b,m as c};
