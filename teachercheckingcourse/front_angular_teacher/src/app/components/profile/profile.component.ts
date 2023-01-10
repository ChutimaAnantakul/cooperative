import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'

import { Observable } from "rxjs";
import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";
import { tap } from "rxjs/operators";

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

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private profileService: ProfileListCrudService
  ) { }

  ngOnInit() {
    this.profile$ = this.fetchAll();
    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(prams)
    });
    let params = this.route.snapshot.paramMap;
    if (params.has('teacher_id')) {
      this.highlightId = params.get('teacher_id');
    }
  }

  fetchAll(): Observable<Profile[]> {
    return this.profileService.fetchAll();
  }

  // post(profileItem: Partial<Profile>): void {
  //   const teacher_id = (<string>profileItem).trim();
  //   if (!teacher_id) return;

  //   this.profile$ = this.profileService
  //     .post({})
  //     .pipe(tap(() => (this.profile$ = this.fetchAll())));
  // }

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

}
