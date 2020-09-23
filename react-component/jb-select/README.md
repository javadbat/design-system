# jb-select-react

select component for react 

## installation

run `npm install jb-select-react` to install package with npm

## usage

use below syntax in your render function.

<JBSelect></JBSelect>

### label
use label property to describe your select component.

```jsx
<JBSelect label='your label name' ></JBSelect>
```

### option value

set an array object.
example:

```jsx
render(){
    const obj = [{name:'reza',family:'asadi',userId:1},{name:'peter',family:'peterson',userId:2}];
    getOptionTitle:(option)=>{
        return `${option.name} ${option.family}`;
    },
    getOptionValue:(option)=>{
        return option.userId;
    }
    return(
        <JBInput label='your label name' optionList={obj} getOptionTitle={getOptionTitle} getOptionValue={getOptionValue}></JBSelect>;
    );
}
```

### set custom style

in some cases in your project you need to change defualt style of the component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this component all you need is to set css variable.
| css variable name                   | description                                                                                   |
| -------------                       | -------------                                                                                 |
| --jb-select-margin                  | react-component margin defualt is `0 12px`                                                      |
| --jb-select-border-radius           | react-component border-radius defualt is `16px`                                                 |
| --jb-select-border-color            | border color of select in normal mode                                                         |
| --jb-select-border-color-selected   | border color when user select a value from list                                               |
| --jb-select-bgcolor                 | background color of input                                                                     |