import { Component } from '@angular/core';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  userInput: string;

  constructor(private sharedDataService: SharedDataServiceService) {
    this.userInput = this.sharedDataService.userInput;
    console.log('received value = ', this.sharedDataService.userInput)
  }
  
}
