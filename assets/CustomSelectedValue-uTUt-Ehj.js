import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CxfI9dM7.js";import{A as n,_ as r,d as i,f as a,m as o,v as s}from"./blocks-YnmJtm84.js";import{t as c}from"./mdx-react-shim-BaIfbSMC.js";import{CustomSelectedValueRender as l,n as u,t as d}from"./JBSelect.stories-CAV7cIij.js";function f(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(r,{children:`Custom selected value content`}),`
`,(0,m.jsxs)(t.p,{children:[`Use `,(0,m.jsx)(t.code,{children:`getSelectedValueDOM`}),` when an option needs a richer representation after it has been selected. The callback controls the content shown inside the closed select—for example, a colour swatch, status indicator, avatar, or icon and label.`]}),`
`,(0,m.jsxs)(t.p,{children:[`It does not change how options look in the open list. Use `,(0,m.jsx)(t.code,{children:`JBOption`}),` children or `,(0,m.jsx)(t.code,{children:`JBOptionList`}),`'s `,(0,m.jsx)(t.code,{children:`getContentDOM`}),` callback to customise the option rows themselves.`]}),`
`,(0,m.jsx)(t.h2,{id:`live-example`,children:`Live example`}),`
`,(0,m.jsx)(t.p,{children:`Choose a colour below. The selected value includes both a swatch and a label, while the option list has its own colour treatment.`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`react-usage`,children:`React usage`}),`
`,(0,m.jsxs)(t.p,{children:[`Pass a function to `,(0,m.jsx)(t.code,{children:`getSelectedValueDOM`}),`. Its argument is the selected `,(0,m.jsx)(t.code,{children:`value`}),` from the matching `,(0,m.jsx)(t.code,{children:`JBOption`}),`, and the function must return a newly created `,(0,m.jsx)(t.code,{children:`HTMLElement`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { JBOption, JBSelect } from 'jb-select/react';

type Color = {
  name: string;
  value: string;
};

const colors: Color[] = [
  { name: 'Ocean', value: '#0ea5e9' },
  { name: 'Forest', value: '#16a34a' },
  { name: 'Sunset', value: '#f97316' },
];

function createSelectedColor(value: Color) {
  const element = document.createElement('span');
  element.style.display = 'inline-flex';
  element.style.alignItems = 'center';
  element.style.gap = '0.5rem';

  const swatch = document.createElement('span');
  swatch.setAttribute('part', 'color-box');
  swatch.style.width = '1rem';
  swatch.style.height = '1rem';
  swatch.style.borderRadius = '62.4375rem';
  swatch.style.backgroundColor = value.value;

  const label = document.createElement('span');
  label.textContent = value.name;

  element.append(swatch, label);
  return element;
}

export function ColorSelect() {
  return (
    <JBSelect<Color>
      label="Theme colour"
      placeholder="Choose a colour"
      getSelectedValueDOM={createSelectedColor}
    >
      {colors.map((color) => (
        <JBOption key={color.value} value={color}>
          {color.name}
        </JBOption>
      ))}
    </JBSelect>
  );
}
`})}),`
`,(0,m.jsx)(t.p,{children:`The selected value is an object in this example, so the callback can use both the name and the colour code. If an option uses a string or number as its value, the callback receives that primitive instead.`}),`
`,(0,m.jsx)(t.h3,{id:`return-a-fresh-element`,children:`Return a fresh element`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`JBSelect`}),` places the returned element into its internal selected-value area. Create and return a new element on every call; do not reuse an element that is already mounted elsewhere. Prefer DOM APIs such as `,(0,m.jsx)(t.code,{children:`textContent`}),`, `,(0,m.jsx)(t.code,{children:`append`}),`, and `,(0,m.jsx)(t.code,{children:`style`}),` when the value contains user-provided data, rather than building HTML with `,(0,m.jsx)(t.code,{children:`innerHTML`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`style-the-returned-content`,children:`Style the returned content`}),`
`,(0,m.jsxs)(t.p,{children:[`Use a `,(0,m.jsx)(t.code,{children:`part`}),` attribute on an element you create, then style it from outside with `,(0,m.jsx)(t.code,{children:`::part(...)`}),`. The live example exposes `,(0,m.jsx)(t.code,{children:`color-box`}),` for its swatch.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`jb-select::part(color-box) {
  box-shadow: 0 0 0 1px rgb(15 23 42 / 20%);
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`The component's built-in `,(0,m.jsx)(t.code,{children:`selected-value`}),` part remains available for styling the enclosing selected-value area.`]}),`
`,(0,m.jsx)(t.h2,{id:`web-component-usage`,children:`Web-component usage`}),`
`,(0,m.jsxs)(t.p,{children:[`For the standalone element, assign the callback through `,(0,m.jsx)(t.code,{children:`callbacks.getSelectedValueDOM`}),`. Its first argument is the selected value; the optional second argument is the selected `,(0,m.jsx)(t.code,{children:`jb-option`}),` element.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`const select = document.querySelector('jb-select');

select.callbacks.getSelectedValueDOM = (value, optionElement) => {
  const element = document.createElement('span');
  element.textContent = \`Selected: \${value.name}\`;
  return element;
};
`})}),`
`,(0,m.jsx)(t.h2,{id:`current-limitation`,children:`Current limitation`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`getSelectedValueDOM`}),` customises a single selected value. It is not currently supported for `,(0,m.jsx)(t.code,{children:`multiple`}),` selects, whose selected value is an array. For multiple selection, use the component's default selected-value display.`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),c(),s(),u()}))();export{p as default};