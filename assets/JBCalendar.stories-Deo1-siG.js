import{R as o,r as a}from"./index-D4lIrffr.js";import{t as ee,c as V}from"./jb-calendar-DoI53nKV.js";import{r as te}from"./index-BijJAI47.js";function re(n,l,t){const e=ee(n);if(isNaN(l))return V(n,NaN);const c=e.getDate(),r=V(n,e.getTime());r.setMonth(e.getMonth()+l+1,0);const u=r.getDate();return c>=u?r:(e.setFullYear(r.getFullYear(),r.getMonth(),c),e)}let Z=o.forwardRef((n,l)=>{var t;let e=a.useRef(null);a.useImperativeHandle(l,()=>e.current??null,[e]);let{jalaliMonthList:c,max:r,min:u,onSelect:s,...$}=n;return a.useEffect(()=>{var y;t.jalaliMonthList&&((y=e.current)==null||y.setMonthList("JALALI",t.jalaliMonthList))},[(t={jalaliMonthList:c,max:r,min:u}).jalaliMonthList,e]),a.useEffect(()=>{e.current&&e.current&&(e.current.dateRestrictions.min=t.min??null)},[e.current,t.min]),a.useEffect(()=>{e.current&&(e.current.dateRestrictions.max=t.max??null)},[e.current,t.max]),te(e,"select",s),o.createElement("jb-calendar",{ref:e,...$})});const ae={title:"Components/JBCalendar",component:Z,args:{direction:"ltr"}},i={args:{}},m={args:{inputType:"JALALI"}},d={args:{inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},p={args:{inputType:"GREGORIAN"}},g={args:{min:new Date,max:re(new Date,2)}},S={render:()=>{const[n,l]=a.useState(null),[t,e]=a.useState(null),[c,r]=a.useState(null);function u(s){l(s.year),e(s.month),r(s.day)}return o.createElement("div",null,o.createElement(Z,{onSelect:s=>{u(s.target.value)}}),o.createElement("div",null,o.createElement("br",null),o.createElement("br",null),"Your date is: ",n," /",t," /",c))}},h={args:{inputType:"JALALI",direction:"rtl"},globals:{locale:"fa",dir:"rtl"}},f={args:{direction:"rtl",inputType:"GREGORIAN"},globals:{locale:"fa",dir:"rtl"}},M={parameters:{viewport:{defaultViewport:"mobile2"}}},L={args:{className:"dark-theme"}};var T,b,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(A=(b=i.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var R,v,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI'
  }
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var N,D,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    jalaliMonthList: ['حَمَل', 'ثَور', 'جَوزا', 'سَرَطان', 'اَسَد', 'سُنبُله', 'میزان', 'عَقرَب', 'قَوس', 'جَدْی', 'دَلو', 'حوت']
  }
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var J,x,G;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    inputType: 'GREGORIAN'
  }
}`,...(G=(x=p.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var j,Y,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    min: new Date(),
    max: addMonths(new Date(), 2)
  }
}`,...(w=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:w.source}}};var C,O,_;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [selectedValueYear, selectedValueYearSetter] = useState<number | null>(null);
    const [selectedValueMonth, selectedValueMonthSetter] = useState<number | null>(null);
    const [selectedValueDay, selectedValueDaySetter] = useState<number | null>(null);
    function setValue(value: JBCalendarValue) {
      selectedValueYearSetter(value.year);
      selectedValueMonthSetter(value.month);
      selectedValueDaySetter(value.day);
    }
    return <div>
        <JBCalendar onSelect={e => {
        setValue(e.target.value);
      }}></JBCalendar>
        <div>
          <br /><br />Your date is: {selectedValueYear} /{selectedValueMonth} /{selectedValueDay}
        </div>
      </div>;
  }
}`,...(_=(O=S.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,F,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    direction: 'rtl'
  },
  globals: {
    locale: "fa",
    dir: "rtl"
  }
}`,...(k=(F=h.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var z,H,P;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    direction: 'rtl',
    inputType: 'GREGORIAN'
  },
  globals: {
    locale: "fa",
    dir: "rtl"
  }
}`,...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var q,K,Q;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...(Q=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    className: "dark-theme"
  }
}`,...(X=(W=L.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ne=["Normal","Jalali","CustomMonthName","Gregorian","MinMax","valueTest","RightToLeft","RTLGregorian","onMobile","customTheme"],ce=Object.freeze(Object.defineProperty({__proto__:null,CustomMonthName:d,Gregorian:p,Jalali:m,MinMax:g,Normal:i,RTLGregorian:f,RightToLeft:h,__namedExportsOrder:ne,customTheme:L,default:ae,onMobile:M,valueTest:S},Symbol.toStringTag,{value:"Module"}));export{ce as C,i as N};
