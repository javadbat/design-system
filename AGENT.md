# Agent Notes

## Project Shape
- JB Design System is a Deno/TypeScript monorepo that orchestrates many separately published web-component packages.
- Component packages live in `modules/<package-name>` and are Git submodules. Treat each package as its own repo boundary.
- Most packages follow this layout: `lib/` for web-component source, `react/` for React wrapper source, `stories/` for Storybook examples, `dist/` and `react/dist/` for generated builds.
- The root package is mostly tooling, docs, Storybook, and build orchestration; shared component code usually belongs in the relevant package or `modules/jb-core`.

## Common Commands
- Install deps: `deno install`
- Build all packages: `deno task build`
- Build one package: `deno task build --name=jb-input`
- Watch one package: `deno task build --name=jb-input --watch`
- Start Storybook: `deno task start` on port `3100`
- Run Storybook interaction tests: `deno task test-storybook`
- Watch Storybook interaction tests: `deno task test-storybook-watch`
- Install commit-message hooks for root and submodules: `deno task install-git-hooks`
- Root Storybook tests are configured with Vitest/Playwright in `vitest.config.ts`.

## Storybook Interaction Tests
- Prefer Storybook story `play` functions for automated component behavior checks that should run before publishing.
- Use `storybook/test` helpers inside stories, commonly `expect`, `userEvent`, `waitFor`, and `within`.
- Treat the stack as: Storybook story renders the component example, `play` performs interaction/assertions, Vitest runs the tests, and Playwright provides the real browser underneath.
- Do not default to raw `@playwright/test` specs for story behavior tests unless the task specifically needs page-level browser automation outside Storybook.
- Keep story tests focused on release confidence: open/close flows, event callbacks, value changes, validation states, keyboard/mouse interaction, and important responsive variants.
- For web components with shadow DOM, combine Testing Library queries for visible light-DOM content with direct custom-element or shadow-root checks when needed.
- Storybook 10.3+ applies preview annotations automatically through `@storybook/addon-vitest`, so story tests should rely on the same locale/dir/theme context as Storybook.

## Build Wiring
- Root build config is `config/build-config.ts`; it imports each package's `build-config.ts`.
- Per-package build configs export `webComponentList` and `reactComponentList`.
- Web-component entries usually point at `./lib/index.ts` and output to `./dist/index.js`.
- React wrapper entries usually point at `./react/lib/<Component>.tsx` and output to `./react/dist/<Component>.js`.
- Keep `external` and `globals` in build configs aligned when adding package dependencies.

## Coding Conventions
- Use TypeScript modules and ESM imports; CommonJS is disallowed by Biome.
- Formatting is Biome-style: 2 spaces, double quotes, LF, line width 180.
- CSS files are excluded from Biome formatting/linting.
- Prefer existing package patterns: `jb-*.ts`, `render.ts`, `types.ts`, `variables.css`, `global.d.ts`, `i18n.ts` where applicable.
- React wrappers usually expose attributes/events through `attributes-hook.ts` and `events-hook.ts`.

## Safety Notes
- Check `git status --short` before editing; submodule changes may appear separately.
- Do not commit or hand-edit generated `dist/` outputs unless the task explicitly asks for built artifacts.
- Many component folders ignore `dist/` and `react/dist/`.
- Commits must use Conventional Commits, for example `feat(jb-input): add clear button`.
- When touching one component, run the narrow package build first, then broaden only if needed.
- Networked Deno commands may need approval in restricted environments.
