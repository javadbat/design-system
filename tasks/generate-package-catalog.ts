import { join } from "@std/path";
import { pathToFileURL } from "node:url";
import { packageCatalog, type PackageCatalogEntry } from "../config/package-list.ts";

interface PackageJson {
  name?: string;
  version?: string;
  description?: string;
  homepage?: string;
  private?: boolean;
  repository?: string | { url?: string };
}

interface CatalogRow {
  entry: PackageCatalogEntry;
  packageJson: PackageJson;
  reactComponentList: unknown[];
  reactReadmePath: string | null;
  modulePath: string;
  storybookTitle: string | null;
}

interface BuildConfigModule {
  reactComponentList?: unknown[];
}

const root = Deno.cwd();
const docsPath = join(root, "docs", "component-list.md");
const storybookBaseUrl = "https://javadbat.github.io/design-system/?path=/docs/";

async function exists(path: string): Promise<boolean> {
  try {
    await Deno.stat(path);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }
    throw error;
  }
}

async function readJson<T>(path: string): Promise<T> {
  return JSON.parse(await Deno.readTextFile(path)) as T;
}

function titleCaseStatus(value: string): string {
  return value[0].toUpperCase() + value.slice(1);
}

function repositoryUrl(repository: PackageJson["repository"], fallbackName: string): string {
  const rawUrl = typeof repository === "string" ? repository : repository?.url;
  if (!rawUrl) {
    return `https://github.com/javadbat/${fallbackName}`;
  }
  return rawUrl
    .replace(/^git@github\.com:/, "https://github.com/")
    .replace(/^git\+/, "")
    .replace(/\.git$/, "");
}

function externalLink(label: string, url: string): string {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function npmUrl(name: string, isPrivate?: boolean): string {
  if (isPrivate) {
    return "Private package";
  }
  return `📦 ${externalLink("npm", `https://www.npmjs.com/package/${name}`)}`;
}

function storybookId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function docsUrl(row: CatalogRow): string {
  if (row.entry.docsPath) {
    return `📚 ${externalLink("Local docs", row.entry.docsPath)}`;
  }
  if (row.storybookTitle) {
    return `📚 ${externalLink("Local docs", `${storybookBaseUrl}${storybookId(row.storybookTitle)}`)}`;
  }
  return `📚 ${externalLink("Local README", `../${row.modulePath}/README.md`)}`;
}

function reactSupport(row: CatalogRow): string {
  return row.reactComponentList.length > 0
    ? row.reactReadmePath
      ? externalLink("Yes", row.reactReadmePath)
      : "Yes"
    : "No";
}

function tableCell(value: string): string {
  return value.replace(/\n/g, " ").replace(/\|/g, "\\|");
}

function specialPascalPart(part: string): string {
  const specialParts: Record<string, string> = {
    id: "ID",
    jb: "JB",
    pin: "PIN",
    qr: "QR",
    qrcode: "QRCode",
    ui: "UI",
  };
  return specialParts[part] ?? `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`;
}

function toPascalName(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part) => specialPascalPart(part.toLowerCase()))
    .join("");
}

function normalizeTitle(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function walkFiles(dir: string): Promise<string[]> {
  if (!await exists(dir)) {
    return [];
  }

  const files: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    const entryPath = join(dir, entry.name);
    if (entry.isDirectory) {
      files.push(...await walkFiles(entryPath));
    } else if (entry.isFile) {
      files.push(entryPath);
    }
  }
  return files;
}

function matchTitle(source: string): string | null {
  const csfMatch = source.match(/title:\s*["'`]([^"'`]+)["'`]/);
  if (csfMatch?.[1]) {
    return csfMatch[1];
  }

  const mdxMatch = source.match(/<Meta\s+title=["']([^"']+)["']/);
  return mdxMatch?.[1] ?? null;
}

async function findStorybookTitle(modulePath: string, entry: PackageCatalogEntry): Promise<string | null> {
  const storiesPath = join(root, modulePath, "stories");
  const storyFiles = (await walkFiles(storiesPath))
    .filter((path) => /\.(stories\.(t|j)sx?|mdx)$/i.test(path))
    .sort();
  const titles: string[] = [];

  for (const storyFile of storyFiles) {
    const title = matchTitle(await Deno.readTextFile(storyFile));
    if (title) {
      titles.push(title);
    }
  }

  if (titles.length === 0) {
    return null;
  }

  const packageToken = normalizeTitle(toPascalName(entry.name));
  const titleToken = normalizeTitle(toPascalName(entry.title));
  const tokenMatches = (title: string) => {
    const normalized = normalizeTitle(title);
    return normalized.includes(packageToken) || normalized.includes(titleToken);
  };
  const exactTitleMatches = (title: string) => {
    const normalized = normalizeTitle(title);
    return normalized.endsWith(packageToken) || normalized.endsWith(titleToken);
  };
  const mainReadmeMatches = (title: string) => {
    const normalized = normalizeTitle(title);
    return normalized.endsWith(`${packageToken}readme`) || normalized.endsWith(`${titleToken}readme`);
  };

  const exactPrimaryStory = titles.find((title) => !/readme/i.test(title) && exactTitleMatches(title));
  if (exactPrimaryStory) {
    return exactPrimaryStory;
  }

  const primaryStory = titles.find((title) => !/readme/i.test(title) && tokenMatches(title));
  if (primaryStory) {
    return primaryStory;
  }

  const mainReadmeStory = titles.find((title) => /readme/i.test(title) && mainReadmeMatches(title));
  if (mainReadmeStory) {
    return mainReadmeStory;
  }

  const readmeStory = titles.find((title) => /readme/i.test(title) && tokenMatches(title));
  if (readmeStory) {
    return readmeStory;
  }

  return titles.find((title) => /readme/i.test(title)) ?? titles[0];
}

async function importBuildConfig(entry: PackageCatalogEntry): Promise<BuildConfigModule> {
  const buildConfigPath = join(root, entry.buildConfigPath);
  if (!await exists(buildConfigPath)) {
    throw new Error(`Catalog entry "${entry.name}" is missing ${entry.buildConfigPath}`);
  }

  return await import(pathToFileURL(buildConfigPath).href) as BuildConfigModule;
}

async function reactReadmePath(modulePath: string): Promise<string | null> {
  const readmePath = join(root, modulePath, "react", "README.md");
  return await exists(readmePath) ? `../${modulePath}/react/README.md` : null;
}

async function buildRows(): Promise<CatalogRow[]> {
  const rows: CatalogRow[] = [];

  for (const entry of packageCatalog) {
    const modulePath = `modules/${entry.name}`;
    const packageJsonPath = join(root, modulePath, "package.json");

    if (!await exists(packageJsonPath)) {
      throw new Error(`Catalog entry "${entry.name}" is missing ${modulePath}/package.json`);
    }

    const buildConfig = await importBuildConfig(entry);
    const reactComponentList = Array.isArray(buildConfig.reactComponentList)
      ? buildConfig.reactComponentList
      : [];

    rows.push({
      entry,
      packageJson: await readJson<PackageJson>(packageJsonPath),
      reactComponentList,
      reactReadmePath: await reactReadmePath(modulePath),
      modulePath,
      storybookTitle: await findStorybookTitle(modulePath, entry),
    });
  }

  return rows;
}

function renderCatalog(rows: CatalogRow[]): string {
  const categories = [...new Set(rows.map((row) => row.entry.category))];
  const generatedAt = new Date().toISOString().slice(0, 10);
  const lines: string[] = [
    `Generated from \`config/package-list.ts\` and local package metadata on ${generatedAt}. Do not edit this file by hand; run \`deno task generate-package-catalog\` after changing package catalog metadata.`,
    "",
    "## Catalog Rules",
    "",
    "- **Status** describes whether the package is actively supported.",
    "- **Stability** describes public API confidence for adopters.",
    "- **React** is inferred from each package `build-config.ts`; a non-empty `reactComponentList` means React is supported.",
    "- **Links** include npm, GitHub, and the closest local Storybook docs page.",
    "",
  ];

  for (const category of categories) {
    const categoryRows = rows.filter((row) => row.entry.category === category);
    lines.push(`## ${category}`, "");
    lines.push("| Package | Summary | Status | Stability | React | Links |");
    lines.push("| --- | --- | --- | --- | --- | --- |");

    for (const row of categoryRows) {
      const name = row.packageJson.name ?? row.entry.name;
      const repo = repositoryUrl(row.packageJson.repository, row.entry.name);
      const links = [
        npmUrl(name, row.packageJson.private),
        docsUrl(row),
        `🐙 ${externalLink("GitHub", repo)}`,
      ].join("<br>");
      const notes = row.entry.notes ? `<br><small>${row.entry.notes}</small>` : "";

      lines.push([
        `${externalLink(row.entry.title, repo)}<br><code>${name}</code>`,
        `${tableCell(row.entry.summary)}${notes}`,
        titleCaseStatus(row.entry.status),
        titleCaseStatus(row.entry.stability),
        reactSupport(row),
        links,
      ].join(" | ").replace(/^/, "| ").replace(/$/, " |"));
    }

    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

const rows = await buildRows();
await Deno.writeTextFile(docsPath, renderCatalog(rows));
console.log(`Generated ${docsPath} with ${rows.length} packages.`);
