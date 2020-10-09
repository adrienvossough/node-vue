import { Product, ProductDocument } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async createProduct(product: Product): Promise<ProductDocument> {
        return new this.productModel(product).save()
    }

    async findAll(): Promise<ProductDocument[]> {
        return this.productModel.find()
    }

    async findById(id: string): Promise<ProductDocument> {
        return this.productModel.findById(id)
    }

    async findByName(name: string): Promise<ProductDocument[]> {
        return this.productModel.find({
            name: {
                $regex: "/.*(" + name + ").*/"
            }
        })
    }

    async updateProduct(id: string, newProduct: ProductDocument): Promise<ProductDocument> {
        return (await this.productModel.findById(id)).updateOne(newProduct)
    }

    async delete(id: string) {
        return this.productModel.findById(id).remove()
    }
}
