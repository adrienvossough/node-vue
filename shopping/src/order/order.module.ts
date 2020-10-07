import { ProductService } from './../product/product.service';
import { UserModule } from './../user/user.module';
import { ProductModule } from './../product/product.module';
import { Order, OrderSchema } from './order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]), ProductModule, UserModule],
  providers: [OrderService, ProductService, UserService],
  controllers: [OrderController]
})
export class OrderModule { }
