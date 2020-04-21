import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IComment } from '../models/IComment';
import { Observable, throwError } from 'rxjs';
import { tap, retry, catchError, timeout } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CommentService {

  public comments: IComment[] = [];
  public apiBase = 'https://asta-web-1.herokuapp.com/api/newsfeed';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _httpWorker: HttpClient) {}

  fetchComments(): Observable<IComment[]> {
    return this._httpWorker.get<IComment[]>(this.apiBase)
      .pipe(
        timeout(5000),
        retry(1),
        tap(fetchedNews => this.comments = fetchedNews),
        catchError(this.errorHandler)
      );
  }

  createComment(data: any): Observable<IComment> {
    return this._httpWorker.post<IComment>(this.apiBase, JSON.stringify(data), this._httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: any): Observable<never> {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
  }
}
