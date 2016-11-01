import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentService } from './shared/services/student.service';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    AboutComponent,
    PageNotFoundComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/student-list', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'student-list', component: StudentListComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [ StudentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
