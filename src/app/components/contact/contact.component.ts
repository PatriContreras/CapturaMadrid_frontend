import { Component, OnInit } from '@angular/core';
import { faCoffee, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faCoffee = faCoffee;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocation = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
