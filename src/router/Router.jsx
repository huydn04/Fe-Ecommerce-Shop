import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import CreateUser from "../pages/users/CreateUser";
import LoginUser from "../pages/users/LoginUser";
import ResetPassword from "../pages/users/ResetPassword";

import OrderList from "../pages/order-management/OrderList";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));
const Homepages = lazy(() => import("../pages/main/home"));
const MenuPage = lazy(() => import("../pages/main/menuPage"));
const AboutPage = lazy(() => import("../pages/product-detail/aboutPage.jsx"));
const Cart = lazy(() => import("../pages/Shopping-cart/Cart"));
const Checkout = lazy(() => import("../pages/Shopping-cart/Checkout"));
const UsersPages = lazy(() => import("../pages/users/UsersPages"));
const Setting = lazy(() => import("../pages/users/SettingUser"));
const OrderHistory = lazy(() => import("../pages/users/OrderHistory"));
const WishList = lazy(() => import("../pages/users/WishList"));
const MenuDetail = lazy(() => import("../pages/product-detail/MenuDetail"));
const AttractiveOffers = lazy(() =>
  import("../pages/popular/AttractiveOffers")
);
const CartPop = lazy(() => import("../pages/users/cartPop"));
const Shop = lazy(() => import("../pages/Shopping-cart/shop"));

const ProductManager = lazy(() => import("../pages/admin/ProductManager"));
const AdminDashBoard = lazy(() => import("../pages/admin/AdminDashBoard.jsx"));
const AdminUsers = lazy(() => import("../pages/admin/AdminUsers.jsx"));
const AddAdminUsers = lazy(() => import("../pages/admin/AddAdminUsers.jsx"));
const UpdateProduct = lazy(() => import("../pages/product-detail/UpdateProduct"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Landing Page */}
        <Route index path="/" element={<LandingPage />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPages />}>
          <Route index path="" element={<AdminDashBoard />} />
          <Route path="product-manager" element={<ProductManager />} />
          <Route path="update" element={<UpdateProduct />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="AdminUsers" element={<AdminUsers />} />
        </Route>
        {/* User Pages */}
        <Route path="/user" element={<UsersPages />} />

        <Route path="/admin-users" element={<AddAdminUsers />} />


        {/* Page 404 */}
        <Route path="*" element={<Pages404 />} />

        {/* Home */}
        <Route path="/home-pages" element={<Homepages />} />
        <Route path="/menu-pages" element={<MenuPage />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Setting Page */}
        <Route path="/setting" element={<Setting />} />

        {/* Order History Page */}
        <Route path="/order-history" element={<OrderHistory />} />

        {/* Wish List Page */}
        <Route path="/wish-list" element={<WishList />} />

        {/* Menu Detail Page */}
        <Route path="/menu-detail" element={<MenuDetail />} />

        {/* Attractive Offers Page */}
        <Route path="/attractive-offers" element={<AttractiveOffers />} />

        {/* Login User Page */}
        <Route path="/login-user" element={<LoginUser />} />

        {/* CartPop */}
        <Route path="/cart-pop" element={<CartPop />} />

        {/* Create User Page */}
        <Route path="/create-user" element={<CreateUser />} />

        {/* Reset Password Page */}
        <Route path="/reset-pass" element={<ResetPassword />} />

        <Route path="/about-page" element={<AboutPage />} />


      </Routes>
    </Suspense>
  );
}
