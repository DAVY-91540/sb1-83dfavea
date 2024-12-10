import { Observable, Frame } from '@nativescript/core';
import { Product } from '../../models/product.model';
import { PriceService } from '../../services/price.service';

export class ProductListViewModel extends Observable {
    private _products: Product[] = [];
    private _searchQuery: string = '';
    private priceService: PriceService;

    constructor() {
        super();
        this.priceService = new PriceService();
        this.loadProducts();
    }

    get products(): Product[] {
        return this._products.filter(product => 
            product.name.toLowerCase().includes(this._searchQuery.toLowerCase())
        );
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('products', this.products);
        }
    }

    private loadProducts() {
        this._products = [
            {
                id: '1',
                name: 'Produit A',
                category: 'Catégorie 1',
                basePrice: 100,
                variations: [
                    { size: 'S', priceModifier: 0.8 },
                    { size: 'M', priceModifier: 1.0 },
                    { size: 'L', priceModifier: 1.2 }
                ]
            }
        ];
        this.notifyPropertyChange('products', this.products);
    }

    onItemTap(args: any) {
        const product = this._products[args.index];
        Frame.topmost().navigate({
            moduleName: 'views/product-details/product-details-page',
            context: product
        });
    }
}