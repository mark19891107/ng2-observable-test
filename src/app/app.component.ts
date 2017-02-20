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

  digi
  // obsfigs: Observable<Array<string>>
  obsfigs: Observable<string>

  ngOnInit(){
    /* get the figs */
    this.obsfigs = this.dataService.figs
      .map( data => "fig: "+data )
    /* get the digis */
    let now = Date.now()
    this.digi = this.dataService.digis
      .map((data:MouseEvent, idx)=>{
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

    /* subscribe the observable explicity */
    // observable.subscribe( (val) => this.digi = val )
  }

  sendCount(){
    [this.digi, this.obsfigs] = this.dataService.Count(this.digi, this.obsfigs);
    // this.dataService.Count(this.digi, this.obsfigs);
  }

}
