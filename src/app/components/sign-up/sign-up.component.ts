import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';

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
  public zipCode = '';
  public phone = '';

  public showPass = false;
  public showRepeatedPass = false;

  public countries: Array<any> = [];
  public selectedCountry = {};
  public dropDownFocused = false;

  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.countries = this.appModel.countries;
    this.selectedCountry = this.countries[0];
  }

  public ngOnDestroy(): void {
  }

  public signUp() {
    console.log(this.email);
    console.log(this.pass);
    console.log(this.repeatedPass);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.address);
    console.log(this.city);
    console.log(this.zipCode);
    console.log(this.phone);
    // user : User = new User(email...);
    // this.appModel.createUser(user);
  }

  public toggleShowPassword() {
    this.showPass = !this.showPass;
  }

  public toggleShowRepeatedPassword() {
    this.showRepeatedPass = !this.showRepeatedPass;
  }

  public dropDownFocusIn() {
    this.dropDownFocused = true;
    console.log('focused');
  }

  public dropDownFocusOut() {
    this.dropDownFocused = false;
    console.log('Not focused');
  }

  public selectCountry(country) {
    this.selectedCountry = country;
    console.log(country.id);
    console.log(country.serbianName);
  }

}
