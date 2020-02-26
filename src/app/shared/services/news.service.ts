import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from '../models/INews';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NewsService {
  public news: INews[] = [];
  private  apiBase = 'https://asta-web-1.herokuapp.com/api/newsfeed';

  constructor(private httpWorker: HttpClient) {}

  fetchNews(): Observable<INews[]> {
    return this.httpWorker.get<INews[]>(this.apiBase)
      .pipe(tap(fetchedNews => this.news = fetchedNews));
  }
}

