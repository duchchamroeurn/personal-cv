import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: '../views/portfolio.html',
  styleUrls: ['../css/styles.css','../css/responsive.css','../css/fluidbox.min.css']
})
export class PortfolioComponent {
    portfolio = "Portfolio";
    work = "My Work";
    skillMenu = [
        { subject : "WEB APP" },
        { subject: "iOS APP" },
        { subject: "ANDROID APP" }
    ];

}