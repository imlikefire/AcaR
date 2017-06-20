import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FromDBService } from './fromdb.service';
import { CursuriComponent } from './cursuri/cursuri.component';
import { MenuComponent } from './menu/menu.component';
import { BooksComponent } from './books/books.component';
import { OnlinedocsComponent } from './onlinedocs/onlinedocs.component';
import { SoftwareComponent } from './software/software.component';
import { ProjectsComponent } from './projects/projects.component';
import { ValidateComponent } from './validate/validate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NvD3Component } from 'ng2-nvd3';
import { ProfsComponent } from './profs/profs.component';
import { OrarProfComponent } from './orar-prof/orar-prof.component';
import { BarfeComponent } from './barfe/barfe.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'cursuri',
        component: CursuriComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'online-docs',
        component: OnlinedocsComponent
      },
      {
        path: 'software',
        component: SoftwareComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'profs',
        component: ProfsComponent
      }
      ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CursuriComponent,
    MenuComponent,
    BooksComponent,
    OnlinedocsComponent,
    SoftwareComponent,
    ProjectsComponent,
    ValidateComponent,
    ScheduleComponent,
    ProfileComponent,
    SettingsComponent,
    NvD3Component,
    ProfsComponent,
    OrarProfComponent,
    BarfeComponent
  ],
  providers: [ FromDBService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
