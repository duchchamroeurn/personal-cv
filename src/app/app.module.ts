import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from "ng-circle-progress"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/app.header';
import { IntroductionComponent } from './components/app.introduction';
import { PortfolioComponent } from './components/app.portfolio';
import { AboutMeComponent } from './components/app.about';
import { WorkExperienceComponent } from './components/app.work-experience';
import { EducationComponent } from './components/app.education';
import { FooterComponent } from './components/app.footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    PortfolioComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    EducationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    HeaderComponent, 
    IntroductionComponent,
    PortfolioComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    EducationComponent,
    FooterComponent
  ]
})
export class AppModule { }
