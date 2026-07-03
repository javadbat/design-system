import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-uoF7cpi9.js";import{_ as n,d as r,k as i,u as a}from"./blocks-Dj_nyNSz.js";import{t as o}from"./mdx-react-shim-DOfCvuWp.js";var s,c=e((()=>{s=`# JB I18N Module

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-core)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-core/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-core-i18n)](https://www.npmjs.com/package/jb-core-i18n)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-core)

## config file
JB Design System use html tag \`lang\` attribute to set the default language of it's components.

\`\`\`html
<html lang="fa">
  <!-- or -->
<html lang="en">
\`\`\`

if you want to set your locale manually in javascript you just have to import \`i18n\` and set your default locale:

\`\`\`ts
import {i18n} from 'jb-core/i18n';
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale for more setting detail
i18n.setLocale(new Intl.Locale("fa"))
\`\`\`

## Dictionary

Dictionary is where we keep our messages and texts string for different languages

\`\`\`ts
import {JBDictionary} from 'jb-core/i18n';

export const dictionary = new JBDictionary({
  "fa":{
    yourKey:"مقدار شما"
  },
  "en":{
    yourKey:"your value"
  }
});
\`\`\`
### Add new language

you can add or replace currently exists language by using \`setLanguage\` method.

\`\`\`ts
dictionary.setLanguage("jp",{yourKey:"あなたの鍵"})
\`\`\`

### getValue

\`\`\`ts
import {i18n} from "jb-core/i18n";

dictionary.get(i18n,"yourKey")
\`\`\`

## Internal Methods

this methods are internal methods and intended to be used inside jb design system modules but you can also use them if you are creating modules

### getRequiredMessage
used to get error message of required filed based on their label

\`\`\`ts
getRequiredMessage(context:JBI18N,label?:string)
//example
import {i18n,getRequiredMessage} from 'jb-core/i18n';
getRequiredMessage(i18n,"your label");
\`\`\`
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCore/i18n Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};