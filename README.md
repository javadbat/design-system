# JB Design System Monorepo Project

design-system for jb-web-components and corresponding react components

## architecture

micro-front-end with storybook test bed
this project is in the middle of transform between nodejs and deno and gets a little complicated to run

## Demo

[Storybook Demo](https://javadbat.github.io/design-system/?path=/docs/getting-started-introduction--docs) see all samples and documentation of design system.    
[CodeSandBox Demo](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj) React base environment for playing with code and see the real project implementation of the components. 

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
# build all modules in deno:

```bash
deno task build
deno task build --name=jb-input
# we dint build cjs or UMD in watch mode for more speed so pleas build your package without watch mode at least 1 time before publish
deno task build --name=jb-input --watch
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
