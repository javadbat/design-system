import{R as s,r}from"./index-DhY--VwN.js";import{t as Z,c as L}from"./jb-calendar-CzwASXki.js";import{r as $}from"./index-BMrwitbN.js";function ee(e,o,t){const a=Z(e);if(isNaN(o))return L(e,NaN);const c=a.getDate(),n=L(e,a.getTime());n.setMonth(a.getMonth()+o+1,0);const M=n.getDate();return c>=M?n:(a.setFullYear(n.getFullYear(),n.getMonth(),c),a)}let X=s.forwardRef((e,o)=>{let t=r.useRef(null),[a,c]=r.useState(0);return r.useImperativeHandle(o,()=>t?t.current:{},[t]),r.useEffect(()=>{c(a+1)},[t.current]),r.useEffect(()=>{e.inputType&&(t.current.inputType=e.inputType)},[e.inputType]),r.useEffect(()=>{t.current.direction=e.direction},[e.direction]),r.useEffect(()=>{e.jalaliMonthList&&t.current.setMonthList("JALALI",e.jalaliMonthList)},[e.jalaliMonthList]),r.useEffect(()=>{t.current&&(t.current.dateRestrictions.min=e.min)},[t.current,e.min]),r.useEffect(()=>{t.current&&(t.current.dateRestrictions.max=e.max)},[t.current,e.max]),$(t,"select",e.onSelect),s.createElement("jb-calendar",{ref:t,class:e.className,style:e.style})});const te={title:"Components/JBCalendar",component:X,args:{direction:"ltr"}},u={args:{}},i={args:{inputType:"JALALI"}},m={args:{inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},d={args:{inputType:"GREGORIAN"}},p={args:{min:new Date,max:ee(new Date,2)}},g={render:()=>{const[e,o]=r.useState(null),[t,a]=r.useState(null),[c,n]=r.useState(null);function M(l){o(l.year),a(l.month),n(l.day)}return s.createElement("div",null,s.createElement(X,{onSelect:l=>{M(l.target.value)}}),s.createElement("div",null,s.createElement("br",null),s.createElement("br",null),"Your date is: ",e," /",t," /",c))}},h={args:{inputType:"JALALI",direction:"rtl"},parameters:{themes:{themeOverride:"rtl"}}},f={args:{direction:"rtl",inputType:"GREGORIAN"},parameters:{themes:{themeOverride:"rtl"}}},S={parameters:{viewport:{defaultViewport:"mobile1"}}},y={args:{className:"dark-theme"}};var T,V,v;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(v=(V=u.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var A,E,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI'
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,b,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    jalaliMonthList: ['حَمَل', 'ثَور', 'جَوزا', 'سَرَطان', 'اَسَد', 'سُنبُله', 'میزان', 'عَقرَب', 'قَوس', 'جَدْی', 'دَلو', 'حوت']
  }
}`,...(D=(b=m.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var I,J,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    inputType: 'GREGORIAN'
  }
}`,...(O=(J=d.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var G,x,Y;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    min: new Date(),
    max: addMonths(new Date(), 2)
  }
}`,...(Y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var w,C,j;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(C=g.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var _,B,F;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    direction: 'rtl'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var k,z,H;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    direction: 'rtl',
    inputType: 'GREGORIAN'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(H=(z=f.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var P,q,K;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(K=(q=S.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,U,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    className: "dark-theme"
  }
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const re=["Normal","Jalali","CustomMonthName","Gregorian","MinMax","valueTest","RightToLeft","RTLGregorian","onMobile","customTheme"],oe=Object.freeze(Object.defineProperty({__proto__:null,CustomMonthName:m,Gregorian:d,Jalali:i,MinMax:p,Normal:u,RTLGregorian:f,RightToLeft:h,__namedExportsOrder:re,customTheme:y,default:te,onMobile:S,valueTest:g},Symbol.toStringTag,{value:"Module"}));export{oe as C,u as N};
