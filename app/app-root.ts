import { Application } from '@nativescript/core';
import { ProductListViewModel } from './views/product-list/product-list-view-model';

export function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ProductListViewModel();
}