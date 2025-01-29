export type WebComponentBuildConfig = {
  name: string;
  path: string;
  outputPath: string;
  umdName: string;
  external?: string[];
  umdIncludes?: string[];
  tsconfigPath?:string;
  globals?: { [key: string]: string };
};
export type ReactComponentBuildConfig = {
  name: string;
  path: string;
  outputPath: string;
  umdName?: string;
  external?: string[];
  umdIncludes?: string[];
  globals?: { [key: string]: string };
  tsconfigPath?:string;
};
export type NodeEnv = "production" | "development" | "test"
export type Envs = {
  nodeEnv:NodeEnv
}