import { Product, ProductDocument } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async createProduct(product: Product): Promise<Product> {
        return new this.productModel(product).save()
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find()
    }

    async findById(id: string): Promise<Product> {
        return this.productModel.findById(id)
    }

    async findByName(name: string): Promise<Product[]> {
        return this.productModel.find({
            name: {
                $regex: "/.*(" + name + ").*/"
            }
        })
    }

    async updateProduct(id: string, newProduct: ProductDocument): Promise<Product> {
        return (await this.productModel.findById(id)).updateOne(newProduct)
    }

    async delete(id: string) {
        return this.productModel.findById(id).remove()
    }
}
