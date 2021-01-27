import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public emailFocused = false;
  public passwordFocused = false;
  public showPass = false;

  public email = '';
  public pass = '';

  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public emailFocus() {
    this.emailFocused = true;
  }

  public emailFocusOut() {
    this.emailFocused = false;
  }

  public passwordFocus() {
    this.passwordFocused = true;
  }

  public passwordFocusOut() {
    this.passwordFocused = false;
  }

  public toggleShowPassword() {
    this.showPass = !this.showPass;
  }

  public login() {
    console.log(this.email);
    console.log(this.pass);
  }

}
