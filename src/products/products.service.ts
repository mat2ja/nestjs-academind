import { Product } from './product.model';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Date.now().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(prodId: string) {
    const [product] = this.findProduct(prodId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { ...product };
  }

  updateProduct(prodId: string, updatedProduct: Product) {
    const [product, productIndex] = this.findProduct(prodId);
    console.log('product :>> ', product);
    this.products[productIndex] = { ...product, ...updatedProduct };
    return { ...this.products[productIndex] };
  }

  private findProduct(prodId: string): [Product, number] {
    const productIndex = this.products.findIndex(({ id }) => id === prodId);
    console.log('productIndex :>> ', productIndex);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return [product, productIndex];
  }
}
