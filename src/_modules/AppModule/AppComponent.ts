import { Component } from '@angular/core';
import { MediatorNode } from '../CommonUIModule/_services/MediatorService/MediatorNode';
import { MediatorService } from '../CommonUIModule/_services/MediatorService/MediatorService';

@Component({
  selector: 'app-root',
  templateUrl: './AppComponentTemplate.html',
  styleUrls: ['./AppComponentStyle.css'],
})
export class AppComponent {
  constructor(private mediator: MediatorService) {
    let callBack = (payload: string) => {};

    let node: MediatorNode = {
      guid: '',
      channel: '',
      onMessageReceived: callBack,
    };

    mediator.AddNode(node);
  }
  title = 'deweese-dev-app';
}
