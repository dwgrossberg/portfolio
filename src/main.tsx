import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./styles/index.css";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ColorModeScript />
      <SEO />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
