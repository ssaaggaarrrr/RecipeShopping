import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = ['Test Server' , 'Test Server 2']
  serverName = "";
  constructor() { }

  ngOnInit(): void {
  }

 onClick(){
this.servers.push(this.serverName);
 }


}
