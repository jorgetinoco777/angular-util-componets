import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: []
})
export class ProgressBarComponent implements OnInit {

  @Input("description") description: String = "Ejecutando";
  @Input("status") status: String = "none";
  @Input("level") level: number = 0;

  // description: String;
  // status: String;
  // level: number;

  constructor() {
    // console.log(this.description);
  }

  ngOnInit() {
    // console.log(this.description);
  }

}
