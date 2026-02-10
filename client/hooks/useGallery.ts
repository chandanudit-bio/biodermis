import { useQuery } from '@tanstack/react-query';
import { GalleryImage } from '@shared/api';

const GALLERY_API_URL = 'https://admin.biodermis.in/api/get_visual';

/**
 * Fetch gallery images from the API
 */
async function fetchGalleryImages(): Promise<GalleryImage[]> {
  try {
    const response = await fetch(GALLERY_API_URL);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    const images = Array.isArray(data) ? data : [data];
    
    return images;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
}

/**
 * Custom hook to fetch all gallery images
 */
export function useGallery() {
  const query = useQuery({
    queryKey: ['gallery'],
    queryFn: fetchGalleryImages,
    staleTime: 1000 * 60 * 15, // Cache for 15 minutes
  });

  return {
    images: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
}
