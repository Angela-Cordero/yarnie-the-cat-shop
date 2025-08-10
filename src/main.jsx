import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomCartProvider } from "./providers/CartProvider";

import "./App.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCartProvider>
      <App />
    </CustomCartProvider>
  </StrictMode>
);
