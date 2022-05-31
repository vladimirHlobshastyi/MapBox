import * as React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import "./index.css";
import AlertProvider from "./providers/AlertProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertProvider>
      <Home />
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();
