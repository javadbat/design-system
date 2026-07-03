import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CS2hR0SM.js";import{_ as n,d as r,f as i,k as a,m as o}from"./blocks-Bft8nf94.js";import{t as s}from"./mdx-react-shim-nI9Pyy70.js";import{MultipleWithCheckbox as c,MultipleWithOptionList as l,OptionAsChildren as u,OptionObject as d,n as f}from"./JBSelect.stories-DThT-bNe.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...a(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{title:`Components/form elements/JBSelect/Options`}),`
`,(0,h.jsx)(t.h1,{id:`supplying-options`,children:`Supplying options`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`JBSelect`}),` accepts options in two ways: `,(0,h.jsx)(t.code,{children:`JBOption`}),` and `,(0,h.jsx)(t.code,{children:`JBOptionList`}),`. Both are placed inside `,(0,h.jsx)(t.code,{children:`JBSelect`}),`, both participate in search and keyboard navigation, and both can be used with single or multiple selection. The right choice depends on whether you need custom option markup or simply need to display an array.`]}),`
`,(0,h.jsx)(t.h2,{id:`choose-an-approach`,children:`Choose an approach`}),`
`,(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`Component`}),(0,h.jsx)(`th`,{children:`Use it when`}),(0,h.jsx)(`th`,{children:`Trade-off`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`JBOption`})}),(0,h.jsx)(`td`,{children:`Each option has custom JSX or its own layout.`}),(0,h.jsx)(`td`,{children:`Maximum flexibility, with one rendered component per option.`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`JBOptionList`})}),(0,h.jsx)(`td`,{children:`Your options already exist as an array of strings, numbers, or objects.`}),(0,h.jsx)(`td`,{children:`Less JSX and centralised mapping; custom content is created with a DOM callback rather than React JSX.`})]})]})]}),`
`,(0,h.jsxs)(t.h2,{id:`jboption-render-each-option-yourself`,children:[(0,h.jsx)(t.code,{children:`JBOption`}),`: render each option yourself`]}),`
`,(0,h.jsxs)(t.p,{children:[`Use `,(0,h.jsx)(t.code,{children:`JBOption`}),` when the option needs custom content—such as a checkbox, icon, colour swatch, avatar, or secondary text. Set the value with `,(0,h.jsx)(t.code,{children:`value`}),` and place the visible JSX between the tags.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { JBOption, JBSelect } from 'jb-select/react';

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
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsxs)(t.p,{children:[`For multiple selection, this is also the approach to use when each row contains a `,(0,h.jsx)(t.code,{children:`JBCheckbox`}),`.`]}),`
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(t.h2,{id:`jboptionlist-create-options-from-an-array`,children:[(0,h.jsx)(t.code,{children:`JBOptionList`}),`: create options from an array`]}),`
`,(0,h.jsxs)(t.p,{children:[`Use `,(0,h.jsx)(t.code,{children:`JBOptionList`}),` when the option data is already an array and each row can use a consistent layout. It creates the underlying `,(0,h.jsx)(t.code,{children:`JBOption`}),` elements for you.`]}),`
`,(0,h.jsx)(t.h3,{id:`arrays-of-primitive-values`,children:`Arrays of primitive values`}),`
`,(0,h.jsxs)(t.p,{children:[`For strings or numbers, pass `,(0,h.jsx)(t.code,{children:`optionList`}),` directly. Each value is used for both the displayed title and selected value.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { JBOptionList, JBSelect } from 'jb-select/react';

const languages = ['TypeScript', 'JavaScript', 'Rust'];

<JBSelect label="Language">
  <JBOptionList optionList={languages} />
</JBSelect>;
`})}),`
`,(0,h.jsx)(t.h3,{id:`arrays-of-objects`,children:`Arrays of objects`}),`
`,(0,h.jsxs)(t.p,{children:[`For objects, provide `,(0,h.jsx)(t.code,{children:`getTitle`}),` to choose the display text and `,(0,h.jsx)(t.code,{children:`getValue`}),` to choose the value returned by `,(0,h.jsx)(t.code,{children:`JBSelect`}),`. If `,(0,h.jsx)(t.code,{children:`getValue`}),` is omitted, the whole object is the selected value.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { JBOptionList, JBSelect } from 'jb-select/react';

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
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(t.h3,{id:`custom-content-with-jboptionlist`,children:[`Custom content with `,(0,h.jsx)(t.code,{children:`JBOptionList`})]}),`
`,(0,h.jsxs)(t.p,{children:[`When an array-driven option needs non-text content, use `,(0,h.jsx)(t.code,{children:`getContentDOM`}),` and return an `,(0,h.jsx)(t.code,{children:`HTMLElement`}),`. If the option UI is naturally React JSX, prefer mapping to `,(0,h.jsx)(t.code,{children:`JBOption`}),` instead—it is simpler and keeps the rendering declarative.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<JBOptionList
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
`,(0,h.jsxs)(t.h2,{id:`using-jboptionlist-with-multiple-selection`,children:[`Using `,(0,h.jsx)(t.code,{children:`JBOptionList`}),` with multiple selection`]}),`
`,(0,h.jsxs)(t.p,{children:[`The option source does not change the selection behaviour. Add `,(0,h.jsx)(t.code,{children:`multiple`}),` to the parent `,(0,h.jsx)(t.code,{children:`JBSelect`}),`; its value will contain an array of the values returned by `,(0,h.jsx)(t.code,{children:`getValue`}),`.`]}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`practical-rule`,children:`Practical rule`}),`
`,(0,h.jsxs)(t.p,{children:[`Start with `,(0,h.jsx)(t.code,{children:`JBOptionList`}),` for simple API or data-driven lists. Switch to `,(0,h.jsx)(t.code,{children:`JBOption`}),` when the visible content needs React components or varies per option. Avoid nesting `,(0,h.jsx)(t.code,{children:`JBOption`}),` inside `,(0,h.jsx)(t.code,{children:`JBOptionList`}),`: choose one approach for each option collection.`]})]})}function m(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),n(),f()}))();export{m as default};