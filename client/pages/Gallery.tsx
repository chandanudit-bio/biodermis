import { useState } from "react";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useGallery } from "@/hooks/useGallery";
import { GalleryImage } from "@shared/api";

function GalleryLightbox({
  image,
  images,
  onClose,
  onPrevious,
  onNext,
}: {
  image: GalleryImage;
  images: GalleryImage[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const currentIndex = images.findIndex((img) => img.id === image.id);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-60"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Image */}
      <div className="flex items-center justify-center max-w-5xl max-h-[80vh] w-full">
        <img
          src={image.image}
          alt="Gallery"
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found';
          }}
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-all ${
          currentIndex === 0
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-white/10 cursor-pointer"
        }`}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentIndex === images.length - 1}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-all ${
          currentIndex === images.length - 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-white/10 cursor-pointer"
        }`}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-lufga text-sm bg-black/50 px-4 py-2 rounded-full">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
}

function GalleryGrid({ images, onImageClick }: { images: GalleryImage[]; onImageClick: (image: GalleryImage) => void }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8">
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => onImageClick(image)}
          className="group relative overflow-hidden rounded-[15px] mb-6 lg:mb-8 w-full cursor-pointer hover:opacity-90 transition-opacity break-inside-avoid"
        >
          <img
            src={image.image}
            alt="Gallery"
            className="w-full h-auto rounded-[15px] group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image';
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-[15px] transition-colors duration-300 flex items-center justify-center">
            <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function Gallery() {
  const { images, isLoading, error } = useGallery();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-40 border-b border-gray-100">
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
            <a href="/third-party-manufacturing" className="text-black hover:text-primary transition-colors">Third Party Manufacturing</a>
            <a href="/gallery" className="text-[#8B1C52] hover:text-primary transition-colors font-semibold">Gallery</a>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav currentPage="/gallery" />
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
              Our <span className="text-[#8B1C52]">Gallery</span>
            </h1>
            <p className="font-lufga text-[16px] lg:text-[18px] text-[#666666] max-w-2xl mx-auto">
              Explore our collection of product visuals and facility images
            </p>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B1C52]"></div>
              <p className="mt-4 text-gray-600 font-lufga">Loading gallery...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
              <h3 className="text-red-600 font-lufga text-xl mb-2">Error Loading Gallery</h3>
              <p className="text-red-500 text-sm font-lufga">
                {error instanceof Error ? error.message : 'Failed to fetch gallery images'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      {!isLoading && !error && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            {images.length > 0 ? (
              <GalleryGrid images={images} onImageClick={setSelectedImage} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-lufga text-lg">No gallery images found</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <GalleryLightbox
          image={selectedImage}
          images={images}
          onClose={() => setSelectedImage(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
