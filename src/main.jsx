import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingPage from "./components/loading/LoadingPages.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<LoadingPage loading={true} />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
   </QueryClientProvider>
  </React.StrictMode>
);
