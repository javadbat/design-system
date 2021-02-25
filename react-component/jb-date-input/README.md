# jb-date-input-react

date input with calendar component for react 

## installation

run `npm install jb-date-input-react` to install package with npm

## usage

use below syntax in your render function.

```jsx

<JBDateInput></JBDateInput>

```

### format

defualt format of date input is 'YYYY-MM-DDTHH:mm:ss.SSS[Z]' that compatible and exact format of `new Date().toISOString()`
you can change it however you need and `[Z]` mean the exact Z charecter that used in ISO standard format `YYYY-MM-DDTHH:mm:ss.SSSZ[Z]` => `2012-06-21T00:00:00.000+3:30Z`
you can change format by format attribute:

```jsx

<JBDateInput label="تاریخ" format="YYYY/MM/DD" value="2020/08/14"></JBDateInput>

```

### valueType

we have 3 value type:

```jsx
    <JBDateInput value="2020-08-01T14:05:39.530Z" valueType="GREGORIAN"/>
    <JBDateInput value="1596291030322" valueType="TIME_STAMP"/>
    <JBDateInput value="1399-05-01T12:05:39.530Z" valueType="JALALI"/>
```

### min and max date limit

you can set minimum date and maximum date range for your app 

```jsx
 <JBDateInput label="تاریخ شروع " value="2020-08-10T08:51:23.176Z" min="2020-08-05T08:51:23.176Z" max="2020-08-15T08:51:23.176Z">
 </JBDateInput>
```

remember your min and max date must be in the same format and valueType of your value.
to trigger validation and check is the element has a valid value:

```js
// if show error was false, in case of error component dont show error itself and function will return if data valid or not
const showError = true
const validationObj = dom.triggerInputValidation(showError)
```

### inputType prop\

you can set `inputType` prop to determine which calendar type you want to show to user, jalali or gregorian

```jsx
<JBDateInput label="تاریخ شروع " inputType="GREGORIAN"></JBDateInput>
<JBDateInput label="تاریخ شروع " inputType="JALALI"></JBDateInput>
```

### set custome style

in some cases in your project you need to change defualt style of react-component for example you need zero margin or different border-radius and etc.
if you want to set a custom style to this react-component all you need is to set css variable in parent scope of react-component
| css variable name                       | description                                                                                   |
| -------------                           | -------------                                                                                 |
| --jb-date-input-margin                  | react-component margin defualt is `0 12px`                                                    |
| --jb-date-input-border-radius           | react-component border-radius defualt is `16px`                                               |
| --jb-date-input-border-color            | border color of select in normal mode                                                         |
| --jb-date-input-border-color-focus      | border color when user focus on input                                                         |
| --jb-date-input-bgcolor                 | background color of input                                                                     |
| --jb-date-input-message-box-display     | defualt is block but if you set it to none message box will be hidden                         |
