# JB Design System Property, State, and Method Consistency Audit

## Scope

This audit compares public properties, reflected attributes, public methods, shared validation objects, and repeated private helper names across JB components. The decisions in this document are confirmed and implemented unless a section is explicitly marked deferred.

## Priority summary

| Status | Area | Standardized outcome |
| --- | --- | --- |
| Resolved | Open state | Popup-like components use `isOpen`; notifications use read-only `isVisible`. |
| Resolved | Open methods | Popup-like components use `open()`/`close()`; notifications retain `show()`/`hide()`. |
| Resolved | Validation configuration | Form controls use `isAutoValidationDisabled`, `disable-auto-validation`, and the `showError` validation option. |
| Resolved | Loading state | Component busy state uses `isLoading`; specific transfer state uses `isUploading`; HTML attributes use `is-loading`/`is-uploading`. |
| Resolved | Empty/end state | Use `isEmpty` for primary-content emptiness and `hasMore` for pagination availability. |
| Resolved | Initial value | Form controls use `initialValue`; `defaultValue` is reserved for one-time uncontrolled configuration. |
| Resolved | Display versus submitted value | `displayValue` is rendered text; alternate typed values use native-style `valueAsDate`/`valueAsNumber`. |
| Resolved | Selection state | Native-compatible states use `checked`, `selected`, and `hidden`; custom runtime states use `is*`, including `isActive` and future `isExpanded`. |
| Resolved with one deferral | Direction/format options | Direction, leading-zero, and file-accept terminology are resolved; `inputType`, `format`/`valueFormat`, and `showPersianNumber` are accepted exceptions; `valueType` is deferred without changes. |
| Resolved | Private value helpers | Form synchronization uses `#updateFormValue()` and empty-value transitions use `#clearValue()`; complex mutation helpers remain component-specific. |
| Resolved | Private event handlers | Direct DOM listeners use `#on<Target><Event>()`, exact event-name casing, and present-tense event names. |

## 1. Open state and visibility

### Implemented forms

| Component or feature | Property/state | Methods | Notes |
| --- | --- | --- | --- |
| `jb-modal` | `isOpen`, `is-open` attribute, `open` custom state | `open()`, `close()` | Establishes the shared overlay contract. |
| `jb-popover` | `isOpen`, `is-open` attribute, `open` custom state | `open()`, `close()` | Same contract as modal. |
| `jb-select` | `isOpen`, internal popover | `focus()`, `blur()`, `open()`, `close()` | Native focus methods remain separate from explicit list control. |
| `jb-color-input` | `isOpen` | `open()`, `close()` | Uses the nested color-picker popover internally. |
| `jb-date-input` | `isOpen` | `open()`, `close()` | Calendar picker visibility follows the shared contract. |
| `jb-time-input` | `isOpen` | `open()`, `close()` | Time picker visibility follows the shared contract. |
| `jb-tooltip` | `isOpen` read-only property | `open()`, `close()`, `toggle()` | Uses the browser Popover API while exposing the shared names. |
| `jb-notification` | `isVisible` read-only property | `show()`, `hide()` | Notifications remain transient and use visibility semantics. |

### Confirmed standard

```ts
isOpen: boolean;
open(): void;
close(): void;
toggle(): boolean; // optional, returns the resulting state
```

Popup-like surfaces and pickers use `isOpen`, `open()`, and `close()`. `toggle()` is optional. `isOpen` reflects the actual open/rendered state. The HTML attribute is `is-open` where the component supports attribute reflection, and React wrappers use `isOpen`. Date and time picker controls replace `showCalendar`/`showTimePicker`; color input replaces `openPicker()`/`closePicker()`. Select keeps native `focus()`/`blur()` and also exposes `open()`/`close()`.

Notifications are transient rather than persistent overlays, so they keep `show()`/`hide()` and expose read-only `isVisible`.

Implementation status: complete for the components listed above.

## 2. Validation

### Consistent pieces already present

Most form controls expose:

```ts
validation
validationMessage
checkValidity(): boolean
reportValidity(): boolean
isDirty
initialValue
```

### Confirmed standard

- Public property: `isAutoValidationDisabled`.
- HTML attribute: `disable-auto-validation`.
- Validation helper option: `showError`.
- Validation result: `isValid` for an item and `isAllValid` for an aggregate result.
- Every form-control component exposes `validity` and `validationMessage`.
- Async validation is accessed through `formElement.validation.checkValidity()`; form controls do not expose a separate async validation method.
- `triggerInputValidation()` is removed as a breaking change.

Implementation status: complete. Platform-compatible `checkValidity()`, `reportValidity()`, `validity`, and `validationMessage` are exposed by form controls. `clearValidationError()` remains the shared error-clearing method, `isValid` describes an individual result, and `isAllValid` is reserved for aggregate results.

## 3. Loading and busy state

### Implemented forms

- `jb-button`: `isLoading`, `loadingText`.
- `jb-searchbar`: `isLoading` property and `is-loading` attribute.
- `jb-infinite-scroll`: `isLoading` property and `is-loading` attribute.
- `jb-switch`: `isLoading` property and `is-loading` attribute.
- `jb-file-input` and `jb-image-input`: `isUploading`, read-only aggregate `isLoading`, and `uploadPercent`.
- Infinite scroll exposes `isEmpty` and `hasMore`.

### Confirmed standard

- Use `isLoading` for component busy state.
- Use `isUploading`, `isDownloading`, `isEncoding`, or another domain-specific `is*` name when a component exposes a distinct loading activity.
- If a component has multiple loading activities, expose `isLoading` as a computed read-only aggregate of those specific states. A component with one generic loading state may expose writable `isLoading`.
- Use `is-loading` and `is-uploading` for corresponding HTML attributes; React uses the camelCase property names.
- Keep `uploadPercent` as the domain-specific progress value.
- Keep `loading` as a slot/state name only when it describes rendered content, not component state.

Implementation status: complete for `jb-button`, `jb-searchbar`, `jb-infinite-scroll`, `jb-switch`, `jb-file-input`, and `jb-image-input`.

### Confirmed empty and pagination standard

- Use `isEmpty` when the component's primary content has no items.
- Use a domain-qualified name such as `isOptionListEmpty` only when one component manages multiple collections.
- Use `hasMore` for pagination availability; `false` means no further load can occur.
- Empty and pagination properties are normally computed and read-only. They may remain controlled when the component cannot infer remote collection state, as in `jb-infinite-scroll`.
- Keep `empty` as a slot or custom-state name where it describes rendered content.

## 4. Values, defaults, and reset

### Implemented forms and explicit exceptions

- Most form controls: `value`, `initialValue`, `isDirty`.
- Tabs: `value`, `defaultValue`, `nullable`.
- Form internals: `setValue`, `setValues`, `setInitialValue`, `setInitialValues`.
- Text-like controls expose `displayValue` in addition to canonical `value`.
- Date input previously exposed `valueInDate` and `inputValue`.
- Payment/national/time controls use normalized and display representations but do not expose the same names uniformly.

### Confirmed standard

- `value`: canonical submitted/programmatic value.
- `displayValue`: formatted value shown to the user.
- `initialValue`: reset and dirty-tracking baseline.
- `isDirty`: read-only computed state indicating whether `value` differs from `initialValue`.
- `reset()`: restore `initialValue`, clear displayed validation, and synchronize the form-associated value.
- `formResetCallback()` delegates to `reset()` so direct and native form resets have identical behavior.
- `defaultValue` is reserved for one-time uncontrolled configuration, as in `jb-tab`; it is not a reset baseline.
- Alternate native-style representations use `valueAsDate` and `valueAsNumber`.
- Formatted text shown to the user uses `displayValue`.
- Breaking migrations remove `resetValue()`, `valueInDate`, and public `inputValue` immediately without aliases.
- Aggregate form methods remain plural: `setFormValues()` and `setFormInitialValues()`.

Implementation status: complete for form controls and the documented `jb-tab` exception.

## 5. Selection and boolean state

Current state concepts include:

- `selected`: options, tab triggers, selected tabs.
- `checked`: checkbox-like native semantics.
- `isActive`: public option keyboard/hover-target state; CSS continues to use the `active` state suffix.
- `hidden`: tab content and options.
- `nullable`: tab behavior configuration.
- `isOpen`: overlays and expandable rows.
- `isExpanded`: reserved public name for future disclosure state.

### Confirmed standard

- Keep native-compatible boolean property names without an `is` prefix: `checked`, `selected`, `hidden`, `disabled`, `required`, `readonly`, and `multiple`.
- `checked` is writable and synchronized with the canonical boolean `value`.
- `selected` is writable for options and tab triggers, matching native option behavior.
- Use `isActive` for a custom transient keyboard/hover target. Keep `active` for CSS custom states and style-token state suffixes.
- Use `isExpanded` for future public disclosure or expanded-row state; accessibility remains `aria-expanded`.
- Use `hidden` only for actual hidden/rendering state.
- Keep `jb-tab.nullable`; it is behavior configuration rather than current state.

Implementation status: complete for the audited selection and boolean-state APIs.

## 6. Direction, formatting, and locale

`valueType` is deferred without changes.

### Confirmed direction standard

- Use the native `dir` HTML attribute/property for component layout and text direction, matching HTML and React.
- Direction inherits from ancestors when `dir` is not set on the component.
- Do not expose duplicate `direction` or `cssDirection` component properties.
- A component that must recalculate direction-sensitive JavaScript state exposes `refreshDirection()` and refreshes automatically when its own `dir` changes.
- `jb-calendar` refreshes again whenever a containing date picker opens, so inherited direction is current.
- Domain-specific orientation, such as an arrow icon's `direction`, and the native `setSelectionRange()` direction parameter are separate concepts.

Implementation status: complete for `jb-calendar` and `jb-date-input`.

### Confirmed `inputType` exception

- Keep the existing `inputType` / `input-type` APIs in `jb-calendar` and `jb-date-input`.
- Keep the existing `paymentInputType` web-component property and `inputType` / `input-type` React and HTML APIs in `jb-payment-input`.
- Do not standardize these domain-specific modes to `calendar`, `paymentType`, or another shared name in this process.
- Native `InputEvent.inputType` remains unchanged and is unrelated.

### Confirmed format exception

- Keep the `format` HTML attribute and React prop in `jb-date-input`.
- Keep the read-only `valueFormat` web-component property and the `setFormat()` method.
- Do not consolidate these APIs into one writable `format` or `valueFormat` property in this process.

### Confirmed Persian-number exception

- Keep `showPersianNumber` and `show-persian-number` in calendar, date, time, number, range, and grid APIs.
- Keep the boolean override model while continuing to derive its default from `i18n.locale.numberingSystem` where supported.
- Do not replace the existing API with `numberingSystem`, `numbering-system`, or `usePersianDigits` in this process.

### Confirmed leading-zero standard

- Use `leadingZero` for the JavaScript property and React prop.
- Use `leading-zero` for the HTML attribute.
- The option displays time-picker values below 10 with a leading zero and does not change the canonical time value.
- `frontalZero` and `frontal-zero` are removed immediately without compatibility aliases.

Implementation status: complete for `jb-time-picker` and `jb-time-input`.

### Confirmed file-accept standard

- Use the native-compatible `accept` name for the JavaScript property, React prop, and HTML attribute.
- The value follows the native file-input accept syntax and may contain MIME types, file extensions, and wildcards.
- Forward `accept` to the component's internal native file input.
- Keep each component's existing default value when `accept` is not provided.
- `acceptTypes` and `accept-types` are removed immediately without compatibility aliases.

Implementation status: complete for `jb-file-input` and `jb-image-input`.

## 7. Private helper naming

Repeated private helpers are mostly consistent around `#setValue` and `#checkValidity`. Complex specialized paths intentionally remain component-specific:

- `#setValueByObject` versus `#setValueFromOutside` versus `setValueFromInternal`.
- `#updateValueFromInputString` versus `#updateValueFromHandle` versus `#updateValue`.
- `#isDirty` is common internally, while some components derive `isDirty` directly without maintaining the same backing field.

### Confirmed limited standard

- Every value-bearing form component implements `#updateFormValue()` to synchronize its current value with `ElementInternals.setFormValue()`.
- Every value-bearing form component implements `#clearValue()` to transition to its canonical empty value.
- Keep `reset()` distinct: it restores `initialValue` and validation state rather than necessarily clearing the value.
- Do not rename complex parsing, normalization, source-specific mutation, or protected extension helpers in this process because their semantics differ and mechanical renaming is risky.

Implementation status: complete for `jb-checkbox`, `jb-date-input`, `jb-file-input`, `jb-image-input`, `jb-input` and its derived inputs, `jb-pin-input`, `jb-range-input`, `jb-select`, `jb-listbox`, `jb-switch`, `jb-textarea`, and `jb-time-input`. `jb-button` is form-associated but is not a value-bearing form component, so these value helpers do not apply to it.

### Confirmed private event-handler standard

- Name a method registered directly as a DOM event listener `#on<Target><Event>()`.
- Preserve DOM event word casing: `KeyDown`, `KeyUp`, `BeforeInput`, `FocusIn`, and `FocusOut`.
- Use the event name rather than past tense: `Click`, not `Clicked`; `Focus`, not `Focused`.
- Include the target when a component handles the same event from multiple elements; host-level handlers may omit it.
- Reserve `#handle...` for processing helpers that are not themselves event listeners.
- This phase performs lexical renames only and does not restructure handler logic or signatures.

Implementation status: complete for the existing casing, past-tense, and direct-listener inconsistencies in `jb-color-picker`, `jb-date-input`, `jb-image-input`, `jb-input`, `jb-password-input`, `jb-pin-input`, `jb-select`, `jb-textarea`, `jb-time-input`, and `jb-time-picker`.

## Audit closure

All confirmed naming decisions in this audit have been implemented in source, React wrappers, documentation, stories/samples, changelogs, and custom-elements manifests. `valueType` is the only deferred topic and remains unchanged by explicit decision; it does not block closing this standardization pass.
