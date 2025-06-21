import{R as a,r}from"./index-D4lIrffr.js";import{t as W,c as S}from"./jb-calendar-Bsa0APGb.js";import{r as X}from"./index-B65NTg4l.js";function Z(e,o,t){const n=W(e);if(isNaN(o))return S(e,NaN);const c=n.getDate(),s=S(e,n.getTime());s.setMonth(n.getMonth()+o+1,0);const M=s.getDate();return c>=M?s:(n.setFullYear(s.getFullYear(),s.getMonth(),c),n)}let y=a.forwardRef((e,o)=>{let t=r.useRef(null),[n,c]=r.useState(0);return r.useImperativeHandle(o,()=>t?t.current:{},[t]),r.useEffect(()=>{c(n+1)},[t.current]),r.useEffect(()=>{e.inputType&&(t.current.inputType=e.inputType)},[e.inputType]),r.useEffect(()=>{t.current.setAttribute("direction",e.direction)},[e.direction]),r.useEffect(()=>{e.jalaliMonthList&&t.current.setMonthList("JALALI",e.jalaliMonthList)},[e.jalaliMonthList]),r.useEffect(()=>{t.current&&(t.current.dateRestrictions.min=e.min)},[t.current,e.min]),r.useEffect(()=>{t.current&&(t.current.dateRestrictions.max=e.max)},[t.current,e.max]),X(t,"select",e.onSelect),a.createElement("jb-calendar",{ref:t})});function U(){const[e,o]=r.useState(""),[t,n]=r.useState(""),[c,s]=r.useState("");function M(i){o(i.year),n(i.month),s(i.day)}return a.createElement("div",null,a.createElement(y,{onSelect:i=>{M(i.target.value)}}),a.createElement("div",null,a.createElement("br",null),a.createElement("br",null),"Your date is: ",e," /",t," /",c))}U.__docgenInfo={description:"",methods:[],displayName:"JBCalendarTest"};function E(e){return a.createElement("div",{className:"jb-calendar-theme-test-page"},a.createElement("div",{className:"dark-theme"},a.createElement(y,null)))}E.propTypes={};E.__docgenInfo={description:"",methods:[],displayName:"JBCalendarCustomTheme"};const $={title:"Components/JBCalendar",component:y},l={args:{inputType:"JALALI"}},u={args:{inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},p={args:{inputType:"GREGORIAN"}},d={args:{min:new Date,max:Z(new Date,2)}},g={render:()=>a.createElement(U,null)},h={args:{direction:"rtl"},parameters:{themes:{themeOverride:"rtl"}}},f={args:{direction:"rtl",inputType:"GREGORIAN"},parameters:{themes:{themeOverride:"rtl"}}},T={parameters:{viewport:{defaultViewport:"mobile1"}}},ee=e=>a.createElement(E,{...e}),m=ee.bind({});m.args={inputType:"GREGORIAN"};var C,L,R;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI'
  }
}`,...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var N,A,G;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    jalaliMonthList: ['حَمَل', 'ثَور', 'جَوزا', 'سَرَطان', 'اَسَد', 'سُنبُله', 'میزان', 'عَقرَب', 'قَوس', 'جَدْی', 'دَلو', 'حوت']
  }
}`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var I,J,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    inputType: 'GREGORIAN'
  }
}`,...(O=(J=p.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var b,v,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    min: new Date(),
    max: addMonths(new Date(), 2)
  }
}`,...(_=(v=d.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,D,j;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <JBCalendarTest></JBCalendarTest>
}`,...(j=(D=g.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var w,B,V;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    direction: 'rtl'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(V=(B=h.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var Y,F,k;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    direction: 'rtl',
    inputType: 'GREGORIAN'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(k=(F=f.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var z,H,P;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(P=(H=T.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var q,K,Q;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:"args => <JBCalendarCustomTheme {...args}></JBCalendarCustomTheme>",...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const te=["Normal","CustomMonthName","Gregorian","MinMax","valueTest","RightToLeft","RTLGregorian","onMobile","CustomTheme"],se=Object.freeze(Object.defineProperty({__proto__:null,CustomMonthName:u,CustomTheme:m,Gregorian:p,MinMax:d,Normal:l,RTLGregorian:f,RightToLeft:h,__namedExportsOrder:te,default:$,onMobile:T,valueTest:g},Symbol.toStringTag,{value:"Module"}));export{se as C};
