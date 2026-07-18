import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CI-Ob_5H.js";import{A as n,d as r,h as i,l as a,v as o}from"./blocks-DVtcq9Mv.js";import{t as s}from"./mdx-react-shim-gRTgLN0b.js";import{r as c}from"./dist-TLJW0xiL.js";function l(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Theme/Sizes`}),`
`,(0,d.jsx)(a,{children:`Sizes`}),`
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
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius`}),`:1rem (1rem) - default border radius used in inputs or buttons.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-xs`}),`:0.5rem (0.5rem) - for extra small button or some small elements`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-sm`}),`:0.75rem (0.75rem) - for small  buttons`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-lg`}),`:1.25rem (1.25rem) - for big buttons`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-radius-xl`}),`:1.5rem (1.5rem) - for extra large buttons and Box elements like modals content corner`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`control-height`,children:`control height`}),`
`,(0,d.jsx)(t.p,{children:`Control height tokens keep interactive controls such as buttons, inputs, and selects aligned across the design system. Component-specific height variables can still override these shared defaults.`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-control-height-xs`}),`:1.5rem (24px) - extra-small controls`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-control-height-sm`}),`:2rem (32px) - small controls`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-control-height-md`}),`:2.5rem (40px) - medium and default controls`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-control-height-lg`}),`:3rem (48px) - large controls`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-control-height-xl`}),`:4rem (64px) - extra-large controls`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),s(),o(),c()}))();export{u as default};