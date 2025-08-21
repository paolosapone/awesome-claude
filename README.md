<div align="center">
  <img src="assets/wide.svg" alt="Awesome Claude Logo" width="full" height="auto" />
  
  # Awesome Claude
  
  [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
  [![Claude](https://img.shields.io/badge/Claude-AI-orange?style=flat&logo=anthropic&logoColor=white)](https://claude.ai)
  [![License](https://img.shields.io/badge/License-CC0-blue.svg)](LICENSE)
  [![Contributors](https://img.shields.io/github/contributors/yourusername/awesome-claude)](https://github.com/yourusername/awesome-claude/graphs/contributors)
  
  <p align="center">
    <strong>A curated list of awesome resources, tools, libraries, and applications for Anthropic's Claude AI</strong>
  </p>
  
  <p align="center">
    <a href="#contents">Contents</a> •
    <a href="#official-anthropic-resources">Official Resources</a> •
    <a href="#api-clients--sdks">SDKs</a> •
    <a href="#claude-code-ecosystem">Claude Code</a> •
    <a href="#contributing">Contributing</a>
  </p>
  
  <br />
</div>

---

**[Claude](https://claude.ai)** is Anthropic's advanced AI assistant, known for its thoughtful, nuanced responses and strong capabilities in reasoning, analysis, and coding. This list focuses on **actively maintained, open-source projects** that enhance and extend Claude's capabilities.

---

## Contents

- [Official Anthropic Resources](#official-anthropic-resources)
- [API Clients & SDKs](#api-clients--sdks)
- [Educational Resources & Tutorials](#educational-resources--tutorials)
- [Claude Code Ecosystem](#claude-code-ecosystem)
- [Model Context Protocol (MCP) Servers](#model-context-protocol-mcp-servers)
- [IDE Extensions & Plugins](#ide-extensions--plugins)
- [Applications & User Interfaces](#applications--user-interfaces)
- [Prompt Engineering & Templates](#prompt-engineering--templates)
- [Community & Lists](#community--lists)


## Official Anthropic Resources

**The authoritative resources directly from Claude's creators**

- **[Anthropic Academy](https://www.anthropic.com/learn)** - Guides, tutorials, and best practices for working with Claude.
- **[Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)** - Official collection of notebooks, code examples, and guides for building with Claude. Features Python examples, RAG techniques, and tool use patterns.
- **[Model Context Protocol Introduction](https://www.anthropic.com/news/model-context-protocol)** - Official guide to MCP for extending Claude with local servers and integrations.
- **[Claude Code](https://www.anthropic.com/claude-code)** - Official page for Claude Code, an agentic coding tool for terminals and IDEs.
- **[Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)** - Tips and tricks for using Claude Code across various codebases, languages, and environments.

## Educational Resources & Tutorials

## Official Anthropic courses**

- **[AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations)** - Learn to collaborate with AI systems effectively, efficiently, ethically, and safely
- **[Claude with the Anthropic API](https://anthropic.skilljar.com/claude-with-the-anthropic-api)** - This comprehensive course covers the full spectrum of working with Anthropic models using the Anthropic API
- **[Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)** - Integrate Claude Code into your development workflow
- **[Introduction to Model Context Protocol](http://anthropic.skilljar.com/introduction-to-model-context-protocol)** - Learn to build Model Context Protocol servers and clients from scratch using Python. Master MCP's three core primitives—tools, resources, and prompts—to connect Claude with external services

## API Clients & SDKs

**Official Anthropic client libraries for working with Claude's API**

- **[anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python)** - Official Python client library for the Anthropic API. Supports all Claude models with async support and type hints.
- **[anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript)** - Official TypeScript/JavaScript client library for the Anthropic API. Works in Node.js and browsers with full TypeScript support.
- **[anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java)** - Official Java client library for the Anthropic API. Built with modern Java features and comprehensive documentation.
- **[anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go)** - Official Go client library for the Anthropic API. Idiomatic Go design with context support and comprehensive error handling.
- **[anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby)** - Official Ruby client library for the Anthropic API. Clean Ruby interface with comprehensive documentation and examples.

## Claude Code Ecosystem

**Tools, extensions, and integrations for Claude Code**

### Core & Official Tools
- **[claude-code](https://github.com/anthropics/claude-code)** - 30.6k⭐ - Official Claude Code from Anthropic. An agentic coding tool that lives in your terminal. (TypeScript)
- **[claude-code-action](https://github.com/anthropics/claude-code-action)** - 2.7k⭐ - General-purpose action for GitHub PRs and issues using Claude Code (TypeScript)
- **[claude-code-security-review](https://github.com/anthropics/claude-code-security-review)** - 2.1k⭐ - AI-powered security review GitHub Action (Python)
- **[claude-code-sdk-python](https://github.com/anthropics/claude-code-sdk-python)** - 839⭐ - Python SDK for Claude Code (Python)

### Frameworks & Platforms
- **[claude-code-router](https://github.com/musistudio/claude-code-router)** - 14.1k⭐ - Use Claude Code as foundation for coding infrastructure (TypeScript)
- **[SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework)** - 13.5k⭐ - Configuration framework with specialized commands and cognitive personas (Python)
- **[claudia](https://github.com/getAsterisk/claudia)** - 13.3k⭐ - Powerful GUI app and toolkit for Claude Code (TypeScript/Rust)
- **[claude-flow](https://github.com/ruvnet/claude-flow)** - 6.4k⭐ - AI orchestration platform with swarm intelligence and MCP tools (TypeScript)
- **[dotai](https://github.com/udecode/dotai)** - 999⭐ - Ultimate AI development stack (Shell)

### Agent Collections & Orchestration
- **[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** - 11.6k⭐ - Curated list of commands, files, and workflows (Python)
- **[agents](https://github.com/wshobson/agents)** - 9.1k⭐ - Production-ready subagents for Claude Code
- **[awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents)** - 2.9k⭐ - Orchestrated sub agent dev team
- **[claude-code-subagents-collection](https://github.com/davepoon/claude-code-subagents-collection)** - 1.6k⭐ - Subagents & commands collection with CLI tool (TypeScript)
- **[claude-agents](https://github.com/iannuttall/claude-agents)** - 1.6k⭐ - Custom subagents collection
- **[awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** - 1.3k⭐ - 100+ specialized AI agents for full-stack development
- **[claude-code-sub-agents](https://github.com/lst97/claude-code-sub-agents)** - 830⭐ - Specialized AI subagents for full-stack
- **[awesome-claude-code-agents](https://github.com/hesreallyhim/awesome-claude-code-agents)** - 688⭐ - Curated list of sub-agents
- **[claude-code-unified-agents](https://github.com/stretchcloud/claude-code-unified-agents)** - 475⭐ - Unified agent collection (Shell)

### Development & Code Tools
- **[serena](https://github.com/oraios/serena)** - 9.4k⭐ - Semantic retrieval and editing capabilities (Python)
- **[context-engineering-intro](https://github.com/coleam00/context-engineering-intro)** - 8.9k⭐ - Context engineering guide for AI coding assistants (Python)
- **[code2prompt](https://github.com/mufeedvh/code2prompt)** - 6.4k⭐ - Convert codebase to LLM prompt with token counting (Rust/MDX)
- **[repomix](https://github.com/yamadashy/repomix)** - Pack an entire repository into a single AI-friendly file with token counting and security checks (TypeScript)
- **[claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)** - 1.1k⭐ - Advanced hooks system (Python)
- **[vibekit](https://github.com/superagent-ai/vibekit)** - 1.1k⭐ - Isolated sandbox for coding agents (TypeScript)
- **[Claude-Code-Development-Kit](https://github.com/peterkrueck/Claude-Code-Development-Kit)** - 991⭐ - Orchestrated dev environment with automated docs and multi-agent workflows (Shell)

### Alternative Clients & Proxies
- **[kilocode](https://github.com/Kilo-Org/kilocode)** - 7k⭐ - Open source AI coding assistant (TypeScript)
- **[claudecodeui](https://github.com/siteboon/claudecodeui)** - 3.2k⭐ - Mobile and web UI for Claude Code (JavaScript)
- **[claude-relay-service](https://github.com/Wei-Shaw/claude-relay-service)** - 2.2k⭐ - Self-hosted mirror service with multi-account support (JavaScript)
- **[claude-code-proxy](https://github.com/1rgs/claude-code-proxy)** - 1.9k⭐ - Run Claude Code on OpenAI models (Python)

### User Interfaces & Web Apps
- **[cui](https://github.com/wbopan/cui)** - 785⭐ - Web UI for Claude Code agents (TypeScript)
- **[ccseva](https://github.com/Iamshankhadeep/ccseva)** - 690⭐ - macOS menu bar app for usage tracking (TypeScript)
- **[claude-code-chat](https://github.com/andrepimenta/claude-code-chat)** - 576⭐ - Beautiful chat interface for VS Code (JavaScript)
- **[claude-code-webui](https://github.com/sugyan/claude-code-webui)** - 479⭐ - Web-based interface with streaming (TypeScript)

### Editor Integrations
- **[claude-coder](https://github.com/kodu-ai/claude-coder)** - 4.7k⭐ - VSCode extension for autonomous coding (TypeScript)
- **[aide](https://github.com/nicepkg/aide)** - 2.6k⭐ - VSCode AI assistant with batch processing (TypeScript)
- **[claude-code.nvim](https://github.com/greggh/claude-code.nvim)** - 1.2k⭐ - Neovim integration (Lua)
- **[claude-code-ide.el](https://github.com/manzaltu/claude-code-ide.el)** - 979⭐ - Claude Code IDE integration for Emacs (Emacs Lisp)

### Monitoring & Analytics
- **[ccusage](https://github.com/ryoppippi/ccusage)** - 7k⭐ - CLI tool for analyzing Claude Code usage from JSONL files (TypeScript)
- **[Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor)** - 4.4k⭐ - Real-time usage monitor with predictions (Python)
- **[sniffly](https://github.com/chiphuyen/sniffly)** - 738⭐ - Dashboard with usage stats and error analysis (Python)

### Project & Session Management
- **[claude-code-templates](https://github.com/davila7/claude-code-templates)** - 4.5k⭐ - CLI for configuring and monitoring Claude Code (JavaScript)
- **[claude-squad](https://github.com/smtg-ai/claude-squad)** - 4.2k⭐ - Manage multiple AI terminal agents (Go)
- **[crystal](https://github.com/stravu/crystal)** - 1.6k⭐ - Run parallel AI sessions in git worktrees (TypeScript)
- **[claude-sessions](https://github.com/iannuttall/claude-sessions)** - 975⭐ - Session tracking and documentation commands
- **[claude-swarm](https://github.com/parruda/claude-swarm)** - 954⭐ - Launch Claude Code with swarm of agents (Ruby)
- **[my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup)** - 918⭐ - Shared starter template and memory bank system
- **[ccundo](https://github.com/RonitSachdev/ccundo)** - 913⭐ - Granular undo functionality (JavaScript)

### Workflow Automation & TDD
- **[CCPlugins](https://github.com/brennercruvinel/CCPlugins)** - 2k⭐ - Framework for senior engineer workflows (Python)
- **[claude-code-spec-workflow](https://github.com/Pimzino/claude-code-spec-workflow)** - 1.6k⭐ - Spec-driven development workflows (TypeScript)
- **[zcf](https://github.com/UfoMiao/zcf)** - 712⭐ - Zero-Config Claude-Code Flow (TypeScript)
- **[tdd-guard](https://github.com/nizos/tdd-guard)** - 682⭐ - Automated TDD enforcement (TypeScript)

### Memory & Context Management
- **[cipher](https://github.com/campfirein/cipher)** - 1.7k⭐ - Memory layer for coding agents (TypeScript)
- **[mcp-memory-service](https://github.com/doobidoo/mcp-memory-service)** - 599⭐ - Universal MCP memory with semantic search (Python)
- **[core](https://github.com/RedPlanetHQ/core)** - 523⭐ - Unified, shareable memory layer (TypeScript)

### Remote Control & Communication
- **[Claude-Code-Remote](https://github.com/JessyTsui/Claude-Code-Remote)** - 684⭐ - Control via email/discord/telegram (JavaScript)
- **[Claude-Code-Communication](https://github.com/nishimoto265/Claude-Code-Communication)** - 440⭐ - Communication tools (Shell)

### Documentation & Learning Resources
- **[agent-rules](https://github.com/steipete/agent-rules)** - 3.9k⭐ - Rules and knowledge for working with agents (Shell)
- **[claude-code-guide](https://github.com/zebbern/claude-code-guide)** - 1.7k⭐ - Full guide on tips, tricks and optimization
- **[claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows)** - 1.3k⭐ - Best workflows and configurations
- **[claude-code-cookbook](https://github.com/wasabeef/claude-code-cookbook/blob/main/README_en.md)** - 602⭐ - Settings collection (Shell)
- **[Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite)** - 583⭐ - Professional slash commands (Shell)

## IDE Extensions & Plugins

**Deep integrations with development environments**

### VS Code Extensions
- **[Cline](https://github.com/cline/cline)** - Most popular autonomous coding agent with file editing, terminal access, and browser automation. Features human-in-the-loop GUI and cost tracking. `TypeScript` `Trending` `Very Active`

- **[Claude Coder](https://github.com/kodu-ai/claude-coder)** - Full-stack development assistant that converts ideas to implementation with mockup conversion and web deployment. `TypeScript` `Active`

- **[Claude Code Chat](https://github.com/andrepimenta/claude-code-chat)** - Beautiful native chat interface for Claude Code within VS Code with conversation history and MCP support. `TypeScript` `Active`

### Neovim Integration
- **[Claude Code Neovim](https://github.com/coder/claudecode.nvim)** - First-to-market WebSocket-based MCP protocol integration for Neovim with zero dependencies. `Lua` `Active`

### Emacs Integration
- **[Claude Code IDE](https://github.com/manzaltu/claude-code-ide.el)** - Comprehensive Emacs integration with native MCP protocol, LSP integration, and project detection. `Emacs Lisp` `150+ ⭐` `Active`

## Model Context Protocol (MCP) Servers

**MCP servers and tools for extending Claude with external integrations**

### Official MCP Infrastructure
- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)** - Repository listing and documenting various MCP servers for different tools and services
- **[modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)** - 2.1k⭐ - A community driven registry service for discovering and managing MCP servers (Go)

### MCP Collections & Resources
- **[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** - A collection of MCP servers and proxies for various use cases like management, load balancing, and integration

### MCP Servers
- **[github-mcp-server](https://github.com/github/github-mcp-server)** - 21.3k⭐ - GitHub's official MCP Server that connects AI tools to GitHub's platform for managing repositories, issues, PRs, and more (Go)
- **[awslabs/mcp](https://github.com/awslabs/mcp)** - AWS MCP Servers providing access to AWS APIs, documentation, and best practices for AI applications
- **[mcp-chrome](https://github.com/hangwin/mcp-chrome)** - MCP server for Chrome browser automation and control
- **[context7](https://github.com/upstash/context7)** - MCP server providing up-to-date code documentation and examples for AI code editors (TypeScript)

## Applications & User Interfaces

**Complete applications and polished user interfaces**

### Desktop Applications
- **[Claude Desktop](https://claude.ai/download)** - Official Claude desktop app for macOS and Windows
- **[Claude Desktop Debian](https://github.com/aaddrick/claude-desktop-debian)** - Unofficial Claude desktop app for Debian/Linux
- **[Chatbox](https://github.com/chatboxai/chatbox)** - Cross-platform desktop app supporting multiple AI models including Claude

### Multi-Platform Chat Applications
- **[Lobe Chat](https://github.com/lobehub/lobe-chat)** - Open-source modern AI chat framework with multi-model support (Claude, OpenAI, Gemini), MCP plugin integration, knowledge base, and artifacts support. `TypeScript` `Very Active`

- **[LibreChat](https://github.com/danny-avila/LibreChat)** - Multi-model chat platform with comprehensive Claude support alongside other AI models. `TypeScript/React` `21.6k ⭐` `Very Active`

- **[FastGPT](https://github.com/labring/FastGPT)** - Knowledge-based QA platform with RAG capabilities and Claude integration. `TypeScript` `10.3k ⭐` `Very Active`

## Community

**Join the Claude community to share knowledge, get help, and stay updated**

- **[Claude Discord](https://discord.com/invite/prcdpx7qMm)** - Official Discord community for Claude users and developers
- **[r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/)** - Reddit community for Claude discussions and tips
- **[Anthropic AI Facebook Group](https://www.facebook.com/groups/anthropicai/)** - Facebook group for Anthropic AI and Claude discussions

## Contributing

**We welcome contributions!** This list follows the [Awesome List Guidelines](https://github.com/sindresorhus/awesome/blob/main/contributing.md).

### How to Contribute

1. **Repository Quality Standards:**
   - Must be open source with clear license
   - Active maintenance (commits within 12 months)
   - Meaningful functionality beyond basic examples
   - Good documentation with installation instructions
   - Community engagement (reasonable stars/forks for age)

2. **Submission Process:**
   - Fork this repository
   - Add your item in the appropriate category
   - Include: name, description, primary language, approximate stars, maintenance status
   - Ensure alphabetical order within categories
   - Submit pull request with clear description

3. **New Category Guidelines:**
   - Categories need 3+ quality repositories
   - Must represent distinct use case or technical approach
   - Should not overlap significantly with existing categories

### What We Look For

- **Innovation:** Novel approaches to Claude integration
- **Utility:** Practical tools that solve real problems
- **Quality:** Well-documented, tested, professional code
- **Activity:** Regular maintenance and community engagement
- **Impact:** Projects that advance the Claude ecosystem

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=alvinunreal/awesome-claude&type=Date)](https://star-history.com/#alvinunreal/claude-code&Date)

---

**[⬆ Back to Contents](#contents)**

> 💡 **Tip**: Most repositories marked as "Very Active" were updated within the last 30 days. The Claude ecosystem is rapidly evolving, especially around Claude Code and MCP protocol innovations.
