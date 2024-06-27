import * as path from "@std/path";
type NodeEnv = "production" | "development" | "test"
class GeneralConfig {
  env: NodeEnv;
  basePath: string;
  host: string;
  port: { storybookPort: number; mockService: number; };
  constructor(nodeEnv:NodeEnv) {
    this.env = nodeEnv ? nodeEnv : "development";
    const presentWorkingDirectory = path.dirname(path.fromFileUrl(import.meta.url));
    this.basePath = path.join(presentWorkingDirectory, "../");
    this.host = "0.0.0.0";
    this.port = {
      storybookPort: 3100,
      mockService: 3200,
    };
  }
}
const generalConfig = new GeneralConfig("development");
export {generalConfig};
