import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DzXf-WbH.js";import{f as n,g as r,j as i,u as a,y as o}from"./blocks-D6OgUV3F.js";import{t as s}from"./mdx-react-shim-Cv0AXtvL.js";function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Theme/Other Tokens`}),`
`,(0,u.jsx)(a,{children:`Other Tokens`}),`
`,(0,u.jsx)(r,{children:`standard css tokens that are not part of the color, size or shadow sets`}),`
`,(0,u.jsx)(`br`,{}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsxs)(t.p,{children:[`All JBDesign System Component initial their needed variables themselves and you don't need any initialization to use our components. `,(0,u.jsx)(t.strong,{children:`But`}),` if you need these variables for your own elements you can initialize them like this:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-javascript`,children:`import {defineSizes} from 'jb-core/theme';\r
// it will define all size, radius and corner shape css variables in @property and :root you can also customize them in your css\r
defineSizes();
`})}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`--jb-corner-shape`}),` is registered by `,(0,u.jsx)(t.code,{children:`defineSizes()`}),` and components register it too when they call `,(0,u.jsx)(t.code,{children:`registerDefaultVariables()`}),`.`]}),`
`,(0,u.jsx)(t.h2,{id:`corner-shape`,children:`corner shape`}),`
`,(0,u.jsxs)(t.p,{children:[`jb design system by default has Modern and Round corners. the radius of these corners is set by the radius tokens documented in `,(0,u.jsx)(t.a,{href:`?path=/docs/theme-sizes--docs`,children:`Theme/Sizes`}),` and the `,(0,u.jsx)(t.strong,{children:`shape`}),` of the corner inside that radius is set by the standard `,(0,u.jsx)(t.code,{children:`--jb-corner-shape`}),` token, which mirrors the `,(0,u.jsx)(t.code,{children:`corner-shape`}),` css property.`]}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`corner-shape`}),` only changes the corner area that is cut by `,(0,u.jsx)(t.code,{children:`border-radius`}),`, so it has no visual effect on a corner with a radius of `,(0,u.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,u.jsx)(t.h3,{id:`token`,children:`token`}),`
`,(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Token`}),(0,u.jsx)(`th`,{children:`Default`}),(0,u.jsx)(`th`,{children:`Intended use`})]})}),(0,u.jsx)(`tbody`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`--jb-corner-shape`})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`round`})}),(0,u.jsxs)(`td`,{children:[`The shape of all four corners of components and elements that support corner shaping. Components read it with a `,(0,u.jsx)(`code`,{children:`round`}),` fallback so unsupported browsers keep the rounded corner of `,(0,u.jsx)(`code`,{children:`border-radius`}),`.`]})]})})]}),`
`,(0,u.jsx)(t.h3,{id:`corner-shape-values`,children:`corner shape values`}),`
`,(0,u.jsxs)(t.p,{children:[`the value of the token is a single `,(0,u.jsx)(t.code,{children:`<corner-shape-value>`}),` that applies to all four corners:`]}),`
`,(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Value`}),(0,u.jsx)(`th`,{children:`Shape`}),(0,u.jsx)(`th`,{children:`Description`})]})}),(0,u.jsxs)(`tbody`,{children:[(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`round`})}),(0,u.jsx)(`td`,{children:`default`}),(0,u.jsxs)(`td`,{children:[`the regular rounded corner that you already know from `,(0,u.jsx)(`code`,{children:`border-radius`}),`.`]})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`square`})}),(0,u.jsx)(`td`,{children:`right angle`}),(0,u.jsx)(`td`,{children:`keeps the corner perfectly right-angled even when a radius is applied.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`squircle`})}),(0,u.jsx)(`td`,{children:`square + circle`}),(0,u.jsx)(`td`,{children:`a shape between a square and a rounded corner, the so-called superellipse of a squircle.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`bevel`})}),(0,u.jsx)(`td`,{children:`flat cut`}),(0,u.jsx)(`td`,{children:`cuts the corner diagonally and produces a flat edge.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`scoop`})}),(0,u.jsx)(`td`,{children:`concave`}),(0,u.jsx)(`td`,{children:`creates an inward (concave) quarter ellipse.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`notch`})}),(0,u.jsx)(`td`,{children:`sharp inward`}),(0,u.jsx)(`td`,{children:`produces a sharp inward corner.`})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:`superellipse(k)`})}),(0,u.jsx)(`td`,{children:`custom curve`}),(0,u.jsxs)(`td`,{children:[`lets you pick your own curve with a numeric value. positive values round the corner outward and negative values scoop it inward, for example `,(0,u.jsx)(`code`,{children:`superellipse(0.6)`}),`.`]})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`live-example`,children:`Live example`}),`
`,(0,u.jsxs)(t.p,{children:[`all boxes below use the same `,(0,u.jsx)(t.code,{children:`border-radius`}),`, only their corner shape is different:`]}),`
`,(0,u.jsx)(`style`,{children:`
.jb-corner-shape-demo {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  padding: 2rem;
  border-radius: var(--jb-radius, 1rem);
  background: var(--jb-surface-secondary, #f7f8fb);
}

.jb-corner-shape-demo__box {
  display: grid;
  gap: 0.25rem;
  place-items: center;
  height: 6rem;
  border: 1px solid var(--jb-border-color, #d9dde7);
  border-radius: var(--jb-radius-xl, 1.5rem);
  background: var(--jb-surface-primary, #ffffff);
  color: var(--jb-content-primary, #141414);
}

.jb-corner-shape-demo__box code {
  font-size: 0.75rem;
  color: var(--jb-content-secondary, #6b7280);
}

.jb-corner-shape-demo__box[data-shape="round"] { corner-shape: round; }
.jb-corner-shape-demo__box[data-shape="square"] { corner-shape: square; }
.jb-corner-shape-demo__box[data-shape="squircle"] { corner-shape: squircle; }
.jb-corner-shape-demo__box[data-shape="bevel"] { corner-shape: bevel; }
.jb-corner-shape-demo__box[data-shape="scoop"] { corner-shape: scoop; }
.jb-corner-shape-demo__box[data-shape="notch"] { corner-shape: notch; }

/* this is how a component reads the standard token, with a round fallback */
.jb-corner-shape-demo__token-box {
  corner-shape: var(--jb-corner-shape, round);
}
`}),`
`,(0,u.jsx)(`div`,{className:`jb-corner-shape-demo`,children:[`round`,`square`,`squircle`,`bevel`,`scoop`,`notch`].map(e=>(0,u.jsxs)(`div`,{className:`jb-corner-shape-demo__box`,"data-shape":e,children:[(0,u.jsx)(`strong`,{children:e}),(0,u.jsxs)(`code`,{children:[`corner-shape: `,e]})]},e))}),`
`,(0,u.jsx)(t.h3,{id:`set-the-token`,children:`set the token`}),`
`,(0,u.jsx)(t.p,{children:`the shared token is the recommended place to declare one corner shape for the whole app:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`:root {\r
  --jb-corner-shape: scoop;\r
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`there is no default value written on the `,(0,u.jsx)(t.code,{children:`html`}),` element for this token (its `,(0,u.jsx)(t.code,{children:`round`}),` default comes from the `,(0,u.jsx)(t.code,{children:`@property`}),` initial value), so a `,(0,u.jsx)(t.code,{children:`:root`}),` declaration takes effect normally.`]}),`
`,(0,u.jsx)(t.p,{children:`you can also scope it to a part of your app, the same way as every other inherited css variable:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.my-panel {\r
  --jb-corner-shape: bevel;\r
}
`})}),`
`,(0,u.jsx)(`div`,{style:{"--jb-corner-shape":`scoop`,display:`grid`,gap:`1rem`,padding:`2rem`,borderRadius:`var(--jb-radius, 1rem)`,background:`var(--jb-surface-secondary, #f7f8fb)`},children:(0,u.jsxs)(`div`,{className:`jb-corner-shape-demo__box jb-corner-shape-demo__token-box`,children:[(0,u.jsx)(`strong`,{children:`scoop`}),(0,u.jsx)(`code`,{children:`corner-shape: var(--jb-corner-shape, round)`})]})}),`
`,(0,u.jsx)(t.h3,{id:`corner-shape-in-components`,children:`corner shape in components`}),`
`,(0,u.jsxs)(t.p,{children:[`components that support corner shaping expose their own part variable and use the standard token (or the component family token) as its default, exactly like the color and shadow variables. `,(0,u.jsx)(t.code,{children:`jb-color-input`}),` is the component that supports it today:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* inside a component stylesheet, for example jb-color-input variables.css */\r
:host {\r
  --color-corner-shape: var(--jb-color-input-corner-shape, var(--jb-input-corner-shape, round));\r
}
`})}),`
`,(0,u.jsx)(t.p,{children:`so you can set the standard token for the whole app, or map it to the component level variables to keep component specific corner shapes:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`:root {\r
  --jb-corner-shape: squircle;\r
  /* let the color input follow the shared corner shape */\r
  --jb-color-input-corner-shape: var(--jb-corner-shape);\r
}\r
\r
/* or only change one component */\r
jb-color-input {\r
  --jb-color-input-corner-shape: notch;\r
}
`})}),`
`,(0,u.jsx)(t.h3,{id:`browser-support`,children:`browser support`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`corner-shape`}),` is an experimental property and is not part of the browsers Baseline yet. Chromium based browsers support it since version 139 (August 2025) while Firefox and Safari do not support it yet.`]}),`
`,(0,u.jsx)(t.p,{children:`because of that:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`browsers without support ignore the `,(0,u.jsx)(t.code,{children:`corner-shape`}),` declaration and keep the regular rounded corner that `,(0,u.jsx)(t.code,{children:`border-radius`}),` produces, so it is a safe progressive enhancement.`]}),`
`,(0,u.jsxs)(t.li,{children:[`always read the token with a fallback (`,(0,u.jsx)(t.code,{children:`corner-shape: var(--jb-corner-shape, round)`}),`) so the declaration stays valid on every browser. in browsers that do not know the `,(0,u.jsx)(t.code,{children:`<corner-shape-value>`}),` syntax the `,(0,u.jsx)(t.code,{children:`@property`}),` registration of the token is skipped, so the fallback is what keeps the default shape.`]}),`
`,(0,u.jsxs)(t.li,{children:[`the token is a single value for all four corners. if you need a different shape per corner, set the `,(0,u.jsx)(t.code,{children:`corner-shape`}),` property directly with up to four values, ordered clockwise from the top-left corner, for example `,(0,u.jsx)(t.code,{children:`corner-shape: scoop round bevel notch;`}),`.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`related-tokens`,children:`related tokens`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.a,{href:`?path=/docs/theme-colors--docs`,children:`Theme/Colors`}),` for the color and semantic color tokens.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.a,{href:`?path=/docs/theme-sizes--docs`,children:`Theme/Sizes`}),` for radius, control height, breakpoint and viewport tokens.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.a,{href:`?path=/docs/theme-shadows--docs`,children:`Theme/Shadows`}),` for the elevation and control shadow tokens.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),o()}))();export{l as default};