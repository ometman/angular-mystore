import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product:  Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // get product from current route
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find product that corresponds with the proudct Id in route
    this.product = products.find(product => product.id === productIdFromRoute);
    
  }

}
