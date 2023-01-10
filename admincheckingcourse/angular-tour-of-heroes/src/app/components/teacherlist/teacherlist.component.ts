import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ListService } from "src/app/services/List.service";
import { List } from "src/app/models/List";
import { tap } from "rxjs/operators";

import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";
import { SumplanService } from "src/app/services/AdminProfile.service";
import { Admin } from "src/app/models/Admin";

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.scss']
})

export class TeacherlistComponent implements OnInit {

  isLogin: boolean = false
  errorMessage
  lists$: Observable<List[]>;
  highlightId: number | string;
  profile$: Observable<Profile[]>;
  admin$: Observable<Admin[]>;

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _router: Router,
    private listService: ListService,
    private profileService: ProfileListCrudService,
    private adminService: SumplanService
  ) { }

  ngOnInit() {
    this.lists$ = this.fetchAll();
    this.profile$ = this.fetchAll2();
    this.admin$ = this.fetchAll3();
    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(prams)
    });
    let params = this.route.snapshot.paramMap;
    if (params.has('student_id')) {
      this.highlightId = params.get('student_id');
    };
    if (params.has('teacher_id')) {
      this.highlightId = params.get('teacher_id');
    };
    if (params.has('admin_id')) {
      this.highlightId = params.get('admin_id');
    };
  }

  fetchAll(): Observable<List[]> {
    return this.listService.fetchAll();
  }

  fetchAll2(): Observable<Profile[]> {
    return this.profileService.fetchAll();
  }

  fetchAll3(): Observable<Admin[]> {
    return this.adminService.fetchAll();
  }

  logout() {
    this._router.navigate(['login']);
  }

  SubmitdDataO() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['profile'])
  }

  SubmitdDataOne() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['plan'])
  }

  SubmitdDataTwo() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['course'])
  }

  SubmitdDataThree() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['stlist'])
  }

  SubmitdDataFour() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['tlist'])
  }

  SubmitdDataEight() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['addt'])
  }

  elements: any = [
    { id: '1', name: 'ผศ.ดร.ฐิมาพร เพชรแก้ว', position: 'รองผู้อำนวยการ', email: 'pthimapo@wu.ac.th', tel: '075672275', studentcode: '62' },
  ];

  headElements = ['รหัสอาจารย์', 'ชื่อ - สกุลอาจารย์', 'ตำแหน่ง', 'อีเมล', 'เบอร์โทรศัพท์', 'ที่ปรึกษานักศึกษารหัส'];

  selected = 'option';
}
