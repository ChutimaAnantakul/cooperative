import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Admin } from "src/app/models/Admin";
import { SumplanService } from "src/app/services/AdminProfile.service";

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.scss']
})
export class AddteacherComponent implements OnInit {

  isLogin: boolean = false
  errorMessage
  admin$: Observable<Admin[]>;
  highlightId: number | string;

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _router: Router,
    private adminService: SumplanService
  ) { }

  ngOnInit() {
    this.admin$ = this.fetchAll();
    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(prams)
    });
    let params = this.route.snapshot.paramMap;
    if (params.has('admin_id')) {
      this.highlightId = params.get('admin_id');
    }
  }

  fetchAll(): Observable<Admin[]> {
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

  elements: any = [
    { id: '1. หมวดวิชาศึกษาทั่วไป', },
    { code: 'COE62 - 214', name: 'Microprocessors and Embedded Systems', credit: '4' },
    { code: 'GEN61- 129', name: 'English for Media and Communication', credit: '3' },
    { code: 'MAT61-111', name: 'Applied Statistics', credit: '4' },
    { id: '2. หมวดวิชาเฉพาะ', },
    { code: 'SWE62-206', name: 'Back-End Web Programming', credit: '3' },
    { code: 'SWE62-233', name: 'Object-Oriented Analysis and Design', credit: '3' },
    { code: 'SWE62-261', name: 'Software Process and Process Improvement', credit: '2' },
    { id: '3. หมวดวิชาเลือกเสรี', },
  ];

  headElements = ['หมวดวิชา', 'รหัสวิชา', 'ชื่อรายวิชา', 'หน่วยกิต'];

  selected = 'option';
}
