# Instructions for AngularJS Project
## a01
Assumed that npm and angularCLI is already installed. ```npm install -g @angular/cli```
1. Start new project with command ```ng new first-app --skip-tests```. Here skip-tests argument is optional.
user@env directory_path % ```ng new first-app --skip-tests``` <br>
```? Would you like to add Angular routing?``` ***Yes*** <br>
```? Which stylesheet format would you like to use?``` ***CSS***
2. ```ng serve -o```
3. Lets create first component i.e. header by ```ng g c components/partials/header```
4. As header component generated it makes *app-header* as its selector. We can add this wherever we need header. In our case we'll need header everywhere so lets add it into app.components.html as below, because app.components.html is root component of this project.<br>
```<app-header></app-header>```
5. <output> displays header works! message
6. You may update html file of header component if you want any change. To achieve any dynamic value on header content we will make use of .ts file. 
    1. declare variable alpha:string="apple" and initialize it with value apple. This shall be inside *HeaderComponent* class
    2. you may change value of variable alpha in constructor class inside HeaderComponent class. Example <br> ```  constructor() { this.alpha = "fresh apples by constructor"; }```
    3. To make it dynamic with backend we will need to introduce service, that we will do in short.
7. Adding service to header component, ```ng g s services/header```. This generates header service with HeaderService class having constructor function in it.
8. For starters below constructor function, we can add new function named getHeaderAlpha that would return a string.
9. Thats it for this project. I would take router to next project.

## a02-router
1. ***/app/app-routing.module.ts*** is it. We'll be adding objects in routes array. Example: <br> ```const routes: Routes = [ {path:'', component:FirstComponentComponent}, {path:'/second', component:SecondComponentComponent} ];```
2. Update app.components.html file with ```<router-outlet></router-outlet>``` just below the header.
3. Test application -> it is going smooth.
4. Now lets try to share data between these two components. So I'm trying to get input box on FirstComponent and then display message entered on FirstComponent on to the SecondComponent.
    1. Update FirstComponent html to get input(suggestion) from user. In here we need to use htmlform for data input, hence ensure we've 'FormsModule' imported in app.module.ts. ```import { FormsModule } from '@angular/forms';```
    2. To share data between components, lets create a shared service. Angular's Dependency Injection would help us to share data between components. ```ng g s services/shared-data-service``` & let this service have string property(attribute or object) to store value of input.
    3. In FirstComponent, lets update the component's logic to interact with the shared service. Here setting the userInput property in the shared service when the user submits the form. <br> As value is stored in shared service, we'll be able to retrieve it in SecondComponent component. Here in FirstComponent component we need to navigate to second path onSubmit. To achieve this we will add another private parameter in constructor i.e. router:Router. Then we shall be able to use router instance of Router class in FirstComponent class, as: <br> ```this.router.navigate(['/second']);```
    5. We're good to modify SecondComponent component to retrieve value from shared-data-service and display on page.
    