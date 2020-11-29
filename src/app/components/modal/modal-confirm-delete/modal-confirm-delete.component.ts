import {Component} from '@angular/core';
import {AppModel} from '../../../app.model';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})
export class ModalConfirmDeleteComponent {

  constructor(public appModel: AppModel) {
  }

  public emptyShoppingBag(): void {
    this.appModel.bagItems.splice(0, this.appModel.bagItems.length);
    this.appModel.isModalConfirmDeleteOpened = false;
  }

  public closeModalConfirmDelete() {
    this.appModel.isModalConfirmDeleteOpened = false;
  }

}
