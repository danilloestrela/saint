# Saint Project Helpers Documentation

This document explains how to use comment-based helpers in Saint project files to automatically generate help documentation.

## Overview

The Saint system uses a special comment syntax (`#@help`) to automatically generate help documentation for project commands. These comments are parsed by the `saint_project_update_help` function and converted into user-friendly help text.

## Comment Syntax

The basic syntax for helper comments is:

```bash
#@help <command>!<subcommand>: <description>
```

### Syntax Breakdown

- `#@help` - Required prefix to mark a comment as a helper
- `<command>` - The main command (e.g., `run`, `code`, `goto`)
- `!` - Separator between command and subcommand
- `<subcommand>` - The specific subcommand or option
- `:` - Separator between subcommand and description
- `<description>` - Human-readable description of what the command does

## Examples from Real Projects

### Run Command Helpers

```bash
#@help run!dev: Start the development server
"dev") npm run dev;;

#@help run!build: Build the project for production
"build") npm run build;;

#@help run!test: Run the complete test suite
"test") npm test;;

#@help run!lint: Run code linting
"lint") npm run lint;;

#@help run!docker: Run commands inside Docker container
"docker") docker compose exec app sh -c "composer run-script ${@}";;
```

### Code Command Helpers

```bash
#@help code!root: Open project root in editor
root) saint_cd_open_code ${projectPath} || cd - ;;

#@help code!src: Open source directory in editor
src) saint_cd_open_code ${projectSrcPath} || cd - ;;

#@help code!config: Open configuration files in editor
config) saint_cd_open_code ${projectConfigPath} || cd - ;;

#@help code!tests: Open test files in editor
tests) saint_cd_open_code ${projectTestsPath} || cd - ;;
```

### Goto Command Helpers

```bash
#@help goto!root: Navigate to project root directory
root) saint_cd ${projectPath} || cd - ;;

#@help goto!src: Navigate to source directory
src) saint_cd ${projectSrcPath} || cd - ;;

#@help goto!docs: Navigate to documentation directory
docs) saint_cd ${projectDocsPath} || cd - ;;

#@help goto!config: Navigate to configuration directory
config) saint_cd ${projectConfigPath} || cd - ;;
```

## How It Works

1. **Comment Placement**: Helper comments are placed directly above the corresponding case statement in switch/case blocks
2. **Function Registration**: The `saint_project_update_help` function is called with the list of functions to parse
3. **Parsing**: The system searches for `#@help` comments in the specified functions
4. **Help Generation**: Comments are converted into structured help text
5. **Display**: Users can view help using the project's help command

## Best Practices

### 1. Clear and Descriptive Descriptions
- Use action verbs (Run, Go to, Execute, etc.)
- Be specific about what the command does
- Include context when helpful (e.g., "for the PlatformService")

### 2. Consistent Formatting
- Always use the `#@help` prefix
- Use the `command!subcommand:` format consistently
- Keep descriptions concise but informative

### 3. Placement
- Place comments directly above the corresponding case statement
- Don't leave empty lines between the comment and the case
- Ensure comments are properly aligned with the code

### 4. Command Naming
- Use descriptive subcommand names
- Use kebab-case for multi-word subcommands (e.g., `test-pfs`, `h-test-pfs`)
- Keep subcommand names short but clear

## Function Structure

The typical structure for a Saint project function with helpers looks like this:

```bash
project_function() {
    lastCommand=$1
    currentCommand=$2
    shift 2

    case $currentCommand in
        #@help function!subcommand1: Description of subcommand1
        "subcommand1")
            # Implementation here
            ;;
        #@help function!subcommand2: Description of subcommand2
        "subcommand2")
            # Implementation here
            ;;
        "") saint_empty $lastCommand;;
        *) saint_invalid_command $lastCommand $newProjName;;
    esac
}
```

## Updating Help

To update the help documentation:

1. Add or modify `#@help` comments in your project functions
2. Call the `saint_project_update_help` function with the updated function list
3. The help file will be automatically regenerated

Example:
```bash
project_update_help() {
  saint_project_update_help ${PROJECT_HELP_FILE} ${PROJECT_SCRIPT_FILE} \
  "project_code" "project_goto" "project_run" "project_install"
}
```

## Common Patterns

### Development Commands
```bash
#@help run!dev: Start the development server
#@help run!build: Build the project for production
#@help run!test: Run the test suite
#@help run!lint: Run code linting
#@help run!format: Format code
#@help run!watch: Run in watch mode
```

### Navigation Commands
```bash
#@help goto!root: Navigate to project root
#@help goto!src: Navigate to source directory
#@help goto!docs: Navigate to documentation directory
#@help goto!tests: Navigate to test directory
#@help goto!config: Navigate to configuration directory
```

### Code Editor Commands
```bash
#@help code!root: Open project root in editor
#@help code!src: Open source directory in editor
#@help code!config: Open configuration files in editor
#@help code!tests: Open test files in editor
#@help code!docs: Open documentation in editor
```

### Installation Commands
```bash
#@help install!deps: Install project dependencies
#@help install!dev: Install development dependencies
#@help install!global: Install global dependencies
#@help install!docker: Build Docker containers
```

### Database Commands
```bash
#@help db!migrate: Run database migrations
#@help db!seed: Seed database with test data
#@help db!reset: Reset database
#@help db!backup: Create database backup
```

### Docker Commands
```bash
#@help docker!up: Start Docker containers
#@help docker!down: Stop Docker containers
#@help docker!build: Build Docker images
#@help docker!logs: View container logs
```

## Implementation Guide

### Setting Up Helpers in a New Project

1. **Create your project file** (e.g., `.myproject`):
```bash
#!/bin/bash
# depends on .saint / .saintHelpers
# Specific functions for myproject

# Getting current folder
local thisLocation=''
if [ -n "$ZSH_VERSION" ]; then
    local script_path=${(%):-%x}
    thisLocation=$(dirname "${script_path}")
else
    local script_path=${BASH_SOURCE[0]}
    thisLocation=$(dirname "${script_path}")
fi

# Function to show help
myproject_help() {
    saint_project_help ${MYPROJECT_HELP_FILE} myproject
}

# Function to update help
myproject_update_help() {
  saint_project_update_help ${MYPROJECT_HELP_FILE} ${MYPROJECT_SCRIPT_FILE} \
  "myproject_code" "myproject_goto" "myproject_run" "myproject_install"
}
```

2. **Add helper comments to your functions**:
```bash
myproject_run() {
    lastCommand=$1
    currentCommand=$2
    shift 2

    case $currentCommand in
        #@help run!dev: Start the development server
        "dev") npm run dev;;
        #@help run!test: Run the test suite
        "test") npm test;;
        #@help run!build: Build for production
        "build") npm run build;;
        "") saint_empty $lastCommand;;
        *) saint_invalid_command $lastCommand $newProjName;;
    esac
}
```

3. **Register your functions** in the main Saint system
4. **Call the update function** to generate help documentation

### Variable Naming Convention

Use consistent variable naming for your project paths:
- `${PROJECT_NAME}Path` - Root project directory
- `${PROJECT_NAME}SrcPath` - Source directory
- `${PROJECT_NAME}TestsPath` - Tests directory
- `${PROJECT_NAME}DocsPath` - Documentation directory
- `${PROJECT_NAME}HelpFile` - Help file path
- `${PROJECT_NAME}ScriptFile` - Script file path

This system allows for automatic generation of comprehensive help documentation directly from the code, ensuring that documentation stays in sync with the actual implementation.
