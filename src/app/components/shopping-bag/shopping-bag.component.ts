import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit, OnDestroy {

  public items: Array<number> = [];

  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.items = this.appModel.bagItems;
  }

  public ngOnDestroy(): void {
  }

  public deteleItem(item): void {
    const i = this.items.indexOf(item);
    if (i >= 0) {
      this.items.splice(i, 1);
    }
  }

  public openModalConfirmDelete() {
    this.appModel.isModalConfirmDeleteOpened = true;
  }

}
