import {Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-shopping-bag-item',
  templateUrl: './shopping-bag-item.component.html',
  styleUrls: ['./shopping-bag-item.component.scss']
})
export class ShoppingBagItemComponent implements OnInit, OnDestroy {

  @Input() itemData;
  @Output() deleteItemEvent = new EventEmitter();
  public items: Array<number> = [];

  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.items = this.appModel.bagItems;
  }

  public ngOnDestroy(): void {
  }

  public plusOnClick(): void {
    this.itemData.amount++;
    if (this.itemData.amount > 10) {
      this.itemData.amount = 10;
    }
  }

  public minusOnClick(): void {
    this.itemData.amount--;
    if (this.itemData.amount < 1) {
      this.itemData.amount = 1;
    }
  }

  public deleteOnClick(): void {
    this.deleteItemEvent.emit(this.itemData);
  }

}
