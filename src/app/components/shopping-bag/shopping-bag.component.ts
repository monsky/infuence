import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit, OnDestroy {

  public items: Array<number> = [];

  public selectedItem = null;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public editOnClick(buttonId): void {
    console.log('edit button ' + buttonId);
  }

  public deleteOnClick(buttonId): void {
    console.log('delete button ' + buttonId);
  }

}
