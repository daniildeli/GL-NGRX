import {IProduct} from 'src/app/products/interface/product.interface';

export interface ICart extends IProduct {
  amount: number;
}
