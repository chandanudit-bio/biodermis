import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top bar with phone and email */}
      <div className="bg-[#EDB7CE] py-6">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px] flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Request callback button */}
          <button className="inline-flex items-center justify-center px-[52px] py-[17px] rounded-full border-2 border-primary bg-transparent text-primary font-lufga text-[22px] font-semibold hover:bg-primary/5 transition-colors">
            Request a Call Back
          </button>

          {/* Contact info */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.35748 1.4248C4.10401 0.677952 5.38537 0.744814 6.2149 1.57324L9.83502 5.19336C10.6637 6.02206 10.7306 7.30418 9.98443 8.05078L8.8565 9.17969C8.62195 9.48961 9.21816 11.4207 11.3907 13.5928C13.5618 15.7639 15.4918 16.3592 15.8047 16.126L16.9317 14.998C17.6774 14.2521 18.9596 14.319 19.7891 15.1475L23.4092 18.7676C24.2378 19.5967 24.3046 20.878 23.5586 21.625L21.1016 24.0811C20.4893 24.6936 19.6266 24.9999 18.5655 25C17.4976 25 16.2285 24.691 14.8106 24.0723C12.2065 22.9363 9.3428 20.8799 6.74713 18.2842C4.46568 16.0027 2.47331 13.254 1.2149 10.6641L0.972712 10.1484C-0.299082 7.33224 -0.324691 5.10557 0.901423 3.87988L3.35748 1.4248ZM4.64947 2.59473C4.60588 2.59473 4.57167 2.60514 4.55474 2.62207L2.09869 5.07715C1.42619 5.74964 1.58214 7.38464 2.51568 9.45117C3.67113 12.0088 5.64958 14.7931 7.94439 17.0879C10.3941 19.5371 13.0734 21.4661 15.4883 22.5195C17.5728 23.4295 19.2239 23.5656 19.9053 22.8838L22.3614 20.4277C22.4149 20.3738 22.3985 20.1517 22.212 19.9648L18.5928 16.3447C18.4055 16.1582 18.1834 16.1413 18.129 16.1953L17.0001 17.3232C16.6085 17.7156 15.6675 18.2452 13.7715 17.3887C12.6197 16.8685 11.3491 15.9452 10.1934 14.79C7.87243 12.4691 6.25683 9.38594 7.65924 7.98242L8.78717 6.85449C8.84091 6.80075 8.82474 6.57768 8.63775 6.39062L5.01861 2.77051C4.89041 2.6423 4.74512 2.59475 4.64947 2.59473ZM12.0362 4.30957C16.4636 4.30957 20.0653 7.91191 20.0655 12.3389H18.3731C18.3729 8.84516 15.5299 6.00195 12.0362 6.00195V4.30957ZM12.0362 0C18.8396 0.000122071 24.3759 5.53506 24.376 12.3389H22.6827C22.6825 6.46873 17.9063 1.69348 12.0362 1.69336V0Z" fill="#8F1F5A"/>
                </svg>
              </div>
              <div className="font-lufga text-[15px] font-bold text-primary leading-tight">
                +91 90537-77905<br />
                +91 90538-88905
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.2588 1.87012C30.9193 1.53613 30.875 1.92266 30.875 2.23438V17.4492C30.8746 18.132 30.0065 19 29.2793 19H1.74414C1.01697 19 0.000478089 18.1394 0 17.4492C0 17.4492 0 2.55369 0 2.23438C0 1.93008 0.0373047 1.53613 0.69043 1.87012C1.2996 2.18227 6.82132 6.07144 10.4355 8.40918L4.3418 15.2744C4.19348 15.4228 4.12685 15.6078 4.21582 15.6895C4.30485 15.7785 4.5049 15.7343 4.65332 15.5859L11.9717 9.41113C13.0774 10.1235 13.8492 10.6133 13.9902 10.6875C14.5617 10.9769 14.9625 11.0137 15.5117 11.0137C16.0609 11.0137 16.4617 10.9769 17.0332 10.6875C17.1668 10.6133 17.946 10.1235 19.0518 9.41113L26.3701 15.5859C26.5259 15.7268 26.7186 15.7711 26.8076 15.6895C26.8892 15.6004 26.8222 15.4228 26.6738 15.2744L20.5732 8.40918C24.1875 6.07144 29.6496 2.18227 30.2588 1.87012ZM29.7021 0C30.526 0 30.734 0.215234 30.541 0.779297C30.4297 1.09841 29.9176 1.38027 29.6133 1.53613C28.7969 1.9666 17.4562 8.14941 17.0332 8.37207C16.6102 8.5947 16.1796 8.69824 15.5117 8.69824C14.8438 8.69824 14.4133 8.5947 13.9902 8.37207C13.5672 8.14941 2.22656 1.9666 1.41016 1.53613C1.10585 1.38027 0.593739 1.10583 0.482422 0.779297C0.289455 0.222658 0.497462 0 1.32129 0H29.7021Z" fill="#8F1F5A"/>
                </svg>
              </div>
              <div className="font-lufga text-[15px] font-semibold text-primary">
                bioversalremedies@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12 lg:py-16">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4c891b0524cea9281ba70c12f0b39909de5b7be6?width=412" 
                alt="Biodermis" 
                className="h-[53px] w-auto mb-6"
              />
              <p className="font-lufga text-[15px] leading-[24px] mb-6">
                At Biodermis, we believe that healthy skin is the foundation of confidence. Rooted in science and inspired by nature, our mission is to provide high-quality skincare solutions that are gentle, effective, and tailored to real skin needs.
              </p>
              
              {/* Social media icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/90 transition-colors">
                  <Facebook className="w-5 h-5" fill="currentColor" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/90 transition-colors">
                  <Twitter className="w-5 h-5" fill="currentColor" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/90 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/90 transition-colors">
                  <Youtube className="w-5 h-5" fill="currentColor" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-lufga text-[18px] font-bold mb-6">Quick links</h3>
              <ul className="space-y-3 font-lufga text-[15px]">
                <li><a href="#" className="hover:text-white/80 transition-colors">Company Overview</a></li>
                <li><a href="#franchise" className="hover:text-white/80 transition-colors">Pharma Franchise</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">PCD Pharma Companies</a></li>
                <li><a href="#manufacturing" className="hover:text-white/80 transition-colors">Third Party Pharma Manufacturing</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Pharma Franchise Companies</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Pharma PCD</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Indian PCD Pharma Companies</a></li>
                <li><a href="#blogs" className="hover:text-white/80 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="font-lufga text-[18px] font-bold mb-6">Our Products</h3>
              <ul className="space-y-3 font-lufga text-[15px]">
                <li><a href="#products" className="hover:text-white/80 transition-colors">Serums</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">Face Wash</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">Sunscreens</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">Moisturizer</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">Serum Oil</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">Vitamin C</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">Cleanser</a></li>
                <li><a href="#products" className="hover:text-white/80 transition-colors">View All Products</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-lufga text-[18px] font-bold mb-6">Contact Us</h3>
              <div className="space-y-4 font-lufga text-[15px]">
                {/* Address */}
                <div className="flex gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p>2A, Partap Spintex Street,</p>
                    <p>Dukheri Road, Mohra -</p>
                    <p>133004</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  <div>
                    <p>+91 90537-77905 +91</p>
                    <p>90538-88905</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <p>Biodermis@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px] flex flex-col md:flex-row justify-between items-center gap-2 font-lufga text-[14px]">
          <p>2025 Biodermis Pharma | All Rights Reserved</p>
          <p>Developed BY BWI</p>
        </div>
      </div>
    </footer>
  );
}
