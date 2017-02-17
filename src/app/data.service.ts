import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/Rx';
import 'rxjs'

@Injectable()
export class DataService {

  // count = [1,2,3]

  /* create an observable by click body */
  // digis = Observable.from(this.count)
  digis = Observable.fromEvent(document.querySelector("body"), 'click')
  

  constructor() {}

  Count(observable){
    /* explicit way to subscribe the observable by click btn */
    observable.subscribe( (val) => console.log(val) )
    
    // this.count.push(this.count.length)
    // this.digis = Observable.from(this.count)
    // this.digis.next(this.count);
  }


}
