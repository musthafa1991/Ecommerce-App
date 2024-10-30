import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../../services/api";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // State for quantity

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const products = await fetchProducts();
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 rounded-md"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
          <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
          {product.salePrice && (
            <p className="text-red-500 mb-2">
              Sale Price: ${product.salePrice}
            </p>
          )}
          <p className="text-gray-800 mb-4">{product.description}</p>

          <div className="flex items-center mb-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-200 p-2 rounded-l-md"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="border p-2 w-16 text-center"
              min="1"
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-gray-200 p-2 rounded-r-md"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
