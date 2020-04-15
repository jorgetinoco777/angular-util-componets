import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Constants
import { API_HOST, API_HOST_PORT, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from '../global.data/var.constants';
import { Observable } from 'rxjs';

//Models
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthIntegrationsCoreService {

  SERVER = `http://${ API_HOST }:${ API_HOST_PORT }`;

  constructor(private http: HttpClient) { }

  userAuthentification(user: string, password: string):any {
    const body = `grant_type=password&username=${ encodeURIComponent(user) }&password=${ encodeURIComponent(password) }`;
    let url = `${ this.SERVER }/oauth/token`;
    return this.http.post(url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8').set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD))
    });
  }

}
