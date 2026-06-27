import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CI8AyR3H.js";import{_ as n,a as r,d as i,f as a,k as o,m as s}from"./blocks-ChS5Zzy2.js";import{t as c}from"./mdx-react-shim-Dnw3yppt.js";import{ArrayValue as l,FormWithSameName as u,n as d}from"./JBForm.stories-B9Oy61Wt.js";function f(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...o(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{title:`Components/form elements/JBForm/ValueCollection`}),`
`,(0,m.jsx)(t.h1,{id:`value-collection`,children:`Value Collection`}),`
`,(0,m.jsxs)(t.p,{children:[`The question is what happen if we put same `,(0,m.jsx)(t.code,{children:`name`}),` attribute for different form elements.`,(0,m.jsx)(t.br,{}),`
`,`We Discuss it and the answer is we make a `,(0,m.jsx)(`b`,{children:`Value Collection`}),` type for it.`,(0,m.jsx)(t.br,{}),`
`,`for now it just a  JS `,(0,m.jsx)(t.code,{children:`Map`}),` type with some extra rules.`]}),`
`,(0,m.jsxs)(t.ol,{children:[`
`,(0,m.jsxs)(t.li,{children:[`in `,(0,m.jsx)(t.code,{children:`Value Collection`}),` we have 2 key type `,(0,m.jsx)(t.code,{children:`number`}),` & `,(0,m.jsx)(t.code,{children:`string`}),`. number works like array index and string is equivalent of element `,(0,m.jsx)(t.code,{children:`id`}),` attribute.`]}),`
`,(0,m.jsxs)(t.li,{children:[`It must contain 1 extra member more than all field value called `,(0,m.jsx)(t.code,{children:`ValueCollectionSymbol`}),` to determine it's not a Field with `,(0,m.jsx)(t.code,{children:`Map`}),` type value but it's a `,(0,m.jsx)(`b`,{children:`Value Collection`}),`.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`how-it-works`,children:`How it works?`}),`
`,(0,m.jsxs)(t.p,{children:[`Most `,(0,m.jsx)(t.code,{children:`jb-form`}),` methods return their result by traversing all form elements, sub-forms and virtual elements. we create result base on each field `,(0,m.jsx)(t.code,{children:`name`}),` attribute.
for example when you call `,(0,m.jsx)(t.code,{children:`form.getFormValues()`}),` you will get following result:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`{
  bookName:'wiki',
  price:1000
}
`})}),`
`,(0,m.jsx)(t.p,{children:`but when we have form with multiple form field with the same name like this:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<jb-form>
  <jb-input name="personName" />
  <jb-input name="phoneNumber" />
  <jb-input name="phoneNumber" />
  <jb-input name="phoneNumber" />
</jb-form>
`})}),`
`,(0,m.jsxs)(t.p,{children:[`by calling `,(0,m.jsx)(t.code,{children:`form.getFormValues()`}),` we will get:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`{
  personName:'john',
  phoneNumber:new TraverseCollection([[1,'0912999999999'],[2,'0912888888888'],[3,'091277777777']])
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`you can also pass this value to `,(0,m.jsx)(t.code,{children:`form.setFormValues()`}),` method to set all forms data.`]}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsxs)(t.p,{children:[`all result include validations method also return `,(0,m.jsx)(t.code,{children:`ValueCollectionSymbol`}),` when they face multiple field with the same name.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`what-about-sub-forms-and-virtual-elements`,children:`What about sub-forms and Virtual elements?`}),`
`,(0,m.jsx)(t.p,{children:`they are also support this model and export something like this for sub-forms:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-html`,children:`<jb-form name="mainForm">
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
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`{
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
`,(0,m.jsx)(t.h2,{id:`id-as-a-key`,children:`id as a key`}),`
`,(0,m.jsxs)(t.p,{children:[`if your element has a `,(0,m.jsx)(t.code,{children:`id`}),` we will use that id as a `,(0,m.jsx)(t.code,{children:`Map`}),` key so:
`,(0,m.jsx)(t.code,{children:`[1,'0912999999999']`}),` will become `,(0,m.jsx)(t.code,{children:`['YourId','0912999999999']`}),`.
this will help you cave value collection and can spot where or set it exactly where you want.`]}),`
`,(0,m.jsxs)(t.h2,{id:`why-map-when-we-have-arrays`,children:[`Why `,(0,m.jsx)(t.code,{children:`Map`}),` when we have arrays?`]}),`
`,(0,m.jsxs)(t.p,{children:[`first we develop this feature with Array because it easier to use and need no transformation for send it or store it as a JSON.
but in later we find-out some of our form elements like `,(0,m.jsx)(t.code,{children:`tagList`}),` or multi select drop-down has a array value type. so we turn it to Map with a uniq symbol key to make sure all kind of form elements with array or even map type value can be supported.`]}),`
`,(0,m.jsx)(t.h2,{id:`examples`,children:`examples:`}),`
`,(0,m.jsx)(t.h3,{id:`complex-form-with-the-same-names`,children:`complex form with the same names:`}),`
`,(0,m.jsx)(s,{of:u}),`
`,(0,m.jsx)(r,{of:u}),`
`,(0,m.jsx)(a,{of:u}),`
`,(0,m.jsx)(t.h3,{id:`small-form-with-also-virtual-value`,children:`small form with also virtual value`}),`
`,(0,m.jsx)(s,{of:l}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),c(),n(),d()}))();export{p as default};