import {Injectable} from '@angular/core';
import {SignalOne} from '../libs/signal/SignalOne';

@Injectable({
  providedIn: 'root'
})
export class AppModel {
  public readonly categoryChanged: SignalOne<string> = new SignalOne<string>();
  public bagItems: Array<any> = [
    {
      id: 4,
      name: 'Majica 4',
      category: 2,
      price: 1000.00,
      size: 'XL',
      color: 'red',
      owner: 1,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      quantity: 3
    },
    {
      id: 5,
      name: 'Majica 3',
      category: 2,
      price: 1300,
      size: 'L',
      color: 'blue',
      owner: 1,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      quantity: 2
    }
  ];
  public items: Array<any> = [
    {
      id: 0,
      name: 'Majica 1',
      category: 0,
      prize: 1000.00,
      availableSizes: ['s', 'm'],
      availableColors: ['red', 'blue'],
      description: 'labalabalbalalalall',
      owner: 0,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 1,
      name: 'Majica 2',
      category: 0,
      prize: 1000.00,
      availableSizes: ['s'],
      availableColors: ['red', 'blue'],
      description: 'labalabalbalalalall',
      owner: 0,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 2,
      name: 'Majica 3',
      category: 1,
      prize: 1000.00,
      availableSizes: ['s'],
      availableColors: ['red', 'blue'],
      description: 'labalabalbalalalall',
      owner: 2,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 3,
      name: 'Majica 4',
      category: 1,
      prize: 1000.00,
      availableSizes: ['s'],
      availableColors: ['red', 'blue'],
      description: 'labalabalbalalalall',
      owner: 2,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 4,
      name: 'Majica 4',
      category: 2,
      prize: 1000.00,
      availableSizes: [],
      availableColors: ['red', 'blue'],
      description: 'labalabalbalalalall',
      owner: 1,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 5,
      name: 'Majica 5',
      category: 2,
      prize: 1000.00,
      availableSizes: [],
      availableColors: ['red', 'blue'],
      description: 'labalabalbalalalall',
      owner: 1,
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    }
  ];
  public influencers: Array<any> = [
    {
      id: 0,
      name: 'Ena Luna',
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 1,
      name: 'Dunja Jovanic',
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 2,
      name: 'Zoranah',
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    },
    {
      id: 3,
      name: 'Sara Jo',
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg'
    }
  ];
  public user: any = {
    id: 1,
    firstName: 'Marko',
    lastName: 'Trajkovic',
    eMail: 'markotrajkovic88@gmail.com',
    phoneNumber: '0658889991',
    city: 'Beograd',
    street: 'Južni bulevar',
    streetNumber: '85',
    postalCode: '11000',
    favorites: [],
    shipments: [],
  };

  constructor() {
  }

}
