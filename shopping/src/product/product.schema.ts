import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'products' })
export class Product extends Document  {
    @Prop()
    name: string

    @Prop()
    desc: string

    @Prop()
    price: number
}

export type ProductDocument = Product & Document

export const ProductSchema = SchemaFactory.createForClass(Product)