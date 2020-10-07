import { Product } from './../../product/product.schema';
import { User } from 'src/user/user.schema'

export class OrderDtoDetail {
    constructor(public _id: string, public user: User, public products: Product[]) {
        this._id = _id
        this.user = user
        this.products = products
    }
}