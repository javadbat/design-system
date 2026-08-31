import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-R8sYsw_T.js";import{d as n,f as r,j as i,y as a}from"./blocks-D8Klu8h2.js";import{t as o}from"./mdx-react-shim-D95ljHKT.js";var s,c=e((()=>{s=`# jb-tab React components

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-tab/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-tab)](https://www.npmjs.com/package/jb-tab)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-tab)

React wrappers for the accessible, composable [\`jb-tab\`](https://github.com/javadbat/jb-tab) custom elements. The wrappers register their corresponding web components, forward React props, and expose typed custom events.

- Supports controlled and uncontrolled selection.
- Supports horizontal and vertical keyboard navigation.
- Supports nullable selection, disabled triggers, and duplicate panels.
- Supports indicator color and list size variants.
- Forwards refs to the underlying custom elements.

## Demo

- [Basic tabs](https://javadbat.github.io/design-system/?path=/story/components-jbtab--basic)
- [Controlled React tabs](https://javadbat.github.io/design-system/?path=/story/components-jbtab--controlled-react)
- [Colored indicators](https://javadbat.github.io/design-system/?path=/story/components-jbtab--colored-indicators)
- [Size variants](https://javadbat.github.io/design-system/?path=/story/components-jbtab--size-variants)
- [Vertical nested layout](https://javadbat.github.io/design-system/?path=/story/components-jbtab--nested-layout)
- [Style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbtab-style--gallery)

## Installation

\`\`\`sh
npm i jb-tab
\`\`\`

Import each wrapper from its React subpath:

\`\`\`tsx
import { JBTab } from "jb-tab/react";
import { JBTabList } from "jb-tab/list/react";
import { JBTabTrigger } from "jb-tab/trigger/react";
import { JBTabContent } from "jb-tab/content/react";
\`\`\`

## Usage

\`\`\`tsx
import { JBTab } from "jb-tab/react";
import { JBTabList } from "jb-tab/list/react";
import { JBTabTrigger } from "jb-tab/trigger/react";
import { JBTabContent } from "jb-tab/content/react";

export function AccountTabs() {
  return (
    <JBTab defaultValue="home">
      <JBTabList aria-label="Account sections">
        <JBTabTrigger value="home">Home</JBTabTrigger>
        <JBTabTrigger value="security">Security</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="home">Home content</JBTabContent>
      <JBTabContent value="security">Security content</JBTabContent>
    </JBTab>
  );
}
\`\`\`

## When to use

Use these wrappers when a React interface needs related views within the same page and only one view should be active at a time. Use regular links or a router when each item represents a distinct page or URL.

## Props

All wrappers accept standard React element props and forward refs to their underlying custom elements.

### \`JBTab\`

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`string \\| null\` | Controlled selected value. |
| \`defaultValue\` | \`string \\| null\` | Initial value used when \`value\` is absent. |
| \`nullable\` | \`boolean\` | Keeps the initial selection empty instead of choosing the first enabled trigger. |
| \`onChange\` | \`(event: JBTabChangeEvent) => void\` | Called when the selected value changes. |

### \`JBTabList\`

| prop | type | description |
| --- | --- | --- |
| \`orientation\` | \`'horizontal' \\| 'vertical'\` | Controls layout and arrow-key direction. Defaults to \`horizontal\`. |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | Applies one size to all direct triggers. Defaults to \`md\`. |

### \`JBTabTrigger\`

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`string\` | Required value used to select matching content. Trigger values must be unique. |
| \`disabled\` | \`boolean\` | Prevents pointer and keyboard selection. |
| \`color\` | \`JBTabTriggerColor\` | Design-system color variant or any valid CSS color for the indicator. |
| \`onSelect\` | \`(event: JBTabSelectEvent) => void\` | Called when this trigger is selected by the user. |

### \`JBTabContent\`

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`string\` | Required value matched against the owning \`JBTab\`. Multiple panels may share a value. |
| \`hidden\` | \`boolean\` | Exposes or explicitly overrides panel visibility. |

## Controlled value

Use \`value\` and \`onChange\` for controlled state. The \`change\` event detail includes \`value\`, \`previousValue\`, and the trigger that initiated the change. See the [controlled React demo](https://javadbat.github.io/design-system/?path=/story/components-jbtab--controlled-react).

\`\`\`tsx
import { useState } from "react";
import { JBTab } from "jb-tab/react";
import { JBTabList } from "jb-tab/list/react";
import { JBTabTrigger } from "jb-tab/trigger/react";
import { JBTabContent } from "jb-tab/content/react";

function ControlledTabs() {
  const [value, setValue] = useState("home");

  return (
    <JBTab value={value} onChange={event => setValue(event.detail.value)}>
      <JBTabList aria-label="Sections">
        <JBTabTrigger value="home">Home</JBTabTrigger>
        <JBTabTrigger value="about">About</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="home">Home content</JBTabContent>
      <JBTabContent value="about">About content</JBTabContent>
    </JBTab>
  );
}
\`\`\`

Omit \`value\` and use \`defaultValue\` for an uncontrolled initial selection. When neither is supplied, the first enabled trigger is selected unless \`nullable\` is true.

## Events

| prop | event target | detail | description |
| --- | --- | --- | --- |
| \`onChange\` | \`JBTab\` | \`{ value, previousValue, trigger }\` | Fires after the owning tab's value changes. |
| \`onSelect\` | \`JBTabTrigger\` | \`{ value, trigger }\` | Fires when a user selects a trigger. |

Both underlying custom events bubble and cross shadow DOM boundaries.

## Layout, size, and color

Triggers must be direct children of \`JBTabList\`, but the list and panels may be nested in ordinary layout elements inside \`JBTab\`. See the [vertical nested layout demo](https://javadbat.github.io/design-system/?path=/story/components-jbtab--nested-layout).

\`\`\`tsx
<JBTab>
  <nav>
    <JBTabList orientation="vertical" size="lg" aria-label="Profile sections">
      <JBTabTrigger value="profile" color="primary">Profile</JBTabTrigger>
      <JBTabTrigger value="billing" color="#ec4899">Billing</JBTabTrigger>
    </JBTabList>
  </nav>
  <main>
    <JBTabContent value="profile">Profile content</JBTabContent>
    <JBTabContent value="billing">Billing content</JBTabContent>
  </main>
</JBTab>
\`\`\`

Built-in colors are \`primary\`, \`secondary\`, \`positive\`, \`danger\`, \`warning\`, \`light\`, \`dark\`, and the \`primary-subtle\`, \`secondary-subtle\`, \`positive-subtle\`, \`danger-subtle\`, and \`warning-subtle\` variants.

## Styling

The React wrappers use the same CSS parts and custom properties as the web components. \`JBTabList\` exposes \`list\` and \`indicator\`; \`JBTabTrigger\` exposes \`content\`.

\`\`\`css
.account-tabs {
  --jb-tab-list-background: #f3f4f6;
  --jb-tab-list-padding: 0.25rem;
  --jb-tab-list-indicator-duration: 180ms;
  --jb-tab-trigger-border-radius: 0.5rem;
  --jb-tab-trigger-padding: 0.5rem 1rem;
}
\`\`\`

See the [colored indicator](https://javadbat.github.io/design-system/?path=/story/components-jbtab--colored-indicators) and [size variant](https://javadbat.github.io/design-system/?path=/story/components-jbtab--size-variants) demos.

## Accessibility notes

Provide \`aria-label\` or \`aria-labelledby\` on every \`JBTabList\`. The components manage tab roles, trigger-to-panel relationships, focus, and keyboard selection. Horizontal lists use Left/Right arrows; vertical lists use Up/Down arrows. Home and End jump to the first and last enabled trigger.

## Shared documentation

For web-component selection rules, panel visibility and animation, the complete CSS-variable list, and keyboard behavior, see the [\`jb-tab\` README](../README.md).

## Related docs

- See [\`jb-tab\`](https://github.com/javadbat/jb-tab) to use the components without React.
- See the [JB Design System component list](https://javadbat.github.io/design-system/) for more components.
- Use the [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) to contribute to this component.

## AI agent notes

- Import the four wrappers from \`jb-tab/react\`, \`jb-tab/list/react\`, \`jb-tab/trigger/react\`, and \`jb-tab/content/react\`.
- Keep \`JBTabTrigger\` components as direct children of \`JBTabList\`; panels may be nested elsewhere beneath \`JBTab\`.
- Use \`value\` plus \`onChange\` for controlled selection, or \`defaultValue\` for an uncontrolled initial selection.
- Read the selected value from \`event.detail.value\`, not \`event.target.value\`.
- Use \`onSelect\` on \`JBTabTrigger\` and \`onChange\` on \`JBTab\`.
- Give every \`JBTabList\` an accessible name.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBTab/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};