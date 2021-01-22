import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-influencer-profile',
  templateUrl: './influencer-profile.component.html',
  styleUrls: ['./influencer-profile.component.scss']
})
export class InfluencerProfileComponent implements OnInit, OnDestroy {
  public userData: any;
  public tableDataHeader: Array<string> = [
    'No', 'Naziv', 'Kolicina', 'Cena', 'Datum', 'Dostavljeno', 'Isplaceno', 'Zarada'
  ];
  private subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        const id = Number(params.id);
        this.appModel.getUserById(id).subscribe((userData) => {
          // this.appModel.user = userData;
        });
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseListItem(item): void {
    this.router.navigateByUrl('/item/' + item.id);
  }

}
