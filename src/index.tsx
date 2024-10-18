import * as React from "react";
import { createRoot } from "react-dom/client";
import LogRocket from "logrocket";

import App from "./App";

const LOG_ROCKET_APP_ID = "q6cfij/revolutiontechgithubio";

// Init LogRocket
if (process.env.NODE_ENV === "production") {
  LogRocket.init(LOG_ROCKET_APP_ID);
}

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
