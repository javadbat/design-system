# Contribution Guide

1. open an issue on the related package repo and say you want to contribute.   
2. you will be added to that repo and issue will be assigned to you.   
3. you should clone `https://github.com/javadbat/design-system` project with it's submodules.
4. install deno & nodejs.
5. 5 set all submodules branch into master and run `deno task build` to make sure everything will works fine
6. create new brach for the repo you want to change and write all the code
7. add pull request for that branch and wait to be merged
8. you can watch your component change and build with this command: `deno task build your-component-name --watch`
9. test it in storybook by run `npm run start`, `deno task start`. 
