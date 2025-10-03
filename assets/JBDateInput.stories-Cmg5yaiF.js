import{R as e,r as s}from"./index-DhY--VwN.js";import{m as a,p as gt}from"./JBDateInput-CF0e72FB.js";const ht={title:"Components/form elements/Inputs/JBDateInput",component:a},p={args:{label:"date"}},g={args:{label:"jalali date",valueType:"GREGORIAN",inputType:"JALALI"}},h={args:{label:"date",format:"YYYY/MM/DD",direction:"ltr"}},v={args:{label:"date",placeholder:"please enter your date",direction:"ltr"}},b={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",format:"YYYY/MM/DD",direction:"ltr",calendarDefaultDateView:{year:1360,month:5}}},E={args:{label:"with persian number",valueType:"GREGORIAN",inputType:"JALALI",format:"YYYY/MM/DD",direction:"ltr",showPersianNumber:!0,calendarDefaultDateView:{year:1360,month:5}}},y={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},T={args:{label:"required field",message:"please focus and then unfocus the input to see require validation message",required:!0,direction:"ltr"}},I={args:{label:"will jump on overflow",overflowHandler:"SLIDE"}},f={render:t=>{const n=s.useRef(null);return e.createElement("div",{ref:n,style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},e.createElement(a,{...t,overflowRef:n}))},args:{label:"will jump on overflow",overflowHandler:"SLIDE"}},S={render:()=>e.createElement("div",{className:"dark-theme"},e.createElement("h1",null,"dark mode test"),e.createElement(a,null))},D={args:{label:"with default error",error:"error message",message:"default message"}},M={render:()=>e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"100%"}},e.createElement("h3",null,"parent full width"),e.createElement(a,null)),e.createElement("div",{style:{width:"50%"}},e.createElement("h3",null,"parent percent width"),e.createElement(a,null)),e.createElement("div",{style:{width:"300px"}},e.createElement("h3",null,"parent pixel width"),e.createElement(a,null)),e.createElement("h3",null,"self full width"),e.createElement(a,{style:{width:"100%"}}),e.createElement("h3",null,"self percent width"),e.createElement(a,{style:{width:"50%"}}),e.createElement("h3",null,"self pixel width"),e.createElement(a,{style:{width:"300px"}}),e.createElement("h3",null,"self pixel height"),e.createElement(a,{style:{"--jb-input-height":"70px"}}))},m={render:t=>{const[n,l]=s.useState("");return e.createElement("div",null,e.createElement(a,{...t,onChange:o=>{l(o.target.value)}}),e.createElement("br",null),e.createElement(a,{label:"gregorian date","input-type":"GREGORIAN",...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"inputType is ",t.inputType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",n))},args:{label:"date",valueType:"GREGORIAN",inputType:"GREGORIAN",direction:"ltr"}},w={...m,args:{label:"date",valueType:"GREGORIAN",min:"2020-09-05T08:51:23.176Z",max:"2020-10-15T08:51:23.176Z",inputType:"GREGORIAN",direction:"ltr"}},i={render:t=>{const[n,l]=s.useState(""),[o,c]=s.useState(new Date),u=[{validator:/^13.*$/g,message:"date must be in 13 century"},{validator:({valueObject:r})=>r.jalali.day>=15,message:"you can only choose 15th day of month"}];return e.createElement("div",null,e.createElement(a,{name:"first-date-input",value:n,onSelect:r=>{l(r.target.value)},onChange:r=>{l(r.target.value)},...t}),e.createElement(a,{name:"first-date-input",showPersianNumber:!0,value:n,label:t.label+" با اعداد فارسی ",onSelect:r=>{l(r.target.value)},onChange:r=>{l(r.target.value)},...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",n,e.createElement("br",null),e.createElement("button",{onClick:()=>{l("1400-06-18T00:00:00.000Z")}},"set value to 1400-06-18T00:00:00.000Z")),e.createElement("h3",null,"Center Aligned"),e.createElement("div",{style:{"--jb-date-input-text-align":"center"}},e.createElement(a,null)),e.createElement("h3",null,"test custom validation"),e.createElement(a,{validationList:u,value:n,onChange:r=>{l(r.target.value)},onSelect:r=>{l(r.target.value)},...t}),e.createElement("h3",null,"test via JS Date type value"),e.createElement(a,{value:o,onChange:r=>c(r.target.valueInDate)}))},args:{label:"date",valueType:"JALALI",min:"1402-08-01T12:05:39.530Z",max:"1402-09-01T12:05:39.530Z"}},A={...i,args:{label:"date",valueType:"JALALI",min:"1399-05-01T12:05:39.530Z",max:"1400-08-01T12:05:39.530Z"}},R={...i,args:{format:"YYYY/MM/DD",label:"date",valueType:"JALALI",min:"1399/05/01",max:"1400/08/01"}},d={render:t=>{const[n,l]=s.useState(null),o=s.useMemo(()=>n?new Date(parseInt(n)).toString():null,[n]),c=s.useCallback(u=>{l(u.target.value)},[]);return e.createElement("div",null,e.createElement(a,{value:n,valueType:"TIME_STAMP",onChange:c,...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",n,e.createElement("br",null),e.createElement("br",null),"Your chosen date in greg is: ",o))},args:{label:"date",valueType:"TIME_STAMP"}},x={...d,args:{label:"date",valueType:"TIME_STAMP",min:"1596291030322",max:"1696291030322"}},J={args:{label:"date",valueType:"GREGORIAN",inputType:"GREGORIAN"}},L={args:{label:"rtl",style:{direction:"rtl"}}},C={render:t=>{const n=s.useRef(null),{value:l,onChange:o,onClick:c,onFocus:u}=gt({dateInputType:"JALALI",ref:n});return e.createElement("input",{ref:n,value:l,onChange:o,onClick:c,onFocus:u})},args:{}},G={render:t=>e.createElement(a,{...t},e.createElement("div",{slot:"calendar-trigger-icon"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 610.398 610.398"},e.createElement("g",null,e.createElement("g",null,e.createElement("path",{d:"M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"}),e.createElement("path",{d:"M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"}),e.createElement("path",{d:"M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"}),e.createElement("path",{d:"M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"}),e.createElement("path",{d:"M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"}),e.createElement("path",{d:"M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"}),e.createElement("path",{d:"M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"}),e.createElement("path",{d:"M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"}),e.createElement("path",{d:"M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"}),e.createElement("path",{d:"M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"}),e.createElement("path",{d:"M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"})))))),args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI"}},V={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",direction:"ltr",style:{"--jb-date-input-calendar-trigger-display":"none"}}},B={render:t=>e.createElement(a,{...t},e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",direction:"ltr"}},N={render:t=>{const n=s.useRef(null);return s.useEffect(()=>{var o;function l(c){var u=new FormData(c.target);const r=Object.fromEntries(u);console.log(r),c.preventDefault()}(o=n.current)==null||o.addEventListener("submit",l)},[n]),e.createElement("div",null,e.createElement("h3",null,"Form Submit Test"),e.createElement("p",null,"change inputs value and click on submit to submit the form, then see the browser console to see the submitted value"),e.createElement("form",{ref:n},e.createElement("input",{name:"test-input",value:"test value"}),e.createElement(a,{label:"date in form",name:"birthdate"}),e.createElement("div",null,"see console after submit clicked"),e.createElement("button",{type:"submit"},"submit")))}},H={args:{label:"event test:",message:"check the console",onChange:t=>{console.log("onChange",t)},onLoad:t=>{console.log("onLoad",t)},onInit:t=>{console.log("onInit",t)},onInvalid:t=>{console.log("onInvalid",t)},onBeforeInput:t=>{console.log("onBeforeInput",t)},onInput:t=>{console.log("onInput",t)},onKeyUp:t=>{console.log("onKeyUp",t.composedPath())},onKeyDown:t=>{console.log("onKeyDown",t)},onKeyPress:t=>{console.log("onKeyPress",t)},onSelect:t=>{console.log("onSelect",t)},onFocus:t=>{console.log("onFocus",t)},onBlur:t=>{console.log("onBlur",t)}}};var Y,O,z;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: "date"
  }
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var k,P,F;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "jalali date",
    valueType: "GREGORIAN",
    inputType: "JALALI"
  }
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,U,Z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "date",
    format: "YYYY/MM/DD",
    direction: "ltr"
  }
}`,...(Z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var W,K,_;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "date",
    placeholder: "please enter your date",
    direction: "ltr"
  }
}`,...(_=(K=v.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var q,$,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=($=b.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,ee,te;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    jalaliMonthList: ["حَمَل", "ثَور", "جَوزا", "سَرَطان", "اَسَد", "سُنبُله", "میزان", "عَقرَب", "قَوس", "جَدْی", "دَلو", "حوت"]
  }
}`,...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,oe,se;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: "required field",
    message: "please focus and then unfocus the input to see require validation message",
    required: true,
    direction: "ltr"
  }
}`,...(se=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ce,ue,ie;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...(ie=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var me,de,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(de=f.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,he,ve;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    return <div className="dark-theme">
        <h1>dark mode test</h1>
        <JBDateInput></JBDateInput>
      </div>;
  }
}`,...(ve=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var be,Ee,ye;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: "with default error",
    error: 'error message',
    message: 'default message'
  }
}`,...(ye=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:ye.source}}};var Te,Ie,fe;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(fe=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var Se,De,Me;m.parameters={...m.parameters,docs:{...(Se=m.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => {
    const [setValue, setValueSetter] = useState("");
    return <div>
        <JBDateInput {...args} onChange={e => {
        setValueSetter(e.target.value);
      }}>
        </JBDateInput>
        <br />
        <JBDateInput label="gregorian date" input-type="GREGORIAN" {...args} />
        <div>
          <br />
          <br />valueType is {args.valueType}
          <br />
          <br />inputType is {args.inputType}
          <br />
          <br />Min date is: {args.min ? args.min.toString() : "Unlimited"}
          <br />
          <br />Max date is: {args.max ? args.max.toString() : "Unlimited"}
          <br />
          <br />Your chosen date is: {setValue}
        </div>
      </div>;
  },
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN",
    direction: "ltr"
  }
}`,...(Me=(De=m.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var we,Ae,Re;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  ...GregorianTest,
  args: {
    label: "date",
    valueType: "GREGORIAN",
    min: "2020-09-05T08:51:23.176Z",
    max: "2020-10-15T08:51:23.176Z",
    inputType: "GREGORIAN",
    direction: "ltr"
  }
}`,...(Re=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var xe,Je,Le;i.parameters={...i.parameters,docs:{...(xe=i.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Le=(Je=i.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var Ce,Ge,Ve;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1399-05-01T12:05:39.530Z",
    max: "1400-08-01T12:05:39.530Z"
  }
}`,...(Ve=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var Be,Ne,He;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    format: "YYYY/MM/DD",
    label: "date",
    valueType: "JALALI",
    min: "1399/05/01",
    max: "1400/08/01"
  }
}`,...(He=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Ye,Oe,ze;d.parameters={...d.parameters,docs:{...(Ye=d.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(ze=(Oe=d.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var ke,Pe,Fe;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...TimeStampTest,
  args: {
    label: "date",
    valueType: "TIME_STAMP",
    min: "1596291030322",
    max: "1696291030322"
  }
}`,...(Fe=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var je,Ue,Ze;J.parameters={...J.parameters,docs:{...(je=J.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN"
  }
}`,...(Ze=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var We,Ke,_e;L.parameters={...L.parameters,docs:{...(We=L.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    label: "rtl",
    style: {
      direction: "rtl"
    }
  }
}`,...(_e=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:_e.source}}};var qe,$e,Qe;C.parameters={...C.parameters,docs:{...(qe=C.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
  args: {}
}`,...(Qe=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Xe,et,tt;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(tt=(et=G.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,rt;V.parameters={...V.parameters,docs:{...(nt=V.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr",
    style: {
      "--jb-date-input-calendar-trigger-display": "none"
    } as CSSProperties
  }
}`,...(rt=(at=V.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var lt,ot,st;B.parameters={...B.parameters,docs:{...(lt=B.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: args => <JBDateInput {...args}>
      <div slot="end-section" style={{
      width: "24px",
      height: "24px",
      backgroundColor: "#262626"
    }}>
      </div>
      <div slot="start-section" style={{
      width: "24px",
      height: "24px",
      backgroundColor: "#262626"
    }}>
      </div>
    </JBDateInput>,
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr"
  }
}`,...(st=(ot=B.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var ct,ut,it;N.parameters={...N.parameters,docs:{...(ct=N.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(it=(ut=N.parameters)==null?void 0:ut.docs)==null?void 0:it.source}}};var mt,dt,pt;H.parameters={...H.parameters,docs:{...(mt=H.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=H.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};const vt=["Normal","Jalali","CustomFormat","Placeholder","WithDefaultCalendarDate","PersianNumber","CustomMonthName","Required","WithOverflowHandler","OverflowWithinParent","DarkMode","withError","sizeTest","GregorianTest","GregorianMinMaxTest","JalaliTest","JalaliMinMaxTest","JalaliMinMaxTestWithCustomFormat","TimeStampTest","TimeStampMinMaxTest","GregorianInputTest","RightToLeftTest","Headless","WithCustomIcon","WithoutIcon","WithStartSection","InFormTest","EventTest"],yt=Object.freeze(Object.defineProperty({__proto__:null,CustomFormat:h,CustomMonthName:y,DarkMode:S,EventTest:H,GregorianInputTest:J,GregorianMinMaxTest:w,GregorianTest:m,Headless:C,InFormTest:N,Jalali:g,JalaliMinMaxTest:A,JalaliMinMaxTestWithCustomFormat:R,JalaliTest:i,Normal:p,OverflowWithinParent:f,PersianNumber:E,Placeholder:v,Required:T,RightToLeftTest:L,TimeStampMinMaxTest:x,TimeStampTest:d,WithCustomIcon:G,WithDefaultCalendarDate:b,WithOverflowHandler:I,WithStartSection:B,WithoutIcon:V,__namedExportsOrder:vt,default:ht,sizeTest:M,withError:D},Symbol.toStringTag,{value:"Module"}));export{yt as D,p as N};
