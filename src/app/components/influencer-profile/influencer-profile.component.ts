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
    'No', 'Naziv', 'Kolicina', 'Cena', 'Datum', 'Status', 'Isplaceno', 'Zarada'
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
        // TODO: userData from model
        this.userData = {
          id: 0,
          name: 'Ena Luna',
          contract: 50,
          contractId: 0,
          earned: 1234,
          itemCount: 5,
          tableData: [
            {
              id: 0,
              name: 'Majica 5',
              amount: 2,
              prize: 1256,
              date : '12/10/2020',
              state: 'Isporuceno',
              isInfluencerPaid: 1,
              earned: 1
            },
            {
              id: 1,
              name: 'Majica 4',
              amount: 1,
              prize: 628,
              date : '12/10/2020',
              state: 'Neisporuceno',
              isInfluencerPaid: 0,
              earned: 1
            }
          ]
      };
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseListItem(item): void {
    this.router.navigateByUrl('/item/' + item.id);
  }

}
