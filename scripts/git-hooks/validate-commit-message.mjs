import { readFileSync } from "node:fs";

const commitMessagePath = process.argv[2];

if (!commitMessagePath) {
  console.error("Missing commit message file path.");
  process.exit(1);
}

const commitMessage = readFileSync(commitMessagePath, "utf8");
const firstLine = commitMessage
  .split(/\r?\n/)
  .map(line => line.trim())
  .find(line => line && !line.startsWith("#"));

const allowedTypes = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];

const conventionalCommitPattern = new RegExp(`^(${allowedTypes.join("|")})(\\([a-z0-9._/-]+\\))?!?: .{1,}$`);
const bypassPatterns = [
  /^Merge\b/,
  /^Revert\b/,
  /^fixup! /,
  /^squash! /,
];

if (!firstLine || (!conventionalCommitPattern.test(firstLine) && !bypassPatterns.some(pattern => pattern.test(firstLine)))) {
  console.error("");
  console.error("Invalid commit message.");
  console.error("");
  console.error("Use Conventional Commits:");
  console.error("  <type>(optional-scope): <subject>");
  console.error("");
  console.error(`Allowed types: ${allowedTypes.join(", ")}`);
  console.error("");
  console.error("Examples:");
  console.error("  feat(jb-input): add clear button");
  console.error("  fix: handle empty value");
  console.error("  chore(build): update package config");
  console.error("");
  process.exit(1);
}
