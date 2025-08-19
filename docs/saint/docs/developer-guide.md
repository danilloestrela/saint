---
sidebar_position: 6
---

# Developer Guide 🛠️

Ready to contribute to Saint or extend its functionality? This guide covers everything you need to know about Saint's architecture, development setup, and contribution process.

## Architecture Overview

### Core Structure

```
saint/
├── .saint                    # Main entry point and CLI handler
├── core/                     # Core system files
│   ├── helpers/             # Helper functions and utilities
│   ├── methods/             # Core methods and business logic
│   ├── variables/           # Global variables and configuration
│   └── features/            # Feature modules and extensions
├── projects/                 # User projects storage
├── templates/                # Command templates and configurations
└── docs/                     # Documentation (this site!)
```

### Key Components

- **`.saint`** - Main CLI entry point that loads all components
- **Helpers** - Utility functions for common operations
- **Methods** - Core business logic and project management
- **Variables** - Configuration and global state management
- **Features** - Modular feature implementations

## Development Setup

### Prerequisites

- **Bash 4.0+** or **Zsh 5.0+**
- **Git** for version control
- **Basic shell scripting knowledge**

### Local Development

```bash
# Clone the repository
git clone https://github.com/danilloestrela/saint.git
cd saint

# Source Saint for development
source .saint

# Test your changes
saint version
saint help
```

### Testing Changes

```bash
# Test specific functions
saint_version
saint_help

# Test with debug mode
export SAINT_DEBUG=true
saint help
```

## Code Style and Standards

### Bash Best Practices

- **Use `local`** for function variables
- **Quote all variables** to prevent word splitting
- **Use `[[` instead of `[`** for better test expressions
- **Handle errors gracefully** with proper exit codes

### Naming Conventions

- **Functions**: `saint_function_name`
- **Variables**: `SAINT_VARIABLE_NAME` (uppercase for globals)
- **Files**: `.saintFileName` (dot prefix for Saint files)

### Code Organization

```bash
# Function structure
saint_example_function() {
    local local_var="$1"
    
    # Input validation
    if [[ -z "$local_var" ]]; then
        saint_msg_status "error" "Variable is required"
        return 1
    fi
    
    # Main logic
    echo "Processing: $local_var"
    
    # Return success
    return 0
}
```

## Adding New Features

### 1. Helper Functions

Create new helper functions in `core/helpers/`:

```bash
# core/helpers/.saintNewHelper
saint_new_helper() {
    local input="$1"
    
    # Your helper logic here
    echo "Helper processed: $input"
}
```

### 2. Core Methods

Add business logic in `core/methods/`:

```bash
# core/methods/.saintNewMethod
saint_new_method() {
    local project_name="$1"
    
    # Validate input
    if [[ -z "$project_name" ]]; then
        saint_msg_status "error" "Project name required"
        return 1
    fi
    
    # Implement your method
    echo "New method for project: $project_name"
}
```

### 3. Variables and Configuration

Add configuration in `core/variables/`:

```bash
# core/variables/.saintNewVariables
SAINT_NEW_FEATURE_ENABLED=true
SAINT_NEW_FEATURE_PATH="${HOME}/.saint_new_feature"
```

### 4. Integration

Update the main `.saint` file to load your new components:

```bash
# In .saint
source ${PROJECT_PATH}/core/helpers/.saintNewHelper
source ${PROJECT_PATH}/core/methods/.saintNewMethod
source ${PROJECT_PATH}/core/variables/.saintNewVariables
```

## Extending Existing Features

### Adding New Commands

```bash
# In the main saint() function
case "$1" in
    "newcommand")
        saint_new_command "$2"
        ;;
    # ... existing cases
esac
```

### Extending Project Management

```bash
# Add new project types
saint_add_project() {
    local project_name="$1"
    local project_path="$2"
    
    # Existing logic...
    
    # Add your custom logic
    if [[ -f "${project_path}/package.json" ]]; then
        saint_setup_node_project "$project_name" "$project_path"
    elif [[ -f "${project_path}/requirements.txt" ]]; then
        saint_setup_python_project "$project_name" "$project_path"
    fi
}
```

## Testing Your Changes

### Manual Testing

```bash
# Test individual functions
saint_new_function "test input"

# Test full command flow
saint newcommand test

# Test error conditions
saint newcommand ""  # Should show error
```

### Integration Testing

```bash
# Test with real projects
saint add test-project
cd test-project
test-project help

# Test update system
saint update check
```

## Debugging

### Enable Debug Mode

```bash
export SAINT_DEBUG=true
saint help
```

### Add Debug Output

```bash
saint_debug_function() {
    if [[ "$SAINT_DEBUG" == "true" ]]; then
        echo "DEBUG: Function called with: $*" >&2
    fi
    
    # Your function logic
}
```

### Logging

```bash
# Use existing logging functions
saint_msg_status "info" "Processing..."
saint_msg_status "success" "Completed successfully"
saint_msg_status "error" "Something went wrong"
```

## Contributing

### Pull Request Process

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following the code style
4. **Test thoroughly** with different scenarios
5. **Commit with clear messages**: `git commit -m "feat: add amazing feature"`
6. **Push to your fork**: `git push origin feature/amazing-feature`
7. **Create a pull request** with detailed description

### Commit Message Format

```
type(scope): description

feat: add new helper function
fix: resolve path issue in update system
docs: update installation guide
style: improve code formatting
refactor: simplify project detection logic
test: add tests for new feature
```

### Code Review Checklist

- [ ] **Functionality** - Does it work as expected?
- [ ] **Error handling** - Are errors handled gracefully?
- [ ] **Documentation** - Is the code self-documenting?
- [ ] **Testing** - Have you tested various scenarios?
- [ ] **Style** - Does it follow Saint's coding standards?

## Advanced Topics

### Plugin System

Saint supports a plugin architecture for extending functionality:

```bash
# Create a plugin file
# plugins/.saintMyPlugin
saint_plugin_init() {
    echo "Plugin initialized"
}

# Load plugins in main .saint
for plugin in ${PROJECT_PATH}/plugins/.saint*; do
    if [[ -f "$plugin" ]]; then
        source "$plugin"
        saint_plugin_init
    fi
done
```

### Custom Templates

Create custom project templates:

```bash
# templates/custom/.saintCustomTemplate
saint_setup_custom_project() {
    local project_name="$1"
    local project_path="$2"
    
    # Custom setup logic
    cp -r "${PROJECT_PATH}/templates/custom/"* "$project_path/"
    
    # Customize files
    sed -i "s/PROJECT_NAME/$project_name/g" "$project_path/README.md"
}
```

### Configuration Management

```bash
# Environment-specific configuration
if [[ -f "${PROJECT_PATH}/.env.local" ]]; then
    source "${PROJECT_PATH}/.env.local"
fi

# User-specific overrides
if [[ -f "${HOME}/.saintrc" ]]; then
    source "${HOME}/.saintrc"
fi
```

## Getting Help

### Resources

- **GitHub Issues**: Report bugs and request features
- **GitHub Discussions**: Ask questions and share ideas
- **Code Examples**: Check the examples in this documentation
- **Source Code**: Explore the codebase for implementation details

### Community

- **Contributors**: Join the development team
- **Code Reviews**: Participate in pull request reviews
- **Documentation**: Help improve this guide
- **Testing**: Test new features and report issues

## What's Next?

Ready to contribute? Start with a small feature or bug fix, or dive into the codebase to understand how Saint works. Every contribution helps make Saint better for the entire community!

Check out our [GitHub repository](https://github.com/danilloestrela/saint) to get started!
