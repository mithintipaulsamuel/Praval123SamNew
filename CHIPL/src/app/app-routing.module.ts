import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/home/home.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { NgifExampleComponent } from './components/ngif-example/ngif-example.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { CourseComponent } from './components/course/course.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { CountryServicesComponent } from './components/country-services/country-services.component';
import { App1Component } from './components/app1/app1.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'ngFor',
    component:NgforComponent

  },
  {
    path:'about-us',
    component:AboutUsComponent

  },
  {
    path:'c-binding',
    component:CBindingComponent

  },
  {
    path:'e-binding',
    component:EBindingComponent

  },
  {
    path:'ngif-example',
    component:NgifExampleComponent

  },
  {
    path:'p-binding',
    component:PBindingComponent

  }, 
  {
    path:'pipes',
    component:PipesComponentComponent

  },
  {
    path:'style-binding',
    component:StyleBindingComponent

  },
  {
    path:'two-way-binding',
    component:TwoWayBindingComponent

  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'coursedetails',
    component:CoursedetailsComponent
  },
  {
    path:'tdf',
    component:TdfComponent
  },
  {
    path:'list',
    component:CountryServicesComponent
  },
  {
    path:'react',
    component:ReactFormComponent
  },
  {
    path:'selectedcourse/:id',
    component:SelectedCourseComponent
  },
  {
    path:'App',
    component:App1Component
  },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  {
    path: '**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
