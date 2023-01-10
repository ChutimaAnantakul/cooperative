import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { StudyplanComponent } from '../components/studyplan/studyplan.component';
import { TotalcourseComponent } from '../components/totalcourse/totalcourse.component';
import { PasscourseComponent } from '../components/passcourse/passcourse.component';
import { FaultcourseComponent } from '../components/faultcourse/faultcourse.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'plan', component: StudyplanComponent },
  { path: 'course', component: TotalcourseComponent },
  { path: 'pass', component: PasscourseComponent },
  { path: 'fault', component: FaultcourseComponent },
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
