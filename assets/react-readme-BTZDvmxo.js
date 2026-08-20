import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CKFpjfZi.js";import{d as n,f as r,j as i,y as a}from"./blocks-DMsn289S.js";import{t as o}from"./mdx-react-shim-9EA0vkyW.js";var s,c=e((()=>{s=`# jb-calendar React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-calendar)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-calendar/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-calendar-react)](https://www.npmjs.com/package/jb-calendar-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-calendar)

React wrapper for \`jb-calendar\`, an inline Jalali/Gregorian calendar picker.

## Demo

- [Demo](https://javadbat.github.io/design-system/?path=/docs/components-jbcalendar)

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

## Using With JS Frameworks

This entry point is specifically for React. For Angular, Vue, Nuxt, Svelte, SolidJS, Lit, and other integrations, see [Using With JS Frameworks in the web-component README](../README.md#using-with-js-frameworks).

## API reference

### Props

| prop | type | description |
| --- | --- | --- |
| \`min\` | \`Date\` | Minimum selectable date. Sets \`dateRestrictions.min\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--min-max) |
| \`max\` | \`Date\` | Maximum selectable date. Sets \`dateRestrictions.max\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--min-max) |
| \`jalaliMonthList\` | \`string[]\` | Custom Jalali month labels. Must contain exactly 12 labels. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--custom-month-name) |
| \`onSelect\` | \`(event) => void\` | Fired when the user selects an enabled day. Read \`event.target.value\`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--value-test) |
| \`inputType\` | \`'JALALI' \\| 'GREGORIAN'\` | Calendar system used for input and displayed values. [Jalali Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--jalali) · [Gregorian Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--gregorian) |
| \`direction\` | \`'rtl' \\| 'ltr'\` | Calendar layout direction. [RTL Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--right-to-left) |

### Attributes

React consumers should use props instead of setting web-component attributes directly. \`jb-calendar\` currently has no public HTML attributes; see the [web-component attributes reference](../README.md#attributes).

### Properties

React forwards supported custom-element properties such as \`inputType\` and \`direction\`. Use a ref for lower-level properties such as \`showPersianNumber\`; see the complete [web-component properties reference](../README.md#properties).

### Methods

Use a ref to call methods on the underlying \`JBCalendarWebComponent\`; see the imperative \`select()\` and \`selectToday()\` [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--imperative-selection).

For all available methods, see the [web-component methods reference](../README.md#methods).

### Events

\`onSelect\` receives the selection event. Read the selected date from \`event.target.value\`; see the [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--value-test).

## Select a date

\`onSelect\` receives the DOM event. The selected value is on \`event.target.value\`; see the [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--value-test).

\`\`\`jsx
<JBCalendar
  onSelect={(event) => {
    console.log(event.target.value);
  }}
/>
\`\`\`

Use a ref for imperative APIs such as \`select\`, \`showPersianNumber\`, and \`setMonthList\`; see the [imperative selection Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--imperative-selection).

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

## Jalali and Gregorian input

Set \`inputType\` to choose the calendar system; see the [Jalali Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--jalali) or [Gregorian Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--gregorian).

\`\`\`jsx
<JBCalendar inputType="JALALI" />
<JBCalendar inputType="GREGORIAN" />
\`\`\`

## Min and max restrictions

The restricted date range is shown in the [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--min-max).

\`\`\`jsx
<JBCalendar
  min={new Date(2026, 0, 1)}
  max={new Date(2026, 11, 31)}
/>
\`\`\`

## Default visible month

Initial-month configuration is shared low-level behavior that must be applied before the underlying element connects. See the [web-component default visible month section](../README.md#default-visible-month) for the supported setup and a configured initial-month [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--default-visible-month).

## Persian numbers

Set the underlying \`showPersianNumber\` property through a ref to render Persian digits; see the [Persian-digit Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--persian-numbers).

\`\`\`jsx
import { useEffect, useRef } from 'react';

function PersianCalendar() {
  const calendarRef = useRef(null);

  useEffect(() => {
    calendarRef.current.showPersianNumber = true;
  }, []);

  return <JBCalendar ref={calendarRef} inputType="JALALI" />;
}
\`\`\`

## Direction

Set \`direction\` to \`rtl\` or \`ltr\`. For direction changes after mount, the underlying element also exposes \`setupStyleBaseOnCssDirection()\`; see the [RTL Jalali Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--right-to-left) or [RTL Gregorian Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--rtl-gregorian).

\`\`\`jsx
<JBCalendar direction="rtl" inputType="JALALI" />
\`\`\`

## Change month labels

Pass \`jalaliMonthList\` to replace the Jalali month labels. For Gregorian labels or imperative updates, use \`setMonthList()\` through a ref; see the [web-component month-label section](../README.md#change-month-labels) and the [custom Jalali month-label Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--custom-month-name).

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

Styling is shared with the web component. See the [web-component custom style section](../README.md#custom-style) for CSS variables, CSS parts, recipes, and the live gallery.

## Slots and CSS parts

\`jb-calendar\` does not currently expose public slots. Its CSS parts are shared with the web component; see the [web-component slots and CSS parts section](../README.md#slots-and-css-parts).

## Accessibility notes

Accessibility behavior is provided by the underlying web component. See the [web-component accessibility notes](../README.md#accessibility-notes) and inspect the interactive calendar [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbcalendar--normal).

## Dependencies

\`JBCalendar\` registers and uses the underlying \`jb-calendar\` web component. See the shared [web-component dependencies](../README.md#dependencies).

## Related Docs

- See the [\`jb-calendar\` web-component README](../README.md) for shared behavior and the complete element API.
- See the [JB Design System component list](https://javadbat.github.io/design-system/) for more components.
- Use the [contribution guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) to contribute to this component.

## AI agent notes

- Import \`JBCalendar\` from \`jb-calendar/react\`; the wrapper imports and registers the underlying \`jb-calendar\` web component.
- Use \`onSelect\` and read \`event.target.value\`; the event has no \`detail\`.
- Use \`min\`, \`max\`, \`jalaliMonthList\`, \`inputType\`, and \`direction\` as props.
- Use a ref for \`select()\`, \`selectToday()\`, \`showPersianNumber\`, \`setMonthList()\`, and \`setupStyleBaseOnCssDirection()\`.
- Use \`jb-date-input\` instead of \`JBCalendar\` when the UI must behave as a form input.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCalendar/React Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};