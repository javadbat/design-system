import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-WpqGXe4i.js";import{_ as n,d as r,k as i,u as a}from"./blocks-DAYhss-U.js";import{t as o}from"./mdx-react-shim-BXLRQUZa.js";var s,c=e((()=>{s=`# jb-calendar React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-calendar)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-calendar/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-calendar-react)](https://www.npmjs.com/package/jb-calendar-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-calendar)

React wrapper for \`jb-calendar\`, an inline Jalali/Gregorian calendar picker.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbcalendar)

## Installation

\`\`\`sh
npm install jb-calendar
\`\`\`

\`\`\`jsx
import { JBCalendar } from 'jb-calendar/react';

<JBCalendar />;
\`\`\`

## When to use

Use \`JBCalendar\` when a React view needs an inline calendar picker with Jalali/Gregorian support.

Use \`jb-date-input\` when you need a form input field with label, validation, and text entry.

## Props

| prop | type | description |
| --- | --- | --- |
| \`min\` | \`Date\` | Minimum selectable date. Sets \`dateRestrictions.min\`. |
| \`max\` | \`Date\` | Maximum selectable date. Sets \`dateRestrictions.max\`. |
| \`jalaliMonthList\` | \`string[]\` | Custom Jalali month labels. Must contain exactly 12 labels. |
| \`onSelect\` | \`(event) => void\` | Fired when the user selects an enabled day. Read \`event.target.value\`. |
| \`inputType\` | \`'JALALI' \\| 'GREGORIAN'\` | Typed by the wrapper, but not actively synchronized by the hook. Prefer setting it through a ref. |
| \`direction\` | \`'rtl' \\| 'ltr'\` | Typed by the wrapper, but not actively synchronized by the hook. Prefer setting it through a ref when direction changes after mount. |

## Selection

\`onSelect\` receives the DOM event. The selected value is on \`event.target.value\`.

\`\`\`jsx
<JBCalendar
  onSelect={(event) => {
    console.log(event.target.value);
  }}
/>
\`\`\`

Use a ref for imperative APIs such as \`select\`, \`inputType\`, \`showPersianNumber\`, and \`setMonthList\`.

\`\`\`jsx
import { useEffect, useRef } from 'react';
import { JBCalendar } from 'jb-calendar/react';

function Calendar() {
  const calendarRef = useRef(null);

  useEffect(() => {
    calendarRef.current.inputType = 'GREGORIAN';
    calendarRef.current.select(2026, 6, 16);
  }, []);

  return <JBCalendar ref={calendarRef} />;
}
\`\`\`

## Date restrictions

\`\`\`jsx
<JBCalendar
  min={new Date(2026, 0, 1)}
  max={new Date(2026, 11, 31)}
/>
\`\`\`

## Default visible month

When no date is selected, the calendar opens on its internal default month. Use a ref for lower-level web-component APIs such as \`select()\` when you need to move the visible month imperatively.

## Persian numbers and direction

The web component can display Persian digits and supports both RTL and LTR direction. In React, use a ref for \`showPersianNumber\` or direction changes that must be applied after mount.

## Custom Jalali month labels

\`\`\`jsx
<JBCalendar
  jalaliMonthList={[
    'حمل',
    'ثور',
    'جوزا',
    'سرطان',
    'اسد',
    'سنبله',
    'میزان',
    'عقرب',
    'قوس',
    'جدی',
    'دلو',
    'حوت',
  ]}
/>
\`\`\`

## Custom style

The React component uses the same CSS variables as the web component.

\`\`\`css
.booking-calendar {
  --jb-calendar-day-bg-color-selected: var(--jb-primary);
  --jb-calendar-day-color-selected: var(--jb-white);
}
\`\`\`

\`\`\`jsx
<JBCalendar className="booking-calendar" />
\`\`\`

## Slots and CSS parts

The React wrapper exposes the same slots, CSS parts, and CSS variables as \`jb-calendar\`. Use JSX children with \`slot="..."\` for custom slotted content and style the host with the same CSS variables documented in the web-component README.

## Accessibility notes

\`JBCalendar\` keeps the web component keyboard and selection behavior. Give the surrounding form or section an accessible label when the calendar purpose is not obvious from nearby text.

## Dependencies

\`JBCalendar\` registers and uses the underlying \`jb-calendar\` web component. Date conversion behavior comes from the same dependency chain as the web-component package.

## Shared Documentation

For web-component behavior, methods, events, CSS variables, and the full API, see [\`jb-calendar\`](https://github.com/javadbat/jb-calendar).

## AI agent notes

- Import \`JBCalendar\` from \`jb-calendar/react\`; the wrapper imports and registers the underlying \`jb-calendar\` web component.
- Use \`onSelect\` and read \`event.target.value\`; the event has no \`detail\`.
- Use \`min\`, \`max\`, and \`jalaliMonthList\` for the props actively wired by the wrapper hooks.
- Use a ref for \`select()\`, \`inputType\`, \`showPersianNumber\`, \`direction\`, \`setMonthList()\`, and \`setupStyleBaseOnCssDirection()\`.
- Use \`jb-date-input\` instead of \`JBCalendar\` when the UI must behave as a form input.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCalendar/React Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};