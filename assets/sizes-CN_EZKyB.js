import{j as e,M as o,H as a,b as t}from"./index-v1EKRNhS.js";import{useMDXComponents as r}from"./index-DVgGKjXv.js";import"./index-bfIR6bpK.js";import"./iframe-ryFCSExe.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Theme/Sizes"}),`
`,e.jsx(a,{children:"Sizes"}),`
`,e.jsx(t,{children:"standard size variables in jb design system"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["All JBDesign System Component initial their needed variables themselves and you don't need any initialization to use our components. ",e.jsx(n.strong,{children:"But"})," if ypu need to initialize size variables for your own usage in your app you can do followings:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {defineSizes} from 'jb-core/theme';
// it will define all size related css variables in @property and :root you can also customize them in your css
defineSizes();
`})}),`
`,e.jsx(n.h2,{id:"standards",children:"standards"}),`
`,e.jsxs(n.p,{children:["we use ",e.jsx(n.code,{children:"rem"})," unit as a sizing standard of our components so components and layout could effectively respond to user zoom and text size settings."]}),`
`,e.jsx(n.h3,{id:"variable-values-units",children:"variable values units"}),`
`,e.jsxs(n.p,{children:["due to the CSS restriction for set rem values as a default value in ",e.jsx(n.code,{children:"@property"})," we set default value in ",e.jsx(n.code,{children:"px"})," and re-set the value in project document root in ",e.jsx(n.code,{children:"rem"}),";"]}),`
`,e.jsx(n.h3,{id:"change-the-variables",children:"change the variables"}),`
`,e.jsxs(n.p,{children:["you can easily change every css variable value like any other css variable see ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties",rel:"nofollow",children:"this"})," to whatever value you want."]}),`
`,e.jsx(n.h2,{id:"border-radius",children:"border radius"}),`
`,e.jsx(n.p,{children:"jb design system by default is a Modern and have a Round corner but you can change it base on your design language."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--jb-radius"}),":1rem (16px) - default border radius used in inputs or buttons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--jb-radius-xs"}),":0.5rem (8px) - for extra small button or some small elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--jb-radius-sm"}),":0.75rem (12px) - for small  buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--jb-radius-lg"}),":1.25rem (20px) - for big buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--jb-radius-xl"}),":1.25rem (24px) - for extra large buttons and Box elements like modals content corner"]}),`
`]})]})}function b(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{b as default};
