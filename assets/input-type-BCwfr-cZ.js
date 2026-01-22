import{j as e,M as d,S as i,e as o}from"./index-26JHfB1s.js";import{useMDXComponents as p}from"./index-CKD13vE0.js";import{J as a,G as r,a as s}from"./JBDateInput.stories-LTbMxAbT.js";import"./iframe-D5inFDHC.js";import"./index-CC6F48bw.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./JBDateInput-B6tMMw1s.js";import"./jb-date-input-BG1aeiVz.js";import"./jb-calendar-Bug5hflO.js";import"./index-BsliqPsk.js";import"./index-CXPivJim.js";import"./index-_b1slotr.js";import"./index-B4_gk7g0.js";import"./jb-validation-DPnsTO1v.js";import"./jb-popover-DWopHXTs.js";import"./JBButton-BsSO-APp.js";import"./jb-loading-KLGT6U3e.js";import"./index-Drw24fzo.js";function l(n){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/form elements/Inputs/JBDateInput/InputType"}),`
`,e.jsx(t.h1,{id:"input-type",children:"Input type"}),`
`,e.jsxs(t.p,{children:[`jb-date-input support both jalali(shamcy) and gregorian(Miladi) calendar input type. like value-type that let you determine how you want to provide/expect data to/from jb-date-input you can specify how user must fill the date input.
to achieve this you have to set `,e.jsx(t.code,{children:"input-type"})," attribute or set ",e.jsx(t.code,{children:"inputType"}),` object to component dom directly.
to set it as attribute you can set value like this:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`
<jb-date-input input-type="GREGORIAN"></jb-date-input>
<jb-date-input input-type="JALALI"></jb-date-input>
`})}),`
`,e.jsx(t.p,{children:"and for doing it with direct DOM assignment you can use following js code:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`//to show gregorian calendar
document.querySelector('jb-date-input').inputType = "GREGORIAN" 
document.querySelector('jb-date-input').inputType = "JALALI"
`})}),`
`,e.jsx(t.p,{children:"Jalali example:"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(t.p,{children:"Gregorian Example:"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"reactjs",children:"ReactJS"}),`
`,e.jsxs(t.p,{children:["in react js you just have to set ",e.jsx(t.code,{children:"inputType"})," prop. here is the code:"]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"language-of-date-input",children:"Language of date-input"}),`
`,e.jsxs(t.p,{children:["JB Design System have a global i18n mechanism to determine which language is your component should render by default. ",e.jsx(t.a,{href:"https://javadbat.github.io/design-system/?path=/docs/getting-started-introduction--docs&globals=locale:fa#internationalizationi18n",rel:"nofollow",children:"(see)"}),`
in previous versions we use to load jalali in farsi and gregorian in english but currently we support both language in both input type.`,e.jsx(t.br,{}),`
`,"the easiest way to change the language of the input is that you set ",e.jsx(t.code,{children:'lang="fa"'})," or ",e.jsx(t.code,{children:'lang="en"'})," inside your ",e.jsx(t.code,{children:"<html>"})," tag."]}),`
`,e.jsxs(t.p,{children:["You can also change the language of the demo here by clicking at 🌐 icon in the header of the demo to see each component in your expected language.",e.jsx(t.br,{}),`
`,"Here we show you jalali calendar with full persian setup:"]}),`
`,e.jsx(i,{of:s,height:"30rem",inline:!1}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(t.h2,{id:"difference-with-valuetype",children:"Difference With ValueType"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"value-type"})," is an attribute we use to determine input value format and has no effect on what user see. for example if you set ",e.jsx(t.code,{children:'value-type="JALALI"'})," and ",e.jsx(t.code,{children:'input-type="GREGORIAN"'})," user will see a gregorian calendar but when you get value by ",e.jsx(t.code,{children:"document.querySelector('jb-date-input').value"})," you will get ",e.jsx(t.code,{children:"1400-08-24"})," means value is jalali but calendar is gregorian"]})]})}function T(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{T as default};
