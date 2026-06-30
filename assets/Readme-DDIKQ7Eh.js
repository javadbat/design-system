import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CCmaC7-g.js";import{_ as n,d as r,k as i,u as a}from"./blocks-C9d-vimo.js";import{t as o}from"./mdx-react-shim-Qa2OpQoC.js";var s,c=e((()=>{s=`# jb-qrcode

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-qrcode)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-qrcode/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-qrcode)](https://www.npmjs.com/package/jb-qrcode)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-qrcode)

\`jb-qrcode\` is a QR code web component built on [\`qr-code-styling\`](https://www.npmjs.com/package/qr-code-styling). It renders an SVG QR code, supports styling options, can show a center logo, and includes a hover overlay with a download button.

- Works with only a \`value\`.
- Supports custom QR width and height.
- Supports a center logo image.
- Exposes \`qr-code-styling\` options for dots, corner squares, and background.
- Includes an overlay download button.
- Supports CSS variables and shadow parts for styling.

## When to use

Use \`jb-qrcode\` when you need to render a QR code for a URL, text, payment link, invite link, or any other scannable string.

Use a server-generated QR image when the QR code must be rendered before JavaScript runs or when you need a static asset in non-browser contexts.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbqrcode)

## Using With JS Frameworks

- [<img src="https://img.shields.io/badge/React.js-jb--qrcode%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-qrcode/tree/main/react)

## Installation

\`\`\`sh
npm i jb-qrcode
\`\`\`

\`\`\`js
import 'jb-qrcode';
\`\`\`

\`\`\`html
<jb-qrcode value="https://javadbat.github.io/design-system/"></jb-qrcode>
\`\`\`

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`null\` | QR code data. When empty, no QR code is rendered. |
| \`logo\` | \`string\` | \`null\` | Optional center logo image URL. |
| \`file-name\` | \`string\` | \`qr\` | Default file name used by the overlay download button and \`download()\`. |
| \`width\` | \`number\` | \`240\` | QR render width in pixels. Also sets host inline width. |
| \`height\` | \`number\` | \`240\` | QR render height in pixels. Also sets host inline height. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| \`value\` | \`string \\| null\` | no | QR code data. |
| \`logo\` | \`string \\| null\` | no | Optional center logo image URL. |
| \`width\` | \`number\` | no | QR render width in pixels. |
| \`height\` | \`number\` | no | QR render height in pixels. |
| \`downloadFileName\` | \`string\` | no | Default file name used by \`download()\`. |
| \`dotsOptions\` | \`DotsOptions\` | no | Dot rendering options passed to \`qr-code-styling\`. |
| \`cornersSquareOptions\` | \`CornersSquareOptions\` | no | Corner square rendering options passed to \`qr-code-styling\`. |
| \`backgroundOptions\` | \`BackgroundOptions\` | no | Background rendering options passed to \`qr-code-styling\`. |

### Methods

| name | returns | description |
| --- | --- | --- |
| \`drawQrcode()\` | \`void\` | Recreates and appends the QR SVG using the current value and options. |
| \`download(fileName?, extension?)\` | \`void\` | Downloads the current QR code. \`extension\` defaults to \`"png"\`. |

### Events

| event | description |
| --- | --- |
| \`load\` | Dispatched from \`connectedCallback\`. |
| \`init\` | Dispatched from \`connectedCallback\` after \`load\`. |

## Value

\`\`\`html
<jb-qrcode value="https://www.google.com"></jb-qrcode>
\`\`\`

\`\`\`js
const qrCode = document.querySelector('jb-qrcode');

qrCode.value = 'https://javadbat.github.io/design-system/';
\`\`\`

When \`value\` is empty or \`null\`, the QR wrapper is cleared.

## Logo

\`\`\`html
<jb-qrcode
  value="https://javadbat.github.io/design-system/"
  logo="https://javadbat.github.io/design-system/images/logo-square.svg"
></jb-qrcode>
\`\`\`

\`\`\`js
const qrCode = document.querySelector('jb-qrcode');

qrCode.logo = 'https://javadbat.github.io/design-system/images/logo-square.svg';
\`\`\`

The logo is passed to \`qr-code-styling\` as \`image\` with \`crossOrigin: "anonymous"\`.

## Size

\`\`\`html
<jb-qrcode value="https://example.com" width="320" height="320"></jb-qrcode>
\`\`\`

\`\`\`js
const qrCode = document.querySelector('jb-qrcode');

qrCode.width = 320;
qrCode.height = 320;
\`\`\`

## Download

The hover overlay contains a download button. It calls \`download()\` and saves a PNG by default.

\`\`\`html
<jb-qrcode value="https://example.com" file-name="invite-link"></jb-qrcode>
\`\`\`

\`\`\`js
const qrCode = document.querySelector('jb-qrcode');

qrCode.downloadFileName = 'invite-link';
qrCode.download();
qrCode.download('invite-link-svg', 'svg');
\`\`\`

## Rendering options

The rendering option properties use the same option objects as [\`qr-code-styling\`](https://www.npmjs.com/package/qr-code-styling).

\`\`\`js
const qrCode = document.querySelector('jb-qrcode');

qrCode.dotsOptions = {
  color: 'var(--jb-primary)',
  gradient: {
    type: 'linear',
    rotation: 45,
    colorStops: [
      { color: 'var(--jb-primary)', offset: 0 },
      { color: 'var(--jb-secondary)', offset: 0.8 },
      { color: 'var(--jb-primary)', offset: 1 },
    ],
  },
  type: 'rounded',
};

qrCode.cornersSquareOptions = {
  type: 'extra-rounded',
  color: 'var(--jb-primary)',
};

qrCode.backgroundOptions = {
  color: '#fff',
};
\`\`\`

## CSS parts and variables

| part | description |
| --- | --- |
| \`qrcode\` | Wrapper where the generated QR SVG is appended. |
| \`overlay\` | Hover overlay over the QR code. |
| \`download-button\` | Download button inside the overlay. |

| CSS variable name | description |
| --- | --- |
| \`--jb-qrcode-image-color\` | Default QR dot and corner color. |
| \`--jb-qrcode-overlay-bg-color\` | Hover overlay background color. |
| \`--jb-qrcode-overlay-button-color\` | Download icon color. |
| \`--jb-qrcode-overlay-button-bg-color-hover\` | Download button hover background color. |
| \`--jb-qrcode-overlay-button-color-hover\` | Download icon hover color. |

\`\`\`css
jb-qrcode {
  --jb-qrcode-image-color: #111827;
  --jb-qrcode-overlay-bg-color: rgb(17 24 39 / 60%);
}

jb-qrcode::part(download-button) {
  border-radius: 8px;
}
\`\`\`

## Accessibility notes

- The generated QR code is visual content. Add nearby text or an accessible link to the encoded value when users need a non-visual alternative.
- The overlay download control is inside shadow DOM. If keyboard access to downloading is required, call \`download()\` from an external button in your app.

## Related Docs

- See [\`jb-qrcode/react\`](https://github.com/javadbat/jb-qrcode/tree/main/react) if you want to use this component in React.
- See [\`qr-code-styling\`](https://www.npmjs.com/package/qr-code-styling) for supported rendering option values.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`jb-qrcode\` once before using \`<jb-qrcode>\`.
- Use the \`value\` attribute/property for the encoded QR data.
- Use \`logo\` for the optional center image URL.
- Use \`dotsOptions\`, \`cornersSquareOptions\`, and \`backgroundOptions\` as JavaScript properties; they are object values, not HTML attributes.
- Use \`file-name\` in HTML and \`downloadFileName\` in JavaScript.
- Use \`download(fileName?, extension?)\` for programmatic downloads.
- This package includes [\`custom-elements.json\`](./custom-elements.json) and points to it with the package.json \`customElements\` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In \`custom-elements.json\`, \`exports.kind: "js"\` describes JavaScript/TypeScript exports and \`exports.kind: "custom-element-definition"\` maps the \`jb-qrcode\` tag name to \`JBQRCodeWebComponent\`.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBQRCode/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};