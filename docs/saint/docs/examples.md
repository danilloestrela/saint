---
sidebar_position: 5
---

# Examples 💡

See Saint in action! These real-world examples show you how to use Saint for common development tasks and workflows.

## Getting Started Examples

### First Project Setup

```bash
# 1. Install Saint (if you haven't already)
git clone https://github.com/danilloestrela/saint.git
cd saint
echo "source $(pwd)/.saint" >> ~/.bashrc
source ~/.bashrc

# 2. Verify installation
saint version

# 3. Add your first project
saint add my-first-project

# 4. Navigate and explore
cd my-first-project
my-first-project help
```

### Quick Project Addition

```bash
# Clone an existing project and add it to Saint
git clone https://github.com/user/awesome-app.git
saint add awesome-app
cd awesome-app

# Now you have project-specific commands!
awesome-app install
awesome-app run
```

## Web Development Workflow

### React/Next.js Project

```bash
# Create and add a new React project
npx create-react-app my-react-app
saint add my-react-app
cd my-react-app

# Use Saint's project commands
my-react-app install    # npm install
my-react-app start      # npm start
my-react-app build      # npm run build
my-react-app test       # npm test

# Quick navigation back to Saint
saint cd my-react-app
```

### Node.js API Project

```bash
# Set up a Node.js project
mkdir my-api
cd my-api
npm init -y
npm install express cors dotenv

# Add to Saint
saint add my-api

# Create custom commands in package.json
# Then use them with Saint
my-api dev      # npm run dev
my-api start    # npm start
my-api debug    # npm run debug
```

## Python Development

### Python Web App

```bash
# Create Python project
mkdir my-python-app
cd my-python-app
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Add to Saint
saint add my-python-app

# Use project commands
my-python-app install    # pip install -r requirements.txt
my-python-app run        # python app.py
my-python-app test       # python -m pytest
```

## Docker Development

### Containerized Application

```bash
# Project with Docker
mkdir my-docker-app
cd my-docker-app

# Add to Saint
saint add my-docker-app

# Use Docker helpers
saint_docker_build my-docker-app
saint_docker_run my-docker-app
saint_docker_clean
```

## Multi-Project Management

### Managing Multiple Projects

```bash
# Add several projects
saint add frontend-app
saint add backend-api
saint add mobile-app
saint add docs-site

# List all projects
saint list

# Quick navigation between projects
saint cd frontend-app
# ... work on frontend
saint cd backend-api
# ... work on backend
saint cd mobile-app
# ... work on mobile
```

### Project Backup Strategy

```bash
# Regular backups
saint backup frontend-app
saint backup backend-api

# Before major changes
saint backup my-project

# Check backup status
saint list
```

## Git Workflow Integration

### Daily Git Operations

```bash
# Quick status check
saint_git_status

# Pull latest changes
saint_git_pull

# After making changes
git add .
git commit -m "Update feature"
saint_git_push
```

### Project-Specific Git

```bash
# Navigate to project
saint cd my-project

# Use project git commands
my-project git-status
my-project git-pull
my-project git-push
```

## Update Management

### Keeping Saint Updated

```bash
# Check for updates
saint update check

# View update status
saint update status

# Auto-update when ready
saint update auto

# Force specific version if needed
saint update force 1.2.0
```

## Custom Workflows

### Custom Project Commands

```bash
# Add custom commands to your project
# In your project's .alias file:
alias deploy='./scripts/deploy.sh'
alias logs='tail -f logs/app.log'
alias restart='./scripts/restart.sh'

# Saint automatically picks these up
my-project deploy
my-project logs
my-project restart
```

### Environment-Specific Commands

```bash
# Different commands for different environments
my-project dev      # Development mode
my-project staging # Staging environment
my-project prod    # Production mode
```

## Troubleshooting Examples

### Common Issues and Solutions

```bash
# "Command not found: saint"
echo $SHELL
source ~/.bashrc  # or ~/.zshrc

# Project commands not working
saint list        # Check if project is added
saint cd my-project  # Navigate to project

# Update issues
saint update status
saint update check
```

### Debug Mode

```bash
# Enable debug output
export SAINT_DEBUG=true
saint help

# Check Saint configuration
saint version
```

## Advanced Examples

### CI/CD Integration

```bash
# In your CI pipeline
saint add $CI_PROJECT_NAME
saint backup $CI_PROJECT_NAME
# ... run tests and build
saint update auto
```

### Team Collaboration

```bash
# Share Saint configuration
git add .saint
git commit -m "Add Saint configuration"
git push

# Team members can now use the same setup
git pull
source .saint
```

## What's Next?

These examples show the basics, but Saint is much more powerful! Explore the [Features](/docs/features) to discover advanced capabilities, or check out the [Developer Guide](/docs/developer-guide) to extend Saint with your own custom functionality.

Have a specific use case? Check our [GitHub Issues](https://github.com/danilloestrela/saint/issues) or contribute your own examples!
