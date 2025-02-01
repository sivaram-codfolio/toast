import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContextProvider } from "@app/providers/toast.tsx";

createRoot(document.getElementById("root")!).render(
  <ToastContextProvider>
    <App />
  </ToastContextProvider>
);
