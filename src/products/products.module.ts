import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ProductsService } from './products.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class ProductsModule {}
