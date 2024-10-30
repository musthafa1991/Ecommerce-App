import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleIncrease = (item) => {
    item.quantity += 1;
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(item.id);
    }
  };

  const handleCheckout = () => {
    navigate("/shop/checkout");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-300 text-black px-2 rounded"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-300 text-black px-2 rounded"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-bold">Total: ${totalAmount}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded mt-2 ml-4"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
