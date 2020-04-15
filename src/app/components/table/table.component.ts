import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  @Input("title") title = [];
  @Input("data") data = [];

  @Output() voted = new EventEmitter<number>();

  rowSelected;

  constructor() { }

  ngOnInit() {
  }

  selectRow(id) {
    this.voted.emit(id);
    this.rowSelected = id;
  }

}
