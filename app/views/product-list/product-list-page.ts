import { EventData, Page, NavigatedData } from '@nativescript/core';
import { ProductListViewModel } from './product-list-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new ProductListViewModel();
}