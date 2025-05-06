# JB Design System Monorepo Project

design-system base on web-component technology.

## architecture

jb design system is not a all in one package. each of our package has their own repo and their own package name and will be installed separately by user.
to see all of our package list please see [JB Design System Package List](https://javadbat.github.io/design-system/?path=/docs/general-package-list--docs).

this repo is just a monorepo to manage, test & build packages and does not contain any package or common code.

## Demo

[Storybook Demo](https://javadbat.github.io/design-system/?path=/docs/getting-started-introduction--docs) see all samples and documentation of design system.    
[CodeSandBox Demo](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj) React base environment for playing with code and see the real project implementation of the components. 

## Contribution

>this project is in the middle of transform between nodejs and deno and gets a little complicated to run for the first time.

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
# necessary for the first time. this will build all packages 
deno task build
# build single package
deno task build --name=jb-input
# build and watch single package. (just for development. please build package without watch before publishing it)
deno task build --name=jb-input --watch
```

### start storybook test environment

```bash
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
