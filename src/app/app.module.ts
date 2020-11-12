import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ServicesComponent } from './content/services/services.component';
import { TeamComponent } from './content/team/team.component';
import { HomeComponent } from './content/home/home.component';


import { RouterModule, Routes } from '@angular/router';

const JusticiAllRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    TeamComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(JusticiAllRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
