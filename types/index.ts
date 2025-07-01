export interface Quote {
  id: string;
  content: string;
  author: string;
  category?: string;
  tags?: string[];
  source?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserFavorite {
  id: string;
  userId: string;
  quoteId: string;
  createdAt: string;
  quote?: Quote;
  user?: User;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
}

export interface QuotesResponse {
  quotes: Quote[];
  total: number;
  page: number;
  limit: number;
}

export interface RandomQuoteResponse {
  quote: Quote;
}

export interface CategoriesResponse {
  categories: Category[];
}
