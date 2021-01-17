import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  public colors: Array<string> = ['Black', 'White', 'Red'];
  public item: any;
  private subscription: Subscription;
  public bagItem: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.item = this.appModel.products.filter(item => item.id === id)[0];
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseSize(size): void {
    this.bagItem.size = size;
  }

  public choseColor(color): void {
    this.bagItem.color = color;
  }

  public addToShoppingBag(): void {
    this.bagItem.id = this.item.id;
    this.bagItem.name = this.item.name;
    this.bagItem.category = this.item.category;
    this.bagItem.price = this.item.prize;
    this.bagItem.owner = this.item.owner;
    this.bagItem.imgUrl = this.item.imgUrl;
    this.bagItem.quantity = 1;

    this.appModel.bagItems.push(this.bagItem);
  }

}
