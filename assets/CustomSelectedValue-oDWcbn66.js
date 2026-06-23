import{j as e,M as c,T as r,S as a,e as i}from"./index-BRxoWyyz.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import{S as d,C as l}from"./JBSelect.stories-BdEnhEV-.js";import"./iframe-Db7JC5yz.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CyE7dYMq.js";import"./index-Br1cBDPB.js";import"./jb-button-CtUV5eF-.js";import"./jb-loading-BmlEKkU_.js";import"./index-CansPAZh.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-D7ggZhY0.js";import"./index-BijJAI47.js";import"./JBButton-CbaRHm9y.js";import"./constants-Ci1PGOK2.js";import"./chunk-MVUZLZE2-OakZy48_.js";import"./JBCheckbox--jxmdS6A.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(r,{children:"Custom selected value content"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"getSelectedValueDOM"})," when an option needs a richer representation after it has been selected. The callback controls the content shown inside the closed select—for example, a colour swatch, status indicator, avatar, or icon and label."]}),`
`,e.jsxs(n.p,{children:["It does not change how options look in the open list. Use ",e.jsx(n.code,{children:"JBOption"})," children or ",e.jsx(n.code,{children:"JBOptionList"}),"'s ",e.jsx(n.code,{children:"getContentDOM"})," callback to customise the option rows themselves."]}),`
`,e.jsx(n.h2,{id:"live-example",children:"Live example"}),`
`,e.jsx(n.p,{children:"Choose a colour below. The selected value includes both a swatch and a label, while the option list has its own colour treatment."}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"react-usage",children:"React usage"}),`
`,e.jsxs(n.p,{children:["Pass a function to ",e.jsx(n.code,{children:"getSelectedValueDOM"}),". Its argument is the selected ",e.jsx(n.code,{children:"value"})," from the matching ",e.jsx(n.code,{children:"JBOption"}),", and the function must return a newly created ",e.jsx(n.code,{children:"HTMLElement"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { JBOption, JBSelect } from 'jb-select/react';

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
  swatch.style.borderRadius = '999px';
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
`,e.jsx(n.p,{children:"The selected value is an object in this example, so the callback can use both the name and the colour code. If an option uses a string or number as its value, the callback receives that primitive instead."}),`
`,e.jsx(n.h3,{id:"return-a-fresh-element",children:"Return a fresh element"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"JBSelect"})," places the returned element into its internal selected-value area. Create and return a new element on every call; do not reuse an element that is already mounted elsewhere. Prefer DOM APIs such as ",e.jsx(n.code,{children:"textContent"}),", ",e.jsx(n.code,{children:"append"}),", and ",e.jsx(n.code,{children:"style"})," when the value contains user-provided data, rather than building HTML with ",e.jsx(n.code,{children:"innerHTML"}),"."]}),`
`,e.jsx(n.h2,{id:"style-the-returned-content",children:"Style the returned content"}),`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.code,{children:"part"})," attribute on an element you create, then style it from outside with ",e.jsx(n.code,{children:"::part(...)"}),". The live example exposes ",e.jsx(n.code,{children:"color-box"})," for its swatch."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`jb-select::part(color-box) {
  box-shadow: 0 0 0 1px rgb(15 23 42 / 20%);
}
`})}),`
`,e.jsxs(n.p,{children:["The component's built-in ",e.jsx(n.code,{children:"selected-value"})," part remains available for styling the enclosing selected-value area."]}),`
`,e.jsx(n.h2,{id:"web-component-usage",children:"Web-component usage"}),`
`,e.jsxs(n.p,{children:["For the standalone element, assign the callback through ",e.jsx(n.code,{children:"callbacks.getSelectedValueDOM"}),". Its first argument is the selected value; the optional second argument is the selected ",e.jsx(n.code,{children:"jb-option"})," element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const select = document.querySelector('jb-select');

select.callbacks.getSelectedValueDOM = (value, optionElement) => {
  const element = document.createElement('span');
  element.textContent = \`Selected: \${value.name}\`;
  return element;
};
`})}),`
`,e.jsx(n.h2,{id:"current-limitation",children:"Current limitation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getSelectedValueDOM"})," customises a single selected value. It is not currently supported for ",e.jsx(n.code,{children:"multiple"})," selects, whose selected value is an array. For multiple selection, use the component's default selected-value display."]})]})}function V(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{V as default};
