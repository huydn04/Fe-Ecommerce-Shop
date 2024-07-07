import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const AdminPages = lazy(() => import("../pages/admin/AdminPages"));
const Pages404 = lazy(() => import("../pages/404/Page404"));

const Cart = lazy(() => import("../pages/Shopping-cart/Cart"));
const Checkout = lazy(()=> import("../pages/Shopping-cart/Checkout"));
const UsersPages = lazy(() => import("../pages/users/UsersPages"));
const Setting = lazy(() => import("../pages/users/SettingUser"));
const OrderHistory = lazy(() => import("../pages/users/OrderHistory"));
const WishList = lazy(() => import("../pages/users/WishList"));
const CartPop = lazy(() => import("../pages/users/cartPop"));


const MenuDetail = lazy(() => import("../pages/product-detail/MenuDetail"));



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

        <Route element={<MainLayout />}>
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* setting Page  */}
        
          <Route path="/setting" element={<Setting />} />
     

        {/* oder History Page  */}
     
          <Route path="/order-history" element={<OrderHistory />} />
      

        {/* Wish List page  */}
              
          <Route path="/wish-list" element={<WishList />} />

        {/*Menu Detail Page*/}
        <Route element={<MainLayout />}>
          <Route path="/product-detail" element={<MenuDetail />} />
        </Route>
        

      </Routes>


    </div>
  );
}
