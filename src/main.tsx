import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic.ts";
import "./index.css";
import ErrorPage from "./Errorpage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
