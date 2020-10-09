import { Body, Controller, Delete, Get, Inject, Param, Post, Put, NotFoundException } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema';
import { IProductService } from './interfaces/Iproduct.service';

@Controller('product')
export class ProductController {
    // voir le module. Nous passons par un label et Interface pour ne pas dépendre de l'implémentation
    constructor(@Inject('IProductService') private productService: IProductService) { }

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
        const productDocument = await this.productService.findById(param.id)

        if(!productDocument) {
            throw new NotFoundException('Pas de produit avec cet ID');
        }
        
        return productDocument;
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
