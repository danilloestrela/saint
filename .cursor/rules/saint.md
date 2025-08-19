# About the Project
- **Saint**

Saint is an intelligent open-source project manager designed to save developers time when setting up new projects from scratch. It abstracts away repetitive setup work, reduces manual configuration to nearly zero, and ensures portability across environments.  

Saint runs in **any Unix-based environment** (including macOS on Silicon or Intel, WSL2 with Linux, or any Linux distribution). It is intended to be executed globally, without requiring additional CLI tools or dependencies.  

# Architecture

The architecture of Saint follows a clean core-based organization with modular features:

### Root Level
- **`.saint`** → Main entry point and CLI handler
- **`core/`** → Centralized core functionality
- **`projects/`** → User-created projects storage
- **`saint_temp/`** → Dynamic command generation
- **`templates/`** → Scaffolding templates
- **`docs/`** → Documentation site (Docusaurus)

### Core Structure
- **`core/.saintCustomAlias`** → Global/custom aliases
- **`core/.saintProjects`** → Project loading and management
- **`core/helpers/`** → Shared utility functions
  - `.saintHelpers` → Core helper functions (messages, validation, etc.)
  - `.saintAutoUpdate` → Auto-update system
- **`core/methods/`** → Core business logic
  - `.saintMethods` → Project management methods
- **`core/variables/`** → Central configuration
  - `.saintVariables` → Global variables, paths, colors, update config
- **`core/features/`** → Modular feature system
  - **`helpers/`** → Specialized helper modules
    - `saint_cd_helpers/` → Navigation helpers
    - `saint_docker_helpers/` → Docker utilities
    - `saint_git_helpers/` → Git workflow helpers
    - `saint_select_option/` → Selection utilities
  - **`methods/`** → Feature-specific methods
    - `saint_help_manager/` → Help system management
    - `saint_project_manager/` → Project CRUD operations
    - `saint_template_manager/` → Template generation

### Projects Structure
Each project in `projects/` MUST contain:
- `.alias` → Project-specific aliases
- `.<project_name>` → Project metadata
- `.help_descriptions` → Help text
- `.mainCommands` → Project commands
- `.variables` → Project configuration

### Templates Structure
- **`templates/saint_temps/`** → System command templates
- **`templates/single_project/`** → Minimal project model templates

### Temporary Files
- **`saint_temp/`** → Dynamically generated commands
  - `.saintMainCommands` → Main command dispatcher
  - `.saintHelpCommands` → Help command dispatcher

### Key Variables
- `PROJECT_PATH` → Saint installation directory
- `SAINT_CORE_PATH` → Core functionality path
- `SAINT_TEMP_FOLDER` → Temporary files location
- `SAINT_PROJECTS_FOLDER` → User projects location
- `SAINT_UPDATE_CHECK_FILE` → Update system state

### Execution Flow
1. **`.saint`** loads core components
2. **Variables** are initialized from `.saintVariables`
3. **Helpers** are sourced for utility functions
4. **Projects** are loaded and validated
5. **Methods** are sourced for business logic
6. **Features** are loaded based on project types
7. **Commands** are dynamically generated in `saint_temp/`

### Auto-Update System
- Checks GitHub releases every 7 days
- Automatic version comparison and notifications
- Safe update process with backup creation
- Configurable update intervals