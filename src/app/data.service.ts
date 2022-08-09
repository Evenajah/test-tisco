import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private data$ = new BehaviorSubject<any>('');

  constructor() {}

  setData(val: any) {
    this.data$.next(val);
  }

  getData() {
    return this.data$.asObservable();
  }
}
