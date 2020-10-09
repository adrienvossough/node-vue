
import { NotFoundException } from "@nestjs/common";
import { Product, ProductDocument } from "../product.schema";

/**
 * Il est déconseillé de mettre un I devant une interface
 * C'est une ancienne convention du Java
 * On ne doit pas faire la différence entre Interface et implémentation avec l'injection de dépendances
 */
export interface IProductService {
    createProduct(product: Product): any;
    findAll(): any;
    findById(id: string): Promise<ProductDocument> | NotFoundException;
    findByName(name: string): any;
    updateProduct(id: string, newProduct: ProductDocument): any;
    delete(id: string): {};
}
