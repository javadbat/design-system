# design-system

design-system for jb-web-components and corresponding react components

## architecture

micro-front-end with storybook test bed
this project is in the middle of transform between nodejs and deno and gets a little complicated to run

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
deno task build
deno task build jb-input
# we dint build cjs or UMD in watch mode for more speed so pleas build your package without watch mode at least 1 time before publish
deno task build jb-input --watch
```

### serve testbeds

```bash
npm run serve

# or

npm start
```
## add a new submodule

```terminal
git submodule add -f https://github.com/user/repo.git modules/module-name 
git submodule add -f https://github.com/user/repo.git web-component/web-component-name 
git submodule add -f https://github.com/user/repo.git react-component/react-component-name 
```
## remove submodule

```terminal
git rm react-component/react-component-name
```
