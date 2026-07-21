import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BdsXi1cQ.js";import{A as n,d as r,u as i,v as a}from"./blocks-qp4RPJRe.js";import{t as o}from"./mdx-react-shim-BTqBeG44.js";var s,c=e((()=>{s=`# jb-qrcode React Component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-qrcode)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-qrcode/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-qrcode-react)](https://www.npmjs.com/package/jb-qrcode-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-qrcode)

React wrapper for [\`jb-qrcode\`](https://github.com/javadbat/jb-qrcode). It imports and registers the underlying QR code web component.

## Demo

- [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbqrcode)

## Installation

\`\`\`sh
npm i jb-qrcode
\`\`\`

\`\`\`jsx
import { JBQRCode } from 'jb-qrcode/react';

<JBQRCode value="https://javadbat.github.io/design-system/" />;
\`\`\`

## When to use

Use \`JBQRCode\` when a React view needs to render downloadable QR codes with optional logo, size control, and \`qr-code-styling\` render options.

## Props

| prop | type | description |
| --- | --- | --- |
| \`value\` | \`string\` | QR code data. |
| \`logo\` | \`string\` | Optional center logo image URL. |
| \`width\` | \`number\` | QR render width in pixels. |
| \`height\` | \`number\` | QR render height in pixels. |
| \`downloadFileName\` | \`string\` | Default file name used by the overlay download button and \`download()\`. |
| \`dotsOptions\` | \`DotsOptions\` | Dot rendering options passed to \`qr-code-styling\`. |
| \`dotsOption\` | \`DotsOptions\` | Legacy alias for \`dotsOptions\`. |
| \`cornersSquareOptions\` | \`CornersSquareOptions\` | Corner square rendering options passed to \`qr-code-styling\`. |
| \`backgroundOptions\` | \`BackgroundOptions\` | Background rendering options passed to \`qr-code-styling\`. |

## Events

| prop | event | description |
| --- | --- | --- |
| \`onLoad\` | \`load\` | Called from the web component \`connectedCallback\`. |
| \`onInit\` | \`init\` | Called after \`onLoad\`. |

## Basic usage

\`\`\`jsx
<JBQRCode value="https://github.com/javadbat/design-system" />
\`\`\`

## Value

Set \`value\` to the text or URL encoded in the QR code. The component re-renders when the value changes.

## Logo

\`\`\`jsx
<JBQRCode
  value="https://github.com/javadbat/design-system"
  logo="https://javadbat.github.io/design-system/images/logo-square.svg"
/>
\`\`\`

## Size

\`\`\`jsx
<JBQRCode
  value="https://github.com/javadbat/design-system"
  width={320}
  height={320}
/>
\`\`\`

## Rendering options

\`\`\`jsx
<JBQRCode
  value="https://github.com/javadbat/design-system"
  dotsOptions={{
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
  }}
  cornersSquareOptions={{
    type: 'extra-rounded',
    color: 'var(--jb-primary)',
  }}
  backgroundOptions={{
    color: '#fff',
  }}
/>
\`\`\`

## Programmatic download

\`\`\`jsx
const qrRef = useRef(null);

<JBQRCode
  ref={qrRef}
  value="https://github.com/javadbat/design-system"
  downloadFileName="design-system"
/>;

qrRef.current?.download('design-system', 'png');
\`\`\`

## Download

The built-in overlay download action and the \`download(fileName?, extension?)\` method use \`downloadFileName\` as the default file name.

## Styling

The React component uses the same CSS variables and parts as the web component.

\`\`\`css
.brand-qr {
  --jb-qrcode-image-color: #111827;
  --jb-qrcode-overlay-bg-color: rgb(17 24 39 / 60%);
}
\`\`\`

\`\`\`jsx
<JBQRCode className="brand-qr" value="https://github.com/javadbat/design-system" />
\`\`\`

## CSS parts and variables

Use the same CSS parts and variables as the web component. The \`Styling\` section above shows the React class-based pattern.

## Accessibility notes

Provide nearby text that describes what the QR code represents. QR images are visual encodings, so the destination or payload should also be available as readable text or a link when users need to inspect it.

## Shared Documentation

For QR rendering options, styling, downloads, shadow parts, and web-component behavior, see [\`jb-qrcode\`](https://github.com/javadbat/jb-qrcode).

## Related Docs

- See [\`qr-code-styling\`](https://www.npmjs.com/package/qr-code-styling) for supported rendering option values.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import \`JBQRCode\` from \`jb-qrcode/react\`; the wrapper imports and registers the underlying \`jb-qrcode\` web component.
- Use \`value\` for encoded QR data and \`logo\` for the optional center image URL.
- Prefer \`dotsOptions\`; \`dotsOption\` is supported as a legacy alias.
- Use \`downloadFileName\` in React, not the HTML attribute \`file-name\`.
- Use a ref and call \`download(fileName?, extension?)\` for programmatic downloads.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBQRCode/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};