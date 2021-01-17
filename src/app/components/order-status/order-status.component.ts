import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit, OnDestroy {

  public columnNames: Array<string> = [];
  public columnsInsideOrders: Array<string> = [];
  public columnData: any = {};
  public details: Array<boolean> = [];

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.orderStatusColNames;
    this.columnsInsideOrders = this.appModel.columnsInsideOrders;
    this.columnData = this.appModel.orders;
    for ( let i = 0; i < this.appModel.orders.length; i++) {
      this.details[i] = false;
    }
  }

  public ngOnDestroy(): void {
  }

  public detailsOpened(index: number): void {
    console.log(this.details)
    this.details[index] = !this.details[index];
  }

}
