import{j as n,M as s,o as a}from"./index-Cvbpn0US.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import"./iframe-BGfgCk35.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const i=`# jb-qrcode React Component

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
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/JBQRCode/React Readme"}),`
`,n.jsx(a,{children:i})]})}function h(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{h as default};
