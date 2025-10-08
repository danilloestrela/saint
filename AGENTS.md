# Saint Project - Multi-Agent System Constitution

**Project**: Saint - Intelligent Open-Source Project Manager
**Philosophy**: Zero dependencies, pure shell, cross-platform Unix compatibility
**Architecture**: Spec-Driven Development (SDD)

---

## Fundamental Principles

### I. Shell-First Development
**Pure shell implementation is non-negotiable**

- NO external dependencies (Python, Node.js, Ruby, etc.)
- ONLY shell scripts using bash/sh
- POSIX compliance where possible
- Cross-platform Unix compatibility (macOS Silicon/Intel, Linux, WSL2)
- All code must run in any Unix-based environment

**Examples of acceptable tools:**
- Built-in shell commands: `cd`, `ls`, `mkdir`, `grep`, `sed`, `awk`
- Standard Unix utilities: `git`, `docker` (if already installed)
- Shell built-ins: `source`, `export`, `function`

**Prohibited:**
- `pip install`, `npm install`, `gem install`
- Python scripts, Node.js scripts, Ruby scripts
- Any binary compilation steps
- Package manager dependencies

---

### II. Spec-Driven Development (SDD)
**Architecture documentation is the single source of truth**

- All agents MUST consult project documentation before ANY task
- Architecture patterns are defined and MUST be followed
- File naming conventions are strict and enforced
- Directory structure is sacred - no deviations without documentation update
- **MANDATORY**: Use devcontext MCP to store Saint-specific patterns

**Documentation Locations:**
- `docs/` → User-facing documentation (Docusaurus)
- `.cursorrules` → Development rules and patterns
- Inline comments → Complex logic explanations

---

### III. Modular Architecture Enforcement
**Core-based organization with feature isolation**

#### Core Structure (IMMUTABLE):
```
core/
├── .saintCustomAlias      # Global aliases
├── .saintProjects         # Project management
├── helpers/               # Utility functions
│   ├── .saintHelpers      # Core helpers
│   └── .saintAutoUpdate   # Update system
├── methods/               # Business logic
│   └── .saintMethods      # Core methods
├── variables/             # Configuration
│   └── .saintVariables    # Global variables
└── features/              # Modular features
    ├── helpers/           # Feature utilities
    └── methods/           # Feature logic
```

**Rules:**
- Helpers = Pure functions (no state modification)
- Methods = Business logic (can modify state)
- Features = Self-contained modules
- All files start with `.` (hidden files)
- No circular dependencies

---

### IV. Cross-Platform Compatibility (MANDATORY)
**Must work on ALL Unix-based systems**

#### Testing Requirements:
- **MANDATORY**: Test on Linux (minimum)
- **HIGHLY RECOMMENDED**: Test on macOS
- **RECOMMENDED**: Test on WSL2

#### Platform-Specific Handling:
```bash
# Good - Portable command checking
if command -v docker &> /dev/null; then
    echo "Docker available"
fi

# Bad - OS-specific code without guards
if [[ $(uname) == "Darwin" ]]; then
    # macOS-only code without fallback
fi
```

**Portable Command Reference:**
- ✅ `command -v` instead of `which`
- ✅ `[[ ]]` for bash, `[ ]` for POSIX
- ✅ `$HOME` instead of `~` in scripts
- ❌ GNU-specific flags (e.g., `ls --color`)
- ❌ Hardcoded paths (e.g., `/usr/local/bin`)

---

### V. File Naming Conventions (STRICT)
**Naming is enforced and consistent**

#### Core Files:
- Main entry: `.saint`
- Core modules: `.saint<ComponentName>`
- Example: `.saintHelpers`, `.saintMethods`, `.saintProjects`

#### Feature Files:
- Feature folders: `saint_<feature>_<type>/`
- Helper files: `.<n>_helper.sh` or `.<feature>Helper`
- Method files: `.<n>_method.sh` or `.<feature>Method`
- Example: `saint_docker_helpers/.dockerHelper.sh`

#### Project Files:
- Project metadata: `.<project_name>`
- Project aliases: `.alias`
- Project help: `.help_descriptions`
- Project commands: `.mainCommands`
- Project variables: `.variables`

**Violation = Automatic rejection**

---

### VI. Error Handling Standards
**Every user input must be validated**

```bash
# MANDATORY pattern for all functions
function saint_operation() {
    local param="$1"

    # 1. Validate inputs
    if [[ -z "$param" ]]; then
        echo "Error: Parameter required" >&2
        return 1
    fi

    # 2. Perform operation
    if ! some_command "$param"; then
        echo "Error: Operation failed" >&2
        return 1
    fi

    # 3. Return success
    return 0
}
```

**Error Message Standards:**
- Always write to stderr: `>&2`
- Prefix with "Error: " or "Fatal: "
- Be specific about what failed
- Suggest solution when possible

---

### VII. Security First
**Shell scripts are security-critical**

#### Input Sanitization:
```bash
# Always sanitize user input
function saint_safe_path() {
    local path="$1"
    path="${path//..\/}"  # Remove path traversal
    path="${path//~\/}"   # Remove home expansion
    echo "$path"
}
```

#### Command Injection Prevention:
```bash
# Bad - Vulnerable
eval "$user_input"

# Good - Safe
local -a cmd=("$executable" "$arg1" "$arg2")
"${cmd[@]}"
```

#### Secure Temporary Files:
```bash
temp_file=$(mktemp)
trap "rm -f '$temp_file'" EXIT
```

---

## Agent Roles and Responsibilities

### 1. **Saint Core Agent** (Primary)
**Role**: Core system development and architecture enforcement

**Responsibilities:**
- Maintain core system integrity (`core/` directory)
- Enforce file naming conventions
- Manage global variables and configuration
- Implement auto-update system
- Ensure cross-platform compatibility

**Required Actions:**
- **devcontext MCP**: Store all Saint-specific patterns
- **structural-thinking MCP**: Break down complex core features
- Review architecture before ANY core changes
- Test on Linux minimum, macOS recommended
- Document all breaking changes

**Quality Gates:**
- [ ] No external dependencies added
- [ ] File naming conventions followed
- [ ] Cross-platform tested
- [ ] Error handling implemented
- [ ] Documentation updated

---

### 2. **Saint Feature Agent**
**Role**: Feature module development and isolation

**Responsibilities:**
- Create new feature modules in `core/features/`
- Maintain feature independence
- Implement feature helpers and methods
- Ensure feature discoverability
- Document feature APIs

**Feature Structure (MANDATORY):**
```
core/features/
├── helpers/
│   └── saint_<feature>_helpers/
│       └── .<feature>_helper.sh
└── methods/
    └── saint_<feature>_manager/
        └── .<feature>_method.sh
```

**Required Actions:**
- **devcontext MCP**: Query existing feature patterns
- **structural-thinking MCP**: Plan feature architecture
- Verify feature doesn't exist before creating
- Keep helpers pure (no side effects)
- Keep methods focused (single responsibility)

**Quality Gates:**
- [ ] Feature folder naming correct
- [ ] Helpers are pure functions
- [ ] Methods handle state correctly
- [ ] Feature can be sourced independently
- [ ] Feature documented in `docs/`
- [ ] No dependencies on other features (if possible)

---

### 3. **Saint Template Agent**
**Role**: Project scaffolding and template management

**Responsibilities:**
- Maintain templates in `templates/`
- Create new project templates
- Ensure template portability
- Support variable substitution
- Validate template structure

**Template Structure (REQUIRED):**
```
templates/single_project/
├── .alias              # Project aliases
├── .<project_name>     # Project metadata
├── .help_descriptions  # Help text
├── .mainCommands       # Commands
└── .variables          # Configuration
```

**Required Actions:**
- **devcontext MCP**: Store template patterns
- Use shell variable substitution: `${VAR_NAME}`
- Test templates create valid projects
- Document all template variables
- Ensure cross-platform compatibility

**Quality Gates:**
- [ ] Template contains all required files
- [ ] Variable substitution works
- [ ] Generated project is valid
- [ ] Template documented
- [ ] Works on all platforms

---

### 4. **Saint Command Agent**
**Role**: Command generation and dispatcher management

**Responsibilities:**
- Generate `.saintMainCommands` dispatcher
- Generate `.saintHelpCommands` help system
- Maintain command registry
- Detect command conflicts
- Support tab completion

**Command Generation (AUTOMATIC):**
```bash
# Commands generated in saint_temp/
saint_temp/
├── .saintMainCommands   # Main dispatcher
└── .saintHelpCommands   # Help dispatcher
```

**Required Actions:**
- **devcontext MCP**: Store command generation patterns
- Parse `.mainCommands` from all projects
- Detect duplicate command names
- Generate help from `.help_descriptions`
- Validate command syntax

**Quality Gates:**
- [ ] No command name conflicts
- [ ] All commands have help text
- [ ] Commands properly isolated
- [ ] Error handling in dispatcher
- [ ] Tab completion works

---

### 5. **Saint Testing Agent**
**Role**: Quality assurance and testing

**Responsibilities:**
- Test shell script functionality
- Validate cross-platform compatibility
- Verify error handling
- Test edge cases
- Performance testing

**Required Actions:**
- **TestSprite MCP**: Generate test cases
- **devcontext MCP**: Store testing patterns
- Test on Linux (minimum)
- Test error conditions
- Test with invalid inputs
- Test with edge cases (spaces in paths, special characters)

**Testing Approach:**
```bash
# Source and test individual functions
source core/features/helpers/saint_new/.newHelper.sh

# Test normal cases
test_function "valid_input"

# Test error cases
test_function ""           # Empty input
test_function "../../../"  # Path traversal
test_function "invalid"    # Invalid input
```

**Quality Gates:**
- [ ] All functions tested individually
- [ ] Error cases tested
- [ ] Edge cases covered
- [ ] Cross-platform tested
- [ ] Performance acceptable

---

### 6. **Saint Documentation Agent**
**Role**: Documentation maintenance

**Responsibilities:**
- Maintain `docs/` Docusaurus site
- Update inline comments
- Document new features
- Create usage examples
- Maintain architecture docs

**Required Actions:**
- **browsermcp MCP**: Research documentation best practices
- **devcontext MCP**: Store documentation patterns
- Update docs immediately after code changes
- Document in English (inline comments)
- User docs can be PT-BR if needed

**Documentation Standards:**
```bash
# Good - Explains why and provides context
# Validate project name to prevent filesystem issues
# Only allow alphanumeric, dash, and underscore characters
function saint_validate_project_name() {
    local name="$1"
    [[ "$name" =~ ^[a-zA-Z0-9_-]+$ ]]
}

# Bad - States the obvious
# Check if name matches regex
function saint_validate_project_name() {
    local name="$1"
    [[ "$name" =~ ^[a-zA-Z0-9_-]+$ ]]
}
```

**Quality Gates:**
- [ ] All new features documented
- [ ] Examples provided
- [ ] Platform notes included
- [ ] Breaking changes highlighted
- [ ] Migration guides for breaking changes

---

### 7. **Saint Security Agent**
**Role**: Security audit and compliance

**Responsibilities:**
- Review shell scripts for vulnerabilities
- Prevent command injection
- Validate input sanitization
- Secure temporary file handling
- Audit user input handling

**Security Checklist:**
- [ ] No `eval` on user input
- [ ] All user inputs sanitized
- [ ] No path traversal vulnerabilities
- [ ] Secure temporary files (mktemp + trap)
- [ ] No hardcoded credentials
- [ ] Proper file permissions
- [ ] No sensitive data in logs

**Required Actions:**
- **context7 MCP**: Research shell security best practices
- Review all user input handling
- Test with malicious inputs
- Document security considerations

---

## Workflow and Communication

### Before Starting Any Task

**Mandatory Pre-Task Checklist:**
```markdown
[ ] Read .cursorrules for Saint-specific patterns
[ ] Identify which layer: core, feature, template, or command
[ ] Verify file naming convention
[ ] Check cross-platform requirements
[ ] Query devcontext MCP for existing patterns
[ ] Plan testing approach
```

### MCP Usage Priority for Saint

1. **devcontext MCP** (HIGHEST) - Store/retrieve Saint patterns
2. **structural-thinking MCP** - Break down complex features
3. **TestSprite MCP** - Generate test cases
4. **context7 MCP** - Shell scripting best practices
5. **browsermcp MCP** - Research and verification

### Development Environment

**Saint Development Requirements:**
- Unix-based system (Linux, macOS, WSL2)
- Bash shell (version 4.0+)
- Git (for version control)
- Text editor (Vi/Vim, VS Code, etc.)

**No Additional Tools Required:**
- No npm, pip, gem, cargo
- No compilers needed
- No build systems required

---

## Critical Violations (Automatic Rejection)

### 🚫 Level 1 - Blocker (Immediate Rejection)

1. **Adding external dependencies**
   - Using Python, Node.js, Ruby, or any non-shell language
   - Requiring package managers (npm, pip, gem)
   - Adding binary dependencies

2. **Breaking file naming conventions**
   - Not following `.saint<n>` pattern
   - Not using `.` prefix for hidden files
   - Wrong folder naming

3. **Breaking architecture structure**
   - Modifying core structure without documentation update
   - Creating files outside designated locations
   - Breaking helper/method separation

4. **No cross-platform compatibility**
   - Using platform-specific code without guards
   - Not testing on Linux minimum
   - Using non-portable commands

### ⚠️ Level 2 - Mandatory Correction

1. **Missing error handling**
   - Functions without input validation
   - No error messages
   - Silent failures

2. **Security vulnerabilities**
   - Command injection risks
   - Unsanitized user input
   - Insecure temporary files

3. **Missing documentation**
   - New features without docs
   - No inline comments for complex logic
   - Breaking changes undocumented

---

## Compliance Checklist Before Any PR

### Architecture
- [ ] File naming conventions followed
- [ ] Correct directory structure
- [ ] No external dependencies added
- [ ] Architecture documented if changed

### Code Quality
- [ ] Pure shell implementation
- [ ] Error handling implemented
- [ ] Input validation present
- [ ] Security reviewed
- [ ] Performance acceptable

### Testing
- [ ] Tested on Linux (minimum)
- [ ] Error cases tested
- [ ] Edge cases covered
- [ ] Integration tested

### Documentation
- [ ] Inline comments for complex logic
- [ ] Feature documented in docs/
- [ ] Examples provided
- [ ] Breaking changes noted

### Cross-Platform
- [ ] No platform-specific code without guards
- [ ] Portable commands used
- [ ] Path handling correct
- [ ] Works in bash and sh (if POSIX)

---

## Saint-Specific Patterns

### 1. Sourcing Modules
```bash
# Core sourcing pattern (used in .saint)
source "${SAINT_CORE_PATH}/variables/.saintVariables"
source "${SAINT_CORE_PATH}/helpers/.saintHelpers"
source "${SAINT_CORE_PATH}/methods/.saintMethods"

# Feature sourcing (dynamic)
for feature in "${SAINT_CORE_PATH}/features/helpers/"*/; do
    for helper in "${feature}".*; do
        [[ -f "$helper" ]] && source "$helper"
    done
done
```

### 2. Variable Declaration
```bash
# Always declare in .saintVariables
# Use descriptive, uppercase names with underscores
SAINT_VERSION="1.0.0"
SAINT_CORE_PATH="${PROJECT_PATH}/core"
SAINT_TEMP_FOLDER="${PROJECT_PATH}/saint_temp"
SAINT_PROJECTS_FOLDER="${PROJECT_PATH}/projects"

# Export only if needed by child processes
export PROJECT_PATH
```

### 3. Function Naming
```bash
# Helpers - Pure utility functions (prefix: saint_)
function saint_validate_project_name() {
    local name="$1"
    [[ "$name" =~ ^[a-zA-Z0-9_-]+$ ]]
}

# Methods - Business logic (prefix: saint_)
function saint_create_project() {
    local project_name="$1"

    # Validate using helper
    if ! saint_validate_project_name "$project_name"; then
        echo "Error: Invalid project name" >&2
        return 1
    fi

    # Perform operation
    mkdir -p "${SAINT_PROJECTS_FOLDER}/${project_name}"
    return 0
}
```

### 4. Color Output
```bash
# Colors defined in .saintVariables
echo -e "${GREEN}Success${NC}"
echo -e "${RED}Error${NC}"
echo -e "${YELLOW}Warning${NC}"
echo -e "${BLUE}Info${NC}"
```

### 5. User Input
```bash
# Standard input pattern
function saint_get_user_input() {
    local prompt="$1"
    local input

    read -p "$prompt: " input

    if [[ -z "$input" ]]; then
        echo "Error: Input cannot be empty" >&2
        return 1
    fi

    echo "$input"
}
```

---

## Performance Guidelines

### 1. Avoid Unnecessary Subshells
```bash
# Slow - Creates subshell
result=$(cat file.txt | grep pattern)

# Fast - Direct command
result=$(grep pattern file.txt)

# Fastest - Built-in (if applicable)
result=$(< file.txt)
```

### 2. Use Shell Built-ins
```bash
# Slow - External commands
basename "$file"
dirname "$path"

# Fast - Parameter expansion
"${file##*/}"  # basename
"${path%/*}"   # dirname
```

### 3. Cache Expensive Operations
```bash
# Cache in .saintVariables if needed frequently
if [[ -z "$CACHED_OS" ]]; then
    CACHED_OS=$(uname -s)
    export CACHED_OS
fi
```

---

## Auto-Update System Rules

### Update Flow
1. Check GitHub releases every 7 days (configurable)
2. Compare semantic versions
3. Prompt user for confirmation
4. Create backup in `saint_backup/`
5. Download and install new version
6. Validate installation
7. Rollback on failure

### Update Safety
- **NEVER** auto-update without confirmation
- **ALWAYS** create backup before update
- **ALWAYS** preserve user projects
- **ALWAYS** preserve custom aliases
- **ALWAYS** validate new version before replacing

### Update Configuration
```bash
# In .saintVariables
SAINT_UPDATE_CHECK_INTERVAL=7  # Days
SAINT_UPDATE_CHECK_FILE="${PROJECT_PATH}/.saint_last_update_check"
```

---

## Integration with Main Agent System

### Role in Agent Hierarchy
```
Orchestrator Agent
    ↓
Saint Core Agent (leads Saint agents)
    ↓
├── Saint Feature Agent
├── Saint Template Agent
├── Saint Command Agent
├── Saint Testing Agent
├── Saint Documentation Agent
└── Saint Security Agent
```

### When to Escalate
Escalate to Orchestrator Agent when:
- Changes affect CI/CD pipeline
- Need cross-project coordination
- External integrations needed
- Breaking changes require approval
- Architecture changes proposed

### Collaboration with Other Agents
- **DevOps Agent**: For CI/CD and deployment
- **Documentation Agent**: For main docs
- **Quality Assurance Agent**: For testing strategy
- **Security Agent**: For security audits

---

## Quick Reference

### Key Variables
```bash
$PROJECT_PATH           # Saint installation root
$SAINT_CORE_PATH        # core/ directory
$SAINT_TEMP_FOLDER      # saint_temp/ directory
$SAINT_PROJECTS_FOLDER  # projects/ directory
$HOME                   # User home directory
```

### Common Commands
```bash
# Check if command exists
command -v docker &> /dev/null

# Source file safely
[[ -f "$file" ]] && source "$file"

# Create directory safely
mkdir -p "$directory"

# Read user input
read -p "Prompt: " variable

# Colored output
echo -e "${GREEN}Text${NC}"
```

### File Permissions
```bash
# Make script executable
chmod +x script.sh

# Secure file permissions
chmod 600 sensitive_file

# Directory permissions
chmod 755 directory/
```

---

## Governance

**This document has precedence over all other practices:**
- Changes require architectural justification
- Breaking changes need migration guides
- All agents must follow these rules
- Violations are automatically rejected

**Version Control:**
- Document version: 1.0.0
- Last updated: 2025-10-04
- Maintained by: Saint Development Team

---

## Additional Resources

### Learning Resources
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/)
- [POSIX Shell Command Language](https://pubs.opengroup.org/onlinepubs/9699919799/)
- [ShellCheck](https://www.shellcheck.net/) - Shell script analysis tool

### Tools (Optional but Recommended)
- ShellCheck - Static analysis
- shellspec - Testing framework (optional)
- bats - Bash Automated Testing System (optional)

**Note**: These tools are for development only. Saint itself has zero dependencies.

---

**Version**: 1.0.0
**Last Updated**: 2025-10-04
**Architecture**: Spec-Driven Development (SDD)
**License**: Open Source (specify license in project)