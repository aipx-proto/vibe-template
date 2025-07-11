## Project Initialization:
- If the `<title>` tag or `<h1>` contains "Vibe Template Project", treat this as a new project.
- In this case, remove all references to "Vibe Template" and initialize the project from scratch.
- Please delete or replace the example.hbs file in the `components/` directory with your own components.

## Dependencies:
These dependencies are already included in the index.html file head.
- `handlebars.js`: Templating engine for rendering HTML. Break up components into smaller, reusable `.hbs`  templates in `components/` directory.
- `tailwind.css`: Utility-first CSS framework for styling.
- `fluent.css`: Microsoft Fluent design system, integrates with Tailwind. **IMPORTANT: Please reinterpret all UI into as fluent.css styles and components.**
- `vibe-icon`: Web component for Microsoft Fluent icons.
- `vibe-button`: JavaScript library for configuring and calling LLM chat endpoints. Only include the vibe-button if the app needs llm chat functionality.
- If you need to install js dependencies, please import them from a CDN in the `index.html` file. Do not use npm to install dependencies.

## Figma Integration:
- If the user references 'figma', call one of the `Figma Dev Mode MCP` tools. 
- Call `get_image` before calling `get_code`.
- you can 
- Where applicable, please break larger files into smaller components and templates to make a more manageable project structure. 
- Don't use "frame" in filenames. Give new components descriptive names based on their function or content.

### Figma Troubleshooting:
**DON'T** show these steps if you have access to any `Figma Dev Mode MCP` tools.
**ONLY** if the figma tool call fails, prompt the user to do the following to enable support:
1. Open the Figma desktop app.
2. In the upper-left corner, open the Figma menu.
3. Under "Preferences", select "Enable Dev Mode MCP Server".
4. In Copilot chat, in the bottom right corner, click the red "Error" button and select "Start Server"
5. Ask your question again in the Copilot chat.
6. For more information, visit: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server

