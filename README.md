# Awesome Claude [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome resources, tools, libraries, and applications for Anthropic's Claude AI

**[Claude](https://claude.ai)** is Anthropic's advanced AI assistant, known for its thoughtful, nuanced responses and strong capabilities in reasoning, analysis, and coding. This list focuses on **actively maintained, open-source projects** that enhance and extend Claude's capabilities.

---

## Contents

- [Official Anthropic Resources](#official-anthropic-resources)
- [Anthropic Courses](#anthropic-courses)
- [API Clients & SDKs](#api-clients--sdks)
- [Claude Code Ecosystem](#claude-code-ecosystem)
- [Model Context Protocol (MCP) Servers](#model-context-protocol-mcp-servers)
- [Development Tools & Frameworks](#development-tools--frameworks)
- [Browser Extensions & Web Tools](#browser-extensions--web-tools)
- [IDE Extensions & Plugins](#ide-extensions--plugins)
- [Applications & User Interfaces](#applications--user-interfaces)
- [Platform Integrations](#platform-integrations)
- [Automation & Workflow Tools](#automation--workflow-tools)
- [Prompt Engineering & Templates](#prompt-engineering--templates)
- [Educational Resources & Tutorials](#educational-resources--tutorials)
- [Community & Lists](#community--lists)

## Official Anthropic Resources

**The authoritative resources directly from Claude's creators**

- **[Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)** - Official collection of notebooks, code examples, and guides for building with Claude. Features Python examples, RAG techniques, and tool use patterns.
- **[Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)** - Tips and tricks for using Claude Code across various codebases, languages, and environments.
- **[Model Context Protocol Introduction](https://www.anthropic.com/news/model-context-protocol)** - Official guide to MCP for extending Claude with local servers and integrations.
- **[Claude Code](https://www.anthropic.com/claude-code)** - Official page for Claude Code, an agentic coding tool for terminals and IDEs.
- **[Connectors Directory](https://www.anthropic.com/news/connectors-directory)** - Directory of tools and integrations that work with Claude.
- **[Open-Sourcing Circuit-Tracing Tools](https://www.anthropic.com/research/open-source-circuit-tracing)** - Open-source library for generating attribution graphs on models.
- **[Claude 4 Introduction](https://www.anthropic.com/news/claude-4)** - Details on the latest Claude model with coding and agent workflows.

## Anthropic Courses

**Official training courses from Anthropic for mastering Claude**

- **[AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations)** - Learn to collaborate with AI systems effectively, efficiently, ethically, and safely
- **[Claude with the Anthropic API](https://anthropic.skilljar.com/claude-with-the-anthropic-api)** - This comprehensive course covers the full spectrum of working with Anthropic models using the Anthropic API
- **[Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)** - Integrate Claude Code into your development workflow
- **[Introduction to Model Context Protocol](http://anthropic.skilljar.com/introduction-to-model-context-protocol)** - Learn to build Model Context Protocol servers and clients from scratch using Python. Master MCP's three core primitives—tools, resources, and prompts—to connect Claude with external services
- **[Anthropic Academy](https://www.anthropic.com/learn)** - Guides, tutorials, and best practices for working with Claude.

## API Clients & SDKs

**Official Anthropic client libraries for working with Claude's API**

- **[anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python)** - Official Python client library for the Anthropic API. Supports all Claude models with async support and type hints.
- **[anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript)** - Official TypeScript/JavaScript client library for the Anthropic API. Works in Node.js and browsers with full TypeScript support.
- **[anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java)** - Official Java client library for the Anthropic API. Built with modern Java features and comprehensive documentation.
- **[anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go)** - Official Go client library for the Anthropic API. Idiomatic Go design with context support and comprehensive error handling.
- **[anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby)** - Official Ruby client library for the Anthropic API. Clean Ruby interface with comprehensive documentation and examples.

## Claude Code Ecosystem

**Tools, extensions, and integrations for Claude Code**

### Official Repositories
- **[claude-code](https://github.com/anthropics/claude-code)** - 30.6k⭐ - Official Claude Code from Anthropic. An agentic coding tool that lives in your terminal. (TypeScript)
- **[claude-code-action](https://github.com/anthropics/claude-code-action)** - 2.7k⭐ - GitHub Action for Claude Code (TypeScript)
- **[claude-code-security-review](https://github.com/anthropics/claude-code-security-review)** - 2.1k⭐ - AI-powered security review GitHub Action (Python)

### Extensions & Frameworks
- **[claude-code-router](https://github.com/musistudio/claude-code-router)** - 14.1k⭐ - Use Claude Code as foundation for coding infrastructure (TypeScript)
- **[SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework)** - 13.5k⭐ - Configuration framework with specialized commands and cognitive personas (Python)
- **[claudia](https://github.com/getAsterisk/claudia)** - 13.3k⭐ - Powerful GUI app and toolkit for Claude Code (TypeScript/Rust)
- **[claude-flow](https://github.com/ruvnet/claude-flow)** - 6.4k⭐ - AI-powered development orchestration v2.0.0 Alpha (TypeScript)

### Resource Collections
- **[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** - 11.6k⭐ - Curated list of commands, files, and workflows (Python)
- **[claude-code-subagents-collection](https://github.com/davepoon/claude-code-subagents-collection)** - 1.6k⭐ - Subagents & commands collection with CLI tool (TypeScript)
- **[awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** - 1.3k⭐ - 100+ specialized AI agents for full-stack development

### Agent Collections
- **[agents](https://github.com/wshobson/agents)** - 9.1k⭐ - Production-ready subagents for Claude Code
- **[awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents)** - 2.9k⭐ - Orchestrated sub agent dev team
- **[claude-agents](https://github.com/iannuttall/claude-agents)** - 1.6k⭐ - Custom subagents collection

### Development Tools
- **[serena](https://github.com/oraios/serena)** - 9.4k⭐ - Semantic retrieval and editing capabilities (Python)
- **[context-engineering-intro](https://github.com/coleam00/context-engineering-intro)** - 8.9k⭐ - Context engineering guide for AI coding assistants (Python)
- **[code2prompt](https://github.com/mufeedvh/code2prompt)** - 6.4k⭐ - Convert codebase to LLM prompt with token counting (Rust/MDX)

### MCP Servers & Integrations
- **[zen-mcp-server](https://github.com/BeehiveInnovations/zen-mcp-server)** - 6.4k⭐ - Multi-model integration (Gemini/OpenAI/Grok/Ollama) (Python)
- **[n8n-mcp](https://github.com/czlonkowski/n8n-mcp)** - 5.7k⭐ - Build n8n workflows with Claude (TypeScript)
- **[git-mcp](https://github.com/idosal/git-mcp)** - 5.5k⭐ - Remote MCP server for GitHub projects (TypeScript)
- **[claude-context](https://github.com/zilliztech/claude-context)** - 2.7k⭐ - Code search MCP for entire codebase context (TypeScript)

### Monitoring & Analytics
- **[ccusage](https://github.com/ryoppippi/ccusage)** - 7k⭐ - CLI tool for analyzing Claude Code usage from JSONL files (TypeScript)
- **[Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor)** - 4.4k⭐ - Real-time usage monitor with predictions (Python)

### Alternative Clients & Proxies
- **[kilocode](https://github.com/Kilo-Org/kilocode)** - 7k⭐ - Open source AI coding assistant (TypeScript)
- **[claudecodeui](https://github.com/siteboon/claudecodeui)** - 3.2k⭐ - Mobile and web UI for Claude Code (JavaScript)
- **[claude-code-proxy](https://github.com/1rgs/claude-code-proxy)** - 1.9k⭐ - Run Claude Code on OpenAI models (Python)
- **[claude-relay-service](https://github.com/Wei-Shaw/claude-relay-service)** - 2.2k⭐ - Self-hosted mirror service with multi-account support (JavaScript)

### Management Tools
- **[claude-squad](https://github.com/smtg-ai/claude-squad)** - 4.2k⭐ - Manage multiple AI terminal agents (Go)
- **[claude-code-templates](https://github.com/davila7/claude-code-templates)** - 4.5k⭐ - CLI for configuring and monitoring Claude Code (JavaScript)
- **[crystal](https://github.com/stravu/crystal)** - 1.6k⭐ - Run parallel AI sessions in git worktrees (TypeScript)

### Best Practices & Documentation
- **[agent-rules](https://github.com/steipete/agent-rules)** - 3.9k⭐ - Rules and knowledge for working with agents (Shell)
- **[claude-code-guide](https://github.com/zebbern/claude-code-guide)** - 1.7k⭐ - Full guide on tips, tricks and optimization
- **[claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows)** - 1.3k⭐ - Best workflows and configurations

### Workflow Automation
- **[claude-code-spec-workflow](https://github.com/Pimzino/claude-code-spec-workflow)** - 1.6k⭐ - Spec-driven development workflows (TypeScript)
- **[CCPlugins](https://github.com/brennercruvinel/CCPlugins)** - 2k⭐ - Framework for senior engineer workflows (Python)

### Memory & Context
- **[cipher](https://github.com/campfirein/cipher)** - 1.7k⭐ - Memory layer for coding agents (TypeScript)

### Editor Integrations
- **[claude-coder](https://github.com/kodu-ai/claude-coder)** - 4.7k⭐ - VSCode extension for autonomous coding (TypeScript)
- **[claude-code.nvim](https://github.com/greggh/claude-code.nvim)** - 1.2k⭐ - Neovim integration (Lua)
- **[aide](https://github.com/nicepkg/aide)** - 2.6k⭐ - VSCode AI assistant with batch processing (TypeScript)
- **[claudecode.nvim](https://github.com/coder/claudecode.nvim)** - 901⭐ - Claude Code Neovim IDE Extension (Lua)
- **[claude-code-ide.el](https://github.com/manzaltu/claude-code-ide.el)** - 979⭐ - Claude Code IDE integration for Emacs (Emacs Lisp)
- **[minuet-ai.nvim](https://github.com/milanglacier/minuet-ai.nvim)** - 756⭐ - Code completion from multiple LLMs including Claude (Lua)

### Additional Development Tools
- **[claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)** - 1.1k⭐ - Advanced hooks system (Python)
- **[vibekit](https://github.com/superagent-ai/vibekit)** - 1.1k⭐ - Isolated sandbox for coding agents (TypeScript)
- **[oh-my-logo](https://github.com/shinshin86/oh-my-logo)** - 1k⭐ - Display ASCII-art logos like Claude Code (TypeScript)
- **[dotai](https://github.com/udecode/dotai)** - 999⭐ - Ultimate AI development stack (Shell)
- **[claude-code-reverse](https://github.com/Yuyz0112/claude-code-reverse)** - 993⭐ - Visualize Claude Code's LLM interactions (JavaScript)
- **[Claude-Code-Development-Kit](https://github.com/peterkrueck/Claude-Code-Development-Kit)** - 991⭐ - Personal Claude Code workflow (Shell)

### Session & State Management
- **[claude-sessions](https://github.com/iannuttall/claude-sessions)** - 975⭐ - Session tracking and documentation commands
- **[claude-swarm](https://github.com/parruda/claude-swarm)** - 954⭐ - Launch Claude Code with swarm of agents (Ruby)
- **[my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup)** - 918⭐ - Shared starter template and memory bank system
- **[ccundo](https://github.com/RonitSachdev/ccundo)** - 913⭐ - Granular undo functionality (JavaScript)

### SDK & API Tools
- **[claude-code-sdk-python](https://github.com/anthropics/claude-code-sdk-python)** - 839⭐ - Python SDK for Claude Code (Python)
- **[copilot-api](https://github.com/ericc-ch/copilot-api)** - 795⭐ - GitHub Copilot to OpenAI/Anthropic API server (TypeScript)
- **[agentapi](https://github.com/coder/agentapi)** - 726⭐ - HTTP API for multiple AI coding agents (Go)

### UI & Interfaces
- **[cui](https://github.com/wbopan/cui)** - 785⭐ - Web UI for Claude Code agents (TypeScript)
- **[ccseva](https://github.com/Iamshankhadeep/ccseva)** - 690⭐ - macOS menu bar app for usage tracking (TypeScript)
- **[claude-code-chat](https://github.com/andrepimenta/claude-code-chat)** - 576⭐ - Beautiful chat interface for VS Code (JavaScript)
- **[claude-code-webui](https://github.com/sugyan/claude-code-webui)** - 479⭐ - Web-based interface with streaming (TypeScript)

### Advanced Workflows & Automation
- **[claude-code-mcp](https://github.com/steipete/claude-code-mcp)** - 761⭐ - Claude Code as one-shot MCP server (JavaScript)
- **[claude-code-spec](https://github.com/gotalab/claude-code-spec)** - 739⭐ - Spec-driven development commands (TypeScript)
- **[zcf](https://github.com/UfoMiao/zcf)** - 712⭐ - Zero-Config Claude-Code Flow (TypeScript)
- **[tdd-guard](https://github.com/nizos/tdd-guard)** - 682⭐ - Automated TDD enforcement (TypeScript)

### Analytics & Dashboards
- **[sniffly](https://github.com/chiphuyen/sniffly)** - 738⭐ - Dashboard with usage stats and error analysis (Python)
- **[ccstatusline](https://github.com/sirmalloc/ccstatusline)** - 454⭐ - Customizable statusline with powerline support (TypeScript)

### Additional Agent Collections
- **[claude-code-sub-agents](https://github.com/lst97/claude-code-sub-agents)** - 830⭐ - Specialized AI subagents for full-stack
- **[awesome-claude-code-agents](https://github.com/hesreallyhim/awesome-claude-code-agents)** - 688⭐ - Curated list of sub-agents
- **[claude-code-unified-agents](https://github.com/stretchcloud/claude-code-unified-agents)** - 475⭐ - Unified agent collection (Shell)

### Remote Control & Integration
- **[Claude-Code-Remote](https://github.com/JessyTsui/Claude-Code-Remote)** - 684⭐ - Control via email/discord/telegram (JavaScript)
- **[Claude-Code-Communication](https://github.com/nishimoto265/Claude-Code-Communication)** - 440⭐ - Communication tools (Shell)

### Documentation & Guides
- **[claude-code-guide](https://github.com/Cranot/claude-code-guide)** - 609⭐ - Comprehensive guide
- **[claude-code-mastering](https://github.com/revfactory/claude-code-mastering)** - 604⭐ - Mastering techniques (JavaScript)
- **[claude-code-cookbook](https://github.com/wasabeef/claude-code-cookbook)** - 602⭐ - Settings collection (Shell)
- **[Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite)** - 583⭐ - Professional slash commands (Shell)

### Memory & Knowledge Management
- **[mcp-memory-service](https://github.com/doobidoo/mcp-memory-service)** - 599⭐ - Universal MCP memory with semantic search (Python)
- **[core](https://github.com/RedPlanetHQ/core)** - 523⭐ - Unified, shareable memory layer (TypeScript)
