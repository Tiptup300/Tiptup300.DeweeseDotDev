import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPortrait,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faPortrait = faPortrait;

  constructor() {}

  ngOnInit(): void {}
}
