import React, { useState } from "react";

const FilterPanel = ({ onCategoryChange, onBrandChange, onPriceChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    onBrandChange(brand);
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setSelectedPrice(price);
    onPriceChange(price);
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold">Category</h3>
        <select
          className="w-full mt-2 p-2 border rounded"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="mobile">Mobile</option>
          <option value="toys">Toys</option>
          <option value="footwear">Footwear</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 className="font-semibold">Brand</h3>
        <select
          className="w-full mt-2 p-2 border rounded"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All Brands</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-semibold">Price</h3>
        <select
          className="w-full mt-2 p-2 border rounded"
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option value="">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
