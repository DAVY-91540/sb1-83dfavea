import { Observable } from '@nativescript/core';
import { Product } from '../../models/product.model';
import { PriceService } from '../../services/price.service';

export class ProductDetailsViewModel extends Observable {
    private _product: Product;
    private _calculatedPrice: number = 0;
    private _selectedSizeIndex: number = 0;
    private _selectedColorIndex: number = 0;
    private priceService: PriceService;
    private _sizes: string[] = ['S', 'M', 'L'];
    private _colors: string[] = ['Rouge', 'Bleu', 'Vert'];

    constructor(product: Product) {
        super();
        this._product = product;
        this.priceService = new PriceService();
        this.calculatePrice();
    }

    get product(): Product {
        return this._product;
    }

    get calculatedPrice(): number {
        return this._calculatedPrice;
    }

    get selectedSizeIndex(): number {
        return this._selectedSizeIndex;
    }

    set selectedSizeIndex(value: number) {
        if (this._selectedSizeIndex !== value) {
            this._selectedSizeIndex = value;
            this.calculatePrice();
        }
    }

    get sizes(): string[] {
        return this._sizes;
    }

    get colors(): string[] {
        return this._colors;
    }

    private calculatePrice() {
        const variation = this._product.variations[this._selectedSizeIndex];
        this._calculatedPrice = this.priceService.calculatePrice(this._product, variation);
        this.notifyPropertyChange('calculatedPrice', this._calculatedPrice);
    }

    exportToExcel() {
        this.priceService.exportToExcel([this._product]);
    }
}