import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ColorModeScript />

      <App />
    </HelmetProvider>
  </React.StrictMode>
);
