import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public profile: any = {};

  public selectedItem = null;

  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.profile = this.appModel.user;
  }

  public ngOnDestroy(): void {
  }


}
