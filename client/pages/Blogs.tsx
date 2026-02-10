import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useBlogs } from "@/hooks/useBlogs";
import { Blog } from "@shared/api";

function stripHtmlTags(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function BlogCard({ blog }: { blog: Blog }) {
  const excerpt = stripHtmlTags(blog.description).substring(0, 150) + "...";
  const dateStr = new Date(blog.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <a
      href={`/blogs/${blog.id}`}
      className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x338?text=Blog+Image';
          }}
        />
      </div>

      {/* Blog Info */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="font-lufga text-[12px] text-[#8B1C52] font-semibold mb-2 uppercase tracking-wide">
          {dateStr}
        </p>
        <h3 className="font-lufga text-[16px] lg:text-[18px] font-bold text-black mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="font-lufga text-[13px] lg:text-[14px] text-[#666666] leading-[22px] line-clamp-3 flex-grow">
          {excerpt}
        </p>
        <div className="mt-4 inline-flex items-center text-[#8B1C52] font-lufga font-semibold text-[13px] group-hover:gap-2 gap-1 transition-all">
          Read More
          <span>→</span>
        </div>
      </div>
    </a>
  );
}

export default function Blogs() {
  const { blogs, isLoading, error } = useBlogs();

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
            <a href="/third-party-manufacturing" className="text-black hover:text-primary transition-colors">Third Party Manufacturing</a>
            <a href="/gallery" className="text-black hover:text-primary transition-colors">Gallery</a>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav currentPage="/blogs" />
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
              Our <span className="text-[#8B1C52]">Blogs</span>
            </h1>
            <p className="font-lufga text-[16px] lg:text-[18px] text-[#666666] max-w-2xl mx-auto">
              Stay updated with the latest insights and news from the pharmaceutical industry
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
              <p className="mt-4 text-gray-600 font-lufga">Loading blogs...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
              <h3 className="text-red-600 font-lufga text-xl mb-2">Error Loading Blogs</h3>
              <p className="text-red-500 text-sm font-lufga">
                {error instanceof Error ? error.message : 'Failed to fetch blogs'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Blogs Grid */}
      {!isLoading && !error && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[75px]">
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-lufga text-lg">No blogs found</p>
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
