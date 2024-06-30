import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import Pages404 from "../pages/404/Page404";


const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));

export default function AppRoutes() {
  return (
    <div className="">
          <Routes>
            <Route index path="/" element={<LandingPage />} />

            {/* Amin Page  */}
            <Route element={<MainLayout />}>
              <Route path="/admin" element={<AdminPages />} />
            </Route>

            {/* Page 404 */}
            <Route element={<MainLayout />}>
              <Route errorElement={<Pages404 />} />
              <Route path="*" element={<Pages404 />} />
            </Route>
          </Routes>
    </div>
  );
}
