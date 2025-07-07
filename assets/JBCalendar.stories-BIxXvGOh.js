import{R as a,r}from"./index-D4lIrffr.js";import{t as U,c as y}from"./jb-calendar-Bsa0APGb.js";import{r as W}from"./index-B65NTg4l.js";function X(e,o,t){const n=U(e);if(isNaN(o))return y(e,NaN);const c=n.getDate(),s=y(e,n.getTime());s.setMonth(n.getMonth()+o+1,0);const M=s.getDate();return c>=M?s:(n.setFullYear(s.getFullYear(),s.getMonth(),c),n)}let E=a.forwardRef((e,o)=>{let t=r.useRef(null),[n,c]=r.useState(0);return r.useImperativeHandle(o,()=>t?t.current:{},[t]),r.useEffect(()=>{c(n+1)},[t.current]),r.useEffect(()=>{e.inputType&&(t.current.inputType=e.inputType)},[e.inputType]),r.useEffect(()=>{t.current.setAttribute("direction",e.direction)},[e.direction]),r.useEffect(()=>{e.jalaliMonthList&&t.current.setMonthList("JALALI",e.jalaliMonthList)},[e.jalaliMonthList]),r.useEffect(()=>{t.current&&(t.current.dateRestrictions.min=e.min)},[t.current,e.min]),r.useEffect(()=>{t.current&&(t.current.dateRestrictions.max=e.max)},[t.current,e.max]),W(t,"select",e.onSelect),a.createElement("jb-calendar",{ref:t})});function Z(){const[e,o]=r.useState(""),[t,n]=r.useState(""),[c,s]=r.useState("");function M(i){o(i.year),n(i.month),s(i.day)}return a.createElement("div",null,a.createElement(E,{onSelect:i=>{M(i.target.value)}}),a.createElement("div",null,a.createElement("br",null),a.createElement("br",null),"Your date is: ",e," /",t," /",c))}function Q(e){return a.createElement("div",{className:"jb-calendar-theme-test-page"},a.createElement("div",{className:"dark-theme"},a.createElement(E,null)))}Q.propTypes={};const $={title:"Components/JBCalendar",component:E},u={args:{inputType:"JALALI"}},l={args:{inputType:"JALALI",jalaliMonthList:["حَمَل","ثَور","جَوزا","سَرَطان","اَسَد","سُنبُله","میزان","عَقرَب","قَوس","جَدْی","دَلو","حوت"]}},p={args:{inputType:"GREGORIAN"}},d={args:{min:new Date,max:X(new Date,2)}},g={render:()=>a.createElement(Z,null)},h={args:{direction:"rtl"},parameters:{themes:{themeOverride:"rtl"}}},f={args:{direction:"rtl",inputType:"GREGORIAN"},parameters:{themes:{themeOverride:"rtl"}}},T={parameters:{viewport:{defaultViewport:"mobile1"}}},ee=e=>a.createElement(Q,{...e}),m=ee.bind({});m.args={inputType:"GREGORIAN"};var S,L,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI'
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var C,A,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    inputType: 'JALALI',
    jalaliMonthList: ['حَمَل', 'ثَور', 'جَوزا', 'سَرَطان', 'اَسَد', 'سُنبُله', 'میزان', 'عَقرَب', 'قَوس', 'جَدْی', 'دَلو', 'حوت']
  }
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var G,O,b;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    inputType: 'GREGORIAN'
  }
}`,...(b=(O=p.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var v,I,J;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    min: new Date(),
    max: addMonths(new Date(), 2)
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var x,D,j;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <JBCalendarTest></JBCalendarTest>
}`,...(j=(D=g.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var w,V,B;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    direction: 'rtl'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(B=(V=h.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var _,Y,F;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    direction: 'rtl',
    inputType: 'GREGORIAN'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(F=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var k,z,H;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(H=(z=T.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var P,q,K;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:"args => <JBCalendarCustomTheme {...args}></JBCalendarCustomTheme>",...(K=(q=m.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const te=["Normal","CustomMonthName","Gregorian","MinMax","valueTest","RightToLeft","RTLGregorian","onMobile","CustomTheme"],se=Object.freeze(Object.defineProperty({__proto__:null,CustomMonthName:l,CustomTheme:m,Gregorian:p,MinMax:d,Normal:u,RTLGregorian:f,RightToLeft:h,__namedExportsOrder:te,default:$,onMobile:T,valueTest:g},Symbol.toStringTag,{value:"Module"}));export{se as C,u as N};
