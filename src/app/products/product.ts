/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  category: string;
  tags?: string[];
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

