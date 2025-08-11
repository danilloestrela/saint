## Saint: Project Manager in Bash/Shell

Saint is a project manager made in bash/shell.

It was initially created to facilitate the organization of my projects in WSL2. Over time, it gained structure and an architecture to handle the automatic creation and removal of projects, as well as simple and unique aliases for each project. This allows you to manage any project easily from any folder in the terminal, saving time when creating and editing common elements in programming projects.
### Supported Operation Systems
![Linux](https://img.shields.io/badge/Linux-000?style=for-the-badge&logo=linux&logoColor=FCC624)
![Ubuntu](https://img.shields.io/badge/Ubuntu-35495E?style=for-the-badge&logo=ubuntu&logoColor=2CA5E0)
![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)
![WSL2](https://img.shields.io/badge/WSL2-blue)

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
- `saint add` - Starts the setup for creating a new project.
- `saint backup` - Creates a backup from a selected project.
- `saint delete` - Starts the setup for removing an existing project.
- `saint edit` - Opens the Saint installation folder for editing in Visual Studio Code.
- `saint help` - Lists all available commands for all active projects.
- `saint list` - Lists existing projects.

## Default Commands for New Projects:
- `exampleProj code` - Opens a project in Visual Studio Code. (`exampleProj_code()`)
- `exampleProj goto` - Goes to the configured project folder. Edit `.variables` and the `goto` function within `exampleProj_goto()`.
- `exampleProj run` - Executes something within the `exampleProj_run()` function.
- `exampleProj help` - Displays the available commands for this project.
- `exampleProj update-help` - Updates the help based on comments in the functions:
    - `exampleProj_goto()`
    - `exampleProj_code()`
    - `exampleProj_run()`

### Help Comments
Help comments provide quick documentation for commands within the Saint project. They follow a specific format that allows users to understand the functionality of each command at a glance.

**Note**: Help comments work in project-specific files (like `.project`) and are displayed when you run the project's help command.

The format for a help comment is:
```
#@help <group>!<subgroup>!<command>: <description>
```

**Examples:**
```bash
#@help git!pull: Pulls from remote repository
#@help git!pull!all: Pulls all related projects
#@help docker!build: Builds Docker image
```

This help will be displayed in a hierarchical format:
```
git
  pull
    all   Pulls all related projects
docker
  build  Builds Docker image
```
<details>
<summary><strong>CORE TODOs</strong></summary>

## CORE TODOs

- [ ] [#1 Explain the architecture and the "whys" of each folder](https://github.com/danilloestrela/saint/issues/1)
- [ ] [#2 Make setup easier: automate Saint installation on any Linux/Mac/WSL](https://github.com/danilloestrela/saint/issues/2)
- [ ] [#3 Add common aliases for any project by creating a temp aliases file](https://github.com/danilloestrela/saint/issues/3)
- [ ] [#4 Create a debugger for errors, enabling or disabling code errors](https://github.com/danilloestrela/saint/issues/4)
- [ ] [#6 Method that allows arrow keys to select options instead of typing](https://github.com/danilloestrela/saint/issues/6)
- [ ] [#7 Check for Saint updates automatically](https://github.com/danilloestrela/saint/issues/7)
- [ ] [#8 Restore a project from a previously created backup](https://github.com/danilloestrela/saint/issues/8)
- [ ] [#10 Create a way to make each project a Git repository](https://github.com/danilloestrela/saint/issues/10)
- [ ] [#12 Add Autocomplete for Project Commands (Pure Bash/Zsh)](https://github.com/danilloestrela/saint/issues/12)
</details>

### [Project DONEs](DONE.md)