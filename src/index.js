import * as React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import "./index.css";
import AlertProvider from "./providers/AlertProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

// possibly we will need to switch off strict mode to prevent extra rerender or we should handle this behaviour

root.render(
  <React.StrictMode>
    <AlertProvider>
      <Home />
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();
