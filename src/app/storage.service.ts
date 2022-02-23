import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class StorageService {
  lista: any[];
  private lista$: Subject<any[]>;

  constructor() {
    this.lista = [];
    this.lista$ = new Subject();
  }

  agregarItem(item: any) {
    if(!item) return
    this.lista.push(item);
    this.lista$.next(this.lista);
  }

  getItems$(): Observable<any> {
    return this.lista$.asObservable();
  }
}
