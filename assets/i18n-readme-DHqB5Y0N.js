import{j as e,M as r,k as a}from"./index-Bv8zhEsk.js";import{useMDXComponents as i}from"./index-DVgGKjXv.js";import"./iframe-CIgGA-FX.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# JB I18N Module

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
used to get error message of required filed base on their label

\`\`\`ts
getRequiredMessage(context:JBI18N,label?:string)
//example
import {i18n,getRequiredMessage} from 'jb-core/i18n';
getRequiredMessage(i18n,"your label");
\`\`\``;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/JBCore/i18n Readme"}),`
`,e.jsx(a,{children:s})]})}function f(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{f as default};
