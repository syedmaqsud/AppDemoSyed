import { Iproduct } from './../iproduct';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'assets/products.json';
  constructor( private http : HttpClient) { }



  getProducts() : Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(this.apiUrl).pipe
    (
      tap(data => console.log(JSON.stringify(data)))
    );

   }

}
