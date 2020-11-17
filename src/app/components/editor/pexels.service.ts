import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PexelsService {

  private readonly API_URL='https://api.pexels.com/v1/search';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorizaton': '563492ad6f917000010000013c3841b5605b4b7d8d564bd84dc96632'
  });

  constructor(private httpClient: HttpClient) { }

  imageSearch = (query: string): Observable<any> => {
    const params = new HttpParams()
    .set('query', query)
    .set('per_page', '15')
    const token = localStorage.getItem('token');
    const callHeaders = this.headers.set('Authorization', token);
    return this.httpClient.get(`${this.API_URL}`, { headers: callHeaders, observe: 'response', params: params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Errors

  handleError = (error) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if (error.status === 401) {
      // this.router.navigateByUrl('/login');
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
