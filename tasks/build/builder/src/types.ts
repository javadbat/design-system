import type {ParsedPath} from "@std/path";
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export type BaseConfig = {
  name: string;
  umdName: string;
  external?: string[];
  umdIncludes?: string[];
  globals: Record<string, string>;
  path: string;
  outputPath: string;
  dir: string;
  tsConfigPath: string;
}

export type ModuleConfig = BaseConfig & {
  outputPathParsed: ParsedPath;
}

export type WebComponentBuildConfig = Optional<BaseConfig,"dir" | "tsConfigPath" | "globals">
export type ReactComponentBuildConfig = Optional<BaseConfig,"dir" | "tsConfigPath" | "globals">

export type NodeEnv = "production" | "development" | "test"
export type Envs = {
  nodeEnv:NodeEnv
}
