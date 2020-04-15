import { Component, OnInit } from '@angular/core';

declare function initDynamicJS();

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initDynamicJS();
  }

}
