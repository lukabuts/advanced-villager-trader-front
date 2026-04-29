import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LOCAL_STORAGE_KEYS } from "./constants/localstorage.ts";

const savedTheme = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) ||
    '{"state":{"theme":"dark"}}',
).state.theme;

document.documentElement.classList.toggle("dark", savedTheme === "dark");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
