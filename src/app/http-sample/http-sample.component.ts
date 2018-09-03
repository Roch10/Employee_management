import { Component, OnInit } from '@angular/core';
import { HttpSampleService } from "./http-sample.service";
import { info } from "./sample.module";
import { load } from '../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-http-sample',
  templateUrl: './http-sample.component.html',
  styleUrls: ['./http-sample.component.css']
})
export class HttpSampleComponent implements OnInit {

  info: info[];
  unique = [];
  original: info[];
  searchArr=[];
  id: number;
  title: string;
  body: string;
  userId: number;
  allowSearch = false;
  loading: boolean = true;


  constructor(private infoService: HttpSampleService) { }

  ngOnInit() {
    // this.info = this.infoService.getInfo();
    this.getInfo();
    
  }

  getInfo(){
    this.infoService.getInfo().subscribe(sample => {
      this.info = sample;
      this.original = sample;
      this.loading = false;
    });
  }

  onSearch(){
    this.infoService.getSearched(this.userId).subscribe(sample =>{
      this.info = sample;
    } );
    // console.log(this.userId);

  }

  searchInfo(){
    this.allowSearch = true;
    this.original.forEach(o => {
      this.searchArr.push(o.userId);
    });
    this.unique = Array.from(new Set(this.searchArr));
    // console.log(this.unique);
  }

}
