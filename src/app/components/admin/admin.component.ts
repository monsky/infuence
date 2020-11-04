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
