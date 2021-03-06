import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductApi} from '../../classes';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-order-request',
  templateUrl: './order-request.component.html',
  styleUrls: ['./order-request.component.scss']
})
export class OrderRequestComponent implements OnInit, OnDestroy {

  public columnNames: Array<string> = [];
  public columnData: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              private spinnerService: NgxSpinnerService,
              public appModel: AppModel,
              public cdr: ChangeDetectorRef,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.orderRequestColNames;
    this.columnData = this.appModel.productRequests;
  }

  public ngOnDestroy(): void {
  }

  private approveDissaproveProduct(requestData): void {
    this.appModel.approveDissapproveProduct(requestData).subscribe(() => {
      this.spinnerService.show();
      this.appModel.getProductRequests().subscribe((products) => {
        this.appModel.productRequests = products;
        this.spinnerService.hide();
        this.columnData = this.appModel.productRequests;
      });
    });
  }

  public approveRequest(data): void {
    const requestData: any = {
      id: data.id,
      flag: true
    };
    this.approveDissaproveProduct(requestData);
  }

  public rejectRequest(data): void {
    const requestData: any = {
      id: data.id,
      flag: false
    };
    this.approveDissaproveProduct(requestData);
  }

}
