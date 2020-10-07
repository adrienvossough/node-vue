import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Order, OrderDocument } from './order.schema';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post()
    async create(@Body() order: Order) {
        return this.orderService.createOrder(order)
    }

    @Get()
    async findAll() {
        return this.orderService.findAll()
    }

    @Get('detail')
    async findAllDetailed() {
        return this.orderService.findAllDetailed()
    }

    @Get(':id')
    async findById(@Param() param) {
        return this.orderService.findById(param.id)
    }

    @Get('detail/:id')
    async findByIdDetailed(@Param() param) {
        this.orderService.findByIdDetailed(param.id)
    }

    @Get('user/:id')
    async findByUserId(@Param() param) {
        return this.orderService.findByUserId(param.id)
    }

    @Put(':id')
    async updateorder(@Param() param, @Body() order: OrderDocument) {
        return this.orderService.updateOrder(param.id, order)
    }

    @Delete(':id')
    async delete(@Param() param) {
        this.orderService.delete(param.id)
    }
}
