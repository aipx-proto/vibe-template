async function startApp() {
  if ("serviceWorker" in navigator) {
    try {
      // "./service-worker.js" path is relative to index.html
      const registration = await navigator.serviceWorker.register("./service-worker.js", { type: "module" });
      console.log("Service Worker registered:", registration);

      // Wait for service worker to be ready and controlling this page
      await navigator.serviceWorker.ready;

      // If there's already a controller, we're good to go
      // If not, wait for the controllerchange event
      if (navigator.serviceWorker.controller) {
        loadReactApp();
      } else {
        const reloadTimeout = setTimeout(() => {
          if (
            window.performance
              .getEntriesByType("navigation")
              .map((nav) => nav.type)
              .includes("reload")
          ) {
            // in the case of a force-refresh, the cache is disabled, so the service worker will never run.
            // https://stackoverflow.com/a/49076667/5648839
            console.log('Refresh detected - Service Worker is disabled when refresh is "forced"');
            console.log("Attempting reload to enable Service Worker...");
            location.reload();
          }
        }, 500);

        navigator.serviceWorker.addEventListener("controllerchange", () => {
          clearTimeout(reloadTimeout);
          loadReactApp();
        });
      }
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  } else {
    console.error("Service Workers not supported");
  }
}

async function loadReactApp() {
  // Import the app loader only after service worker is ready
  // This ensures ALL JSX imports happen after SW is controlling
  // "./app-loader.js" path is relative to this file
  await import("./app-loader.js");
}

// Start the process
startApp();
