# Agent Notes

## Project Shape
- JB Design System is a Deno/TypeScript monorepo that orchestrates many separately published web-component packages.
- Component packages live in `web-component/<package-name>` and are Git submodules. Treat each package as its own repo boundary.
- Most packages follow this layout: `lib/` for web-component source, `react/` for React wrapper source, `stories/` for Storybook examples, `dist/` and `react/dist/` for generated builds.
- The root package is mostly tooling, docs, Storybook, and build orchestration; shared component code usually belongs in the relevant package or `web-component/jb-core`.

## Common Commands
- Install deps: `deno install`
- Build all packages: `deno task build`
- Build one package: `deno task build --name=jb-input`
- Watch one package: `deno task build --name=jb-input --watch`
- Start Storybook: `deno task start` or `npm run start` on port `3100`
- Root Storybook tests are configured with Vitest/Playwright in `vitest.config.ts`.

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
- When touching one component, run the narrow package build first, then broaden only if needed.
- Networked Deno/NPM commands may need approval in restricted environments.
