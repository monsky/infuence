import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public categories: Array<any> = [
    { id: 0, name: 'majice'},
    { id: 1, name: 'duksevi'},
    { id: 2, name: 'rokovnici'}
  ];
  public selectedCategory = { id: 0, name: 'majice'};
  public selectedArray: Array<any> = [];

  constructor() {
  }

  public choseCategory(category): void {
    this.selectedCategory = category;
    this.selectedArray = [];
  }
}
