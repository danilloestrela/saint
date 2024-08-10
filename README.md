## Saint: Project Manager in Bash/Shell

Saint is a project manager made in bash/shell.

It was initially created to facilitate the organization of my projects in WSL2. Over time, it gained structure and an architecture to handle the automatic creation and removal of projects, as well as simple and unique aliases for each project. This allows you to manage any project easily from any folder in the terminal, saving time when creating and editing common elements in programming projects.

### Installation Guide:
#### Linux (Ubuntu/WSL)
1. Clone Saint to your user's root directory. (`~/`).
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
To install Saint on a Mac, follow these steps:

1. Clone Saint to your user's root directory. (`~/`).

2. Open the Terminal and check if the `.zshrc` file exists in your home directory:
    ```bash
    ls -la ~ | grep .zshrc
    ```
    If the file does not exist, create it with the following command:
    ```bash
    touch ~/.zshrc
    ```

3. Edit the `.zshrc` file with a text editor of your choice:
    - Using `nano`:
      ```bash
      nano ~/.zshrc
      ```
    - Using `vim`:
      ```bash
      vim ~/.zshrc
      ```
    - Using `Visual Studio Code`:
      ```bash
      code ~/.zshrc
      ```

4. Add the following code at the end of the `.zshrc` file to source Saint whenever a terminal session starts:
    ```bash
    if [ -s ~/saint/.saint ]; then
        . ~/saint/.saint
    fi
    ```

5. Save the file and restart the terminal. If you see the message `Saint is running`, then Saint is successfully installed and ready to use.

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
- [ ] Create a README explaining the architecture and the "whys" of each folder. (Always open to think differently about the architecture)
- [ ] On help manager: make it more safe by having him to confirm that there is a help method in project folder before rebuilding.
- [ ] Add a function to automate Saint installation on any Linux/Mac/WSL.
- [ ] Create a file with supported Operating Systems (as tested by the community).
- [ ] Add common aliases for any project (more Docker commands?).
  - For this task: You need to create a temp file that user can add global aliases, and avoid it to be got from git (as a modified file or w/e)
- [ ] Improve automatic project installation with `git clone`.
- [ ] Create a debugger for errors, enabling or disabling code errors.

- [ ] Create a way to use arrows to select something. This can be done as a helper under `features/helpers/saint_select_option`

#### Done so far:
- [x] Add details on how to install Saint on Mac whenever the terminal starts, avoiding manual use of `source` in the terminal.
- [x] Create a Saint Backup command
- [x] Create a new templating method approach
- [x] Fix bugs related to no-project states
- [x] Fix template bug that new line is not scapped properly and end up beeing printed after creating a new project on the .project file.
- [x] Optimize helpers to avoid compromising projects from older versions (preferably).
- [x] Add a delete setup capable of selecting one of the projects from the list (project folder) and removing it instead of typing its name.