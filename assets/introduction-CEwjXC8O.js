import{j as e,M as i}from"./index-CJy8TALI.js";import{useMDXComponents as o}from"./index-CKD13vE0.js";import"./iframe-BggfA-Fo.js";import"./index-CC6F48bw.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(t){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Introduction"}),`
`,e.jsx(n.h1,{id:"jb-design-system",children:"JB Design System"}),`
`,e.jsx(n.p,{children:"Collection of necessary components to build a web Application with web-components & react components."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Works on every Js framework and library like React, Vue, Angular, Svelte, etc."}),`
`,e.jsx(n.li,{children:"Dependency free, no need to install any other library or framework."}),`
`,e.jsx(n.li,{children:"Mostly focus on form elements and complicated elements with high user interactivity."}),`
`,e.jsxs(n.li,{children:["All components are written in web-component with additional React component wrapper around them(see ",e.jsx(n.a,{href:"?path=/docs/general-package-structure--docs",children:"Package Structure"}),")."]}),`
`,e.jsx(n.li,{children:"Multilingual and first class support for RTL and persian i18n utilities."}),`
`]}),`
`,e.jsx(n.p,{children:"we have 2 kind of components here:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["form base component:",e.jsx(n.br,{}),`
`,"used in form to get values from user."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["non-form components:",e.jsx(n.br,{}),`
`,"everything that can't be  used inside forms."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(n.p,{children:["Unlike most Design systems, JB Design System is not a single big package that contain all the components and modules. instead we use separate package/repo for each component.",e.jsx(n.br,{}),`
`,"this architecture lets user to select and install the package he need  without forcing him to download all the package he doesn't need and making it easier to update packages and manage dependencies.",e.jsx(n.br,{}),`
`,"you can see the package list with their Repo address from ",e.jsx(n.a,{href:"?path=/docs/general-package-list--docs",children:"here"})]}),`
`,e.jsx(n.p,{children:"JBDesignSystem is a multilingual RTL ready design system so you can easily use it in your multilingual app."}),`
`,e.jsx(n.h2,{id:"styling-guide",children:"Styling Guide"}),`
`,e.jsx(n.p,{children:"Due to the nature of web-components and shadow DOM we have to use css native ways like custom properties to style our components."}),`
`,e.jsxs("p",{children:[e.jsx(n.p,{children:"here is some useful links to get you started:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/theme-colors--docs",children:"color system"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/theme-sizes--docs",children:"sizing system"})}),`
`]})]}),`
`,e.jsx(n.h2,{id:"internationalizationi18n",children:"Internationalization(i18n)"}),`
`,e.jsx(n.p,{children:"We dont use external library to handle i18n. we just use vanilla JS browser API to handle i18n as easy as possible"}),`
`,e.jsx(n.h3,{id:"locale",children:"locale"}),`
`,e.jsxs(n.p,{children:["Default locale of all component come from ",e.jsx(n.code,{children:"html"})," tag ",e.jsx(n.code,{children:"lang"}),` attribute. you can easily change this attribute to your locale and remount your component.
In this Demo you can easily change locale by click on 🌐 icon in header to see components in different locale.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="fa"></html> 
<!-- or -->
<html lang="en"></html> 
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`//change locale by changing html lang attribute (Recommended)
document.documentElement.lang = "fa";
// or
import {i18n} from "jb-core/i18n";
// set locale of singleton instance of jb i18n config
// in this method you can pass your preferred calendar and numbering system as a parameter to new Intl.Locale("fa")
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
i18n.setLocale(new Intl.Locale("fa"))
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["you can read more about i18n in ",e.jsx(n.a,{href:"?path=/docs/components-jbcore-i18n-readme--docs",children:"i18n doc"}),";"]}),`
`]})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
