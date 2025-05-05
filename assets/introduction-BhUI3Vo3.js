import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-B8rYRX2K.js";import"./index-D4lIrffr.js";function t(s){const e={a:"a",br:"br",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"jb-design-system",children:"JB Design System"}),`
`,n.jsx(e.p,{children:"Collection of necessary components to build a web Application with web-components & react components."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"mostly focus on form elements and complicated elements with high user interactivity."}),`
`,n.jsx(e.li,{children:'all components are written in web-component with additional React component wrapper around them(access them with "component-name/react").'}),`
`,n.jsx(e.li,{children:"first class support for RTL and persian i18n utilities."}),`
`]}),`
`,n.jsx(e.p,{children:"we have 2 kind of components here:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["form base component:",n.jsx(e.br,{}),`
`,"used in form to get values from user."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["non-form components:",n.jsx(e.br,{}),`
`,"everything that can't be  used inside forms."]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"styling-guide",children:"Styling Guide"}),`
`,n.jsx(e.p,{children:"Due to the nature of web-components and shadow DOM we can't use css-in-js approach for styling. so we have to use css native ways like custom properties to style our components."}),`
`,n.jsxs("p",{children:[n.jsx(e.p,{children:"here is some useful links to get you started:"}),n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"?path=/docs/theme-colors--docs",children:"color system"})}),`
`]})]})]})}function l(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{l as default};
