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
    this.columnData = this.appModel.orderRequestData;
  }

  public ngOnDestroy(): void {
  }

  public approveRequest(request): void {
    console.log(request.orderStatus);
    request.orderStatus = 1;
    console.log(request.orderStatus);
  }

  public rejectRequest(request): void {
    console.log(request.orderStatus);
    request.orderStatus = 0;
    console.log(request.orderStatus);
  }

}
