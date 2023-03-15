import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  template: '<main><router-outlet></router-outlet></main>',
})
export class PortfolioComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.titleService.setTitle('Matthew Deweese - My Portfolio');
  }
}
