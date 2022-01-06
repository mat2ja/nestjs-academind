import { ProductsService } from './products.service';
import { Body, Controller, Post } from '@nestjs/common';

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
}
