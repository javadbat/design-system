import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BTYt1Ura.js";import{_ as n,d as r,k as i,u as a}from"./blocks-CIvnDLFF.js";import{t as o}from"./mdx-react-shim-Dpbc4vVP.js";var s,c=e((()=>{s=`# JBSearchbar React Component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-searchbar)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-searchbar/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-searchbar-react)](https://www.npmjs.com/package/jb-searchbar-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-searchbar)

React wrapper for [\`jb-searchbar\`](https://github.com/javadbat/jb-searchbar). It exports \`JBSearchbar\` and \`JBExtraFilter\`.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/story/components-jbsearchbar)

## Installation

\`\`\`sh
npm i jb-searchbar
\`\`\`

\`\`\`jsx
import { JBSearchbar, JBExtraFilter } from 'jb-searchbar/react';
\`\`\`

## Basic usage

\`\`\`jsx
<JBSearchbar onSearch={(event) => console.log(event.target.value)}>
  <div slot="filter">
    <JBInput name="textFilter" placeholder="Text filter" />
  </div>
</JBSearchbar>
\`\`\`

## Props

### JBSearchbar

| prop | type | description |
| --- | --- | --- |
| \`searchOnChange\` | \`boolean\` | Runs search after selected extra filters change. |
| \`isLoading\` | \`boolean\` | Plays or stops the search icon loading animation. |
| \`size\` | \`'sm' \\| 'md'\` | Visual size variant. |
| \`onLoad\` | \`(event) => void\` | Called from the web component \`load\` event. |
| \`onInit\` | \`(event) => void\` | Called from the web component \`init\` event. |
| \`onSearch\` | \`(event) => void\` | Called when search is triggered. |

### JBExtraFilter

| prop | type | description |
| --- | --- | --- |
| \`placeholder\` | \`string\` | Placeholder for the filter select. |
| \`size\` | \`'sm' \\| 'md'\` | Visual size variant. |
| \`onExtractDisplayValue\` | \`ExtractDisplayValueCallback\` | Converts a raw filter value to the chip display string. |
| \`onLoad\` | \`(event) => void\` | Called from the web component \`load\` event. |
| \`onInit\` | \`(event) => void\` | Called from the web component \`init\` event. |
| \`onIntentSubmit\` | \`(event) => void\` | Called when the user submits an extra filter value. |

## Normal filters

\`\`\`jsx
<JBSearchbar onSearch={(event) => console.log(event.target.value)}>
  <div slot="filter">
    <JBInput name="firstName" placeholder="First name" />
    <JBNumberInput name="age" placeholder="Age" />
  </div>
</JBSearchbar>
\`\`\`

## Extra filters

\`JBExtraFilter\` automatically renders with \`slot="extra"\`.

\`\`\`jsx
<JBSearchbar onSearch={(event) => console.log(event.target.value)}>
  <JBExtraFilter placeholder="Choose filter">
    <JBInput name="firstName" data-label="First name" />
    <JBNumberInput name="age" data-label="Age" data-max-count={1} />
  </JBExtraFilter>
</JBSearchbar>
\`\`\`

## Display value formatting

\`\`\`tsx
<JBExtraFilter
  onExtractDisplayValue={({ name, value, dom }) => {
    if (name === 'createdAt') {
      return dom.inputValue;
    }
    return String(value);
  }}
>
  <JBDateInput name="createdAt" data-label="Created at" />
</JBExtraFilter>
\`\`\`

## Search on change

\`\`\`jsx
<JBSearchbar searchOnChange onSearch={(event) => console.log(event.target.value)}>
  <JBExtraFilter>
    <JBInput name="title" data-label="Title" />
  </JBExtraFilter>
</JBSearchbar>
\`\`\`

## Loading state

\`\`\`jsx
<JBSearchbar isLoading={isSearching}>
  <div slot="filter">
    <JBInput name="query" placeholder="Search" />
  </div>
</JBSearchbar>
\`\`\`

## Styling

The React components use the same CSS variables and parts as the web components.

\`\`\`css
.report-searchbar {
  --jb-searchbar-filter-item-bg-color: #2563eb;
  --jb-searchbar-filter-item-color: #fff;
}
\`\`\`

\`\`\`jsx
<JBSearchbar className="report-searchbar" />
\`\`\`

## Shared Documentation

For filter behavior, value shape, slots, web-component events, CSS parts, and CSS variables, see [\`jb-searchbar\`](https://github.com/javadbat/jb-searchbar).

## Related Docs

- See [\`jb-searchbar\`](https://github.com/javadbat/jb-searchbar) if you want to use this component as a pure JavaScript web component.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBSearchbar\` and \`JBExtraFilter\` from \`jb-searchbar/react\`.
- Put normal filters inside a wrapper with \`slot="filter"\`.
- Use \`JBExtraFilter\` for optional filters; it already sets \`slot="extra"\`.
- Add \`name\` and \`data-label\` to filter template elements.
- Use \`event.target.value\` in \`onSearch\` to read collected filter values.
- Use \`searchOnChange\`, not \`search-on-change\`, in React.
- Use \`onExtractDisplayValue\` to customize selected chip display text.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBSearchbar/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};