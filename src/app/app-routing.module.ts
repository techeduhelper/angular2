import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  }, {
    path: 'about',
    component: AboutComponent 
  },
  {
    path: 'user',
    component: ChildComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
