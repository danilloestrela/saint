# 🤖 Saint - Intelligent Project Management System

[![GitHub release](https://img.shields.io/github/v/release/danilloestrela/saint)](https://github.com/danilloestrela/saint/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Bash](https://img.shields.io/badge/bash-Bash%20%7C%20Zsh-green.svg)](https://github.com/danilloestrela/saint)

> **Saint** is a powerful, intelligent project management CLI built with Bash scripting that automates your development workflow, manages projects, and keeps you organized.

## ✨ Features

- **Smart Project Management** - Add, remove, and manage projects with intelligent templates
- **Auto-Update System** - Automatically checks for updates and notifies you
- **Command Aliases** - Project-specific shortcuts and commands
- **Helper Functions** - Docker, Git, and CD helpers built-in
- **Dynamic Help System** - Auto-generated help from code comments
- **Beautiful UI** - Color-coded status messages and notifications
- **Extensible Architecture** - Easy to add new features and helpers

## 🚀 Quick Start

### Supported Operating Systems
- ![Linux](https://img.shields.io/badge/Linux-000?style=for-the-badge&logo=linux&logoColor=FCC624)
- ![Ubuntu](https://img.shields.io/badge/Ubuntu-35495E?style=for-the-badge&logo=ubuntu&logoColor=2CA5E0)
- ![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)
- ![WSL2](https://img.shields.io/badge/WSL2-blue)

### Installation

```bash
# Clone the repository
git clone https://github.com/danilloestrela/saint.git
cd saint

# PERMANENT installation - Add to your bash profile
echo "source $(pwd)/.saint" >> ~/.bashrc    # For Bash
echo "source $(pwd)/.saint" >> ~/.zshrc     # For Zsh

# Reload your bash for current session
source ~/.bashrc  # or source ~/.zshrc

# Saint will now load automatically in every new terminal session!
```

### First Run

```bash
# Check if Saint is working
saint version

# See available commands
saint help

# Add your first project
saint add my-project
```

## 📖 Usage

### Basic Commands

```bash
saint help                 # Show all available commands
saint version             # Display Saint version information
saint list                # List all managed projects
saint add <project>       # Add a new project
saint delete <project>    # Remove a project
saint backup <project>    # Create project backup
```

### Project Management

```bash
# Add a new project
saint add my-awesome-project

# Navigate to project
cd my-awesome-project

# Run project-specific commands
my-awesome-project run
my-awesome-project install
my-awesome-project help
```

### Auto-Update System

Saint automatically checks for updates every 7 days and notifies you when new versions are available.

```bash
# Check for updates manually
saint update check

# View update system status
saint update status

# Auto-update to latest version
saint update auto

# Force update to specific version
saint update force 1.2.0

# Show update help
saint update
```

## Configuration

Add project-specific aliases in your project's `.alias` file:

```bash
# Example .alias file
alias dev="saint my-project dev"
alias test="saint my-project test"
alias deploy="saint my-project deploy"
```

```bash
projects/my-project/
├── .my-project             # Main project file with commands
├── .mainCommands          # Project command routing
├── .alias                 # Project-specific aliases
└── .variables             # Project variables
```

## 📝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/saint.git
cd saint

# Add upstream remote
git remote add upstream https://github.com/danilloestrela/saint.git

# Create feature branch
git checkout -b feature/your-feature

# Make changes and test
source .saint
saint version

# Commit and push
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature
```

## 🏷️ Versioning

Saint follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality
- **PATCH** version for backwards-compatible bug fixes

### Release Process

```bash
# 1. Make changes and commit
git add .
git commit -m "feat: new feature"
git push origin main

# 2. Create release tag
git tag v1.2.0
git push origin v1.2.0

# 3. Users get notified automatically!
```

## 📚 Documentation

- WIP

## 🤝 Support

- **Issues**: [GitHub Issues](https://github.com/danilloestrela/saint/issues)
- **Discussions**: [GitHub Discussions](https://github.com/danilloestrela/saint/discussions)
- **Wiki**: [Project Wiki](https://github.com/danilloestrela/saint/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using bash scripting
- Inspired by the need for better project management
- Thanks to all contributors and users

---

**[Danillo Estrela](https://github.com/danilloestrela)**

*Star this repository if it helps you! ⭐*
