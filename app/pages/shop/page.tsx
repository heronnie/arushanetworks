'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "HD CCTV Camera System",
    description: "High-definition surveillance camera with night vision and motion detection",
    image: "/products/cctv.webp",
    category: "Security",
    price: "Contact for price"
  },
  {
    id: 2,
    name: "Automatic Sliding Gate",
    description: "Smart automatic gate system with remote control and safety sensors",
    image: "/products/auto-gate.webp",
    category: "Gates",
    price: "Contact for price"
  },
  {
    id: 3,
    name: "Mikrotik L009UiGS-RM Ethernet Router",
    description: "High-performance router for reliable internet connectivity",
    image: "/products/l009rm.webp",
    category: "Networking",
    price: "Contact for price"
  },
  {
    id: 4,
    name: "Mikrotik L009UiGS-IN Wireless Router",
    description: "High-performance wireless router for reliable internet connectivity",
    image: "/products/l009in.webp",
    category: "Networking",
    price: "Contact for price"
  },
  {
    id: 5,
    name: "4K PTZ Camera",
    description: "4K Pan-Tilt-Zoom camera with remote control and advanced tracking features",
    image: "/products/ptz-camera.webp",
    category: "Security",
    price: "Contact for price"
  },
  {
    id: 6,
    name: "Biometric Access Control System",
    description: "Secure access system using fingerprint and facial recognition technology",
    image: "/products/anviz.webp",
    category: "Security",
    price: "Contact for price"
  },
  // Add more products as needed
];

const categories = ["All", "Security", "Gates", "Networking"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const whatsappNumber = "+255758100137"; // Replace with your actual WhatsApp number

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsAppInquiry = (product: Product) => {
    const message = `Hi, I'm interested in the ${product.name}. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Browse our selection of high-quality security and networking products. 
            Contact us via WhatsApp for pricing and detailed information.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 
                ${selectedCategory === category
                  ? 'bg-yellow-400 text-blue-900 font-semibold'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-blue-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-700 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden bg-blue-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-blue-100 mb-4">{product.description}</p>
                <p className="text-yellow-400 font-semibold mb-4">{product.price}</p>
                <button
                  onClick={() => handleWhatsAppInquiry(product)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.016 23.95l5.065-2.212A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.396 0-4.615-.723-6.46-1.962l-4.036 1.762 1.725-3.968A9.933 9.933 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.75-13.5c-.297-.147-1.758-.866-2.031-.965-.273-.098-.473-.147-.672.147-.2.295-.771.964-.945 1.162-.174.197-.348.222-.645.075-.297-.148-1.255-.463-2.39-1.474-.883-.788-1.479-1.76-1.653-2.057-.173-.297-.018-.457.13-.605.134-.133.298-.347.447-.52.149-.174.198-.298.297-.497.098-.198.05-.371-.025-.52-.075-.147-.67-1.621-.92-2.221-.242-.579-.487-.502-.67-.51a12.513 12.513 0 00-.572-.01c-.198 0-.52.074-.792.371-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.273-.198-.57-.347z"/>
                  </svg>
                  Inquire via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}