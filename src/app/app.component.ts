import { Observable } from 'rxjs/Observable';
// import { fromEvent } from 'rxjs/observable/fromEvent';
import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService:DataService) { }

  // title = 'app works!';
  // digi: Observable<Array<string>>
  digi

  ngOnInit(){
    let now = Date.now()
    let observable = this.dataService.digis
      .map((data:MouseEvent,idx)=>{
        // console.log("map 1")
        // return data
        return idx + "->" + new Date(data.timeStamp + now).toTimeString()
      })
      // .map((data,idx)=>{
      //   console.log("map 2")
      //   return data+1
      // })
      // .do((data)=>{
      //   console.log("do")
      //   return data+1
      // })
      // .subscribe((number)=>{
        // console.log(number)
      // })

    /* subscribe the observable */
    // observable.subscribe( (val) => this.digi = val )

    /* return the observable */
    this.digi = observable
  }

  sendCount(){
    this.dataService.Count(this.digi);
  }

}
