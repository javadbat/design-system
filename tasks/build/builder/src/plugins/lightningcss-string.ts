import {
  bundleAsync,
  type BundleAsyncOptions,
  type CustomAtRules,
  type Features,
  type Resolver,
} from "lightningcss";
import type { Plugin } from "rolldown";

type LightningCSSStringOptions = Omit<
  BundleAsyncOptions<CustomAtRules>,
  "filename" | "resolver"
>;

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

async function transformCssToJs(
  code: string,
  id: string,
  options: LightningCSSStringOptions,
  resolver: Resolver,
) {
  const filename = cleanUrl(id);
  const result = await bundleAsync({
    ...options,
    filename,
    resolver,
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

export function lightningCssString(options: LightningCSSStringOptions): Plugin {
  return {
    name: "lightningcss-string",
    async load(id: string) {
      if (
        !cssUrlRegExp.test(id) || !hasInlineQuery(id) ||
        id.includes("node_modules")
      ) {
        return null;
      }

      const code = await Deno.readTextFile(cleanUrl(id));
      const resolver: Resolver = {
        resolve: async (specifier, originatingFile) => {
          const resolved = await this.resolve(specifier, originatingFile, {
            skipSelf: true,
          });
          if (!resolved || resolved.external) {
            throw new Error(
              `Unable to resolve CSS import "${specifier}" from "${originatingFile}"`,
            );
          }
          const resolvedId = cleanUrl(resolved.id);
          this.addWatchFile(resolvedId);
          return resolvedId;
        },
      };
      return transformCssToJs(code, id, options, resolver);
    },
    async transform(code: string, id: string) {
      if (
        !cssUrlRegExp.test(id) || hasInlineQuery(id) ||
        id.includes("node_modules")
      ) {
        return null;
      }

      const resolver: Resolver = {
        resolve: async (specifier, originatingFile) => {
          const resolved = await this.resolve(specifier, originatingFile, {
            skipSelf: true,
          });
          if (!resolved || resolved.external) {
            throw new Error(
              `Unable to resolve CSS import "${specifier}" from "${originatingFile}"`,
            );
          }
          const resolvedId = cleanUrl(resolved.id);
          this.addWatchFile(resolvedId);
          return resolvedId;
        },
      };
      return transformCssToJs(code, id, options, resolver);
    },
  };
}
