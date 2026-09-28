import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DzXf-WbH.js";import{f as n,g as r,j as i,u as a,y as o}from"./blocks-D6OgUV3F.js";import{t as s}from"./mdx-react-shim-Cv0AXtvL.js";function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Theme/Shadows`}),`
`,(0,u.jsx)(a,{children:`Shadows`}),`
`,(0,u.jsx)(r,{children:`standard shadow variables in jb design system`}),`
`,(0,u.jsx)(`br`,{}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsxs)(t.p,{children:[`All JBDesign System Component initial their needed variables themselves and you don't need any initialization to use our components. `,(0,u.jsx)(t.strong,{children:`But`}),` if you need shadow variables for your own elements you can initialize them like this:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-javascript`,children:`import {defineShadows} from 'jb-core/theme';\r
// it will define all shadow related css variables in @property and :root you can also customize them in your css\r
defineShadows();
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Components call `,(0,u.jsx)(t.code,{children:`registerDefaultVariables()`}),` when they are initialized, which runs `,(0,u.jsx)(t.code,{children:`defineShadows()`}),` beside `,(0,u.jsx)(t.code,{children:`defineSizes()`}),` and `,(0,u.jsx)(t.code,{children:`defineColors()`}),`, so shadow tokens are also available as soon as the first component of the design system is rendered on the page.`]}),`
`,(0,u.jsx)(t.h2,{id:`shadow-tokens`,children:`shadow tokens`}),`
`,(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Token`}),(0,u.jsx)(`th`,{children:`Default`}),(0,u.jsx)(`th`,{children:`Intended use`})]})}),(0,u.jsxs)(`tbody`,{children:[(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`--jb-shadow-sm`})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`none`})}),(0,u.jsx)(`td`,{children:`The base elevation shadow of the design system and the base variant that the control shadows are built from.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`--jb-control-shadow`})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`var(--jb-shadow-sm)`})}),(0,u.jsx)(`td`,{children:`Shadow of an interactive control in its normal state. Inputs, textareas and the select listbox read it as their default box shadow.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`--jb-control-shadow-focus`})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`var(--jb-shadow-sm)`})}),(0,u.jsx)(`td`,{children:`Shadow of an interactive control while it is focused. It is mostly used to draw a focus ring.`})]})]})]}),`
`,(0,u.jsxs)(t.p,{children:[`Both control tokens declare `,(0,u.jsx)(t.code,{children:`var(--jb-shadow-sm)`}),` as their value and `,(0,u.jsx)(t.code,{children:`--jb-shadow-sm`}),` itself is `,(0,u.jsx)(t.code,{children:`none`}),`, so the design system starts without any shadow and every design language can turn elevation on.`]}),`
`,(0,u.jsx)(t.h2,{id:`how-the-default-values-resolve`,children:`how the default values resolve`}),`
`,(0,u.jsxs)(t.p,{children:[`the default values are declared on the root element by `,(0,u.jsx)(t.code,{children:`defineShadows()`}),`, and a css variable reference is resolved in the scope where it is `,(0,u.jsx)(t.strong,{children:`declared`}),`, not where it is used. that means the control tokens pick up `,(0,u.jsx)(t.code,{children:`--jb-shadow-sm`}),` from the root scope, so declaring only `,(0,u.jsx)(t.code,{children:`--jb-shadow-sm`}),` inside a nested wrapper does not move the control shadows. to change them you either set the semantic tokens themselves, or set both the base token and the mapping in the same scope:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* recommended: set the semantic tokens where they should apply */\r
body {\r
  --jb-control-shadow: 0 0.25rem 0.75rem oklch(0% 0 0 / 0.12);\r
  --jb-control-shadow-focus: 0 0 0 0.1875rem oklch(60% 0.26 256 / 0.28);\r
}\r
\r
/* or drive everything from the base variant by declaring the mapping in the same scope */\r
body {\r
  --jb-shadow-sm: 0 0.25rem 0.75rem oklch(0% 0 0 / 0.12);\r
  --jb-control-shadow: var(--jb-shadow-sm);\r
  --jb-control-shadow-focus: var(--jb-shadow-sm);\r
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`because `,(0,u.jsx)(t.code,{children:`defineShadows()`}),` writes these three tokens as inline values on the `,(0,u.jsx)(t.code,{children:`html`}),` element, a plain `,(0,u.jsx)(t.code,{children:`:root`}),` declaration in your stylesheet loses against them. declare your values on `,(0,u.jsx)(t.code,{children:`body`}),` or on any wrapper element, or make the `,(0,u.jsx)(t.code,{children:`:root`}),` declaration important:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`:root {\r
  --jb-shadow-sm: 0 0.25rem 0.75rem oklch(0% 0 0 / 0.12) !important;\r
  --jb-control-shadow: var(--jb-shadow-sm) !important;\r
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`live-example`,children:`Live example`}),`
`,(0,u.jsxs)(t.p,{children:[`Shadow values are plain CSS `,(0,u.jsx)(t.code,{children:`box-shadow`}),` values, so any valid value works: `,(0,u.jsx)(t.code,{children:`none`}),`, `,(0,u.jsx)(t.code,{children:`inset`}),` shadows, a single shadow or multiple comma separated shadows. in the example below the wrapper declares the base token, the mapping and the focus token in the same scope, while the boxes only read the standard tokens.`]}),`
`,(0,u.jsx)(`style`,{children:`
.jb-shadow-demo {
  /* the base shadow, usually set once in your app or design language */
  --jb-shadow-sm: 0 1px 0.125rem oklch(0% 0 0 / 0.12), 0 0.375rem 1rem oklch(0% 0 0 / 0.08);
  /* the mapping is declared in the same scope so the base token is picked up here */
  --jb-control-shadow: var(--jb-shadow-sm);
  /* an optional override for the focus state, for example a colored focus ring */
  --jb-control-shadow-focus: 0 0 0 0.1875rem oklch(60% 0.26 256 / 0.28);
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  padding: 2rem;
  border-radius: var(--jb-radius, 1rem);
  background: var(--jb-surface-secondary, #f7f8fb);
}

.jb-shadow-demo__item {
  display: grid;
  gap: 0.375rem;
  padding: 1.25rem 1rem;
  border: 1px solid var(--jb-border-color, #d9dde7);
  border-radius: var(--jb-radius, 1rem);
  background: var(--jb-surface-primary, #ffffff);
  color: var(--jb-content-primary, #141414);
}

.jb-shadow-demo__text {
  font-size: 0.8125rem;
  color: var(--jb-content-secondary, #6b7280);
}
`}),`
`,(0,u.jsxs)(`div`,{className:`jb-shadow-demo`,children:[(0,u.jsxs)(`div`,{className:`jb-shadow-demo__item`,style:{boxShadow:`var(--jb-shadow-sm)`},children:[(0,u.jsx)(`code`,{children:`--jb-shadow-sm`}),(0,u.jsx)(`span`,{className:`jb-shadow-demo__text`,children:`base elevation`})]}),(0,u.jsxs)(`div`,{className:`jb-shadow-demo__item`,style:{boxShadow:`var(--jb-control-shadow)`},children:[(0,u.jsx)(`code`,{children:`--jb-control-shadow`}),(0,u.jsx)(`span`,{className:`jb-shadow-demo__text`,children:`control, normal state`})]}),(0,u.jsxs)(`div`,{className:`jb-shadow-demo__item`,style:{boxShadow:`var(--jb-control-shadow-focus)`},children:[(0,u.jsx)(`code`,{children:`--jb-control-shadow-focus`}),(0,u.jsx)(`span`,{className:`jb-shadow-demo__text`,children:`control, focus state`})]})]}),`
`,(0,u.jsx)(t.h2,{id:`change-the-variables`,children:`change the variables`}),`
`,(0,u.jsxs)(t.p,{children:[`you can easily change every css variable value like any other css variable see `,(0,u.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties`,rel:`nofollow`,children:`this`}),` to whatever value you want. shadow tokens inherit, so a declaration on any wrapper reaches the components inside it, even when a component renders its control inside a shadow root.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`body {\r
  /* style each state separately */\r
  --jb-control-shadow: inset 0 0 0 1px oklch(0% 0 0 / 0.06);\r
  --jb-control-shadow-focus: 0 0 0 0.1875rem oklch(60% 0.26 256 / 0.28);\r
}\r
\r
/* scope a different shadow to a part of your app */\r
.my-panel jb-input {\r
  --jb-control-shadow: none;\r
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`how-components-consume-shadow-tokens`,children:`how components consume shadow tokens`}),`
`,(0,u.jsx)(t.p,{children:`components keep their own part variable and use the standard token as its default, so you can customize either the whole app or a single part of a component:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* inside a component stylesheet, for example jb-input variables.css */\r
:host {\r
  --box-shadow: var(--jb-control-shadow);\r
  --box-shadow-focus: var(--jb-control-shadow-focus, none);\r
}
`})}),`
`,(0,u.jsx)(t.p,{children:`the control part then applies the part variable in every state:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* inside a component stylesheet, for example jb-input.css */\r
.control {\r
  box-shadow: var(--box-shadow);\r
}\r
\r
.control:focus-within {\r
  box-shadow: var(--box-shadow-focus);\r
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`--jb-control-shadow`}),` and `,(0,u.jsx)(t.code,{children:`--jb-control-shadow-focus`}),` are read by `,(0,u.jsx)(t.code,{children:`jb-input`}),`, `,(0,u.jsx)(t.code,{children:`jb-textarea`}),` and the `,(0,u.jsx)(t.code,{children:`jb-select`}),` listbox today (`,(0,u.jsx)(t.code,{children:`--jb-listbox-box-shadow`}),` and `,(0,u.jsx)(t.code,{children:`--jb-listbox-box-shadow-focus`}),` are the listbox level variables that fall back to them). the custom design languages documented in `,(0,u.jsx)(t.a,{href:`?path=/docs/theme-custom-default--docs`,children:`Theme/Custom`}),` define their elevation with the same tokens, for example the Aurora style:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`jb-input.aurora-style {\r
  --jb-control-shadow: inset 0 0 0 1px oklch(100% 0 0 / 0.04);\r
  --jb-control-shadow-focus: 0 0 0 0.1875rem oklch(83% 0.11 185 / 0.18);\r
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`notes`,children:`notes`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`shadow tokens are registered in `,(0,u.jsx)(t.code,{children:`@property`}),` with the universal `,(0,u.jsx)(t.code,{children:`*`}),` syntax because CSS has no syntax for shadow values in `,(0,u.jsx)(t.code,{children:`@property`}),` yet, therefore the browser does not validate or animate them. make sure you always provide a real `,(0,u.jsx)(t.code,{children:`box-shadow`}),` value.`]}),`
`,(0,u.jsxs)(t.li,{children:[`the base token defaults to `,(0,u.jsx)(t.code,{children:`none`}),` because the design system does not force any elevation on your app.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`--jb-shadow-sm`}),` only changes the elements that read it directly. the control tokens resolve it in the scope where they are declared, so re-declare the mapping in your scope when you want the base variant to drive them.`]}),`
`,(0,u.jsxs)(t.li,{children:[`only one elevation variant (`,(0,u.jsx)(t.code,{children:`--jb-shadow-sm`}),`) is part of the standard tokens today. components read the semantic tokens, so adding a new elevation variant later only needs a change in the semantic token mapping.`]}),`
`,(0,u.jsxs)(t.li,{children:[`the rest of the standard values are documented in `,(0,u.jsx)(t.a,{href:`?path=/docs/theme-sizes--docs`,children:`Theme/Sizes`}),`, `,(0,u.jsx)(t.a,{href:`?path=/docs/theme-colors--docs`,children:`Theme/Colors`}),` and `,(0,u.jsx)(t.a,{href:`?path=/docs/theme-other-tokens--docs`,children:`Theme/Other Tokens`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),o()}))();export{l as default};