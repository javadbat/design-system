import { transform, type CustomAtRules, type Features, type TransformOptions } from "lightningcss";

type LightningCSSStringOptions = Omit<TransformOptions<CustomAtRules>, "code" | "filename">;

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const cssUrlRegExp = /\.css(?:[?#].*)?$/;
const postfixRegExp = /[#?].*$/s;

function cleanUrl(url: string) {
  return url.replace(postfixRegExp, "");
}

export function lightningCssString(options: LightningCSSStringOptions) {
  return {
    name: "lightningcss-string",
    transform(code: string, id: string) {
      if (!cssUrlRegExp.test(id) || id.includes("node_modules")) {
        return null;
      }

      const filename = cleanUrl(id);
      const result = transform({
        ...options,
        filename,
        code: textEncoder.encode(code),
      });
      const transformedCss = textDecoder.decode(result.code);

      return {
        code: `export default ${JSON.stringify(transformedCss)};`,
        map: {
          version: 3,
          sources: [filename],
          sourcesContent: [code],
          names: [],
          mappings: "",
        },
        moduleType: "js",
      };
    },
  };
}
