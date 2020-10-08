import { Product } from '../models/Product';

class ProductService extends ApiService {

}

export default Object.freeze(new ProductService(process.env.BACK_PROTOCOL, process.env.BACK_HOST, process.env.BACK_PORT, Product, 'products'))