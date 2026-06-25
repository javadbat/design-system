import{j as e,M as i,o}from"./index-Bm-ihScP.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import"./iframe-aUp4bIN_.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const r=`# jb-switch React component

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
`;function a(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/form elements/JBSwitch/React Readme"}),`
`,e.jsx(o,{children:r})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a()}export{g as default};
