import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BgTYBwyO.js";import{A as n,d as r,u as i,v as a}from"./blocks-D5BSbCx1.js";import{t as o}from"./mdx-react-shim-D5WWw0qZ.js";var s,c=e((()=>{s=`# Contribution Guide 🤝

Thanks for helping improve JB Design System. This repository is a monorepo for building, testing, and documenting many independent component packages. Most components live under \`modules/\` as Git submodules, so contributors usually work in the package repository and use this monorepo to run the full design-system environment.

## Before You Start 🧭

1. Open or find an issue in the related package repository.
2. Comment that you want to work on it so the maintainers can confirm scope and avoid duplicate work.
3. Check whether the change belongs in a component package, shared core package, Storybook docs, build tooling, or this monorepo.
4. Keep the change focused. Avoid unrelated formatting, refactors, generated files, or version bumps unless they are part of the task.

## Local Setup 🛠️

Clone the monorepo with all submodules:

\`\`\`bash
git clone --recurse-submodules -j8 https://github.com/javadbat/design-system.git
\`\`\`

If you already cloned the repository:

\`\`\`bash
git submodule update --init --recursive
\`\`\`

Install dependencies:

\`\`\`bash
deno install
\`\`\`

Build every package once after setup:

\`\`\`bash
deno task build
\`\`\`

Start Storybook and the mock API:

\`\`\`bash
deno task start
\`\`\`

Storybook runs on port \`3100\`.

## Working On A Component 🧩

Component source usually follows this structure:

\`\`\`text
modules/jb-package-name/
  lib/              web component source
  react/            React wrapper source
  stories/          Storybook examples and docs
  README.md         web component documentation
  custom-elements.json
  build-config.ts
\`\`\`

Create your feature branch in the package repository you are changing. Because modules are submodules, commit package changes inside that package repository first. Then update the submodule pointer in this monorepo only when the package change is ready.

Build one package while developing:

\`\`\`bash
deno task build --name=jb-input
\`\`\`

Watch one package while developing:

\`\`\`bash
deno task build --name=jb-input --watch
\`\`\`

Replace \`jb-input\` with the package name you are changing.

## What To Update 📝

For a component behavior change, update the relevant source and the user-facing surfaces that explain or protect it.

- 🧩 Web component source in \`lib/\`.
- ⚛️ React wrapper source in \`react/\`, when the wrapper API is affected.
- 📚 Storybook stories in \`stories/\`.
- 📄 Web component \`README.md\`.
- 📄 React wrapper \`react/README.md\`, when React usage changes.
- 🧾 \`custom-elements.json\`, when public attributes, properties, methods, events, slots, CSS parts, or CSS variables change.
- ✅ Tests or Storybook \`play\` assertions for changed behavior.

For a documentation-only change, update the smallest docs surface that solves the problem. Prefer examples that users can copy into real applications.

## Storybook Expectations 📚

Storybook is both documentation and a test environment for this design system.

- 🖼️ Add or update an overview story when the visible behavior changes.
- 🔬 Add focused stories for important states such as disabled, invalid, loading, empty, filled, RTL, and custom styling.
- ✅ Use \`play\` tests for behavior that can regress, especially form values, validation, keyboard input, event dispatching, and open or close flows.
- 🌐 Check English, Persian, Persian numbers, LTR, and RTL from the Storybook toolbar when the component displays text, numbers, dates, or layout direction.

## Accessibility Expectations ♿

Accessible behavior is part of the component API.

- 🏷️ Labels and helper messages should be exposed to assistive technology.
- ⌨️ Keyboard users should be able to reach and operate interactive elements.
- 🎯 Focus should be visible and predictable.
- 🚦 Disabled and invalid states should be clear visually and semantically.
- 🪟 Modal, popover, and picker interactions should document any focus or Escape-key behavior.

## Styling Expectations 🎨

Components should be customizable without forking internals.

- 🎛️ Prefer CSS custom properties for theme-level customization.
- 🧩 Expose \`::part(...)\` names for structural styling when needed.
- 🧵 Keep CSS variable names consistent with existing package naming.
- 📄 Document new variables, parts, slots, and states in the package README.
- 🔒 Avoid styling APIs that depend on private shadow DOM details.

## Run Checks ✅

Run the full test command before opening a PR when practical:

\`\`\`bash
deno task test
\`\`\`

Run Storybook build when docs or stories change:

\`\`\`bash
deno task build-storybook
\`\`\`

Run a package build after component source changes:

\`\`\`bash
deno task build --name=jb-input
\`\`\`

## Pull Request Checklist 🚀

Before requesting review:

- ✅ The changed package builds.
- 📚 Storybook renders the changed docs and stories.
- 🧪 Tests or \`play\` assertions cover the important behavior.
- 📄 README and React README are updated when public usage changes.
- 🌐 Accessibility and RTL/i18n behavior were considered.
- 📝 The PR description explains the user-facing change, not only the implementation.
- 🔗 The PR links to the related issue.

## Adding A New Package 📦

Add a package as a submodule under \`modules/\`:

\`\`\`bash
git submodule add -f https://github.com/user/repo.git modules/module-name
\`\`\`

New packages should include a README, package metadata, \`build-config.ts\`, Storybook docs, and enough examples for users to understand when and how to adopt the component.

## Removing A Package 🧹

Remove a package from the monorepo only after maintainers agree on migration or deprecation:

\`\`\`bash
git rm modules/module-name
\`\`\`
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`General/Contribution Guide`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};