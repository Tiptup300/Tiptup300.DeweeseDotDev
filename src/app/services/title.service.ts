import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title:string = "";
  private subject = new Subject<any>();

  constructor() { }

  getTitle() {
    return this.title;
  }

  setTitle(title:string) {
    this.title = title;
  }

  onTitleChanged(): Observable<any> {
    return this.subject.asObservable();
  }
}
