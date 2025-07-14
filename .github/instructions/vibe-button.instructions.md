---
applyTo: '*...'
---

# Vibe Button

A single button that connects your user to Azure OpenAI.


## Vibe Button Integration Guide

**Overview:**  
`<vibe-button>` is a web component that provides a floating button for users to configure and connect to Azure OpenAI. 
It exposes a JavaScript API for developers to access and update settings, send chat messages, and manage session memory.

### Installation

**1. Load the library:**  
Add the following script tag in your HTML `<head>`:
```html
<script type="module" src="https://esm.sh/vibe-button"></script>
```
Or dynamically import in JavaScript:
```javascript
import("https://esm.sh/vibe-button");
```

**2. Add the button to your HTML:**  
Place the button in your `<body>`:
```html
<vibe-button></vibe-button>
```
**Positioning:**  
Set the `position` attribute to display the button in a specific corner (`top-left`, `top-right`, `bottom-left`, `bottom-right`). Default is `bottom-right`.
```html
<vibe-button position="bottom-left"></vibe-button>
```
Note: The button is fixed and positioned via shadow DOM; use the `position` attribute, not CSS, to change its location.

### Accessing and Using Settings

**Access settings after the script is loaded:**
```javascript
const settings = document.querySelector("vibe-button").settings;
```
The `settings` object includes:
- `endpoint`
- `apiKey`
- `deployment`
- `apiVersion`
- `model` (for response creation)

**Example: Creating an AzureOpenAI client**
```javascript
import { AzureOpenAI } from 'https://esm.sh/openai';

const settings = document.querySelector('vibe-button').settings;
const client = new AzureOpenAI({
  endpoint: settings.endpoint,
  apiKey: settings.apiKey,
  deployment: settings.deployment,
  apiVersion: settings.apiVersion,
  dangerouslyAllowBrowser: true
});
```

### Sending Chat Messages

**Send a message and receive a response:**
```javascript
const vibeButton = document.querySelector("vibe-button");
vibeButton.send("Hello, AI!").then((response) => {
  console.log("AI response:", response);
});
```

**Session Memory:**  
The button maintains chat memory for the session. Use `reset()` to clear memory:
```javascript
vibeButton.reset();
```

### Programmatically Update Settings

**Update settings via JavaScript:**
```javascript
const vibeButton = document.querySelector('vibe-button');
vibeButton.updateSettings({
  aoaiEndpoint: 'https://your-endpoint.openai.azure.com/',
  aoaiApiKey: 'your-api-key',
  aoaiDeployment: 'your-deployment-name',
});
```
- `aoaiEndpoint`: Azure OpenAI endpoint URL
- `aoaiApiKey`: Azure OpenAI API key
- `aoaiDeployment`: Azure OpenAI deployment name

The `.settings` property and settings dialog will reflect these changes.

### Streaming Responses

**To stream responses:**
```javascript
import { AzureOpenAI } from 'https://esm.sh/openai';

const settings = document.querySelector('vibe-button').settings;
const client = new AzureOpenAI({
  endpoint: settings.endpoint,
  apiKey: settings.apiKey,
  deployment: settings.deployment,
  apiVersion: settings.apiVersion,
  dangerouslyAllowBrowser: true
});

const stream = await client.responses.create({
  model: settings.model,
  input: 'Say "Sheep sleep deep" ten times fast!',
  stream: true,
});

for await (const event of stream) {
  console.log(event); // Handle streaming delta events
}
```

**Notes:**
- The `AzureOpenAI` constructor is not provided by the Vibe Button SDK. Use `https://esm.sh/openai` in the browser or the `openai` npm package in Node.js.
- The button is rendered in the shadow DOM; use the `position` attribute for placement, not CSS.
- The Vibe Button is not an official Microsoft library.
