import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BdsXi1cQ.js";import{A as n,d as r,u as i,v as a}from"./blocks-qp4RPJRe.js";import{t as o}from"./mdx-react-shim-BTqBeG44.js";var s,c=e((()=>{s=`# jb-switch React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-switch)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-switch/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-switch-react)](https://www.npmjs.com/package/jb-switch-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-switch)

React wrapper for [\`jb-switch\`](https://github.com/javadbat/jb-switch). It imports and registers the underlying form-associated switch web component.

## Demo

- [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-switch)
- [CodeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBSwitch.tsx)
- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbswitch)

## Installation

\`\`\`sh
npm install jb-switch
\`\`\`

\`\`\`jsx
import { JBSwitch } from 'jb-switch/react';

<JBSwitch value={enabled} trueTitle="Active" falseTitle="Inactive" />;
\`\`\`

## When to use

Use \`JBSwitch\` for a boolean setting that can be toggled on or off and should show both active and inactive labels.

Use \`JBCheckbox\` when the UI represents agreement, selection, or a single boolean option in a form rather than an immediate setting.

## Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`boolean\` | Current boolean value. |
| \`name\` | \`string\` | Form field name. |
| \`trueTitle\` | \`string\` | Caption shown on the true side. |
| \`falseTitle\` | \`string\` | Caption shown on the false side. |
| \`isLoading\` | \`boolean\` | Shows loading animation. |
| \`disabled\` | \`boolean\` | Disables user interaction. |
| \`required\` | \`boolean\` | Requires the value to be true for validation. |
| \`validationList\` | \`ValidationItem<boolean>[]\` | Custom validation rules from \`jb-validation\`. |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onLoad\` | \`load\` | Called before initialization. |
| \`onInit\` | \`init\` | Called after initialization. |
| \`onBeforeChange\` | \`before-change\` | Cancellable event called before committing a user-triggered value change. |
| \`onChange\` | \`change\` | Cancellable event called after value changes. Prevent default to revert the value. |

## Controlled value

\`\`\`jsx
const [enabled, setEnabled] = useState(false);

<JBSwitch
  value={enabled}
  trueTitle="Active"
  falseTitle="Inactive"
  onChange={(event) => setEnabled(event.target.value)}
/>;
\`\`\`

## Value

\`value\` is a boolean. Read \`event.target.value\` in \`onBeforeChange\` for the next value and in \`onChange\` for the committed value.

## Loading state

\`\`\`jsx
<JBSwitch
  value={enabled}
  isLoading={isSaving}
  trueTitle="Enabled"
  falseTitle="Disabled"
/>;
\`\`\`

## Cancellable change

\`\`\`jsx
<JBSwitch
  value={enabled}
  onBeforeChange={(event) => {
    if (event.target.value === true && !canEnable()) {
      event.preventDefault();
    }
  }}
  onChange={(event) => setEnabled(event.target.value)}
/>;
\`\`\`

## Validation

\`\`\`jsx
<JBSwitch
  required
  validationList={[
    {
      validator: (value) => value === true,
      message: 'Switch must be enabled',
    },
  ]}
/>;
\`\`\`

## Styling

The React component uses the same CSS variables and parts as the web component.

\`\`\`css
.feature-switch {
  --jb-switch-bg-color-active: green;
  --jb-switch-ring-color-active: green;
}
\`\`\`

\`\`\`jsx
<JBSwitch className="feature-switch" value={enabled} />
\`\`\`

## CSS parts and variables

Use the same CSS parts and variables as the web component. The \`Styling\` section above shows the React class-based pattern.

## Accessibility notes

Use clear \`trueTitle\` and \`falseTitle\` text so the current state is understandable. Set \`disabled\` while a save operation is in progress if the setting should not be toggled repeatedly.

## Shared Documentation

For web-component behavior, form association, validation, events, CSS parts, and CSS variables, see [\`jb-switch\`](https://github.com/javadbat/jb-switch).

## Related Docs

- See [\`jb-validation\`](https://github.com/javadbat/jb-validation) for validation rules.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBSwitch\` from \`jb-switch/react\`; the wrapper imports and registers the underlying \`jb-switch\` web component.
- Use \`value\` as a boolean prop.
- Use \`isLoading\` in React, not the HTML \`loading\` attribute.
- Use \`trueTitle\` and \`falseTitle\`, not \`true-title\` and \`false-title\`.
- Use \`event.target.value\` in \`onChange\` for the new boolean value.
- Use \`onBeforeChange\` to cancel before committing a user-triggered change.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBSwitch/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};