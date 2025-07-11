## Project Initialization:
- If the `<title>` tag or `<h1>` contains "Vibe Template Project", treat this as a new project.
- In this case, remove all references to "Vibe Template" and initialize the project from scratch.

## Dependencies:
These dependencies are already included in the `index.html` file head.
1. `tailwind.css`: Utility-first CSS framework for styling. You must use the v4 js version that is already included in the `index.html` file.
2. `fluent.css`: Microsoft Fluent design system, integrates with Tailwind. **IMPORTANT: Please reinterpret all UI into as fluent.css styles and components.**
3. `vibe-icon`: Web component for Microsoft Fluent icons.
4. `vibe-button`: JavaScript library for configuring and calling LLM chat endpoints. Only include the vibe-button if the app needs llm chat functionality.
5. `handlebars.js`: Optional, Not included by default. If more complex templating or rendering is needed, please import `https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.min.js` in the `index.html` `<head>`.

If you need to install js dependencies, you **must** import them from a CDN in the `index.html` file. Do not use npm to install dependencies. This is a 'no-build' app and must run in the browser without any build step.

## Figma Integration:
- If the user references 'Figma', call one of the `Figma Dev Mode MCP` tools. 
- Call `get_image` before calling `get_code`.
- Don't use "frame" in filenames. Give new components descriptive names based on their function or content.

### Figma Troubleshooting:
**DON'T** show these steps if you have access to any `Figma Dev Mode MCP` tools.
**ONLY** if the Figma tool call fails, prompt the user to do the following to enable support:
1. Open the Figma desktop app.
2. In the upper-left corner, open the Figma menu.
3. Under "Preferences", select "Enable Dev Mode MCP Server".
4. In Copilot chat, in the bottom right corner, click the red "Error" button and select "Start Server"
5. Ask your question again in the Copilot chat.
6. For more information, visit: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server

