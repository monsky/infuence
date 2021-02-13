import {Injectable} from '@angular/core';
import {SignalOne} from '../libs/signal/SignalOne';
import {AppService} from './app.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Category, Color, Product, Size} from './interfaces';
import {ProductApi, User} from './classes';
import {LocalStorageService} from './local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class AppModel {
  public categories: Array<Category>;
  public categoriesSubject: BehaviorSubject<Array<Category>>;

  public sizes: Array<Size>;
  public colors: Array<Color>;
  public readonly categoryChanged: SignalOne<string> = new SignalOne<string>();
  public bagItems: Array<any> = [];

  public influencers: Array<any> = [];
  public influencersSubject: BehaviorSubject<Array<any>>;

  public user: any = {};

  public influencerContractColNames: Array<string> = [
    'ID',
    'Ime',
    'Ugovor(%)',
    'Zaradjeno',
    'Zaradjeno prethodnog meseca',
    'Broj prodatih',
    'Porudzbine'
  ];
  public ordersInsideInfluenser: Array<string> = [
    'ID',
    'Datum',
    'Ime',
    // 'ID Artikla',
    'Kolicina',
    'Cena',
    'Velicina',
    'Influenser zaradio',
    'Kompanije zaradila',
    'Dostavljeno',
    'Placeno',
  ];
  public columnsInsideOrders: Array<string> = [
    'Dostavljeno',
    'Placeno',
    'Status',
    'Odobreno'
  ];

  public printShopContractColNames: Array<string> = [
    'Ime poslodavca',
    'Ime ugovora',
    'Broj poručenih artikala'
  ];

  public orderStatusColNames: Array<string> = [
    'Slika',
    'Id',
    'Ime artikla',
    'Id artikla',
    'Kolicina',
    'Cena',
    'Velicina',
    'Datum',
    'Id influensera',
    'Ime influensera',
    'Id narucioca',
    'Ime narucioca',
    'More...'
  ];

  public orderRequestColNames: Array<string> = [
    'Slika',
    'Id porudžbine',
    'Ime poručioca',
    'Ime influensera',
    'Zahtev za odobrenje'
  ];

  public countries: Array<any> = [
    {
      id: 1,
      serbianName: 'Srbija'
    },
    {
      id: 2,
      serbianName: 'Madjarska'
    },
    {
      id: 3,
      serbianName: 'Hrvatska'
    },
    {
      id: 4,
      serbianName: 'Bosna i Hercegovina'
    },
    {
      id: 5,
      serbianName: 'Crna Gora'
    },
    {
      id: 6,
      serbianName: 'Albanija'
    },
    {
      id: 7,
      serbianName: 'Severna Makedonija'
    },
    {
      id: 8,
      serbianName: 'Bugarska'
    },
    {
      id: 9,
      serbianName: 'Rumunija'
    }
  ];

  public terms: Array<any> = [
    {
      id: 1,
      percent: 30
    },
    {
      id: 2,
      percent: 40
    },
    {
      id: 3,
      percent: 50
    },
    {
      id: 4,
      percent: 60
    },
    {
      id: 5,
      percent: 70
    }
  ];

  public isModalConfirmDeleteOpened: boolean = false;

  public products: Array<ProductApi>;
  public productsSubject: BehaviorSubject<Array<any>>;

  public influencersAdmin: Array<any> = [
    {
      id: 0,
      isAdmin: false,
      email: 'irmasumska@yahoo.com',
      firstName: 'Iki',
      lastName: 'Siki',
      address: 'V 157',
      city: 'Belgrade',
      postCode: 11000,
      country: 'Serbia',
      ordersNumber: 20,
      role: 'influencer',
      terms: 50,
      influencerEarned: 3000,
      last_paid: '30/10/2020',
      totalEarned: 2000,
      earnedThisMonth: 100,
      paidThisMonth: true,
      orders: [
        {
          id: 0,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'S',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'M',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'L',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        }
      ],
      products: [
        {
          id: 0,
          name: 'Majica Kat 0',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1600328759671-85927887458d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          categoryId: 0,
          categoryName: 'Majice',
          itemsSold: 30
        },
        {
          id: 1,
          name: 'Majica 2 Kat 1',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1484663548870-2aa675ba38fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: 1,
          categoryName: 'Majice',
          itemsSold: 30
        },
      ],
      favourites: [],
      imgUrl: 'https://images.unsplash.com/photo-1563992891888-3a441b92e7c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 1,
      isAdmin: false,
      email: 'irmasumska@yahoo.com',
      firstName: 'Iki',
      lastName: 'Siki',
      address: 'V 157',
      city: 'Belgrade',
      postCode: 11000,
      country: 'Serbia',
      ordersNumber: 20,
      role: 'influencer',
      terms: 50,
      influencerEarned: 3000,
      last_paid: '30/10/2020',
      totalEarned: 2000,
      earnedThisMonth: 100,
      paidThisMonth: true,
      orders: [
        {
          id: 0,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'L',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'waiting'
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'L',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'L',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'approved'
        }
      ],
      products: [
        {
          id: 2,
          name: 'Majica Kat 1',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1530475329205-1c5333ae40fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
          categoryId: 1,
          categoryName: 'Majice',
          itemsSold: 30
        },
        {
          id: 3,
          name: 'Majica kat 2',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: 2,
          categoryName: 'Majice',
          itemsSold: 30
        }
        ],
      favourites: [],
      imgUrl: 'https://images.unsplash.com/photo-1598137203988-80de6392fc1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 2,
      isAdmin: false,
      email: 'irmasumska@yahoo.com',
      firstName: 'Iki',
      lastName: 'Siki',
      address: 'V 157',
      city: 'Belgrade',
      postCode: 11000,
      country: 'Serbia',
      ordersNumber: 20,
      role: 'influencer',
      terms: 50,
      influencerEarned: 3000,
      last_paid: '30/10/2020',
      totalEarned: 2000,
      earnedThisMonth: 100,
      paidThisMonth: true,
      orders: [
        {
          id: 0,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'L',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'approved'
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'M',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'approved'
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'XL',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'approved'
        }
      ],
      products: [
        {
          id: 2,
          name: 'Majica Kat 1',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1530475329205-1c5333ae40fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
          categoryId: 1,
          categoryName: 'Majice',
          itemsSold: 30
        },
        {
          id: 3,
          name: 'Majica kat 2',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: 2,
          categoryName: 'Majice',
          itemsSold: 30
        }
        ],
      favourites: [],
      imgUrl: 'https://images.unsplash.com/photo-1602751184834-947bd06e8710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 3,
      isAdmin: false,
      email: 'irmasumska@yahoo.com',
      firstName: 'Iki',
      lastName: 'Siki',
      address: 'V 157',
      city: 'Belgrade',
      postCode: 11000,
      country: 'Serbia',
      ordersNumber: 20,
      role: 'influencer',
      terms: 50,
      influencerEarned: 3000,
      last_paid: '30/10/2020',
      totalEarned: 2000,
      earnedThisMonth: 100,
      paidThisMonth: true,
      orders: [
        {
          id: 0,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'S',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'M',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          size: 'XL',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'notApproved'
        }
      ],
      products: [
        {
          id: 2,
          name: 'Majica Kat 1',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1530475329205-1c5333ae40fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
          categoryId: 1,
          categoryName: 'Majice',
          itemsSold: 30
        },
        {
          id: 3,
          name: 'Majica kat 2',
          idSeller: 2,
          prize: 1256,
          colors: [
            'red', 'blue', 'yellow'
          ],
          sizes: [
            'S', 'M', 'L'
          ],
          img: 'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: 2,
          categoryName: 'Majice',
          itemsSold: 30
        }
      ],
      favourites: [],
      imgUrl: 'https://images.unsplash.com/photo-1603771628324-c90909126ccd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
  ];

  public orders: Array<any> = [
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      id: 0,
      name: 'Majica 10',
      idArticle: 0,
      amount: 2,
      prize: 1256,
      size: 'S',
      date: '20/10/2020',
      delivered: false,
      paid: false,
      idInfluenser: 0,
      nameInfluenser: 'Ena',
      idOrderer: 1,
      nameOrderer: 'Irma',
      status: 'printed',
      approved: 'waiting'
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      id: 1,
      name: 'Majica 10',
      idArticle: 0,
      amount: 2,
      prize: 1256,
      size: 'S',
      date: '20/10/2020',
      delivered: false,
      paid: false,
      idInfluenser: 0,
      nameInfluenser: 'Ena',
      idOrderer: 1,
      nameOrderer: 'Irma',
      status: 'printed',
      approved: 'notApproved'
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      id: 2,
      name: 'Majica 10',
      idArticle: 0,
      amount: 2,
      prize: 1256,
      size: 'S',
      date: '20/10/2020',
      delivered: false,
      paid: false,
      idInfluenser: 0,
      nameInfluenser: 'Ena',
      idOrderer: 1,
      nameOrderer: 'Irma',
      status: 'printed',
      approved: 'approved'
    }
  ]

  public contracts: Array<any> = [
    {
      name: 'Gold Jeans',
      id: 0,
      articlesOrdered: 30
    },
    {
      name: 'Gold Star',
      id: 1,
      articlesOrdered: 50
    }
  ]

  public productsLoaded: boolean;
  public influensersLoaded: boolean;
  public categoriesLoaded: boolean;
  public sizesLoaded: boolean;
  public colorsLoaded: boolean;

  public allLoaded: boolean;

  constructor(private appService: AppService,
              private localStorage: LocalStorageService) {
    this.categoriesSubject = new BehaviorSubject<Array<Category>>([]);
    this.influencersSubject = new BehaviorSubject<Array<any>>([]);
    this.productsSubject = new BehaviorSubject<Array<any>>([]);

  }

  public getAllProducts(): Observable<any> {
   return this.appService.getAllProducts();
  }

  public getAllInfluencers(): Observable<any> {
    return this.appService.getAllInfluencers();
  }

  public getAllCategories(): Observable<Array<Category>> {
    return this.appService.getAllCategories();
  }

  public getAllColors(): Observable<Array<Color>> {
    return this.appService.getAllColors();
  }

  public getAllSizes(): Observable<Array<Size>> {
    return this.appService.getAllSizes();
  }

  public getAllInfluencersAdmin(): Observable<any> {
    return this.appService.getAllInfluencersAdmin();
  }

  public getUserById = (userId: number): Observable<any> => {
    return this.appService.getUserById(userId);
  }

  public getAllOrders = (): Observable<any> => {
    return this.appService.getAllOrders();
  }

  public getContracts = (): Observable<any> => {
    return this.appService.getContracts();
  }

  public createProduct = (product: Product): Observable<any> => {
    return this.appService.createProduct(product);
  }

  public createUser = (user: User): Observable<any> => {
    return this.appService.createUser(user);
  }

  public createOrder = (orderObject): Observable<any> => {
    return this.appService.createOrder(orderObject);
  }

  public saveUser = (user: User): void => {
    this.localStorage.saveUser(user);
  }

  public getCategoriesSubject(): Observable<Array<Category>> {
    return this.categoriesSubject.asObservable();
  }
  public setCategoriesSubject(value): void {
    this.categoriesSubject.next(this.categories);
  }

  public getInfluensersSubject(): Observable<Array<any>> {
    return this.influencersSubject.asObservable();
  }
  public setInfluensersSubject(value): void {
    this.influencersSubject.next(this.influencers);
  }

  public getProductsSubject(): Observable<Array<any>> {
    return this.productsSubject.asObservable();
  }
  public setProductsSubject(value): void {
    this.productsSubject.next(this.products);
  }

}
