import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/pages/first-component/first-component.component';
import { SecondComponentComponent } from './components/pages/second-component/second-component.component';

const routes: Routes = [
  {path:'', component:FirstComponentComponent},
  {path:'second', component:SecondComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
