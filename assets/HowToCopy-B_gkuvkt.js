import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B93LnMfL.js";import{A as n,_ as r,d as i,g as a,v as o}from"./blocks-BEyjGuSH.js";import{t as s}from"./mdx-react-shim-CPQw0r55.js";function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Theme/Custom/How to copy`}),`
`,(0,u.jsx)(r,{children:`How To Copy A Custom Style`}),`
`,(0,u.jsx)(a,{children:(0,u.jsx)(t.p,{children:`Copy one shared theme token file, then copy the component recipe files you need.`})}),`
`,(0,u.jsx)(t.p,{children:`Custom styles are split into two layers so you can reuse the same theme across many components.`}),`
`,(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Layer`}),(0,u.jsx)(`th`,{children:`Where to find it`}),(0,u.jsx)(`th`,{children:`What it contains`})]})}),(0,u.jsxs)(`tbody`,{children:[(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:`Shared theme tokens`}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`a`,{href:`https://github.com/javadbat/design-system/tree/main/docs/styles`,children:`docs/styles`})}),(0,u.jsxs)(`td`,{children:[`Theme-wide colors, surfaces, focus colors, and radius tokens like `,(0,u.jsx)(`code`,{children:`--jb-primary`}),`, `,(0,u.jsx)(`code`,{children:`--jb-surface`}),`, and `,(0,u.jsx)(`code`,{children:`--jb-radius`}),`.`]})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:`Component recipe`}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`a`,{href:`https://github.com/javadbat/design-system/tree/main/modules/jb-input/stories/styles`,children:`modules/[component]/stories/styles`})}),(0,u.jsxs)(`td`,{children:[`Component variable and `,(0,u.jsx)(`code`,{children:`::part()`}),` mappings that use the shared tokens.`]})]})]})]}),`
`,(0,u.jsx)(t.h2,{id:`small-example`,children:`Small Example`}),`
`,(0,u.jsx)(t.p,{children:`If you want the Material style for input, copy:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`
`,(0,u.jsx)(`a`,{href:`https://github.com/javadbat/design-system/blob/main/docs/styles/material.css`,children:`docs/styles/material.css`}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[`
`,(0,u.jsx)(`a`,{href:`https://github.com/javadbat/design-system/blob/main/modules/jb-input/stories/styles/style-material.css`,children:`modules/jb-input/stories/styles/style-material.css`}),`
`]}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`Then load them in your app CSS.`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`@import "./styles/material.css";
@import "./components/jb-input/style-material.css";

.settings-form {
  /* Scope the theme to one page, form, or demo wrapper. */
}
`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<section class="settings-form material-style">
  <jb-input class="material-input" label="Project name"></jb-input>
</section>
`})}),`
`,(0,u.jsx)(t.h2,{id:`composed-components`,children:`Composed Components`}),`
`,(0,u.jsx)(t.p,{children:`Some components reuse other components internally. Copy the child recipes too, so the full surface stays consistent.`}),`
`,(0,u.jsx)(t.p,{children:`For example, date input uses input, calendar, and popover styles:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`@import "./styles/material.css";
@import "./components/jb-input/style-material.css";
@import "./components/jb-calendar/style-material.css";
@import "./components/jb-popover/style-material.css";
@import "./components/jb-date-input/style-material.css";
`})}),`
`,(0,u.jsx)(t.h2,{id:`what-to-customize`,children:`What To Customize`}),`
`,(0,u.jsx)(t.p,{children:`Start from shared tokens when the whole theme should change:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.my-brand-theme {
  --jb-primary: #2563eb;
  --jb-primary-hover: #1d4ed8;
  --jb-surface: #ffffff;
  --jb-border-color: #dbe3ef;
  --jb-radius: 0.75rem;
}
`})}),`
`,(0,u.jsx)(t.p,{children:`Use component variables only when one component needs special treatment:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.my-brand-theme jb-input {
  --border-color: var(--jb-border-color);
  --focus-border-color: var(--jb-focus-color);
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Use `,(0,u.jsx)(`code`,{children:`::part()`}),` only for official parts exposed by that component. If a component does not expose a part, style it with variables first.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),o()}))();export{l as default};