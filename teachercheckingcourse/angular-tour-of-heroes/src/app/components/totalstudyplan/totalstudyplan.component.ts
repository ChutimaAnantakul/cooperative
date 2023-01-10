import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'

import { Observable } from "rxjs";
import { SumplanService } from "src/app/services/Sumplan.service";
import { Sumplan } from "src/app/models/Sumplan";
import { tap } from "rxjs/operators";

import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";

@Component({
  selector: 'app-totalstudyplan',
  templateUrl: './totalstudyplan.component.html',
  styleUrls: ['./totalstudyplan.component.scss']
})
export class TotalstudyplanComponent implements OnInit {
  isLogin: boolean = false
  errorMessage
  sumplan$: Observable<Sumplan[]>;
  highlightId: number | string;
  profile$: Observable<Profile[]>;

  data: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private sumplanService: SumplanService,
    private profileService: ProfileListCrudService
  ) { }

  ngOnInit() {
    this.sumplan$ = this.fetchAll();
    this.profile$ = this.fetchAll2();
    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(prams)
    });
    let params = this.route.snapshot.paramMap;
    if (params.has('studyplan_id')) {
      this.highlightId = params.get('studyplan_id');
    };
    if (params.has('teacher_id')) {
      this.highlightId = params.get('teacher_id');
    };
  }

  fetchAll(): Observable<any> {
    return this.sumplanService.fetchAll();
  }

  fetchAll2(): Observable<Profile[]> {
    return this.profileService.fetchAll();
  }

  post(sumplanItem: Partial<Sumplan>): void {
    const studyplan_id = (<string>sumplanItem).trim();
    if (!studyplan_id) return;

    this.sumplan$ = this.sumplanService
      .post({})
      .pipe(tap(() => (this.sumplan$ = this.fetchAll())));
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


}
