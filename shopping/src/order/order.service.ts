import { UserService } from './../user/user.service';
import { Order, OrderDocument } from './order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { ProductService } from 'src/product/product.service';
import { OrderDtoDetail } from './dtos/orderDetailDto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>, private productService: ProductService, private userService: UserService) { }

    async createOrder(order: Order): Promise<Order> {
        return new this.orderModel(order).save()
    }

    async findAll(): Promise<OrderDocument[]> {
        return this.orderModel.find()
    }

    async findAllDetailed(): Promise<OrderDtoDetail[]> {
        const result: OrderDtoDetail[] = []
        const orders = await this.findAll()
        orders.forEach(async order => {
            const user = await this.userService.findById(order.userId)
            const products = await Promise.all(order.productsId.map(async id => await this.productService.findById(id)))
            result.push(new OrderDtoDetail(order._id, user, products))
        })
        return result
    }

    async findById(id: string): Promise<OrderDocument> {
        return this.orderModel.findById(id)
    }

    async findByIdDetailed(id: string): Promise<OrderDtoDetail> {
        const order = await this.findById(id)
        const user = await this.userService.findById(order.userId)
        const products = await Promise.all(order.productsId.map(async id => await this.productService.findById(id)))
        return new OrderDtoDetail(order._id, user, products)
    }

    async findByUserId(id: string): Promise<OrderDocument[]> {
        return this.orderModel.find({
            name: {
                $regex: "/.*(" + name + ").*/"
            }
        })
    }

    async updateOrder(id: string, newOrder: OrderDocument): Promise<Order> {
        return (await this.orderModel.findById(id)).updateOne(newOrder)
    }

    async delete(id: string) {
        return this.orderModel.findById(id).remove()
    }
}
