import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoadingPages = lazy(() => import("../components/loading/LoadingPages"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Admin = lazy(() => import("../pages/admin/AdminPages"));

export default function AppRoutes() {
  return (
    <div className="">
      <Suspense fallback={<LoadingPages loading={true} />}>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route index path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </div>
  );
}
