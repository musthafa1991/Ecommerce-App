import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/shop/product/${product.id}`} className="block">
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
        <p className="text-gray-600">{product.brand}</p>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
