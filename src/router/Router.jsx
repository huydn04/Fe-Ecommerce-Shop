import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CreateUser from "../pages/users/CreateUser";
import CreateAccount from "../pages/users/CreateAccount";
import LoginUser from "../pages/users/LoginUser";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));
const Homepages = lazy(() => import("../pages/main/home"));

const Cart = lazy(() => import("../pages/Shopping-cart/Cart"));
const Checkout = lazy(() => import("../pages/Shopping-cart/Checkout"));
const UsersPages = lazy(() => import("../pages/users/UsersPages"));
const Setting = lazy(() => import("../pages/users/SettingUser"));
const OrderHistory = lazy(() => import("../pages/users/OrderHistory"));
const WishList = lazy(() => import("../pages/users/WishList"));
const AttractiveOffers = lazy(() => import("../pages/AttractiveOffers"));

const MenuDetail = lazy(() => import("../pages/product-detail/MenuDetail"));


const CartPop = lazy(() => import("../pages/users/cartPop"));


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

        <Route errorElement={<Pages404 />} />
        <Route path="*" element={<Pages404 />} />

        {/*Home*/}

        <Route path="/home-pages" element={<Homepages />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        {/* setting Page  */}

        <Route path="/setting" element={<Setting />} />

        {/* oder History Page  */}

        <Route path="/order-history" element={<OrderHistory />} />

        {/* Wish List page  */}

              
          <Route path="/wish-list" element={<WishList />} />

        {/*Menu Detail Page*/}

          <Route path="/menu-detail" element={<MenuDetail />} />

        {/* CartPop */}
         
        <Route path="/cart-pop" element={<CartPop/>}/>

        
        {/* Create Account page */}
         
        <Route path="/create-user" element={<CreateUser />} />

        {/* Login User page */}
         
        <Route path="/login-user" element={<LoginUser />} />

        {/*Menu Detail Page*/}
        <Route element={<MainLayout />}>
          <Route path="/product-detail" element={<MenuDetail />} />
        </Route>

        {/* AttractiveOffers */}
        <Route path="/Attractive-Offers" element={<AttractiveOffers />} />

</Routes>
    </div>
  );
}
