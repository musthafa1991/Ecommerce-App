import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryGrid from "@/components/website-view/CategoryGrid";
import hero1 from "../../assets/image/heroImage/hero1.jpg";
import hero2 from "../../assets/image/heroImage/hero2.jpg";
import hero3 from "../../assets/image/heroImage/hero3.jpg";
const heroImages = [hero1, hero2, hero3];

const SiteHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section className="hero bg-cover bg-center text-black relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${heroImages[currentSlide]})`,
          }}
        ></div>
        <div className="hero-content relative container mx-auto text-center py-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg text-white mb-6">
            Find the best products for every need
          </p>
          <Link
            to="/shop/listing"
            className="btn-primary px-4 py-2 text-white bg-blue-600 rounded-md"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="categories container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Shop by Category
        </h2>
        <CategoryGrid />
      </section>

      <section className="featured-products container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h2>
      </section>

      <section className="trending-products container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Now</h2>
      </section>

      <section className="testimonials bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg mb-6">"Amazing products and service!"</p>
        </div>
      </section>

      <section className="newsletter bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-4">
            Sign up for our newsletter to get the latest updates and offers.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full max-w-md rounded"
            />
            <button
              type="submit"
              className="btn-primary px-4 py-2 bg-blue-700 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SiteHome;
