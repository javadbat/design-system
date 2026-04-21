import{R as o,r as a}from"./index-CwcVQgaJ.js";import{t as $,c as y}from"./jb-calendar-BEpNb0zW.js";import{r as ee}from"./index-BVrqzDik.js";function te(s,l,t){const e=$(s);if(isNaN(l))return y(s,NaN);const c=e.getDate(),r=y(s,e.getTime());r.setMonth(e.getMonth()+l+1,0);const u=r.getDate();return c>=u?r:(e.setFullYear(r.getFullYear(),r.getMonth(),c),e)}let X=o.forwardRef((s,l)=>{var t;let e=a.useRef(null);a.useImperativeHandle(l,()=>e?e.current:null,[e]);let{jalaliMonthList:c,max:r,min:u,onSelect:n,...Z}=s;return a.useEffect(()=>{t.jalaliMonthList&&e.current.setMonthList("JALALI",t.jalaliMonthList)},[(t={jalaliMonthList:c,max:r,min:u}).jalaliMonthList,e]),a.useEffect(()=>{e.current&&(e.current.dateRestrictions.min=t.min)},[e.current,t.min]),a.useEffect(()=>{e.current&&(e.current.dateRestrictions.max=t.max)},[e.current,t.max]),ee(e,"select",n),o.createElement("jb-calendar",{ref:e,...Z})});const re={title:"Components/JBCalendar",component:X,args:{direction:"ltr"}},i={args:{}},m={args:{inputType:"JALALI"}},d={args:{inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},p={args:{inputType:"GREGORIAN"}},g={args:{min:new Date,max:te(new Date,2)}},S={render:()=>{const[s,l]=a.useState(null),[t,e]=a.useState(null),[c,r]=a.useState(null);function u(n){l(n.year),e(n.month),r(n.day)}return o.createElement("div",null,o.createElement(X,{onSelect:n=>{u(n.target.value)}}),o.createElement("div",null,o.createElement("br",null),o.createElement("br",null),"Your date is: ",s," /",t," /",c))}},h={args:{inputType:"JALALI",direction:"rtl"},globals:{locale:"fa",dir:"rtl"}},f={args:{direction:"rtl",inputType:"GREGORIAN"},globals:{locale:"fa",dir:"rtl"}},M={parameters:{viewport:{defaultViewport:"mobile1"}}},L={args:{className:"dark-theme"}};var V,T,b;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var A,R,v;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI'
  }
}`,...(v=(R=m.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var E,N,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    jalaliMonthList: ['حَمَل', 'ثَور', 'جَوزا', 'سَرَطان', 'اَسَد', 'سُنبُله', 'میزان', 'عَقرَب', 'قَوس', 'جَدْی', 'دَلو', 'حوت']
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var I,J,x;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    inputType: 'GREGORIAN'
  }
}`,...(x=(J=p.parameters)==null?void 0:J.docs)==null?void 0:x.source}}};var G,j,Y;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    min: new Date(),
    max: addMonths(new Date(), 2)
  }
}`,...(Y=(j=g.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var w,C,O;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(C=S.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var _,B,F;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    direction: 'rtl'
  },
  globals: {
    locale: "fa",
    dir: "rtl"
  }
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var k,z,H;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    direction: 'rtl',
    inputType: 'GREGORIAN'
  },
  globals: {
    locale: "fa",
    dir: "rtl"
  }
}`,...(H=(z=f.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var P,q,K;M.parameters={...M.parameters,docs:{...(P=M.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(K=(q=M.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,U,W;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    className: "dark-theme"
  }
}`,...(W=(U=L.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ae=["Normal","Jalali","CustomMonthName","Gregorian","MinMax","valueTest","RightToLeft","RTLGregorian","onMobile","customTheme"],le=Object.freeze(Object.defineProperty({__proto__:null,CustomMonthName:d,Gregorian:p,Jalali:m,MinMax:g,Normal:i,RTLGregorian:f,RightToLeft:h,__namedExportsOrder:ae,customTheme:L,default:re,onMobile:M,valueTest:S},Symbol.toStringTag,{value:"Module"}));export{le as C,i as N};
