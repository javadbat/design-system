import{j as e,M as h,S as s,e as l}from"./index-DuFiKK-e.js";import{useMDXComponents as d}from"./index-B8rYRX2K.js";import{M as o,a as i,b as r,c as a}from"./JBSelect.stories-5iahtECH.js";import"./iframe-DWoQbKgK.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CbishZFR.js";import"./index-BxfZ0Gix.js";import"./jb-button-CFQA-aHA.js";import"./jb-loading-BmlEKkU_.js";import"./index-CansPAZh.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-D7ggZhY0.js";import"./index-BijJAI47.js";import"./JBButton-C5Q4-nqF.js";import"./constants-Ci1PGOK2.js";import"./chunk-MVUZLZE2-OakZy48_.js";import"./JBCheckbox-2wYMHLGv.js";function c(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/form elements/JBSelect/Multiple selection"}),`
`,e.jsx(n.h1,{id:"multiple-selection",children:"Multiple selection"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"JBSelect"})," with ",e.jsx(n.code,{children:"multiple"})," when people need to choose more than one value from the same list—for example, assigning team members, selecting filters, or choosing permissions. The open list stays available while people add or remove options, and the selected value is an array."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Select and deselect several options without reopening the list."}),`
`,e.jsx(n.li,{children:"Search the available options by typing after the select is focused."}),`
`,e.jsxs(n.li,{children:["Render options with any JSX content, including ",e.jsx(n.code,{children:"JBCheckbox"}),"."]}),`
`,e.jsx(n.li,{children:"Control the selected values with React state, or set the component value directly."}),`
`,e.jsx(n.li,{children:"Use strings, numbers, objects, or other JavaScript values as option values."}),`
`,e.jsxs(n.li,{children:["Keep the standard ",e.jsx(n.code,{children:"JBSelect"})," capabilities: label, helper message, placeholder, disabled state, clear button, validation, mobile UI, RTL, and sizing."]}),`
`]}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:"multiple"})," and render a ",e.jsx(n.code,{children:"JBOption"})," for every selectable value. In React, import the components from ",e.jsx(n.code,{children:"jb-select/react"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { JBOption, JBSelect } from 'jb-select/react';

export function AssigneeSelect() {
  return (
    <JBSelect
      multiple
      label="Assignees"
      placeholder="Choose one or more people"
    >
      <JBOption value="ava">Ava Patel</JBOption>
      <JBOption value="sam">Sam Lee</JBOption>
      <JBOption value="morgan">Morgan Jones</JBOption>
    </JBSelect>
  );
}
`})}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"what-changes-in-multiple-mode",children:"What changes in multiple mode?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"value"})," is an array of the selected option values. Selecting an item adds it; selecting it again removes it. The displayed selected values are separated by commas, and the list remains open so people can continue choosing."]}),`
`,e.jsxs(n.p,{children:["The component filters options as the user types. With the list open, use the arrow keys to move through options and ",e.jsx("kbd",{children:"Enter"})," to select or deselect the active option."]}),`
`,e.jsx(n.h2,{id:"controlled-values",children:"Controlled values"}),`
`,e.jsxs(n.p,{children:["Pass an array to ",e.jsx(n.code,{children:"value"})," and update that array from ",e.jsx(n.code,{children:"onChange"})," when the selection changes. This is the recommended pattern when the chosen values are part of form or application state."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from 'react';
import { JBOption, JBSelect } from 'jb-select/react';

const people = [
  { id: 1, name: 'Ava Patel' },
  { id: 2, name: 'Sam Lee' },
  { id: 3, name: 'Morgan Jones' },
];

export function ControlledAssigneeSelect() {
  const [value, setValue] = useState<number[]>([1, 3]);

  return (
    <JBSelect
      multiple
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      {people.map((person) => (
        <JBOption key={person.id} value={person.id}>
          {person.name}
        </JBOption>
      ))}
    </JBSelect>
  );
}
`})}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(l,{of:i}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Keep the option values stable. For object values, pass the same object references in both ",e.jsx(n.code,{children:"value"})," and the matching ",e.jsx(n.code,{children:"JBOption"})," values."]}),`
`]}),`
`,e.jsx(n.h2,{id:"checkbox-options",children:"Checkbox options"}),`
`,e.jsxs(n.p,{children:["Checkboxes are optional, but they make the multi-select nature of a long list immediately obvious. Put a ",e.jsx(n.code,{children:"JBCheckbox"})," inside each ",e.jsx(n.code,{children:"JBOption"}),"; ",e.jsx(n.code,{children:"JBSelect"})," keeps it synchronized when an option is selected or deselected."]}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(n.p,{children:["If the checkbox should own its label markup, use the ",e.jsx(n.code,{children:"label"})," slot. This is particularly useful for richer option labels."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"value-and-event-reference",children:"Value and event reference"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Need"}),e.jsx("th",{children:"Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Enable multiple selection"}),e.jsx("td",{children:e.jsx("code",{children:"multiple"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Preselect or control options"}),e.jsxs("td",{children:["Pass the selected-values array to ",e.jsx("code",{children:"value"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Read the latest selection"}),e.jsxs("td",{children:["Read ",e.jsx("code",{children:"event.target.value"})," in ",e.jsx("code",{children:"onChange"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Clear the selection"}),e.jsxs("td",{children:["Use the built-in clear button, or set ",e.jsx("code",{children:"value"})," to an empty array in controlled React code."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Hide the clear button"}),e.jsx("td",{children:e.jsx("code",{children:"hideClear"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Require a selection"}),e.jsx("td",{children:e.jsx("code",{children:"required"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Change the mobile search prompt"}),e.jsx("td",{children:e.jsx("code",{children:"searchPlaceholder"})})]})]})]}),`
`,e.jsx(n.h2,{id:"html-web-component-usage",children:"HTML web-component usage"}),`
`,e.jsxs(n.p,{children:["For the standalone web component, import ",e.jsx(n.code,{children:"jb-select"})," once and use the same ",e.jsx(n.code,{children:"multiple"})," attribute. Read or assign the array through the DOM property, not an HTML attribute."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<jb-select id="assignees" multiple label="Assignees">
  <jb-option value="ava">Ava Patel</jb-option>
  <jb-option value="sam">Sam Lee</jb-option>
  <jb-option value="morgan">Morgan Jones</jb-option>
</jb-select>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const assignees = document.querySelector('#assignees');

assignees.value = ['ava', 'morgan'];
assignees.addEventListener('change', (event) => {
  console.log(event.target.value); // ['ava', 'sam']
});
`})}),`
`,e.jsx(n.h2,{id:"practical-guidance",children:"Practical guidance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add a clear ",e.jsx(n.code,{children:"label"})," and a ",e.jsx(n.code,{children:"placeholder"})," that sets the expectation, such as “Choose one or more tags”."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"JBOptionList"})," instead of manually mapping ",e.jsx(n.code,{children:"JBOption"})," when an array-driven list does not need custom JSX."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'popoverPosition="fixed"'})," when the select lives in a scrolling or overflow container."]}),`
`,e.jsxs(n.li,{children:["For external form validation, pass the message through ",e.jsx(n.code,{children:"error"}),"; use ",e.jsx(n.code,{children:"required"})," for the built-in required rule."]}),`
`]})]})}function T(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{T as default};
