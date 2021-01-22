import {Injectable} from '@angular/core';
import {SignalOne} from '../libs/signal/SignalOne';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

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
      name: 'Enaina majica',
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
    isAdmin: true
  };

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
    'ID Artikla',
    'Kolicina',
    'Cena',
    'Dostavljeno',
    'Placeno',
    'Velicina',
    'Influenser zaradio',
    'Kompanije zaradila'
  ];
  public influencerContractData: Array<any> = [
    {
      id: 0,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        }
      ],
      articles: [],
      favourites: []
    },
    {
      id: 1,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        }
      ],
      articles: [],
      favourites: []
    },
    {
      id: 2,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        }
      ],
      articles: [],
      favourites: []
    }
  ];

  public printShopContractColNames: Array<string> = [
    'Ime poslodavca',
    'Ime ugovora',
    'Tip ugovora',
    'Popust',
    'Broj poručenih artikala'
  ];
  public printShopContractData: Array<any> = [
    {
      name: 'Copy Studio',
      contractId: '12335',
      contractType: 1,
      discount: 20,
      numberOfOrderedArticles: '52'
    },
    {
      name: 'Stamparija',
      contractId: '65198',
      contractType: 1,
      discount: 30,
      numberOfOrderedArticles: '134'
    },
    {
      name: 'StampaMajica',
      contractId: '9845',
      contractType: 2,
      discount: 15,
      numberOfOrderedArticles: '23'
    },
    {
      name: 'BrzaStampa',
      contractId: '98465',
      contractType: 1,
      discount: 20,
      numberOfOrderedArticles: '78'
    }
  ];

  public orderStatusColNames: Array<string> = [
    'Slika',
    'Ime influensera',
    'Ime poručioca',
    'Id porudžbine',
    'Status'
  ];
  public orderStatusData: Array<any> = [
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      influencerName: 'Ena Luna',
      clientName: 'Marko Trajkovic',
      orderId: 30,
      orderStatus: 1
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      influencerName: 'Ena Luna',
      clientName: 'Trajko Markovic',
      orderId: 50,
      orderStatus: 0
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      influencerName: 'Zorannah',
      clientName: 'Marko Trajkovic',
      orderId: 43,
      orderStatus: 1
    }
  ];

  public orderRequestColNames: Array<string> = [
    'Slika',
    'Id porudžbine',
    'Ime poručioca',
    'Status'
  ];
  public orderRequestData: Array<any> = [
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      orderId: 30,
      clientName: 'Marko Trajkovic',
      orderStatus: 1
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      orderId: 50,
      clientName: 'Trajko Markovic',
      orderStatus: 0
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg',
      orderId: 43,
      clientName: 'Marko Trajkovic',
      orderStatus: 1
    }
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

  public isModalConfirmDeleteOpened: boolean = false;

  public articles: Array<any> = [
    {
      id: 0,
      name: 'Majica 10',
      idSeller: 2,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      img: 'https://pixabay.com/photos/beach-ocean-sunset-sunrise-sea-5795560/',
      categoryId: 0,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 1,
      name: 'Majica 10',
      idSeller: 2,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      img: 'https://pixabay.com/photos/sorcerer-magician-illusionist-4586454/',
      categoryId: 1,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 2,
      name: 'Majica 10',
      idSeller: 2,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      img: 'https://pixabay.com/photos/angry-man-hoodie-old-bart-2766265/',
      categoryId: 1,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 3,
      name: 'Majica 10',
      idSeller: 2,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      img: 'https://pixabay.com/photos/people-statement-jacket-hoodie-sand-2592164/',
      categoryId: 2,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 4,
      name: 'Majica 10',
      idSeller: 2,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      img: 'https://pixabay.com/photos/snow-winter-cold-weather-outdoor-2593354/',
      categoryId: 0,
      categoryName: 'Majice',
      itemsSold: 30
    }
  ];

  public users: Array<any> = [
    {
      id: 0,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        }
      ],
      articles: [],
      favourites: []
    },
    {
      id: 1,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        }
      ],
      articles: [],
      favourites: []
    },
    {
      id: 2,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        },
        {
          id: 2,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: false
        }
      ],
      articles: [],
      favourites: []
    }
  ];

  constructor(private appService: AppService) {
  }

  public getAllProducts(): void {
    this.appService.getAllProducts().subscribe((articles) => {
      this.articles = articles;
    });
  }

  public getProductById(productId: number): Observable<any> {
    return this.appService.getProductById(productId);
  }

  public getAllUsers(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  public getUserById = (userId: number): Observable<any> => {
    return this.appService.getUserById(userId);
  }

  public getOrdersByUserId = (userId: number): Observable<any> => {
    return this.appService.getOrdersByUserId(userId);
  }


}
