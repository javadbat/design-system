import { transform, type CustomAtRules, type Features, type TransformOptions } from "lightningcss";

type LightningCSSStringOptions = Omit<TransformOptions<CustomAtRules>, "code" | "filename">;

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const cssUrlRegExp = /\.css(?:[?#].*)?$/;
const postfixRegExp = /[#?].*$/s;
const inlineQueryRegExp = /[?&]inline(?:[=&?#]|$)/;

function cleanUrl(url: string) {
  return url.replace(postfixRegExp, "");
}

function hasInlineQuery(url: string) {
  return inlineQueryRegExp.test(url);
}

function transformCssToJs(code: string, id: string, options: LightningCSSStringOptions) {
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
}

export function lightningCssString(options: LightningCSSStringOptions) {
  return {
    name: "lightningcss-string",
    async load(id: string) {
      if (!cssUrlRegExp.test(id) || !hasInlineQuery(id) || id.includes("node_modules")) {
        return null;
      }

      const code = await Deno.readTextFile(cleanUrl(id));
      return transformCssToJs(code, id, options);
    },
    transform(code: string, id: string) {
      if (!cssUrlRegExp.test(id) || hasInlineQuery(id) || id.includes("node_modules")) {
        return null;
      }

      return transformCssToJs(code, id, options);
    },
  };
}
