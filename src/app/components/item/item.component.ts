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
  public colors: Array<string> = [ 'Black', 'White', 'Red'];
  public item: any;
  private subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.item = this.appModel.items.filter(item => item.id === id)[0];
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseSize(size): void {
    this.appModel.bagItem.size = size;
  }

  public choseColor(color): void {
    this.appModel.bagItem.color = color;
  }

}
