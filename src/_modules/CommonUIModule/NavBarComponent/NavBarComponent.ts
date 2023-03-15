import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './NavBarComponentTemplate.html',
  styleUrls: ['./NavBarComponentStyle.css'],
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faFile = faFile;
  faLinkedIn = faLinkedin;
  faGitHub = faGithubSquare;

  constructor() {}

  ngOnInit(): void {}
}
