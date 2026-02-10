import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function ThirdPartyManufacturing() {
  const features = [
    {
      title: "500+ Products",
      description: "Wide range of pharmaceutical formulations and products"
    },
    {
      title: "ISO & GMP Certified",
      description: "World-class facilities meeting international standards"
    },
    {
      title: "Quick Turnaround",
      description: "Delivery in fewer than 30 days"
    },
    {
      title: "Expert Team",
      description: "Experienced professionals with proven track record"
    }
  ];

  const benefits = [
    {
      icon: "✓",
      title: "Contract Manufacturing",
      description: "Comprehensive pharmaceutical contract manufacturing services with complete quality assurance"
    },
    {
      icon: "✓",
      title: "Single-Window Solution",
      description: "One-stop solution for all your third-party manufacturing needs and requirements"
    },
    {
      icon: "✓",
      title: "PCD Pharma Services",
      description: "Help you establish your own PCD pharma company with our expertise"
    },
    {
      icon: "✓",
      title: "Custom Manufacturing",
      description: "Create products with your logo, design, and brand name"
    }
  ];

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
            <a href="/products" className="text-black hover:text-primary transition-colors">Our Products</a>
            <a href="/blogs" className="text-black hover:text-primary transition-colors">Blogs</a>
            <a href="/pharma-franchise" className="text-black hover:text-primary transition-colors">Pharma Franchise</a>
            <a href="/third-party-manufacturing" className="text-[#8B1C52] hover:text-primary transition-colors font-semibold">Third Party Manufacturing</a>
            <a href="/gallery" className="text-black hover:text-primary transition-colors">Gallery</a>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav currentPage="/third-party-manufacturing" />
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
              Third-Party <span className="text-[#8B1C52]">Manufacturing</span>
            </h1>
            <p className="font-lufga text-[16px] lg:text-[18px] text-[#666666] max-w-3xl mx-auto">
              Biodermis Pharma is your trusted partner for comprehensive pharmaceutical contract manufacturing with ISO & GMP certified facilities and 500+ products
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#FDECEF] rounded-[15px] p-6 lg:p-8 text-center">
                <h3 className="font-lufga text-[16px] lg:text-[18px] font-bold text-[#8B1C52] mb-2">
                  {feature.title}
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-regals text-[32px] lg:text-[42px] leading-[1.3] text-black mb-6">
                Why Choose <span className="text-[#8B1C52]">Biodermis Pharma?</span>
              </h2>
              
              <div className="space-y-4">
                <p className="font-lufga text-[14px] lg:text-[15px] text-[#333333] leading-relaxed">
                  Biodermis Pharma stands as the greatest alternative for third-party production with wide knowledge and experience in the pharmaceutical field. We have established strong goodwill in third-party pharmaceutical manufacturing.
                </p>
                
                <p className="font-lufga text-[14px] lg:text-[15px] text-[#333333] leading-relaxed">
                  Our commitment to excellence and quick turnaround time of fewer than 30 days makes us the ideal choice for companies seeking a reliable third-party manufacturing partner.
                </p>

                <p className="font-lufga text-[14px] lg:text-[15px] text-[#333333] leading-relaxed">
                  We understand that pharmaceutical manufacturing requires ongoing effort, master knowledge, and a dedicated approach. Our team has demonstrated the expertise to generate incredible results in the pharma industry.
                </p>
              </div>

              <button className="mt-8 bg-[#8B1C52] hover:bg-[#6B1640] text-white font-lufga font-bold px-12 py-3 rounded-full transition-colors duration-200">
                Get in Touch
              </button>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-[#FDECEF] to-[#f5d7e1] rounded-[20px] p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#8B1C52] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.08-2.61-1.41 1.41L9.5 15.3l4.25-5.41z"/>
                    </svg>
                  </div>
                  <p className="font-lufga text-[14px] text-[#666666]">Manufacturing Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="text-center mb-16">
            <h2 className="font-regals text-[32px] lg:text-[42px] leading-[1.3] text-black mb-4">
              Our <span className="text-[#8B1C52]">Services</span>
            </h2>
            <p className="font-lufga text-[14px] lg:text-[15px] text-[#666666] max-w-2xl mx-auto">
              Comprehensive solutions for all your third-party manufacturing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 lg:p-8 bg-gray-50 rounded-[15px] hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#8B1C52] text-white font-bold text-xl">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-[#FDECEF]">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <h2 className="font-regals text-[32px] lg:text-[42px] leading-[1.3] text-center text-black mb-12">
            What Sets Us <span className="text-[#8B1C52]">Apart</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-[#8B1C52] mb-3">
                  Cutting-Edge Innovation
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  We adhere to cutting-edge innovation and tight standards in our manufacturing processes to ensure the best quality products.
                </p>
              </div>

              <div>
                <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-[#8B1C52] mb-3">
                  Certified Facilities
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  Our ISO & GMP certified facilities comply with international standards and regulations for pharmaceutical manufacturing.
                </p>
              </div>

              <div>
                <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-[#8B1C52] mb-3">
                  Experienced Team
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  Our expert team has comprehensive knowledge of the entire pharmaceutical manufacturing lifecycle and best practices.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-[#8B1C52] mb-3">
                  Quick Turnaround
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  With a turnaround time of fewer than 30 days, we ensure your products reach market quickly without compromising quality.
                </p>
              </div>

              <div>
                <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-[#8B1C52] mb-3">
                  Extensive Product Range
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  Manufacturing expertise across 500+ pharmaceutical products including tablets, syrups, capsules, and more.
                </p>
              </div>

              <div>
                <h3 className="font-lufga text-[16px] lg:text-[17px] font-bold text-[#8B1C52] mb-3">
                  Proven Track Record
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  We have successfully partnered with international and local organizations to build successful pharmaceutical brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="bg-gradient-to-r from-[#8B1C52] to-[#6B1640] rounded-[20px] p-12 lg:p-16 text-center">
            <h2 className="font-regals text-[32px] lg:text-[42px] leading-[1.3] text-white mb-6">
              Ready to Start Your <span className="text-[#FFD6E8]">Manufacturing Journey?</span>
            </h2>
            <p className="font-lufga text-[14px] lg:text-[15px] text-white/90 max-w-2xl mx-auto mb-8">
              Partner with Biodermis Pharma for reliable, efficient, and high-quality pharmaceutical contract manufacturing services.
            </p>
            <button className="bg-white hover:bg-gray-100 text-[#8B1C52] font-lufga font-bold px-12 py-3 rounded-full transition-colors duration-200">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <h2 className="font-regals text-[32px] lg:text-[42px] leading-[1.3] text-center text-black mb-12">
            Frequently Asked <span className="text-[#8B1C52]">Questions</span>
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "What is Third-Party Pharmaceutical Manufacturing?",
                a: "Third-party manufacturing involves creating pharmaceutical products with your logo, design, and name through a contract with a manufacturing company. You get your branded products without owning a manufacturing facility."
              },
              {
                q: "How many products can you manufacture?",
                a: "Biodermis Pharma offers third-party manufacturing services for 500+ pharmaceutical products across various categories and formulations."
              },
              {
                q: "What is your turnaround time?",
                a: "We pride ourselves on a quick turnaround time of fewer than 30 days, ensuring your products reach the market swiftly."
              },
              {
                q: "Are your facilities certified?",
                a: "Yes, all our pharmaceutical manufacturing facilities are ISO and GMP certified, meeting international quality and safety standards."
              },
              {
                q: "Can you help establish a PCD Pharma company?",
                a: "Absolutely! We provide comprehensive support to help you establish your own PCD pharma company with our expertise and single-window solution approach."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-[15px] p-6 lg:p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-lufga text-[15px] lg:text-[16px] font-bold text-[#8B1C52] mb-3">
                  {item.q}
                </h3>
                <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-relaxed">
                  {item.a}
                </p>
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
