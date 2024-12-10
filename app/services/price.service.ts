import { Observable } from '@nativescript/core';
import { Product, ProductVariation } from '../models/product.model';

export class PriceService extends Observable {
  calculatePrice(product: Product, variation: ProductVariation): number {
    const basePrice = product.basePrice;
    const modifier = variation.priceModifier;
    return basePrice * modifier;
  }

  exportToExcel(products: Product[]): void {
    // Implementation pour l'export Excel
    console.log('Exporting to Excel:', products);
  }
}