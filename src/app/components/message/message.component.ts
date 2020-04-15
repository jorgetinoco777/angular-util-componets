import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {

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
