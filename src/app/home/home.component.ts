import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IntegrationsCoreService } from '../services/integrations-core.service';
// import { Brand } from '../models/Brand';

//Constants
import { TOKEN_NAME } from '../global.data/var.constants';

declare function initDynamicJS();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  description = "Loading Brands...";
  status = "none";
  level = 100;

  brands = new Array();

  constructor( private _integrationsCoreService: IntegrationsCoreService, public router: Router ) { }

  brandSelected(brand) {
    // console.log(brand)
    this._integrationsCoreService.setBrand(brand);
    this.router.navigate([ '/index' ]);
  }

  ngOnInit() {
    //Init Framework DynamicsJS
    initDynamicJS();

    //Obtener token
    let token = localStorage.getItem(TOKEN_NAME);
    if(!token) {
      // Go to /Home
      this.router.navigate(["/"]);
    }

    //Load Brands
    this._integrationsCoreService.findAllBrands(token).subscribe(data => {
      console.log(data);
      this.brands = data;
      this.level = 100;
      this.status = "none";
    }, error => {
      console.log(error);
    });

    // this.brands = [
    //   {
    //       "idBrand": 12,
    //       "description": "JUAN VALDEZ",
    //       "image": "logo_jv.jpg",
    //       "tradeName": "JUAN VALDEZ"
    //   }
    // ];
  }

}
