import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: '../views/introduction.html',
  styleUrls: ['../css/styles.css','../css/responsive.css','../css/fluidbox.min.css']
})
export class IntroductionComponent {
    name = "Duch Chamroeun";
    position = "iOS Developer";
    dob = "January 08, 1995";
    email = "chamroeurn.duch@gmail.com";
    marriedStatus = "Single";

}