import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";
import { ListService } from "src/app/services/List.service";
import { List } from "src/app/models/List";
import { CourseService } from "src/app/services/Course.service";
import { Course } from "src/app/models/Course";

@Component({
  selector: 'app-totalcourse',
  templateUrl: './totalcourse.component.html',
  styleUrls: ['./totalcourse.component.scss']
})
export class TotalcourseComponent implements OnInit {
  isLogin: boolean = false
  errorMessage
  highlightId: number | string;
  profile$: Observable<Profile[]>;
  lists$: Observable<List[]>;
  courses$: Observable<Course[]>;

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private profileService: ProfileListCrudService,
    private listService: ListService,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courses$ = this.fetchAll();
    this.profile$ = this.fetchAll2();
    this.lists$ = this.fetchAll3();
    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(prams)
    });
    let params = this.route.snapshot.paramMap;
    if (params.has('course_id')) {
      this.highlightId = params.get('course_id');
    };
    if (params.has('teacher_id')) {
      this.highlightId = params.get('teacher_id');
    };
    if (params.has('student_id')) {
      this.highlightId = params.get('student_id');
    };
  }

  fetchAll(): Observable<Course[]> {
    return this.courseService.fetchAll();
  }

  fetchAll2(): Observable<Profile[]> {
    return this.profileService.fetchAll();
  }

  fetchAll3(): Observable<List[]> {
    return this.listService.fetchAll();
  }

  logout() {
    this._auth.clearStorage()
    this._router.navigate(['login']);
  }


  SubmitdDataOne() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['profile'])
  }

  SubmitdDataTwo() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['list'])
  }

  SubmitdDataThree() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['plan'])
  }

  SubmitdDataSeven() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['sumplan'])
  }

  elements: any = [
    { id: 'SWE62-206', name: 'object oriented programming ', status: 'ผ่าน' },
    { id: 'SWE62-325', name: 'Software Practice', status: 'W' },
    { id: 'SWE62-351', name: 'Software Testing', status: 'F' },
  ];

  headElements = ['รหัสวิชา', 'ชื่อรายวิชา', 'สถานะรายวิชา'];

  selected = 'option';
}
