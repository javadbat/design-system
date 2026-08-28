import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-pxpe10JU.js";import{f as n,g as r,j as i,u as a,y as o}from"./blocks-D3l0QTVQ.js";import{t as s}from"./mdx-react-shim-B1gHihFR.js";import{r as c}from"./dist-BiC1ecBI.js";function l(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Theme/Sizes`}),`
`,(0,d.jsx)(a,{children:`Sizes`}),`
`,(0,d.jsx)(r,{children:`standard size variables in jb design system`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsxs)(t.p,{children:[`All JBDesign System Component initial their needed variables themselves and you don't need any initialization to use our components. `,(0,d.jsx)(t.strong,{children:`But`}),` if ypu need to initialize size variables for your own usage in your app you can do followings:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-javascript`,children:`import {defineSizes} from 'jb-core/theme';
// it will define all size related css variables in @property and :root you can also customize them in your css
defineSizes();
`})}),`
`,(0,d.jsx)(t.h3,{id:`device-detection-helpers`,children:`device detection helpers`}),`
`,(0,d.jsxs)(t.p,{children:[`For JavaScript decisions that depend on the broad device category, `,(0,d.jsx)(t.code,{children:`jb-core`}),` exports `,(0,d.jsx)(t.code,{children:`isMobile()`}),` and `,(0,d.jsx)(t.code,{children:`isTablet()`}),`:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-ts`,children:`import {isMobile, isTablet} from 'jb-core';

isMobile(); // true for mobile user agents
isTablet(); // true for common tablet user agents
`})}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsx)(t.p,{children:`this methods works base on user agents not device size.`}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`The helpers are safe to call during server-side rendering and return `,(0,d.jsx)(t.code,{children:`false`}),` when `,(0,d.jsx)(t.code,{children:`navigator`}),` is unavailable. They use user-agent and touch-point detection, so use the viewport media tokens above when the decision is about available layout space rather than device type.`]}),`
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
`]}),`
`,(0,d.jsx)(t.h2,{id:`breakpoints`,children:`breakpoints`}),`
`,(0,d.jsxs)(t.p,{children:[`Breakpoint tokens are registered by `,(0,d.jsx)(t.code,{children:`defineSizes()`}),` and are available as inherited CSS custom properties. Their values are expressed in `,(0,d.jsx)(t.code,{children:`rem`}),` so they respond consistently to the document's root font size.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-breakpoint-sm`}),`:40rem (640px)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-breakpoint-md`}),`:48rem (768px)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-breakpoint-lg`}),`:64rem (1024px)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--jb-breakpoint-xl`}),`:80rem (1280px)`]}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`The corresponding JavaScript values are exported as `,(0,d.jsx)(t.code,{children:`breakPoints`}),`:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-ts`,children:`import {breakPoints} from 'jb-core/theme';

breakPoints.sm; // 640
breakPoints.md; // 768
breakPoints.lg; // 1024
breakPoints.xl; // 1280
`})}),`
`,(0,d.jsxs)(t.p,{children:[`Use the CSS tokens for styles and `,(0,d.jsx)(t.code,{children:`breakPoints`}),` when JavaScript needs to make the same size-based decision. The values in `,(0,d.jsx)(t.code,{children:`breakPoints`}),` are pixel numbers; the CSS tokens resolve to rem values.`]}),`
`,(0,d.jsx)(t.h2,{id:`viewport-media-tokens`,children:`viewport media tokens`}),`
`,(0,d.jsx)(t.p,{children:`Import the shared media file when defining responsive component styles:`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-css`,children:`@import "jb-core/style/media.css";

@media (--jb-viewport-sm-to) {
  /* viewport width <= 40rem */
}

@media (--jb-viewport-sm-from) {
  /* viewport width > 40rem */
}

@media (--jb-viewport-md-to) {
  /* viewport width <= 48rem */
}

@media (--jb-viewport-md-from) {
  /* viewport width > 48rem */
}
`})}),`
`,(0,d.jsxs)(t.p,{children:[`These are CSS custom media queries, not CSS variables. Use them directly in `,(0,d.jsx)(t.code,{children:`@media`}),` rules; do not wrap them in `,(0,d.jsx)(t.code,{children:`var(...)`}),`.`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),s(),o(),c()}))();export{u as default};