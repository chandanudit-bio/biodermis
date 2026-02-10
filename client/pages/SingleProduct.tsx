import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@shared/api";

function stripHtmlTags(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { products, productsByCategory, categories, isLoading } = useProducts();
  
  const [activeSubcategory, setActiveSubcategory] = useState<string>("");
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<string[]>([]);

  // Find current product and get unique subcategories from same category
  useEffect(() => {
    if (products.length === 0) return;

    // Find the product matching the ID (product name from URL)
    const product = products.find(p => p.name === id || p.id === id);
    setCurrentProduct(product || null);

    if (category && productsByCategory[category]) {
      // Get unique subcategories for this category
      const uniqueSubcats = Array.from(
        new Set(productsByCategory[category].map(p => p.subcategory_name).filter(Boolean))
      ).sort();
      setSubcategories(uniqueSubcats);
      
      if (uniqueSubcats.length > 0 && !activeSubcategory) {
        setActiveSubcategory(uniqueSubcats[0]);
      }

      // Get related products
      let related = productsByCategory[category];
      if (activeSubcategory) {
        related = related.filter(p => p.subcategory_name === activeSubcategory);
      }
      setRelatedProducts(related);
    }
  }, [products, category, activeSubcategory, id]);

  const handleEnquire = () => {
    const subject = `Inquiry about ${currentProduct?.name}`;
    const body = `Hi,\n\nI am interested in the product: ${currentProduct?.name}\n\nComposition: ${currentProduct?.composition}\nSize: ${currentProduct?.size}\n\nPlease provide more information.\n\nThank you`;
    window.location.href = `mailto:info@biodermis.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px] h-[116px] flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f5d8be47c68650aaf5f848c7a1e6d67cb6b70587?width=412" 
                alt="Biodermis" 
                className="h-[53px] w-auto"
              />
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 font-lufga text-[14px] font-medium">
            <a href="/" className="text-black hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-black hover:text-primary transition-colors">About</a>
            <a href="/products" className="text-[#8B1C52] hover:text-primary transition-colors font-semibold">Our Products</a>
            <a href="/blogs" className="text-black hover:text-primary transition-colors">Blogs</a>
            <a href="/pharma-franchise" className="text-black hover:text-primary transition-colors">Pharma Franchise</a>
            <a href="/third-party-manufacturing" className="text-black hover:text-primary transition-colors">Third Party Manufacturing</a>
            <a href="/gallery" className="text-black hover:text-primary transition-colors">Gallery</a>
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
              <span className="text-[#8B1C52]">{category || "Products"}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Subcategory Tabs */}
      {subcategories.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {subcategories.map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setActiveSubcategory(subcat)}
                  className={`px-6 lg:px-8 py-2 lg:py-3 rounded-full font-lufga text-[13px] lg:text-[14px] font-semibold transition-all duration-200 ${
                    activeSubcategory === subcat
                      ? "bg-[#8B1C52] text-white shadow-md"
                      : "bg-white text-black border border-gray-200 hover:border-[#8B1C52]"
                  }`}
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loading State */}
      {isLoading && (
        <section className="py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B1C52]"></div>
              <p className="mt-4 text-gray-600 font-lufga">Loading product...</p>
            </div>
          </div>
        </section>
      )}

      {/* Product Detail Section */}
      {!isLoading && currentProduct && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-[450px] h-[350px] lg:h-[400px] bg-gray-100 rounded-[20px] overflow-hidden shadow-lg flex items-center justify-center">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/450x400?text=Product+Image';
                    }}
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="flex flex-col justify-start">
                <h1 className="font-regals text-[32px] lg:text-[42px] leading-[1.2] text-black mb-6">
                  {currentProduct.name}
                </h1>

                {/* Composition */}
                <div className="mb-6">
                  <h3 className="text-[#8B1C52] font-lufga text-[13px] lg:text-[14px] font-bold uppercase tracking-wide mb-2">
                    Composition
                  </h3>
                  <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                    {currentProduct.composition.trim()}
                  </p>
                </div>

                {/* Category and Size */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-[#8B1C52] font-lufga text-[13px] lg:text-[14px] font-bold uppercase tracking-wide mb-2">
                      Category
                    </h3>
                    <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666]">
                      {currentProduct.category}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#8B1C52] font-lufga text-[13px] lg:text-[14px] font-bold uppercase tracking-wide mb-2">
                      Size
                    </h3>
                    <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666]">
                      {currentProduct.size}
                    </p>
                  </div>
                </div>

                {/* Package Type */}
                {currentProduct.package_type && (
                  <div className="mb-6">
                    <h3 className="text-[#8B1C52] font-lufga text-[13px] lg:text-[14px] font-bold uppercase tracking-wide mb-2">
                      Package Type
                    </h3>
                    <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666]">
                      {currentProduct.package_type}
                    </p>
                  </div>
                )}

                {/* Description */}
                {currentProduct.description && (
                  <div className="mb-8">
                    <h3 className="text-[#8B1C52] font-lufga text-[13px] lg:text-[14px] font-bold uppercase tracking-wide mb-3">
                      Description
                    </h3>
                    <div className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed prose prose-sm max-w-none">
                      {stripHtmlTags(currentProduct.description)}
                    </div>
                  </div>
                )}

                {/* Enquire Button */}
                <button
                  onClick={handleEnquire}
                  className="bg-[#8B1C52] hover:bg-[#6B1640] text-white font-lufga font-bold px-12 py-3 rounded-full transition-colors duration-200 w-fit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products Section */}
      {!isLoading && relatedProducts.length > 1 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <h2 className="font-regals text-[32px] lg:text-[42px] leading-[1.2] text-center mb-12">
              Other <span className="text-[#8B1C52]">Products</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.filter(p => p.id !== currentProduct?.id).slice(0, 6).map((product) => (
                <a
                  key={product.id}
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
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Product';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-lufga text-[16px] lg:text-[18px] font-bold text-[#8B1C52] mb-2">
                      {product.name}
                    </h3>
                    <p className="font-lufga text-[12px] lg:text-[13px] text-[#666666] leading-[22px] line-clamp-3">
                      {product.composition.trim()}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {!isLoading && !currentProduct && (
        <section className="py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
              <h3 className="text-red-600 font-lufga text-xl mb-2">Product Not Found</h3>
              <p className="text-red-500 text-sm font-lufga mb-6">
                Sorry, the product you're looking for doesn't exist.
              </p>
              <a
                href="/products"
                className="bg-[#8B1C52] hover:bg-[#6B1640] text-white font-lufga font-bold px-8 py-3 rounded-full transition-colors duration-200 inline-block"
              >
                Back to Products
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
