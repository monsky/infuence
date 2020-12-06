import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-base',
  templateUrl: 'no-ui'
})

export abstract class ModalBase implements OnInit, OnDestroy {

  public abstract close: boolean = false;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public closeModal(): void {
    this.close = true;
  }
}
