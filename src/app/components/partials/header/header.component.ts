import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  alpha:string="apple"; //declaring and initializing variable

  constructor(private headerService:HeaderService) {
    this.alpha = "fresh apples by constructor"; // we can define this value on runtime by using service
    this.alpha = headerService.getHeaderAlpha() // will return value from the service
  }

}
