import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BMjwejaC.js";import{d as n,f as r,j as i,y as a}from"./blocks-BJdItL-f.js";import{t as o}from"./mdx-react-shim-Ce7u8E8j.js";var s,c=e((()=>{s=`# JB i18n

\`jb-core/i18n\` is a small locale coordinator for JB Design System. It is not a
replacement for a full application i18n library.

## Locale

The shared instance reads the document language when it is created:

\`\`\`html
<html lang="fa">
\`\`\`

You can also update it explicitly. Locale-aware JB components subscribe to this
instance and update unless their related property or attribute was explicitly
set by the consumer.

\`\`\`ts
import { i18n } from "jb-core/i18n";

i18n.setLocale("fa-IR");
\`\`\`

\`setLocale\` accepts either a locale string or an \`Intl.Locale\`. JB supplies a
default calendar, region, and Latin numbering system when they are omitted:

- \`en\` resolves to Gregorian, US, and Latin digits.
- \`fa\` resolves to Persian, IR, and Latin digits.

Explicit Unicode options are preserved, so Persian digits can be requested
with \`fa-IR-u-nu-arabext\`.

The module can be imported without browser globals. In SSR and other DOM-free
environments its initial locale is English. The document language is read once;
changing \`<html lang>\` later does not update the instance automatically.

Use \`new JBI18N(locale)\` when an independent instance is needed:

\`\`\`ts
import { JBI18N } from "jb-core/i18n";

const context = new JBI18N("en-GB");
\`\`\`

### Listen for locale changes

\`subscribe\` returns its cleanup function:

\`\`\`ts
const unsubscribe = i18n.subscribe(() => {
  renderWithLocale(i18n.locale);
});

unsubscribe();
\`\`\`

### React

The React hook subscribes the component to locale changes and returns the i18n
context:

\`\`\`tsx
import { useJBI18N } from "jb-core/i18n/react";

function Toolbar() {
  const context = useJBI18N();
  return <span>{context.locale.language}</span>;
}
\`\`\`

## Dictionary

\`JBDictionary\` stores component messages. Values may be strings, functions, or
nested objects; the dictionary shape does not need to be flattened.

\`\`\`ts
import { i18n, JBDictionary } from "jb-core/i18n";

const dictionary = new JBDictionary({
  fa: {
    toolbar: {
      save: "ذخیره",
    },
  },
  en: {
    toolbar: {
      save: "Save",
    },
  },
});

dictionary.get(i18n, "toolbar").save;
\`\`\`

Use \`setLanguage\` to add or replace a language:

\`\`\`ts
dictionary.setLanguage("de", {
  toolbar: {
    save: "Speichern",
  },
});
\`\`\`

Lookup checks the full regional locale, its base language, the configured
fallback language, and English. Falsy values such as \`""\`, \`0\`, \`false\`, and
\`null\` are treated as valid values. When no value is found, \`get\` logs an error
and returns an empty string.

\`\`\`ts
const dictionary = new JBDictionary(messages, {
  fallbackLanguage: "de",
});
\`\`\`

## Internal helpers

Helpers such as \`getRequiredMessage\` are intended for JB Design System modules,
but are also available to custom JB-based components.

\`\`\`ts
import { getRequiredMessage, i18n } from "jb-core/i18n";

getRequiredMessage(i18n, "email");
\`\`\`
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBCore/i18n Readme`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};