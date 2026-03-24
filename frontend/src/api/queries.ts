import { apiClient } from './client';

export type Destination = {
  id: string;
  name: string;
  country: string;
  image: string;
  type: string;
  spanType: 'large' | 'small' | 'wide' | 'tall';
};

export type Package = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  highlight?: boolean;
};

export const fetchDestinations = () => apiClient<Destination[]>('/destinations');
export const fetchPackages = () => apiClient<Package[]>('/packages');
