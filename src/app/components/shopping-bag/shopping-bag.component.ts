import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit, OnDestroy {

  public items: Array<number> = [];

  public selectedItem = null;

  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.items = this.appModel.bagItems;
  }

  public ngOnDestroy(): void {
  }

  public plusOnClick(itm): void {
    itm.quantity++;
    if (itm.quantity > 10) {
      itm.quantity = 10;
    }
  }

  public minusOnClick(itm): void {
    itm.quantity--;
    if (itm.quantity < 1) {
      itm.quantity = 1;
    }
  }

  public deleteOnClick(index): void {
    this.items.splice(index, 1);
  }

  public openModalConfirmDelete(){
    this.appModel.isModalConfirmDeleteOpened = true;
  }

}
