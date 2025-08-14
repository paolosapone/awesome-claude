# Awesome Claude [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome resources, tools, libraries, and applications for Anthropic's Claude AI

**[Claude](https://claude.ai)** is Anthropic's advanced AI assistant, known for its thoughtful, nuanced responses and strong capabilities in reasoning, analysis, and coding. This list focuses on **actively maintained, open-source projects** that enhance and extend Claude's capabilities.

---

## Contents

- [Official Anthropic Resources](#official-anthropic-resources)
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

---

## Official Anthropic Resources

**The authoritative resources directly from Claude's creators**

- **[Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)** - Official collection of notebooks, code examples, and guides for building with Claude. Features Python examples, RAG techniques, and tool use patterns. `Python` `19.8k ⭐` `Very Active`

- **[Claude Code](https://github.com/anthropics/claude-code)** - Official terminal-based coding agent that integrates with IDEs and GitHub. Transforms development workflows with AI assistance. `TypeScript` `27.5k ⭐` `Very Active`

- **[Anthropic SDKs](https://docs.anthropic.com/en/api)** - Official API clients for Python, TypeScript, and Claude Code integration. Production-ready with comprehensive feature support. `Python/TypeScript` `Official` `Very Active`

## API Clients & SDKs

**Language-specific libraries and wrappers for Claude API integration**

### Multi-Language Support
- **[Go Anthropic](https://github.com/liushuangls/go-anthropic)** - Most comprehensive Go client with complete API support including streaming, vision, tools, and Vertex AI integration. `Go` `500+ ⭐` `Very Active`

- **[Claudia (.NET)](https://github.com/Cysharp/Claudia)** - Strongly-typed C# SDK with Unity support, streaming via IAsyncEnumerable, and source generation for function calling. `C#` `800+ ⭐` `Very Active`

- **[Claude PHP API](https://github.com/claude-php/claude-3-api)** - Feature-complete PHP package with streaming, vision, tools, and multi-provider support. Includes comprehensive test coverage. `PHP` `100+ ⭐` `Active`

- **[Anthropix (Elixir)](https://github.com/lebrunel/anthropix)** - Full Elixir client with streaming support, tool use, and beta feature integration. `Elixir` `50+ ⭐` `Very Active`

- **[Claude Client (Rust)](https://github.com/thesurlydev/claude-client)** - Type-safe async Rust client with tokio support and built-in error handling. `Rust` `20+ ⭐` `Active`

### OpenAI Compatibility Layers
- **[Claude to ChatGPT](https://github.com/jtsang4/claude-to-chatgpt)** - Converts Claude API to OpenAI Chat API format for seamless integration with existing OpenAI-based applications. `TypeScript` `1.3k ⭐` `Active`

## Claude Code Ecosystem

**Tools and extensions specifically for Claude Code CLI**

### Visual Interfaces
- **[Claudia](https://github.com/getAsterisk/claudia)** - Comprehensive GUI application for Claude Code built with Tauri. Features visual project browser, custom AI agents, session management, and MCP server integration. `Rust/TypeScript` `1.8k ⭐` `Very Active`

- **[Claude Code UI](https://github.com/siteboon/claudecodeui)** - Responsive web and mobile interface for Claude Code CLI with file explorer, syntax highlighting, and git integration. `React/Node.js` `Active`

- **[Claude Code WebUI](https://github.com/sugyan/claude-code-webui)** - Modern web interface with streaming responses and security-conscious localhost-only design. `Deno/TypeScript` `Active`

### Command Management
- **[Claude Commands Manager](https://github.com/kiliczsh/claude-cmd)** - Lightweight CLI tool with 184+ available commands for CLAUDE.md management, MCP server integration, and project initialization. `JavaScript` `46kB` `Active`

### Awesome Collections
- **[Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)** - Comprehensive resource collection for Claude Code with tools, integrations, and best practices. `Markdown` `Active`

- **[Claude Code Setup](https://github.com/cassler/awesome-claude-code-setup)** - Power user collection with bash scripts and advanced configurations. `Shell` `Active`

## Model Context Protocol (MCP) Servers

**The newest innovation area extending Claude's capabilities with external tools**

### Official & Core Servers
- **[MCP Servers](https://github.com/modelcontextprotocol/servers)** - Official collection of MCP servers from Anthropic including filesystem, GitHub, PostgreSQL, and SQLite servers. `TypeScript/Python` `Official` `Very Active`

### Specialized Servers
- **[Claude Context](https://github.com/zilliztech/claude-context)** - Semantic code search MCP server for large codebases with vector search and AST-based splitting. `TypeScript` `200+ ⭐` `Very Active`

- **[Zen MCP Server](https://github.com/BeehiveInnovations/zen-mcp-server)** - Multi-model orchestration MCP server supporting Claude, OpenAI, and Anthropic APIs. `TypeScript` `Active`

- **[Claude Prompts MCP](https://github.com/minipuft/claude-prompts-mcp)** - Advanced prompt management with semantic analysis, hot-reload, and template engine. `TypeScript` `200+ ⭐` `Very Active`

- **[Chrome MCP Server](https://github.com/hangwin/mcp-chrome)** - Complete browser automation with 20+ tools for screenshots, content analysis, and form filling. `TypeScript` `Active`

### Platform Integration Servers
- **[JIRA MCP](https://github.com/MankowskiNick/jira-mcp)** - JIRA ticket creation and management through Claude with comprehensive project integration. `TypeScript` `Active`

- **[Obsidian Claude MCP](https://github.com/iansinnott/obsidian-claude-code-mcp)** - Obsidian vault integration enabling Claude to access and manage knowledge bases. `TypeScript` `Active`

## Development Tools & Frameworks

**Frameworks and utilities for building sophisticated Claude-powered applications**

### Self-Improving Frameworks
- **[Claude Engineer](https://github.com/Doriandarko/claude-engineer)** - Self-improving AI framework that creates tools dynamically during conversations. Features both CLI and web interface with advanced token management. `Python` `1.2k ⭐` `Very Active`

- **[SuperClaude Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework)** - Comprehensive framework with 16 specialized commands and 9 cognitive personas that auto-engage based on context. `Python/Markdown` `900+ ⭐` `Very Active`

### Enterprise Orchestration
- **[Claude Flow v2](https://github.com/ruvnet/claude-flow)** - Enterprise-grade orchestration platform with hive-mind swarm intelligence, 87 MCP tools, and neural pattern recognition. `TypeScript` `500+ ⭐` `Alpha`

- **[MetaMCP](https://github.com/metatool-ai/metamcp)** - Universal MCP aggregator with middleware system, enterprise authentication, and unified endpoints for multiple MCP servers. `TypeScript/Docker` `200+ ⭐` `Very Active`

### Testing & Debugging
- **[Claude Debugs For You](https://github.com/jasonjmcghee/claude-debugs-for-you)** - Interactive VS Code debugging with MCP integration, allowing Claude to debug step-by-step using actual breakpoints. `TypeScript` `300+ ⭐` `Active`

- **[Claude Code Usage Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor)** - Real-time token consumption monitoring with usage predictions and cost tracking across subscription plans. `Python` `150+ ⭐` `Active`

## Browser Extensions & Web Tools

**Browser-based tools that enhance Claude's web functionality**

### Chrome Extensions
- **[Claude MCP Browser Extension](https://github.com/dnakov/claude-mcp)** - Enables Model Context Protocol capabilities directly in Claude.ai, connecting to external tools and services. `TypeScript` `Active`

- **[Thinking Claude](https://github.com/richards199999/Thinking-Claude)** - Enhances Claude's thinking process visibility to be more transparent and human-like. `TypeScript/React` `Active`

- **[Mem0 Chrome Extension](https://github.com/mem0ai/mem0-chrome-extension)** - Long-term memory for Claude across sessions with cross-platform context sharing. `JavaScript` `Free Tier` `Active`

- **[Claude Usage Tracker](https://github.com/lugia19/Claude-Usage-Extension)** - Real-time token usage monitoring and quota consumption tracking. `JavaScript` `Active`

### Web Applications
- **[Claude Data Fetcher](https://github.com/elfvingralf/claude-data-fetcher)** - Fetches internet information using Jina AI with side panel integration in Claude interface. `JavaScript` `Active`

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

## Applications & User Interfaces

**Complete applications and polished user interfaces**

### Desktop Applications
- **[Computer Agent](https://github.com/suitedaces/computer-agent)** - Desktop app using Claude's computer use capability to control your computer with AI. `Python/PyQt` `Experimental`

### Multi-Platform Chat Applications
- **[LibreChat](https://github.com/Librechat-AI/LibreChat)** - Multi-model chat platform with comprehensive Claude support alongside other AI models. `TypeScript/React` `21.6k ⭐` `Very Active`

- **[FastGPT](https://github.com/labring/FastGPT)** - Knowledge-based QA platform with RAG capabilities and Claude integration. `TypeScript` `10.3k ⭐` `Very Active`

### Command Line Tools
- **[SGPT](https://github.com/TheR1D/shell_gpt)** - Command-line tool supporting multiple AI models including Claude with shell integration. `Python` `346 ⭐` `Active`

- **[Claude CLI Tools](https://github.com/mijuny/claude-tools)** - Complete CLI toolkit (claude-ask, claude-bash, claude-fix) with Vim integration and secure credential management. `Python/Shell` `Active`

## Platform Integrations

**Integrations with popular platforms and services**

### Slack Integrations
- **[Claude Code Slack Agent](https://github.com/106-/claude-code-slack-agent)** - Professional Slack integration with Claude Code SDK, thread replies, and Docker readiness. `TypeScript` `Production Ready`

- **[Claude Code Slack Bot](https://github.com/mpociot/claude-code-slack-bot)** - Connects local Claude Code agent with Slack featuring streaming responses and session management. `TypeScript` `Active`

### Telegram Bots
- **[Claude Code Telegram](https://github.com/RichardAtCT/claude-code-telegram)** - Full-featured remote Claude Code access with session persistence, project navigation, and mobile development terminal. `Python` `MIT Licensed`

- **[Telegram Claude Bot](https://github.com/flows-network/telegram-claude)** - Production-ready deployment on flows.network with customizable prompts and group support. `Template-based` `One-click Deploy`

### Discord & Other Platforms
- **[Hexabot](https://github.com/Hexastack/Hexabot)** - Multi-channel chatbot builder with Claude support for Discord, Facebook Messenger, and web chat. `TypeScript` `552 ⭐` `Active`

## Automation & Workflow Tools

**Tools for automating development workflows and business processes**

### GitHub Integration
- **[Claude Hub](https://github.com/claude-did-this/claude-hub)** - Enterprise webhook service connecting Claude Code to GitHub repositories with autonomous development and PR management. `Docker` `Production Ready`

- **[Claude Code Hooks](https://github.com/disler/claude-code-hooks-mastery)** - Advanced hook system for Claude Code automation with UV scripts and security enhancements. `Python` `Tutorial System`

### Workflow Orchestration
- **[n8n Manager](https://github.com/czlonkowski/n8n-manager-for-ai-agents)** - MCP server for managing n8n workflows with webhook triggers and execution monitoring. `TypeScript` `MIT Licensed`

- **[CCPlugins](https://github.com/brennercruvinel/CCPlugins)** - 24 professional commands for Claude Code CLI designed to save 2-3 hours per week with enterprise workflows. `Command Definitions` `Battle-tested`

## Prompt Engineering & Templates

**Tools and resources for optimizing Claude interactions**

### Prompt Management
- **[Interactive Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)** - Official Anthropic tutorial with 9 comprehensive chapters and hands-on exercises. `Jupyter Notebooks` `800+ ⭐` `Official`

- **[Claude Prompts MCP](https://github.com/minipuft/claude-prompts-mcp)** - Advanced prompt management system with semantic analysis, template engine, and hot-reload capabilities. `TypeScript` `200+ ⭐` `Very Active`

### Prompt Collections
- **[Awesome Claude Prompts](https://github.com/langgptai/awesome-claude-prompts)** - Curated collection of proven prompts for development, analysis, and creative tasks. `Markdown` `600+ ⭐` `Community Maintained`

## Educational Resources & Tutorials

**Learning resources and documentation for Claude development**

### Official Documentation
- **[Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)** - Official examples and best practices directly from Anthropic's team. `Jupyter Notebooks` `19.8k ⭐` `Official`

### Community Learning
- **[Made with Claude Artifacts](https://github.com/madewithclaude/awesome-claude-artifacts)** - Showcase of applications and tools created using Claude's Artifacts feature. `Showcase` `Community`

## Community & Lists

**Community-curated resources and awesome lists**

- **[General Awesome Claude](https://github.com/taranjeet/awesome-claude)** - Broad collection of Claude resources, comparisons, and community contributions. `Markdown` `Community`

- **[Claude Code Agents](https://github.com/hesreallyhim/awesome-claude-code-agents)** - Specialized collection focusing on Claude Code sub-agents and automation systems. `Markdown` `Specialized`

---

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

[![Star History Chart](https://api.star-history.com/svg?repos=anthropics/anthropic-cookbook,anthropics/claude-code&type=Date)](https://star-history.com/#anthropics/anthropic-cookbook&anthropics/claude-code&Date)

---

**[⬆ Back to Contents](#contents)**

> 💡 **Tip**: Most repositories marked as "Very Active" were updated within the last 30 days. The Claude ecosystem is rapidly evolving, especially around Claude Code and MCP protocol innovations.
