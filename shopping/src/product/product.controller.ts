import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    async create(@Body() product: Product) {
        return this.productService.createProduct(product)
    }

    @Get()
    async findAll() {
        return this.productService.findAll()
    }

    @Get(':id')
    async findById(@Param() param) {
        return this.productService.findById(param.id)
    }

    @Get('name/:name')
    async findByname(@Param() param) {
        return this.productService.findByName(param.name)
    }

    @Put(':id')
    async updateproduct(@Param() param, @Body() product: ProductDocument) {
        return this.productService.updateProduct(param.id, product)
    }

    @Delete(':id')
    async delete(@Param() param) {
        this.productService.delete(param.id)
    }
}
