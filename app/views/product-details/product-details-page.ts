import { EventData, Page, NavigatedData } from '@nativescript/core';
import { ProductDetailsViewModel } from './product-details-view-model';
import { Product } from '../../models/product.model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const product = <Product>args.context;
    page.bindingContext = new ProductDetailsViewModel(product);
}