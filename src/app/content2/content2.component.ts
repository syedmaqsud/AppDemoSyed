import { ProductService } from './../shared/service/product.service';
import { Iproduct } from './../shared/iproduct';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit   {

   products : Iproduct[]=[];
   pageTitle : string ="Product Information";
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
this.productService.getProducts().subscribe({
  next : products => this.products = products
})

}


}
