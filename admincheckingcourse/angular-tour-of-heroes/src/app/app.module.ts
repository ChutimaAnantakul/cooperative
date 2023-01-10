import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingMainModule } from "./routing-main/routing-main.module";

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

// import { MaterialModule } from './material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { StudyplanComponent } from './components/studyplan/studyplan.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { CourseComponent } from './components/course/course.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AddgradeComponent } from './components/addgrade/addgrade.component';
import { TeacherlistComponent } from './components/teacherlist/teacherlist.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    StudyplanComponent,
    AddcourseComponent,
    CourseComponent,
    StudentlistComponent,
    AddstudentComponent,
    AddgradeComponent,
    TeacherlistComponent,
    AddteacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RoutingMainModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
