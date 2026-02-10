/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Product interface from the API
 */
export interface Product {
  id: string;
  name: string;
  visual_aid: string;
  image: string;
  composition: string;
  size: string;
  package_type: string;
  category: string;
  category_slug: string | null;
  subcategory_name: string;
  description: string;
  created_at: string;
  updated_at: string | null;
}

/**
 * Type for grouped products by category
 */
export interface ProductsByCategory {
  [category: string]: Product[];
}
