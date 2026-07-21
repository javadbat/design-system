import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DyWnM0Wh.js";import{A as n,_ as r,d as i,f as a,m as o,v as s}from"./blocks-C21yMPAO.js";import{t as c}from"./mdx-react-shim-r49eUm_3.js";import{a as l,c as u,d,h as ee,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./Styles.stories-FiR2zc5k.js";import{C as te,S as ne,_ as re,a as ie,b as ae,c as oe,d as se,f as ce,g as le,h as ue,i as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F}from"./terminal-BGToMpAA.js";var I,L=e((()=>{I=`jb-modal.ant-design-style {
  --jb-modal-bg-color: var(--jb-surface);
  --jb-modal-back-bg-color: rgb(0 0 0 / 0.45);
  --jb-modal-border-radius: 0.5rem;
  --jb-modal-z-index: 1000;
  color: var(--jb-text-primary);
}

jb-modal.ant-design-style::part(background) {
  backdrop-filter: none;
}

jb-modal.ant-design-style::part(content-box) {
  box-shadow: 0 0.375rem 1rem rgb(0 0 0 / 0.14);
}

jb-modal.ant-design-style:state(open)::part(content-box) {
  animation: ant-modal-in 180ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes ant-modal-in {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
}
`})),R,z=e((()=>{R=`jb-modal.aurora-style {
  --jb-modal-bg-color: #111827;
  --jb-modal-back-bg-color: rgb(15 23 42 / 0.68);
  --jb-modal-border-radius: 1rem;
  --jb-modal-z-index: 1000;
  color: #eff6ff;
}

jb-modal.aurora-style::part(background) {
  backdrop-filter: blur(1rem) saturate(1.25);
}

jb-modal.aurora-style::part(content-box) {
  border: 1px solid rgb(125 211 252 / 0.28);
  box-shadow: 0 1.25rem 2.75rem rgb(0 0 0 / 0.32), 0 0 2rem rgb(79 70 229 / 0.12);
}

jb-modal.aurora-style jb-button.aurora-style[color="light"] {
  --jb-button-color: var(--jb-text-secondary);
  --jb-button-color-hover: var(--jb-text-primary);
  --jb-button-color-pressed: var(--jb-focus-color);
  --jb-button-bg-color-text-hover: rgb(125 228 211 / 0.12);
  --jb-button-bg-color-text-pressed: rgb(125 228 211 / 0.2);
}

jb-modal.aurora-style:state(open)::part(content-box) {
  animation: aurora-modal-in 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes aurora-modal-in {
  from {
    opacity: 0;
    transform: translateY(1rem) scale(0.98);
  }
}
`})),B,V=e((()=>{B=`jb-modal.bootstrap-style {
  --jb-modal-bg-color: var(--jb-surface);
  --jb-modal-back-bg-color: rgb(33 37 41 / 0.55);
  --jb-modal-border-radius: 0.5rem;
  --jb-modal-z-index: 1055;
  color: var(--jb-text-primary);
}

jb-modal.bootstrap-style::part(background) {
  backdrop-filter: blur(0.125rem);
}

jb-modal.bootstrap-style::part(content-box) {
  border: 1px solid rgb(0 0 0 / 0.18);
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 0.15);
}

jb-modal.bootstrap-style:state(open)::part(content-box) {
  animation: bootstrap-modal-in 180ms ease-out;
}

@keyframes bootstrap-modal-in {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
}
`})),H,U=e((()=>{H=`jb-modal.candy-style {
  --jb-modal-bg-color: #fff7ed;
  --jb-modal-back-bg-color: rgb(244 114 182 / 0.28);
  --jb-modal-border-radius: 1.25rem;
  --jb-modal-z-index: 1000;
  color: #831843;
}

jb-modal.candy-style::part(background) {
  backdrop-filter: blur(0.875rem);
}

jb-modal.candy-style::part(content-box) {
  border: 1px solid #f9a8d4;
  box-shadow: 0 1rem 2.25rem rgb(244 114 182 / 0.22);
}

jb-modal.candy-style:state(open)::part(content-box) {
  animation: candy-modal-in 240ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes candy-modal-in {
  from {
    opacity: 0;
    transform: translateY(1rem) scale(0.94);
  }
}
`})),W,de=e((()=>{W=`jb-modal.carbon-style {
  --jb-modal-bg-color: var(--jb-surface);
  --jb-modal-back-bg-color: rgb(22 22 22 / 0.72);
  --jb-modal-border-radius: 0;
  --jb-modal-z-index: 1000;
  color: var(--jb-text-primary);
}

jb-modal.carbon-style::part(content-box) {
  border: 1px solid var(--jb-border-color);
  box-shadow: 0 0.75rem 1.5rem rgb(0 0 0 / 0.36);
}

jb-modal.carbon-style jb-button[color="light"] {
  --jb-button-color: var(--jb-text-primary);
  --jb-button-color-hover: var(--jb-text-contrast);
  --jb-button-color-pressed: var(--jb-text-contrast);
  --jb-button-border-color: var(--jb-border-color);
  --jb-button-bg-color-hover: var(--jb-surface-hover);
  --jb-button-bg-color-pressed: var(--jb-border-color);
}

jb-modal.carbon-style jb-button[color="secondary"] {
  --jb-button-secondary: var(--jb-text-primary);
}

jb-modal.carbon-style:state(open)::part(content-box) {
  animation: carbon-modal-in 180ms ease-out;
}

@keyframes carbon-modal-in {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
}
`})),G,fe=e((()=>{G=`jb-modal.cupertino-style {
  --jb-modal-bg-color: rgb(255 255 255 / 0.94);
  --jb-modal-back-bg-color: rgb(28 28 30 / 0.36);
  --jb-modal-border-radius: 1rem;
  --jb-modal-z-index: 1000;
  color: #1c1c1e;
}

jb-modal.cupertino-style::part(background) {
  backdrop-filter: blur(1.25rem);
}

jb-modal.cupertino-style::part(content-box) {
  border: 1px solid rgb(60 60 67 / 0.14);
  box-shadow: 0 1.5rem 3rem rgb(0 0 0 / 0.18);
}

jb-modal.cupertino-style:state(open)::part(content-box) {
  animation: cupertino-modal-in 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes cupertino-modal-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
}
`})),K,pe=e((()=>{K=`jb-modal.fluent-style {
  --jb-modal-bg-color: var(--jb-text-contrast);
  --jb-modal-back-bg-color: rgb(32 31 30 / 0.44);
  --jb-modal-border-radius: 0.25rem;
  --jb-modal-z-index: 1000;
  color: var(--jb-text-secondary);
}

jb-modal.fluent-style::part(background) {
  backdrop-filter: blur(0.25rem);
}

jb-modal.fluent-style::part(content-box) {
  border: 1px solid var(--jb-surface-hover);
  box-shadow: 0 0.75rem 1.5rem rgb(0 0 0 / 0.18);
}

jb-modal.fluent-style:state(open)::part(content-box) {
  animation: fluent-modal-in 180ms cubic-bezier(0.1, 0.9, 0.2, 1);
}

@keyframes fluent-modal-in {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}
`})),q,me=e((()=>{q=`jb-modal.forest-style {
  --jb-modal-bg-color: #173725;
  --jb-modal-back-bg-color: rgb(20 83 45 / 0.5);
  --jb-modal-border-radius: 1rem;
  --jb-modal-z-index: 1000;
  color: #f1f5df;
}

jb-modal.forest-style::part(background) {
  backdrop-filter: blur(0.875rem);
}

jb-modal.forest-style::part(content-box) {
  border: 1px solid rgb(246 211 101 / 0.34);
  box-shadow: 0 1.25rem 2.5rem rgb(20 83 45 / 0.32);
}

jb-modal.forest-style:state(open)::part(content-box) {
  animation: forest-modal-in 220ms ease-out;
}

@keyframes forest-modal-in {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
}
`})),J,he=e((()=>{J=`jb-modal.material-style {
  --jb-modal-bg-color: var(--jb-surface);
  --jb-modal-back-bg-color: rgb(31 31 31 / 0.42);
  --jb-modal-border-radius: var(--jb-radius-xl);
  --jb-modal-z-index: 1000;
  color: var(--jb-text-primary);
}

jb-modal.material-style::part(background) {
  backdrop-filter: none;
}

jb-modal.material-style::part(content-box) {
  border: 1px solid var(--jb-outline-variant);
  box-shadow: var(--jb-elevation-3);
}

jb-modal.material-style:state(open)::part(content-box) {
  animation: material-modal-in 220ms cubic-bezier(0.2, 0, 0, 1);
}

@keyframes material-modal-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
}
`})),Y,ge=e((()=>{Y=`jb-modal.porcelain-style {
  --jb-modal-bg-color: var(--jb-surface);
  --jb-modal-back-bg-color: rgb(47 128 237 / 0.16);
  --jb-modal-border-radius: 0.875rem;
  --jb-modal-z-index: 1000;
  color: #12304f;
}

jb-modal.porcelain-style::part(background) {
  backdrop-filter: blur(0.875rem);
}

jb-modal.porcelain-style::part(content-box) {
  border: 1px solid #d6e4f0;
  box-shadow: 0 1.25rem 2.5rem rgb(47 128 237 / 0.16);
}

jb-modal.porcelain-style:state(open)::part(content-box) {
  animation: porcelain-modal-in 200ms ease-out;
}

@keyframes porcelain-modal-in {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
}
`})),X,_e=e((()=>{X=`jb-modal.sunset-style {
  --jb-modal-bg-color: #963f5a;
  --jb-modal-back-bg-color: rgb(127 29 29 / 0.42);
  --jb-modal-border-radius: 1.125rem;
  --jb-modal-z-index: 1000;
  color: #fff7ed;
}

jb-modal.sunset-style::part(background) {
  backdrop-filter: blur(0.875rem);
}

jb-modal.sunset-style::part(content-box) {
  border: 1px solid rgb(255 209 102 / 0.34);
  box-shadow: 0 1.25rem 2.5rem rgb(127 29 29 / 0.28);
}

jb-modal.sunset-style:state(open)::part(content-box) {
  animation: sunset-modal-in 220ms ease-out;
}

@keyframes sunset-modal-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
}
`})),Z,ve=e((()=>{Z=`jb-modal.terminal-style {
  --jb-modal-bg-color: #020617;
  --jb-modal-back-bg-color: rgb(2 6 23 / 0.74);
  --jb-modal-border-radius: 0;
  --jb-modal-z-index: 1000;
  color: #bbf7d0;
  font-family: Consolas, "Courier New", monospace;
}

jb-modal.terminal-style::part(background) {
  backdrop-filter: none;
}

jb-modal.terminal-style::part(content-box) {
  border: 1px solid #22c55e;
  box-shadow: 0 0 0 1px #22c55e, 0 1rem 2rem rgb(0 0 0 / 0.4);
}

jb-modal.terminal-style:state(open)::part(content-box) {
  animation: terminal-modal-in 120ms steps(2, end);
}

@keyframes terminal-modal-in {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}
`}));function Q(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(i,{title:`Components/JBModal/Styling`}),`
`,(0,$.jsx)(r,{children:`Styling`}),`
`,(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.code,{children:`JBModal`}),` styling is split between host variables, official shadow parts, slotted content, and the `,(0,$.jsx)(t.code,{children:`open`}),` custom state. Use variables for the core shell first, then use parts for backdrop, content box, and animation.`]}),`
`,(0,$.jsx)(t.h2,{id:`live-gallery`,children:`Live Gallery`}),`
`,(0,$.jsx)(o,{of:p}),`
`,(0,$.jsx)(a,{of:p}),`
`,(0,$.jsx)(t.h2,{id:`common-design-tokens`,children:`Common Design Tokens`}),`
`,(0,$.jsx)(t.p,{children:`Use the core theme docs as the source of truth for shared design-system variables:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` explains the general color palette variables, default colors, customization approaches, and color generation helpers.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` explains shared size and radius variables.`]}),`
`,(0,$.jsxs)(t.li,{children:[(0,$.jsx)(t.a,{href:`https://javadbat.github.io/design-system/?path=/docs/theme-custom-material--docs`,rel:`nofollow`,children:`Theme Custom Galleries`}),` gathers the shared custom style recipes across components.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Modal recipes should use those common tokens where possible, then map them into `,(0,$.jsx)(t.code,{children:`--jb-modal-*`}),` variables and official parts where the modal needs component-specific values.`]}),`
`,(0,$.jsx)(t.h2,{id:`styling-model`,children:`Styling Model`}),`
`,(0,$.jsx)(t.p,{children:`Use four layers when styling modal examples:`}),`
`,(0,$.jsxs)(t.ul,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Common design tokens are documented in `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Reusable example theme packs live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and can be shared across components.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Component recipe files live in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-modal/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-modal/stories/styles`})}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Public component variables use `,(0,$.jsx)(t.code,{children:`--jb-modal-*`}),` on `,(0,$.jsx)(t.code,{children:`jb-modal`}),`; official parts use `,(0,$.jsx)(t.code,{children:`::part(component-wrapper)`}),`, `,(0,$.jsx)(t.code,{children:`::part(background)`}),`, and `,(0,$.jsx)(t.code,{children:`::part(content-box)`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Trigger and action buttons reuse the existing `,(0,$.jsx)(t.a,{href:`../../jb-button/stories/Styling.mdx`,children:`JBButton Styling`}),` recipe classes instead of redefining button variables in modal CSS.`]}),`
`]}),`
`,(0,$.jsxs)(t.p,{children:[`Each example uses one shared example theme pack from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` and one modal-specific recipe from `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-modal/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`modules/jb-modal/stories/styles`})}),`. The gallery uses `,(0,$.jsx)(t.code,{children:`style-preview.css`}),` only to render fixed modals as local previews inside the documentation grid.`]}),`
`,(0,$.jsx)(t.h2,{id:`recommended-customization-path`,children:`Recommended Customization Path`}),`
`,(0,$.jsxs)(t.ol,{children:[`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`--jb-modal-*`}),` variables first for backdrop color, content background, content radius, and modal stack level.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`::part(background)`}),` for backdrop blur, opacity, and entrance motion.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.code,{children:`::part(content-box)`}),` for border, shadow, content-box sizing, and entrance motion.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use the `,(0,$.jsx)(t.code,{children:`open`}),` custom state for motion selectors such as `,(0,$.jsx)(t.code,{children:`jb-modal:state(open)::part(content-box)`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Style header, content, and footer by styling the slotted elements passed to `,(0,$.jsx)(t.code,{children:`slot="header"`}),`, `,(0,$.jsx)(t.code,{children:`slot="content"`}),`, and `,(0,$.jsx)(t.code,{children:`slot="footer"`}),`. See `,(0,$.jsx)(t.a,{href:`./slot-demo.mdx`,children:`Slot Demo`}),`.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use `,(0,$.jsx)(t.a,{href:`./animation.mdx`,children:`Animation`}),` for deeper enter and close animation patterns.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Reuse `,(0,$.jsx)(t.a,{href:`../../jb-button/stories/Styling.mdx`,children:`JBButton Styling`}),` classes for modal trigger, cancel, and submit buttons.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Use common theme variables from `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` when the style should align with the design system.`]}),`
`,(0,$.jsxs)(t.li,{children:[`Put reusable theme-pack values in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),` only when they should be shared by multiple component demos.`]}),`
`,(0,$.jsx)(t.li,{children:`Add a new modal variable or official part only when a needed internal surface cannot be customized with current public variables or official parts.`}),`
`]}),`
`,(0,$.jsx)(t.h2,{id:`parts-and-states`,children:`Parts And States`}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Part`}),(0,$.jsx)(`th`,{children:`Element`}),(0,$.jsx)(`th`,{children:`Notes`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`component-wrapper`})}),(0,$.jsx)(`td`,{children:`Fullscreen modal wrapper.`}),(0,$.jsx)(`td`,{children:`Use carefully for advanced layout, preview rendering, or whole-modal effects.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`background`})}),(0,$.jsx)(`td`,{children:`Backdrop element.`}),(0,$.jsx)(`td`,{children:`Use for backdrop color, blur, opacity, and backdrop animation.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`content-box`})}),(0,$.jsx)(`td`,{children:`Modal content box.`}),(0,$.jsx)(`td`,{children:`Use for border, shadow, content box sizing, and content-box animation.`})]})]})]}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Custom State`}),(0,$.jsx)(`th`,{children:`Meaning`}),(0,$.jsx)(`th`,{children:`Example Selector`})]})}),(0,$.jsx)(`tbody`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`open`})}),(0,$.jsx)(`td`,{children:`Applied while the modal is open.`}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`jb-modal:state(open)::part(content-box)`})})]})})]}),`
`,(0,$.jsx)(t.h2,{id:`css-variables`,children:`CSS Variables`}),`
`,(0,$.jsxs)(t.p,{children:[`These variables belong to `,(0,$.jsx)(t.code,{children:`JBModal`}),`.`]}),`
`,(0,$.jsxs)(`table`,{children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`Variable`}),(0,$.jsx)(`th`,{children:`Category`}),(0,$.jsx)(`th`,{children:`Description`})]})}),(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-modal-border-radius`})}),(0,$.jsx)(`td`,{children:`Size`}),(0,$.jsx)(`td`,{children:`Modal content box border radius.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-modal-bg-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Modal content box background color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-modal-back-bg-color`})}),(0,$.jsx)(`td`,{children:`Theme/Color`}),(0,$.jsx)(`td`,{children:`Modal backdrop background color.`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{children:`--jb-modal-z-index`})}),(0,$.jsx)(`td`,{children:`Other`}),(0,$.jsx)(`td`,{children:`Modal wrapper z-index.`})]})]})]}),`
`,(0,$.jsx)(t.h2,{id:`starter-recipe`,children:`Starter Recipe`}),`
`,(0,$.jsx)(t.p,{children:`Use this minimal recipe when a product only needs brand alignment and simple motion.`}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`jb-modal.brand-modal {
  --jb-modal-bg-color: #ffffff;
  --jb-modal-back-bg-color: rgb(15 23 42 / 0.48);
  --jb-modal-border-radius: 1rem;
  --jb-modal-z-index: 1000;
}

jb-modal.brand-modal::part(background) {
  backdrop-filter: blur(0.5rem);
}

jb-modal.brand-modal::part(content-box) {
  border: 1px solid #dbeafe;
  box-shadow: 0 1.25rem 2.5rem rgb(15 23 42 / 0.16);
}

jb-modal.brand-modal:state(open)::part(content-box) {
  animation: brand-modal-in 180ms ease-out;
}

@keyframes brand-modal-in {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
}
`})}),`
`,(0,$.jsx)(t.h2,{id:`style-recipes`,children:`Style Recipes`}),`
`,(0,$.jsx)(t.h3,{id:`carbon`,children:`Carbon`}),`
`,(0,$.jsx)(o,{of:l}),`
`,(0,$.jsx)(a,{of:l}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:ue,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:W,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`aurora`,children:`Aurora`}),`
`,(0,$.jsx)(o,{of:h}),`
`,(0,$.jsx)(a,{of:h}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-1`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:P,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-1`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:R,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`forest`,children:`Forest`}),`
`,(0,$.jsx)(o,{of:u}),`
`,(0,$.jsx)(a,{of:u}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-2`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:C,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-2`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:q,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`sunset`,children:`Sunset`}),`
`,(0,$.jsx)(o,{of:_}),`
`,(0,$.jsx)(a,{of:_}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-3`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:S,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-3`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:X,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`porcelain`,children:`Porcelain`}),`
`,(0,$.jsx)(o,{of:d}),`
`,(0,$.jsx)(a,{of:d}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-4`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:E,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-4`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:Y,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`candy`,children:`Candy`}),`
`,(0,$.jsx)(o,{of:f}),`
`,(0,$.jsx)(a,{of:f}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-5`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:re,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-5`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:H,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`terminal`,children:`Terminal`}),`
`,(0,$.jsx)(o,{of:m}),`
`,(0,$.jsx)(a,{of:m}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-6`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:T,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-6`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:Z,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`material`,children:`Material`}),`
`,(0,$.jsx)(o,{of:x}),`
`,(0,$.jsx)(a,{of:x}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-7`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:oe,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-7`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:J,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`fluent`,children:`Fluent`}),`
`,(0,$.jsx)(o,{of:y}),`
`,(0,$.jsx)(a,{of:y}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-8`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:se,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-8`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:K,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`bootstrap`,children:`Bootstrap`}),`
`,(0,$.jsx)(o,{of:v}),`
`,(0,$.jsx)(a,{of:v}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-9`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:F,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-9`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:B,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`cupertino`,children:`Cupertino`}),`
`,(0,$.jsx)(o,{of:g}),`
`,(0,$.jsx)(a,{of:g}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-10`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:D,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-10`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:G,language:`css`}),`
`,(0,$.jsx)(t.h3,{id:`ant-design`,children:`Ant Design`}),`
`,(0,$.jsx)(o,{of:b}),`
`,(0,$.jsx)(a,{of:b}),`
`,(0,$.jsx)(t.h4,{id:`shared-tokens-11`,children:`Shared Tokens`}),`
`,(0,$.jsx)(a,{code:te,language:`css`}),`
`,(0,$.jsx)(t.h4,{id:`modal-css-11`,children:`Modal CSS`}),`
`,(0,$.jsx)(a,{code:I,language:`css`}),`
`,(0,$.jsx)(t.h2,{id:`theme-file-pattern`,children:`Theme File Pattern`}),`
`,(0,$.jsxs)(t.p,{children:[`Use `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/colors.mdx`,children:`Theme Colors`}),` and `,(0,$.jsx)(t.a,{href:`../../jb-core/theme/stories/sizes.mdx`,children:`Theme Sizes`}),` as the common design-token guides. Theme-pack files should keep reusable demo variables in `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`docs/styles`})}),`, then each component should keep its own style CSS in its story `,(0,$.jsx)(t.a,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-modal/stories/styles`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`styles`})}),` folder.`]}),`
`,(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:`language-css`,children:`/* https://github.com/javadbat/design-system/blob/main/docs/styles/carbon.css */
.theme-name-style {
  /* shared design-system variables */
}

/* https://github.com/javadbat/design-system/blob/main/modules/jb-modal/stories/styles/style-carbon.css */
jb-modal.theme-name-modal {
  /* modal host variables */
}

jb-modal.theme-name-modal::part(background) {
  /* backdrop treatment */
}

jb-modal.theme-name-modal::part(content-box) {
  /* modal surface treatment */
}

jb-modal.theme-name-modal:state(open)::part(content-box) {
  /* open-state motion */
}

jb-button.theme-name-button {
  /* imported from the JBButton recipe, not duplicated here */
}
`})}),`
`,(0,$.jsxs)(t.p,{children:[`This keeps common theme tokens reusable while making the `,(0,$.jsx)(t.code,{children:`JBModal`}),` styling API visible in one page.`]})]})}function ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Q,{...e})}):Q(e)}var $;e((()=>{$=t(),c(),s(),ee(),N(),ne(),ae(),M(),le(),w(),ce(),j(),k(),ie(),O(),A(),L(),z(),V(),U(),de(),fe(),pe(),me(),he(),ge(),_e(),ve()}))();export{ye as default};