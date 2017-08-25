import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //you can select by attribute [] 
  templateUrl: './servers.component.html',//every component needs a template or template URL
  styles: [`
    p {
    color: blue;
    }
`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus= "no server was created";

  constructor() {
      setTimeout(()=> {
        this.allowNewServer = true;
      },
        2000);
   }

  ngOnInit() {
  }
  onCreateServer (){
    this.serverCreationStatus = 'Server was created!';
  }

}
