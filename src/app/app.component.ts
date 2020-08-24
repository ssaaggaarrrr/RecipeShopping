import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h3 { 
    color: blue
  }`, `p{color :red}`]
})
export class AppComponent {
// add1 : number;
// add2 : number;
title = "app";
loadedFeature = 'recipe';
// disableButton = true;
// showDetails = false;
// log = [];
  // ConvertToInt(val){
  //   return parseInt(val);
  // }
  // serverName = "";
  // servers = ['Test Server' , 'Test Server 2']

  // onInput(){
  //   this.disableButton = false;
  //   if(this.serverName === ""){
  //     this.disableButton = true;
  //     }

  // }
  // onClick(){
  //   this.serverName = "";
  //   this.disableButton = true;
  // }

  // onClickAdd(){
  //   this.servers.push(this.serverName);
  //   console.log(this.servers);
  // }

  // onClickDetails(){
  //   this.showDetails = !this.showDetails;
  //    this.log.push(this.log.length + 1);
  // }


  selectedFeature(event){
  this.loadedFeature = event
  }



}
