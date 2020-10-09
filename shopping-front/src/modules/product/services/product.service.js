import { Product } from '../models/Product';
import { BehaviorSubject } from 'rxjs'
import ApiService from '@/modules/api/api.service'

class ProductService extends ApiService {
    _productsSub = new BehaviorSubject([])
    productsObs = this._productsSub.asObservable()
    _productSub = new BehaviorSubject(new Product())
    productObs = this._productSub.asObservable()

    getProducts = () => {
        this.getAll().then(products => this._productsSub.next(products))
    }

    getProductById = (id) => {
        this.getById(id).then(product => this._productSub.next(product))
    }

}

export default Object.freeze(new ProductService(process.env.BACK_PROTOCOL, process.env.BACK_HOST, process.env.BACK_PORT, Product, 'product'))