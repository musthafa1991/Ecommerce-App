import React, { useState, useEffect } from "react";

import ProductGrid from "../../components/website-view/ProductGrid";
import FilterPanel from "../../components/website-view/FilterPanel";
import fetchhardCodedProducts from "../../services/api";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchhardCodedProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    loadProducts();
  }, []);

  const handleCategoryChange = (category) => {
    const updatedProducts = products.filter(
      (product) => category === "" || product.category === category
    );
    setFilteredProducts(updatedProducts);
  };

  const handleBrandChange = (brand) => {
    const updatedProducts = products.filter(
      (product) => brand === "" || product.brand === brand
    );
    setFilteredProducts(updatedProducts);
  };

  const handlePriceChange = (priceRange) => {
    const [min, max] = priceRange.split("-").map(Number);
    const updatedProducts = products.filter(
      (product) => !priceRange || (product.price >= min && product.price <= max)
    );
    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="flex">
      {/* Filter Panel */}
      <FilterPanel
        onCategoryChange={handleCategoryChange}
        onBrandChange={handleBrandChange}
        onPriceChange={handlePriceChange}
      />

      {/* Product Grid */}
      <div className="w-3/4">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ListingPage;
