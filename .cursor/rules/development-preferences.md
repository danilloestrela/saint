# Development Preferences Rules

- Inside `/projects/<project>`, you MAY reference the `<project>` name in methods.  
- Outside `/projects` and `/saint_temp`, you MUST NOT reference or import methods from projects. Project names MUST NEVER appear in GitHub-visible files.  
- The system MUST run on any Unix environment.  
- You MUST implement all logic in pure Bash, with no external libraries.  
- You MUST support both:  
  - Bash (no Oh My Zsh)  
  - Zsh with Oh My Zsh
  - Pure Zsh
- You MAY create shell-specific methods, but the default MUST work across all setups.  
- You MUST assume expertise in Linux, macOS, and Windows WSL2 environments.  

## Additional Enforcement Rules
- Scripts MUST use `#!/usr/bin/env bash` as shebang.  
- Project names MUST NOT be logged or echoed outside `/projects/<project>` or `/saint_temp`.  
- Bash constructs MUST be POSIX-compatible when possible.  
- Scripts MUST be validated against macOS (Intel + Silicon), Linux (Ubuntu), and WSL2. 