import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { itemApi } from "./infrastructure/item.api.ts";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={itemApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
