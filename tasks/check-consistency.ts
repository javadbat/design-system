import { packageCatalog } from "../config/package-list.ts";

const ignoredDirectories = new Set([".git", "node_modules", "dist"]);
const sourceExtensions = new Set([".css", ".json", ".md", ".mdx", ".ts", ".tsx"]);
const stalePatterns = [
  { name: "bgcolor CSS variable", pattern: /bgcolor/g },
  { name: "message-error-color token", pattern: /message-error-color/g },
  { name: "lowercase React keyboard prop", pattern: /onBeforeinput|onKeydown|onKeyup/g },
  { name: "camelCase DOM event", pattern: /(?:CustomEvent|addEventListener)\(["'](?:scrollEnd|urlOpen|imageSelected|maxSizeExceed)["']/g },
  { name: "physical directional slot", pattern: /slot(?:=|\s*:\s*)["'](?:start-section|end-section|inline-start-section|inline-end-section|block-start-section|block-end-section)["']/g },
  { name: "legacy component CSS part selector", pattern: /::part\(component\)/g },
  { name: "legacy open-state or picker method name", pattern: /showCalendar|showTimePicker|openPicker|closePicker/g },
  { name: "removed date validation method", pattern: /triggerInputValidation/g },
  { name: "legacy list state name", pattern: /isListEmpty|isListEnded|is-list-empty|is-list-ended/g },
  { name: "legacy value/reset API", pattern: /resetValue|valueInDate/g },
  { name: "legacy public inputValue API", pattern: /get\s+inputValue\s*\(|(?:event\.target|dom)\.inputValue\b|["']name["']\s*:\s*["']inputValue["']/g },
  { name: "legacy public option active API", pattern: /\b(?:get|set)\s+active\s*\(/g },
  { name: "legacy calendar direction API", pattern: /\bcssDirection\b|setupStyleBaseOnCssDirection/g },
  { name: "legacy leading-zero API", pattern: /\bfrontalZero\b|frontal-zero/g },
  { name: "legacy file accept API", pattern: /\bacceptTypes\b|accept-types/g },
  { name: "legacy uploading public API", pattern: /\[uploading\]|\buploading\??\s*:\s*boolean|(?:get|set)Attribute\(["']uploading["']/g },
  { name: "legacy private form or clear helper", pattern: /#(?:setFormValue|syncFormValue|updateFormAssociatedValue|setValueObjNull|resetInputValue)\b/g },
  { name: "legacy private DOM event handler casing or tense", pattern: /#on[A-Za-z0-9]*(?:Keyup|Keydown|Clicked|Focused)\b|#(?:handleFieldChange|handleTextClick)\b/g },
];
const valueBearingFormComponentPaths = [
  "modules/jb-checkbox/web-component/lib/jb-checkbox.ts",
  "modules/jb-date-input/web-component/lib/jb-date-input.ts",
  "modules/jb-file-input/web-component/lib/jb-file-input.ts",
  "modules/jb-image-input/web-component/lib/jb-image-input.ts",
  "modules/jb-input/web-component/lib/jb-input.ts",
  "modules/jb-pin-input/web-component/lib/jb-pin-input.ts",
  "modules/jb-range-input/web-component/lib/jb-range-input.ts",
  "modules/jb-select/listbox/web-component/lib/jb-listbox.ts",
  "modules/jb-select/web-component/lib/jb-select.ts",
  "modules/jb-switch/web-component/lib/jb-switch.ts",
  "modules/jb-textarea/web-component/lib/jb-textarea.ts",
  "modules/jb-time-input/web-component/lib/jb-time-input.ts",
];
const genericLoadingComponentPaths = [
  "modules/jb-button/web-component/lib/jb-button.ts",
  "modules/jb-infinite-scroll/web-component/lib/jb-infinite-scroll.ts",
  "modules/jb-searchbar/web-component/lib/jb-searchbar.ts",
  "modules/jb-switch/web-component/lib/jb-switch.ts",
];
const specificLoadingComponentPaths = [
  "modules/jb-file-input/web-component/lib/jb-file-input.ts",
  "modules/jb-image-input/web-component/lib/jb-image-input.ts",
];

async function collectFiles(directory: string): Promise<string[]> {
  const files: string[] = [];
  for await (const entry of Deno.readDir(directory)) {
    if (entry.isDirectory) {
      if (!ignoredDirectories.has(entry.name)) files.push(...await collectFiles(`${directory}/${entry.name}`));
      continue;
    }
    const extension = entry.name.includes(".") ? entry.name.slice(entry.name.lastIndexOf(".")) : "";
    if (entry.isFile && sourceExtensions.has(extension)) files.push(`${directory}/${entry.name}`);
  }
  return files;
}

const errors: string[] = [];
const seenTags = new Map<string, string>();

for (const entry of packageCatalog) {
  const modulePath = entry.buildConfigPath.replace("/build-config.ts", "");
  const packageJsonPath = `${modulePath}/package.json`;
  try {
    const packageJson = JSON.parse(await Deno.readTextFile(packageJsonPath)) as { name?: string };
    if (!packageJson.name) errors.push(`${packageJsonPath}: missing package name`);
  } catch {
    errors.push(`${packageJsonPath}: catalog package path or package.json is missing`);
  }

  const manifests = (await collectFiles(modulePath)).filter((path) => path.endsWith("custom-elements.json"));
  if (manifests.length === 0) continue;
  for (const manifestPath of manifests) {
    try {
      const manifest = JSON.parse(await Deno.readTextFile(manifestPath)) as {
        modules?: Array<{ declarations?: Array<{ tagName?: string }> }>;
      };
      for (const module of manifest.modules ?? []) {
        for (const declaration of module.declarations ?? []) {
          if (!declaration.tagName) continue;
          const previous = seenTags.get(declaration.tagName);
          if (previous && previous !== manifestPath && !previous.startsWith(`${modulePath}/`)) {
            errors.push(`duplicate custom-element tag ${declaration.tagName}: ${previous} and ${manifestPath}`);
          } else {
            seenTags.set(declaration.tagName, manifestPath);
          }
        }
      }
    } catch {
      errors.push(`${manifestPath}: invalid JSON`);
    }
  }
}

const files = await collectFiles("modules");
for (const file of valueBearingFormComponentPaths) {
  const fileText = await Deno.readTextFile(file);
  for (const helper of ["clearValue", "updateFormValue"]) {
    const declaration = new RegExp(`#${helper}\\s*\\([^)]*\\)\\s*(?::[^\\{]+)?\\s*\\{`);
    if (!declaration.test(fileText)) errors.push(`${file}: missing private #${helper}() form-value helper`);
  }
}
for (const file of genericLoadingComponentPaths) {
  const fileText = await Deno.readTextFile(file);
  if (!/get\s+isLoading\s*\(/.test(fileText) || !/set\s+isLoading\s*\(/.test(fileText)) {
    errors.push(`${file}: generic loading state must expose writable isLoading`);
  }
  if (!fileText.includes("is-loading")) errors.push(`${file}: generic loading state must use the is-loading HTML attribute`);
}
for (const file of specificLoadingComponentPaths) {
  const fileText = await Deno.readTextFile(file);
  if (!/get\s+isUploading\s*\(/.test(fileText) || !/set\s+isUploading\s*\(/.test(fileText)) {
    errors.push(`${file}: upload state must expose writable isUploading`);
  }
  if (!/get\s+isLoading\s*\(/.test(fileText) || /set\s+isLoading\s*\(/.test(fileText)) {
    errors.push(`${file}: isLoading must be a read-only aggregate when a specific loading state is exposed`);
  }
  if (!fileText.includes("is-uploading")) errors.push(`${file}: upload state must use the is-uploading HTML attribute`);
}
for (const file of files) {
  if (file.endsWith("CHANGELOG.md")) continue;
  const fileText = await Deno.readTextFile(file);
  for (const stale of stalePatterns) {
    stale.pattern.lastIndex = 0;
    if (stale.pattern.test(fileText)) errors.push(`${file}: active ${stale.name} found`);
  }
}

if (errors.length > 0) {
  console.error("JB consistency check failed:");
  for (const error of [...new Set(errors)].sort()) console.error(`- ${error}`);
  Deno.exit(1);
}

console.log(`JB consistency check passed: ${packageCatalog.length} catalog packages, ${seenTags.size} custom-element tags.`);
