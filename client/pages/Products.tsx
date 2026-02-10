import { useState } from "react";
import Footer from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@shared/api";

function stripHtmlTags(html: string): string {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={`/products/${product.name}?category=${product.category}`}
      className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/400x300?text=Product+Image";
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-lufga text-[16px] lg:text-[18px] font-bold text-[#8B1C52] mb-2">
          {product.name}
        </h3>
        <p className="font-lufga text-[12px] lg:text-[13px] text-[#666666] mb-3">
          <span className="font-semibold">Composition:</span>{" "}
          {product.composition.trim()}
        </p>
        <p className="font-lufga text-[12px] lg:text-[13px] text-[#999999] leading-[22px] mb-3">
          <span className="font-semibold">Size:</span> {product.size}
        </p>
        <p className="font-lufga text-[12px] lg:text-[13px] text-[#999999]">
          <span className="font-semibold">Package:</span> {product.package_type}
        </p>
        {product.description && (
          <div className="mt-3 pt-3 border-t border-gray-200 text-[12px] text-[#666666] line-clamp-3">
            {stripHtmlTags(product.description)}
          </div>
        )}
      </div>
    </a>
  );
}

export default function Products() {
  const { products, categories, productsByCategory, isLoading, error } =
    useProducts();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Get filtered products based on active category
  const filteredProducts: Product[] =
    activeCategory === "All"
      ? products
      : activeCategory
        ? productsByCategory[activeCategory] || []
        : [];

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
            <a
              href="/"
              className="text-black hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-black hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/products"
              className="text-[#8B1C52] hover:text-primary transition-colors font-semibold"
            >
              Our Products
            </a>
            <a
              href="/blogs"
              className="text-black hover:text-primary transition-colors"
            >
              Blogs
            </a>
            <a
              href="/pharma-franchise"
              className="text-black hover:text-primary transition-colors"
            >
              Pharma Franchise
            </a>
            <a
              href="/third-party-manufacturing"
              className="text-black hover:text-primary transition-colors"
            >
              Third Party Manufacturing
            </a>
            <a
              href="/gallery"
              className="text-black hover:text-primary transition-colors"
            >
              Gallery
            </a>
          </nav>

          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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

      {/* Loading State */}
      {isLoading && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B1C52]"></div>
              <p className="mt-4 text-gray-600 font-lufga">
                Loading products...
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-lufga mb-2">
                Error loading products
              </p>
              <p className="text-red-500 text-sm font-lufga">
                {error instanceof Error
                  ? error.message
                  : "Failed to fetch products from the server"}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      {!isLoading && categories.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {/* All Tab */}
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-6 lg:px-8 py-2 lg:py-3 rounded-full font-lufga text-[13px] lg:text-[14px] font-semibold transition-all duration-200 ${
                  activeCategory === "All"
                    ? "bg-[#8B1C52] text-white shadow-md"
                    : "bg-white text-black border border-gray-200 hover:border-[#8B1C52]"
                }`}
              >
                All ({products.length})
              </button>

              {/* Category Tabs */}
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
                  {category} ({productsByCategory[category]?.length || 0})
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      {!isLoading && !error && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-lufga text-lg">
                  No products found in this category
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
