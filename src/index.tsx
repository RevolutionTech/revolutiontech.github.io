import * as React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SITE_CONTENT } from "./content";

const LOG_ROCKET_APP_ID = "q6cfij/revolutiontechgithubio";

// LogRocket is not needed to render the page, so it loads in a separate chunk
// to keep it out of the initial bundle.
if (import.meta.env.PROD) {
  import("logrocket").then(({ default: LogRocket }) => {
    LogRocket.init(LOG_ROCKET_APP_ID);
  });
}

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App content={SITE_CONTENT} />
  </React.StrictMode>,
);
