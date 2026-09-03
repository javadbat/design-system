# JB Design System Agent Improvement Plan

## Objective

Make Codex consistently select and use JB Design System components correctly in new application projects, including their framework APIs, validation behavior, localization support, styling contracts, and interaction patterns.

This plan improves agent guidance and verification. It does not retrain the underlying model or change component behavior unless a separate component bug is discovered.

## Current problem

The repository contains useful component documentation, Storybook examples, package metadata, React wrappers, and `custom-elements.json` files. However, the information is distributed across packages and does not provide one reliable workflow for an agent to:

- choose the most specific component;
- distinguish web-component and React APIs;
- discover properties, events, slots, parts, and methods;
- preserve RTL, Persian locale, calendar, and number behavior;
- use built-in forms and validation instead of recreating them;
- verify that the implementation actually uses the component correctly.

## Desired agent workflow

```text
Product requirement
  -> component/category lookup
  -> specialized component selection
  -> framework API lookup
  -> implementation with JB conventions
  -> typecheck/build verification
  -> browser or Storybook interaction verification
```

## Scope

### In scope

- A discoverable `jb-design-system` Codex skill.
- A compact routing guide for component selection.
- Generated, searchable component API metadata.
- Framework-specific guidance, starting with React and web components.
- Guidance for forms, validation, RTL/localization, theming, slots, CSS parts, and custom states.
- New-project bootstrap instructions for `AGENTS.md`.
- Realistic forward tests and regression examples based on observed failures.

### Out of scope for the first iteration

- Changing component APIs or visual behavior.
- Replacing package READMEs with generated documentation.
- Building a new universal JB UI wrapper library.
- Requiring every project to use a single framework.
- Adding broad rules unrelated to JB Design System usage.

## Implementation phases

### Confirmed naming decisions

- DOM custom events will use lowercase kebab-case.
- React wrapper event props will follow React's camelCase handler convention: `onClick`, `onChange`, `onInput`, `onKeyDown`, `onKeyUp`, `onBeforeInput`, and equivalent camel-cased names for JB custom events such as `onBeforeChange` and `onScrollEnd`.
- `--jb-...-bg-color...` is the canonical spelling. All `bgcolor` variables will be renamed to `bg-color`.
- Status comes after the styled element/property name in design tokens. The canonical form is `message-color-error`, not `message-error-color`.
- A suffix such as `message-error` may be part of an actual element name when it identifies a distinct element. That is an exception to the token-status rule and must not be inferred automatically. Ask for confirmation before introducing this pattern in a new component.
- CSS parts use semantic names for shared structures and domain-specific names only for unique structures.
- Directional slots use logical names (`inline-start`, `inline-end`, `block-start`, and `block-end`); semantic regions use names such as `header`, `content`, `footer`, `actions`, `loading`, and `empty`.
- Composite components use a shared public part contract, adding a component prefix only when a forwarded part conflicts with a parent part name.
- Default slots remain `name: ""` in machine-readable manifests and are documented as slots used without a `slot` attribute.
- Package naming remains unchanged where npm names are unavailable; use `jb-<name>` when free and `@jbui/<name>` otherwise.
- Existing `part` attributes must never be removed. A part rename must update the element, CSS selectors, styling stories, Storybook assertions, READMEs, and `custom-elements.json` together.
- The reviewed CSS-part classification is maintained in `docs/css-parts-contract.md`; form controls and calendar/time components are completed groups.
- Shared property, state, and method naming is finalized in `JB-DESIGN-SYSTEM-PROPERTY-STATE-AUDIT.md`; confirmed conventions have been migrated, with `valueType` explicitly deferred unchanged.

### Phase 1 — Inventory and contracts

- [x] Enumerate all active packages from `config/package-list.ts`.
- [x] Record each package's canonical npm name, tag, React import path, stability, and intended use.
- [x] Identify authoritative sources for each API field: package README, React README, `custom-elements.json`, TypeScript types, and Storybook stories.
- [x] Define a small metadata schema covering:
  - package and component name;
  - web-component tag and React export/import;
  - use cases and “prefer instead” alternatives;
  - props/attributes and properties;
  - events and event-value access;
  - slots;
  - CSS parts, states, and variables;
  - form/validation behavior;
  - localization and direction behavior;
  - verification stories.
- [x] Document conflicts or missing information rather than silently guessing.
- [x] Classify existing names as canonical, deprecated alias, compatibility name, or unresolved exception.
- [x] Include source declarations, public manifests, READMEs, changelogs, Storybook stories, styling stories, and sample code in the inventory.

### Phase 2 — Create the Codex skill

Target skill name: `jb-design-system`.

Proposed structure:

```text
jb-design-system/
  SKILL.md
  agents/openai.yaml
  references/
    component-routing.md
    react-patterns.md
    web-component-patterns.md
    forms-validation.md
    rtl-localization.md
    styling-tokens.md
    component-api-index.json
  scripts/
    generate-api-index.ts
```

The entrypoint should remain short and teach the decision process. Detailed API material should be loaded only when relevant to the current task.

The skill must explicitly instruct the agent to:

- search the index and package documentation before inventing props or events;
- prefer a specialized JB control over a generic `input`, `select`, modal, date picker, or table when one exists;
- use the React wrapper in React projects and preserve its exact prop/event casing;
- use `.value`, `displayValue`, refs, and imperative methods according to the component contract;
- use `jb-form` and `jb-validation` where appropriate;
- preserve document direction and locale configuration;
- use supported CSS variables, `::part`, and custom states instead of shadow-DOM assumptions;
- import/register each package once;
- verify behavior with the narrowest relevant build, typecheck, story, or browser test.
- apply the confirmed `bg-color` and `message-color-error` naming rules when writing or reviewing tokens;
- treat `message-error` as an element-name exception only when the component contract explicitly defines a separate element, and ask before creating that exception.

### Phase 3 — Generate and validate the API index

- [ ] Implement the generator using repository metadata and package documentation.
- [ ] Make generation deterministic and diff-friendly.
- [ ] Add a validation command that fails when a catalog package has no discoverable API entry.
- [ ] Add checks for broken package paths, missing React mappings, duplicate tags, and unsupported claims.
- [ ] Decide whether generated JSON is committed or generated during skill packaging; prefer committed output if it improves portability and reviewability.

### Phase 4 — Naming normalization migration

This phase covers the confirmed, mechanical naming changes. It must update every public and discoverable representation together:

- [x] Rename all active `bgcolor` CSS variables and references to `bg-color`.
- [x] Rename `message-error-color` variables to `message-color-error`, except where a separate element name is explicitly intended and approved.
- [x] Update web-component source and CSS variable declarations.
- [x] Update `custom-elements.json` manifests.
- [x] Update package READMEs and React READMEs.
- [x] Update Storybook stories, styling stories, sample apps, and test utilities.
- [x] Update changelogs with breaking-change notes and the release boundary.
- [x] Confirm compatibility policy: renamed APIs are breaking changes with no CSS aliases, React prop aliases, or dual-dispatched DOM events.
- [x] Run repository-wide searches to prove deprecated names are absent from active code and only remain where intentionally documented as historical.
- [x] Run package builds and typechecks; interaction-test execution remains for the forward-testing phase.

The migration is intentionally breaking: no compatibility aliases are provided. Consumers must adopt the canonical names at the planned breaking-release boundary.

### Phase 5 — New-project integration

- [ ] Add a concise JB-specific section to the repository's agent guidance.
- [ ] Create a copyable bootstrap snippet for application repositories.
- [ ] Document where the skill must be installed for global use and how a project can explicitly invoke it.
- [ ] Add a “JB component usage checklist” to pull-request or implementation guidance.

### Repository consistency gate

- [x] Add `deno task check-consistency` to detect the confirmed stale naming patterns, invalid catalog package paths, invalid manifests, and duplicate custom-element tags.
- [x] Expand the gate after CSS-part, slot, package, inherited-part, and shared property/state conventions are decided.

Suggested bootstrap text:

```md
This project uses JB Design System. Before creating UI, use the jb-design-system skill,
look up the most specific available component, and verify its framework API, events,
validation, slots, CSS parts, and localization behavior from the component metadata/docs.
Prefer JB components over recreating equivalent native or third-party controls.
```

### Phase 6 — Forward testing and regression loop

- [ ] Test the skill with realistic requests, at minimum:
  - Persian/RTL signup form with required and custom validation;
  - mobile-number and national-ID fields;
  - controlled React form with server-side errors;
  - date selection using the Persian calendar;
  - searchable data grid with loading and empty states;
  - modal/popover flow with keyboard interaction.
- [ ] Evaluate whether the generated implementation chose the right package, imported it correctly, used the right API, and included verification.
- [ ] Record concrete failures as focused corrections.
- [ ] Convert repeated corrections into routing rules, metadata, examples, or automated checks.
- [ ] Re-run the forward tests after every meaningful skill or metadata change.

## Acceptance criteria

## Standardization phase status

The confirmed naming and styling standardization phase is complete. Events, React handler names, CSS variables, logical slots, shared CSS parts, composite forwarding, shared properties/states/methods, manifests, documentation, stories, samples, changelogs, and the consistency gate have been updated. CSS-part/package exceptions and the deferred `valueType` topic remain explicit rather than being silently normalized.

The first release is successful when:

- an agent can discover the correct JB package from a natural-language UI requirement;
- specialized controls are selected instead of generic replacements;
- React and web-component examples use the correct imports and event conventions;
- validation, form association, RTL, and Persian-localization behavior are preserved;
- styling uses documented tokens, parts, and states;
- the agent states uncertainty when documentation is incomplete;
- the skill passes its structural validator and the API-index consistency checks;
- the six forward-test scenarios produce implementations that build and pass their relevant interaction checks.

## Maintenance rules

- Treat package source, types, `custom-elements.json`, and verified stories as authoritative over copied examples.
- Keep routing guidance small; put detailed contracts in generated/reference data.
- Update the index whenever a package API, export, event, slot, or styling contract changes.
- Add a regression rule only for a demonstrated failure or a documented invariant.
- Do not commit generated `dist/` artifacts as part of this effort unless explicitly required.

## Remaining execution order

1. Resolve the local Playwright launch permission and run the interaction suite.
2. Review the coordinated breaking-release package set and versions.
3. Publish the standardized component packages.
4. Generate and validate the API index from the published contracts.
5. Create the initial skill and project bootstrap guidance.
6. Run forward tests, fix observed gaps, and publish the first usable skill version.

## Open decisions for implementation

- Should the skill be installed globally for all projects, copied into each application, or both?
- Should the API index be committed to this repository, published as a package, or generated during skill installation?
- Which frameworks need first-class guidance after React: Vue, Angular, Svelte, or another one?
- Should a future ESLint/Biome rule detect common cases where a JB component is likely being replaced by a native control?
- Which additional domain-specific CSS parts should be promoted to stable shared parts? To be reviewed incrementally.
- Which package/tag/export exceptions need explicit catalog aliases? To be recorded incrementally without renaming packages.
