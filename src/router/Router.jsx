import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from '../context/shop-context';
import CreateUser from '../pages/users/CreateUser';
import LoginUser from '../pages/users/LoginUser';
import ResetPassword from '../pages/users/ResetPassword';
import OrderList from '../pages/order-management/OrderList';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const AdminPages = lazy(() => import('../pages/admin/AdminPages'));
const Pages404 = lazy(() => import('../pages/404/Page404'));
const Homepages = lazy(() => import('../pages/main/home'));
const MenuPage = lazy(() => import('../pages/main/menuPage'));
const Cart = lazy(() => import('../pages/Shopping-cart/Cart'));
const Checkout = lazy(() => import('../pages/Shopping-cart/Checkout'));
const UsersPages = lazy(() => import('../pages/users/UsersPages'));
const Setting = lazy(() => import('../pages/users/SettingUser'));
const OrderHistory = lazy(() => import('../pages/users/OrderHistory'));
const WishList = lazy(() => import('../pages/users/WishList'));
const MenuDetail = lazy(() => import('../pages/product-detail/MenuDetail'));
const AttractiveOffers = lazy(() => import('../pages/popular/AttractiveOffers'));
const CartPop = lazy(() => import('../pages/users/cartPop'));
const Shop = lazy(() => import('../pages/Shopping-cart/shop'));
const ProductManager = lazy(() => import('../pages/admin/ProductManager'));
const AddProduct = lazy(() => import('../pages/admin/AddProduct.jsx'));
const AdminUsers = lazy(() => import('../pages/admin/AdminUsers.jsx'));
const AddAdminUsers = lazy(() => import('../pages/admin/AddAdminUsers.jsx'));
const UpdateProduct = lazy(() => import('../pages/product-detail/UpdateProduct'));

export default function AppRoutes() {
  return (
    <ShopContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminPages />} />
            <Route path="/admin/product-manager" element={<ProductManager />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/user" element={<UsersPages />} />
            <Route path="*" element={<Pages404 />} />
            <Route path="/home-pages" element={<Homepages />} />
            <Route path="/menu-pages" element={<MenuPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/menu-detail" element={<MenuDetail />} />
            <Route path="/attractive-offers" element={<AttractiveOffers />} />
            <Route path="/login-user" element={<LoginUser />} />
            <Route path="/cart-pop" element={<CartPop />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/reset-pass" element={<ResetPassword />} />
            <Route path="/shoptest" element={<Shop />} />
            <Route path="/AdminUsers" element={<AdminUsers />} />
            <Route path="/AddAdminUsers" element={<AddAdminUsers />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/order_list" element={<OrderList />} />
          </Routes>
        </Router>
      </Suspense>
    </ShopContextProvider>
  );
}
