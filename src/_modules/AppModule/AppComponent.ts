import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { MediatorService } from '../CommonUIModule/_services/MediatorService/MediatorService';

@Component({
  selector: 'app-root',
  templateUrl: './AppComponentTemplate.html',
  styleUrls: ['./AppComponentStyle.css'],
})
export class AppComponent {
  constructor(private mediator: MediatorService) {}

  private receiveMessage(payload: any) {
    console.log(payload);
  }

  ngOnInit() {
    this.mediator.AddNode({
      guid: Guid.create().toString(),
      channel: 'navigationMessage',
      onMessageReceived: this.receiveMessage,
    });
  }
  title = 'deweese-dev-app';
}
