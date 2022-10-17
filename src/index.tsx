import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

function AppWithRoutes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<AppWithRoutes />);
