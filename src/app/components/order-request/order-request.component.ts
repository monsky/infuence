import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-request',
  templateUrl: './order-request.component.html',
  styleUrls: ['./order-request.component.scss']
})
export class OrderRequestComponent implements OnInit, OnDestroy {

  public columnNames: Array<string> = [];
  public columnData: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.orderRequestColNames;
    this.columnData = this.appModel.productRequests;
  }

  public ngOnDestroy(): void {
  }

  public approveRequest(request): void {
    request.orderStatus = 1;
  }

  public rejectRequest(request): void {
    request.orderStatus = 0;
  }

}
