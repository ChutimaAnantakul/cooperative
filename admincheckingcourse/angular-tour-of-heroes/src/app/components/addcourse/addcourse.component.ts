import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Admin } from "src/app/models/Admin";
import { SumplanService } from "src/app/services/AdminProfile.service";

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
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

  selected = 'option';

}
