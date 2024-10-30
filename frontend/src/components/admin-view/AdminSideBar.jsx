import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaChartPie,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaImage,
  FaTags,
  FaMoneyBill,
  FaTruck,
  FaChartLine,
  FaUserShield,
  FaCog,
  FaComments,
  FaPlug,
  FaShieldAlt,
} from "react-icons/fa";

const adminSidebarMenuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <FaChartPie /> },
  { name: "Products", path: "/admin/products", icon: <FaBox /> },
  { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
  { name: "Customers", path: "/admin/customers", icon: <FaUsers /> },
  { name: "Content", path: "/admin/content", icon: <FaImage /> },
  { name: "Promotions", path: "/admin/promotions", icon: <FaTags /> },
  { name: "Payments", path: "/admin/payments", icon: <FaMoneyBill /> },
  { name: "Shipping", path: "/admin/shipping", icon: <FaTruck /> },
  { name: "Analytics", path: "/admin/analytics", icon: <FaChartLine /> },
  { name: "Users", path: "/admin/users", icon: <FaUserShield /> },
  { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
  { name: "Feedback", path: "/admin/feedback", icon: <FaComments /> },
  { name: "Integrations", path: "/admin/integrations", icon: <FaPlug /> },
  { name: "Security", path: "/admin/security", icon: <FaShieldAlt /> },
];

const AdminSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex flex-col mt-4">
        {adminSidebarMenuItems.map((item) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-700 ${
              location.pathname === item.path ? "bg-gray-900" : ""
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="ml-4">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSideBar;
