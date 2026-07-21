import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BdsXi1cQ.js";import{A as n,d as r,u as i,v as a}from"./blocks-qp4RPJRe.js";import{t as o}from"./mdx-react-shim-BTqBeG44.js";var s,c=e((()=>{s=`# jb-calendar

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-calendar)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-calendar/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-calendar)](https://www.npmjs.com/package/jb-calendar)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-calendar)

Jalali and Gregorian calendar interface web component.

- Supports Jalali and Gregorian date selection.
- Supports day, month, and year selection views.
- Supports min/max date restrictions.
- Supports Persian digit rendering.
- Supports RTL and LTR layout.
- Customizable with CSS variables.

## When to use

Use \`jb-calendar\` when you need an inline calendar picker UI.

Use [\`jb-date-input\`](https://github.com/javadbat/jb-date-input) when you need a full date input field with label, validation, text entry, and form input behavior.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbcalendar)
- [CodePen](https://codepen.io/javadbat/pen/poRKYEY)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--calendar%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-calendar/tree/main/react)

## Installation

\`\`\`sh
npm install jb-calendar
\`\`\`

\`\`\`js
import 'jb-calendar';
\`\`\`

\`\`\`html
<jb-calendar></jb-calendar>
\`\`\`

## API reference

### Attributes

\`jb-calendar\` does not currently define public HTML attributes. Configure it with properties and methods.

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| \`value\` | \`JBCalendarValue\` | no | Selected date in the active \`inputType\`. Set \`year\`, \`month\`, and \`day\` together. |
| \`inputType\` | \`'JALALI' \\| 'GREGORIAN'\` | no | Calendar date system used for input and displayed values. |
| \`activeSection\` | \`'DAY' \\| 'MONTH' \\| 'YEAR'\` | no | Visible selection section. |
| \`showPersianNumber\` | \`boolean\` | no | Renders numbers with Persian digits when \`true\`. |
| \`direction\` | \`'rtl' \\| 'ltr'\` | no | Calendar layout direction. Leave unset to use computed CSS direction. |
| \`cssDirection\` | \`'rtl' \\| 'ltr'\` | yes | Computed CSS direction of the host. |
| \`defaultCalendarData\` | \`{ jalali, gregorian }\` | no | Default visible year/month used when no date is selected. |
| \`dateRestrictions\` | \`{ min: Date \\| null; max: Date \\| null }\` | no | Mutable min/max date restriction object. Set \`dateRestrictions.min\` and \`dateRestrictions.max\`. |
| \`data\` | \`JBCalendarData\` | no | Internal visible calendar state: \`selectedYear\`, \`selectedMonth\`, and \`yearSelectionRange\`. |

\`\`\`ts
type JBCalendarValue = {
  year: number | null;
  month: number | null;
  day: number | null;
};
\`\`\`

### Methods

| name | returns | description |
| --- | --- | --- |
| \`select(year, month, day)\` | \`void\` | Selects a date in the current \`inputType\` and updates \`value\`. |
| \`selectToday()\` | \`void\` | Selects today in the current \`inputType\`. |
| \`setMonthList(inputType, monthList)\` | \`void\` | Replaces the 12 month labels for \`JALALI\` or \`GREGORIAN\`. |
| \`setupStyleBaseOnCssDirection(dir?)\` | \`void\` | Refreshes direction-sensitive layout classes from \`dir\` or computed host direction. |
| \`checkIsDayDisable(dayDate)\` | \`{ min; max; isAllValid }\` | Checks whether a \`Date\` is valid against min/max restrictions. |

### Events

| event | detail | description |
| --- | --- | --- |
| \`init\` | none | Dispatched during construction after default properties are initialized. |
| \`load\` | none | Dispatched from \`connectedCallback\` before layout initialization. |
| \`select\` | none | Dispatched when the user selects an enabled day. Read \`event.target.value\`. |

\`\`\`js
const calendar = document.querySelector('jb-calendar');

calendar.addEventListener('select', (event) => {
  console.log(event.target.value);
});
\`\`\`

## Select a date

\`\`\`js
const calendar = document.querySelector('jb-calendar');

calendar.select(1402, 8, 24);
console.log(calendar.value); // { year: 1402, month: 8, day: 24 }
\`\`\`

You can also set \`value\` directly:

\`\`\`js
calendar.value = {
  year: 2026,
  month: 6,
  day: 16,
};
\`\`\`

## Jalali and Gregorian input

Set \`inputType\` to \`JALALI\` or \`GREGORIAN\`.

\`\`\`js
const calendar = document.querySelector('jb-calendar');

calendar.inputType = 'GREGORIAN';
calendar.select(2026, 6, 16);
\`\`\`

## Default visible month

\`defaultCalendarData\` controls the year and month shown before the user selects a date.

\`\`\`js
document.querySelector('jb-calendar').defaultCalendarData = {
  gregorian: {
    year: 2026,
    month: 6,
  },
  jalali: {
    year: 1405,
    month: 3,
  },
};
\`\`\`

## Persian numbers

\`\`\`js
document.querySelector('jb-calendar').showPersianNumber = true;
\`\`\`

## Min and max restrictions

Set restrictions with JavaScript \`Date\` objects. The dates are compared against the currently rendered date system internally.

\`\`\`js
const calendar = document.querySelector('jb-calendar');

calendar.dateRestrictions.min = new Date(2026, 0, 1);
calendar.dateRestrictions.max = new Date(2026, 11, 31);
\`\`\`

## Change month labels

Use \`setMonthList\` with exactly 12 labels.

\`\`\`js
const calendar = document.querySelector('jb-calendar');

calendar.setMonthList('JALALI', [
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
]);

calendar.setMonthList('GREGORIAN', [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
]);
\`\`\`

## Direction

The component reads CSS direction when it mounts. If your app changes direction after mount, call \`setupStyleBaseOnCssDirection()\` or set \`direction\`.

\`\`\`js
const calendar = document.querySelector('jb-calendar');

calendar.setupStyleBaseOnCssDirection();
calendar.setupStyleBaseOnCssDirection('ltr');
calendar.direction = 'rtl';
\`\`\`

## Slots and CSS parts

\`jb-calendar\` does not currently expose public slots. It exposes CSS parts for navigator, day, month, year, and swipe-up hint internals; see [Styling](https://javadbat.github.io/design-system/?path=/docs/components-jbcalendar-styling).

## Custom style

Set CSS variables in the parent scope of the component.

For complete styling guidance, live examples, and copyable style recipes, see [Styling](https://javadbat.github.io/design-system/?path=/docs/components-jbcalendar-styling).

\`\`\`css
jb-calendar {
  --jb-calendar-day-bg-color-selected: var(--jb-primary);
  --jb-calendar-day-color-selected: var(--jb-white);
  --jb-calendar-arrow-button-border-radius: 62.4375rem;
}
\`\`\`

## Accessibility notes

- Navigator buttons have localized \`title\` attributes.
- Day, month, and year choices are rendered as clickable elements inside shadow DOM.
- The component is an inline calendar UI, not a form-associated input. Use \`jb-date-input\` when native form input behavior is required.

## Dependencies

\`jb-calendar\` uses [\`date-fns\`](https://github.com/date-fns/date-fns) and [\`date-fns-jalali\`](https://github.com/date-fns-jalali/date-fns-jalali) for Gregorian and Jalali date calculations.

## Related Docs

- See [\`jb-calendar/react\`](https://github.com/javadbat/jb-calendar/tree/main/react) if you want to use this component in React.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-calendar\` once before using \`<jb-calendar>\`.
- Configure the component with properties and methods; it does not expose public HTML attributes.
- Use \`inputType = 'JALALI'\` or \`inputType = 'GREGORIAN'\` before setting/selecting values when the date system matters.
- Listen to \`select\` and read \`event.target.value\`; the event does not include selected date data in \`event.detail\`.
- Use \`dateRestrictions.min\` and \`dateRestrictions.max\` with JavaScript \`Date\` objects.
- Use \`jb-date-input\` instead of \`jb-calendar\` when a form-associated date input field is needed.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes the JavaScript/TypeScript class export and \`exports.kind: "custom-element-definition"\` maps the \`jb-calendar\` tag name to that class.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCalendar/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};