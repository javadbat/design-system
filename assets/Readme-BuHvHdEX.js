import{j as t,M as b,m as r}from"./index-CQumYRii.js";import{useMDXComponents as i}from"./index-CpNkpSEJ.js";import"./iframe-CFd7j1wx.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-button

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-button)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-button/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-button)](https://www.npmjs.com/package/jb-button)

simple button web-component with some additional features:

- custom styling

- support loading state

- typescript ready

- compatible with form elements

Demo:
- [codepen](https://codepen.io/javadbat/pen/NWdeMwY)
- [storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbbutton)

## using with JS frameworks

to use this component in **react** see [\`jb-button/react\`](https://github.com/javadbat/jb-button/tree/main/react);

## instruction

### set loading

you can show loading by \`element.isLoading = true\`
you can add text to loading by \`<jb-button loading-text="در حال ثبت">your button text</jb-button>\`

### other attribute

| atribute name  | description                                                                                                         |
| -------------  | -------------                                                                                                       |
| type           | change button HTML type                                                                                             |
| disabled       | disable the button                                                                                                  |
| color          | 'primary', 'secondary', 'positive', 'danger', 'warning', 'light', 'dark' |
| variant        | 'solid', 'outline', 'ghost', 'text'              |
| size           | 'xs' , 'sm' , 'md' , 'lg' , 'xl'                 |

### change button style

you can inject your custom style by attribute to button.

\`\`\`HTML
<jb-button button-style="height:36px;"></jb-button>
\`\`\`

the other way of injecting style to jb-button is by providing css variable in component parent element to set some atttribute for example to set button height:

\`\`\`css
.your-jb-button-wrapper{
    /*default height of button is 44px but it will change it to 40px*/
    --jb-button-height: 40px;
    /* set button margin for example for zero margin:*/
    --jb-button-margin: 0 0;
}
\`\`\`

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component
| css variable name                  | description                                                                 |
| -------------                      | -------------                                                               |
| --jb-button-margin                 | web-component margin                                                        |
| --jb-button-padding                | web-component margin                                                        |
| --jb-button-border-radius          | web-component border-radius                                                 |
| --jb-button-border-radius-sm       | border-radius for sm size (also available for xl,lg,...)                    |
| --jb-button-border                 | web-component css border attribute default is \`none\`                        |
| --jb-button-bgcolor-primary        | background color of button in primary                                       |
| --jb-button-bgcolor-secondary      | background color of button in secondary                                     |
| --jb-button-bgcolor-positive       | background color of button in positive                                      |
| --jb-button-bgcolor-danger         | background color of button in danger                                        |
| --jb-button-bgcolor-warning        | background color of button in warning                                       |
| --jb-button-bgcolor-light          | background color of button in light                                         |
| --jb-button-bgcolor-dark           | background color of button in dark                                          |
| --jb-button-bgcolor-hover          | button bg-color when user hover                                             |
| --jb-button-bgcolor-pressed        | button bg-color when user pressed                                           |
| --jb-button-height                 | button height default is 44px                                               |
| --jb-button-text-shadow            | button text shadow                                                          |
| --jb-button-color                  | color of text in button                                                     |
| --jb-button-box-shadow             | box shadow of the button component                                          |
| --jb-button-font-weight            | font weight of button default is \`bold\`                                     |
| --jb-button-font-size              | font size of button default is \`1.2em\`                                      |
| --jb-button-color-hover            | color of button in hover state                                              |
| --jb-button-cursor                 | change button cursor default is \`pointer\`                                   |
| --jb-button-bgcolor-disabled       | background color of button when disabled                                    |
| --jb-button-color-disabled         | color of button when disabled                                               |
| --jb-button-cursor-disabled        | cursor of button when disabled                                              |
| --jb-button-border-disabled        | border of button when disabled                                              |
| --jb-button-text-shadow-disabled   | text shadow of button when disabled                                         |
| --jb-button-loading-color          | jb-loading icon color default is text color value                           |
| --jb-button-loading-color-disabled | jb-loading icon color when disabled default is text color value             |

## Other Related Docs:

- see [\`jb-button/react\`](https://github.com/javadbat/jb-button/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function e(o){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/form elements/JBButton/Readme"}),`
`,t.jsx(r,{children:s})]})}function h(o={}){const{wrapper:n}={...i(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e()}export{h as default};
