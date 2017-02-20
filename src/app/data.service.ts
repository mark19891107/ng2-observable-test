import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/Rx';
import 'rxjs'

@Injectable()
export class DataService {

  /* create an observable by array */
  count:Array<string> = ['1','2','3']
  figs = Observable.from(this.count)

  /* create an observable by click body */
  digis = Observable.fromEvent(document.querySelector("body"), 'click')
  /* this fails 'cause #btn is not in this comp */
  // digis = Observable.fromEvent(document.querySelector("#btn"), 'click')
  

  constructor() {}

  Count(observable, obs){
    /* explicit way to subscribe the observable by click btn */
    observable.subscribe( val => console.log(val) )
    
    /* re-init an observable */
    this.count.push("now the length is "+this.count.length)
    /* it works without recreate the observable, but async call in template won't work */
    obs = Observable.from(this.count)
    obs.subscribe( val => console.log(val) )

    return [observable, obs]
  }


}
