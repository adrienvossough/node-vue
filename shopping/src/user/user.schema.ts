import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ collection: 'users' })
export class User {
    @Prop()
    lastname: string

    @Prop()
    firstname: string

    @Prop()
    birthdate: string

    @Prop(raw({
        orderId: { type: String },
        price: { type: Number }
    }))
    bills: Record<string, any>[]
}

export type UserDocument = User & Document

export const UserSchema = SchemaFactory.createForClass(User)