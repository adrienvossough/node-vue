import { Product, ProductSchema } from './product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: "ProductModel", schema: ProductSchema }])],
  providers: [
    {
      provide: 'IProductService',
      useClass: ProductService
    },
    
  ],
  controllers: [ProductController],
  exports: [MongooseModule.forFeature([{ name: "ProductModel", schema: ProductSchema }])]
})
export class ProductModule { }
