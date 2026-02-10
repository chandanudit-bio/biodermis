import { useState } from "react";

interface MobileNavProps {
  currentPage?: string;
}

export default function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Our Products" },
    { href: "/blogs", label: "Blogs" },
    { href: "/pharma-franchise", label: "Pharma Franchise" },
    { href: "/third-party-manufacturing", label: "Third Party Manufacturing" },
    { href: "/gallery", label: "Gallery" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-black hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[116px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg font-lufga text-[14px] font-medium transition-colors ${
                  currentPage === link.href
                    ? "bg-[#8B1C52] text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
