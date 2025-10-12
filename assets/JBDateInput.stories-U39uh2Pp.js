import{R as e,r as o}from"./index-DhY--VwN.js";import{m as n,p as Et}from"./JBDateInput-S6nDU9wS.js";const ft={title:"Components/form elements/Inputs/JBDateInput",component:n},p={args:{label:"date"}},g={args:{label:"jalali date",inputType:"JALALI"}},v={args:{label:"gregorian date",inputType:"GREGORIAN"}},h={render:t=>{const[a,r]=o.useState(""),[s,c]=o.useState("");return e.createElement("div",null,e.createElement("h2",null,"input.value in different format"),e.createElement("p",null,"try to input some value inside date-input and see the changes in the paragraphs below"),e.createElement(n,{label:"value with arguments format",format:t.format,value:a,onChange:u=>r(u.target.value)}),e.createElement("p",null,"your inputted value is: ",a),e.createElement(n,{label:"value with YYYY-MM-DD format",format:"YYYY-MM-DD format",value:s,onChange:u=>c(u.target.value)}),e.createElement("p",null,"your inputted value is: ",s))},args:{format:"YYYY/MM/DD"}},b={args:{label:"date",placeholder:"please enter your date",direction:"ltr"}},E={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",format:"YYYY/MM/DD",direction:"ltr",calendarDefaultDateView:{year:1360,month:5}}},f={args:{label:"with persian number",valueType:"GREGORIAN",inputType:"JALALI",format:"YYYY/MM/DD",direction:"ltr",showPersianNumber:!0,calendarDefaultDateView:{year:1360,month:5}}},y={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},T={args:{label:"required field",message:"please focus and then unfocus the input to see require validation message",required:!0,direction:"ltr"}},I={args:{label:"will jump on overflow",overflowHandler:"SLIDE"}},S={render:t=>{const a=o.useRef(null);return e.createElement("div",{ref:a,style:{height:"10rem",border:"solid 1px #666",overflow:"hidden"}},e.createElement(n,{...t,overflowRef:a}))},args:{label:"will jump on overflow",overflowHandler:"SLIDE"}},D={render:()=>e.createElement("div",{className:"dark-theme"},e.createElement("h1",null,"dark mode test"),e.createElement(n,null))},M={args:{label:"with default error",error:"error message",message:"default message"}},w={render:()=>e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"100%"}},e.createElement("h3",null,"parent full width"),e.createElement(n,null)),e.createElement("div",{style:{width:"50%"}},e.createElement("h3",null,"parent percent width"),e.createElement(n,null)),e.createElement("div",{style:{width:"300px"}},e.createElement("h3",null,"parent pixel width"),e.createElement(n,null)),e.createElement("h3",null,"self full width"),e.createElement(n,{style:{width:"100%"}}),e.createElement("h3",null,"self percent width"),e.createElement(n,{style:{width:"50%"}}),e.createElement("h3",null,"self pixel width"),e.createElement(n,{style:{width:"300px"}}),e.createElement("h3",null,"self pixel height"),e.createElement(n,{style:{"--jb-input-height":"70px"}}))},m={render:t=>{const[a,r]=o.useState("");return e.createElement("div",null,e.createElement(n,{...t,onChange:s=>{r(s.target.value)}}),e.createElement("br",null),e.createElement(n,{label:"gregorian date","input-type":"GREGORIAN",...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"inputType is ",t.inputType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",a))},args:{label:"date",valueType:"GREGORIAN",inputType:"GREGORIAN",direction:"ltr"}},A={...m,args:{label:"date",valueType:"GREGORIAN",min:"2020-09-05T08:51:23.176Z",max:"2020-10-15T08:51:23.176Z",inputType:"GREGORIAN",direction:"ltr"}},i={render:t=>{const[a,r]=o.useState(""),[s,c]=o.useState(new Date),u=[{validator:/^13.*$/g,message:"date must be in 13 century"},{validator:({valueObject:l})=>l.jalali.day>=15,message:"you can only choose 15th day of month"}];return e.createElement("div",null,e.createElement(n,{name:"first-date-input",value:a,onSelect:l=>{r(l.target.value)},onChange:l=>{r(l.target.value)},...t}),e.createElement(n,{name:"first-date-input",showPersianNumber:!0,value:a,label:t.label+" با اعداد فارسی ",onSelect:l=>{r(l.target.value)},onChange:l=>{r(l.target.value)},...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",a,e.createElement("br",null),e.createElement("button",{onClick:()=>{r("1400-06-18T00:00:00.000Z")}},"set value to 1400-06-18T00:00:00.000Z")),e.createElement("h3",null,"Center Aligned"),e.createElement("div",{style:{"--jb-date-input-text-align":"center"}},e.createElement(n,null)),e.createElement("h3",null,"test custom validation"),e.createElement(n,{validationList:u,value:a,onChange:l=>{r(l.target.value)},onSelect:l=>{r(l.target.value)},...t}),e.createElement("h3",null,"test via JS Date type value"),e.createElement(n,{value:s,onChange:l=>c(l.target.valueInDate)}))},args:{label:"date",valueType:"JALALI",min:"1402-08-01T12:05:39.530Z",max:"1402-09-01T12:05:39.530Z"}},R={...i,args:{label:"date",valueType:"JALALI",min:"1399-05-01T12:05:39.530Z",max:"1400-08-01T12:05:39.530Z"}},J={...i,args:{format:"YYYY/MM/DD",label:"date",valueType:"JALALI",min:"1399/05/01",max:"1400/08/01"}},d={render:t=>{const[a,r]=o.useState(null),s=o.useMemo(()=>a?new Date(parseInt(a)).toString():null,[a]),c=o.useCallback(u=>{r(u.target.value)},[]);return e.createElement("div",null,e.createElement(n,{value:a,valueType:"TIME_STAMP",onChange:c,...t}),e.createElement("div",null,e.createElement("br",null),e.createElement("br",null),"valueType is ",t.valueType,e.createElement("br",null),e.createElement("br",null),"Min date is: ",t.min?t.min.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Max date is: ",t.max?t.max.toString():"Unlimited",e.createElement("br",null),e.createElement("br",null),"Your chosen date is: ",a,e.createElement("br",null),e.createElement("br",null),"Your chosen date in greg is: ",s))},args:{label:"date",valueType:"TIME_STAMP"}},x={...d,args:{label:"date",valueType:"TIME_STAMP",min:"1596291030322",max:"1696291030322"}},C={args:{label:"date",valueType:"GREGORIAN",inputType:"GREGORIAN"}},L={args:{label:"rtl",style:{direction:"rtl"}}},G={render:t=>{const a=o.useRef(null),{value:r,onChange:s,onClick:c,onFocus:u}=Et({dateInputType:"JALALI",ref:a});return e.createElement("input",{ref:a,value:r,onChange:s,onClick:c,onFocus:u})},args:{}},V={render:t=>e.createElement(n,{...t},e.createElement("div",{slot:"calendar-trigger-icon"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 610.398 610.398"},e.createElement("g",null,e.createElement("g",null,e.createElement("path",{d:"M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"}),e.createElement("path",{d:"M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"}),e.createElement("path",{d:"M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"}),e.createElement("path",{d:"M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"}),e.createElement("path",{d:"M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"}),e.createElement("path",{d:"M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"}),e.createElement("path",{d:"M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"}),e.createElement("path",{d:"M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"}),e.createElement("path",{d:"M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"}),e.createElement("path",{d:"M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"}),e.createElement("path",{d:"M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"})))))),args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI"}},Y={args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",direction:"ltr",style:{"--jb-date-input-calendar-trigger-display":"none"}}},B={render:t=>e.createElement(n,{...t},e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"date",valueType:"GREGORIAN",inputType:"JALALI",direction:"ltr"}},N={render:t=>{const a=o.useRef(null);return o.useEffect(()=>{var s;function r(c){var u=new FormData(c.target);const l=Object.fromEntries(u);console.log(l),c.preventDefault()}(s=a.current)==null||s.addEventListener("submit",r)},[a]),e.createElement("div",null,e.createElement("h3",null,"Form Submit Test"),e.createElement("p",null,"change inputs value and click on submit to submit the form, then see the browser console to see the submitted value"),e.createElement("form",{ref:a},e.createElement("input",{name:"test-input",value:"test value"}),e.createElement(n,{label:"date in form",name:"birthdate"}),e.createElement("div",null,"see console after submit clicked"),e.createElement("button",{type:"submit"},"submit")))}},H={args:{label:"event test:",message:"check the console",onChange:t=>{console.log("onChange",t)},onLoad:t=>{console.log("onLoad",t)},onInit:t=>{console.log("onInit",t)},onInvalid:t=>{console.log("onInvalid",t)},onBeforeInput:t=>{console.log("onBeforeInput",t)},onInput:t=>{console.log("onInput",t)},onKeyUp:t=>{console.log("onKeyUp",t.composedPath())},onKeyDown:t=>{console.log("onKeyDown",t)},onKeyPress:t=>{console.log("onKeyPress",t)},onSelect:t=>{console.log("onSelect",t)},onFocus:t=>{console.log("onFocus",t)},onBlur:t=>{console.log("onBlur",t)}}};var O,z,k;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "date"
  }
}`,...(k=(z=p.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var P,F,j;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "jalali date",
    inputType: "JALALI"
  }
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var U,Z,W;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "gregorian date",
    inputType: "GREGORIAN"
  }
}`,...(W=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};var K,_,q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    return <div>
        <h2>input.value in different format</h2>
        <p>try to input some value inside date-input and see the changes in the paragraphs below</p>
        <JBDateInput label="value with arguments format" format={args.format} value={value} onChange={e => setValue(e.target.value)} />
        <p>your inputted value is: {value}</p>
        <JBDateInput label="value with YYYY-MM-DD format" format="YYYY-MM-DD format" value={value2} onChange={e => setValue2(e.target.value)} />
        <p>your inputted value is: {value2}</p>
      </div>;
  },
  args: {
    format: "YYYY/MM/DD"
  }
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var $,Q,X;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "date",
    placeholder: "please enter your date",
    direction: "ltr"
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,ae;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,le;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,oe,ue;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    jalaliMonthList: ["حَمَل", "ثَور", "جَوزا", "سَرَطان", "اَسَد", "سُنبُله", "میزان", "عَقرَب", "قَوس", "جَدْی", "دَلو", "حوت"]
  }
}`,...(ue=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,ie,me;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: "required field",
    message: "please focus and then unfocus the input to see require validation message",
    required: true,
    direction: "ltr"
  }
}`,...(me=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,pe,ge;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: "will jump on overflow",
    overflowHandler: "SLIDE"
  }
}`,...(ge=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,he,be;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(he=S.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Ee,fe,ye;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    return <div className="dark-theme">
        <h1>dark mode test</h1>
        <JBDateInput></JBDateInput>
      </div>;
  }
}`,...(ye=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Te,Ie,Se;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: "with default error",
    error: 'error message',
    message: 'default message'
  }
}`,...(Se=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var De,Me,we;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(we=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var Ae,Re,Je;m.parameters={...m.parameters,docs:{...(Ae=m.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Je=(Re=m.parameters)==null?void 0:Re.docs)==null?void 0:Je.source}}};var xe,Ce,Le;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...GregorianTest,
  args: {
    label: "date",
    valueType: "GREGORIAN",
    min: "2020-09-05T08:51:23.176Z",
    max: "2020-10-15T08:51:23.176Z",
    inputType: "GREGORIAN",
    direction: "ltr"
  }
}`,...(Le=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Ge,Ve,Ye;i.parameters={...i.parameters,docs:{...(Ge=i.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(Ve=i.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var Be,Ne,He;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    label: "date",
    valueType: "JALALI",
    min: "1399-05-01T12:05:39.530Z",
    max: "1400-08-01T12:05:39.530Z"
  }
}`,...(He=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Oe,ze,ke;J.parameters={...J.parameters,docs:{...(Oe=J.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  ...JalaliTest,
  args: {
    format: "YYYY/MM/DD",
    label: "date",
    valueType: "JALALI",
    min: "1399/05/01",
    max: "1400/08/01"
  }
}`,...(ke=(ze=J.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var Pe,Fe,je;d.parameters={...d.parameters,docs:{...(Pe=d.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(je=(Fe=d.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ue,Ze,We;x.parameters={...x.parameters,docs:{...(Ue=x.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...TimeStampTest,
  args: {
    label: "date",
    valueType: "TIME_STAMP",
    min: "1596291030322",
    max: "1696291030322"
  }
}`,...(We=(Ze=x.parameters)==null?void 0:Ze.docs)==null?void 0:We.source}}};var Ke,_e,qe;C.parameters={...C.parameters,docs:{...(Ke=C.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "GREGORIAN"
  }
}`,...(qe=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var $e,Qe,Xe;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    label: "rtl",
    style: {
      direction: "rtl"
    }
  }
}`,...(Xe=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var et,tt,at;G.parameters={...G.parameters,docs:{...(et=G.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=G.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,lt;V.parameters={...V.parameters,docs:{...(nt=V.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(rt=V.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};var st,ot,ut;Y.parameters={...Y.parameters,docs:{...(st=Y.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    label: "date",
    valueType: "GREGORIAN",
    inputType: "JALALI",
    direction: "ltr",
    style: {
      "--jb-date-input-calendar-trigger-display": "none"
    } as CSSProperties
  }
}`,...(ut=(ot=Y.parameters)==null?void 0:ot.docs)==null?void 0:ut.source}}};var ct,it,mt;B.parameters={...B.parameters,docs:{...(ct=B.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(mt=(it=B.parameters)==null?void 0:it.docs)==null?void 0:mt.source}}};var dt,pt,gt;N.parameters={...N.parameters,docs:{...(dt=N.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(gt=(pt=N.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var vt,ht,bt;H.parameters={...H.parameters,docs:{...(vt=H.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(bt=(ht=H.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};const yt=["Normal","Jalali","Gregorian","CustomFormat","Placeholder","WithDefaultCalendarDate","PersianNumber","CustomMonthName","Required","WithOverflowHandler","OverflowWithinParent","DarkMode","withError","sizeTest","GregorianTest","GregorianMinMaxTest","JalaliTest","JalaliMinMaxTest","JalaliMinMaxTestWithCustomFormat","TimeStampTest","TimeStampMinMaxTest","GregorianInputTest","RightToLeftTest","Headless","WithCustomIcon","WithoutIcon","WithStartSection","InFormTest","EventTest"],St=Object.freeze(Object.defineProperty({__proto__:null,CustomFormat:h,CustomMonthName:y,DarkMode:D,EventTest:H,Gregorian:v,GregorianInputTest:C,GregorianMinMaxTest:A,GregorianTest:m,Headless:G,InFormTest:N,Jalali:g,JalaliMinMaxTest:R,JalaliMinMaxTestWithCustomFormat:J,JalaliTest:i,Normal:p,OverflowWithinParent:S,PersianNumber:f,Placeholder:b,Required:T,RightToLeftTest:L,TimeStampMinMaxTest:x,TimeStampTest:d,WithCustomIcon:V,WithDefaultCalendarDate:E,WithOverflowHandler:I,WithStartSection:B,WithoutIcon:Y,__namedExportsOrder:yt,default:ft,sizeTest:w,withError:M},Symbol.toStringTag,{value:"Module"}));export{St as D,p as N};
