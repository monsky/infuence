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
  public columnData: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.orderStatusColNames;
    this.columnData = this.appModel.orderStatusData;
  }

  public ngOnDestroy(): void {
  }

  public changeStatusToPrinted(request): void {
    request.orderStatus = 1;
  }

  public chagneStatusToWaiting(request): void {
    request.orderStatus = 0;
  }

}
