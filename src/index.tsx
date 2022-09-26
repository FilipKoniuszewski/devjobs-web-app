import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { JobContextProvider } from "./contexts/JobContectProvider";
import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <JobContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </JobContextProvider>
  </React.StrictMode>
);
