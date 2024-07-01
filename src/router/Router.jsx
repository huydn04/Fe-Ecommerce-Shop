import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));
const SettingUser = lazy(() => import("../pages/users/SettingUser"));
const OrderHistory = lazy(() => import("../pages/users/OrderHistory"));


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

        {/* Page 404 */}
        <Route element={<MainLayout />}>
          <Route errorElement={<Pages404 />} />
          <Route path="*" element={<Pages404 />} />
        </Route>

        {/* setting Page  */}
        <Route element={<MainLayout />}>
          <Route path="/SettingUser" element={<SettingUser />} />
        </Route>

        {/* oder History Page  */}
           <Route element={<MainLayout />}>
          <Route path="/OrderHistory" element={<OrderHistory />} />
        </Route>
        
      </Routes>
    </div>
  );
}
