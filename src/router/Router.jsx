import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary";

const LoadingPages = lazy(() => import("../components/loading/LoadingPages"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));

export default function AppRoutes() {
  return (
    <div className="">
      <ErrorBoundary>
        <Suspense fallback={<LoadingPages loading={true} />}>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route element={<MainLayout />}>
              <Route path="/admin" element={<AdminPages />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
