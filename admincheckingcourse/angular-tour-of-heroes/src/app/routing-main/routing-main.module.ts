import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { StudyplanComponent } from '../components/studyplan/studyplan.component';
import { AddcourseComponent } from '../components/addcourse/addcourse.component';
import { CourseComponent } from '../components/course/course.component';
import { StudentlistComponent } from '../components/studentlist/studentlist.component';
import { AddstudentComponent } from '../components/addstudent/addstudent.component';
import { AddgradeComponent } from '../components/addgrade/addgrade.component';
import { TeacherlistComponent } from '../components/teacherlist/teacherlist.component';
import { AddteacherComponent } from '../components/addteacher/addteacher.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'plan', component: StudyplanComponent },
  { path: 'add', component: AddcourseComponent },
  { path: 'course', component: CourseComponent },
  { path: 'stlist', component: StudentlistComponent },
  { path: 'addst', component: AddstudentComponent },
  { path: 'grade', component: AddgradeComponent },
  { path: 'tlist', component: TeacherlistComponent },
  { path: 'addt', component: AddteacherComponent },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingMainModule { }
