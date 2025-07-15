// App loader - imports and bootstraps the React application
// This file is only imported AFTER the service worker is ready

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "../components/App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
