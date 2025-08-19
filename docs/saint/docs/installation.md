---
sidebar_position: 2
---

# Installation Guide ⚡

Get Saint running on your system in just a few minutes! Saint supports Linux, macOS, and WSL2.

## Prerequisites

- **Git** - For cloning the repository
- **Bash** or **Zsh** - Your shell (Saint works with both!)

## Quick Installation

### 1. Clone the Repository

```bash
git clone https://github.com/danilloestrela/saint.git
cd saint
```

### 2. Permanent Installation

Choose your shell and run the appropriate command:

#### For Bash Users
```bash
echo "source $(pwd)/.saint" >> ~/.bashrc
source ~/.bashrc
```

#### For Zsh Users
```bash
echo "source $(pwd)/.saint" >> ~/.zshrc
source ~/.zshrc
```

### 3. Verify Installation

```bash
saint version
```

You should see Saint's version information! 🎉

## Operating System Specific Instructions

### 🐧 Linux (Ubuntu, Debian, CentOS, etc.)

```bash
# Install Git if you don't have it
sudo apt update
sudo apt install git

# Then follow the Quick Installation steps above
```

### 🍎 macOS

```bash
# Install Git if you don't have it (using Homebrew)
brew install git

# Or download from https://git-scm.com/download/mac

# Then follow the Quick Installation steps above
```

### 🪟 WSL2 (Windows Subsystem for Linux)

```bash
# WSL2 comes with Git pre-installed
# Just follow the Quick Installation steps above
```

### 🐚 Other Shells

Saint is designed for Bash and Zsh, but you can try:

```bash
# For Fish shell
echo "source $(pwd)/.saint" >> ~/.config/fish/config.fish

# For Ksh
echo "source $(pwd)/.saint" >> ~/.kshrc
```

## First Run

After installation, try these commands:

```bash
# Check if Saint is working
saint version

# See available commands
saint help

# Add your first project
saint add my-project
```

## Troubleshooting

### "Command not found: saint"

This means the installation didn't work. Try:

1. **Check your shell**: `echo $SHELL`
2. **Verify the source line**: Check if it was added to your profile file
3. **Reload your shell**: `source ~/.bashrc` or `source ~/.zshrc`

### Permission Denied

```bash
# Make sure the .saint file is executable
chmod +x .saint
```

### Path Issues

If you moved the Saint directory, update your profile file with the new path:

```bash
# Find the new path
cd /path/to/saint
echo "source $(pwd)/.saint" >> ~/.bashrc
```

## Uninstalling

To remove Saint:

1. **Remove the source line** from your profile file (`~/.bashrc` or `~/.zshrc`)
2. **Delete the Saint directory**: `rm -rf /path/to/saint`
3. **Reload your shell**: `source ~/.bashrc` or `source ~/.zshrc`

## What's Next?

Now that Saint is installed, check out the [Commands Reference](/docs/commands) to see what you can do with it!
