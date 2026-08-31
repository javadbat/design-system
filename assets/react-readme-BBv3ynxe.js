import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BDNDt1nU.js";import{d as n,f as r,j as i,y as a}from"./blocks-fvM1VZza.js";import{t as o}from"./mdx-react-shim-LyoAdr-O.js";var s,c=e((()=>{s=`# JBForm React

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-form)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-form/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-form-react)](https://www.npmjs.com/package/jb-form-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-form)

React wrapper for \`jb-form\`, plus hooks and helpers for reading form values from React.

## Demo

See the [React form demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--overview) and the [full React documentation](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform-react-readme--docs).

## Installation

\`\`\`sh
npm i jb-form
\`\`\`

\`\`\`jsx
import { JBForm } from 'jb-form/react';

<JBForm>
  {/* put your form controls here */}
</JBForm>
\`\`\`

## When to use

Use \`JBForm\` when a React form needs aggregate JB validation, value collection, dirty-state tracking, virtual values, or nested \`jb-form\` sections. The basic wrapper setup is shown in the [normal form demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--normal).

## Props

| prop | type | description |
| --- | --- | --- |
| \`name\` | \`string\` | Name used when this form is nested inside another \`JBForm\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-tree-test) |
| \`onSubmit\` | \`(event) => void\` | Fired after the underlying \`jb-form\` validates a trusted submit. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-test) |
| \`onDirtyChange\` | \`(event) => void\` | Fired when aggregate dirty state changes. Read \`event.detail.isDirty\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-tree-test) |
| \`onValidityChange\` | \`(event) => void\` | Fired when aggregate synchronous validity changes. Read \`event.detail.isValid\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-test) |
| \`onChange\` | \`(event) => void\` | Fired for form/child change events. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-value) |
| \`onInit\` | \`(event) => void\` | Fired when the underlying \`jb-form\` dispatches \`init\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--normal) |
| \`onLoad\` | \`(event) => void\` | Wired by the wrapper for compatibility, but the current web component does not dispatch \`load\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--normal) |

## Ref access

Use a ref when you need the underlying \`JBFormWebComponent\` methods; the [imperative methods demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--imperative-methods) shows validation, value updates, and reset through a ref.

\`\`\`jsx
const formRef = useRef(null);

function submit() {
  const form = formRef.current;
  if (form?.reportValidity()) {
    console.log(form.getFormValues());
  }
}

return (
  <JBForm ref={formRef}>
    {/* fields */}
  </JBForm>
);
\`\`\`

## useJBForm

\`useJBForm()\` returns the nearest form instance from context. See it in the [useJBForm demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--use-jb-form).

\`\`\`tsx
import { useJBForm } from 'jb-form/react';

function SaveButton() {
  const form = useJBForm();

  return (
    <button onClick={() => console.log(form?.getFormValues())}>
      Save
    </button>
  );
}
\`\`\`

## useJBFormValue

\`useJBFormValue\` listens to form events and returns either the whole form value or one named field value; the [hook demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--use-jb-form-value) covers both forms.

\`\`\`tsx
const { value: formValues } = useJBFormValue({ formRef });
const { value: bookName } = useJBFormValue<string>({
  formRef,
  name: 'bookName',
});
\`\`\`

By default it listens to \`change\` and \`form-change\`. Pass \`events\` when your fields update on other events such as \`input\`.

\`\`\`tsx
const { value } = useJBFormValue({
  formRef,
  events: ['input', 'change', 'form-change'],
});
\`\`\`

## JBFormValue

Use \`JBFormValue\` to register a React-only value as a virtual form element. The [form value demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-value) shows React-managed values in the form tree.

\`\`\`tsx
import { JBForm, JBFormValue } from 'jb-form/react';

function Page() {
  const [tags, setTags] = useState([]);

  return (
    <JBForm>
      <JBFormValue name="tags" value={tags} onChange={setTags} />
    </JBForm>
  );
}
\`\`\`

## Events

The wrapper event props map directly to the web component events; see the [form test demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-test) for submit and validity handling.

\`\`\`jsx
<JBForm
  onSubmit={(event) => {
    event.preventDefault();
    console.log(event.target.getFormValues());
  }}
  onDirtyChange={(event) => setIsDirty(event.detail.isDirty)}
  onValidityChange={(event) => setIsValid(event.detail.isValid)}
>
  {/* fields */}
</JBForm>
\`\`\`

## Validation

Use \`checkValidity()\` for a silent synchronous check and \`reportValidity()\` to show child validation messages. Use \`jbCheckValidity({ showError: true })\` when async \`jb-validation\` rules or virtual values are involved; compare the imperative flow in the [imperative methods demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--imperative-methods) and the async invalid-element flow in the [spot invalid element demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--spot-invalid-element-test).

\`\`\`jsx
const formRef = useRef(null);

const result = await formRef.current?.jbCheckValidity({ showError: true });
\`\`\`

## Value control

\`JBForm\` collects values from named direct child controls, \`JBFormValue\` virtual elements, and named nested forms; see the [form value demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-value).

\`\`\`jsx
const values = formRef.current?.getFormValues();

formRef.current?.setFormValues({
  firstName: 'Sara',
  age: 32,
});
\`\`\`

Pass \`false\` as the second argument to \`setFormValues(value, false)\` when the new values should not become the dirty-state baseline. The [imperative methods demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--imperative-methods) shows this distinction.

## Dirty state

Use \`onDirtyChange\` for React state and \`ref.current.getFormDirtyStatus()\` for a full tree of dirty fields; nested behavior is shown in the [form tree demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-tree-test).

\`\`\`jsx
<JBForm onDirtyChange={(event) => setIsDirty(event.detail.isDirty)} />
\`\`\`

## Submit

\`JBForm\` intercepts trusted child submit events, runs \`reportValidity()\`, and dispatches \`onSubmit\` only when the aggregate form is valid. See the [form test demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-test).

## Virtual elements

Use \`JBFormValue\` for React-only state that should participate in form values, validation, and dirty checks. Use the lower-level \`ref.current.virtualElements.add(config)\` API only when you need custom behavior beyond the React helper; the [form value demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-value) demonstrates the common case.

## Same-name values

When two or more named children use the same \`name\`, the collected value is a \`TraverseCollection\` map-like value instead of a plain array. See the [same-name demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-with-same-name) and the [value collection documentation](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform-valuecollection--docs).

## Sub forms

Nested \`JBForm\` components can be named and collected by a parent form, as shown in the [form tree demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--form-tree-test).

\`\`\`jsx
<JBForm ref={formRef}>
  <JBForm name="profile">
    {/* profile fields */}
  </JBForm>
</JBForm>
\`\`\`

## Slots and styling

Children render in the default slot of the underlying \`jb-form\`. The form coordinator does not currently expose component-specific CSS parts or CSS variables; see the shared [slots and styling guidance](../README.md#slots-and-styling) and [normal form demo](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform--normal).

## Shared Documentation

For web-component behavior, methods, events, virtual elements, nested forms, and value collection, see the [\`jb-form\` README](../README.md) or the [component documentation](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbform-readme--docs).

## AI agent notes

- Import \`JBForm\`, \`useJBForm\`, \`useJBFormValue\`, or \`JBFormValue\` from \`jb-form/react\`.
- Use a \`ref\` for imperative methods such as \`getFormValues()\`, \`setFormValues()\`, \`reportValidity()\`, and \`jbCheckValidity()\`.
- Use \`onSubmit\`, \`onDirtyChange\`, and \`onValidityChange\` for form workflows.
- Use \`JBFormValue\` for React state that should participate in form values but is not represented by a form control.
- Use \`useJBFormValue({ formRef })\` to subscribe React state to form changes.
- \`onLoad\` is typed by the wrapper, but the current web component dispatches \`init\`, not \`load\`.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBForm/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};