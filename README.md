# design-system

design-system for jb-web-components and corresponding react components

## architecture

micro-front-end with storybook test bed

## usage

clone the project with submodules (all components are put in project with submodules)

```git

git clone --recurse-submodules -j8 https://github.com/javadbat/design-system.git

```

in case you have already cloned the project, use command: `git submodule update --init --recursive`

### install packages

```bash
npm i
```

### build packages in project root directory

```bash
# build all modules
npm run build

# build only a named module
npm run build jb-input
```
in deno (recommended):
```bash
deno run build
deno run build jb-input
# we dint build cjs or UMD in watch mode for more speed so pleas build your package without watch mode at least 1 time before publish
deno run build jb-input --watch
```

### serve testbeds

```bash
npm run serve

# or

npm start
```
if you are using node17 or later please type it before build
```cmd
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
## add a new submodule

```command
git submodule add -f https://github.com/user/repo.git web-component/web-component-name 
git submodule add -f https://github.com/user/repo.git react-component/react-component-name 
```
