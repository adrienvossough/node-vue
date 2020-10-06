import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://enzo:1234@192.168.99.100/shop'),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
