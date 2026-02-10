import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px] h-[116px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f5d8be47c68650aaf5f848c7a1e6d67cb6b70587?width=412" 
              alt="Biodermis" 
              className="h-[53px] w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-lufga text-[14px] font-medium">
            <a href="/" className="text-black hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-black hover:text-primary transition-colors">About</a>
            <a href="/products" className="text-black hover:text-primary transition-colors">Our Products</a>
            <a href="/blogs" className="text-black hover:text-primary transition-colors">Blogs</a>
            <a href="/pharma-franchise" className="text-black hover:text-primary transition-colors">Pharma Franchise</a>
            <a href="/third-party-manufacturing" className="text-black hover:text-primary transition-colors">Third Party Manufacturing</a>
            <a href="/gallery" className="text-black hover:text-primary transition-colors">Gallery</a>
          </nav>

          {/* Mobile menu button */}
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
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 w-[350px] h-[350px] bg-white/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-regals text-[48px] lg:text-[56px] leading-[1.2] mb-6 text-black font-bold">
              Our Story of<br />
              <span className="text-[#8B1C52]">Natural Beauty</span>
            </h1>
            <p className="font-lufga text-[15px] lg:text-[16px] text-[#666666] leading-[26px]">
              Founded on the belief that nature holds the key to radiant skin, we've spent over 15 years perfecting the art of natural skincare.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-20">
            {/* Stat 1 */}
            <div className="bg-white rounded-[24px] p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <h3 className="font-lufga text-[36px] lg:text-[42px] text-[#8B1C52] font-bold mb-2">50K+</h3>
              <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] font-medium">Happy Customers</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-[24px] p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <h3 className="font-lufga text-[36px] lg:text-[42px] text-[#8B1C52] font-bold mb-2">15+</h3>
              <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] font-medium">Years Experience</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-[24px] p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <h3 className="font-lufga text-[36px] lg:text-[42px] text-[#8B1C52] font-bold mb-2">100%</h3>
              <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] font-medium">Natural Ingredients</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-[24px] p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <h3 className="font-lufga text-[36px] lg:text-[42px] text-[#8B1C52] font-bold mb-2">25+</h3>
              <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] font-medium">Skincare Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              {/* Main product image card */}
              <div className="rounded-[28px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] aspect-[3/4] bg-gradient-to-b from-[#E8D4C4] to-[#D4BFB0]">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=650&fit=crop"
                  alt="Skincare product"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge - Science Meets Nature */}
              <div className="absolute bottom-8 right-0 lg:right-[-50px] bg-[#8B1C52] text-white rounded-[20px] px-6 py-4 shadow-[0_8px_24px_rgba(139,28,82,0.3)] flex items-center gap-3 max-w-xs">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26H22L17.82 12.44L20.91 18.71L12 14.53L3.09 18.71L6.18 12.44L2 8.26H8.91L12 2Z"/>
                  </svg>
                </div>
                <span className="font-lufga text-[15px] font-semibold">Science Meets Nature</span>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="font-regals text-[28px] lg:text-[32px] leading-[1.3] mb-8 text-black font-bold">
                Our Mission: Pure, Effective,<br />Honest Skincare
              </h2>

              <p className="font-lufga text-[15px] text-[#666666] leading-[26px] mb-6 font-normal">
                At Biodermis, we believe that the most powerful skincare solutions come from nature itself. Our mission is to harness the incredible healing properties of plants and botanicals, backed by rigorous scientific research.
              </p>

              <p className="font-lufga text-[15px] text-[#666666] leading-[26px] mb-10 font-normal">
                Every ingredient we choose is selected for its proven benefits and safety profile. We never compromise on quality, and we're completely transparent about what goes into every bottle.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-[14px] bg-[#8B1C52] text-white font-lufga text-[15px] font-semibold rounded-[12px] hover:bg-[#7a1849] transition-colors">
                  View Our Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center px-8 py-[14px] border-2 border-[#8B1C52] text-[#8B1C52] font-lufga text-[15px] font-semibold rounded-[12px] hover:bg-[#FDECEF] transition-colors">
                  <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <h2 className="font-regals text-[36px] lg:text-[42px] leading-[1.3] mb-6 text-black font-bold">
              What Sets Us Apart
            </h2>
            <p className="font-lufga text-[15px] text-[#666666] leading-[26px] font-normal">
              Our commitment to excellence goes beyond just creating great products. It's about building trust, ensuring safety, and protecting our planet.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Feature 1 - 100% Natural */}
            <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-center">
              <div className="w-16 h-16 mx-auto mb-8 bg-[#FDECEF] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B1C52]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l1.41 1.41L16 3.17V2h2v3.82l2.59.59L23 8.59 21.59 10 23 11.41l-2.41.81-2.59.59V16h-2v-1.17l-2.59-.59L12 14.81l-1.41 1.41L8 14.83V16H6v-3.82l-2.59-.59L1 10.41 2.41 9 1 7.59l2.41-.81 2.59-.59V2h2v1.17l2.59.59L12 2z"/>
                </svg>
              </div>
              <h3 className="font-lufga text-[18px] mb-4 text-black font-bold">100% Natural</h3>
              <p className="font-lufga text-[14px] text-[#666666] leading-[22px] font-normal">
                Only pure, plant-based ingredients sourced ethically from nature
              </p>
            </div>

            {/* Feature 2 - No Side Effects */}
            <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-center">
              <div className="w-16 h-16 mx-auto mb-8 bg-[#FDECEF] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B1C52]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 className="font-lufga text-[18px] mb-4 text-black font-bold">No Side Effects</h3>
              <p className="font-lufga text-[14px] text-[#666666] leading-[22px] font-normal">
                Gentle formulas tested for all skin types with zero harsh chemicals
              </p>
            </div>

            {/* Feature 3 - Dermatologist Tested */}
            <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-center">
              <div className="w-16 h-16 mx-auto mb-8 bg-[#FDECEF] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B1C52]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.29 7.78-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <h3 className="font-lufga text-[18px] mb-4 text-black font-bold">Dermatologist Tested</h3>
              <p className="font-lufga text-[14px] text-[#666666] leading-[22px] font-normal">
                Every product is clinically tested and approved by skin experts
              </p>
            </div>

            {/* Feature 4 - Sustainable */}
            <div className="bg-white rounded-[24px] p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-center">
              <div className="w-16 h-16 mx-auto mb-8 bg-[#FDECEF] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B1C52]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-0.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-0.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="font-lufga text-[18px] mb-4 text-black font-bold">Sustainable</h3>
              <p className="font-lufga text-[14px] text-[#666666] leading-[22px] font-normal">
                Eco-friendly packaging and sustainable sourcing practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
