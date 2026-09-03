# CSS Parts Contract

This document defines how CSS parts are classified in JB Design System. It does not remove or hide existing parts. Any future rename must update the source element, CSS selectors, styling stories, Storybook assertions, README examples, and `custom-elements.json` together.

## Shared parts

Use these names when a component exposes the corresponding common structure:

```text
root
label
control
message
content
header
footer
trigger
icon
```

Shared parts are the preferred styling API for related components. A composite component should forward these names when the nested structure is part of its public styling contract.

## Domain-specific public parts

Domain-specific parts are allowed when they identify a user-meaningful control or visual surface that cannot be described by a shared name.

### Form controls

| Component | Domain-specific parts |
| --- | --- |
| `jb-checkbox` | `checkbox`, `check-bg`, `check-mark`, `true-text`, `false-text` where applicable |
| `jb-switch` | `switch`, `bar`, `trigger`, `trigger-ring`, `true-text`, `false-text` |
| `jb-select` | `search-input`, `clear-button`, `arrow-icon`, `popover`, `popover-content` |
| `jb-file-input` | `placeholder-title`, `placeholder-icon`, `upload-loading`, `uploading-title`, `file-icon`, `file-name` |
| `jb-date-input` | `calendar-trigger-icon`, `calendar-root`, `calendar-calendar`, `popover-content` |
| `jb-time-input` | `picker-root`, `picker-time-indicators`, `picker-time-text`, `picker-hour-text`, `picker-minute-text`, `picker-second-text`, `close-button` |
| `jb-color-picker` | `color-surface`, `surface-cursor`, `hue-slider`, `alpha-slider`, `space-switch`, `space-button`, `preview`, `value-text` |

These names remain public because they represent styling targets consumers may reasonably need. Their exact presence is component-specific and must be verified in the component manifest.

### Calendar and time components

| Component | Shared parts | Domain-specific parts |
| --- | --- | --- |
| `jb-calendar` | `root` | `navigator`, `navigator-title`, `navigator-month`, `navigator-year`, `navigator-year-range`, `arrow-button`, `prev-button`, `next-button`, `calendar`, `day-section`, `week-day`, `month-day-container`, `month-day-wrapper`, `day`, `day-button`, `day-number`, `today-day`, `current-month-day-wrapper`, `next-month-day-wrapper`, `prev-month-day-wrapper`, `month-section`, `month`, `month-name`, `year-section`, `years-wrapper`, `year`, `year-number`, `swipe-up`, `swipe-up-icon`, `swipe-up-text`, and state-specific day parts.
| `jb-time-picker` | `root` | `clock`, `outer-circle`, `inner-circle`, `time-indicators`, `time-text`, `hour-text`, `minute-text`, `second-text`.
| `jb-date-input` | `root`, `content` through forwarded surfaces | `jb-input`, `popover`, `calendar`, and prefixed forwarded calendar parts such as `calendar-root` and `calendar-calendar`.
| `jb-time-input` | `root`, `popover`, `close-button` | `input`, `time-picker`, and prefixed forwarded picker parts such as `picker-root` and `picker-time-text`.

Calendar day-state parts are intentionally domain-specific. They allow an application to style meaningful states such as today, selected, disabled, or marked days without depending on internal class names.

### Overlays and feedback

| Component | Shared parts | Domain-specific parts |
| --- | --- | --- |
| `jb-modal` | `root`, `content` | `background` for the backdrop.
| `jb-popover` | `content` | None currently exposed.
| `jb-tooltip` | `content`, `message` | `tooltip` for the native popover surface and `tail` for the tooltip pointer.
| `jb-notification` | `root`, `content`, `icon`, `title`, `description` | `icon-svg` and `texts` for focused notification styling.
| `jb-loading` | None currently exposed | `loading-wrapper`, `loading-svg`, and `loading-circle` describe the indicator layers.

The notification root is always styled with `::part(root)`. The old `::part(component)` selector is not a compatibility alias.

### Data display and utilities

| Component | Shared parts | Domain-specific parts |
| --- | --- | --- |
| `jb-grid` | `header`, `body`, `footer`, `row`, `message`, `icon`, `content` where applicable | `table`, `table-content`, `header-start`, `header-end`, `footer-start`, `footer-end`, `sort-icon`, `refresh-button`, and loading/error surfaces.
| `jb-searchbar` | `content`, `trigger` where applicable | `filter-list`, `search-button`, `dynamic-wrapper`, and extra-filter interaction parts.
| `jb-infinite-scroll` | `content`, `loading`, `empty` | `loading-wrapper`, `default-loading`, and `empty-list-wrapper`.
| `jb-qrcode` | `root`, `content` where applicable | `qrcode`, `overlay`, `download-button`, and `download-icon`.
| `jb-icons` | `svg`, `icon` | Shape-specific parts such as `arrow`, `line`, `circle`, `handle`, `pupil`, and `path`.

Grid viewport and searchbar filter wrappers retain their existing names because they identify component-specific interaction surfaces. They are not interchangeable shared `root` parts.

## Implementation-only parts

New implementation-only parts should not be added to the public manifest. Existing implementation parts must remain on their elements for compatibility and must not be removed as part of this standardization effort.

Examples include layout wrappers, internal grouping elements, and generated SVG subtrees that have no supported styling use case. They may remain in source while being omitted from new documentation.

## Composite components

Composite components expose shared child parts without renaming them when there is no conflict. Add a component prefix only when the forwarded name conflicts with a parent part:

```html
<jb-time-input exportparts="root: picker-root">
</jb-time-input>
```

The prefix describes the source surface, not the implementation hierarchy. Do not expose a child’s private wrapper merely because it exists in the shadow tree.

## Verification requirements

When a part changes, verify all of the following:

- the source element still has a `part` attribute;
- the manifest lists the new name and description;
- component CSS uses the new name where applicable;
- styling stories and Storybook assertions use the new name;
- README and sample selectors use the new name;
- the package changelog records the breaking change;
- the affected package build passes.
