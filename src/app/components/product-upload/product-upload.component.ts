import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {Category, Color, Product, Size} from '../../interfaces';
import {ProductApi} from '../../classes';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.scss']
})
export class ProductUploadComponent implements OnInit, OnDestroy {

  public name: string;
  public prize: number;
  public colors: Array<Color> = [];
  public selectedColor: Color;
  public sizes: Array<any> = [];
  public selectedSize: Size;
  public imgUrl: string;
  public categories: Array<Category> = [];
  public selectedCategory: Category;
  public itemsSold: number;

  public dropDownFocusedCategories = false;
  public dropDownFocusedColor = false;
  public dropDownFocusedSize = false;

  constructor(public appModel: AppModel,
              private spinnerService: NgxSpinnerService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.categories = this.appModel.categories;
    this.colors = this.appModel.colors;
    this.sizes = this.appModel.sizes;
    this.selectedCategory = this.categories[0];
    this.selectedColor = this.colors[0];
    this.selectedSize = this.sizes[0];
  }

  public ngOnDestroy(): void {
  }

  public createProduct() {
    const product: Product = {
      name: this.name,
      id_seller: this.appModel.user.id,
      prize: this.prize,
      color: this.selectedColor.name,
      // 'sizes': self.sizes,
      img_url: this.imgUrl,
      category_id: this.selectedCategory.id,
      category_name: this.selectedCategory.name,
      items_sold: 0
    }
    this.appModel.createProduct(product).subscribe(() => {
      this.spinnerService.show();
      this.appModel.getAllProducts().subscribe((products: Array<any>) => {
        this.appModel.products = products.map(productRes => new ProductApi(productRes));
        this.appModel.productsLoaded  = true;
        this.spinnerService.hide();
        this.router.navigateByUrl('/category/' + product.category_id);
      });
    });
  }

  public dropDownFocusInCategories() {
    this.dropDownFocusedCategories = !this.dropDownFocusedCategories;
  }

  public dropDownFocusOutCategories() {
    this.dropDownFocusedCategories = false;
  }

  public dropDownFocusInColor() {
    this.dropDownFocusedColor = !this.dropDownFocusedColor;
  }

  public dropDownFocusOutColor() {
    this.dropDownFocusedColor = false;
  }

  public dropDownFocusInSize() {
    this.dropDownFocusedSize = !this.dropDownFocusedSize;
  }

  public dropDownFocusOutSize() {
    this.dropDownFocusedSize = false;
  }

  public dropdownSelect(selection: any, type: number) {
    switch (type) {
      case 0:
        this.selectedColor = selection;
        break;
      case 1:
        this.selectedSize = selection;
        break;
      case 2:
        this.selectedCategory = selection;
        break;
      default:
        break;
    }
  }

}
