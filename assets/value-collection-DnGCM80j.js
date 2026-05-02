import{j as e,M as h,S as s,C as i,e as l}from"./index-CLRjMUQx.js";import{useMDXComponents as m}from"./index-DVRRELxc.js";import{FormWithSameName as r,ArrayValue as t}from"./JBForm.stories-J5iJ-Ygr.js";import"./iframe-D6HzE391.js";import"./index-CwcVQgaJ.js";import"./index-BEjDVx3I.js";import"./index-C8bfMtE3.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./JBButton-CzXHkPk6.js";import"./jb-button-BTg9t25D.js";import"./jb-loading-BuRiKsux.js";import"./index-BjRxPyWZ.js";import"./index-BtFglznY.js";import"./index-BVrqzDik.js";import"./jb-validation-AFHFNd1g.js";import"./JBDateInput-Dex0K4TC.js";import"./jb-calendar-CgnbmuUq.js";import"./index-Bhe3Q7G8.js";import"./index-CUhgvN0_.js";import"./jb-popover-DTIBXtF_.js";import"./JBInput-SMYLafLo.js";import"./index-DC_OtfbB.js";import"./index-CD0l0uGk.js";import"./JBTextarea-BhLsVcuX.js";import"./JBPaymentInput-BUZJIcrL.js";import"./JBImageInput-BeLM5Zoy.js";import"./JBNumberInput-5HbdaNtm.js";function a(o){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/form elements/JBForm/ValueCollection"}),`
`,e.jsx(n.h1,{id:"value-collection",children:"Value Collection"}),`
`,e.jsxs(n.p,{children:["The question is what happen if we put same ",e.jsx(n.code,{children:"name"})," attribute for different form elements.",e.jsx(n.br,{}),`
`,"We Discuss it and the answer is we make a ",e.jsx("b",{children:"Value Collection"})," type for it.",e.jsx(n.br,{}),`
`,"for now it just a  JS ",e.jsx(n.code,{children:"Map"})," type with some extra rules."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["in ",e.jsx(n.code,{children:"Value Collection"})," we have 2 key type ",e.jsx(n.code,{children:"number"})," & ",e.jsx(n.code,{children:"string"}),". number works like array index and string is equivalent of element ",e.jsx(n.code,{children:"id"})," attribute."]}),`
`,e.jsxs(n.li,{children:["It must contain 1 extra member more than all field value called ",e.jsx(n.code,{children:"ValueCollectionSymbol"})," to determine it's not a Field with ",e.jsx(n.code,{children:"Map"})," type value but it's a ",e.jsx("b",{children:"Value Collection"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works?"}),`
`,e.jsxs(n.p,{children:["Most ",e.jsx(n.code,{children:"jb-form"})," methods return their result by traversing all form elements, sub-forms and virtual elements. we create result base on each field ",e.jsx(n.code,{children:"name"}),` attribute.
for example when you call `,e.jsx(n.code,{children:"form.getFormValues()"})," you will get following result:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  bookName:'wiki',
  price:1000
}
`})}),`
`,e.jsx(n.p,{children:"but when we have form with multiple form field with the same name like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<jb-form>
  <jb-input name="personName" />
  <jb-input name="phoneNumber" />
  <jb-input name="phoneNumber" />
  <jb-input name="phoneNumber" />
</jb-form>
`})}),`
`,e.jsxs(n.p,{children:["by calling ",e.jsx(n.code,{children:"form.getFormValues()"})," we will get:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  personName:'john',
  phoneNumber:new TraverseCollection([[1,'0912999999999'],[2,'0912888888888'],[3,'091277777777']])
}
`})}),`
`,e.jsxs(n.p,{children:["you can also pass this value to ",e.jsx(n.code,{children:"form.setFormValues()"})," method to set all forms data."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["all result include validations method also return ",e.jsx(n.code,{children:"ValueCollectionSymbol"})," when they face multiple field with the same name."]}),`
`]}),`
`,e.jsx(n.h2,{id:"what-about-sub-forms-and-virtual-elements",children:"What about sub-forms and Virtual elements?"}),`
`,e.jsx(n.p,{children:"they are also support this model and export something like this for sub-forms:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<jb-form name="mainForm">
  <jb-form name="person">
    <jb-input name="personName" />
    <jb-input name="age" />
  </jb-form>
  <jb-form name="person">
    <jb-input name="personName" />
    <jb-input name="age" />
  </jb-form>
</jb-form>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  person:TraverseCollection([
    [1,{
      personName:'john',
      age:'12'
    }],
    [2,{
      personName:'sara',
      age:'18'
    }]  
  ])
}
`})}),`
`,e.jsx(n.h2,{id:"id-as-a-key",children:"id as a key"}),`
`,e.jsxs(n.p,{children:["if your element has a ",e.jsx(n.code,{children:"id"})," we will use that id as a ",e.jsx(n.code,{children:"Map"}),` key so:
`,e.jsx(n.code,{children:"[1,'0912999999999']"})," will become ",e.jsx(n.code,{children:"['YourId','0912999999999']"}),`.
this will help you cave value collection and can spot where or set it exactly where you want.`]}),`
`,e.jsxs(n.h2,{id:"why-map-when-we-have-arrays",children:["Why ",e.jsx(n.code,{children:"Map"})," when we have arrays?"]}),`
`,e.jsxs(n.p,{children:[`first we develop this feature with Array because it easier to use and need no transformation for send it or store it as a JSON.
but in later we find-out some of our form elements like `,e.jsx(n.code,{children:"tagList"})," or multi select drop-down has a array value type. so we turn it to Map with a uniq symbol key to make sure all kind of form elements with array or even map type value can be supported."]}),`
`,e.jsx(n.h2,{id:"examples",children:"examples:"}),`
`,e.jsx(n.h3,{id:"complex-form-with-the-same-names",children:"complex form with the same names:"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"small-form-with-also-virtual-value",children:"small form with also virtual value"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(l,{of:t})]})}function _(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{_ as default};
