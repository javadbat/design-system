const ignoredDirectories = new Set([".git", "node_modules"]);

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

function getTscCommand(): string {
  return Deno.build.os === "windows"
    ? "node_modules/.bin/tsc.cmd"
    : "node_modules/.bin/tsc";
}

const configs = (await collectTsConfigPaths()).sort((first, second) =>
  first.localeCompare(second)
);

if (configs.length === 0) {
  console.error("No tsconfig.json files found.");
  Deno.exit(1);
}

const failedConfigs: string[] = [];
const tscCommand = getTscCommand();

for (const config of configs) {
  console.log(`### CHECK ${config}`);
  const command = new Deno.Command(tscCommand, {
    args: ["-p", config, "--noEmit", "--pretty", "false"],
    stdout: "inherit",
    stderr: "inherit",
  });
  const status = await command.output();

  if (!status.success) {
    failedConfigs.push(config);
  }
}

console.log("### SUMMARY");
console.log(`Checked projects: ${configs.length}`);

if (failedConfigs.length > 0) {
  console.log(`Failed projects: ${failedConfigs.length}`);
  for (const config of failedConfigs) {
    console.log(config);
  }
  Deno.exit(1);
}

console.log("All TypeScript projects passed.");
