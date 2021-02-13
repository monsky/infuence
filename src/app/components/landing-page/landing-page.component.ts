import {ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';
import {AppModel} from '../../app.model';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {NgxSpinnerService} from 'ngx-spinner';

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
              private activatedRoute: ActivatedRoute,
              private spinnerService: NgxSpinnerService) {
  }

  public ngOnInit(): void {
    this.spinnerService.show();
    let id = 0;
    this.subscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.selectedItems = [];
        id = params.categoryId ? Number(params.categoryId) : 1;
        this.appModel.products.map(item => (item.categoryId == id) ? this.selectedItems.push(item) : '');
        this.cdr.detectChanges();
      });
    this.appModel.getProductsSubject().subscribe((value) => {
      if (value.length !== 0) {
        this.spinnerService.hide();
      }
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
