import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: []
})
export class PageHeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
