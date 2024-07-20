import { lazy, Suspense } from "react";
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
const MenuDetail = lazy(() => import("../pages/product-detail/MenuDetail"));

const AttractiveOffers = lazy(() => import("../pages/AttractiveOffers"));
const CartPop = lazy(() => import("../pages/users/cartPop"));
<<<<<<< HEAD


<<<<<<< HEAD
=======
const CartPop = lazy(() => import("../pages/users/cartPop"));

>>>>>>> 93b2c39a6918cd7e4818f4ac6e20b82c3a196aca
=======
=======


>>>>>>> 34c831751e2aeec217880a710e449d6a70834d62

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Landing Page */}
        <Route index path="/" element={<LandingPage />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPages />} />

        {/* User Pages */}
        <Route path="/user" element={<UsersPages />} />

        {/* Page 404 */}
        <Route path="*" element={<Pages404 />} />

        {/* Home */}
        <Route path="/home-pages" element={<Homepages />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Setting Page */}
        <Route path="/setting" element={<Setting />} />

        {/* Order History Page */}
        <Route path="/order-history" element={<OrderHistory />} />

<<<<<<< HEAD
<<<<<<< HEAD

        {/* Wish List Page */}
        <Route path="/wish-list" element={<WishList />} />

        {/* Menu Detail Page */}
        <Route path="/menu-detail" element={<MenuDetail />} />
=======
        {/* Wish List page  */}

              
          <Route path="/wish-list" element={<WishList />} />

        {/*Menu Detail Page*/}

          <Route path="/menu-detail" element={<MenuDetail />} />

        {/* CartPop */}
         
        <Route path="/cart-pop" element={<CartPop/>}/>

        
        {/* Create Account page */}
         
        <Route path="/create-user" element={<CreateUser />} />
>>>>>>> 93b2c39a6918cd7e4818f4ac6e20b82c3a196aca
=======

        {/* Wish List Page */}
        <Route path="/wish-list" element={<WishList />} />

        {/* Menu Detail Page */}
        <Route path="/menu-detail" element={<MenuDetail />} />
>>>>>>> 34c831751e2aeec217880a710e449d6a70834d62

        {/* Attractive Offers Page */}
        <Route path="/attractive-offers" element={<AttractiveOffers />} />

        {/* Create Account Page */}
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Login User Page */}
        <Route path="/login-user" element={<LoginUser />} />

        {/* CartPop */}
        <Route path="/cart-pop" element={<CartPop />} />

       

        {/* Create User Page */}
        <Route path="/create-user" element={<CreateUser />} />

        {/* MainLayout with nested routes */}
        <Route element={<MainLayout />}>
          <Route path="/product-detail" element={<MenuDetail />} />
        </Route>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 34c831751e2aeec217880a710e449d6a70834d62
      </Routes>
    </Suspense>


<<<<<<< HEAD
=======
</Routes>
    </div>
>>>>>>> 93b2c39a6918cd7e4818f4ac6e20b82c3a196aca
=======
>>>>>>> 34c831751e2aeec217880a710e449d6a70834d62
  );
}
