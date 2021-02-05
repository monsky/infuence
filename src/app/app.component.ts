import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppModel} from './app.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ProductApi} from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(public appModel: AppModel,
              private cdr: ChangeDetectorRef,
              private spinnerService: NgxSpinnerService) {
  }

  public ngOnInit(): void {
    this.spinnerService.show();

    this.appModel.getAllProducts().subscribe((products: Array<any>) => {
      this.appModel.products = products.map(product => new ProductApi(product));
      this.appModel.productsLoaded  = true;
      this.checkHideLoader();
    });

    // this.appModel.getAllInfluencers().subscribe((influencers) => {
    // this.influensersLoaded  = true;
    // this.appModel.influencers = influencers;
    // });

    this.appModel.getAllCategories().subscribe((categories) => {
      this.appModel.categories = categories;
      this.appModel.categoriesLoaded  = true;
      this.checkHideLoader();
    });

    this.appModel.getAllSizes().subscribe((sizes) => {
      this.appModel.sizes = sizes;
      this.appModel.sizesLoaded  = true;
      this.checkHideLoader();
    });

    this.appModel.getAllColors().subscribe((colors) => {
      this.appModel.colors = colors;
      this.appModel.colorsLoaded  = true;
      this.checkHideLoader();
    });
  }

  public checkHideLoader(): void {
    if ( this.appModel.productsLoaded && this.appModel.influensersLoaded && this.appModel.categoriesLoaded && this.appModel.sizesLoaded && this.appModel.colorsLoaded) {
      this.cdr.detectChanges();
      this.spinnerService.hide();
    }
  }


}
