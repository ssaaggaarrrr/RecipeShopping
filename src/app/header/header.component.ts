import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
 @Output() featureSelected = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }


  onClickRecipe(feature : string){
    this.featureSelected.emit(feature);
  }

  onClickShopList(feature : string){
    this.featureSelected.emit(feature);
  }
}
