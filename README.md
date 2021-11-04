# design-system

design-system for jb-web-component and react component

## architecture

micro front-end with storybook testbed

## usage

clone the project with submodules (all component are putted in project with submodule)

```cmd

git clone --recurse-submodules -j8 https://github.com/javadbat/design-system.git

```

in case you already cloned the project use command `git submodule update --init --recursive`

install packages

```cmd
npm i
```

build packages in project root directory

```cmd
# build all module
npm run build
# build only named module
npm run build jb-input
```

serve testbeds

```cmd
npm run serve
# or
npm start
```

## add new submodule

```command
git   submodule  add -f  https://github.com/user/repo.git web-component/web-component-name 
```
