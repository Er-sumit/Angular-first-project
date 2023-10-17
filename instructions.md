# Instructions for AngularJS Project
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

