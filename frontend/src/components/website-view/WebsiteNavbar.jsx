import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/image/logo/logo.png";

const WebsiteNavbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold ml-2">LetShop</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Products
          </Link>
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Men
          </Link>
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Women
          </Link>
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Kids
          </Link>
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Mobile
          </Link>
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Toys
          </Link>
          <Link
            to="/shop/listing"
            className="text-gray-700 hover:text-blue-500"
          >
            Footwear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded-md pl-10"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-500"></i>
          </div>
          <Link
            to="/shop/cart"
            className="text-gray-700 hover:text-blue-500 relative"
          >
            <i className="fas fa-shopping-cart fa-lg"></i>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-blue-500 flex items-center"
              >
                <span className="mr-2">{user.name}</span>
                <i className="fas fa-user-circle fa-lg"></i>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link
                    to="/shop/account"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Account
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="text-gray-700 hover:text-blue-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default WebsiteNavbar;
