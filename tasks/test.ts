import { dirname } from "@std/path/dirname";
import { packageCatalog } from "../config/package-list.ts";

const ignoredDirectories = new Set([".git", "node_modules"]);

interface TestOptions {
  name?: string;
}

function printUsage(): void {
  console.log(`Usage:
  deno task test
  deno task test --name=jb-button

Options:
  --name <module-name>  Run tests for one module from config/package-list.ts.`);
}

function parseOptions(args: string[]): TestOptions {
  const options: TestOptions = {};

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];

    if (arg === "--help" || arg === "-h") {
      printUsage();
      Deno.exit(0);
    }

    if (arg === "--name") {
      options.name = args[index + 1];
      if (!options.name || options.name.startsWith("-")) {
        console.error("Missing value for --name.");
        printUsage();
        Deno.exit(1);
      }
      index++;
      continue;
    }

    if (arg.startsWith("--name=")) {
      options.name = arg.slice("--name=".length);
      if (!options.name) {
        console.error("Missing value for --name.");
        printUsage();
        Deno.exit(1);
      }
      continue;
    }

    console.error(`Unknown option: ${arg}`);
    printUsage();
    Deno.exit(1);
  }

  return options;
}

function joinPath(...parts: string[]): string {
  return parts
    .filter((part) => part.length > 0)
    .join("/")
    .replaceAll(/\/+/g, "/");
}

async function collectTsConfigPaths(directory = ".", relativeDirectory = ""): Promise<string[]> {
  const configs: string[] = [];

  for await (const entry of Deno.readDir(directory)) {
    if (entry.isDirectory) {
      if (ignoredDirectories.has(entry.name)) {
        continue;
      }
      const childDirectory = joinPath(directory, entry.name);
      const childRelativeDirectory = joinPath(relativeDirectory, entry.name);
      configs.push(...await collectTsConfigPaths(childDirectory, childRelativeDirectory));
      continue;
    }

    if (entry.isFile && entry.name === "tsconfig.json") {
      configs.push(joinPath(relativeDirectory, entry.name));
    }
  }

  return configs;
}

function getCommand(name: string): string {
  return Deno.build.os === "windows"
    ? `node_modules/.bin/${name}.cmd`
    : `node_modules/.bin/${name}`;
}

function getModulePath(packageName: string): string {
  const packageEntry = packageCatalog.find((entry) => entry.name === packageName);

  if (!packageEntry) {
    const packageNames = packageCatalog.map((entry) => entry.name).sort().join(", ");
    console.error(`Unknown module name: ${packageName}`);
    console.error(`Available modules: ${packageNames}`);
    Deno.exit(1);
  }

  return dirname(packageEntry.buildConfigPath);
}

async function runCommand(label: string, command: string, args: string[]): Promise<void> {
  console.log(`### ${label}`);

  try {
    await Deno.stat(command);
  } catch {
    console.error(`Missing command: ${command}`);
    console.error("Run `npm install` to install project binaries.");
    Deno.exit(1);
  }

  const status = await new Deno.Command(command, {
    args,
    stdout: "inherit",
    stderr: "inherit",
  }).spawn().status;

  if (!status.success) {
    Deno.exit(status.code);
  }
}

async function runBiomeCheck(rootDirectory: string): Promise<void> {
  await runCommand("BIOME CHECK", getCommand("biome"), ["check", rootDirectory]);
}

async function runTypecheck(rootDirectory: string): Promise<void> {
  const configs = (await collectTsConfigPaths(rootDirectory, rootDirectory)).sort((first, second) =>
    first.localeCompare(second)
  );

  if (configs.length === 0) {
    console.log(`No tsconfig.json files found in ${rootDirectory}.`);
    return;
  }

  console.log(`### TYPECHECK ${rootDirectory}`);
  const failedConfigs: string[] = [];

  for (const config of configs) {
    console.log(`### CHECK ${config}`);
    const status = await new Deno.Command(getCommand("tsc"), {
      args: ["-p", config, "--noEmit", "--pretty", "false"],
      stdout: "inherit",
      stderr: "inherit",
    }).spawn().status;

    if (!status.success) {
      failedConfigs.push(config);
    }
  }

  console.log("### TYPECHECK SUMMARY");
  console.log(`Checked projects: ${configs.length}`);

  if (failedConfigs.length > 0) {
    console.log(`Failed projects: ${failedConfigs.length}`);
    for (const config of failedConfigs) {
      console.log(config);
    }
    Deno.exit(1);
  }
}

const options = parseOptions(Deno.args);
const modulePath = options.name ? getModulePath(options.name) : undefined;
const rootDirectory = modulePath ?? ".";
const storybookArgs = ["run", "--project", "storybook"];

await runBiomeCheck(rootDirectory);
await runTypecheck(rootDirectory);

if (!modulePath) {
  await runCommand("STORYBOOK TEST", getCommand("vitest"), storybookArgs);
} else {
  console.log("Skipping Storybook tests in scoped mode; run `deno task test-storybook` for the full interaction suite.");
}
