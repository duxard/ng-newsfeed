import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UpdatenewsService {

  private subject = new Subject<any>();

  sendUpdateNewsEvent() {
    this.subject.next();
  }

  getUpdateNewsEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
