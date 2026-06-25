import{j as e,M as d,T as a,S as t,e as i}from"./index-C7gXOymI.js";import{useMDXComponents as c}from"./index-B8rYRX2K.js";import{S as p,F as s,f as r}from"./JBSelect.stories-B4RreqqA.js";import"./iframe-B7n_b3Qv.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CbishZFR.js";import"./index-BxfZ0Gix.js";import"./jb-button-CFQA-aHA.js";import"./jb-loading-BmlEKkU_.js";import"./index-CansPAZh.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-D7ggZhY0.js";import"./index-BijJAI47.js";import"./JBButton-C5Q4-nqF.js";import"./constants-Ci1PGOK2.js";import"./chunk-MVUZLZE2-OakZy48_.js";import"./JBCheckbox-CWPv_eTu.js";function l(n){const o={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:p}),`
`,e.jsx(a,{children:"Popover positioning"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"JBSelect"})," renders its option list in a popover. On desktop, the default ",e.jsx(o.code,{children:'popoverPosition="absolute"'})," leaves that popover in the select's normal layout context. This is usually the right choice for ordinary page layouts."]}),`
`,e.jsxs(o.p,{children:["Use ",e.jsx(o.code,{children:'popoverPosition="fixed"'})," when that layout context would clip or incorrectly position the open list—for example, when the select is inside a scrollable panel (",e.jsx(o.code,{children:"overflow: auto"}),"), a clipped container (",e.jsx(o.code,{children:"overflow: hidden"}),"), or a nested positioned layout."]}),`
`,e.jsx(o.p,{children:"In fixed mode, the popover is anchored to the select box using viewport coordinates. It follows the select when its scrollable parent, the window, or the select's size changes."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:"Fixed positioning is a desktop behavior. The component continues to use its mobile select UI at mobile breakpoints."}),`
`]}),`
`,e.jsx(o.h2,{id:"scrollable-and-overflow-containers",children:"Scrollable and overflow containers"}),`
`,e.jsxs(o.p,{children:["The panel below has ",e.jsx(o.code,{children:"overflow-y: auto"}),". Scroll it until the selects are near an edge, then open each one. The first uses the default absolute positioning; the second uses ",e.jsx(o.code,{children:'popoverPosition="fixed"'}),", which anchors its option list to the visible select instead of the panel's scroll area."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(o.p,{children:"Use the prop directly on the React component:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { JBOptionList, JBSelect } from 'jb-select/react';

export function ProjectOwnerSelect({ people }) {
  return (
    <div style={{ height: '14rem', overflowY: 'auto' }}>
      <JBSelect
        label="Project owner"
        placeholder="Choose a person"
        popoverPosition="fixed"
      >
        <JBOptionList
          optionList={people}
          getTitle={(person) => \`\${person.name} \${person.family}\`}
          getValue={(person) => person.userId}
        />
      </JBSelect>
    </div>
  );
}
`})}),`
`,e.jsx(o.h2,{id:"positioned-or-clipped-parents",children:"Positioned or clipped parents"}),`
`,e.jsxs(o.p,{children:["An ancestor with ",e.jsx(o.code,{children:"position: relative"})," is common in cards, drawers, and overlays. If that ancestor also clips overflow, an absolutely positioned option list can be cut off or use an unintended containing block. Fixed mode bases placement on the select's viewport rectangle instead."]}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<div style={{ position: 'relative', overflow: 'hidden' }}>
  <JBSelect popoverPosition="fixed" label="Environment">
    <JBOption value="development">Development</JBOption>
    <JBOption value="staging">Staging</JBOption>
    <JBOption value="production">Production</JBOption>
  </JBSelect>
</div>
`})}),`
`,e.jsx(o.h2,{id:"choosing-a-position-mode",children:"Choosing a position mode"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Situation"}),e.jsx("th",{children:"Recommended value"}),e.jsx("th",{children:"Why"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Standard page, form, or non-clipping card"}),e.jsxs("td",{children:[e.jsx("code",{children:'"absolute"'})," (default)"]}),e.jsx("td",{children:"Keeps the popover in the normal component layout context."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Select in an ",e.jsx("code",{children:"overflow: auto"})," or ",e.jsx("code",{children:"overflow: hidden"})," ancestor"]}),e.jsx("td",{children:e.jsx("code",{children:'"fixed"'})}),e.jsx("td",{children:"Prevents the ancestor's overflow from clipping the desktop option list."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Select nested in another positioned UI, such as a drawer or overlay"}),e.jsx("td",{children:e.jsx("code",{children:'"fixed"'})}),e.jsx("td",{children:"Anchors to the select's viewport position rather than an ancestor's positioning context."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mobile viewport"}),e.jsx("td",{children:"Either value"}),e.jsx("td",{children:"The component uses its mobile UI; this setting affects the desktop popover."})]})]})]}),`
`,e.jsx(o.h2,{id:"web-component-usage",children:"Web-component usage"}),`
`,e.jsx(o.p,{children:"For the standalone custom element, set the property when creating the component in JavaScript:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`const select = document.querySelector('jb-select');
select.popoverPosition = 'fixed';
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"popoverPosition"})," accepts ",e.jsx(o.code,{children:'"absolute"'})," and ",e.jsx(o.code,{children:'"fixed"'}),". Choose ",e.jsx(o.code,{children:"fixed"})," only for containment or positioning problems; the default remains a good fit for the majority of layouts."]})]})}function q(n={}){const{wrapper:o}={...c(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{q as default};
