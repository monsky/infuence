import {Component, OnInit} from '@angular/core';
import {AppModel} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public appModel: AppModel) {
  }

  public ngOnInit(): void {
    this.appModel.getAllProducts().subscribe((products) => {
      this.appModel.products = products;
    });
    this.appModel.getAllInfluencers().subscribe((influencers) => {
      this.appModel.influencers = influencers;
    });
  }

}
