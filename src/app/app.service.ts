import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

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

  // GLOBAL GETTERS

  public isUserLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) ? true : false;
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  public get isMobile(): boolean {
    return window.screen.width < 768;
  }

  // API REQUESTS

  // POST

  public loginRequest = (data: any) => {
    return this.httpClient.post<any>(`${this.API_URL}/users/login`,
      {username: data.username, password: data.password},
      {headers: this.headers});
  };

  public createUser = (user: any): Observable<any> => {
    return this.httpClient.post(`${this.API_URL}/users/create`, user)
      .pipe(
        catchError(this.handleError)
      );
  };

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
  };
}
