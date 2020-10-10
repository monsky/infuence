import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit, OnDestroy {
  public influencers: Array<any> = [];

  constructor(public appService: AppService,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.influencers = this.appModel.influencers;
  }

  public ngOnDestroy(): void {
  }

  public choseListItem(item): void {
    this.appService = item;
    this.router.navigateByUrl('/influencers/' + item.id);
  }
}
