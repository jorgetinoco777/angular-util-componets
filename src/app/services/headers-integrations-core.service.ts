import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

//Constants
import { TOKEN_NAME } from '../global.data/var.constants';

@Injectable({
  providedIn: 'root'
})
export class HeadersIntegrationsCoreService {

  headers: HttpHeaders;

  constructor() {}

  getHeaders(): HttpHeaders {
    //Iniciar HttpHeaders
    this.headers = new HttpHeaders;
    //Lectura SessionStorage
    let infoToken = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    //Lectura Token del SessionStorage
    let token = infoToken.access_token;
    //Content-type: application/json
    this.headers = this.headers.append('Content-Type', 'application/json');
    if (token !== null) {
      //Content-type: application/json
      this.headers = this.headers.append('Authorization', `Bearer ${ token }`);
    }
    return this.headers;
  }

}
