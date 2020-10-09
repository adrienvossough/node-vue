import { Product, ProductDocument } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { IProductService } from './interfaces/Iproduct.service';

@Injectable()
export class ProductService implements IProductService {
    // voir le module. Nous passons par un label pour ne pas dépendre de l'implémentation
    constructor(@InjectModel("ProductModel") private productModel: Model<ProductDocument>) { }

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
