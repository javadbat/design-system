import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CqEp92lC.js";import{_ as n,d as r,g as i,k as a}from"./blocks-CdBQtKfb.js";import{t as o}from"./mdx-react-shim-BIfJK2kC.js";import{a as s,n as c,t as l}from"./react-jgIGaaU_.js";import{i as u,n as d}from"./constants-7kQhF6ve.js";var f=e((()=>{}));function p(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{title:`Components/form elements/JBSelect/Styling`}),`
`,(0,h.jsx)(i,{children:`Styling`}),`
`,(0,h.jsxs)(t.p,{children:[`Set CSS custom properties directly on `,(0,h.jsx)(t.code,{children:`JBSelect`}),` to scope a visual treatment to one select.`]}),`
`,(0,h.jsx)(t.h2,{id:`rounded-select`,children:`Rounded select`}),`
`,(0,h.jsx)(c,{label:`Select option`,style:{"--jb-select-margin":`0px 2px`,"--jb-select-rounded":`24px`,"--jb-select-border-color":`royalblue`,"--jb-select-border-color-selected":`tomato`,"--jb-select-bgcolor":`mintcream`},children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<JBSelect
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
`,(0,h.jsx)(t.h2,{id:`underlined-select`,children:`Underlined select`}),`
`,(0,h.jsx)(c,{label:`Select option`,message:`A compact, underlined treatment`,style:{"--jb-select-rounded":`0px`,"--jb-select-border-width":`0px`,"--jb-select-border-bottom-width":`2px`,"--jb-select-border-color":`slateblue`,"--jb-select-border-color-focus":`rebeccapurple`,"--jb-select-label-color":`slateblue`,"--jb-select-bgcolor":`transparent`,"--jb-popover-bg-color":`#fff`},children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<JBSelect
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
`,(0,h.jsx)(t.h2,{id:`high-contrast-select`,children:`High-contrast select`}),`
`,(0,h.jsx)(c,{label:`Select option`,placeholder:`Choose a number`,style:{"--jb-select-rounded":`12px`,"--jb-select-border-color":`#475569`,"--jb-select-border-color-focus":`#38bdf8`,"--jb-select-bgcolor":`#0f172a`,"--jb-select-label-color":`#cbd5e1`,"--jb-select-value-color":`#f8fafc`,"--jb-select-placeholder-color":`#94a3b8`,"--jb-option-color":`#eee`,"--jb-option-bg-color-active":`var(--jb-secondary)`,"--jb-option-color-active":`#fff`},children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<JBSelect
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
`,(0,h.jsx)(t.h2,{id:`styling-component-parts`,children:`Styling component parts`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`JBSelect`}),` exposes the `,(0,h.jsx)(t.code,{children:`selected-value`}),`, `,(0,h.jsx)(t.code,{children:`search-input`}),`, and `,(0,h.jsx)(t.code,{children:`arrow-icon`}),` parts. Style them from outside the component with `,(0,h.jsx)(t.code,{children:`::part(...)`}),`.`]}),`
`,(0,h.jsx)(c,{className:`part-styled-select`,label:`Selected number`,value:`7`,children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<JBSelect
  className="part-styled-select"
  label="Selected number"
  value="7"
>
  <JBOptionList optionList={numberOptionList} />
</JBSelect>
`})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`.part-styled-select::part(selected-value) {
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
`,(0,h.jsx)(t.h2,{id:`styling-component-states`,children:`Styling component states`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`JBSelect`}),` exposes the `,(0,h.jsx)(t.code,{children:`open`}),`, `,(0,h.jsx)(t.code,{children:`disabled`}),`, and `,(0,h.jsx)(t.code,{children:`invalid`}),` custom states. Use `,(0,h.jsx)(t.code,{children:`:state(...)`}),` to change variables only while that state is active. Open the first example to see its active state; the second shows the disabled state.`]}),`
`,(0,h.jsx)(c,{className:`state-styled-select`,label:`Open this select`,required:!0,children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(c,{className:`state-styled-select`,label:`Disabled select`,value:`7`,disabled:!0,children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`.state-styled-select:state(open) {
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
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`invalid`}),` state becomes active when the component reports a validation error, for example after `,(0,h.jsx)(t.code,{children:`reportValidity()`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`square-select-with-mobile-overrides`,children:`Square select with mobile overrides`}),`
`,(0,h.jsx)(c,{label:`Select option`,style:{"--jb-select-margin":`0px 4px`,"--jb-select-rounded":`0px`,"--jb-select-border-color":`rgb(26, 23, 23)`,"--jb-select-border-color-selected":`rgb(30, 29, 43)`,"--jb-select-bgcolor-selected":`rgb(195, 57, 230)`,"--jb-select-bgcolor":`lightgray`,"--jb-select-mobile-search-input-height":`64px`,"--jb-select-border-bottom-width":`1px`,"--jb-select-mobile-item-list-border-radius":`16px`},children:(0,h.jsx)(s,{optionList:u})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<JBSelect
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
`})})]})}function m(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),o(),n(),l(),d(),f()}))();export{m as default};