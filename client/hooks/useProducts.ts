import { useQuery } from '@tanstack/react-query';
import { Product, ProductsByCategory } from '@shared/api';

const API_URL = 'https://admin.biodermis.in/api/get_product';

/**
 * Fetch products from the API
 */
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // The API might return a single product or an array
    const data = await response.json();
    const products = Array.isArray(data) ? data : [data];
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Group products by category
 */
function groupProductsByCategory(products: Product[]): ProductsByCategory {
  return products.reduce((acc, product) => {
    const category = product.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as ProductsByCategory);
}

/**
 * Custom hook to fetch and group products
 */
export function useProducts() {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const productsByCategory = query.data ? groupProductsByCategory(query.data) : {};
  const categories = Object.keys(productsByCategory).sort();

  return {
    products: query.data || [],
    productsByCategory,
    categories,
    isLoading: query.isLoading,
    error: query.error,
  };
}
