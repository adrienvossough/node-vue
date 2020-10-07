import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'orders' })
export class Order {
    @Prop()
    userId: string

    @Prop()
    productsId: string[]
}

export type OrderDocument = Order & Document

export const OrderSchema = SchemaFactory.createForClass(Order)