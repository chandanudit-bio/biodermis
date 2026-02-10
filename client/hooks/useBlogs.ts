import { useQuery } from '@tanstack/react-query';
import { Blog } from '@shared/api';

const BLOGS_API_URL = 'https://admin.biodermis.in/api/allblogs';

/**
 * Fetch blogs from the API
 */
async function fetchBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(BLOGS_API_URL);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    const blogs = Array.isArray(data) ? data : [data];
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

/**
 * Custom hook to fetch all blogs
 */
export function useBlogs() {
  const query = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });

  return {
    blogs: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
}

/**
 * Custom hook to fetch a single blog by ID
 */
export function useBlog(id: string | undefined) {
  const { blogs, isLoading, error } = useBlogs();

  const blog = blogs.find(b => b.id === id || b.title === id);

  return {
    blog,
    isLoading,
    error,
  };
}
