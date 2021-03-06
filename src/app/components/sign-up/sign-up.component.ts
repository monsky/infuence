import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ProductApi, User} from '../../classes';
import {Country, Term} from '../../interfaces';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../local-storage-service';
import * as moment from 'moment';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  public email = '';
  public pass = '';
  public repeatedPass = '';
  public firstName = '';
  public lastName = '';
  public address = '';
  public city = '';
  public postCode: number;
  public phone: number;
  public imgUrl = '';

  public showPass = false;
  public showRepeatedPass = false;

  public countries: Array<any> = [];
  public terms: Array<any> = [];
  public selectedCountry: Country;
  public selectedTerm: Term;
  public dropDownFocused = false;
  public dropDownFocusedTerms = false;
  public isOrderingOn: boolean;
  public fileToUpload: File = null;
  public formData: FormData = null;

  constructor(public appModel: AppModel,
              public router: Router,
              public localStorage: LocalStorageService) {
  }

  public ngOnInit(): void {
    this.countries = this.appModel.countries;
    this.terms = this.appModel.terms;
    this.selectedCountry = this.countries[0];
    this.selectedTerm = this.terms[0];
    this.isOrderingOn = this.appModel.bagItems.length !== 0;
  }

  public ngOnDestroy(): void {
  }

  public signUp(): void {
    if (this.isOrderingOn === false) {
      const user: User = new User(this.email, this.pass, this.firstName, this.lastName, this.address, this.city, this.postCode, this.phone, this.selectedCountry.serbianName, this.selectedTerm.percent, this.imgUrl);
      this.appModel.createUser(user).subscribe((response) => {
        this.appModel.saveUser(response);
        this.router.navigateByUrl('/product-creation');
      });
    } else {
      const orderObject = {
        email: this.email,
        name: this.firstName,
        last_name: this.lastName,
        address: this.address,
        city: this.city,
        zip_code: this.postCode,
        mobile: this.phone,
        img_url: this.imgUrl,
        country: this.selectedCountry.serbianName,
        date: moment().toDate().toDateString(),
        order_products: this.appModel.bagItems
      };
      this.appModel.createOrder(orderObject).subscribe((response) => {
        this.router.navigateByUrl('');
      });
    }
  }

  public toggleShowPassword(): void {
    this.showPass = !this.showPass;
  }

  public toggleShowRepeatedPassword(): void {
    this.showRepeatedPass = !this.showRepeatedPass;
  }

  public dropDownFocusIn(): void {
    this.dropDownFocused = !this.dropDownFocused;
  }

  public dropDownFocusOut(): void {
    this.dropDownFocused = false;
  }

  public dropDownFocusInTerms(): void {
    this.dropDownFocusedTerms = !this.dropDownFocusedTerms;
  }

  public dropDownFocusOutTerms(): void {
    this.dropDownFocusedTerms = false;
  }

  public selectCountry(country): void {
    this.selectedCountry = country;
  }

  public selectTerm(term): void {
    this.selectedTerm = term;
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  public uploadFile() {
    console.log(this.fileToUpload)
    this.formData = new FormData();
    this.formData.append('fileKey', this.fileToUpload, this.fileToUpload.name);
    this.appModel.uploadFile(this.formData).subscribe((res) => {
      console.log(this.fileToUpload);
    });
  }

}
