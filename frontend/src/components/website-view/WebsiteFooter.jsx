import React from "react";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        {/* Company Info */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Let Shop Pvt Ltd</h2>
          <p>Address: 123 Main Street, Doha, Qatar</p>
          <p>Email: support@example.com</p>
          <p>Phone: +974-123-4567,</p>
        </div>

        {/* Links */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop/listing" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/shop/cart" className="hover:underline">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/shop/account" className="hover:underline">
                My Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
