import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './ResumeComponentTemplate.html',
  styleUrls: ['./ResumeComponentStyle.css'],
})
export class ResumeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Matthew Deweese - Software Developer');
  }
}
