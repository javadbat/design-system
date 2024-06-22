import { MockServer } from "./mock-server.js";

function getPort():number {
  const defaultPort = 3200;
  const envVar = Deno.env.get("MOCK_SERVICE_PORT");
  if (envVar && !isNaN(Number(envVar))) {
    return Number(envVar);
  }
  const portAttrIndex = Deno.args.findIndex((x) => x == "--port");
  if (portAttrIndex !== -1) {
    const port = Deno.args[portAttrIndex + 1];
    if (port && !isNaN(Number(port))) {
      return Number(port);
    }
  }
  return defaultPort;
}

const port = getPort();
new MockServer(port);
