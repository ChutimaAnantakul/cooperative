import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'


@Component({
  selector: 'app-input',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  data: any = {}
  constructor(
    private router: Router,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.isUserLogin();
  }

   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
      if (res.status) {
        console.log(res)
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['profile']);
      } else {
      }
    }, err => {
      this.errorMessage = err['error'].message;
    });
  }
  isUserLogin() {
    console.log(this._auth.getUserDetails())
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  SubmitdDataOne() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['profile'])
  }

}
