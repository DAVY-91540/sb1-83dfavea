export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  variations: ProductVariation[];
}

export interface ProductVariation {
  size?: string;
  color?: string;
  priceModifier: number;
}