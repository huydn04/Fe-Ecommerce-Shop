import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));
const UsersPages = lazy(() => import("../pages/users/UsersPages"));
const Setting = lazy(() => import("../pages/users/SettingUser"));

const OrderHistory = lazy(() => import("../pages/users/OrderHistory"));
const WishList = lazy(() => import("../pages/users/WishList"));

8
export default function AppRoutes() {
  return (
    <div className="">
      <Routes>
        {/* Landing Page  */}
        <Route index path="/" element={<LandingPage />} />

        {/* Admin Page  */}

          <Route path="/admin" element={<AdminPages />} />
        
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

        {/* oder History Page  */}
           <Route element={<MainLayout />}>
          <Route path="/order-history" element={<OrderHistory />} />
        </Route>

        {/* Wish List page  */}
              <Route element={<MainLayout />}>
          <Route path="/wish-list" element={<WishList />} />
        </Route>
        
      </Routes>
    </div>
  );
}
