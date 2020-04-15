import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Servicios
import { IntegrationsCoreService } from '../../../services/integrations-core.service';

//Modelos
import { Store } from 'src/app/models/Store';

//Variables globales
import { TOKEN_NAME } from '../../../global.data/var.constants';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {

  description = "Loading Stores...";
  status = "none";
  level = 100;

  title = new Store().FIELDS;

  stores = new Array();
  
  constructor(private _integrationsCoreService: IntegrationsCoreService, public router: Router) {}

  ngOnInit() {

    //Obtener token
    let token = localStorage.getItem(TOKEN_NAME);
    if(!token) {
      // Go to /Home
      this.router.navigate(["/"]);
    }

    this._integrationsCoreService.findAllStores(token).subscribe(data => {
      console.log(data);
      this.stores = data;
      this.level = 100;
      setInterval(() => {
        this.status = "none";
      }, 1000);
    }, error => {
      this.status = "none";
      console.log(error);
    });

//     this.stores = [
//       {
//           "idStore": 4,
//           "code": "V004",
//           "description": "AEROPUERTO",
//           "address": "GUAYAS / GUAYAQUIL / AV. DE LAS AMERICAS S/N Y SECUNDARIA",
//           "phone": "023955400",
//           "brand": {
//               "idBrand": 12,
//               "description": "JUAN VALDEZ",
//               "image": "logo_jv.jpg",
//               "tradeName": "JUAN VALDEZ"
//           }
//       },
//       {
//           "idStore": 12,
//           "code": "V002",
//           "description": "AMAZONAS",
//           "address": null,
//           "phone": null,
//           "brand": {
//               "idBrand": 12,
//               "description": "JUAN VALDEZ",
//               "image": "logo_jv.jpg",
//               "tradeName": "JUAN VALDEZ"
//           }
//       },
//       {
//           "idStore": 67,
//           "code": "V007",
//           "description": "CUMBAYA",
//           "address": "PICHINCHA / QUITO / PAMPITE S/N Y CHIMBORAZO",
//           "phone": "023955400",
//           "brand": {
//               "idBrand": 12,
//               "description": "JUAN VALDEZ",
//               "image": "logo_jv.jpg",
//               "tradeName": "JUAN VALDEZ"
//           }
//       },
//       {
//           "idStore": 103,
//           "code": "V001",
//           "description": "JARDIN",
//           "address": "PICHINCHA / QUITO / AV. AMAZONAS N6-114 Y AV. REPUBLICA",
//           "phone": "02395400",
//           "brand": {
//               "idBrand": 12,
//               "description": "JUAN VALDEZ",
//               "image": "logo_jv.jpg",
//               "tradeName": "JUAN VALDEZ"
//           }
//       },
//       {
//           "idStore": 166,
//           "code": "V008",
//           "description": "PLAZA DE LAS AMERICAS",
//           "address": "PICHINCHA / QUITO / AV. NACIONES UNIDAS 563 Y AV. REPUBLICA",
//           "phone": "023955400",
//           "brand": {
//               "idBrand": 12,
//               "description": "JUAN VALDEZ",
//               "image": "logo_jv.jpg",
//               "tradeName": "JUAN VALDEZ"
//           }
//       }
//   ];
  }

}
