import{j as e,M as u,S as a,e as i,C as l}from"./index-CSKg4GO5.js";import{useMDXComponents as d}from"./index-DVgGKjXv.js";import{V as s,c as r,C as o}from"./JBDateInput.stories-BSvjgT46.js";import"./iframe-DUf3GCZ6.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./JBDateInput-B-Z7qXU0.js";import"./jb-date-input-DUQ27e8v.js";import"./jb-calendar-BwolZWEZ.js";import"./index-Bg4fOAbC.js";import"./index-bfIR6bpK.js";import"./index-_b1slotr.js";import"./index-B9_TbPzc.js";import"./jb-validation-DPnsTO1v.js";import"./jb-popover-DCb3VoGY.js";import"./JBButton-DitBmYU6.js";import"./jb-button-C-XSWCAK.js";import"./jb-loading-CG_FOTv2.js";import"./index-BJ5IkxrY.js";function c(n){const t={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Components/form elements/Inputs/JBDateInput/Value"}),`
`,e.jsx(t.h1,{id:"value",children:"Value"}),`
`,e.jsxs(t.p,{children:["As ",e.jsx(t.code,{children:"jb-date-input"})," tried to looks native as possible, working with value is similar to native HTML ",e.jsx(t.code,{children:"<input>"})," element.",e.jsx(t.br,{}),`
`,"Get/Set value in ",e.jsx(t.code,{children:"jb-date-input"})," is quite simple like this:"]}),`
`,e.jsx(t.h2,{id:"get-value",children:"Get Value"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`  // return string value base on your provided format and value type
  const value = document.querySelector('jb-date-input').value // will return '0000-00-00T00:00:00.000Z' on empty value   

  // return javascript Date value (or null)
  const dateValue = document.querySelector('jb-date-input').valueInDate // will return null when date-input is empty and Date() when it have value

`})}),`
`,e.jsx(t.h2,{id:"set-value",children:"Set Value"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`  // set value with string value
  document.querySelector('jb-date-input').value =  '2024-01-15T00:00:00.000Z'
  // set value by Date value  
  document.querySelector('jb-date-input').value =  new Date();
`})}),`
`,e.jsx(t.p,{children:"or in HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`  <jb-date-input value="2024-01-15T00:00:00.000Z" />
`})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["note that providing & getting value with ",e.jsx(t.code,{children:"Date"})," is faster and more performant than using value string"]}),`
`]}),`
`,e.jsx(t.h3,{id:"in-reactjs",children:"In ReactJS"}),`
`,e.jsxs(t.p,{children:["exactly like normal input + it support ",e.jsx(t.code,{children:"Date"})," value as well"]}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h2,{id:"valuetype",children:"ValueType"}),`
`,e.jsx(t.p,{children:"we have 3 value type:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`  <jb-date-input value="2020-08-01T14:05:39.530Z" value-type="GREGORIAN"/>
  <jb-date-input value="1596291030322" value-type="TIME_STAMP"/>
  <jb-date-input value="1399-05-01T12:05:39.530Z" value-type="JALALI"/>
`})}),`
`,e.jsxs(t.p,{children:[`by setting value type you can tell component what type of value you providing to it and expecting from it.
remember that value type is not effect input type, for example user input jalali date but you will get gregorian date when call `,e.jsx(t.code,{children:"e.target.value"}),". you can also provide and get js ",e.jsx(t.code,{children:"Date"}),' type for more performance if you like see "get value" section for get and for set just set value like: ',e.jsx(t.code,{children:"element.value = new Date()"}),"."]}),`
`,e.jsx(t.p,{children:"**Here is the live sample in React: **"}),`
`,e.jsx(a,{of:r}),`
`,e.jsxs(t.p,{children:["change ",e.jsx(t.code,{children:"valueType"}),", ",e.jsx(t.code,{children:"inputType"})," in the control below and select a new date in date input and see the difference."]}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["to test min & max set the value with ISO string format like ",e.jsx(t.code,{children:"2024-02-20T00:00:00.000Z"})," or for JALALI value-type → ",e.jsx(t.code,{children:"1380-02-20T00:00:00.000Z"})," and see how it works, as you can see min & max is also works base on ",e.jsx(t.code,{children:"valueType"}),`.
here is the code in ReactJS:`]}),`
`]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t.h2,{id:"format",children:"Format"}),`
`,e.jsxs(t.p,{children:["Default format of date input is 'YYYY-MM-DDTHH:mm:ss.SSS[Z]' that compatible and exact format of ",e.jsx(t.code,{children:"new Date().toISOString()"}),`
you can change it however you need and `,e.jsx(t.code,{children:"[Z]"})," mean the exact Z character that used in ISO standard format ",e.jsx(t.code,{children:"YYYY-MM-DDTHH:mm:ss.SSSZ[Z]"})," => ",e.jsx(t.code,{children:"2012-06-21T00:00:00.000+3:30Z"}),`
you can change format by format attribute:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<jb-date-input label="date" format="YYYY/MM/DD" value="2020/08/14"></jb-date-input>
`})}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(t.p,{children:"Here change the format and see effect on above date-input"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(t.p,{children:"Here is above example code in ReactJS"}),`
`,e.jsx(i,{of:o})]})}function C(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{C as default};
