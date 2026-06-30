import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-9JcXr86A.js";import{_ as n,d as r,f as i,g as a,k as o,m as s}from"./blocks-QFp7hTke.js";import{t as c}from"./mdx-react-shim-DHXO_lDg.js";import{FixedPopoverInPositionedContainer as l,FixedPopoverInScrollableContainer as u,n as d,t as f}from"./JBSelect.stories-BSjJunFu.js";function p(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(a,{children:`Popover positioning`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`JBSelect`}),` renders its option list in a popover. On desktop, the default `,(0,h.jsx)(t.code,{children:`popoverPosition="absolute"`}),` leaves that popover in the select's normal layout context. This is usually the right choice for ordinary page layouts.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Use `,(0,h.jsx)(t.code,{children:`popoverPosition="fixed"`}),` when that layout context would clip or incorrectly position the open list—for example, when the select is inside a scrollable panel (`,(0,h.jsx)(t.code,{children:`overflow: auto`}),`), a clipped container (`,(0,h.jsx)(t.code,{children:`overflow: hidden`}),`), or a nested positioned layout.`]}),`
`,(0,h.jsx)(t.p,{children:`In fixed mode, the popover is anchored to the select box using viewport coordinates. It follows the select when its scrollable parent, the window, or the select's size changes.`}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.p,{children:`Fixed positioning is a desktop behavior. The component continues to use its mobile select UI at mobile breakpoints.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`scrollable-and-overflow-containers`,children:`Scrollable and overflow containers`}),`
`,(0,h.jsxs)(t.p,{children:[`The panel below has `,(0,h.jsx)(t.code,{children:`overflow-y: auto`}),`. Scroll it until the selects are near an edge, then open each one. The first uses the default absolute positioning; the second uses `,(0,h.jsx)(t.code,{children:`popoverPosition="fixed"`}),`, which anchors its option list to the visible select instead of the panel's scroll area.`]}),`
`,(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(t.p,{children:`Use the prop directly on the React component:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { JBOptionList, JBSelect } from 'jb-select/react';

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
`,(0,h.jsx)(t.h2,{id:`positioned-or-clipped-parents`,children:`Positioned or clipped parents`}),`
`,(0,h.jsxs)(t.p,{children:[`An ancestor with `,(0,h.jsx)(t.code,{children:`position: relative`}),` is common in cards, drawers, and overlays. If that ancestor also clips overflow, an absolutely positioned option list can be cut off or use an unintended containing block. Fixed mode bases placement on the select's viewport rectangle instead.`]}),`
`,(0,h.jsx)(s,{of:l}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<div style={{ position: 'relative', overflow: 'hidden' }}>
  <JBSelect popoverPosition="fixed" label="Environment">
    <JBOption value="development">Development</JBOption>
    <JBOption value="staging">Staging</JBOption>
    <JBOption value="production">Production</JBOption>
  </JBSelect>
</div>
`})}),`
`,(0,h.jsx)(t.h2,{id:`choosing-a-position-mode`,children:`Choosing a position mode`}),`
`,(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`Situation`}),(0,h.jsx)(`th`,{children:`Recommended value`}),(0,h.jsx)(`th`,{children:`Why`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Standard page, form, or non-clipping card`}),(0,h.jsxs)(`td`,{children:[(0,h.jsx)(`code`,{children:`"absolute"`}),` (default)`]}),(0,h.jsx)(`td`,{children:`Keeps the popover in the normal component layout context.`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsxs)(`td`,{children:[`Select in an `,(0,h.jsx)(`code`,{children:`overflow: auto`}),` or `,(0,h.jsx)(`code`,{children:`overflow: hidden`}),` ancestor`]}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`"fixed"`})}),(0,h.jsx)(`td`,{children:`Prevents the ancestor's overflow from clipping the desktop option list.`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Select nested in another positioned UI, such as a drawer or overlay`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`"fixed"`})}),(0,h.jsx)(`td`,{children:`Anchors to the select's viewport position rather than an ancestor's positioning context.`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Mobile viewport`}),(0,h.jsx)(`td`,{children:`Either value`}),(0,h.jsx)(`td`,{children:`The component uses its mobile UI; this setting affects the desktop popover.`})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`web-component-usage`,children:`Web-component usage`}),`
`,(0,h.jsx)(t.p,{children:`For the standalone custom element, set the property when creating the component in JavaScript:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-js`,children:`const select = document.querySelector('jb-select');
select.popoverPosition = 'fixed';
`})}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`popoverPosition`}),` accepts `,(0,h.jsx)(t.code,{children:`"absolute"`}),` and `,(0,h.jsx)(t.code,{children:`"fixed"`}),`. Choose `,(0,h.jsx)(t.code,{children:`fixed`}),` only for containment or positioning problems; the default remains a good fit for the majority of layouts.`]})]})}function m(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),c(),n(),d()}))();export{m as default};