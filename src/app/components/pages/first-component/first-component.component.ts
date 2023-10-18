import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  userInput: string = '';

  constructor(private sharedDataService: SharedDataServiceService, private router: Router) {}

  onSubmit(input: string) {
    console.log('input received',input)
    this.sharedDataService.userInput = input; 
    this.router.navigate(['/second']); //so that user navigates to second page on submit. we had to add router instance in constructor to use it here.
  }
}
