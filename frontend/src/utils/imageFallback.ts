import React from 'react';

/**
 * Global Fallback Dictionary for Travel Package Explorer
 * Maps categories to high-quality Unsplash fallback URLs.
 */

export const categoryFallbacks: Record<string, string> = {
  'adventure-tours': 'https://images.unsplash.com/photo-1533130061792-64b345e4a833',
  'luxury-escapes': 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
  'cultural-journeys': 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
  'nature-wildlife': 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
  'beach-holidays': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'city-breaks': 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad',
  'family-packages': 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
  'honeymoon-specials': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  'spiritual-retreats': 'https://images.unsplash.com/photo-1514222139-b570bbd73d48',
  'international-packages': 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3',
};

export const GLOBAL_DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb';

/**
 * Resolves a safe image URL with fallback.
 */
export function getSafeImage(url: string | undefined | null, category?: string): string {
  if (!url || typeof url !== 'string' || url.trim().length < 10) {
    return category && categoryFallbacks[category] 
      ? categoryFallbacks[category] 
      : GLOBAL_DEFAULT_FALLBACK;
  }
  return url;
}

/**
 * Handles image load errors by replacing the source with a fallback.
 */
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, category?: string) {
  const fallback = category && categoryFallbacks[category] 
    ? categoryFallbacks[category] 
    : GLOBAL_DEFAULT_FALLBACK;
  
  if (e.currentTarget.src !== fallback) {
    e.currentTarget.src = fallback;
  }
}
