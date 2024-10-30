import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/styles.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <CartProvider>
        <AuthProvider>
          <App />
          <Toaster />
        </AuthProvider>
      </CartProvider>
    </Provider>
  </BrowserRouter>
);
