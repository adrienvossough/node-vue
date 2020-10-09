export class Product {
    constructor(prod = { _id: "", name: "", desc: "", price: 0 }) {
        this._id = prod._id
        this.name = prod.name
        this.desc = prod.desc
        this.price = prod.price
    }
}