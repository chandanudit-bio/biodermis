import { useState } from "react";
import Footer from "@/components/Footer";

export default function PharmaFranchise() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", phone: "", city: "", investment: "", message: "" });
  };

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
            <a href="#products" className="text-black hover:text-primary transition-colors">Our Products</a>
            <a href="#blogs" className="text-black hover:text-primary transition-colors">Blogs</a>
            <a href="/pharma-franchise" className="text-[#8B1C52] hover:text-primary transition-colors font-semibold">Pharma Franchise</a>
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
      <section className="pt-[116px] pb-16 lg:pb-20 bg-[#FDECEF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-regals text-[48px] lg:text-[56px] leading-[1.2] mb-8 text-[#8B1C52] font-bold">
              Pharma Franchise
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="font-lufga text-[15px] text-[#666666] leading-[26px] mb-6">
              Biodermis Pharma aims to expand its network always. We are one of India's leading PCD pharma companies, offering pharma franchises and PCD pharma. If you're seeking a pharma PCD, look no further. We provide the most exceptional promotional benefits. Our philosophy is to give unsurpassed service and unbeatable prices to our customers, allowing them to improve the healthcare and wellbeing. We have a large PCD pharma franchise network in India.
            </p>

            <p className="font-lufga text-[15px] text-[#666666] leading-[26px]">
              Pharma franchise refers to a business model in the pharmaceutical industry where a company grants permission to an individual or group to operate under its established brand and sell its products in a specific geographic area.
            </p>
          </div>

          {/* Best Pharma Franchise Section */}
          <div className="mb-16">
            <h2 className="font-lufga text-[20px] text-[#8B1C52] font-bold mb-8 flex items-center gap-2">
              <span className="text-[#8B1C52] text-2xl">★</span> Best Pharma Franchise | Biodermis Pharma
            </h2>

            <p className="font-lufga text-[15px] text-[#666666] leading-[26px] mb-6">
              The company is a leading supplier of goods that provide value to customers' lives by meeting their health demands and improving their quality of life. Biodermis Pharma has made significant investments in becoming one of India's leading PCD pharma companies. With us, you can work in your own space, free from work pressure and regulatory challenges—helping you reach your goals quickly.
            </p>

            <p className="font-lufga text-[15px] text-[#666666] leading-[26px]">
              A franchise is an authority issued by an organization to perform specific work within a niche—such as selling items or providing services. Iconic Lifesciences stands out by adhering to the highest quality standards and offering the best-value medications to improve lives.
            </p>
          </div>

          {/* Top Leading PCD Section */}
          <div className="mb-16">
            <h2 className="font-lufga text-[20px] text-[#8B1C52] font-bold mb-8 flex items-center gap-2">
              <span className="text-[#8B1C52] text-2xl">★</span> Top Leading PCD Pharma Company in India
            </h2>

            <p className="font-lufga text-[15px] text-[#666666] leading-[26px] mb-6">
              Many pharma professionals are searching for pharma franchise opportunities, and Iconic Lifesciences is ready to assist. If you're looking for guidance, we provide transparent and strategic advice to help you choose the best franchise company.
            </p>

            <p className="font-lufga text-[15px] text-[#666666] leading-[26px]">
              Consider factors like monopoly rights, product range, sales performance, rent rates, and value-added services. Choose products not just for profits, but for the betterment of people's health. For any assistance, feel free to get in touch with us.
            </p>
          </div>

          {/* Contact For Section */}
          <div className="bg-gray-50 rounded-[16px] p-10 mb-16">
            <p className="font-lufga text-[15px] text-[#666666] font-semibold mb-6">Contact us now for:</p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-[#8B1C52] font-bold mt-1">●</span>
                <p className="font-lufga text-[15px] text-[#666666]">Pharma Franchise</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#8B1C52] font-bold mt-1">●</span>
                <p className="font-lufga text-[15px] text-[#666666]">Pharma Franchise Companies</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#8B1C52] font-bold mt-1">●</span>
                <p className="font-lufga text-[15px] text-[#666666]">PCD Pharma Franchise</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#8B1C52] font-bold mt-1">●</span>
                <p className="font-lufga text-[15px] text-[#666666]">PCD Pharma Companies</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#8B1C52] font-bold mt-1">●</span>
                <p className="font-lufga text-[15px] text-[#666666]">PCD Pharma Franchise Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-[#FDECEF]">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#8B1C52] rounded-[24px] p-12 text-white shadow-lg">
              <h2 className="font-regals text-[32px] lg:text-[36px] leading-[1.3] mb-2 font-bold">
                Start Your Franchise Journey
              </h2>
              <p className="font-lufga text-[14px] text-white/80 mb-10">
                Fill in your details and our team will get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block font-lufga text-[13px] font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-[8px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 font-lufga text-[14px]"
                    placeholder="Your name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-lufga text-[13px] font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-[8px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 font-lufga text-[14px]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-lufga text-[13px] font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-[8px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 font-lufga text-[14px]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* City & Investment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-lufga text-[13px] font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-[8px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 font-lufga text-[14px]"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <label className="block font-lufga text-[13px] font-semibold mb-2">Expected Investment</label>
                    <select
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-[8px] bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 font-lufga text-[14px]"
                    >
                      <option value="">Select range</option>
                      <option value="5-10">5-10 Lakhs</option>
                      <option value="10-25">10-25 Lakhs</option>
                      <option value="25-50">25-50 Lakhs</option>
                      <option value="50+">50+ Lakhs</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-lufga text-[13px] font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-[8px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 font-lufga text-[14px] resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 bg-white text-[#8B1C52] font-lufga text-[16px] font-semibold rounded-[12px] hover:bg-gray-100 transition-colors"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
