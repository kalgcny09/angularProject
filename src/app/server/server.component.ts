import { Component } from '@angular/core'; // import package from core

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
}