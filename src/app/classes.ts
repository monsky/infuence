import * as moment from './components/sign-up/sign-up.component';

export class ProductApi {
  public id: number;
  public name: string;
  public idSeller: number;
  public prize: number;
  public color: string;
  public imgUrl: string;
  public categoryId: number;
  public categoryName: string;
  public itemsSold: number;

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.idSeller = product.id_seller;
    this.prize = product.prize;
    this.color = product.color;
    this.imgUrl = product.img_url;
    this.categoryId = product.category_id;
    this.categoryName = product.category_name;
    this.itemsSold = product.items_sold;
  }
}

export class User {
  public email: string;
  public password: string;
  // tslint:disable-next-line:variable-name
  public first_name: string;
  // tslint:disable-next-line:variable-name
  public last_name: string;
  public address: string;
  public city: string;
  // tslint:disable-next-line:variable-name
  public post_code: number;
  public country: string;
  public terms: number;
  // tslint:disable-next-line:variable-name
  public img_url: string;

  // tslint:disable-next-line:variable-name
  constructor(email: string, password: string, first_name: string, last_name: string, address: string, city: string, post_code: number, country: string, terms: number, img_url: string) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.address = address;
    this.city = city;
    this.post_code = post_code;
    this.country = country;
    this.terms = terms;
    this.img_url = img_url;
  }
}

export class OrderItem {
  // tslint:disable-next-line:variable-name
  public img_url: string;
  public name: string;
  public amount: number;
  // tslint:disable-next-line:variable-name
  public id_article: number;
  // tslint:disable-next-line:variable-name
  public id_influenser: number;
  // tslint:disable-next-line:variable-name
  public name_influenser: string;
  public prize: number;
  public size: string;

  // tslint:disable-next-line:variable-name
  constructor(img_url: string, name: string, amount: number, id_article: number, id_influenser: number, name_influenser: string, prize: number, size: string) {
    this.img_url = img_url;
    this.name = name;
    this.amount = amount;
    this.id_article = id_article;
    this.id_influenser = id_influenser;
    this.name_influenser = name_influenser;
    this.prize = prize;
    this.size = size;
  }
}
