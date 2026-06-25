import{j as e,M as p,S as o,e as i}from"./index-BeKp1SPH.js";import{useMDXComponents as d}from"./index-B8rYRX2K.js";import{O as s,b as r,d as c,e as l}from"./JBSelect.stories-B4RreqqA.js";import"./iframe-DwXzIX12.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CbishZFR.js";import"./index-BxfZ0Gix.js";import"./jb-button-CFQA-aHA.js";import"./jb-loading-BmlEKkU_.js";import"./index-CansPAZh.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-D7ggZhY0.js";import"./index-BijJAI47.js";import"./JBButton-C5Q4-nqF.js";import"./constants-Ci1PGOK2.js";import"./chunk-MVUZLZE2-OakZy48_.js";import"./JBCheckbox-CWPv_eTu.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/form elements/JBSelect/Options"}),`
`,e.jsx(n.h1,{id:"supplying-options",children:"Supplying options"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"JBSelect"})," accepts options in two ways: ",e.jsx(n.code,{children:"JBOption"})," and ",e.jsx(n.code,{children:"JBOptionList"}),". Both are placed inside ",e.jsx(n.code,{children:"JBSelect"}),", both participate in search and keyboard navigation, and both can be used with single or multiple selection. The right choice depends on whether you need custom option markup or simply need to display an array."]}),`
`,e.jsx(n.h2,{id:"choose-an-approach",children:"Choose an approach"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Use it when"}),e.jsx("th",{children:"Trade-off"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"JBOption"})}),e.jsx("td",{children:"Each option has custom JSX or its own layout."}),e.jsx("td",{children:"Maximum flexibility, with one rendered component per option."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"JBOptionList"})}),e.jsx("td",{children:"Your options already exist as an array of strings, numbers, or objects."}),e.jsx("td",{children:"Less JSX and centralised mapping; custom content is created with a DOM callback rather than React JSX."})]})]})]}),`
`,e.jsxs(n.h2,{id:"jboption-render-each-option-yourself",children:[e.jsx(n.code,{children:"JBOption"}),": render each option yourself"]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"JBOption"})," when the option needs custom content—such as a checkbox, icon, colour swatch, avatar, or secondary text. Set the value with ",e.jsx(n.code,{children:"value"})," and place the visible JSX between the tags."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { JBOption, JBSelect } from 'jb-select/react';

const people = [
  { id: 1, name: 'Ava Patel', role: 'Designer' },
  { id: 2, name: 'Sam Lee', role: 'Engineer' },
];

<JBSelect label="Assignee">
  {people.map((person) => (
    <JBOption key={person.id} value={person.id}>
      <strong>{person.name}</strong>
      <span>{person.role}</span>
    </JBOption>
  ))}
</JBSelect>;
`})}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsxs(n.p,{children:["For multiple selection, this is also the approach to use when each row contains a ",e.jsx(n.code,{children:"JBCheckbox"}),"."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsxs(n.h2,{id:"jboptionlist-create-options-from-an-array",children:[e.jsx(n.code,{children:"JBOptionList"}),": create options from an array"]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"JBOptionList"})," when the option data is already an array and each row can use a consistent layout. It creates the underlying ",e.jsx(n.code,{children:"JBOption"})," elements for you."]}),`
`,e.jsx(n.h3,{id:"arrays-of-primitive-values",children:"Arrays of primitive values"}),`
`,e.jsxs(n.p,{children:["For strings or numbers, pass ",e.jsx(n.code,{children:"optionList"})," directly. Each value is used for both the displayed title and selected value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { JBOptionList, JBSelect } from 'jb-select/react';

const languages = ['TypeScript', 'JavaScript', 'Rust'];

<JBSelect label="Language">
  <JBOptionList optionList={languages} />
</JBSelect>;
`})}),`
`,e.jsx(n.h3,{id:"arrays-of-objects",children:"Arrays of objects"}),`
`,e.jsxs(n.p,{children:["For objects, provide ",e.jsx(n.code,{children:"getTitle"})," to choose the display text and ",e.jsx(n.code,{children:"getValue"})," to choose the value returned by ",e.jsx(n.code,{children:"JBSelect"}),". If ",e.jsx(n.code,{children:"getValue"})," is omitted, the whole object is the selected value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { JBOptionList, JBSelect } from 'jb-select/react';

const people = [
  { id: 1, name: 'Ava Patel', role: 'Designer' },
  { id: 2, name: 'Sam Lee', role: 'Engineer' },
];

<JBSelect label="Assignee">
  <JBOptionList
    optionList={people}
    getTitle={(person) => \`\${person.name} — \${person.role}\`}
    getValue={(person) => person.id}
  />
</JBSelect>;
`})}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs(n.h3,{id:"custom-content-with-jboptionlist",children:["Custom content with ",e.jsx(n.code,{children:"JBOptionList"})]}),`
`,e.jsxs(n.p,{children:["When an array-driven option needs non-text content, use ",e.jsx(n.code,{children:"getContentDOM"})," and return an ",e.jsx(n.code,{children:"HTMLElement"}),". If the option UI is naturally React JSX, prefer mapping to ",e.jsx(n.code,{children:"JBOption"})," instead—it is simpler and keeps the rendering declarative."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<JBOptionList
  optionList={people}
  getTitle={(person) => person.name}
  getValue={(person) => person.id}
  getContentDOM={(person) => {
    const element = document.createElement('div');
    element.textContent = \`\${person.name} — \${person.role}\`;
    return element;
  }}
/>
`})}),`
`,e.jsxs(n.h2,{id:"using-jboptionlist-with-multiple-selection",children:["Using ",e.jsx(n.code,{children:"JBOptionList"})," with multiple selection"]}),`
`,e.jsxs(n.p,{children:["The option source does not change the selection behaviour. Add ",e.jsx(n.code,{children:"multiple"})," to the parent ",e.jsx(n.code,{children:"JBSelect"}),"; its value will contain an array of the values returned by ",e.jsx(n.code,{children:"getValue"}),"."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"practical-rule",children:"Practical rule"}),`
`,e.jsxs(n.p,{children:["Start with ",e.jsx(n.code,{children:"JBOptionList"})," for simple API or data-driven lists. Switch to ",e.jsx(n.code,{children:"JBOption"})," when the visible content needs React components or varies per option. Avoid nesting ",e.jsx(n.code,{children:"JBOption"})," inside ",e.jsx(n.code,{children:"JBOptionList"}),": choose one approach for each option collection."]})]})}function E(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{E as default};
