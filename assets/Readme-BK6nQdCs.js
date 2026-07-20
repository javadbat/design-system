import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C3yPao1g.js";import{A as n,d as r,u as i,v as a}from"./blocks-eElNwH0F.js";import{t as o}from"./mdx-react-shim-CaD6nXI_.js";var s,c=e((()=>{s=`# jb-button

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-button)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-button/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-button)](https://www.npmjs.com/package/jb-button)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-button)

simple button web-component with some additional features:

- custom styling

- support loading state

- typescript ready

- compatible with form elements

## When to use

Use \`jb-button\` for actions that need JB Design System styling, loading state, disabled state, or form submit behavior.

Demo:
- [codepen](https://codepen.io/javadbat/pen/NWdeMwY)
- [storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbbutton)

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--button%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-button/tree/main/react)

## Installation

### using npm

\`\`\`sh
npm i jb-button
\`\`\`

We must import package in one of our js files.

\`\`\`js
import 'jb-button';
\`\`\`

in your html or jsx

\`\`\`html
<jb-button>Save</jb-button>
\`\`\`

### using cdn

you can just add script tag to your html file and then use web component however you need

\`\`\`HTML
<script src="https://unpkg.com/jb-button/dist/JBButton.umd.js"><\/script>
\`\`\`

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`type\` | \`'button' \\| 'submit' \\| 'reset' \\| string\` | browser default | Forwarded to the inner native button. When set to \`submit\`, \`jb-button\` calls the associated form \`requestSubmit()\` after a non-canceled click. |
| \`name\` | \`string\` | \`null\` | Forwarded to the inner native button. |
| \`disabled\` | \`boolean\` | \`false\` | Disables the inner button and sets the \`disabled\` custom state. |
| [\`loading-text\`](#loading-state) | \`string\` | \`""\` | Text shown beside the loading indicator while loading. |
| \`button-style\` | \`string\` | \`""\` | Inline style forwarded to the inner button. Prefer CSS variables for reusable styling. |
| \`color\` | \`'primary' \\| 'secondary' \\| 'positive' \\| 'danger' \\| 'warning' \\| 'light' \\| 'dark'\` | \`primary\` | Visual color token used by CSS. |
| \`variant\` | \`'solid' \\| 'outline' \\| 'ghost' \\| 'text'\` | \`solid\` | Visual variant used by CSS. |
| \`size\` | \`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'\` | \`md\` style defaults | Visual size used by CSS. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| [\`isLoading\`](#loading-state) | \`boolean\` | no | Shows or hides the loading UI. |
| \`loadingText\` | \`string\` | no | Text shown beside the loading indicator. |
| \`disabled\` | \`boolean\` | no | Enables or disables the component. |
| \`name\` | \`string \\| null\` | no | Reflects the \`name\` attribute. |

### Events

| event | cancelable | when it fires |
| --- | --- | --- |
| \`click\` | yes | Re-dispatched from the inner native button. Call \`event.preventDefault()\` to stop the inner click behavior and prevent form submit. |

\`\`\`js
const button = document.querySelector('jb-button');

button.addEventListener('click', (event) => {
  console.log('clicked', event.target);
});
\`\`\`

## Loading state

You can show loading by setting \`element.isLoading = true\`.

\`\`\`js
const button = document.querySelector('jb-button');
button.isLoading = true;
button.loadingText = 'Saving';
\`\`\`

You can also set loading text in markup:

\`\`\`html
<jb-button loading-text="Saving">Save</jb-button>
\`\`\`

When the button is loading, the slotted button content is hidden and the loading indicator is shown. Disable the button separately if the user must not click it while loading:

\`\`\`html
<jb-button disabled loading-text="Saving">Save</jb-button>
\`\`\`

## Form usage

\`jb-button\` is form-associated. When \`type="submit"\` and the \`click\` event is not canceled, the component calls \`requestSubmit()\` on its associated form.

\`\`\`html
<form>
  <jb-button type="submit">Submit</jb-button>
</form>
\`\`\`

## Slot

\`jb-button\` has a default slot for button content. You can pass text, icons, or both.

\`\`\`html
<jb-button>
  <svg aria-hidden="true"></svg>
  Save
</jb-button>
\`\`\`

### change button style

For complete styling guidance, live examples, and copyable style recipes, see [Styling](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbbutton-styling).

The default and \`xs\`, \`sm\`, \`lg\`, and \`xl\` button heights inherit the matching \`--jb-control-height-*\` theme tokens. Set \`--jb-button-height\` or a size-specific \`--jb-button-height-*\` variable when one button needs a component-level override.

you can inject your custom style by attribute to button.

\`\`\`HTML
<jb-button button-style="height:2.25rem;"></jb-button>
\`\`\`

the other way of injecting style to jb-button is by providing CSS variable in component parent element to set some attribute for example to set button height:

\`\`\`css
.your-jb-button-wrapper{
    /*default height of button is 2.75rem but it will change it to 2.5rem*/
    --jb-button-height: 2.5rem;
    /* set button margin for example for zero margin:*/
    --jb-button-margin: 0 0;
}
\`\`\`

You can also style the host for state-specific situations:

\`\`\`css
jb-button:state(disabled) {
  --jb-button-box-shadow: none;
}

jb-button[variant="outline"][color="danger"] {
  --jb-button-border-width: 2px;
}
\`\`\`

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.
if you want to set a custom style to this web-component all you need is to set CSS variable in parent scope of web-component
| CSS variable name                  | description                                                                 |
| -------------                      | -------------                                                               |
| --jb-button-margin                 | web-component margin                                                        |
| --jb-button-padding                | web-component margin                                                        |
| --jb-button-border-radius          | web-component border-radius                                                 |
| --jb-button-bg-color-hover          | button bg-color when user hover                                             |
| --jb-button-bg-color-pressed        | button bg-color when user pressed                                           |
| --jb-button-height                 | button height default is 2.75rem                                               |
| --jb-button-text-shadow            | button text shadow                                                          |
| --jb-button-color                  | color of text in button                                                     |
| --jb-button-box-shadow             | box shadow of the button component                                          |
| --jb-button-font-weight            | font weight of button default is \`bold\`                                     |
| --jb-button-font-size              | font size of button default is \`1.2em\`                                      |
| --jb-button-color-hover            | color of button in hover state                                              |
| --jb-button-cursor                 | change button cursor default is \`pointer\`                                   |
| --jb-button-color-disabled         | color of button when disabled                                               |
| --jb-button-cursor-disabled        | cursor of button when disabled                                              |
| --jb-button-text-shadow-disabled   | text shadow of button when disabled                                         |
| --jb-button-loading-color          | jb-loading icon color default is text color value                           |
| --jb-button-loading-color-disabled | jb-loading icon color when disabled default is text color value             |
| --jb-button-loading-color-outline | Customize outline variant loading color. |
| --jb-button-loading-color-outline-disabled | Customize disabled outline variant loading color. |
| --jb-button-loading-color-ghost | Customize ghost variant loading color. |
| --jb-button-loading-color-text | Customize text variant loading color. |
| --jb-button-bg-color | Customize bg-color. |
| --jb-button-bg-color-text | Customize text variant bg-color. |
| --jb-button-bg-color-text-hover | Customize text variant bg-color hover. |
| --jb-button-bg-color-text-pressed | Customize text variant bg-color pressed. |
| --jb-button-bg-color-ghost | Customize bg-color ghost. |
| --jb-button-bg-color-ghost-hover | Customize bg-color ghost hover. |
| --jb-button-bg-color-ghost-pressed | Customize bg-color ghost pressed. |
| --jb-button-bg-color-outline | Customize bg-color outline. |
| --jb-button-bg-color-outline-hover | Customize bg-color outline hover. |
| --jb-button-bg-color-outline-pressed | Customize bg-color outline pressed. |
| --jb-button-border-color | Customize border color. |
| --jb-button-border-color-hover | Customize border color hover. |
| --jb-button-border-color-pressed | Customize border color pressed. |
| --jb-button-border-radius-lg | Customize border radius lg. |
| --jb-button-border-radius-sm | Customize border radius sm. |
| --jb-button-border-radius-xl | Customize border radius xl. |
| --jb-button-border-radius-xs | Customize border radius xs. |
| --jb-button-border-style | Customize border style. |
| --jb-button-border-width | Customize border width. |
| --jb-button-border-width-ghost | Customize ghost variant border width. |
| --jb-button-border-width-text | Customize text variant border width. |
| --jb-button-content-gap | Customize content gap. |
| --jb-button-content-gap-xs | Customize content gap xs. |
| --jb-button-content-gap-sm | Customize content gap sm. |
| --jb-button-content-gap-lg | Customize content gap lg. |
| --jb-button-content-gap-xl | Customize content gap xl. |
| --jb-button-color-pressed | Customize color pressed. |
| --jb-button-color-outline | Customize outline variant color. |
| --jb-button-color-outline-hover | Customize outline variant color hover. |
| --jb-button-color-outline-pressed | Customize outline variant color pressed. |
| --jb-button-color-outline-disabled | Customize disabled outline variant color. |
| --jb-button-color-ghost | Customize ghost variant color. |
| --jb-button-color-ghost-hover | Customize ghost variant color hover. |
| --jb-button-color-ghost-pressed | Customize ghost variant color pressed. |
| --jb-button-color-text | Customize text variant color. |
| --jb-button-color-text-hover | Customize text variant color hover. |
| --jb-button-color-text-pressed | Customize text variant color pressed. |
| --jb-button-danger | Customize danger. |
| --jb-button-dark | Customize dark. |
| --jb-button-disabled | Customize disabled. |
| --jb-button-font-size-lg | Customize font size lg. |
| --jb-button-font-size-sm | Customize font size sm. |
| --jb-button-font-size-xl | Customize font size xl. |
| --jb-button-font-size-xs | Customize font size xs. |
| --jb-button-height-lg | Customize height lg. |
| --jb-button-height-sm | Customize height sm. |
| --jb-button-height-xl | Customize height xl. |
| --jb-button-height-xs | Customize height xs. |
| --jb-button-icon-size | Customize icon size. |
| --jb-button-icon-size-lg | Customize icon size lg. |
| --jb-button-icon-size-sm | Customize icon size sm. |
| --jb-button-icon-size-xl | Customize icon size xl. |
| --jb-button-icon-size-xs | Customize icon size xs. |
| --jb-button-light | Customize light. |
| --jb-button-padding-lg | Customize padding lg. |
| --jb-button-padding-sm | Customize padding sm. |
| --jb-button-padding-xl | Customize padding xl. |
| --jb-button-padding-xs | Customize padding xs. |
| --jb-button-positive | Customize positive. |
| --jb-button-primary | Customize primary. |
| --jb-button-secondary | Customize secondary. |
| --jb-button-warning | Customize warning. |

## Related Docs
- see [\`jb-button/react\`](https://github.com/javadbat/jb-button/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.

## AI agent notes

This package includes [\`custom-elements.json\`](./custom-elements.json) so documentation tools, IDEs, and AI coding agents can discover the tag name, attributes, events, slot, CSS variables, and public properties.

The package also exposes \`"customElements": "custom-elements.json"\` in \`package.json\`, which gives tools a stable package-level pointer to the manifest. This field is documented by the Custom Elements Manifest project in its [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages) section.

In \`custom-elements.json\`, the \`exports\` array describes what this module makes available:

| kind | meaning |
| --- | --- |
| \`js\` | A JavaScript/TypeScript export from the module, such as \`JBButtonWebComponent\`. |
| \`custom-element-definition\` | The custom element registration for a tag name, such as \`jb-button\`. |

Each export points to a declaration with \`name\` and \`module\`, so tools can connect the public export or tag name back to the class metadata.

- Import \`jb-button\` once before using \`<jb-button>\`.
- Put visible button content in the default slot.
- Use \`isLoading\` for loading UI and \`disabled\` when clicks must be blocked.
- Use \`type="submit"\` only inside forms where submitting is intended.
- Use \`event.preventDefault()\` on \`click\` to cancel the component click behavior.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBButton/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};