import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  public isUserLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) ? true : false;
  }

  public saveShoppingBag(shoppingBag: any): void {
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
  }

  public saveUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  public getShoppingBag(): any {
    return JSON.parse(localStorage.getItem('shoppingBag'));
  }

}

