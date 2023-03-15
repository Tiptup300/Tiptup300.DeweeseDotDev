import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private titleService: Title, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle("Matthew Deweese - My Portfolio");
  }
}
