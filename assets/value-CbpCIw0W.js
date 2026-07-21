import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D_Yaz38j.js";import{A as n,a as r,d as i,f as a,m as o,v as s}from"./blocks-BmWQl0mR.js";import{t as c}from"./mdx-react-shim-CP0kembD.js";import{CustomFormat as l,ValueSetGet as u,ValueTypeTest as d,n as f}from"./JBDateInput.stories-CNFlhhWJ.js";function p(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{title:`Components/form elements/Inputs/JBDateInput/Value`}),`
`,(0,h.jsx)(t.h1,{id:`value`,children:`Value`}),`
`,(0,h.jsxs)(t.p,{children:[`As `,(0,h.jsx)(t.code,{children:`jb-date-input`}),` tried to looks native as possible, working with value is similar to native HTML `,(0,h.jsx)(t.code,{children:`<input>`}),` element.`,(0,h.jsx)(t.br,{}),`
`,`Get/Set value in `,(0,h.jsx)(t.code,{children:`jb-date-input`}),` is quite simple like this:`]}),`
`,(0,h.jsx)(t.h2,{id:`get-value`,children:`Get Value`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`  // return string value base on your provided format and value type
  const value = document.querySelector('jb-date-input').value // will return '0000-00-00T00:00:00.000Z' on empty value   

  // return javascript Date value (or null)
  const dateValue = document.querySelector('jb-date-input').valueInDate // will return null when date-input is empty and Date() when it have value

`})}),`
`,(0,h.jsx)(t.h2,{id:`set-value`,children:`Set Value`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`  // set value with string value
  document.querySelector('jb-date-input').value =  '2024-01-15T00:00:00.000Z'
  // set value by Date value  
  document.querySelector('jb-date-input').value =  new Date();
`})}),`
`,(0,h.jsx)(t.p,{children:`or in HTML`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-html`,children:`  <jb-date-input value="2024-01-15T00:00:00.000Z" />
`})}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsxs)(t.p,{children:[`note that providing & getting value with `,(0,h.jsx)(t.code,{children:`Date`}),` is faster and more performant than using value string`]}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`in-reactjs`,children:`In ReactJS`}),`
`,(0,h.jsxs)(t.p,{children:[`exactly like normal input + it support `,(0,h.jsx)(t.code,{children:`Date`}),` value as well`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`valuetype`,children:`ValueType`}),`
`,(0,h.jsx)(t.p,{children:`we have 3 value type:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-html`,children:`  <jb-date-input value="2020-08-01T14:05:39.530Z" value-type="GREGORIAN"/>
  <jb-date-input value="1596291030322" value-type="TIME_STAMP"/>
  <jb-date-input value="1399-05-01T12:05:39.530Z" value-type="JALALI"/>
`})}),`
`,(0,h.jsxs)(t.p,{children:[`by setting value type you can tell component what type of value you providing to it and expecting from it.
remember that value type is not effect input type, for example user input jalali date but you will get gregorian date when call `,(0,h.jsx)(t.code,{children:`e.target.value`}),`. you can also provide and get js `,(0,h.jsx)(t.code,{children:`Date`}),` type for more performance if you like see "get value" section for get and for set just set value like: `,(0,h.jsx)(t.code,{children:`element.value = new Date()`}),`.`]}),`
`,(0,h.jsx)(t.p,{children:`**Here is the live sample in React: **`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsxs)(t.p,{children:[`change `,(0,h.jsx)(t.code,{children:`valueType`}),`, `,(0,h.jsx)(t.code,{children:`inputType`}),` in the control below and select a new date in date input and see the difference.`]}),`
`,(0,h.jsx)(r,{of:d}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsxs)(t.p,{children:[`to test min & max set the value with ISO string format like `,(0,h.jsx)(t.code,{children:`2024-02-20T00:00:00.000Z`}),` or for JALALI value-type → `,(0,h.jsx)(t.code,{children:`1380-02-20T00:00:00.000Z`}),` and see how it works, as you can see min & max is also works base on `,(0,h.jsx)(t.code,{children:`valueType`}),`.
here is the code in ReactJS:`]}),`
`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`format`,children:`Format`}),`
`,(0,h.jsxs)(t.p,{children:[`Default format of date input is 'YYYY-MM-DDTHH:mm:ss.SSS[Z]' that compatible and exact format of `,(0,h.jsx)(t.code,{children:`new Date().toISOString()`}),`
you can change it however you need and `,(0,h.jsx)(t.code,{children:`[Z]`}),` mean the exact Z character that used in ISO standard format `,(0,h.jsx)(t.code,{children:`YYYY-MM-DDTHH:mm:ss.SSSZ[Z]`}),` => `,(0,h.jsx)(t.code,{children:`2012-06-21T00:00:00.000+3:30Z`}),`
you can change format by format attribute:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-html`,children:`<jb-date-input label="date" format="YYYY/MM/DD" value="2020/08/14"></jb-date-input>
`})}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.p,{children:`Here change the format and see effect on above date-input`}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(t.p,{children:`Here is above example code in ReactJS`}),`
`,(0,h.jsx)(a,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),c(),s(),f()}))();export{m as default};