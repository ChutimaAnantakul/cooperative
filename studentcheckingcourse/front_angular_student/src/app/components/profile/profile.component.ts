import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Observable } from "rxjs";
import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";
import { tap } from "rxjs/operators";
import { ListService } from "src/app/services/List.service";
import { List } from "src/app/models/List";

@Component({
  selector: 'app-new-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLogin: boolean = false
  errorMessage
  profile$: Observable<Profile[]>;
  highlightId: number | string;
  lists$: Observable<List[]>;

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private listService: ListService,
    private profileService: ProfileListCrudService
  ) { }

  ngOnInit() {
    this.lists$ = this.fetchAll();
    this.profile$ = this.fetchAll2();
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
    }
  }

  fetchAll(): Observable<List[]> {
    return this.listService.fetchAll();
  }

  fetchAll2(): Observable<Profile[]> {
    return this.profileService.fetchAll();
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
    this.router.navigate(['plan'])
  }

  SubmitdDataThree() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['course'])
  }

  SubmitdDataFour() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['pass'])
  }

  SubmitdDataFive() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['fault'])
  }

}
