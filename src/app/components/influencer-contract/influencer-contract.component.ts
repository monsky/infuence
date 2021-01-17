import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-influencer-contract',
  templateUrl: './influencer-contract.component.html',
  styleUrls: ['./influencer-contract.component.scss']
})
export class InfluencerContractComponent implements OnInit, OnDestroy {

  public columnNames: Array<string> = [];
  public columnsInsideInfluenserNames: Array<string> = [];
  public columnData: any = {};
  public ordersOpened: Array<boolean> = [];

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.influencerContractColNames;
    this.columnsInsideInfluenserNames = this.appModel.ordersInsideInfluenser;
    this.columnData = this.appModel.influencersAdmin;
  }

  public ngOnDestroy(): void {
  }

  public changeStatusToShipped(request): void {
    request.stateOfShipping = 1;
  }

  public ordersOpenedChange(index: number): void {
    this.ordersOpened[index] = !this.ordersOpened[index];
  }

  public changeStatusToPaid(order): void {

  }

}
