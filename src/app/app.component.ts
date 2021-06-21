import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  responseObject:any = [];
  responseFeatures :any;
  title = 'krds-assignment';
  img1_text:string;
  img2_text:string;
  img3_text:string;
  img4_text:string;
  img5_text:string;
  img6_text:string;
  img1_desc:string;
  img2_desc:string;
  img3_desc:string;
  img4_desc: any;
  img5_desc: any;
  img6_desc: any;
  constructor(private _appService:AppService){

  }
  ngOnInit(){
this.getData();
  }
  getData(){
this._appService.getdata().subscribe(data =>{
  this.responseObject = data;
  this.responseFeatures = data['features'];
  this.img1_text = this.responseFeatures[0]['title'];
  this.img2_text = this.responseFeatures[1]['title'];
  this.img3_text = this.responseFeatures[2]['title'];
  this.img4_text = this.responseFeatures[3]['title'];
  this.img5_text = this.responseFeatures[4]['title'];
  this.img6_text = this.responseFeatures[5]['title'];
  this.img1_desc = this.responseFeatures[0]['desc'];
  this.img2_desc = this.responseFeatures[1]['desc'];
  this.img3_desc = this.responseFeatures[2]['desc'];
  this.img4_desc = this.responseFeatures[3]['desc'];
  this.img5_desc = this.responseFeatures[4]['desc'];
  this.img6_desc = this.responseFeatures[5]['desc'];

})
  }
}
