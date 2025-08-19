# About the Project
- **Saint**

Saint is an intelligent open-source project manager designed to save developers time when setting up new projects from scratch. It abstracts away repetitive setup work, reduces manual configuration to nearly zero, and ensures portability across environments.  

Saint runs in **any Unix-based environment** (including macOS on Silicon or Intel, WSL2 with Linux, or any Linux distribution). It is intended to be executed globally, without requiring additional CLI tools or dependencies.  

# Architecture

The architecture of Saint is simple but flexible:  

### features
- **features/helpers**  
  Contains helper scripts:  
  - `_saintCdHelpers`  
  - `_saintDockerHelpers`  
  - `_saintGitHelpers`  
  - `_saintSelectOption`  

- **features/methods**  
  Contains feature managers:  
  - `_saintHelpManager` → global behaviors  
  - `_saintProjectManager`, `_saintProjectManagerBackup`, `_saintProjectManagerHelp` → project creation/management utilities  
  - `_saintTemplateManager` → template generation  

### projects
Holds user-created projects:  
- `projects/<project>`  

Each project MUST contain:  
- `.alias`  
- `.<project>` (metadata)  
- `.help_descriptions`  
- `.mainCommands`  
- `.variables`  

Projects MUST be excluded from GitHub by default.  

### saint_temp
Temporary commands generated dynamically by Saint.  
MUST be excluded from GitHub.  
Includes:  
- `.saintHelpCommands`  
- `.saintMainCommands`  

### templates
Scaffolding templates used to bootstrap both `projects/` and `saint_temp/`.  
Example:  
- `saint_temps/.saintMainCommands.txt`  

### single_project
Minimal standalone project model.  
Includes:  
- `alias.txt`  
- `mainCommands.txt`  
- `project.txt`  
- `variables.txt`  

### Root-Level Core Files
- **.saint** → entry point of the system  
- **.saintCustomAlias** → global/custom aliases (future: `plugins/userAlias`)  
- **.saintHelpers** → shared helpers  
- **.saintMethods** → core methods (planned: move into `core/`)  
- **.saintProjects** → reads/manages projects (planned: move into `core/`)  
- **.saintVariables** → central variables (planned: move into `core/`)  

Other root files:  
- **.editorconfig**  
- **.gitignore**  
- **LICENSE**  
- **DONE.md**  
- **README.md**   