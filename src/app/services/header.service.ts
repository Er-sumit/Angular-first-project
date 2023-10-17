import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { } //This is the class constructor, which is executed when an instance of HeaderService is created.

  getHeaderAlpha():string { //The string type annotation is just there to specify the expected return type, which helps with type checking and code documentation in TypeScript.
    return "ripen apples from service"
  }
}
