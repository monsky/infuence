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
  public influencers: Array<any> = [
    {
      id: 0,
      email: 'irmasumska@yahoo.com',
      firstName: 'Iki',
      lastName: 'Siki',
      imgUrl: 'https://images.unsplash.com/photo-1563992891888-3a441b92e7c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 1,
      email: 'dunja@yahoo.com',
      firstName: 'Dunja',
      lastName: 'Jovanic',
      imgUrl: 'https://images.unsplash.com/photo-1598137203988-80de6392fc1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 2,
      email: 'zoranah@yahoo.com',
      firstName: 'Zoranah',
      lastName: 'zo',
      imgUrl: 'https://images.unsplash.com/photo-1602751184834-947bd06e8710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 3,
      email: 'sarajo@yahoo.com',
      firstName: 'Sara',
      lastName: 'Jo',
      imgUrl: 'https://images.unsplash.com/photo-1603771628324-c90909126ccd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
  ];
  public user: any = {
    id: 1,
    isAdmin: true,
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
        approved: 'waiting'
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
          size: 'L',
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
          size: 'S',
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'waiting'
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
          approved: 'waiting'
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
          approved: 'notApproved'
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'approved'
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
          approved: 'approved'
        },
        {
          id: 1,
          name: 'Majica 10',
          amount: 2,
          prize: 1256,
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
          date: '20/10/2020',
          delivered: false,
          paid: false,
          approved: 'approved'
        }
      ],
      articles: [],
      favourites: []
    }
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

  public isModalConfirmDeleteOpened: boolean = false;

  public products: Array<any> = [
    {
      id: 0,
      name: 'Majica Kat 0',
      idSeller: 0,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1600328759671-85927887458d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      categoryId: 0,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 1,
      name: 'Majica 2 Kat 1',
      idSeller: 1,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1484663548870-2aa675ba38fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      categoryId: 1,
      categoryName: 'Majice',
      itemsSold: 30
    },
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
      imgUrl: 'https://images.unsplash.com/photo-1530475329205-1c5333ae40fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      categoryId: 1,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 3,
      name: 'Majica kat 2',
      idSeller: 3,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      categoryId: 2,
      categoryName: 'Majice',
      itemsSold: 30
    },
    {
      id: 4,
      name: 'Majica kat 0',
      idSeller: 0,
      prize: 1256,
      colors: [
        'red', 'blue', 'yellow'
      ],
      sizes: [
        'S', 'M', 'L'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1595136895914-da8f886a7ed8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      categoryId: 0,
      categoryName: 'Majice',
      itemsSold: 30
    }
  ];

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

  constructor(private appService: AppService) {
  }

  public getAllProducts(): Observable<any> {
   return this.appService.getAllProducts();
  }

  public getAllInfluencers(): Observable<any> {
    return this.appService.getAllInfluencers();
  }

  public getAllInfluencersAdmin(): Observable<any> {
    return this.appService.getAllInfluencersAdmin();
  }

  public getProductById(productId: number): Observable<any> {
    return this.appService.getProductById(productId);
  }

  public getAllUsers(): Observable<any> {
    return this.appService.getAllUsers();
  }

  public getUserById = (userId: number): Observable<any> => {
    return this.appService.getUserById(userId);
  }

  public getOrdersByUserId = (userId: number): Observable<any> => {
    return this.appService.getOrdersByUserId(userId);
  }

  public getAllOrders = (): Observable<any> => {
    return this.appService.getAllOrders();
  }

  public getAllOrderRequests = (): Observable<any> => {
    return this.appService.getAllOrderRequests();
  }

  public getContracts = (): Observable<any> => {
    return this.appService.getContracts();
  }

}
