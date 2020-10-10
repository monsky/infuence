import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit, OnDestroy {
  public selectedItems: Array<any> = [];
  public item: any;
  public influencer: any;
  private subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.selectedItems = this.appModel.items.filter(item => item.owner === id);
        this.influencer = this.appModel.influencers.filter(item => item.id === id)[0];
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseListItem(item): void {
    this.router.navigateByUrl('/item/' + item.id);
  }

}
