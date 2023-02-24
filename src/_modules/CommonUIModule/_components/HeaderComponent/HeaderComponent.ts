import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faPortrait,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './HeaderComponentTemplate.html',
  styleUrls: ['./HeaderComponentStyle.css'],
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faPortrait = faPortrait;

  constructor() {}

  ngOnInit(): void {}
}
