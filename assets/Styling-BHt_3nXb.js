import{j as e,M as i,T as d}from"./index-BeKp1SPH.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import{i as l,u as o}from"./index-CbishZFR.js";import{a as s}from"./constants-Ci1PGOK2.js";import"./iframe-DwXzIX12.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-BxfZ0Gix.js";import"./jb-button-CFQA-aHA.js";import"./jb-loading-BmlEKkU_.js";import"./index-CansPAZh.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-D7ggZhY0.js";import"./index-BijJAI47.js";import"./chunk-MVUZLZE2-OakZy48_.js";function c(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/form elements/JBSelect/Styling"}),`
`,e.jsx(d,{children:"Styling"}),`
`,e.jsxs(t.p,{children:["Set CSS custom properties directly on ",e.jsx(t.code,{children:"JBSelect"})," to scope a visual treatment to one select."]}),`
`,e.jsx(t.h2,{id:"rounded-select",children:"Rounded select"}),`
`,e.jsx(l,{label:"Select option",style:{"--jb-select-margin":"0px 2px","--jb-select-rounded":"24px","--jb-select-border-color":"royalblue","--jb-select-border-color-selected":"tomato","--jb-select-bgcolor":"mintcream"},children:e.jsx(o,{optionList:s})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<JBSelect
  label="Select option"
  style={{
    '--jb-select-margin': '0px 2px',
    '--jb-select-rounded': '24px',
    '--jb-select-border-color': 'royalblue',
    '--jb-select-border-color-selected': 'tomato',
    '--jb-select-bgcolor': 'mintcream',
  }}
>
  <JBOptionList optionList={numberOptionList} />
</JBSelect>
`})}),`
`,e.jsx(t.h2,{id:"underlined-select",children:"Underlined select"}),`
`,e.jsx(l,{label:"Select option",message:"A compact, underlined treatment",style:{"--jb-select-rounded":"0px","--jb-select-border-width":"0px","--jb-select-border-bottom-width":"2px","--jb-select-border-color":"slateblue","--jb-select-border-color-focus":"rebeccapurple","--jb-select-label-color":"slateblue","--jb-select-bgcolor":"transparent","--jb-popover-bg-color":"#fff"},children:e.jsx(o,{optionList:s})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<JBSelect
  label="Select option"
  message="A compact, underlined treatment"
  style={{
    '--jb-select-rounded': '0px',
    '--jb-select-border-width': '0px',
    '--jb-select-border-bottom-width': '2px',
    '--jb-select-border-color': 'slateblue',
    '--jb-select-border-color-focus': 'rebeccapurple',
    '--jb-select-label-color': 'slateblue',
    '--jb-select-bgcolor': 'transparent',
    '--jb-popover-bg-color': '#fff'
  }}
>
  <JBOptionList optionList={numberOptionList} />
</JBSelect>
`})}),`
`,e.jsx(t.h2,{id:"high-contrast-select",children:"High-contrast select"}),`
`,e.jsx(l,{label:"Select option",placeholder:"Choose a number",style:{"--jb-select-rounded":"12px","--jb-select-border-color":"#475569","--jb-select-border-color-focus":"#38bdf8","--jb-select-bgcolor":"#0f172a","--jb-select-label-color":"#cbd5e1","--jb-select-value-color":"#f8fafc","--jb-select-placeholder-color":"#94a3b8","--jb-option-color":"#eee","--jb-option-bg-color-active":"var(--jb-secondary)","--jb-option-color-active":"#fff"},children:e.jsx(o,{optionList:s})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<JBSelect
  label="Select option"
  placeholder="Choose a number"
  style={{
    '--jb-select-rounded': '12px',
    '--jb-select-border-color': '#475569',
    '--jb-select-border-color-focus': '#38bdf8',
    '--jb-select-bgcolor': '#0f172a',
    '--jb-select-label-color': '#cbd5e1',
    '--jb-select-value-color': '#f8fafc',
    '--jb-select-placeholder-color': '#94a3b8',
    '--jb-option-color':'#eee',
  }}
>
  <JBOptionList optionList={numberOptionList} />
</JBSelect>
`})}),`
`,e.jsx(t.h2,{id:"styling-component-parts",children:"Styling component parts"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"JBSelect"})," exposes the ",e.jsx(t.code,{children:"selected-value"}),", ",e.jsx(t.code,{children:"search-input"}),", and ",e.jsx(t.code,{children:"arrow-icon"})," parts. Style them from outside the component with ",e.jsx(t.code,{children:"::part(...)"}),"."]}),`
`,e.jsx(l,{className:"part-styled-select",label:"Selected number",value:"7",children:e.jsx(o,{optionList:s})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<JBSelect
  className="part-styled-select"
  label="Selected number"
  value="7"
>
  <JBOptionList optionList={numberOptionList} />
</JBSelect>
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.part-styled-select::part(selected-value) {
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
}

.part-styled-select::part(search-input) {
  color: #1d4ed8;
  caret-color: #1d4ed8;
}

.part-styled-select::part(arrow-icon) {
  color: #1d4ed8;
}
`})}),`
`,e.jsx(t.h2,{id:"styling-component-states",children:"Styling component states"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"JBSelect"})," exposes the ",e.jsx(t.code,{children:"open"}),", ",e.jsx(t.code,{children:"disabled"}),", and ",e.jsx(t.code,{children:"invalid"})," custom states. Use ",e.jsx(t.code,{children:":state(...)"})," to change variables only while that state is active. Open the first example to see its active state; the second shows the disabled state."]}),`
`,e.jsx(l,{className:"state-styled-select",label:"Open this select",required:!0,children:e.jsx(o,{optionList:s})}),`
`,e.jsx(l,{className:"state-styled-select",label:"Disabled select",value:"7",disabled:!0,children:e.jsx(o,{optionList:s})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.state-styled-select:state(open) {
  --jb-select-border-color: #2563eb;
  --jb-select-border-color-focus: #2563eb;
  --jb-select-bgcolor: #eff6ff;
}

.state-styled-select:state(disabled) {
  --jb-select-bg-color-disabled: #f1f5f9;
  --jb-select-value-color-disabled: #64748b;
}

.state-styled-select:state(invalid) {
  --jb-select-border-color: #dc2626;
  --jb-select-message-color-error: #dc2626;
}
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"invalid"})," state becomes active when the component reports a validation error, for example after ",e.jsx(t.code,{children:"reportValidity()"}),"."]}),`
`,e.jsx(t.h2,{id:"square-select-with-mobile-overrides",children:"Square select with mobile overrides"}),`
`,e.jsx(l,{label:"Select option",style:{"--jb-select-margin":"0px 4px","--jb-select-rounded":"0px","--jb-select-border-color":"rgb(26, 23, 23)","--jb-select-border-color-selected":"rgb(30, 29, 43)","--jb-select-bgcolor-selected":"rgb(195, 57, 230)","--jb-select-bgcolor":"lightgray","--jb-select-mobile-search-input-height":"64px","--jb-select-border-bottom-width":"1px","--jb-select-mobile-item-list-border-radius":"16px"},children:e.jsx(o,{optionList:s})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<JBSelect
  label="Select option"
  style={{
    '--jb-select-margin': '0px 4px',
    '--jb-select-rounded': '0px',
    '--jb-select-border-color': 'rgb(26, 23, 23)',
    '--jb-select-border-color-selected': 'rgb(30, 29, 43)',
    '--jb-select-bgcolor-selected': 'rgb(195, 57, 230)',
    '--jb-select-bgcolor': 'lightgray',
    '--jb-select-mobile-search-input-height': '64px',
    '--jb-select-border-bottom-width': '1px',
    '--jb-select-mobile-item-list-border-radius': '16px',
  }}
>
  <JBOptionList optionList={numberOptionList} />
</JBSelect>
`})})]})}function M(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{M as default};
