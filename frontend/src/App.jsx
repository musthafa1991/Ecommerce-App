import React from "react";
import { Route, Routes } from "react-router-dom";

//auth
import { useAuth } from "@/context/AuthContext";

import AuthLayout from "./components/authentication/layout";
import Login from "./pages/authenication/Login";
import Register from "./pages/authenication/register";
//common pages
import NotFound from "./pages/not-found";
import UnauthorizedPage from "./pages/unauth-page";
//common component
import CheckAuth from "./components/common/CheckAuth";
//users component
import WebsiteLayout from "./components/website-view/WebsiteLayout";
//users pages
import SiteHome from "./pages/website-view/SiteHome";
import SiteListing from "./pages/website-view/SiteListing";
import ProductDetails from "./pages/website-view/ProductDetails";
import Cart from "./pages/website-view/Cart";
import Checkout from "./pages/website-view/Checkout";
import UserAccount from "./pages/website-view/UserAccount";
//admin components
import AdminLayout from "./components/admin-view/layout";
//admin pagess
import Dashboard from "./pages/admin-view/Dashboard";
import ProductManagement from "./pages/admin-view/ProductManagement";
import OrderManagement from "./pages/admin-view/OrderManagement";
import CustomerManagement from "./pages/admin-view/CustomerManagement";
import ContentManagement from "./pages/admin-view/ContentManagement";
import Promotions from "./pages/admin-view/Promotions";
import PaymentManagement from "./pages/admin-view/PaymentManagement";
import ShippingManagement from "./pages/admin-view/ShippingManagement";
import AnalyticsReports from "./pages/admin-view/AnalyticsReports";
import UserManagement from "./pages/admin-view/UserManagement";
import Settings from "./pages/admin-view/Settings";
import FeedbackReviews from "./pages/admin-view/FeedbackReviews";
import SecurityBackup from "./pages/admin-view/SecurityBackup";
import Integrations from "./pages/admin-view/Integrations";

const App = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="customers" element={<CustomerManagement />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="payments" element={<PaymentManagement />} />
          <Route path="shipping" element={<ShippingManagement />} />
          <Route path="analytics" element={<AnalyticsReports />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="feedback" element={<FeedbackReviews />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="security" element={<SecurityBackup />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <WebsiteLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<SiteHome />} />
          <Route path="listing" element={<SiteListing />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<UserAccount />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthorizedPage />} />
      </Routes>
    </div>
  );
};

export default App;
