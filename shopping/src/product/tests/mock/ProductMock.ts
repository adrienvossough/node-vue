import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export class ProductMock {
    @Prop()
    name: string

    @Prop()
    desc: string

    @Prop()
    price: number
}
