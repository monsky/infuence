import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-print-shop-contract',
  templateUrl: './print-shop-contract.component.html',
  styleUrls: ['./print-shop-contract.component.scss']
})
export class PrintShopContractComponent implements OnInit, OnDestroy {

  public columnNames: Array<string> = [];
  public columnData: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.printShopContractColNames;
    this.columnData = this.appModel.printShopContractData;
  }

  public ngOnDestroy(): void {
  }

}
