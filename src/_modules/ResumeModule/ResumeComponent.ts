import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MediatorService } from '../CommonUIModule/_services/MediatorService/MediatorService';

@Component({
  selector: 'app-resume',
  templateUrl: './ResumeComponentTemplate.html',
  styleUrls: ['./ResumeComponentStyle.css'],
})
export class ResumeComponent implements OnInit {
  constructor(private titleService: Title, private mediator: MediatorService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Matthew Deweese - Software Developer');
  }

  public onClick() {
    this.mediator.SendMessage({
      channel: 'navigationMessage',
      payload: { value: 'this is it' },
    });
  }
}
