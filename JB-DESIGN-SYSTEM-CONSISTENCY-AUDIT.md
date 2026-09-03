# JB Design System Consistency Audit

## Scope and method

This audit compares public naming contracts in component source, `custom-elements.json`, package READMEs, React wrappers, and Storybook usage. Generated `dist/` files and theme-demo repetitions were treated as secondary evidence.

The goal is to identify inconsistencies that make component discovery and correct usage difficult for people and coding agents. Similar names can still be valid when they describe genuinely different concepts; the findings below focus on repeated concepts that use different conventions or public names.

## Priority summary

| Priority | Area | Finding |
| --- | --- | --- |
| P0 | Public events | Both kebab-case and camelCase event names are used. React event props also vary between `onKeyDown` and `onKeydown`. |
| P0 | CSS variables | Renamed variables remain visible in changelogs/docs, and several active families still use competing forms such as `bgcolor`/`bg-color`. |
| P1 | CSS parts | Equivalent structural concepts use `root`, `component`, `component-wrapper`, `wrapper`, `container`, and `content-box`. |
| P1 | Slots | Directional input slots are `start-section`/`end-section`, while textarea uses `inline-*`/`block-*`; there is no documented slot taxonomy. |
| P1 | Composite parts | Inherited or exported parts are renamed inconsistently, for example `jb-input` in date input versus direct `input`/`input-box` exposure in time input. |
| P2 | Component names | Package, tag, export, and folder names are not always aligned (`jb-icons` package versus `jb-icon` catalog title; `@jbui/tooltip` package). |
| P2 | Metadata | `custom-elements.json` represents default slots as empty names, while documentation calls them `default`; metadata does not always expose the full implementation contract consistently. |

## Findings

### 1. Event names use competing casing conventions — P0

The event contract mixes kebab-case, camelCase, and compound names:

| Convention | Examples | Evidence |
| --- | --- | --- |
| Kebab-case | `before-change`, `dirty-change`, `form-change`, `validity-change`, `download-start`, `intent-submit` | [`jb-form.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-form/web-component/lib/jb-form.ts:414), [`jb-switch.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-switch/web-component/lib/jb-switch.ts:243), [`extra-filter.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-searchbar/web-component/lib/extra-filters/extra-filter.ts:178) |
| camelCase | `urlOpen`, `scrollEnd`, `imageSelected`, `maxSizeExceed` | [`jb-modal.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-modal/web-component/lib/jb-modal.ts:131), [`custom-elements.json`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-image-input/web-component/custom-elements.json:1) |
| Package-prefixed kebab-case | `jb-option-connected`, `jb-option-disconnected` | [`jb-option.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-select/option/web-component/lib/jb-option.ts:130) |

This directly affects event listeners, React wrapper mappings, documentation search, and generated metadata. `urlOpen` and `scrollEnd` should be treated as public compatibility concerns, not merely style differences.

### 2. React event prop casing is inconsistent — P0

The same native event family uses different React prop conventions:

- `JBInput`, `JBMobileInput`, `JBNumberInput`, `JBPasswordInput`, and `JBPaymentInput` use `onKeydown`, `onKeyup`, and `onBeforeinput`.
- `JBTextarea`, `JBDateInput`, `JBTimeInput`, and `JBPinInput` use `onKeyDown`, `onKeyUp`, and `onBeforeInput`.

Examples: [`JBInput.tsx`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-input/react/lib/JBInput.tsx:35), [`JBMobileInput.tsx`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-mobile-input/react/lib/JBMobileInput.tsx:18), [`JBTextarea.tsx`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-textarea/react/lib/JBTextarea.tsx:18), and [`JBDateInput.tsx`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-date-input/react/lib/JBDateInput.tsx:36).

The `jb-input` React README explicitly teaches the lowercase-d form, while newer wrappers and docs teach DOM-style camel-cased props. This is a high-probability source of agent and developer mistakes.

### 3. CSS variable spelling has competing forms — P0

The active variable families contain both concatenated and hyphenated forms:

| Concept | Competing names | Evidence |
| --- | --- | --- |
| Background color | `--jb-button-bgcolor` vs `--jb-button-bg-color`; similarly input, select, and textarea | [`jb-button` changelog](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-button/CHANGELOG.md:35), [`jb-input` changelog](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-input/CHANGELOG.md:34), [`jb-select` variables](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-select/web-component/lib/variables.css:1) |
| Message error color | `--jb-checkbox-message-error-color` vs `--jb-checkbox-message-color-error`; same historical pattern in image input and textarea | [`jb-checkbox` changelog](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-checkbox/CHANGELOG.md:47), [`jb-checkbox` variables](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-checkbox/web-component/lib/variables.css:23) |
| Grid active page color | `--jb-grid-page-active-color` vs `--jb-grid-page-color-active` | [`jb-grid` changelog](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-grid/CHANGELOG.md:47), [`jb-grid` React README](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-grid/react/README.md:207) |
| Placeholder colors | `placeholder-p-color`, `placeholder-sec-color`, `placeholder-primary-color`, `placeholder-neutral-color` | [`jb-image-input` changelog](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-image-input/CHANGELOG.md:42), [`jb-image-input` variables](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-image-input/web-component/lib/variables.css:12) |

The changelogs show that some are intentional breaking renames, but the old names remain discoverable in repository-wide searches and historical docs. For an agent, this looks like multiple valid APIs unless aliases and canonical names are clearly marked.

### 4. Shared visual concepts use different CSS part names — P1

Root/container parts vary substantially:

| Concept | Names currently used |
| --- | --- |
| Component root | `root`, `component`, `component-wrapper`, `wrapper`, `container` |
| Main content surface | `content`, `content-box`, `content-wrapper`, `textarea-box`, `input-box` |
| Icon representation | `icon`, `icon-svg`, `download-icon`, `loading-svg`, `svg-wrapper` |
| Action control | `button`, `refresh-button`, `download-button`, `close-button`, `trigger-button` |

Examples include [`jb-range-input` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-range-input/web-component/lib/render.ts:9), [`jb-qrcode` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-qrcode/web-component/lib/render.ts:6), [`jb-modal` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-modal/web-component/lib/render.ts:3), [`jb-time-picker` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-time-picker/web-component/lib/render.ts:3), and [`jb-grid` viewport](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-grid/web-component/lib/viewport/render.ts:3).

Some variation is legitimate for domain-specific internals, but there is no clear rule for which root and surface names are stable public parts and which are implementation details.

### 5. Inherited and exported parts are not uniform — P1

Input-derived components expose shared parts differently:

- `jb-date-input` exports the nested input as `part="jb-input"`, then exports calendar parts through `exportparts`.
- `jb-time-input` exposes `part="input"`, `part="input-box"`, and other nested parts directly through its own `exportparts` list.
- `jb-mobile-input`, `jb-national-input`, `jb-password-input`, and `jb-payment-input` describe inherited `jb-input` parts, but their actual public metadata and implementation paths differ.

Evidence: [`jb-date-input` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-date-input/web-component/lib/render.ts:7), [`jb-time-input` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-time-input/web-component/lib/render.ts:7), and [`jb-mobile-input` metadata](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-mobile-input/web-component/custom-elements.json:191).

An agent cannot safely infer whether a part is local, inherited, renamed, or forwarded without reading each component's implementation.

### 6. Slot naming has no shared taxonomy — P1

Current slot families include:

| Pattern | Examples | Components |
| --- | --- | --- |
| Directional sections | `start-section`, `end-section` | `jb-input` and derived inputs |
| Logical directional sections | `inline-start-section`, `inline-end-section`, `block-start-section`, `block-end-section` | `jb-textarea` |
| Semantic regions | `header`, `content`, `footer` | `jb-modal` |
| State/content regions | `content`, `loading`, `empty` | `jb-infinite-scroll` |
| Functional adornments | `uploader-icon`, `calendar-trigger-icon`, `select-arrow-icon` | file, date, and select components |
| Default + named trigger/content | default trigger, `content` | `jb-tooltip` and `jb-popover` |

The names are individually understandable, but `start-section` versus `inline-start-section`, `content` versus `default`, and `uploader-icon` versus `placeholder-icon` are not governed by a documented rule. See [`jb-input` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-input/web-component/lib/render.ts:7), [`jb-textarea` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-textarea/web-component/lib/render.ts:6), and [`jb-file-input` render](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-file-input/web-component/lib/render.ts:25).

### 7. Default-slot metadata is represented inconsistently — P2

In `custom-elements.json`, default slots appear as an empty 
ame` value, while package documentation describes the same slot as `default`. This occurs in modal, select, tooltip, and button metadata/docs.

Examples: [`jb-modal` metadata](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-modal/web-component/custom-elements.json:120), [`jb-button` README](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-button/README.md:138), and [`jb-popover` README](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/modules/jb-popover/README.md:168).

The metadata should choose one machine-readable representation, while documentation can explain that `default` means no `slot` attribute.

### 8. Component/package naming has exceptions — P2

Most packages align across folder, package, and tag names, but there are exceptions:

- Catalog title is `jb-icon`, build/package identity is `jb-icons`.
- Tooltip is published as `@jbui/tooltip`, while the repository component is `jb-tooltip`.
- Notification includes multiple public elements and a manager in one package.
- Several components contain nested package boundaries such as `jb-select/listbox`, `jb-select/option`, and `jb-tab/trigger`.

Evidence: [`config/package-list.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/config/package-list.ts:1), [`config/build-config.ts`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/config/build-config.ts:1), and [`docs/component-list.md`](A:/Home/nevesht-afzar/work/Azad/source/design-system/design-system/docs/component-list.md:1).

These are manageable with explicit aliases in the component index, but they are risky for package discovery and import generation.

## Confirmed decisions

The following decisions are confirmed and implemented:

1. DOM custom events should use lowercase kebab-case.
2. React wrapper handlers should use React-style camelCase with correct acronym/word capitalization, for example `onKeyDown`, `onKeyUp`, `onBeforeInput`, `onBeforeChange`, and `onScrollEnd`.
3. `--jb-...-bg-color...` is canonical. All `bgcolor` forms should be renamed.
4. Design tokens place status after the styled property: `message-color-error` is canonical.
5. `message-error` is allowed only when it names a distinct element, not merely an error status. This exception requires explicit component-level confirmation before being introduced.
6. CSS-part and package/component naming follow the confirmed mixed-part and npm-availability policies below.

## Confirmed later-stage decisions

7. CSS parts use a mixed policy: shared structures use semantic names (`root`, `label`, `control`, `message`, `icon`, `trigger`, `content`, `header`, and `footer`); unique structures may retain domain-specific names.
8. Directional slots use logical names: `inline-start`, `inline-end`, `block-start`, and `block-end`. Semantic regions use names such as `header`, `content`, `footer`, `actions`, `loading`, and `empty`.
9. Composite components expose a shared public part contract where possible. A forwarded part gets a component prefix only when it would conflict with a parent part name.
10. Default slots remain machine-readable as `name: ""` in `custom-elements.json`; descriptions must say `Default slot. Use without a slot attribute.`
11. Package naming remains unchanged because npm availability is a real constraint. Use the `jb-<name>` package pattern when available; otherwise use the `@jbui/<name>` pattern and record the exception explicitly.
12. A part may be renamed, but an existing element's `part` attribute must never be removed. Every part rename must update its CSS selectors, styling stories, Storybook assertions, README examples, and `custom-elements.json` entry together.

The resulting CSS-part classification is documented in [`docs/css-parts-contract.md`](docs/css-parts-contract.md). Form-control and calendar/time parts are now reviewed groups; future groups will be classified with the same process.

## Recommended normalization policy

The canonical rules are:

1. Use lowercase kebab-case for all DOM event names. Renamed event names are breaking changes; do not dispatch or register old camelCase aliases.
2. Use React handler casing such as `onBeforeInput`, `onKeyDown`, `onKeyUp`, `onMouseDown`, and camel-cased names for custom events.
3. Use `--jb-<component>-<object>-<property>-<state>` for CSS variables. Prefer `bg-color` and `message-color-error`; use full semantic words over abbreviations.
4. Treat `message-error` as a distinct element name only with explicit approval; do not use it as a casual alternative to `message-color-error`.
5. Use the confirmed mixed CSS-part taxonomy, logical slot taxonomy, and npm-availability package policy recorded above.
6. Represent default slots in metadata as `name: ""` and document them consistently as `Default slot. Use without a slot attribute.`
7. Record package/tag/export exceptions and inherited/forwarded parts explicitly in component metadata.

## Implementation status

The naming migrations, part and slot contracts, package-name exceptions, documentation, stories/samples, changelogs, manifests, and automated consistency checker are complete. Shared property, state, and method conventions are finalized in [`JB-DESIGN-SYSTEM-PROPERTY-STATE-AUDIT.md`](JB-DESIGN-SYSTEM-PROPERTY-STATE-AUDIT.md), with `valueType` explicitly deferred unchanged. The remaining work is coordinated release validation and publication, not further convention design in this pass.

## Breaking migration decision

The confirmed policy is to treat the event, React handler, and CSS-variable renames as breaking changes. Old names are removed immediately from active source, manifests, documentation, stories, and samples. They may remain only in historical changelog entries and this audit as migration history. No CSS aliases, React prop aliases, or dual-dispatched DOM events will be added.
