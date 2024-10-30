import React from "react";
import menImg from "../../assets/image/categories/men.jpg";
import womenImg from "../../assets/image/categories/women.jpg";
import kidsImg from "../../assets/image/categories/kids.jpg";
import mobileImg from "../../assets/image/categories/mobile.jpg";
import toysImg from "../../assets/image/categories/toys.jpg";
import footwearImg from "../../assets/image/categories/footwear.jpg";
import { Link } from "react-router-dom";
const categories = [
  { id: 1, name: "Men", image: menImg },
  { id: 2, name: "Women", image: womenImg },
  { id: 3, name: "Kids", image: kidsImg },
  { id: 4, name: "Mobile", image: mobileImg },
  { id: 5, name: "toys", image: toysImg },
  {
    id: 6,
    name: "Footwear",
    image: footwearImg,
  },
];

const CategoryGrid = () => {
  return (
    <Link to={`/shop/listing`} className="block">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-bold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CategoryGrid;
