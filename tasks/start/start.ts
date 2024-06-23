// const mockServiceProcess = spawn(`npm`,['run','serve','--prefix','mock/'],{shell:true,stdio:'inherit'});

//TODO: currently it's not working due to lack of support of storybook in deno but we need to complete and refactor it later (it,s better to move all stories to their component folder)
//see this: https://github.com/storybookjs/storybook/issues/23279
const storyBookCommand = new Deno.Command("deno", {
  args: [
    "run",
    "--allow-read",
    "--allow-sys",
    "--allow-env",
    "npm:storybook",
  ],
  stdin: "piped",
  stdout: "inherit",
});
const mockApiCommand = new Deno.Command("deno", {
  args: [
    "task",
    "start",
  ],
  stdin: "piped",
  stdout: "inherit",
  cwd:"mock/"
});
mockApiCommand.spawn();