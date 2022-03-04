# design-system

design-system for jb-web-components and corresponding react components

## architecture

micro-front-end with storybook testbed

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

### serve testbeds

```bash
npm run serve

# or

npm start
```

## add a new submodule

```command
git submodule add -f https://github.com/user/repo.git web-component/web-component-name 
```
