import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Store } from '../models/Store'
import { Brand } from '../models/Brand'
import { API_HOST, API_HOST_PORT } from '../global.data/var.constants';

@Injectable({
  providedIn: 'root'
})
export class IntegrationsCoreService {

  brand: any;
  SERVER = `http://${API_HOST}:${API_HOST_PORT}`;

  constructor(private http: HttpClient) {}

  findAllStores(token): Observable<any[]> {
    // console.log(brand);
    let url = `${this.SERVER}/api/restaurantes/buscar?idcadena=${ this.brand.idCadena }`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${ token }`)
    });
  }

  findAllBrands(token): Observable<any[]> {
    // console.log(token);
    let url = `${this.SERVER}/api/cadenas`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${ token }` )
    });
  }

  setBrand(brand) {
    this.brand = brand;
  }

  getBrand(){
    return this.brand;
  }

}
