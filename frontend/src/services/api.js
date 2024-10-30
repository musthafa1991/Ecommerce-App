const fetchhardCodedProducts = async () => {
  const sampleProducts = [
    // Men Category

    {
      id: 1,
      name: "Men's Casual Jacket",
      category: "Men",
      description: "Stylish and warm casual jacket for men.",
      brand: "Zara",
      image:
        "https://www.voganow.com/cdn/shop/files/VNGJ-F003-018-_1_copy.jpg?v=1702103857&width=493",
      price: 60,
      salePrice: 50,
      totalStock: 30,
    },
    {
      id: 2,
      name: "Men's Running Shoes",
      category: "Men",
      description: "Comfortable running shoes for daily wear.",
      brand: "Nike",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw88l-z8oenXfErtWPRbraLJdqOEWh2NRyw&s",
      price: 100,
      salePrice: 90,
      totalStock: 20,
    },
    {
      id: 3,
      name: "Men's Formal Shirt",
      category: "Men",
      description: "Elegant formal shirt for office wear.",
      brand: "Tommy Hilfiger",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20231012/wiv9/65282693ddf77915193817ca/-473Wx593H-469514966-blue-MODEL.jpg",
      price: 40,
      salePrice: 35,
      totalStock: 50,
    },
    {
      id: 4,
      name: "Men's Jeans",
      category: "Men",
      description: "Slim-fit jeans for a modern look.",
      brand: "Levi's",
      image:
        "https://spykar.com/cdn/shop/products/peHY7weNzw-8905566247697_8.webp?v=1686566786",
      price: 45,
      salePrice: 40,
      totalStock: 40,
    },
    {
      id: 5,
      name: "Men's Hoodie",
      category: "Men",
      description: "Comfortable hoodie for casual outings.",
      brand: "Adidas",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/586704/01/fnd/IND/fmt/png/Small-Logo-Full-Zip-Men's-Hoodie",
      price: 55,
      salePrice: 48,
      totalStock: 25,
    },
    {
      id: 6,
      name: "Men's Watch",
      category: "Men",
      description: "Elegant watch to complete your outfit.",
      brand: "Fossil",
      image:
        "https://cleanshopzone.in/cdn/shop/products/M1_grande.jpg?v=1685238946",
      price: 150,
      salePrice: 120,
      totalStock: 15,
    },

    // Women Category

    {
      id: 7,
      name: "Women's Summer Dress",
      category: "Women",
      description: "Light and breezy dress for warm days.",
      brand: "H&M",
      image:
        "https://images.merstatic.com/imgcache/resized/images/offer/2017/04/27//3(21).jpg",
      price: 30,
      salePrice: 25,
      totalStock: 45,
    },
    {
      id: 8,
      name: "Women's Handbag",
      category: "Women",
      description: "Stylish handbag for daily use.",
      brand: "Gucci",
      image: "https://m.media-amazon.com/images/I/61BIW8HrgoL._AC_UY1000_.jpg",
      price: 200,
      salePrice: 180,
      totalStock: 10,
    },
    {
      id: 9,
      name: "Women's Sandals",
      category: "Women",
      description: "Comfortable sandals for a casual look.",
      brand: "Aldo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfURpd8KK56lInrBQxoBLtEixjmNbWZQt3g&s",
      price: 40,
      salePrice: 35,
      totalStock: 20,
    },
    {
      id: 10,
      name: "Women's Sunglasses",
      category: "Women",
      description: "Protective and stylish sunglasses.",
      brand: "Ray-Ban",
      image:
        "https://images-cdn.ubuy.co.in/656ec0b50d81bf569b60054a-joopin-polarized-womens-sunglasses.jpg",
      price: 120,
      salePrice: 100,
      totalStock: 25,
    },
    {
      id: 11,
      name: "Women's Necklace",
      category: "Women",
      description: "Elegant necklace to complement any outfit.",
      brand: "Tiffany & Co.",
      image:
        "https://silverpalace.in/uploads/products/img-14663896761b045d2c11ab3.87697156.jpg",
      price: 250,
      salePrice: 220,
      totalStock: 8,
    },
    {
      id: 12,
      name: "Women's Perfume",
      category: "Women",
      description: "Signature fragrance for women.",
      brand: "Chanel",
      image:
        "https://carltonlondon.co.in/cdn/shop/files/2_cbbb36aa-4b9a-4d05-8945-0bbcebdaf7a0.jpg?v=1705483116",
      price: 85,
      salePrice: 75,
      totalStock: 30,
    },

    // Kids Category

    {
      id: 13,
      name: "Kids' T-shirt",
      category: "Kids",
      description: "Bright and fun T-shirt for kids.",
      brand: "Carter's",
      image:
        "https://adimanav.com/cdn/shop/products/chote-karyakarte.jpg?v=1703577117",
      price: 15,
      salePrice: 12,
      totalStock: 60,
    },
    {
      id: 14,
      name: "Kids' Shoes",
      category: "Kids",
      description: "Comfortable shoes for active kids.",
      brand: "Skechers",
      image:
        "https://ae-pic-a1.aliexpress-media.com/kf/Sc062adb144874c09b68b24a429143b60N/Spiderman-LED-Light-Kids-Shoes-Boys-and-Girls-Light-Kids-Light-Kids-Sports-Shoes-Mesh-Sports.jpg_640x640Q90.jpg_.webp",
      price: 30,
      salePrice: 25,
      totalStock: 40,
    },
    {
      id: 15,
      name: "Kids' Backpack",
      category: "Kids",
      description: "Cute backpack for school.",
      brand: "Nike",
      image: "https://m.media-amazon.com/images/I/71B7vDvVprL._AC_UY1100_.jpg",
      price: 25,
      salePrice: 20,
      totalStock: 35,
    },
    {
      id: 16,
      name: "Kids' Toy Car",
      category: "Kids",
      description: "Fun toy car for kids to enjoy.",
      brand: "Hot Wheels",
      image:
        "https://www.patoys.in/cdn/shop/files/patoys-kids-ride-on-jeep-four-wheel-drive-ride-ons-44-big-size-toy-car-wn1166-527880.jpg?v=1721704920",
      price: 10,
      salePrice: 8,
      totalStock: 50,
    },
    {
      id: 17,
      name: "Kids' Pajamas",
      category: "Kids",
      description: "Soft and cozy pajamas for bedtime.",
      brand: "The Children's Place",
      image:
        "https://cdni.llbean.net/is/image/wim/510853_51692_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/510853_51692_41",
      price: 20,
      salePrice: 15,
      totalStock: 25,
    },
    {
      id: 18,
      name: "Kids' Puzzle",
      category: "Kids",
      description: "Colorful puzzle for learning fun.",
      brand: "Melissa & Doug",
      image:
        "https://5.imimg.com/data5/VJ/GP/WF/SELLER-7577666/-puzzle-toys.jpg",
      price: 12,
      salePrice: 10,
      totalStock: 40,
    },

    // Mobile Category

    {
      id: 19,
      name: "iPhone 14",
      category: "Mobile",
      description: "Latest iPhone with amazing features.",
      brand: "Apple",
      image:
        "https://www.maplestore.in/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN_43b0347b-c716-4297-b1d4-a15af53ad270.jpg?v=1701815316&width=1920",
      price: 999,
      salePrice: 949,
      totalStock: 20,
    },
    {
      id: 20,
      name: "Galaxy S21",
      category: "Mobile",
      description: "Flagship phone with high performance.",
      brand: "Samsung",
      image:
        "https://ohlocal-media.s3.amazonaws.com/media/SM123057SA_mBXZ1cf.jpg",
      price: 850,
      salePrice: 800,
      totalStock: 15,
    },
    {
      id: 21,
      name: "Pixel 6",
      category: "Mobile",
      description: "Smooth and fast Google phone.",
      brand: "Google",
      image:
        "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FGoogle_Pixel_6_df473f3b95.jpg&w=3840&q=75",
      price: 700,
      salePrice: 680,
      totalStock: 18,
    },
    {
      id: 22,
      name: "OnePlus 9",
      category: "Mobile",
      description: "Reliable smartphone with fast charging.",
      brand: "OnePlus",
      image:
        "https://www.91-img.com/gallery_images_uploads/3/6/3613ec8a4f49b05f393a744b50e35a1b2b9918f0.jpg?tr=h-271,c-at_max,q-80,pr-true",
      price: 650,
      salePrice: 600,
      totalStock: 25,
    },
    {
      id: 23,
      name: "Redmi Note 11",
      category: "Mobile",
      description: "Affordable with great features.",
      brand: "Xiaomi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94vJCUOiio2ZK82sRcUC24h6p4wE8NmXEjg&s",
      price: 300,
      salePrice: 280,
      totalStock: 30,
    },
    {
      id: 24,
      name: "Moto G Stylus",
      category: "Mobile",
      description: "Budget-friendly with stylus support.",
      brand: "Motorola",
      image:
        "https://images-cdn.ubuy.co.in/665943cd6e634b21cd675483-moto-g-stylus-5g-2024-unlocked.jpg",
      price: 250,
      salePrice: 220,
      totalStock: 40,
    },

    // Toys Category

    {
      id: 25,
      name: "Building Blocks Set",
      category: "Toys",
      description: "Educational blocks for creativity.",
      brand: "Lego",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnb2OGH6AGrmg1u2-RxfEC-qFuOnhopNbmQ&s",
      price: 40,
      salePrice: 35,
      totalStock: 50,
    },

    // Footwear Category

    {
      id: 26,
      name: "Running Sneakers",
      category: "Footwear",
      description: "Breathable sneakers for comfort.",
      brand: "Nike",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2251.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
      price: 80,
      salePrice: 75,
      totalStock: 25,
    },
    // More products for Footwear category...
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(sampleProducts), 500);
  });
};

export default fetchhardCodedProducts;

import { getAuthHeaders } from "@/lib/helper";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    console.log("token in api servie", getAuthHeaders());

    const response = await axios.post(
      `${API_URL}/products`,
      productData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    console.log("token in api servie", productId);

    const response = await axios.put(
      `${API_URL}/products/${productId}`,
      productData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export async function deleteProduct(productId) {
  try {
    const response = await axios.delete(
      `${API_URL}/products/${productId}`,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}

export async function fetchAllUsers() {
  try {
    const response = await axios.get(
      `${API_URL}/users/getAllUsers`,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
