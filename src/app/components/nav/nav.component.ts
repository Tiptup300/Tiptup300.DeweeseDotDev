import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  faFile = faFile;
  faLinkedIn = faLinkedin;
  faGitHub = faGithubSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
