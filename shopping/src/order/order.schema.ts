import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'orders' })
export class Order {
    @Prop()
    userId: string

    @Prop(raw({
        productId: { type: String },
        quantity: { type: String },
    }))
    products: Record<string, any>[]
}

export type OrderDocument = Order & Document

export const OrderSchema = SchemaFactory.createForClass(Order)