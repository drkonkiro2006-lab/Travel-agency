export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const url = `${baseURL}${endpoint}`;
  
  const token = localStorage.getItem('saas_token');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(url, {
    method: 'GET',
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};
