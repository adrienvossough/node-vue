import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://enzo:1234@192.168.99.100/shop'),
    UserModule,
    ProductModule,
    OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
