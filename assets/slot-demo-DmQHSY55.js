import{j as e,M as l,T as a,S as r,e as c}from"./index-Du1EajIB.js";import{useMDXComponents as i}from"./index-DVgGKjXv.js";import{W as o}from"./JBModal.stories-DnShbELB.js";import"./iframe-CPGFEJZu.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-bfIR6bpK.js";import"./index-BJ5IkxrY.js";import"./JBButton-DPDAiu7m.js";import"./jb-button-zHbWaroO.js";import"./jb-loading-CG_FOTv2.js";function s(t){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/JBModal/Slot Demo"}),`
`,e.jsx(a,{children:"Slot Demo"}),`
`,e.jsx(n.p,{children:`JB Modal trying to be simple as possible and not dictate any design to the component user.
you can easily show any content by just put it inside the input`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<jb-modal>hello world</jb-modal>
`})}),`
`,e.jsx(n.p,{children:"but you can also separate header and footer segment like this:"}),`
`,e.jsx(r,{of:o,inline:!1,height:"30rem"}),`
`,e.jsx(c,{of:o}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"each segment is optional and you can use any of them or none."}),`
`,e.jsx(n.li,{children:"you can put any html content inside each slot."}),`
`,e.jsx(n.li,{children:"each segment or slot have it's own styling, you can style each segment by your self."}),`
`,e.jsx(n.li,{children:"default styling of each segment is minimal and simple."}),`
`]}),`
`,e.jsx(n.h2,{id:"customizing-slots-style",children:"Customizing Slots style"}),`
`,e.jsx(n.p,{children:"you can easily customize each slot by just provide your own style to each slot like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<jb-modal>
  <div slot="header" style="background-color: lightblue; padding: 1rem; font-size: 1.5rem;">
    Custom Header
  </div>
  <!-- you can also pass any class like tailwind class and it will replace default styles -->
  <div slot="content" class="p-4 bg-white">
    Custom Content
  </div>
  <div slot="footer" style="background-color: lightgray; padding: 1rem; text-align: right;">
    Custom Footer
  </div>
</jb-modal> 
`})}),`
`,e.jsx(n.p,{children:"you can also customizing slot style for you whole project for style unification by just targeting each slot in your css file like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`jb-modal [slot="header"] {
  background-color: lightblue;
  padding: 1rem;
  font-size: 1.5rem;
}  
`})})]})}function M(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{M as default};
