import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DjftpzXQ.js";import{f as ee,h as n,j as r,p as i,v as te,y as a}from"./blocks-BkMZfQ8f.js";import{t as ne}from"./mdx-react-shim-CzRvkGBh.js";import{a as o,c as s,d as c,h as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./Styles.stories-COvjIsPs.js";import{C as b,S as x,_ as S,a as C,b as w,c as T,d as E,f as D,g as O,h as k,i as A,l as j,m as M,n as N,o as P,p as F,r as I,s as L,t as R,u as z,v as B,w as V,x as re,y as H}from"./terminal-Ci83lsF2.js";import{C as U,S as W,_ as G,a as K,b as q,c as J,d as Y,f as X,g as ie,h as ae,i as oe,l as se,m as ce,n as le,o as ue,p as de,r as fe,s as pe,t as me,u as he,v as Z,w as ge,x as _e,y as ve}from"./style-terminal-sSKLWugV.js";function Q(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(ee,{title:`Components/JBPopover/Styling`}),`
`,(0,$.jsx)(te,{children:`Styling`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`JBPopover`}),` exposes a compact styling API for anchored popovers and mobile bottom sheets. Use variables for the shell and backdrop, then use the official `,(0,$.jsx)(t.code,{children:`content`}),` part for borders, shadows, and the visible content surface.`]}),`
`,(0,$.jsx)(t.h2,{id:`live-gallery`,children:`Live Gallery`}),`
`,(0,$.jsx)(n,{of:d}),`
`,(0,$.jsx)(i,{of:d}),`
`,(0,$.jsx)(t.h2,{id:`common-design-tokens`,children:`Common Design Tokens`}),`
`,(0,$.jsx)(t.p,{children:`Use the core theme docs as the source of truth for shared design-system variables:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` explains the general color palette variables, default colors, customization approaches, and color generation helpers.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` explains shared size and radius variables.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`https://javadbat.github.io/design-system/?path=/docs/theme-custom-material--docs`,rel:`nofollow`,children:`Theme Custom Galleries`}),` gathers the shared custom style recipes across components.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Popover recipes should use those common tokens where possible, then map them into `,(0,$.jsx)(t.code,{children:`--jb-popover-*`}),` variables only where the overlay needs a component-specific value.`]}),`
`,(0,$.jsx)(t.h2,{id:`styling-model`,children:`Styling Model`}),`
`,(0,$.jsx)(t.p,{children:`Use four layers when styling popover examples:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Common design tokens are documented in `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Reusable example theme packs live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and can be shared across components.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Component recipe files live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-popover/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-popover/stories/styles`})}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Trigger buttons in these examples reuse `,(0,$.jsx)(t.a,{href:`../../jb-button/stories/Styling.mdx`,children:`JBButton Styling`}),`; the popover recipe only owns the overlay shell and content surface.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Each example uses one shared example theme pack from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and one popover-specific recipe from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-popover/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-popover/stories/styles`})}),`. The style story applies the theme class to the demo shell and the popover class directly to `,(0,$.jsx)(t.code,{children:`JBPopover`}),`.`]}),`
`,(0,$.jsx)(t.h2,{id:`recommended-customization-path`,children:`Recommended Customization Path`}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`--jb-popover-*`}),` variables first for background, radius, padding, mobile backdrop, margin, and z-index.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`jb-popover::part(content)`}),` for the visible surface: border, shadow, minimum width, overflow, and backdrop filter.`]}),`
`,(0,$.jsx)(t.li,{children:`Style slotted content with normal CSS classes in the parent document.`}),`
`,(0,$.jsxs)(t.li,{children:[`Reuse `,(0,$.jsx)(t.a,{href:`../../jb-button/stories/Styling.mdx`,children:`JBButton Styling`}),` for trigger buttons instead of copying button variables into popover recipes.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use common theme variables from `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` when the style should align with the design system.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Put reusable theme-pack values in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` only when they should be shared by multiple component demos.`]}),`
`,(0,$.jsx)(t.li,{children:`Add a new popover variable only when a needed internal surface cannot be customized with current public variables or official parts.`}),`
`]}),`
`,(0,$.jsx)(t.h2,{id:`parts-and-states`,children:`Parts And States`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Part`}),(0,$.jsx)(`th`,{children:`Element`}),(0,$.jsx)(`th`,{children:`Notes`})]})}),(0,$.jsx)(`tbody`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`content`})}),(0,$.jsx)(`td`,{children:`Popover content wrapper`}),(0,$.jsx)(`td`,{children:`Use for the visible panel surface, including width, border, shadow, overflow, and surface effects.`})]})})]}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`JBPopover`}),` does not currently expose custom CSS states. Use the public `,(0,$.jsx)(t.code,{children:`isOpen`}),` property or `,(0,$.jsx)(t.code,{children:`is-open`}),` attribute for behavior, and style the open surface through variables and `,(0,$.jsx)(t.code,{children:`::part(content)`}),`.`]}),`
`,(0,$.jsx)(t.h2,{id:`css-variables`,children:`CSS Variables`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Category`}),(0,$.jsx)(`th`,{children:`Description`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-border-radius`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Radius of the content wrapper and mobile sheet top corners.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-padding`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Padding of the content wrapper.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-bg-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Background color of the content wrapper.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-box-shadow`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Box shadow of the content wrapper.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-back-bg-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Mobile backdrop background color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-z-index`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Z-index of the opened popover.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-top`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Top position in desktop mode when the popover is not bound to an anchor.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-popover-margin-top`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Desktop margin above the popover after positioning.`})]})]})]}),`
`,(0,$.jsx)(t.h2,{id:`starter-recipe`,children:`Starter Recipe`}),`
`,(0,$.jsx)(t.p,{children:`Use this minimal recipe when a product only needs brand alignment for the popover shell.`}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`jb-popover.brand-popover {\r
  --jb-popover-bg-color: #ffffff;\r
  --jb-popover-border-radius: 1rem;\r
  --jb-popover-padding: 0;\r
  --jb-popover-margin-top: 0.5rem;\r
  --jb-popover-back-bg-color: rgb(15 23 42 / 0.45);\r
  --jb-popover-z-index: 1000;\r
}\r
\r
jb-popover.brand-popover::part(content) {\r
  min-width: 16rem;\r
  overflow: hidden;\r
  border: 1px solid #dbe3ef;\r
  box-shadow: 0 0.75rem 1.75rem rgb(15 23 42 / 0.14);\r
}
`})}),`
`,(0,$.jsx)(t.h2,{id:`style-recipes`,children:`Style Recipes`}),`
`,(0,$.jsx)(t.h3,{id:`carbon`,children:`Carbon`}),`
`,(0,$.jsx)(n,{of:o}),`
`,(0,$.jsx)(i,{of:o}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:k,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:ie,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`aurora`,children:`Aurora`}),`
`,(0,$.jsx)(n,{of:p}),`
`,(0,$.jsx)(i,{of:p}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-1`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:re,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-1`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:W,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`forest`,children:`Forest`}),`
`,(0,$.jsx)(n,{of:s}),`
`,(0,$.jsx)(i,{of:s}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-2`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:j,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-2`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:he,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`sunset`,children:`Sunset`}),`
`,(0,$.jsx)(n,{of:h}),`
`,(0,$.jsx)(i,{of:h}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-3`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:A,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-3`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:oe,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`porcelain`,children:`Porcelain`}),`
`,(0,$.jsx)(n,{of:c}),`
`,(0,$.jsx)(i,{of:c}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-4`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:P,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-4`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:ue,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`candy`,children:`Candy`}),`
`,(0,$.jsx)(n,{of:u}),`
`,(0,$.jsx)(i,{of:u}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-5`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:S,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-5`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:Z,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`terminal`,children:`Terminal`}),`
`,(0,$.jsx)(n,{of:f}),`
`,(0,$.jsx)(i,{of:f}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-6`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:N,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-6`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:le,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`material`,children:`Material`}),`
`,(0,$.jsx)(n,{of:y}),`
`,(0,$.jsx)(i,{of:y}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-7`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:T,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-7`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:J,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`fluent`,children:`Fluent`}),`
`,(0,$.jsx)(n,{of:_}),`
`,(0,$.jsx)(i,{of:_}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-8`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:E,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-8`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:X,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`bootstrap`,children:`Bootstrap`}),`
`,(0,$.jsx)(n,{of:g}),`
`,(0,$.jsx)(i,{of:g}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-9`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:H,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-9`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:q,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`cupertino`,children:`Cupertino`}),`
`,(0,$.jsx)(n,{of:m}),`
`,(0,$.jsx)(i,{of:m}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-10`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:F,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-10`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:ce,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`ant-design`,children:`Ant Design`}),`
`,(0,$.jsx)(n,{of:v}),`
`,(0,$.jsx)(i,{of:v}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-11`,children:`Shared Tokens`}),`
`,(0,$.jsx)(i,{code:b,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`popover-css-11`,children:`Popover CSS`}),`
`,(0,$.jsx)(i,{code:ge,language:`css`}),`
`,(0,$.jsx)(t.h2,{id:`theme-file-pattern`,children:`Theme File Pattern`}),`
`,(0,$.jsxs)(t.p,{children:[`Use `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` as the common design-token guides. Theme-pack files should keep reusable demo variables in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),`, then each component should keep its own style CSS in its story `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-popover/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`styles`})}),` folder.`]}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`/* https://github.com/javadbat/design-system/blob/main/docs/styles/carbon.css */\r
.theme-name-style {\r
  /* shared design-system variables */\r
}\r
\r
/* https://github.com/javadbat/design-system/blob/main/modules/jb-popover/stories/styles/style-carbon.css */\r
jb-popover.theme-name-popover {\r
  /* popover host variables */\r
}\r
\r
jb-popover.theme-name-popover::part(content) {\r
  /* official content surface */\r
}\r
\r
.theme-name-popover-card {\r
  /* slotted demo content */\r
}
`})}),`
`,(0,$.jsxs)(t.p,{children:[`This keeps common theme tokens reusable while making the official `,(0,$.jsx)(t.code,{children:`JBPopover`}),` styling API visible in one page.`]})]})}function ye(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Q,{...e})}):Q(e)}var $;e((()=>{$=t(),ne(),a(),l(),V(),x(),w(),B(),O(),M(),D(),z(),L(),C(),I(),R(),U(),_e(),ve(),G(),ae(),de(),Y(),se(),pe(),K(),fe(),me()}))();export{ye as default};