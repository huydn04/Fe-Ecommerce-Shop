import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));
const Cart = lazy(() => import("../pages/Shopping-cart/Cart"));
const Checkout = lazy(()=> import("../pages/Shopping-cart/Checkout"));
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

        <Route element={<MainLayout />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}
