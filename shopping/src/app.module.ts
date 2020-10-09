import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/shop'),
    UserModule,
    ProductModule,
    OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
