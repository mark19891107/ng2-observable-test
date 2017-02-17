import {fromEvent} from 'rxjs/observable/fromEvent';
import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService:DataService) { }

  title = 'app works!';
  digits;

  ngOnInit(){
    this.dataService.digis
    .map((data,idx)=>{
      console.log("map 1")
      return data
    })
    // .map((data,idx)=>{
    //   console.log("map 2")
    //   return data+1
    // })
    // .do((data)=>{
    //   console.log("do")
    //   return data+1
    // })
    .subscribe((number)=>{
      console.log(number)
    })
  }

  sendCount(){
    this.dataService.snedCount();
  }

}
