import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UpdateCommentsService {

  private subject = new Subject<any>();

  sendUpdateCommentsEvent(): void {
    this.subject.next();
  }

  getUpdateCommentsEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
