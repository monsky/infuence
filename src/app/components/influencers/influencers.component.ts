import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {AppService} from '../../app.service';
import {AppModel} from '../../app.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit, OnDestroy {

  constructor(public appService: AppService,
              public appModel: AppModel,
              private router: Router,
              private spinnerService: NgxSpinnerService) {
  }

  public ngOnInit(): void {
    this.spinnerService.show();
    this.appModel.getInfluensersSubject().subscribe((value) => {
      if (value.length !== 0) {
        this.spinnerService.hide();
      }
    });
  }

  public ngOnDestroy(): void {
  }

  public choseListItem(item): void {
    this.appService = item;
    this.router.navigateByUrl('/influencers/' + item.id);
  }
}
