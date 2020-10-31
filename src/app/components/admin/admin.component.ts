import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  public tableDataHeader: Array<string> = [
    'Datum',
    'Ime influensera',
    'Ime artikla',
    'Id artikla',
    'Kolicina',
    'Velicina',
    'Cena',
    'Boja',
    'Datum isporuke',
    'Da li je isporuceno',
    'Da li je placeno influenseru',
    'Procenat influensera',
    'Procenat',
    'Zarada influensera',
    'Zarada'
  ];
  public tableData: Array<any> = [
    {
      date: '12/10/2020',
      influencerName: 'Ena Luna',
      influencerId: 0,
      articalId: 0,
      articalName: 'Majica 10',
      amount: 2,
      size: 'M',
      prize: 1256,
      color: 'red',
      dateOfShipping: '12/10/2020',
      stateOfShipping: 0,
      isInfluencerPaid: 1,
      percentOfInfluencer: 40,
      percent: 40,
      earnedOfInfluencer: 1000,
      earned: 1000,
    },
    {
      date: '15/10/2020',
      influencerName: 'Ena Luna',
      influencerId: 0,
      articalId: 0,
      articalName: 'Majica 20',
      amount: 2,
      size: 'M',
      prize: 1256,
      color: 'red',
      dateOfShipping: '12/10/2020',
      stateOfShipping: 0,
      isInfluencerPaid: 1,
      percentOfInfluencer: 40,
      percent: 40,
      earnedOfInfluencer: 1000,
      earned: 1000,
    }
  ];
  public categorySelected: number = 0;
  private subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute,
              public appModel: AppModel,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {

      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public changeCategory(category: number): void {
    this.categorySelected = category;
  }
}
