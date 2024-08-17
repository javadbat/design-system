# jb-time-input react component

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-time-input-react/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-time-input-react)](https://www.npmjs.com/package/jb-time-input-react)

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
jb-time-input use [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation so for more information you can read it's documentation.  

jb time input will check validation automatically and show error on user blur the input and hide error on user type and blur to use this feature you just have to set validation list of component.

```jsx
const validationList = [
    //regex validator
    {
      validator: /^[1][1234].*$/g,
      message:"hour  must be between 11 and 14"
    },
    //callback function validator
    {
      validator:({displayValue,value,valueObject})=>{
        //display value is the value user see
        //value is the value developer get by dom.value
        //valueObject is the {hour:number,minute:number,second:number} object contain inputted value in number
        if(valueObject.minute<30){
          return false;
        }
        return true;
      },
      message:'minute must be 30 to 60'
    }
  ]
const ref = useRef();
<JBTimeInput ref={ref} validationList={validationList}></JBTimeInput>
```

you can trigger validation manually by calling `checkValidity` function and get validation result. for example you can call it when submit button clicked and check if value is valid or not.

```javascript
    // if you set showError false you can get validation result but component wont show error to user by itself its good when you want show error in your own way
    const showError = true;
    const validationResult =  ref.current.validation.checkValidity(showError);
    if(validationResult.isAllValid){
        alert('all validation are passed')
    }else{
        alert('validation error!');
    }

```


you can also get validation result of your time input by following way:

```jsx

    const onChange = (e)=>{
        console.log(e.target.validation.resultSummary) 
    }
    //you can check validation result in onChange or onInput or onEnter
    <JBTimeInput ref={ref} validationList={validationList} onChange={onChange}></JBTimeInput>

```

### configurable attributes

you can change some attribute in html like label or message configurable attribute are:

```jsx
<JBTimeInput closeButtonText="بستن"></JBTimeInput>
```

### disable second
if you want to just input minute and hour and disable second in picker and input just set `secondEnabled` to `false`
```jsx
<JBTimeInput secondEnabled={false}></JBTimeInput>
```
### frontal zero
if you want picker to show `02` instead of `2` when number is less than 10 just set `frontalZero` of time picker default is `false`.    
```jsx
<JBTimeInput frontalZero={true}></JBTimeInput>

```
### optional units
if you want to tell user some units is optional and make it less visible by set light grey color the numbers in picker you can set `optionalUnits`
```jsx
//it could be 'hour' or 'minute' or 'second'
<JBTimeInput optionalUnits={[hour]}></JBTimeInput>

```
### show persian number
if you want to show persian number instead of english number chars. you can set `showPersianNumber`:
```js 
<JBTimeInput showPersianNumber={true}></JBTimeInput>

```

### set custom style

jb-time-input use [jb-input](https://github.com/javadbat/jb-input) and [jb-time-picker](https://github.com/javadbat/jb-time-picker) and [jb-popover](https://github.com/javadbat/jb-popover) underneath so to change the styles of your component read custom style section of these components.
more than above here is the css variable that we use in jb-time-input itself:

| css variable name                       | description                                                                                              |
| -------------                           | -------------                                                                                            |
| --jb-time-input-margin                  | outer margin of web component default is `12px 0`                                                        |


## Other Related Docs:
- see [jb-time-input](https://github.com/javadbat/jb-time-input) if you want to use this component as a pure-js web-component

- see [All JB Design system Component List](https://github.com/javadbat/design-system/blob/master/docs/component-list.md) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/master/docs/contribution-guide.md) if you want to contribute in this component.
