import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BTYt1Ura.js";import{_ as n,d as r,f as i,k as a,m as o}from"./blocks-CIvnDLFF.js";import{t as s}from"./mdx-react-shim-Dpbc4vVP.js";import{Gregorian as c,Jalali as l,JalaliWithPersianSetup as u,n as d}from"./JBDateInput.stories-DdADYPJq.js";function f(e){let t={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{title:`Components/form elements/Inputs/JBDateInput/InputType`}),`
`,(0,m.jsx)(t.h1,{id:`input-type`,children:`Input type`}),`
`,(0,m.jsxs)(t.p,{children:[`jb-date-input support both jalali(shamcy) and gregorian(Miladi) calendar input type. like value-type that let you determine how you want to provide/expect data to/from jb-date-input you can specify how user must fill the date input.
to achieve this you have to set `,(0,m.jsx)(t.code,{children:`input-type`}),` attribute or set `,(0,m.jsx)(t.code,{children:`inputType`}),` object to component dom directly.
to set it as attribute you can set value like this:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`
<jb-date-input input-type="GREGORIAN"></jb-date-input>
<jb-date-input input-type="JALALI"></jb-date-input>
`})}),`
`,(0,m.jsx)(t.p,{children:`and for doing it with direct DOM assignment you can use following js code:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`//to show gregorian calendar
document.querySelector('jb-date-input').inputType = "GREGORIAN" 
document.querySelector('jb-date-input').inputType = "JALALI"
`})}),`
`,(0,m.jsx)(t.p,{children:`Jalali example:`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(t.p,{children:`Gregorian Example:`}),`
`,(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(t.h2,{id:`reactjs`,children:`ReactJS`}),`
`,(0,m.jsxs)(t.p,{children:[`in react js you just have to set `,(0,m.jsx)(t.code,{children:`inputType`}),` prop. here is the code:`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`language-of-date-input`,children:`Language of date-input`}),`
`,(0,m.jsxs)(t.p,{children:[`JB Design System have a global i18n mechanism to determine which language is your component should render by default. `,(0,m.jsx)(t.a,{href:`https://javadbat.github.io/design-system/?path=/docs/getting-started-introduction--docs&globals=locale:fa#internationalizationi18n`,rel:`nofollow`,children:`(see)`}),`
in previous versions we use to load jalali in farsi and gregorian in english but currently we support both language in both input type.`,(0,m.jsx)(t.br,{}),`
`,`the easiest way to change the language of the input is that you set `,(0,m.jsx)(t.code,{children:`lang="fa"`}),` or `,(0,m.jsx)(t.code,{children:`lang="en"`}),` inside your `,(0,m.jsx)(t.code,{children:`<html>`}),` tag.`]}),`
`,(0,m.jsxs)(t.p,{children:[`You can also change the language of the demo here by clicking at 🌐 icon in the header of the demo to see each component in your expected language.`,(0,m.jsx)(t.br,{}),`
`,`Here we show you jalali calendar with full persian setup:`]}),`
`,(0,m.jsx)(o,{of:u,height:`30rem`,inline:!1}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`difference-with-valuetype`,children:`Difference With ValueType`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`value-type`}),` is an attribute we use to determine input value format and has no effect on what user see. for example if you set `,(0,m.jsx)(t.code,{children:`value-type="JALALI"`}),` and `,(0,m.jsx)(t.code,{children:`input-type="GREGORIAN"`}),` user will see a gregorian calendar but when you get value by `,(0,m.jsx)(t.code,{children:`document.querySelector('jb-date-input').value`}),` you will get `,(0,m.jsx)(t.code,{children:`1400-08-24`}),` means value is jalali but calendar is gregorian`]})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),n(),d()}))();export{p as default};