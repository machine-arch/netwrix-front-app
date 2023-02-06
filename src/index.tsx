import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PartnersProvider } from "./context/partners.context";
import { DropDownsProvider } from "./context/dropdowns.context";
import { LoaderProvider } from "./context/loader.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PartnersProvider>
      <DropDownsProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </DropDownsProvider>
    </PartnersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
