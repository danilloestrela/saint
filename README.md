## Saint: Project Manager in Bash/Shell

Saint is a project manager made in bash/shell.

It was initially created to facilitate the organization of my projects in WSL2. Over time, it gained structure and an architecture to handle the automatic creation and removal of projects, as well as simple and unique aliases for each project. This allows you to manage any project easily from any folder in the terminal, saving time when creating and editing common elements in programming projects.

### Installation Guide:
#### Linux (Ubuntu)
1. Copy Saint to your user's root directory.
2. In the user root, locate the .bashrc file.
3. Use "nano" or your preferred editor to add the following code at the end of the file:
    ```
    if [ -s ~/saint/.saint ]; then
        . ~/saint/.saint
    fi
    ```
4. If using [Oh my Zsh](https://ohmyz.sh/), add it to the `.zshrc` file.
5. After that, restart the terminal. If you see the message: `Saint is running`, then it's ready to use.

#### Mac
I am not sure yet how the installation would work on a Mac (since I don't have one). I am open to finding out and adding instructions here as soon as possible.

### Some Observations:
1. Originally, I edited Saint using Visual Studio Code, but you are free to enhance it with the IDE of your choice.
2. This is my first open source project, mainly because I thought it could add more to the community. This means I am more than open to suggestions and help to make it the best possible for everyone.

### How to contribute?
- Read a bit about ["how to contribute opensource projects"](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- Leave your question or suggestion in the "issues" tab.
- Fork this project and start your changes 😊. You can have a great ["How to" over here](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project).
- Make a PR and link it to the issues you created or that anyone came up.
- Wait for code review and tests.

## Saint Commands:
- `saint edit` - Opens the Saint installation folder for editing in Visual Studio Code.
- `saint add` - Starts the setup for creating a new project.
- `saint delete` - Starts the setup for removing an existing project.
- `saint list` - Lists existing projects.
- `saint help` - Lists all available commands for all active projects.

## Default Commands for New Projects:
- `exampleProj code` - Opens a project in Visual Studio Code. (`exampleProj_code()`)
- `exampleProj goto` - Goes to the configured project folder. Edit `.variables` and the `goto` function within `exampleProj_goto()`.
- `exampleProj run` - Executes something within the `exampleProj_run()` function.
- `exampleProj help` - Displays the available commands for this project.
- `exampleProj update-help` - Updates the help based on comments in the functions:
    - `exampleProj_goto()`
    - `exampleProj_code()`
    - `exampleProj_run()`

## TODOs:
- [ ] Add a function to automate Saint installation on any Linux/Mac/WSL.
- [ ] Create a file with supported Operating Systems (as tested by the community).
- [ ] Optimize helpers to avoid compromising projects from older versions (preferably).
- [ ] Add common aliases for any project (more Docker commands?).
- [ ] Enhance the ability to create aliases for subprojects within the main project folder during project addition.
- [ ] Improve automatic project installation with `git clone`.
- [ ] Create a debugger for errors, enabling or disabling code errors.
- [ ] Add a delete setup capable of selecting one of the projects from the list (project folder) and removing it instead of typing its name.
- [ ] Add details on how to install Saint on Mac whenever the terminal starts, avoiding manual use of `source` in the terminal.
