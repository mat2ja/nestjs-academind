import { ProductsService } from './products.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    const id = this.productService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return { id };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: Product) {
    return this.productService.updateProduct(id, body);
  }
}
