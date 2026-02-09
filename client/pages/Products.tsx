import { useState } from "react";
import Footer from "@/components/Footer";

type Category = "All" | "Tablet" | "Softgel Capsule" | "Syrup" | "Promotional Item";

interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Advanced Multi-Vitamin Tablet",
    description: "Complete daily nutrition in convenient tablet form",
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0d?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Omega-3 Softgel Capsules",
    description: "Premium fish oil for heart and brain health",
    category: "Softgel Capsule",
    image: "https://images.unsplash.com/photo-1444391686981-461bbdba7137?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Children's Vitamin C Syrup",
    description: "Delicious orange-flavored immune support",
    category: "Syrup",
    image: "https://images.unsplash.com/photo-1563693869-ab89b988b588?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Calcium Tablets",
    description: "Essential calcium for strong bones",
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576091160671-112d4fbbc9f1?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Probiotic Softgels",
    description: "Support digestive and immune health",
    category: "Softgel Capsule",
    image: "https://images.unsplash.com/photo-1585461160633-ed0eab5f72f1?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Cough Relief Syrup",
    description: "Natural honey-based cough suppressant",
    category: "Syrup",
    image: "https://images.unsplash.com/photo-1579154204601-01d5d6f3838b?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Branded Water Bottle",
    description: "Premium stainless steel water bottle",
    category: "Promotional Item",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de60e?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Health Journal",
    description: "Track your wellness journey",
    category: "Promotional Item",
    image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=400&fit=crop"
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Tablet", "Softgel Capsule", "Syrup", "Promotional Item"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px] h-[116px] flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f5d8be47c68650aaf5f848c7a1e6d67cb6b70587?width=412" 
              alt="Biodermis" 
              className="h-[53px] w-auto"
            />
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 font-lufga text-[14px] font-medium">
            <a href="/" className="text-black hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-black hover:text-primary transition-colors">About</a>
            <a href="/products" className="text-[#8B1C52] hover:text-primary transition-colors font-semibold">Our Products</a>
            <a href="#blogs" className="text-black hover:text-primary transition-colors">Blogs</a>
            <a href="/pharma-franchise" className="text-black hover:text-primary transition-colors">Pharma Franchise</a>
            <a href="#manufacturing" className="text-black hover:text-primary transition-colors">Third Party Manufacturing</a>
            <a href="#gallery" className="text-black hover:text-primary transition-colors">Gallery</a>
          </nav>

          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[116px] pb-20 lg:pb-24 bg-[#FDECEF] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="text-center">
            <h1 className="font-regals text-[48px] lg:text-[56px] leading-[1.2] mb-8">
              Our <span className="text-[#8B1C52]">Products</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 lg:px-8 py-2 lg:py-3 rounded-full font-lufga text-[13px] lg:text-[14px] font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#8B1C52] text-white shadow-md"
                    : "bg-white text-black border border-gray-200 hover:border-[#8B1C52]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-lufga text-[16px] lg:text-[18px] font-bold text-[#8B1C52] mb-2">
                    {product.name}
                  </h3>
                  <p className="font-lufga text-[13px] lg:text-[14px] text-[#999999] leading-[22px]">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
