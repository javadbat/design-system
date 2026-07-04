import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-ggKXR4rT.js";import{_ as n,d as r,f as i,k as a,m as o}from"./blocks-CLyHj7Mb.js";import{t as s}from"./mdx-react-shim-Ob8i-TrQ.js";import{Multiple as c,MultipleWithCheckbox as l,MultipleWithCheckboxAndLabel as u,MultipleWithValue as d,n as f}from"./JBSelect.stories-DGV__oGw.js";function p(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{title:`Components/form elements/JBSelect/Multiple selection`}),`
`,(0,h.jsx)(t.h1,{id:`multiple-selection`,children:`Multiple selection`}),`
`,(0,h.jsxs)(t.p,{children:[`Use `,(0,h.jsx)(t.code,{children:`JBSelect`}),` with `,(0,h.jsx)(t.code,{children:`multiple`}),` when people need to choose more than one value from the same list—for example, assigning team members, selecting filters, or choosing permissions. The open list stays available while people add or remove options, and the selected value is an array.`]}),`
`,(0,h.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Select and deselect several options without reopening the list.`}),`
`,(0,h.jsx)(t.li,{children:`Search the available options by typing after the select is focused.`}),`
`,(0,h.jsxs)(t.li,{children:[`Render options with any JSX content, including `,(0,h.jsx)(t.code,{children:`JBCheckbox`}),`.`]}),`
`,(0,h.jsx)(t.li,{children:`Control the selected values with React state, or set the component value directly.`}),`
`,(0,h.jsx)(t.li,{children:`Use strings, numbers, objects, or other JavaScript values as option values.`}),`
`,(0,h.jsxs)(t.li,{children:[`Keep the standard `,(0,h.jsx)(t.code,{children:`JBSelect`}),` capabilities: label, helper message, placeholder, disabled state, clear button, validation, mobile UI, RTL, and sizing.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`quick-start`,children:`Quick start`}),`
`,(0,h.jsxs)(t.p,{children:[`Add `,(0,h.jsx)(t.code,{children:`multiple`}),` and render a `,(0,h.jsx)(t.code,{children:`JBOption`}),` for every selectable value. In React, import the components from `,(0,h.jsx)(t.code,{children:`jb-select/react`}),`.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { JBOption, JBSelect } from 'jb-select/react';

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
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(t.h3,{id:`what-changes-in-multiple-mode`,children:`What changes in multiple mode?`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`value`}),` is an array of the selected option values. Selecting an item adds it; selecting it again removes it. The displayed selected values are separated by commas, and the list remains open so people can continue choosing.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The component filters options as the user types. With the list open, use the arrow keys to move through options and `,(0,h.jsx)(`kbd`,{children:`Enter`}),` to select or deselect the active option.`]}),`
`,(0,h.jsx)(t.h2,{id:`controlled-values`,children:`Controlled values`}),`
`,(0,h.jsxs)(t.p,{children:[`Pass an array to `,(0,h.jsx)(t.code,{children:`value`}),` and update that array from `,(0,h.jsx)(t.code,{children:`onChange`}),` when the selection changes. This is the recommended pattern when the chosen values are part of form or application state.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from 'react';
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
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsxs)(t.p,{children:[`Keep the option values stable. For object values, pass the same object references in both `,(0,h.jsx)(t.code,{children:`value`}),` and the matching `,(0,h.jsx)(t.code,{children:`JBOption`}),` values.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`checkbox-options`,children:`Checkbox options`}),`
`,(0,h.jsxs)(t.p,{children:[`Checkboxes are optional, but they make the multi-select nature of a long list immediately obvious. Put a `,(0,h.jsx)(t.code,{children:`JBCheckbox`}),` inside each `,(0,h.jsx)(t.code,{children:`JBOption`}),`; `,(0,h.jsx)(t.code,{children:`JBSelect`}),` keeps it synchronized when an option is selected or deselected.`]}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsxs)(t.p,{children:[`If the checkbox should own its label markup, use the `,(0,h.jsx)(t.code,{children:`label`}),` slot. This is particularly useful for richer option labels.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`value-and-event-reference`,children:`Value and event reference`}),`
`,(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`Need`}),(0,h.jsx)(`th`,{children:`Use`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Enable multiple selection`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`multiple`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Preselect or control options`}),(0,h.jsxs)(`td`,{children:[`Pass the selected-values array to `,(0,h.jsx)(`code`,{children:`value`}),`.`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Read the latest selection`}),(0,h.jsxs)(`td`,{children:[`Read `,(0,h.jsx)(`code`,{children:`event.target.value`}),` in `,(0,h.jsx)(`code`,{children:`onChange`}),`.`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Clear the selection`}),(0,h.jsxs)(`td`,{children:[`Use the built-in clear button, or set `,(0,h.jsx)(`code`,{children:`value`}),` to an empty array in controlled React code.`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Hide the clear button`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`hideClear`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Require a selection`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`required`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`Change the mobile search prompt`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:`searchPlaceholder`})})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`html-web-component-usage`,children:`HTML web-component usage`}),`
`,(0,h.jsxs)(t.p,{children:[`For the standalone web component, import `,(0,h.jsx)(t.code,{children:`jb-select`}),` once and use the same `,(0,h.jsx)(t.code,{children:`multiple`}),` attribute. Read or assign the array through the DOM property, not an HTML attribute.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-html`,children:`<jb-select id="assignees" multiple label="Assignees">
  <jb-option value="ava">Ava Patel</jb-option>
  <jb-option value="sam">Sam Lee</jb-option>
  <jb-option value="morgan">Morgan Jones</jb-option>
</jb-select>
`})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-js`,children:`const assignees = document.querySelector('#assignees');

assignees.value = ['ava', 'morgan'];
assignees.addEventListener('change', (event) => {
  console.log(event.target.value); // ['ava', 'sam']
});
`})}),`
`,(0,h.jsx)(t.h2,{id:`practical-guidance`,children:`Practical guidance`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Add a clear `,(0,h.jsx)(t.code,{children:`label`}),` and a `,(0,h.jsx)(t.code,{children:`placeholder`}),` that sets the expectation, such as “Choose one or more tags”.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Use `,(0,h.jsx)(t.code,{children:`JBOptionList`}),` instead of manually mapping `,(0,h.jsx)(t.code,{children:`JBOption`}),` when an array-driven list does not need custom JSX.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Use `,(0,h.jsx)(t.code,{children:`popoverPosition="fixed"`}),` when the select lives in a scrolling or overflow container.`]}),`
`,(0,h.jsxs)(t.li,{children:[`For external form validation, pass the message through `,(0,h.jsx)(t.code,{children:`error`}),`; use `,(0,h.jsx)(t.code,{children:`required`}),` for the built-in required rule.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),n(),f()}))();export{m as default};