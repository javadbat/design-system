import{j as e,M as o,m as r}from"./index-DwBkV2lV.js";import{useMDXComponents as c}from"./index-CH6z84fh.js";import"./iframe-BgMLrKtL.js";import"./index-DP23ewiS.js";import"./index-BGsmrW1E.js";import"./index-FCbevRKN.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`# jb-calendar

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-calendar)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-calendar/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-calendar)](https://www.npmjs.com/package/jb-calendar)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-calendar)


pure js jalali calendar interface web component
sample:  <https://codepen.io/javadbat/pen/poRKYEY>

 - support jalali date as well as gregorian date
 - customizable theme with css variable so you can implement dark mode too
 - support typescript
 
## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbcalendar)

## using with JS frameworks

- [<img src="https://img.shields.io/badge/jb--calendar/react-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-calendar/tree/main/react)

## installation

\`\`\`sh
npm install jb-calendar
\`\`\`

## usage

\`\`\`html
    <jb-calendar></jb-calendar>
\`\`\`

in frameworks for example React:

\`\`\`jsx
import 'jb-calendar'
function myHOC(){
    return(
        <jb-calendar></jb-calendar>   
    )
}
\`\`\`

### select value

\`\`\`js
    document.querySelector('jb-calendar').select(year,month,day);
    // for example:
    document.querySelector('jb-calendar').select(1399,8,24);
\`\`\`

you can write wrapper for it in any js framework you use and it will compatible with react, vue, angular, ...

## dependency

we use \`date-fns\` and \`date-fns-jalali\` to manege calendar jalali data

## events

\`\`\`js
//when defualt property are defined best time for impl your config like min and max date
document.querySelector('jb-calendar').addEventListener('init',this.onCalendarElementInitiated);

//when calendar init all property and function and dom created and bind successully
document.querySelector('jb-calendar').addEventListener('load',this.onCalendarElementLoaded);

//when user select a selectable day on calendar
document.querySelector('jb-calendar').addEventListener('select',this.onDaySelected);
\`\`\`

## Jalali and Gregorian Date input

in jb-calendar you can set date input type to be jalali or gregorian and change it whenever you want by simple set \`dateInput\` to \`JALALI\` or \`GREGORIAN\`.

\`\`\`js
    document.querySelector('jb-calendar').dateInput = \`GREGORIAN\`;
\`\`\`
## set default selected day and month

you can say which date is shown by default in component when loaded like this: 

\`\`\`javascript
document.querySelector('jb-calendar').defaultCalendarData = {
            gregorian:{
                year: 2022,
                month:1,
            },
            jalali:{
                year:1400,
                month:1,
            }
        };
\`\`\`
if you not set this the default will be today year and month

## persian number

you can set \`showPersianNumber\` so calendar number format change to persian number char for example in year instead of \`1400\` you will see \`۱۴۰۰\`.

\`\`\`javascript

document.querySelector('jb-calendar').showPersianNumber = true;

\`\`\`
## min and max Restriction

\`\`\`js
dateRestrictions.min = new Date();
dateRestrictions.max = new Date();
\`\`\`

## Change Month List
you may want to change the default month list for both  of Jalali and Gregorian calendars base on your country month labels. here how you can do it:
\`\`\`js
document.querySelector('jb-calendar').setMonthList('JALALI',['حَمَل','ثَور','جَوزا','سَرَطان','اَسَد','سُنبُله','میزان','عَقرَب','قَوس','جَدْی','دَلو','حوت']);
document.querySelector('jb-calendar').setMonthList('GREGORIAN',['1','2','3','4','5','6','7','8','9','10','11','12']);
\`\`\`
## change direction

jb-calendar get it's direction base on css direction (user agent direction actually) but because in JavaScript there is no way to detect css direction change we just apply direction when calendar mounted to the DOM tree. if in any case your app direction change for example on language change you may need to update calendar direction. to doing so just call \`setupStyleBaseOnCssDirection method\` or set \`calendarDom.direction = 'rtl' | 'ltr'\` .

\`\`\`js
//get direction automatically from user agent
document.querySelector('jb-calendar').setupStyleBaseOnCssDirection();
// provide direction manually
document.querySelector('jb-calendar').setupStyleBaseOnCssDirection("ltr");
document.querySelector('jb-calendar').setupStyleBaseOnCssDirection("rtl");
// you can also do it like this too.
document.querySelector('jb-calendar').direction = "rtl";
document.querySelector('jb-calendar').setupStyleBaseOnCssDirection();
\`\`\`

### set custom style

in some cases in your project you need to change default style of web-component for example you need different color or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component

| css variable name                        | description                                                                                   |
| -------------                            | -------------                                                                                 |
| --jb-calendar-color                      | general text color of component                                                               |
| --jb-calendar-arrow-button-bgcolor       | background color of next and prev button                                                      |
| --jb-calendar-arrow-button-border-radius | border radius of arrow buttons                                                                | 
| --jb-calendar-day-text-color             | day text color                                                                                |
| --jb-calendar-day-text-color-disabled    | day text color when day in not available for select                                           |
| --jb-calendar-day-text-color-today       | today day text color                                                                          |
| --jb-calendar-day-bgcolor-selected       | selected day background color                                                                 |
| --jb-calendar-day-bgcolor-selected-hover | selected day background color on hover                                                        |
| --jb-calendar-day-bgcolor-hover          | day background color on hover                                                                 |
| --jb-calendar-status-point-bgcolor-today | background color of small circle under today text                                             |
| --jb-calendar-status-point-border-color  | border color of status point                                                                  |
| --jb-calendar-month-bgcolor-hover        | background color of month in month list in hover state                                        |
| --jb-calendar-year-bgcolor-hover         | background color of year in month list in hover state                                         |
| --jb-calendar-arrow-fill-color           | next and prev arrow icon color                                                                |
| --jb-calendar-day-color-hover            | day color hover                                                                               |
| --jb-calendar-month-color-hover          | day color hover                                                                               |
| --jb-calendar-year-color-hover           | day color hover                                                                               |


## Other Related Docs:

- see [jb-calendar/react](https://github.com/javadbat/jb-calendar/tree/main/react) if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function a(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/JBCalendar/Readme"}),`
`,e.jsx(r,{children:l})]})}function p(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a()}export{p as default};
