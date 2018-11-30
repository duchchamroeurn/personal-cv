import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../views/header.html',
  styleUrls: ['../css/styles.css','../css/responsive.css','../css/fluidbox.min.css']
})
export class HeaderComponent {
  address1 = 'Sangtak Tek Thla, Khan Saen Sokh';
  address2 = 'Street 371, Phnom Penh, Cambodia';
  phone = '(+855) - 69 812 025';
  timeAvailable = 'Monday - Sunday,8AM - 7PM';
  email = 'chamroeurn.duch@gmail.com';
  timeReply = 'REPLY IN 24 HOURS';

}