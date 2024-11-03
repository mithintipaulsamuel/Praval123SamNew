import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { NgifExampleComponent } from './components/ngif-example/ngif-example.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { DirectiveEx1Directive } from './directives/directive-ex1.directive';
import { DirectiveElseDirective } from './directives/directive-else.directive';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CourseComponent } from './components/course/course.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { BGColorDirective } from './directives/bgcolor.directive';
import { CountryServicesComponent } from './components/country-services/country-services.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductServicesComponent } from './components/product-services/product-services.component';
import { App1Component } from './components/app1/app1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    InterpolationComponent,
    EBindingComponent,
    PBindingComponent,
    TwoWayBindingComponent,
    CBindingComponent,
    StyleBindingComponent,
    NgifExampleComponent,
    NgforComponent,
    DirectiveEx1Directive,
    DirectiveElseDirective,
    PipesComponentComponent,
    ParentComponent,
    ChildComponent,
    CourseComponent,
    CoursedetailsComponent,
    PagenotfoundComponent,
    TdfComponent,
    ReactFormComponent,
    SelectedCourseComponent,
    ViewEncapsulationComponent,
    BGColorDirective,
    CountryServicesComponent,
    ProductServicesComponent,
    App1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
