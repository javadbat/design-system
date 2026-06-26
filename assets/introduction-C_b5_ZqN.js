import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CNtKknPt.js";import{_ as n,d as r,k as i}from"./blocks-B4p_hQX5.js";import{t as a}from"./mdx-react-shim-B0WH_Ez6.js";function o(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Getting Started/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`jb-design-system`,children:`JB Design System`}),`
`,(0,c.jsx)(t.p,{children:`Collection of necessary components to build a web Application with web-components & react components.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Works on every Js framework and library like React, Vue, Angular, Svelte, etc.`}),`
`,(0,c.jsx)(t.li,{children:`Dependency free, no need to install any other library or framework.`}),`
`,(0,c.jsx)(t.li,{children:`Mostly focus on form elements and complicated elements with high user interactivity.`}),`
`,(0,c.jsxs)(t.li,{children:[`All components are written in web-component with additional React component wrapper around them(see `,(0,c.jsx)(t.a,{href:`?path=/docs/general-package-structure--docs`,children:`Package Structure`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Multilingual and first class support for RTL and persian i18n utilities.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`we have 2 kind of components here:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`form base component:`,(0,c.jsx)(t.br,{}),`
`,`used in form to get values from user.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`non-form components:`,(0,c.jsx)(t.br,{}),`
`,`everything that can't be  used inside forms.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`architecture`,children:`Architecture`}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike most Design systems, JB Design System is not a single big package that contain all the components and modules. instead we use separate package/repo for each component.`,(0,c.jsx)(t.br,{}),`
`,`this architecture lets user to select and install the package he need  without forcing him to download all the package he doesn't need and making it easier to update packages and manage dependencies.`,(0,c.jsx)(t.br,{}),`
`,`you can see the package list with their Repo address from `,(0,c.jsx)(t.a,{href:`?path=/docs/general-package-list--docs`,children:`here`})]}),`
`,(0,c.jsx)(t.p,{children:`JBDesignSystem is a multilingual RTL ready design system so you can easily use it in your multilingual app.`}),`
`,(0,c.jsx)(t.h2,{id:`styling-guide`,children:`Styling Guide`}),`
`,(0,c.jsx)(t.p,{children:`Due to the nature of web-components and shadow DOM we have to use css native ways like custom properties to style our components.`}),`
`,(0,c.jsxs)(`p`,{children:[(0,c.jsx)(t.p,{children:`here is some useful links to get you started:`}),(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`?path=/docs/theme-colors--docs`,children:`color system`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`?path=/docs/theme-sizes--docs`,children:`sizing system`})}),`
`]})]}),`
`,(0,c.jsx)(t.h2,{id:`internationalizationi18n`,children:`Internationalization(i18n)`}),`
`,(0,c.jsx)(t.p,{children:`We dont use external library to handle i18n. we just use vanilla JS browser API to handle i18n as easy as possible`}),`
`,(0,c.jsx)(t.h3,{id:`locale`,children:`locale`}),`
`,(0,c.jsxs)(t.p,{children:[`Default locale of all component come from `,(0,c.jsx)(t.code,{children:`html`}),` tag `,(0,c.jsx)(t.code,{children:`lang`}),` attribute. you can easily change this attribute to your locale and remount your component.
In this Demo you can easily change locale by click on 🌐 icon in header to see components in different locale.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<html lang="fa"></html> 
<!-- or -->
<html lang="en"></html> 
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`//change locale by changing html lang attribute (Recommended)
document.documentElement.lang = "fa";
// or
import {i18n} from "jb-core/i18n";
// set locale of singleton instance of jb i18n config
// in this method you can pass your preferred calendar and numbering system as a parameter to new Intl.Locale("fa")
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
i18n.setLocale(new Intl.Locale("fa"))
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`you can read more about i18n in `,(0,c.jsx)(t.a,{href:`?path=/docs/components-jbcore-i18n-readme--docs`,children:`i18n doc`}),`;`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};