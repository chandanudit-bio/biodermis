import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { useBlog } from "@/hooks/useBlogs";

export default function SingleBlog() {
  const { id } = useParams<{ id: string }>();
  const { blog, isLoading, error } = useBlog(id);

  const dateStr = blog ? new Date(blog.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

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
            <a href="/blogs" className="text-[#8B1C52] hover:text-primary transition-colors font-semibold">Blogs</a>
            <a href="/pharma-franchise" className="text-black hover:text-primary transition-colors">Pharma Franchise</a>
            <a href="#manufacturing" className="text-black hover:text-primary transition-colors">Third Party Manufacturing</a>
            <a href="/gallery" className="text-black hover:text-primary transition-colors">Gallery</a>
          </nav>

          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Loading State */}
      {isLoading && (
        <section className="pt-[116px] pb-20 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="text-center py-24">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B1C52]"></div>
              <p className="mt-4 text-gray-600 font-lufga">Loading blog...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="pt-[116px] pb-20 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center mt-8">
              <h3 className="text-red-600 font-lufga text-xl mb-2">Error Loading Blog</h3>
              <p className="text-red-500 text-sm font-lufga mb-6">
                {error instanceof Error ? error.message : 'Failed to fetch blog'}
              </p>
              <a
                href="/blogs"
                className="bg-[#8B1C52] hover:bg-[#6B1640] text-white font-lufga font-bold px-8 py-3 rounded-full transition-colors duration-200 inline-block"
              >
                Back to Blogs
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Blog Not Found */}
      {!isLoading && !error && !blog && (
        <section className="pt-[116px] pb-20 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center mt-8">
              <h3 className="text-red-600 font-lufga text-xl mb-2">Blog Not Found</h3>
              <p className="text-red-500 text-sm font-lufga mb-6">
                Sorry, the blog you're looking for doesn't exist.
              </p>
              <a
                href="/blogs"
                className="bg-[#8B1C52] hover:bg-[#6B1640] text-white font-lufga font-bold px-8 py-3 rounded-full transition-colors duration-200 inline-block"
              >
                Back to Blogs
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      {!isLoading && !error && blog && (
        <>
          {/* Hero Section */}
          <section className="pt-[116px] pb-8 lg:pb-12 bg-[#FDECEF] relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-[1366px] mx-auto px-4 lg:px-[75px]">
              <a
                href="/blogs"
                className="inline-flex items-center text-[#8B1C52] font-lufga font-semibold mb-6 hover:gap-2 gap-1 transition-all"
              >
                <span>←</span> Back to Blogs
              </a>
              <h1 className="font-regals text-[32px] lg:text-[48px] leading-[1.2] text-black mb-4">
                {blog.title}
              </h1>
              <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666]">
                Published on {dateStr}
              </p>
            </div>
          </section>

          {/* Blog Image */}
          <section className="bg-white">
            <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px] py-8 lg:py-12">
              <div className="w-full h-[300px] lg:h-[500px] bg-gray-100 rounded-[20px] overflow-hidden shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x600?text=Blog+Image';
                  }}
                />
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="bg-white py-16 lg:py-24">
            <div className="max-w-[900px] mx-auto px-4 lg:px-[75px]">
              <div className="prose prose-lg max-w-none font-lufga">
                <div
                  className="text-[15px] lg:text-[16px] text-[#333333] leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
              </div>

              {/* Tags Section */}
              {blog.tag && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="font-lufga text-[14px] font-semibold text-[#8B1C52] mb-4 uppercase tracking-wide">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {blog.tag.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-[#FDECEF] text-[#8B1C52] px-4 py-2 rounded-full font-lufga text-[13px] font-semibold"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blogs Button */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <a
                  href="/blogs"
                  className="inline-flex items-center bg-[#8B1C52] hover:bg-[#6B1640] text-white font-lufga font-bold px-8 py-3 rounded-full transition-colors duration-200"
                >
                  <span>←</span>
                  <span className="ml-2">Back to All Blogs</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
