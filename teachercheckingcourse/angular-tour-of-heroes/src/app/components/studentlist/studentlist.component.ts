import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'

import { Observable } from "rxjs";
import { ListService } from "src/app/services/List.service";
import { List } from "src/app/models/List";
import { tap } from "rxjs/operators";

import { ProfileListCrudService } from "src/app/services/profile-list-crud.service";
import { Profile } from "src/app/models/Profile";

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})

export class StudentlistComponent implements OnInit {
  isLogin: boolean = false
  errorMessage
  lists$: Observable<List[]>;
  highlightId: number | string;
  profile$: Observable<Profile[]>;

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
    };
  }

  fetchAll(): Observable<List[]> {
    return this.listService.fetchAll();
  }

  fetchAll2(): Observable<Profile[]> {
    return this.profileService.fetchAll();
  }

  post(listItem: Partial<List>): void {
    const student_id = (<string>listItem).trim();
    if (!student_id) return;

    this.lists$ = this.listService
      .post({})
      .pipe(tap(() => (this.lists$ = this.fetchAll())));
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

  SubmitdDataThree() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['plan'])
  }

  elements: any = [
    { id: 1, code: '62100425', name: 'นายกลศ เหนือคลอง', schoolof: 'สารสนเทศศาสตร์', course: 'วิศวกรรมซอฟต์แวร์', bul: ' ' },
    { id: 1, code: '62100896', name: 'นายกิตติพงษ์ ทูรย์ภานุประพันธ์', schoolof: 'สารสนเทศศาสตร์', course: 'วิศวกรรมซอฟต์แวร์', bul: ' ' },
    { id: 1, code: '62101266', name: 'นายจักริน แสงโชติ', schoolof: 'สารสนเทศศาสตร์', course: 'วิศวกรรมซอฟต์แวร์', bul: ' ' },
  ];

  headElements = ['ลำดับ', 'รหัสนักศึกษา', 'ชื่อ-สกุล', 'สำนักวิชา', 'หลักสูตร', ' '];

  selected = 'option';
}
