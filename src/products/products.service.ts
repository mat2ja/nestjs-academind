import { Product } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Date.now().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }
}
