import React from "react";
import ReactDOM from "react-dom/client";
import { ModalContextProvider } from "./context/modal/modalContext";
import { ThemeContextProvider } from "./context/theme/themeContext";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </ThemeContextProvider>
);
