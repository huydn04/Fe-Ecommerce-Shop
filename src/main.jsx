import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingPage from "./components/loading/LoadingPages.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<LoadingPage loading={true} />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
