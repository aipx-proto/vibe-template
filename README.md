# Vibe Template

***A template for good vibes and rapid prototypes***

This template helps you configure VS Code to run in a "Vibe-Coding" chat mode, 
allowing you to create apps through Copilot without touching code! 

Creates apps in Microsoft Fluent Design language using [fluent.css](https://github.com/aipx-proto/fluent-css) and [vibe-icon](https://github.com/aipx-proto/vibe-icon).
Apps are also pre-configured to integrate with [Azure OpenAI LLMs](https://ai.azure.com/) using [vibe-button](https://github.com/aipx-proto/vibe-button). 

And, it connects to [Figma desktop MCP](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server)

![VS Code screenshot of vibe coding layout](./assets/readme-screenshot.png)

## Setup

1. Get the files in one of two ways:
  - **Easy:** Download the [vibe-template.zip](https://github.com/aipx-proto/vibe-template/archive/refs/heads/main.zip)
  - **Git:** Create a new repo from this repo's [template](https://github.com/new?template_name=vibe-template&template_owner=aipx-proto)
2. Open the project in VS Code.
3. Open GitHub Copilot Chat (the icon is at the top-center, to the right of search).
4. In the bottom left of the chat, select the "Vibe-Coding" mode (it may say "Ask" or "Agent" by default).
5. Prompt Copilot to make you an app.

## View Your App

Copilot will assist you with these steps:
- Install the "Live Server" vscode extension
- Click the 'Go Live' button in the bottom right of the VS Code window
- Open a browser (or the integrated vscode "Simple Browser") to http://localhost:4183

## Figma MCP Integration

This repo connects to Figma's MCP server, allowing direct integration with your Figma desktop files. 
You will need to enable MCP in Figma desktop for this to work. Ask Copilot for help if needed.
