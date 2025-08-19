---
sidebar_position: 3
---

# Commands Reference 📚

All the commands you need to master Saint! Each command is designed to be simple and intuitive.

## Basic Commands

### `saint help`
Shows all available commands and their descriptions.

```bash
saint help
```

### `saint version`
Displays Saint version information and git details.

```bash
saint version
```

## Project Management

### `saint add <project-name>`
Adds a new project to Saint's management system.

```bash
# Add a new project
saint add my-awesome-project

# Add with specific path
saint add my-project /path/to/project
```

### `saint list`
Lists all managed projects with their status and information.

```bash
saint list
```

### `saint delete <project-name>`
Removes a project from Saint's management.

```bash
saint delete my-old-project
```

### `saint backup <project-name>`
Creates a backup of the specified project.

```bash
saint backup my-important-project
```

## Update System

### `saint update check`
Manually checks for available updates.

```bash
saint update check
```

### `saint update status`
Shows the current status of the update system.

```bash
saint update status
```

### `saint update auto`
Automatically downloads and installs the latest version.

```bash
saint update auto
```

### `saint update force <version>`
Forces an update to a specific version.

```bash
saint update force 1.2.0
```

## Project-Specific Commands

Once you add a project, Saint automatically creates project-specific aliases:

```bash
# After adding "my-project"
my-project help      # Show project-specific commands
my-project run       # Run the project
my-project install   # Install dependencies
my-project build     # Build the project
my-project test      # Run tests
```

## Helper Functions

Saint includes several built-in helpers that you can use in your projects:

### Docker Helpers
- `saint_docker_build` - Build Docker images
- `saint_docker_run` - Run Docker containers
- `saint_docker_clean` - Clean up Docker resources

### Git Helpers
- `saint_git_status` - Check git status
- `saint_git_pull` - Pull latest changes
- `saint_git_push` - Push changes

### CD Helpers
- `saint_cd_project` - Navigate to projects quickly
- `saint_cd_recent` - Go to recently visited projects

## Examples

### Complete Workflow Example

```bash
# 1. Add a new project
saint add my-react-app

# 2. Navigate to the project
cd my-react-app

# 3. Use project-specific commands
my-react-app install
my-react-app run

# 4. Check project status
saint list

# 5. Create a backup
saint backup my-react-app
```

### Quick Project Setup

```bash
# Clone and add in one go
git clone https://github.com/user/repo.git
saint add repo
cd repo
repo install
repo run
```

## Getting Help

- **`saint help`** - General help
- **`saint help <command>`** - Help for specific command
- **`<project-name> help`** - Project-specific help

## What's Next?

Now that you know the commands, check out the [Examples](/docs/examples) to see Saint in action, or explore the [Features](/docs/features) to understand what makes Saint powerful!
