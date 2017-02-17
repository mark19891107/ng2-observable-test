import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/Rx';
import 'rxjs'

@Injectable()
export class DataService {

  count = [1];

  digis = Observable.from(this.count)

  constructor() { }

  snedCount(){
    this.count.push(this.count.length)
    this.digis = Observable.from(this.count)
    // this.digis.next(this.count);
  }


}
