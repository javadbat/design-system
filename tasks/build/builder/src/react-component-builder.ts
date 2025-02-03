import * as path from "@std/path";
//rollup
import * as rollup from "npm:rollup@4.32.1";
import { babel as rollupBabel } from "npm:@rollup/plugin-babel@6.0.4";
import postcss from "npm:rollup-plugin-postcss@4.0.2";
import commonjs from "npm:@rollup/plugin-commonjs@28.0.2";
import rollupJson from "npm:@rollup/plugin-json@6.1.0";
import resolve from "npm:@rollup/plugin-node-resolve@16.0.0";
import rollupReplace from "npm:@rollup/plugin-replace@6.0.2";
//config
import type { Envs, ModuleConfig, ReactComponentBuildConfig } from './types.ts';
import chalk from "npm:chalk@5.4.1";
import typescript from "npm:rollup-plugin-typescript2@0.36.0";
import { DEFAULT_EXTENSIONS } from "npm:@babel/core@7.26.7";
export class ReactComponentBuilder {
  envs: Envs = {
    nodeEnv: "production"
  }
  async buildAllComponent(reactComponentList: ReactComponentBuildConfig[]) {
    for (const reactComponent of reactComponentList) {
      await this.buildComponent(reactComponent);
    }
  }
  async buildComponent(component: ReactComponentBuildConfig, watch = false) {
    const moduleConfig = this.#createModuleConfig(component);
    console.log(`start building ${component.name}`);
    const inputOptions = this.#getInputOption(moduleConfig, watch);
    const esOutputOptions = this.#getOutputOption(moduleConfig, "es");
    const cjsOutputOptions = this.#getOutputOption(moduleConfig, "cjs");
    const umdOutputOptions = this.#getOutputOption(moduleConfig, "umd");
    try {
      if (watch) {
        this.#buildAndWatchModule(inputOptions, esOutputOptions, component);
      } else {
        await this.buildModule(inputOptions, esOutputOptions, "ES");
        await this.buildModule(inputOptions, cjsOutputOptions, "CJS");
        await this.buildModule(inputOptions, umdOutputOptions, "UMD");
      }
    } catch (e: any) {
      console.error(component.name + ' build failed');
      console.error(e.message);
    }
  }
  buildModule(
    inputOptions: rollup.RollupOptions,
    outputOptions: rollup.OutputOptions,
    type: "ES" | "CJS" | "UMD"
  ) {
    //build module with rollup without any watch or something
    return new Promise<void>((resolve, reject) => {
      const bundlePromise = rollup.rollup(inputOptions);
      bundlePromise
        .then(function (bundle) {
          bundle.write(outputOptions).then(function (output) {
            console.log(
              chalk.greenBright(output.output[0].facadeModuleId),
              " ",
              chalk.bgBlue(type),
              " ",
              chalk.bgMagenta(" DONE ")
            );
            resolve();
          });
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  }
  #createModuleConfig(inputConfig: ReactComponentBuildConfig): ModuleConfig {
    const dir = inputConfig.dir ?? Deno.cwd();
    return {
      ...inputConfig,
      outputPathParsed: path.parse(inputConfig.outputPath),
      dir,
      tsConfigPath: inputConfig.tsConfigPath ?? path.join(dir, "tsconfig.json"),
      globals: inputConfig.globals ?? {},
    };
  }
  #buildAndWatchModule(inputOptions: rollup.RollupOptions, outputOptions: rollup.OutputOptions, module: ReactComponentBuildConfig) {
    return new Promise<void>((resolve, reject) => {
      const watcher = rollup.watch({
        ...inputOptions,
        output: outputOptions,
        watch: {
          exclude: module.external
        }
      });
      this.#watcherEventHandler(watcher, resolve, reject);
    });
  }
  #watcherEventHandler(watcher: rollup.RollupWatcher, resolver: () => void, rejecter: () => void) {
    watcher.on('event', event => {
      if (event.code === 'BUNDLE_START') {
        console.log('Bundling...');
      } else if (event.code === 'BUNDLE_END') {
        console.log(chalk.green(event.input + '\n' + 'Bundled in ' + event.duration + 'ms.'));
        resolver();
      } else if (event.code === 'ERROR') {
        console.log(event);

        console.error(chalk.red((event as any).error));
        rejecter();
      }
      //rollup need to be closed on each result to free up space
      if ((event as any).result) {
        (event as any).result.close();
      }
    });
  }
  #getInputOption(module: ModuleConfig, watchMode: boolean): rollup.InputOptions {
    const externalList = module.external || [];
    const plugins = [
      //@ts-ignore
      rollupReplace({
        "process.env.NODE_ENV": `"${this.envs.nodeEnv}"`,
        preventAssignment: true,
      }),
      //@ts-ignore
      commonjs({ include: "node_modules/**" }),
      //@ts-ignore
      postcss({
        extensions: [".css", ".pcss", "scss"],
        inject: true,
        sourceMap: true,
      }),
      rollupBabel({
        exclude: ["node_modules/**", ...externalList],
        babelrc: false,
        babelHelpers: "runtime",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
          [
            "@babel/plugin-proposal-private-property-in-object",
            { loose: true },
          ],
          ["@babel/plugin-proposal-private-methods", { loose: true }],
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-external-helpers",
          "@babel/plugin-transform-runtime",
        ],
      }),
      //@ts-ignore
      resolve({
        preferBuiltins: true,
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
        mainFields: ["browser"],
        //@ts-ignore
        jsnext: true,
      }),
      //@ts-ignore
      rollupJson(),
    ];
    const isTypeScriptModule = this.#isTypeScriptModule(module);
    if (isTypeScriptModule) {
      plugins.push(
        //@ts-ignore
        typescript({
          tsconfig: module.tsConfigPath,
          tsconfigDefaults: this.#getTypeScriptCompilerOptions(
            module,
            externalList
          ),
        })
      );
    }
    const inputOptions = {
      input: path.join(...module.path.split("/")),
      external: module.external || [],
      plugins: plugins,
      //manualChunks: config.chuncks
    };
    return inputOptions;
  }
  #getOutputOption(module: ModuleConfig, format: "umd" | "es" | "cjs"): rollup.OutputOptions {

    const outputFileName = `${module.outputPathParsed.name}${format == 'es' ? '' : ('.' + format)}${module.outputPathParsed.ext}`;
    const outputOptions = {
      // core output options
      sourcemap: true,
      dir: path.join(module.outputPathParsed.dir),
      entryFileNames: outputFileName,
      format: format, //es for native code , system for systemjs known module
    };
    if (format == "umd") {
      //@ts-ignore
      outputOptions.name = module.umdName;
      //@ts-ignore
      outputOptions.globals = module.globals || {};
    }
    return outputOptions;
  }
  #isTypeScriptModule(module: ReactComponentBuildConfig) {
    const url = path.parse(module.path);
    return url.ext === ".ts" || url.ext == ".tsx";
  }
  #getTypeScriptCompilerOptions(
    module: ReactComponentBuildConfig,
    externalList: string[]
  ) {
    const includePaths = path.join(
      ...module.path.split("/").slice(0, -1),
      "**",
      "*"
    );
    return {
      useTsconfigDeclarationDir: true,
      include: [includePaths],
      exclude: [...externalList],
    };
  }
}
export default ReactComponentBuilder;
