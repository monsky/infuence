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
  public columnData: any = {};

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.columnNames = this.appModel.influencerContractColNames;
    this.columnData = this.appModel.influencerContractData;
  }

  public ngOnDestroy(): void {
  }

}
