import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CqEp92lC.js";import{_ as n,d as r,h as i,k as a,l as o}from"./blocks-CdBQtKfb.js";import{t as s}from"./mdx-react-shim-BIfJK2kC.js";import{r as c}from"./dist-CSLcGHe3.js";function l(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Theme/Sizes`}),`
`,(0,d.jsx)(o,{children:`Sizes`}),`
`,(0,d.jsx)(i,{children:`standard size variables in jb design system`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsxs)(t.p,{children:[`All JBDesign System Component initial their needed variables themselves and you don't need any initialization to use our components. `,(0,d.jsx)(t.strong,{children:`But`}),` if ypu need to initialize size variables for your own usage in your app you can do followings:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-javascript`,children:`import {defineSizes} from 'jb-core/theme';
// it will define all size related css variables in @property and :root you can also customize them in your css
defineSizes();
`})}),`
`,(0,d.jsx)(t.h2,{id:`standards`,children:`standards`}),`
`,(0,d.jsxs)(t.p,{children:[`we use `,(0,d.jsx)(t.code,{children:`rem`}),` unit as a sizing standard of our components so components and layout could effectively respond to user zoom and text size settings.`]}),`
`,(0,d.jsx)(t.h3,{id:`variable-values-units`,children:`variable values units`}),`
`,(0,d.jsxs)(t.p,{children:[`due to the CSS restriction for set rem values as a default value in `,(0,d.jsx)(t.code,{children:`@property`}),` we set default value in `,(0,d.jsx)(t.code,{children:`px`}),` and re-set the value in project document root in `,(0,d.jsx)(t.code,{children:`rem`}),`;`]}),`
`,(0,d.jsx)(t.h3,{id:`change-the-variables`,children:`change the variables`}),`
`,(0,d.jsxs)(t.p,{children:[`you can easily change every css variable value like any other css variable see `,(0,d.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties`,rel:`nofollow`,children:`this`}),` to whatever value you want.`]}),`
`,(0,d.jsx)(t.h2,{id:`border-radius`,children:`border radius`}),`
`,(0,d.jsx)(t.p,{children:`jb design system by default is a Modern and have a Round corner but you can change it base on your design language.`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius`}),`:1rem (16px) - default border radius used in inputs or buttons.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-xs`}),`:0.5rem (8px) - for extra small button or some small elements`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-sm`}),`:0.75rem (12px) - for small  buttons`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-lg`}),`:1.25rem (20px) - for big buttons`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-xl`}),`:1.25rem (24px) - for extra large buttons and Box elements like modals content corner`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),s(),n(),c()}))();export{u as default};