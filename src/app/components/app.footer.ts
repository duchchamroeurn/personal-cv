import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: '../views/footer.html',
  styleUrls: ['../css/styles.css','../css/responsive.css','../css/fluidbox.min.css']
})
export class FooterComponent {
    year: number = Date.now();

}