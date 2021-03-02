import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Product} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public selectedItem = null;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  private API_URL = 'http://127.0.0.1:5000';

  constructor(private httpClient: HttpClient) {
  }

  // LOCAL STORAGE

  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }



  // RESPONSIVE DESIGN

  public get isMobile(): boolean {
    return window.screen.width < 768;
  }



  // LOGIN AND SIGN UP

  public login = (data: any) => {
    return this.httpClient.post<any>(`${this.API_URL}/users/login`,
      {username: data.username, password: data.password},
      {headers: this.headers});
  }


// INFLUENCERS

  public getAllInfluencers = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/influencers`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getAllInfluencersAdmin = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/influencers/admin`)
      .pipe(
        catchError(this.handleError)
      );
  }



  // CONTRACTS

  public getContracts = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/contracts`)
      .pipe(
        catchError(this.handleError)
      );
  }



  // COLORS

  public getAllColors = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/colors`)
      .pipe(
        catchError(this.handleError)
      );
  }



  // SIZES

  public getAllSizes = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/sizes`)
      .pipe(
        catchError(this.handleError)
      );
  }



  // CATEGORIES

  public getAllCategories = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/categories`)
      .pipe(
        catchError(this.handleError)
      );
  }



  // UPLOAD

  public uploadImage = (formData): Observable<any> => {
    return this.httpClient.post<any>(`${this.API_URL}/uploader`,
      { formData })
      .pipe(
        catchError(this.handleError)
      );
  }




// PRODUCTS

  public getProductById = (productId: number): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/products/${productId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getAllProducts = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/products`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createProduct  = (product: Product): Observable<any> => {
    return this.httpClient.post<any>(`${this.API_URL}/products/create`,
      product,
      {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }


// USERS

  public getAllUsers = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/users`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getUserById = (userId: number): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/users/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createUser = (user: any): Observable<any> => {
    return this.httpClient.post(`${this.API_URL}/users/create`, user)
      .pipe(
        catchError(this.handleError)
      );
  }



// ORDERS

  public createOrder  = (order: any): Observable<any> => {
    return this.httpClient.post<any>(`${this.API_URL}/orders/create`,
      order,
      {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getOrdersByUserId = (userId: number): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/orders/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getAllOrders = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/orders`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getProductRequests = (): Observable<any> => {
    return this.httpClient.get(`${this.API_URL}/product/requests`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public handleError = (error) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if (error.status === 401) {
    }
    return throwError(errorMessage);
  }
}
