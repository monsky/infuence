import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {SIZES} from '../../consts';
import {OrderItem} from '../../classes';
import {LocalStorageService} from '../../local-storage-service';
import {NgxSpinnerService} from 'ngx-spinner';

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
  public sizes = SIZES;
  public addedToBagFlag: boolean;

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router,
              private spinnerService: NgxSpinnerService) {
  }

  public ngOnInit(): void {
    this.bagItem.size = 'S';
    this.spinnerService.show();
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.item = this.appModel.products.filter(item => item.id === id)[0];
        if (!this.item) {
          this.router.navigateByUrl('/not-found');
        }
      });
    this.appModel.getProductsSubject().subscribe((value) => {
      if (value.length !== 0) {
        this.spinnerService.hide();
      }
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseSize(size): void {
    this.addedToBagFlag = false;
    this.bagItem.size = size;
  }

  public choseColor(color): void {
    this.bagItem.color = color;
  }

  public addToShoppingBag(): void {
      const bagItem: OrderItem = new OrderItem(this.item.imgUrl, this.item.name, 1, this.item.id, this.item.idSeller, '', this.item.prize,  this.bagItem.size)
      this.appModel.bagItems.push(bagItem);
      this.addedToBagFlag = true;
      this.bagItem = {};
  }

}
