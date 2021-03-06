import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../local-storage-service';
import {AppModel} from '../../app.model';
import {ActivatedRoute, ActivationEnd, ParamMap, Params, Router} from '@angular/router';
import {Category} from '../../interfaces';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public categories: Array<any> = [];
  public selectedCategory: Category;
  public selectedArray: Array<any> = [];
  public searchWord: string;
  public searchResultsInfluencers: Array<any> = [];
  public searchResultsItems: Array<any> = [];
  public searchFlag: boolean;
  private subscription: Subscription;
  private catergoryId: number;


  constructor(public localStorageService: LocalStorageService,
              public router: Router,
              public appModel: AppModel,
              public cdr: ChangeDetectorRef,
              public activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      )
      .subscribe(params => {
        this.catergoryId = params.categoryId;
      });
    this.appModel.getCategoriesSubject().subscribe((value) => {
      if (value.length !== 0) {
        this.categories = this.appModel.categories;
        this.cdr.detectChanges();
        this.selectedCategory = this.appModel.categories.filter(item => item.id == this.catergoryId)[0]
      }
    });
  }


  public choseCategory(category): void {
    this.selectedCategory = category;
    this.selectedArray = [];
  }

  public applySearch(searchWord): void {
    this.searchResultsInfluencers = [];
    this.searchResultsItems = [];
    if (searchWord.length > 2) {
      this.appModel.influencers.filter((influencer) => {
        influencer['first_name'].substring(0, searchWord.length).toLowerCase() == searchWord.toLowerCase() ?
          this.searchResultsInfluencers.push(influencer) : '';
      });
      this.appModel.products.filter((item) => {
        item.name.substring(0, searchWord.length).toLowerCase() == searchWord.toLowerCase() ?
          this.searchResultsItems.push(item) : '';
      });
      this.searchFlag = true;
    }
  }

  public goToPage(route: string, id: number): void {
    this.searchFlag = false;
    this.searchWord = '';
    this.router.navigateByUrl(route + id);
  }

}
