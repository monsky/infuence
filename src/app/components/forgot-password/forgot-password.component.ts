import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  public emailFocused = false;

  public email = '';

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

  public retreivePassword(){
    console.log(this.email);
  }
}
