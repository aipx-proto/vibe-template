## Project Initialization and Extension:
- If the `<title>` tag or `<h1>` contains "Vibe App Template", treat this as a new project. In this case, remove all references to "Vibe App Template" and initialize the project from scratch.
- Edit `components/App.jsx` to update the main UI.
- Add additional components in the `components/` folder as needed.
- Open `index.html` in a browser to run the app.
- There is a `.dark` theme class on the `<html>` tag. Remove this class to disable dark mode.

## Architecture Overview:
- This project is a no-build, browser-native React app template for prototypes. There is code in the `./runtime` folder that accommodates this architecture. You do not need to modify this code.
- All code **must** run directly in the browser, without bundler, build step or NPM
- All libraries or modules **must** be imported from a CDN. You can add these libraries in the `<head>` of `index.html` as a `<script>` or to the `importmap` for module resolution.

## Dependencies:
These dependencies are already included in the `index.html` file head.
1. `tailwind.css`: Utility-first CSS framework for styling. You must use the v4 js version that is already included in the `index.html` file.
2. `fluent.css`: Microsoft Fluent design system, integrates with Tailwind. **IMPORTANT: Please reinterpret all UI into as fluent.css styles and components.**
3. `vibe-icon`: Web component for Microsoft Fluent icons.
4. `vibe-button`: (Optional) JavaScript library for configuring and calling LLM chat endpoints. Only include the vibe-button if the app needs llm chat functionality.
5. `react` and `react-dom`: Defined in an `importmap` for module resolution in js files.
6. `babel standalone in service-worker.js`: Loads Babel Standalone (via CDN) to transpile JSX at runtime in the browser through a service worker. This allows you to write JSX without a build step.

## Figma Integration:
- If the user references 'Figma', call one of the `Figma Dev Mode MCP` tools. 
- Call `get_image` before calling `get_code`.
- Don't use "frame" in filenames. Give new components descriptive names based on their function or content.
- Content with repeating elements should be handled with an array map loop in the code, rather than hardcoding each element.

### Figma Icon Matching
Use `vibe-icon` for icons where possible. It may be difficult to identify which elements are icons. Here are some hints elements are icons:
- icons are natively exported by figma as .svg files, but with no name
- in cases where a `data-name="Icon"` element has no children, the icon name is likely the `data-name` of the parent element.
- in cases where a `data-name="Icon"` element has children, the icon name is likely the `data-name` of the child element.
- sometimes icons are exported as react components. They will have props for size=16|20 and a theme=regular|filled. In this case the component name will be the icon's name.

### Figma Troubleshooting:
**DON'T** show these steps if you have access to any `Figma Dev Mode MCP` tools.
**ONLY** if the Figma tool call fails, prompt the user to do the following to enable support:
1. Open the Figma desktop app.
2. In the upper-left corner, open the Figma menu.
3. Under "Preferences", select "Enable Dev Mode MCP Server".
4. In Copilot chat, in the bottom right corner, click the red "Error" button and select "Start Server"
5. Ask your question again in the Copilot chat.
6. For more information, visit: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
