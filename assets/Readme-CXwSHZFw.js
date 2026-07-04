import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BZF-tTFv.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Cp_eyezr.js";import{t as o}from"./mdx-react-shim-UCQPUtol.js";var s,c=e((()=>{s=`# jb file input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-file-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-file-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-file-input)](https://www.npmjs.com/package/jb-file-input)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-file-input)

File upload web component.
this component just let user select file and wait for you to get the value and handle it yourself and it's not handling any kind of upload or something

## When to use

Use \`jb-file-input\` when the user needs to choose one local file and your application will handle upload, download, storage, or preview behavior outside the component.

Use \`uploading\` and \`uploadPercent\` only to reflect an upload flow you own elsewhere; \`jb-file-input\` does not upload files by itself.

## Samples
 - [Codepen](https://codepen.io/javadbat/pen/xxgmWNB)
 - [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbfileinput)

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--file--input%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-file-input/tree/main/react)

## Usage

just import package with import or from js CDN and write web component tag in your html

\`\`\`html
<script>
  import 'jb-file-input'
<\/script>

<jb-file-input></jb-file-input>
\`\`\`

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`name\` | \`string\` | \`""\` | Form field name. |
| [\`required\`](#validation) | \`boolean\` | \`false\` | Enables required validation. |
| [\`placeholder-title\`](#placeholder-title) | \`string\` | localized default | Text shown in the default placeholder area. |
| \`accept\` | \`string\` | common document/image types | Native file accept string forwarded to the internal file input. |
| [\`uploading\`](#loading-state) | \`boolean\` | \`false\` | Visual state attribute that shows the upload progress section. |
| [\`hide-download\`](#hide-download-button) | \`boolean\` | \`false\` | Hides the default download button in the file overlay. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| [\`value\`](#value) | \`File \\| null\` | no | Selected file. Set to \`null\` to reset the component. |
| \`acceptTypes\` | \`string\` | no | Native accept string used by the internal file input. |
| [\`uploadPercent\`](#loading-state) | \`number \\| null\` | no | Visual upload progress percentage used by the upload-state background. |
| \`required\` | \`boolean\` | no | Enables required validation. |
| \`status\` | \`'empty' \\| 'selected'\` | yes | Current visual value status. |
| \`selectedFileType\` | \`string \\| null\` | yes | Reserved for selected file MIME type. Current implementation returns \`null\`. |
| \`validation\` | \`ValidationHelper<{ file: File \\| null }>\` | yes | Validation helper from \`jb-validation\`; set \`validation.list\` for custom rules. |
| \`validationMessage\` | \`string\` | yes | Current native validation message from \`ElementInternals\`. |

### Methods

| name | returns | description |
| --- | --- | --- |
| \`openFileSelector()\` | \`void\` | Opens the native file picker. |
| \`resetValue()\` | \`void\` | Clears the selected file and resets the visual state to empty. |
| \`checkValidity()\` | \`boolean\` | Runs validation without showing the error state. Dispatches \`invalid\` when invalid. |
| \`reportValidity()\` | \`boolean\` | Runs validation and shows the error state. Dispatches \`invalid\` when invalid. |

### Events

| event | cancelable | when it fires |
| --- | --- | --- |
| \`change\` | no | When a file is selected or deleted. |
| \`download\` | no | When the default download button is clicked. |
| \`delete\` | no | After the selected file is cleared from the default delete button. |
| \`invalid\` | no | When \`checkValidity()\` or \`reportValidity()\` finds an invalid value. |


## Placeholder Title

you can change file input place holder text by set \`placeholder-title="select your special file"\` attribute in dom

## Value
\`jb-file-input\` use file as default value type. means you can get value by \`dom.value\` and set it by \`dom.value= yourFile\`.

### Reset Value
you can reset input file value by \`dom.value = null\` or \`dom.resetValue()\`

## Validation

Use \`required\` when the user must select a file before submitting a form.

\`\`\`html
<jb-file-input required></jb-file-input>
\`\`\`

For custom validation, set \`validation.list\` from \`jb-validation\`.

\`\`\`js
const fileInput = document.querySelector("jb-file-input");

fileInput.validation.list = [
  {
    validator: ({ file }) => file && file.size < 1024 * 1024,
    message: "File must be smaller than 1MB"
  }
];
\`\`\`

## Loading State
jb-file-input does not show any loading by default because it's just a file input and not file uploader. You can show upload state in your file uploader flow by setting the \`uploading\` attribute and \`uploadPercent\` property.

in HTML

\`\`\`html
<jb-file-input uploading>
\`\`\`

or in javascript:

\`\`\`ts
// show upload section 
document.querySelector("jb-file-input").setAttribute("uploading","")
// set upload percent
document.querySelector("jb-file-input").uploadPercent = 10; //10% of file uploaded
\`\`\`
## Download Button

when file upload is complete user access to download button and you can add your own function to download file by add event listener:

\`\`\`ts
document.querySelector("jb-file-input").addEventListener("download",()=>{
  //download file however you want
})
\`\`\`
download button has no default functionality because file download in every project has it's own way so we just create a ui button to enable you ad function for it.

### Hide Download Button
if you don't want download button to be shown add \`hide-download\` attribute to dom:
\`\`\`HTML
<jb-file-input hide-download></jb-file-input>
\`\`\`

## CSS Variables

## Slots

| slot | description |
| --- | --- |
| \`placeholder\` | Replaces the entire empty placeholder section. |
| \`placeholder-icon\` | Replaces the default upload icon inside the default placeholder. |
| \`upload\` | Replaces the entire upload progress section. |
| \`uploader-icon\` | Replaces the loading icon inside the default upload section. |
| \`file-icon\` | Replaces the default selected-file icon. |
| \`overlay\` | Replaces the entire selected-file hover overlay. |
| \`overlay-content\` | Replaces the content inside the default overlay. |

## CSS parts and states

| part | description |
| --- | --- |
| \`placeholder-title\` | Title text in the default placeholder section. |
| \`uploading-title\` | Title text in the default upload section. |
| \`file-name\` | Selected file name text. |

| state or attribute | description |
| --- | --- |
| \`:state(empty)\` | Applied when no file is selected. |
| \`:state(fill)\` | Applied when a file is selected. |
| \`[uploading]\` | Shows the upload progress section. |
| \`[hide-download]\` | Hides the default download button. |

\`\`\`css
jb-file-input::part(file-name) {
  font-weight: 600;
}

jb-file-input:state(fill) {
  --jb-file-input-bg-color: var(--jb-neutral-9);
}

jb-file-input[uploading] {
  --jb-file-input-loading-bg: linear-gradient(90deg, var(--jb-primary), var(--jb-secondary));
}
\`\`\`

| CSS variable name | description |
| --- | --- |
| --jb-file-input-bg-color | Customize bg color. |
| --jb-file-input-bg-color-error | Customize bg color error. |
| --jb-file-input-bg-color-hover | Customize bg color hover. |
| --jb-file-input-bg-color-pressed | Customize bg color pressed. |
| --jb-file-input-border-color-error | Customize border color error. |
| --jb-file-input-border-radius | Customize border radius. |
| --jb-file-input-display-file-empty | File section display when empty. |
| --jb-file-input-display-file-fill | File section display when filled. |
| --jb-file-input-display-file-uploading | File section display while uploading. |
| --jb-file-input-display-placeholder-empty | Placeholder section display when empty. |
| --jb-file-input-display-placeholder-fill | Placeholder section display when filled. |
| --jb-file-input-display-placeholder-uploading | Placeholder section display while uploading. |
| --jb-file-input-display-upload-empty | Upload section display when empty. |
| --jb-file-input-display-upload-fill | Upload section display when filled. |
| --jb-file-input-display-upload-uploading | Upload section display while uploading. |
| --jb-file-input-download-button-display | Download button display value. |
| --jb-file-input-download-button-display-hidden | Download button display value when hidden. |
| --jb-file-input-file-name-color | Customize file name color. |
| --jb-file-input-icon-base-color | Customize icon base color. |
| --jb-file-input-icon-primary-color | Customize icon primary color. |
| --jb-file-input-loading-bg | Customize loading bg. |
| --jb-file-input-loading-color | Customize loading text and icon color. |
| --jb-file-input-overlay-bg-color | Customize file overlay background color. |
| --jb-file-input-overlay-button-border-radius-sm | Customize overlay button border radius in small height. |
| --jb-file-input-overlay-button-border-radius-xs | Customize overlay button border radius in extra small height. |
| --jb-file-input-overlay-button-height-sm | Customize overlay button height in small height. |
| --jb-file-input-overlay-button-height-xs | Customize overlay button height in extra small height. |
| --jb-file-input-overlay-button-icon-size-sm | Customize overlay button icon size in small height. |
| --jb-file-input-overlay-button-icon-size-xs | Customize overlay button icon size in extra small height. |
| --jb-file-input-overlay-button-padding-sm | Customize overlay button padding in small height. |
| --jb-file-input-overlay-button-padding-xs | Customize overlay button padding in extra small height. |
| --jb-file-input-padding | Customize padding. |
| --jb-file-input-placeholder-title-color | Customize placeholder title color. |
| --jb-file-input-reselect-button-color | Customize reselect button text color. |

## Related Docs
- see [\`jb-file-input/react\`](https://github.com/javadbat/jb-file-input/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.

## AI agent notes

This package includes [\`custom-elements.json\`](./custom-elements.json) so documentation tools, IDEs, and AI coding agents can discover the tag name, attributes, properties, events, slots, CSS parts, CSS variables, and public methods.

The package also exposes \`"customElements": "custom-elements.json"\` in \`package.json\`, which gives tools a stable package-level pointer to the manifest. This field is documented by the Custom Elements Manifest project in its [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages) section.

In \`custom-elements.json\`, the \`exports\` array describes what this module makes available:

| kind | meaning |
| --- | --- |
| \`js\` | A JavaScript/TypeScript export from the module, such as \`JBFileInputWebComponent\`. |
| \`custom-element-definition\` | The custom element registration for a tag name, such as \`jb-file-input\`. |

- Import \`jb-file-input\` once before using \`<jb-file-input>\`.
- The component only selects a file; upload and download logic must be implemented by the app.
- Read the selected file from \`.value\`; set \`.value = null\` or call \`resetValue()\` to clear it.
- Use \`uploading\` plus \`uploadPercent\` to reflect external upload progress.
- Listen to \`download\` when using the default download button.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/form elements/JBFileInput/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};