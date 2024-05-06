import { Injectable } from '@angular/core';
import { Product } from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Product[] = []
}
