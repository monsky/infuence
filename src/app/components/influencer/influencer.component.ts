import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LocalStorageService} from '../../local-storage-service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit, OnDestroy {
  public selectedItems: Array<any> = [];
  public item: any;
  public addProductButton: boolean;
  public influencer: any;
  private subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              public localStorage: LocalStorageService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.selectedItems = this.appModel.products.filter(item => item.idSeller === id);
        this.influencer = this.appModel.influencers.filter(influencer => influencer.id === id)[0];
        this.addProductButton = id === this.localStorage.getUser()?.id;
        if (!this.influencer) {
          this.router.navigateByUrl('/not-found');
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseListItem(item): void {
    this.router.navigateByUrl('/item/' + item.id);
  }

}
