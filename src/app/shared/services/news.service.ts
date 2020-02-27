import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INews } from '../models/INews';
import { Observable, throwError } from 'rxjs';
import { tap, retry, catchError, timeout } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NewsService {

  public news: INews[] = [];
  private apiBase = 'https://asta-web-1.herokuapp.com/api/newsfeed';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpWorker: HttpClient) {}

  fetchNews(): Observable<INews[]> {
    return this.httpWorker.get<INews[]>(this.apiBase)
      .pipe(
        timeout(5000),
        retry(1),
        tap(fetchedNews => this.news = fetchedNews),
        catchError(this.errorHandl)
      );
  }

  createNews(data): Observable<INews> {
    return this.httpWorker.post<INews>(this.apiBase, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
  }
}
