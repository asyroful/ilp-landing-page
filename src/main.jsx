import React from "react";
import ReactDOM from "react-dom/client";
import RoutedApp from "./App";
import "./index.css";
import UserProvider from "./context/UserContext";
import AlertProvider from "./context/AlertContext";
import Alert from "./components/Alert";
import Hooks from "./hooks/Hooks";
import Loader from "./components/Loader";
import './lib/i18n'

const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <AlertProvider>
      <UserProvider>
        <RoutedApp />
        <Loader />
        <Alert />
        <Hooks />
      </UserProvider>
    </AlertProvider>
  </React.StrictMode>
);

// Support react-snap pre-rendering
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
