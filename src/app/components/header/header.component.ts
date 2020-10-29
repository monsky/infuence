import { Component } from '@angular/core';
import {LocalStorageService} from '../../local-storage-service';
import {AppModel} from '../../app.model';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public categories: Array<any> = [
    { id: 0, name: 'majice'},
    { id: 1, name: 'duksevi'},
    { id: 2, name: 'rokovnici'}
  ];
  public selectedCategory = { id: 0, name: 'majice'};
  public selectedArray: Array<any> = [];
  public searchWord: string = '';
  public searchResultsInfluencers: Array<any> = [];
  public searchResultsItems: Array<any> = [];
  public searchFlag: boolean;

  constructor(public localStorageService: LocalStorageService,
              public router: Router,
              public appModel: AppModel) {
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
        influencer.name.substring(0, searchWord.length).toLowerCase() == searchWord.toLowerCase() ?
          this.searchResultsInfluencers.push(influencer) : '';
      });
      this.appModel.items.filter((item) => {
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
