import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { StudentlistComponent } from '../components/studentlist/studentlist.component';
import { StudyplanComponent } from '../components/studyplan/studyplan.component';
import { TotalcourseComponent } from '../components/totalcourse/totalcourse.component';
import { PasscourseComponent } from '../components/passcourse/passcourse.component';
import { FaultcourseComponent } from '../components/faultcourse/faultcourse.component';
import { TotalstudyplanComponent } from '../components/totalstudyplan/totalstudyplan.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: StudentlistComponent },
  { path: 'plan', component: StudyplanComponent },
  { path: 'course', component: TotalcourseComponent },
  { path: 'pass', component: PasscourseComponent },
  { path: 'fault', component: FaultcourseComponent },
  { path: 'sumplan', component: TotalstudyplanComponent },
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
