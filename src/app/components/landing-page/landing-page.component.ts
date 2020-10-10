import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  public selectedItems = [];
  private subscription: Subscription;

  constructor(public appService: AppService,
              public cdr: ChangeDetectorRef,
              public appModel: AppModel,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.selectedItems = [];
        const id = params.id ? Number(params.id) : 0;
        this.appModel.items.map(item => (item.category === id) ? this.selectedItems.push(item) : '');
        this.cdr.detectChanges();
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public choseListItem(item): void {
    this.appService = item;
    this.router.navigateByUrl('/item/' + item.id);
  }
}
