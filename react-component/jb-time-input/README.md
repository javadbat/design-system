# jb-time-input react component

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-time-input/master/LICENSE)

in jb-time-input you can create a input special for time the advantage is:

- validation so it only accept time value and not any other invalid format
- support arrow key to increase and decrease time value
- time picker
- support both rtl and ltr direction
- easy to use and can be used in any js framework like React, Vue, Angular,etc
- can be used in pure js without any other dependency
- has a touch friendly time-picker
- support persian number char
- responsive and mobile friendly

sample: <https://codepen.io/javadbat/pen/QWdxzKb>

## instruction

### installation and usage

with npm:

```command
    npm i jb-time-input-react
```

```jsx
    import {JBTimeInput} from 'jb-time-input-react'

    <JBTimeInput label="time:" />
```

### event

like any other javascript DOM element you can bind event to web component with `DOM.addEventListener` the supported event is:

```jsx
    //when default property are defined best time for impl your config
    <JBTimeInput onInit={(event) => {}}></JBTimeInput>

    //when dom bound and rendered in browser dom 3 and you can access all property
    <JBTimeInput onLoad={(event) => {}}></JBTimeInput>

    //keyboard event
    <JBTimeInput onKeyDown={(event) => console.log(event.target.value)}></JBTimeInput>
    <JBTimeInput onKeyUp={(event) => console.log(event.target.value)}></JBTimeInput>
    <JBTimeInput onKeyPress={(event) => console.log(event.target.value)}></JBTimeInput>
    <JBTimeInput onChange={(event) => console.log(event.target.value)}></JBTimeInput>
    // when user press enter on type good for situation you want so submit form or call search function on user press enter. 
    <JBTimeInput onEnter={(event) => console.log(event.target.value)}></JBTimeInput>
    //focus event
    <JBTimeInput onFocus={(event) => console.log(event.target.value)}></JBTimeInput>
    <JBTimeInput onBlur={(event) => console.log(event.target.value)}></JBTimeInput>
    //input Event
    <JBTimeInput onInput={(event) => console.log(event.target.value)}></JBTimeInput>
    <JBTimeInput onBeforeInput={(event) => console.log(event.target.value)}></JBTimeInput>
```

### set value

to set value of time input you have 2 way:

- by component as a prop:

```html
<JBTimeInput value="14:34:63" />
```


### validation

jb time input will check validation automatically and show error on user blur the input and hide error on user type and blur to use this feature you just have to set validation list of component.

```javascript
document.querySelector('jb-time-input').validationList = [
    {
    // custom validator with regex
            validator: /^[1][1234].*$/g,
            message:"market is only open on 11-14."
    },
    //custom validator with function 
    {
            validator: (typedText)=>{typedText?return true : return false;},
            message:"you must fill the time"
    }
]
```

you can trigger validation manually by calling `triggerInputValidation` function. for example you can call it when submit button clicked and check if value is valid or not.

```javascript
    // if you set showError false you can get validation result but component wont show error to user by itself its good when you want show error in your own way
    const showError = true;
    const validationResult =  document.querySelector('jb-time-input').triggerInputValidation(showError);
    if(validationResult.isAllValid){
        alert('all validation are passed')
    }else{
        alert('validation error!');
    }

```

you can also get validation result of your time input by following way:

```javascript
    document.querySelector('jb-time-input').validation
    //in change event detail
    document.querySelector('jb-time-input').addEventListener('change',(e)=>{
        alert(e.detail.isValid);
        console.log(e.detail.validationObject);
    });

```

### configurable attributes

you can change some attribute in html like label or message configurable attribute are:

```HTML
<jb-time-input close-button-text="بستن"></jb-time-input>
```

### disable second
if you want to just input minute and hour and disable second in picker and input just set `secondEnabled` to `false`
```javascript
    document.querySelector('jb-time-input').secondEnabled = false;
```
### frontal zero
if you want picker to show `02` instead of `2` when number is less than 10 just set `frontalZero` of time picker default is `false`.    
```js
document.querySelector('jb-time-input').frontalZero = true;
```
or
```html
<jb-time-input frontal-zero="true"></jb-time-input>
```
### optional units
if you want to tell user some units is optional and greyout the numbers in picker you can set `optionalUnits`
```js
//it could be 'hour' or 'minute' or 'second'
document.querySelector('jb-time-input').optionalUnits = ['hour'];
```
### show persian number
if you want to show persian number instead of english number chars. you can set `showPersianNumber`:
```js 
document.querySelector('jb-time-input').showPersianNumber = true
```

### set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.
if you want to set a custom style to this web-component all you need is to set this css variable in parent scope of web-component.
| css variable name                       | description                                                                                              |
| -------------                           | -------------                                                                                            |
| --jb-time-input-label-font-size         | change font size of web component label default is `0.8em`                                               |
| --jb-time-input-margin                  | outer margin of web component default is `12px 0`                                                        |
| --jb-time-input-height                  | height of input element default is `40px`                                                                |
| --jb-time-input-border-color            | input box border color default is `f7f6f6`                                                               |
| --jb-time-input-bgcolor                 | background color of input box default is `#f7f6f6`                                                       |
| --jb-time-input-border-botton-width     | border bottom width on input box default is `3px`                                                        |
| --jb-time-input-border-radius           | input box border radius  default is `16px`                                                               |
| --jb-time-input-border-color-focus      | input box border-color when user focus                                                                   |
| --jb-time-input-input-padding           | inner padding of input element default is `2px 12px 0 12px`                                              |
| --jb-time-input-value-font-size         | font size of input value default is `1.1em`                                                              |
| --jb-time-input-value-color             | color of input value default is `#1f1735`                                                                |
| --jb-time-input-placeholder-color       | color of input placeholder                                                                               |
| --jb-time-input-placeholder-font-size   | font size of placeholder                                                                                 |
| --jb-time-input-message-font-size       | message and error message under input box font size defaulyt is `0.7em`                                  |
| --jb-time-input-message-box-display     | if you want to hide a error message under the inputbox and show message in your own way set it to `none` |
| --jb-time-input-message-error-color     | color of message error default is `red` but you can change it to what you want                           |
| --jb-time-input-label-color             | input label color                                                                                        |
