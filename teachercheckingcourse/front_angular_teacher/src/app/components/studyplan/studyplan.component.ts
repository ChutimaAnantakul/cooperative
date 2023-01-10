import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";

import { PlanService } from "src/app/services/Plan.service";
import { Plan } from "src/app/models/Plan";
import { ListService } from "src/app/services/List.service";
import { List } from "src/app/models/List";

@Component({
  selector: 'app-studyplan',
  templateUrl: './studyplan.component.html',
  styleUrls: ['./studyplan.component.scss']
})
export class StudyplanComponent implements OnInit {
  isLogin: boolean = false
  errorMessage
  highlightId: number | string;
  profile$: Observable<Profile[]>;
  plan$: Observable<Plan[]>;
  lists$: Observable<List[]>;

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private profileService: ProfileListCrudService,
    private planService: PlanService,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.plan$ = this.fetchAll();
    this.profile$ = this.fetchAll2();
    this.lists$ = this.fetchAll3();
    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(prams)
    });

    let params = this.route.snapshot.paramMap;
    if (params.has('teacher_id')) {
      this.highlightId = params.get('teacher_id');
    };
    if (params.has('coursegroup_id')) {
      this.highlightId = params.get('coursegroup_id');
    };
    if (params.has('student_id')) {
      this.highlightId = params.get('student_id');
    };
  }

  fetchAll(): Observable<any> {
    return this.planService.fetchAll();
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

  SubmitdDataSeven() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['sumplan'])
  }

  SubmitdDataFour() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['course'])
  }

  SubmitdDataFive() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['pass'])
  }

  SubmitdDataSix() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['fault'])
  }

  elementsOne: any = [
    { id: 'SWE62-213', name: 'Database Systems', unit: '3', grade: 'B' },
    { id: 'SWE62-205', name: 'Object-Oriented Programming', unit: '3', grade: 'C+' },
    { id: 'SWE62-388', name: 'Big Data Implementation', unit: '3', grade: 'A' },
  ];

  headElementsOne = ['รหัสวิชา', 'ชื่อรายวิชา', 'หน่วยกิต', 'เกรด'];

  elementsTwo: any = [
    { name: 'หมวดวิชาศึกษาทั่วไป', toc: '40.0', pc: '-', fc: '-' },
    { name: 'หมวดวิชาเฉพาะ', toc: '128.0', pc: '114.0', fc: '14.0' },
    { name: 'หมวดวิชาเลือกเสรี', toc: '8.0', pc: '8.0', fc: '-' },
  ];

  headElementsTwo = ['หมวดวิชา', 'หน่วยกิตตามเกณฑ์', 'หน่วยกิตที่ผ่าน', 'หน่วยกิตที่ยังขาด'];
}
