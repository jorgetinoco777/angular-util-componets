import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent implements OnInit {

  styles = {
    "warning": {
      class: "alert-warning",
      icon: "glyphicon-warning-sign"
    },
    "danger": {
      class: "alert-danger",
      icon: "glyphicon-ban-circle"
    },
    "success": {
      class: "alert-success",
      icon: "fa-check"
    },
    "info": {
      class: "alert-info",
      icon: "glyphicon-info-sign"
    }
  };
  title: string = "Listo!";
  message: string = "Proceso correctamente ejecutado.";
  option: string = "success";

  constructor() { }

  ngOnInit() {
  }

}
