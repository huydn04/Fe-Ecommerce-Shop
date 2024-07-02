import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));
const UsersPages = lazy(() => import("../pages/users/UsersPages"));
const Setting = lazy(() => import("../pages/users/Setting"));

export default function AppRoutes() {
  return (
    <div className="">
      <Routes>
        {/* Landing Page  */}
        <Route index path="/" element={<LandingPage />} />

        {/* Amin Page  */}
        <Route element={<MainLayout />}>
          <Route path="/admin" element={<AdminPages />} />
        </Route>

        {/* User Pages */}

        <Route path="/user" element={<UsersPages />} />

        {/* Page 404 */}
        <Route element={<MainLayout />}>
          <Route errorElement={<Pages404 />} />
          <Route path="*" element={<Pages404 />} />
        </Route>

        {/* setting Page  */}
        <Route element={<MainLayout />}>
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}
